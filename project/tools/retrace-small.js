// Small-size cut of the logo: drop the outer hairline, widen the inner gap stroke, fewer speed lines, no ™, filled dial ticks.
// mode 'light': ink = black letters, gap = white. mode 'dark': ink = white letters, gap = black.
async function smallCut(src, mode, o = {}) {
  const VW = 2976, VH = 985, P = 4, S = 1, w = VW + 2 * P, h = VH + 2 * P, N = w * h;
  const GAP = o.gap || 13, NEEDLE = o.needle || 8, BARS = o.bars || 4;
  const img = new Image();
  img.src = URL.createObjectURL(new Blob([src.replace(/<metadata>[\s\S]*?<\/metadata>/, '')], { type: 'image/svg+xml' }));
  await img.decode();
  const cv = createCanvas(w, h), cx = cv.getContext('2d');
  cx.drawImage(img, P, P, VW, VH);
  const px = cx.getImageData(0, 0, w, h).data;
  // 0 none, 1 black, 2 red, 3 white
  const cls = new Uint8Array(N);
  for (let i = 0; i < N; i++) {
    const q = i * 4; if (px[q + 3] < 128) continue;
    const r = px[q], g = px[q + 1], b = px[q + 2], ch = Math.max(r, g, b) - Math.min(r, g, b);
    cls[i] = ch > 90 && r > g ? 2 : (r + g + b > 380 ? 3 : 1);
  }
  const INK = mode === 'light' ? 1 : 3, GAPC = mode === 'light' ? 3 : 1;
  const mk = f => { const m = new Uint8Array(N); for (let i = 0; i < N; i++) m[i] = f(i) ? 1 : 0; return m; };
  function dil(m, R) {
    const a = new Uint8Array(N), b = new Uint8Array(N);
    for (let y = 0; y < h; y++) { let s = 0; const row = y * w;
      for (let x = -R; x < w; x++) { if (x + R < w) s += m[row + x + R]; if (x - R - 1 >= 0) s -= m[row + x - R - 1]; if (x >= 0) a[row + x] = s > 0 ? 1 : 0; } }
    for (let x = 0; x < w; x++) { let s = 0;
      for (let y = -R; y < h; y++) { if (y + R < h) s += a[(y + R) * w + x]; if (y - R - 1 >= 0) s -= a[(y - R - 1) * w + x]; if (y >= 0) b[y * w + x] = s > 0 ? 1 : 0; } }
    return b;
  }
  function dilOct(m, R) { let a = m;
    for (let r = 0; r < R; r++) { const b = new Uint8Array(N);
      if (r % 2 === 0) { for (let y = 1; y < h - 1; y++) for (let x = 1; x < w - 1; x++) { const i = y * w + x; b[i] = a[i] | a[i - 1] | a[i + 1] | a[i - w] | a[i + w]; } }
      else { for (let y = 1; y < h - 1; y++) for (let x = 1; x < w - 1; x++) { const i = y * w + x; b[i] = a[i] | a[i - 1] | a[i + 1] | a[i - w] | a[i + w] | a[i - w - 1] | a[i - w + 1] | a[i + w - 1] | a[i + w + 1]; } }
      a = b; } return a; }
  const eroOct = (m, R) => { const inv = mk(i => !m[i]); const d = dilOct(inv, R); return mk(i => !d[i]); };
  function reconstruct(m, seed) { const out = new Uint8Array(N), st = [];
    for (let i = 0; i < N; i++) if (seed[i] && m[i] && !out[i]) { out[i] = 1; st.push(i);
      while (st.length) { const j = st.pop(); for (const k of [j - 1, j + 1, j - w, j + w]) if (k >= 0 && k < N && m[k] && !out[k]) { out[k] = 1; st.push(k); } } }
    return out; }
  const ero = (m, R) => { const inv = mk(i => !m[i]); const d = dil(inv, R); return mk(i => !d[i]); };
  // ™ sits top-right, above the speed lines
  const isTM = i => { const y = ((i / w) | 0) - P, x = (i % w) - P; return x > 2620 && y < 300; };
  if (o.medium) { // keep every element; make outer outline and inner stroke each ~1px at 30px height
    const OUT = o.out || 22, WID = o.widen || 9;
    const inkRaw = mk(i => cls[i] === INK), redRaw = mk(i => cls[i] === 2);
    const nearInk = dilOct(inkRaw, OUT), nearRed = dilOct(redRaw, 18);
    const nearTM = i => { const y = ((i / w) | 0) - P, x = (i % w) - P; return x > 2590 && y < 340; };
    const grow = mk(i => cls[i] === 0 && nearInk[i] && !nearRed[i] && !nearTM(i));
    const gapW = dilOct(mk(i => cls[i] === GAPC), WID);
    const inkM0 = mk(i => (inkRaw[i] || grow[i]) && (!gapW[i] || isTM(i)));
    const inkM = mk(i => isTM(i) ? inkM0[i] : 0); { const r = reconstruct(inkM0, eroOct(inkM0, 6)); for (let i = 0; i < N; i++) if (r[i]) inkM[i] = 1; }
    const needleW = dilOct(mk(i => cls[i] === GAPC && (i % w) < 1000 + P && (i % w) > 200 + P), 5);
    const redM = mk(i => redRaw[i] && !needleW[i]);
    const baseM = mk(i => cls[i] !== 0 || grow[i]);
    const Ls = [[mode === 'light' ? '#FFFFFF' : '#24211D', baseM], ['#E81B21', redM], [mode === 'light' ? '#24211D' : '#FFFFFF', inkM]];
    return '<svg xmlns="http://www.w3.org/2000/svg" style="display:block" viewBox="0 0 ' + VW + ' ' + VH + '" fill-rule="evenodd">' + Ls.map(([c, m]) => '<path fill="' + c + '" d="' + trace(m) + '"/>').join('') + '</svg>';
  }
  const gapM = mk(i => cls[i] === GAPC);
  const gapWide = dilOct(gapM, GAP);
  const ink0 = mk(i => cls[i] === INK && !gapWide[i] && !isTM(i));
  const OPEN = o.open || 9; const ink = reconstruct(ink0, eroOct(ink0, OPEN));
  // red: split dial / speed lines
  const DIAL_X = 1000 + P;
  const red = mk(i => cls[i] === 2);
  const dialRaw = mk(i => red[i] && (i % w) < DIAL_X);
  const dialClosed = eroOct(dilOct(dialRaw, 24), 24); // fill tick notches
  const needle = dilOct(mk(i => cls[i] === GAPC && (i % w) < DIAL_X && (i % w) > 200 + P), NEEDLE);
  const dial = mk(i => (dialClosed[i] && (cls[i] === 2 || cls[i] === 0)) && !needle[i]);
  // speed lines: measure original bars, redraw as BARS slanted bars over the same band
  const rows = []; for (let y = 0; y < h; y++) { let mx = -1; for (let x = w - 1; x >= DIAL_X; x--) { const i = y * w + x; if (red[i] && !isTM(i)) { mx = x; break; } } rows.push(mx); }
  let y0 = rows.findIndex(v => v >= 0), y1 = h - 1 - [...rows].reverse().findIndex(v => v >= 0);
  // fit right edge: x = a + k*y over rows that have red
  let sx = 0, sy = 0, sxy = 0, syy = 0, n = 0; for (let y = y0; y <= y1; y++) if (rows[y] >= 0) { sx += rows[y]; sy += y; sxy += rows[y] * y; syy += y * y; n++; }
  const k = (n * sxy - sx * sy) / (n * syy - sy * sy), a0 = (sx - k * sy) / n;
  const band = y1 - y0 + 1, bar = band / (BARS + (BARS - 1) * 0.8), gp = bar * 0.8;
  const inBar = y => { const t = y - y0; if (t < 0 || t > band) return false; const p = t % (bar + gp); return p < bar; };
  // speed lines must not cross into the letters: only fill pixels to the right of the last ink/gap run of the letter "в"
  const leftLimit = new Int32Array(h).fill(w);
  for (let y = y0; y <= y1; y++) { for (let x = Math.round(a0 + k * y); x >= DIAL_X; x--) { const c = cls[y * w + x]; if (c === 1 || c === 3) { leftLimit[y] = x + 1; break; } } }
  const lines2 = mk(i => { const y = (i / w) | 0, x = i % w; return x >= DIAL_X && !isTM(i) && inBar(y) && x <= a0 + k * y && x >= leftLimit[y]; });
  const redM = mk(i => dial[i] || lines2[i]);
  // base: every opaque pixel in the gap colour, plus filled ticks and new bars
  const base = mk(i => (cls[i] !== 0 && !isTM(i)) || dial[i] || lines2[i]);
  const layers = [
    { hex: mode === 'light' ? '#FFFFFF' : '#24211D', m: base },
    { hex: '#E81B21', m: redM },
    { hex: mode === 'light' ? '#24211D' : '#FFFFFF', m: ink },
  ];
  const out = layers.map(L => '<path fill="' + L.hex + '" d="' + trace(L.m) + '"/>').join('');
  return '<svg xmlns="http://www.w3.org/2000/svg" style="display:block" viewBox="0 0 ' + VW + ' ' + VH + '" fill-rule="evenodd">' + out + '</svg>';

  function trace(m) {
    const hs = new Uint8Array(N), v = new Uint8Array(N);
    for (let y = 0; y < h; y++) for (let x = 1; x < w - 1; x++) { const i = y * w + x; hs[i] = m[i - 1] + m[i] + m[i + 1]; }
    for (let y = 1; y < h - 1; y++) for (let x = 0; x < w; x++) { const i = y * w + x; v[i] = hs[i - w] + hs[i] + hs[i + w]; }
    const ISO = 4.5, next = new Int32Array(2 * N).fill(-1);
    for (let y = 0; y < h - 1; y++) for (let x = 0; x < w - 1; x++) {
      const i = y * w + x, tl = v[i] > ISO, tr = v[i + 1] > ISO, br = v[i + w + 1] > ISO, bl = v[i + w] > ISO;
      const c = (tl << 3) | (tr << 2) | (br << 1) | bl; if (c === 0 || c === 15) continue;
      const T = i, B = i + w, L = N + i, Rr = N + i + 1, s = (p, q) => { next[p] = q; };
      switch (c) {
        case 8: s(L, T); break; case 4: s(T, Rr); break; case 2: s(Rr, B); break; case 1: s(B, L); break;
        case 7: s(T, L); break; case 11: s(Rr, T); break; case 13: s(B, Rr); break; case 14: s(L, B); break;
        case 12: s(L, Rr); break; case 3: s(Rr, L); break; case 6: s(T, B); break; case 9: s(B, T); break;
        case 10: { const ce = (v[i] + v[i + 1] + v[i + w] + v[i + w + 1]) / 4 > ISO; if (ce) { s(Rr, T); s(L, B); } else { s(L, T); s(Rr, B); } break; }
        case 5: { const ce = (v[i] + v[i + 1] + v[i + w] + v[i + w + 1]) / 4 > ISO; if (ce) { s(T, L); s(B, Rr); } else { s(T, Rr); s(B, L); } break; }
      }
    }
    const pt = e => {
      if (e < N) { const y = (e / w) | 0, x = e - y * w, a = v[e], b = v[e + 1]; return [x + (ISO - a) / (b - a) - P, y - P]; }
      const kk = e - N, y = (kk / w) | 0, x = kk - y * w, a = v[kk], b = v[kk + w]; return [x - P, y + (ISO - a) / (b - a) - P];
    };
    let out = '';
    for (let e0 = 0; e0 < 2 * N; e0++) {
      if (next[e0] < 0) continue;
      const loop = []; let e = e0;
      while (next[e] >= 0) { loop.push(pt(e)); const nn = next[e]; next[e] = -1; e = nn; }
      let A = 0; for (let i = 0; i < loop.length; i++) { const p = loop[i], q = loop[(i + 1) % loop.length]; A += p[0] * q[1] - q[0] * p[1]; }
      if (Math.abs(A / 2) < 300) continue;
      const sp = dp(loop, 0.7); if (sp.length < 3) continue;
      let X0 = Math.round(sp[0][0]), Y0 = Math.round(sp[0][1]); const parts = [];
      for (let i = 1; i < sp.length; i++) { const X = Math.round(sp[i][0]), Y = Math.round(sp[i][1]); if (X === X0 && Y === Y0) continue; parts.push(X - X0, Y - Y0); X0 = X; Y0 = Y; }
      out += 'M' + Math.round(sp[0][0]) + ' ' + Math.round(sp[0][1]) + 'l' + parts.join(' ').replace(/ -/g, '-') + 'z';
    }
    return out;
  }
  function dp(pts, TOL) {
    const n = pts.length; let far = 0, fd = -1;
    for (let i = 1; i < n; i++) { const d = (pts[i][0] - pts[0][0]) ** 2 + (pts[i][1] - pts[0][1]) ** 2; if (d > fd) { fd = d; far = i; } }
    const keep = new Uint8Array(n); keep[0] = keep[far] = 1; const st = [[0, far], [far, n]];
    while (st.length) { const [a, b] = st.pop(), pa = pts[a], pb = pts[b % n], dx = pb[0] - pa[0], dy = pb[1] - pa[1], L = Math.hypot(dx, dy) || 1e-9;
      let md = 0, mi = -1; for (let i = a + 1; i < b; i++) { const d = Math.abs(dy * (pts[i][0] - pa[0]) - dx * (pts[i][1] - pa[1])) / L; if (d > md) { md = d; mi = i; } }
      if (md > TOL) { keep[mi] = 1; st.push([a, mi], [mi, b]); } }
    return pts.filter((_, i) => keep[i]);
  }
}
