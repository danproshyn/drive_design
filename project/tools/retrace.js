// Rebuild a traced SVG logo as one clean path per colour, stacked so no two edges coincide.
// palette: [{hex, map:[hex,...]}] in paint order (bottom first). Lower layers extend D units under upper ones.
async function retrace(src, palette, opts = {}) {
  const S = opts.scale || 2, D = opts.under || 8, TOL = opts.tol || 0.6, VW = 2976, VH = 985, P = 3;
  const t0 = Date.now();
  const svgText = src.replace(/<metadata>[\s\S]*?<\/metadata>/, '');
  const img = new Image();
  img.src = URL.createObjectURL(new Blob([svgText], { type: 'image/svg+xml' }));
  await img.decode();
  const w = VW * S + 2 * P, h = VH * S + 2 * P, N = w * h;
  const cv = createCanvas(w, h), cx = cv.getContext('2d');
  cx.drawImage(img, P, P, VW * S, VH * S);
  const px = cx.getImageData(0, 0, w, h).data;
  const ref = [];
  palette.forEach((p, i) => p.map.forEach(hx => { const r = parseInt(hx.slice(1, 3), 16), g = parseInt(hx.slice(3, 5), 16), b = parseInt(hx.slice(5, 7), 16); ref.push([r, g, b, i + 1, Math.max(r, g, b) - Math.min(r, g, b)]); }));
  let cls = new Uint8Array(N);
  for (let i = 0; i < N; i++) {
    const o = i * 4; if (px[o + 3] < 128) continue;
    let best = 0, bd = 1e9;
    const ch = Math.max(px[o], px[o + 1], px[o + 2]) - Math.min(px[o], px[o + 1], px[o + 2]);
    for (const r of ref) { const d = (px[o] - r[0]) ** 2 + (px[o + 1] - r[1]) ** 2 + (px[o + 2] - r[2]) ** 2 + 4 * (ch - r[4]) ** 2; if (d < bd) { bd = d; best = r[3]; } }
    cls[i] = best;
  }
  // 3x3 mode filter: removes 1px seam lines from the source render
  const K = palette.length + 1, cnt = new Uint8Array(K);
  const c2 = new Uint8Array(N);
  for (let y = 1; y < h - 1; y++) for (let x = 1; x < w - 1; x++) {
    const i = y * w + x; cnt.fill(0);
    for (let dy = -w; dy <= w; dy += w) for (let dx = -1; dx <= 1; dx++) cnt[cls[i + dy + dx]]++;
    let b = cls[i]; for (let k = 0; k < K; k++) if (cnt[k] > cnt[b]) b = k;
    c2[i] = b;
  }
  cls = c2;
  const R = Math.round(D * S);
  function dilate(m) { // square dilation, separable running count
    const a = new Uint8Array(N), b = new Uint8Array(N);
    for (let y = 0; y < h; y++) { let s = 0; const row = y * w;
      for (let x = -R; x < w; x++) { if (x + R < w) s += m[row + x + R]; if (x - R - 1 >= 0) s -= m[row + x - R - 1]; if (x >= 0) a[row + x] = s > 0 ? 1 : 0; } }
    for (let x = 0; x < w; x++) { let s = 0;
      for (let y = -R; y < h; y++) { if (y + R < h) s += a[(y + R) * w + x]; if (y - R - 1 >= 0) s -= a[(y - R - 1) * w + x]; if (y >= 0) b[y * w + x] = s > 0 ? 1 : 0; } }
    return b;
  }
  const layers = [];
  for (let li = 0; li < palette.length; li++) {
    const id = li + 1, own = new Uint8Array(N);
    for (let i = 0; i < N; i++) own[i] = cls[i] === id ? 1 : 0;
    const dil = li < palette.length - 1 ? dilate(own) : null;
    const m = new Uint8Array(N);
    for (let i = 0; i < N; i++) m[i] = own[i] || (dil && dil[i] && cls[i] > id) ? 1 : 0;
    // 3x3 box sum (0..9), iso at 4.5
    const hs = new Uint8Array(N), v = new Uint8Array(N);
    for (let y = 0; y < h; y++) for (let x = 1; x < w - 1; x++) { const i = y * w + x; hs[i] = m[i - 1] + m[i] + m[i + 1]; }
    for (let y = 1; y < h - 1; y++) for (let x = 0; x < w; x++) { const i = y * w + x; v[i] = hs[i - w] + hs[i] + hs[i + w]; }
    layers.push({ hex: palette[li].hex, d: contours(v) });
  }
  log('ms', Date.now() - t0);
  function contours(v) {
    const ISO = 4.5, next = new Int32Array(2 * N).fill(-1);
    const Hh = (x, y) => y * w + x, Vv = (x, y) => N + y * w + x;
    for (let y = 0; y < h - 1; y++) for (let x = 0; x < w - 1; x++) {
      const i = y * w + x, tl = v[i] > ISO, tr = v[i + 1] > ISO, br = v[i + w + 1] > ISO, bl = v[i + w] > ISO;
      const c = (tl << 3) | (tr << 2) | (br << 1) | bl;
      if (c === 0 || c === 15) continue;
      const T = Hh(x, y), B = Hh(x, y + 1), L = Vv(x, y), Rr = Vv(x + 1, y);
      const s = (a, b) => { next[a] = b; };
      switch (c) {
        case 8: s(L, T); break; case 4: s(T, Rr); break; case 2: s(Rr, B); break; case 1: s(B, L); break;
        case 7: s(T, L); break; case 11: s(Rr, T); break; case 13: s(B, Rr); break; case 14: s(L, B); break;
        case 12: s(L, Rr); break; case 3: s(Rr, L); break; case 6: s(T, B); break; case 9: s(B, T); break;
        case 10: { const ce = (v[i] + v[i + 1] + v[i + w] + v[i + w + 1]) / 4 > ISO; if (ce) { s(Rr, T); s(L, B); } else { s(L, T); s(Rr, B); } break; }
        case 5: { const ce = (v[i] + v[i + 1] + v[i + w] + v[i + w + 1]) / 4 > ISO; if (ce) { s(T, L); s(B, Rr); } else { s(T, Rr); s(B, L); } break; }
      }
    }
    const pt = e => {
      if (e < N) { const y = (e / w) | 0, x = e - y * w, a = v[e], b = v[e + 1]; return [(x + (ISO - a) / (b - a) - P) / S, (y - P) / S]; }
      const k = e - N, y = (k / w) | 0, x = k - y * w, a = v[k], b = v[k + w]; return [(x - P) / S, (y + (ISO - a) / (b - a) - P) / S];
    };
    let out = '';
    for (let e0 = 0; e0 < 2 * N; e0++) {
      if (next[e0] < 0) continue;
      const loop = []; let e = e0;
      while (next[e] >= 0) { loop.push(pt(e)); const n = next[e]; next[e] = -1; e = n; }
      if (loop.length < 3) continue;
      let A = 0; for (let i = 0; i < loop.length; i++) { const p = loop[i], q = loop[(i + 1) % loop.length]; A += p[0] * q[1] - q[0] * p[1]; }
      if (Math.abs(A / 2) < 6) continue;
      const simp = dp(loop);
      if (simp.length < 3) continue;
      let px0 = Math.round(simp[0][0]), py0 = Math.round(simp[0][1]);
      let sOut = 'M' + px0 + ' ' + py0 + 'l';
      const parts = [];
      for (let i = 1; i < simp.length; i++) { const X = Math.round(simp[i][0]), Y = Math.round(simp[i][1]); if (X === px0 && Y === py0) continue; parts.push(X - px0, Y - py0); px0 = X; py0 = Y; }
      sOut += parts.join(' ').replace(/ -/g, '-') + 'z';
      out += sOut;
    }
    return out;
  }
  function dp(pts) { // closed-loop Douglas-Peucker
    const n = pts.length; let far = 0, fd = -1;
    for (let i = 1; i < n; i++) { const d = (pts[i][0] - pts[0][0]) ** 2 + (pts[i][1] - pts[0][1]) ** 2; if (d > fd) { fd = d; far = i; } }
    const keep = new Uint8Array(n); keep[0] = keep[far] = 1;
    const stack = [[0, far], [far, n]];
    while (stack.length) {
      const [a, b] = stack.pop(); const pa = pts[a], pb = pts[b % n];
      const dx = pb[0] - pa[0], dy = pb[1] - pa[1], L = Math.hypot(dx, dy) || 1e-9;
      let md = 0, mi = -1;
      for (let i = a + 1; i < b; i++) { const d = Math.abs(dy * (pts[i][0] - pa[0]) - dx * (pts[i][1] - pa[1])) / L; if (d > md) { md = d; mi = i; } }
      if (md > TOL) { keep[mi] = 1; stack.push([a, mi], [mi, b]); }
    }
    return pts.filter((_, i) => keep[i]);
  }
  return '<svg xmlns="http://www.w3.org/2000/svg" style="display:block" viewBox="0 0 ' + VW + ' ' + VH + '" fill-rule="evenodd">' +
    layers.map(l => '<path fill="' + l.hex + '" d="' + l.d + '"/>').join('') + '</svg>';
}
