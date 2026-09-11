/* Прототипний кошик: одне джерело правди для кнопок «В кошик» на всіх сторінках.
 * Ключ рядка — артикул + пропозиція, значення — кількість.
 * Скрипт ідемпотентний: сторінка й кожна кнопка вантажать його, а виконується він один раз —
 * інакше друге виконання підмінило б сховище й загубило вже наявних підписників.
 * Сповіщення йде подією на window, а не замиканням на конкретному обʼєкті. */
if (!window.DriveCart) {
  window.DriveCart = (function () {
    var KEY = 'drive.cart.v1';
    var EVENT = 'drive-cart-change';

    function read() {
      try { return JSON.parse(localStorage.getItem(KEY)) || {}; } catch (e) { return {}; }
    }
    function notify() { window.dispatchEvent(new CustomEvent(EVENT)); }
    function write(map) {
      try { localStorage.setItem(KEY, JSON.stringify(map)); } catch (e) {}
      notify();
    }

    /* Інша вкладка з тим самим кошиком. */
    window.addEventListener('storage', function (event) {
      if (event.key === KEY) notify();
    });

    return {
      event: EVENT,
      all: read,
      qty: function (id) { return read()[id] || 0; },
      units: function () {
        var map = read(), total = 0;
        for (var key in map) total += map[key];
        return total;
      },
      lines: function () { return Object.keys(read()).length; },
      set: function (id, qty) {
        var map = read();
        if (qty > 0) map[id] = qty; else delete map[id];
        write(map);
      },
      subscribe: function (fn) {
        window.addEventListener(EVENT, fn);
        return function () { window.removeEventListener(EVENT, fn); };
      }
    };
  })();
}
