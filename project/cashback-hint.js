/*
 * Підказка про кешбек у службовій смузі шапки.
 *
 * Обіцянку «Отримуйте до 10% кешбеку» малює SiteHeader з дизайн-системи — слота для
 * пояснення в ньому немає, тому воно дописується сюди: до тексту додається знак «?»,
 * а підказка зʼявляється на ховер будь-де в рядку — і на тексті, і на знаку.
 */
(function () {
  var TEXT =
    'Кешбек нараховуємо бонусами з кожної позиції. ' +
    'Ви зможете їх витратити на наступне замовлення.';

  var tip = null;

  function ensureTip() {
    if (tip && tip.isConnected) return tip;
    tip = document.createElement('div');
    tip.setAttribute('role', 'tooltip');
    tip.textContent = TEXT;
    tip.style.cssText = [
      'position:fixed',
      'z-index:200',
      'max-width:340px',
      'padding:9px 12px',
      'border-radius:6px',
      'background:var(--ink-800, #24211d)',
      'color:#fff',
      'font-family:var(--font-sans, system-ui)',
      'font-size:12px',
      'font-weight:400',
      'line-height:1.4',
      'text-wrap:pretty',
      'box-shadow:0 8px 20px rgb(36 33 29 / .28)',
      'pointer-events:none',
      'opacity:0',
      'transition:opacity 120ms cubic-bezier(.2,.8,.3,1)',
    ].join(';');
    document.body.appendChild(tip);
    return tip;
  }

  function show(host) {
    var el = ensureTip();
    var r = host.getBoundingClientRect();
    el.style.left = Math.max(8, Math.min(r.left, window.innerWidth - 356)) + 'px';
    el.style.top = Math.round(r.bottom) + 8 + 'px';
    el.style.opacity = '1';
  }

  function hide() {
    if (tip) tip.style.opacity = '0';
  }

  function enhance(host) {
    if (!host || host.dataset.cbHint === 'on') return;
    host.dataset.cbHint = 'on';
    host.style.cursor = 'help';
    host.tabIndex = 0;

    var q = document.createElement('span');
    q.textContent = '?';
    q.setAttribute('aria-hidden', 'true');
    q.style.cssText = [
      'display:inline-flex',
      'align-items:center',
      'justify-content:center',
      'width:14px',
      'height:14px',
      'margin-left:2px',
      'border:1px solid rgb(255 255 255 / .4)',
      'border-radius:999px',
      'font-size:10px',
      'line-height:1',
      'opacity:.75',
    ].join(';');
    host.appendChild(q);

    host.addEventListener('mouseenter', function () { show(host); });
    host.addEventListener('mouseleave', hide);
    host.addEventListener('focus', function () { show(host); });
    host.addEventListener('blur', hide);
    host.setAttribute('aria-label', host.textContent.replace('?', '').trim() + '. ' + TEXT);
  }

  function scan() {
    var nodes = document.querySelectorAll('.ds-utilitybar__promo, .ds-headermenu__promo');
    for (var i = 0; i < nodes.length; i += 1) enhance(nodes[i]);
  }

  function start() {
    scan();
    /* Шапку малює React — елемент зʼявляється пізніше і може перестворитися. */
    new MutationObserver(scan).observe(document.body, { childList: true, subtree: true });
    window.addEventListener('scroll', hide, true);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start);
  else start();
})();
