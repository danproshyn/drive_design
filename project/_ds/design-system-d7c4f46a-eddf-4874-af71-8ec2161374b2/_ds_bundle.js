/* @ds-bundle: {"format":4,"namespace":"DesignSystem_d7c4f4","components":[{"name":"CashbackBanner","sourcePath":"components/catalog/CashbackBanner.jsx"},{"name":"CategoryTree","sourcePath":"components/catalog/CategoryTree.jsx"},{"name":"FacetGroup","sourcePath":"components/catalog/FacetGroup.jsx"},{"name":"GarageCard","sourcePath":"components/catalog/GarageCard.jsx"},{"name":"OfferPartRow","sourcePath":"components/catalog/OfferPartRow.jsx"},{"name":"OfferRow","sourcePath":"components/catalog/OfferRow.jsx"},{"name":"PartCard","sourcePath":"components/catalog/PartCard.jsx"},{"name":"PartThumb","sourcePath":"components/catalog/PartThumb.jsx"},{"name":"PriceTag","sourcePath":"components/catalog/PriceTag.jsx"},{"name":"ShipDate","sourcePath":"components/catalog/ShipDate.jsx"},{"name":"StockLabel","sourcePath":"components/catalog/StockLabel.jsx"},{"name":"VehicleFunnel","sourcePath":"components/catalog/VehicleFunnel.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Chip","sourcePath":"components/core/Chip.jsx"},{"name":"EmptyState","sourcePath":"components/core/EmptyState.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Notice","sourcePath":"components/core/Notice.jsx"},{"name":"Skeleton","sourcePath":"components/core/Skeleton.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"QuantityStepper","sourcePath":"components/forms/QuantityStepper.jsx"},{"name":"SearchField","sourcePath":"components/forms/SearchField.jsx"},{"name":"SearchSuggests","sourcePath":"components/forms/SearchField.jsx"},{"name":"SearchSuggestRow","sourcePath":"components/forms/SearchField.jsx"},{"name":"SelectField","sourcePath":"components/forms/SelectField.jsx"},{"name":"TextField","sourcePath":"components/forms/TextField.jsx"},{"name":"Breadcrumbs","sourcePath":"components/navigation/Breadcrumbs.jsx"},{"name":"Pager","sourcePath":"components/navigation/Pager.jsx"},{"name":"SiteFooter","sourcePath":"components/navigation/SiteFooter.jsx"},{"name":"SiteHeader","sourcePath":"components/navigation/SiteHeader.jsx"},{"name":"TabStrip","sourcePath":"components/navigation/TabStrip.jsx"}],"sourceHashes":{"components/catalog/CashbackBanner.jsx":"96715e4f1d47","components/catalog/CategoryTree.jsx":"718e2fc0d381","components/catalog/FacetGroup.jsx":"ee4e744166a6","components/catalog/GarageCard.jsx":"af6cb4cdc6dd","components/catalog/OfferPartRow.jsx":"1eb9a8b8729f","components/catalog/OfferRow.jsx":"88cab4a8f8b6","components/catalog/PartCard.jsx":"f43c3000427a","components/catalog/PartThumb.jsx":"51328e8b065c","components/catalog/PriceTag.jsx":"2866bb6687b1","components/catalog/ShipDate.jsx":"e40ec9c53502","components/catalog/StockLabel.jsx":"3de950935a34","components/catalog/VehicleFunnel.jsx":"3fe23a0c0737","components/core/Badge.jsx":"277799a372b7","components/core/Button.jsx":"2874a6d8b103","components/core/Chip.jsx":"d55f59961903","components/core/EmptyState.jsx":"bc020f70eb01","components/core/Icon.jsx":"8c25eed8e4f6","components/core/IconButton.jsx":"ec93bf11d784","components/core/Notice.jsx":"f79c1a84a964","components/core/Skeleton.jsx":"c7efd99368c7","components/forms/Checkbox.jsx":"941cb48e0955","components/forms/QuantityStepper.jsx":"3aba2934a42b","components/forms/SearchField.jsx":"ca72465dd2f6","components/forms/SelectField.jsx":"83113ffd0575","components/forms/TextField.jsx":"338a48f06ad7","components/navigation/Breadcrumbs.jsx":"4e5a5f029319","components/navigation/Pager.jsx":"10591ad4cf84","components/navigation/SiteFooter.jsx":"eab38a6a7e8a","components/navigation/SiteHeader.jsx":"6bb6b3019897","components/navigation/TabStrip.jsx":"06e11a0d5ae4","ui_kits/panel/Panel.jsx":"78d9f33d7518","ui_kits/storefront/App.jsx":"d2c438958569","ui_kits/storefront/CartSearch.jsx":"49319cd49a6f","ui_kits/storefront/Catalog.jsx":"4c1d0822cb0e","ui_kits/storefront/Home.jsx":"3ab670d4b813","ui_kits/storefront/Part.jsx":"831e67bf77f3","ui_kits/storefront/data.js":"09c80d08c604"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.DesignSystem_d7c4f4 = window.DesignSystem_d7c4f4 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/catalog/FacetGroup.jsx
try { (() => {
/** One group in the filter panel: brands, kind, price, or a characteristic. */
function FacetGroup({
  title,
  moreCount,
  children,
  className = ''
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: className,
    style: {
      borderTop: '1px solid var(--line-subtle)',
      paddingTop: 'var(--space-3)',
      marginTop: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement("p", {
    className: "t-eyebrow",
    style: {
      margin: '0 0 var(--space-2)'
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 2
    }
  }, children), moreCount ? /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 'var(--space-2) 0 0',
      fontSize: 'var(--text-xs)',
      color: 'var(--text-muted)'
    }
  }, "\u0429\u0435 ", moreCount, " \u0437\u043D\u0430\u0447\u0435\u043D\u044C") : null);
}
Object.assign(__ds_scope, { FacetGroup });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/catalog/FacetGroup.jsx", error: String((e && e.message) || e) }); }

// components/catalog/PriceTag.jsx
try { (() => {
const FORMAT = new Intl.NumberFormat('uk-UA', {
  minimumFractionDigits: 0,
  maximumFractionDigits: 2
});
function PriceTag({
  value,
  size = 'md',
  stale = false,
  currency = '₴',
  className = ''
}) {
  return /*#__PURE__*/React.createElement("span", {
    className: ['ds-price', `ds-price--${size}`, stale ? 'ds-price--stale' : '', className].filter(Boolean).join(' ')
  }, typeof value === 'number' ? FORMAT.format(value) : value, /*#__PURE__*/React.createElement("span", {
    className: "ds-price__cur"
  }, currency));
}
Object.assign(__ds_scope, { PriceTag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/catalog/PriceTag.jsx", error: String((e && e.message) || e) }); }

// components/catalog/StockLabel.jsx
try { (() => {
/** Stock, as a state rather than a warning: out of stock is grey, never red. Red means buy. */
function StockLabel({
  qty,
  capped = false,
  minQty,
  className = ''
}) {
  const inStock = typeof qty === 'number' && qty > 0;
  return /*#__PURE__*/React.createElement("span", {
    className: ['ds-stock', inStock ? 'ds-stock--in' : 'ds-stock--out', className].filter(Boolean).join(' ')
  }, /*#__PURE__*/React.createElement("span", {
    className: "ds-stock__dot"
  }), inStock ? /*#__PURE__*/React.createElement(React.Fragment, null, capped ? `більше ${qty} шт` : `${qty} шт`, minQty && minQty > 1 ? /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-muted)',
      fontWeight: 400
    }
  }, "\xB7 \u0432\u0456\u0434 ", minQty, " \u0448\u0442") : null) : 'Немає в наявності');
}
Object.assign(__ds_scope, { StockLabel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/catalog/StockLabel.jsx", error: String((e && e.message) || e) }); }

// components/core/Chip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** A filter or sort control. Rendered as `a` by default: on Драйв these live in the address. */
function Chip({
  active = false,
  count,
  as = 'a',
  className = '',
  children,
  ...rest
}) {
  const Tag = as;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: ['ds-chip', className].filter(Boolean).join(' '),
    "data-active": active ? 'true' : 'false',
    "aria-pressed": Tag === 'button' ? active : undefined
  }, rest), children, count !== undefined && count !== null ? /*#__PURE__*/React.createElement("span", {
    className: "ds-chip__count"
  }, count) : null);
}
Object.assign(__ds_scope, { Chip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Chip.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
const PASCAL = name => String(name).split(/[-_\s]+/).map(part => part.charAt(0).toUpperCase() + part.slice(1)).join('');

/** Lucide's UMD build exposes icons in two shapes across versions; accept both. */
function lookup(name) {
  const lib = typeof window !== 'undefined' ? window.lucide : undefined;
  if (!lib) return null;
  const key = PASCAL(name);
  const node = lib.icons && lib.icons[key] || lib[key];
  return Array.isArray(node) ? node : null;
}
function render(target, node, size, strokeWidth) {
  const NS = 'http://www.w3.org/2000/svg';
  const svg = document.createElementNS(NS, 'svg');
  svg.setAttribute('viewBox', '0 0 24 24');
  svg.setAttribute('width', String(size));
  svg.setAttribute('height', String(size));
  svg.setAttribute('fill', 'none');
  svg.setAttribute('stroke', 'currentColor');
  svg.setAttribute('stroke-width', String(strokeWidth));
  svg.setAttribute('stroke-linecap', 'round');
  svg.setAttribute('stroke-linejoin', 'round');
  // IconNode is [tag, attrs][]; older builds nest it under ['svg', attrs, children].
  const children = typeof node[0] === 'string' ? node[2] || [] : node;
  for (const child of children) {
    if (!Array.isArray(child)) continue;
    const el = document.createElementNS(NS, child[0]);
    for (const [attr, value] of Object.entries(child[1] || {})) el.setAttribute(attr, String(value));
    svg.appendChild(el);
  }
  target.replaceChildren(svg);
}

/**
 * A Lucide glyph. The set is loaded from CDN by the page, not bundled here — see
 * readme.md § Iconography for the script tag and the reason Драйв has no icons of its own.
 */
function Icon({
  name,
  size = 20,
  strokeWidth = 1.75,
  label,
  className = '',
  style
}) {
  const host = React.useRef(null);
  React.useEffect(() => {
    let cancelled = false;
    let tries = 0;
    const paint = () => {
      if (cancelled || !host.current) return;
      const node = lookup(name);
      if (node) return render(host.current, node, size, strokeWidth);
      if (tries++ < 60) requestAnimationFrame(paint);
    };
    paint();
    return () => {
      cancelled = true;
    };
  }, [name, size, strokeWidth]);
  return /*#__PURE__*/React.createElement("span", {
    ref: host,
    className: className,
    role: label ? 'img' : undefined,
    "aria-label": label,
    "aria-hidden": label ? undefined : 'true',
    style: {
      display: 'inline-flex',
      flex: 'none',
      width: size,
      height: size,
      ...style
    }
  });
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/catalog/CashbackBanner.jsx
try { (() => {
/** The site's only promotional surface. Renders nothing when the cashback ladder is empty. */
function CashbackBanner({
  percent,
  className = ''
}) {
  if (percent === null || percent === undefined || percent === '') return null;
  return /*#__PURE__*/React.createElement("div", {
    className: ['ds-cashback', 'ds-stripes', className].filter(Boolean).join(' ')
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "badge-percent",
    size: 20,
    style: {
      color: 'var(--red-400)'
    }
  }), /*#__PURE__*/React.createElement("span", null, "\u041E\u0442\u0440\u0438\u043C\u0443\u0439\u0442\u0435 \u0434\u043E"), /*#__PURE__*/React.createElement("span", {
    className: "ds-cashback__pct"
  }, percent, "%"), /*#__PURE__*/React.createElement("span", null, "\u043A\u0435\u0448\u0431\u0435\u043A\u0443"));
}
Object.assign(__ds_scope, { CashbackBanner });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/catalog/CashbackBanner.jsx", error: String((e && e.message) || e) }); }

// components/catalog/CategoryTree.jsx
try { (() => {
function Nodes({
  nodes,
  openCode,
  expandAll
}) {
  return nodes.map(node => node.children && node.children.length ? /*#__PURE__*/React.createElement("details", {
    key: node.code,
    className: "ds-tree__branch",
    open: expandAll || contains(node, openCode)
  }, /*#__PURE__*/React.createElement("summary", null, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-right",
    size: 15,
    className: "ds-tree__caret"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }, node.name), /*#__PURE__*/React.createElement("span", {
    className: "ds-tree__count"
  }, node.count)), /*#__PURE__*/React.createElement("div", {
    className: "ds-tree__kids"
  }, /*#__PURE__*/React.createElement(Nodes, {
    nodes: node.children,
    openCode: openCode,
    expandAll: expandAll
  }))) : /*#__PURE__*/React.createElement("a", {
    key: node.code,
    href: node.href || '#',
    className: "ds-tree__leaf",
    "aria-current": node.code === openCode ? 'page' : undefined
  }, /*#__PURE__*/React.createElement("span", null, node.name), /*#__PURE__*/React.createElement("span", {
    className: "ds-tree__count"
  }, node.count)));
}
function contains(node, code) {
  if (!code) return false;
  if (node.code === code) return true;
  return (node.children || []).some(child => contains(child, code));
}

/** The three-level category tree for one car. A branch is a heading with a count; a leaf is a link. */
function CategoryTree({
  nodes = [],
  openCode = null,
  expandAll = false,
  className = ''
}) {
  return /*#__PURE__*/React.createElement("nav", {
    className: ['ds-tree', className].filter(Boolean).join(' ')
  }, /*#__PURE__*/React.createElement(Nodes, {
    nodes: nodes,
    openCode: openCode,
    expandAll: expandAll
  }));
}
Object.assign(__ds_scope, { CategoryTree });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/catalog/CategoryTree.jsx", error: String((e && e.message) || e) }); }

// components/catalog/PartThumb.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function PartThumb({
  src,
  alt = '',
  size = 100,
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ['ds-thumb', className].filter(Boolean).join(' '),
    style: {
      width: size,
      height: size
    }
  }, rest), src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt,
    loading: "lazy"
  }) : /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "image-off",
    size: Math.round(size * 0.26),
    strokeWidth: 1.3
  }));
}
Object.assign(__ds_scope, { PartThumb });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/catalog/PartThumb.jsx", error: String((e && e.message) || e) }); }

// components/catalog/ShipDate.jsx
try { (() => {
/**
 * Dispatch date, plus the cutoff hint that makes it conditional. The hint is a mark rather
 * than prose in the row, and it disappears entirely when there is no cutoff.
 */
function ShipDate({
  date,
  relative,
  cutoff,
  className = ''
}) {
  const soon = relative === 'today' || relative === 'tomorrow';
  const text = relative === 'today' ? 'сьогодні' : relative === 'tomorrow' ? 'завтра' : date;
  return /*#__PURE__*/React.createElement("span", {
    className: ['ds-ship', soon ? 'ds-ship--soon' : '', className].filter(Boolean).join(' ')
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "truck",
    size: 15
  }), "\u0412\u0456\u0434\u043F\u0440\u0430\u0432\u043A\u0430 ", text, cutoff ? /*#__PURE__*/React.createElement("span", {
    className: "ds-cutoff"
  }, "\u043F\u0440\u0438 \u0437\u0430\u043C\u043E\u0432\u043B\u0435\u043D\u043D\u0456 \u0434\u043E ", cutoff) : null);
}
Object.assign(__ds_scope, { ShipDate });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/catalog/ShipDate.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Badge({
  tone = 'neutral',
  icon,
  className = '',
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    className: ['ds-badge', `ds-badge--${tone}`, className].filter(Boolean).join(' ')
  }, rest), icon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 12,
    strokeWidth: 2.25
  }) : null, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * The one button. Red is the buying action, black is the strong non-buying action
 * («Знайти», «Оформити»), outline is everything else.
 */
function Button({
  variant = 'primary',
  size = 'md',
  icon,
  iconAfter,
  block = false,
  as = 'button',
  loading = false,
  disabled = false,
  className = '',
  children,
  ...rest
}) {
  const Tag = as;
  const classes = ['ds-btn', `ds-btn--${variant}`, variant === 'link' ? '' : `ds-btn--${size}`, block ? 'ds-btn--block' : '', className].filter(Boolean).join(' ');
  const glyph = size === 'lg' ? 20 : size === 'sm' ? 15 : 17;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: classes,
    disabled: Tag === 'button' ? disabled || loading : undefined,
    "aria-disabled": Tag === 'button' ? undefined : disabled || loading || undefined,
    "aria-busy": loading || undefined
  }, rest), loading ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "loader-circle",
    size: glyph,
    className: "ds-spin"
  }) : icon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: glyph
  }) : null, children, iconAfter ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconAfter,
    size: glyph
  }) : null);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/catalog/GarageCard.jsx
try { (() => {
/**
 * A car in the garage. The garage fills itself — a car is added the moment its catalogue page
 * is opened — so every row carries a visible «Прибрати».
 */
function GarageCard({
  image,
  name,
  spec,
  vin,
  oemHref,
  href = '#',
  active = false,
  onRemove,
  className = ''
}) {
  return /*#__PURE__*/React.createElement("li", {
    className: ['ds-garage', active ? 'ds-garage--active' : '', className].filter(Boolean).join(' ')
  }, /*#__PURE__*/React.createElement("div", {
    className: "ds-thumb",
    style: {
      width: 120,
      height: 78
    }
  }, image ? /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: name
  }) : /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "car-front",
    size: 26,
    strokeWidth: 1.3
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0,
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: href,
    style: {
      display: 'block',
      fontWeight: 600,
      color: 'var(--text-strong)',
      fontSize: 'var(--text-md)'
    }
  }, name), spec ? /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '2px 0 0',
      fontSize: 'var(--text-sm)',
      color: 'var(--text-muted)'
    }
  }, spec) : null, vin ? /*#__PURE__*/React.createElement("p", {
    className: "ds-article",
    style: {
      margin: '6px 0 0',
      fontSize: 'var(--text-xs)',
      color: 'var(--text-muted)'
    }
  }, "VIN ", vin) : null, oemHref ? /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '8px 0 0'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: oemHref,
    style: {
      fontSize: 'var(--text-sm)'
    }
  }, "\u041E\u0440\u0438\u0433\u0456\u043D\u0430\u043B\u044C\u043D\u0456 \u043A\u0430\u0442\u0430\u043B\u043E\u0433\u0438")) : null), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "ghost",
    size: "sm",
    icon: "x",
    onClick: onRemove
  }, "\u041F\u0440\u0438\u0431\u0440\u0430\u0442\u0438"));
}
Object.assign(__ds_scope, { GarageCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/catalog/GarageCard.jsx", error: String((e && e.message) || e) }); }

// components/catalog/OfferRow.jsx
try { (() => {
/** One purchasable offer. Used inside `OfferPartRow` and on the part card's offer list. */
function OfferRow({
  price,
  qty,
  qtyCapped = false,
  minQty,
  shipDate,
  shipRelative,
  cutoff,
  bestPrice = false,
  bestDate = false,
  primary = false,
  staff,
  onAdd,
  className = ''
}) {
  return /*#__PURE__*/React.createElement("li", {
    className: ['ds-offer', primary ? 'ds-offer--primary' : '', className].filter(Boolean).join(' ')
  }, /*#__PURE__*/React.createElement(__ds_scope.PriceTag, {
    value: price,
    size: "md"
  }), bestPrice ? /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: "best-price",
    icon: "tag"
  }, "\u041D\u0430\u0439\u043A\u0440\u0430\u0449\u0430 \u0446\u0456\u043D\u0430") : null, bestDate ? /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: "best-date",
    icon: "zap"
  }, "\u041D\u0430\u0439\u0448\u0432\u0438\u0434\u0448\u0435") : null, /*#__PURE__*/React.createElement(__ds_scope.ShipDate, {
    date: shipDate,
    relative: shipRelative,
    cutoff: cutoff
  }), /*#__PURE__*/React.createElement(__ds_scope.StockLabel, {
    qty: qty,
    capped: qtyCapped,
    minQty: minQty
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 'auto'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "primary",
    size: "sm",
    icon: "shopping-cart",
    onClick: onAdd
  }, "\u0412 \u043A\u043E\u0448\u0438\u043A")), staff ? /*#__PURE__*/React.createElement("div", {
    className: "ds-offer__staff"
  }, /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: "staff",
    icon: "eye-off"
  }, "\u0412\u0438\u0434\u043D\u043E \u043B\u0438\u0448\u0435 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u0443"), /*#__PURE__*/React.createElement("span", null, "\u0421\u043A\u043B\u0430\u0434: ", staff.warehouse), /*#__PURE__*/React.createElement("span", null, "\u0426\u0456\u043D\u0430 \u043F\u0440\u043E\u0434\u0430\u0432\u0446\u044F: ", staff.price), staff.retailMark ? /*#__PURE__*/React.createElement("span", null, "\u0440\u043E\u0437\u0434\u0440\u0456\u0431\u043D\u0430, \u0434\u0440\u0430\u0431\u0438\u043D\u0438 \u043F\u0440\u043E\u0434\u0430\u0432\u0446\u044F \u043D\u0435\u043C\u0430\u0454") : null) : null);
}
Object.assign(__ds_scope, { OfferRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/catalog/OfferRow.jsx", error: String((e && e.message) || e) }); }

// components/catalog/OfferPartRow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const MATCH_LABEL = {
  oem: 'Оригінал',
  cross: 'Заміна від постачальника',
  oe: 'За оригінальним номером'
};

/**
 * DESIGN TWO of two — the part-with-offers row, used by article search and the «Аналоги» tab.
 *
 * It answers «I know what I need, where is it cheaper and sooner»: the part's identity once,
 * then up to three offers, and the rest expands in place rather than leading to another page.
 */
function OfferPartRow({
  href = '#',
  image,
  brand,
  article,
  name,
  match = null,
  inStock = true,
  offers = [],
  restCount = 0,
  restFrom,
  onExpandRest,
  className = ''
}) {
  return /*#__PURE__*/React.createElement("li", {
    className: ['ds-row', className].filter(Boolean).join(' ')
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-4)',
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: href,
    style: {
      flex: 'none'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.PartThumb, {
    src: image,
    alt: name,
    size: 100
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0,
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("p", {
    className: "ds-row__meta",
    style: {
      margin: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 600,
      color: 'var(--text-body)'
    }
  }, brand), /*#__PURE__*/React.createElement("span", {
    className: "ds-article"
  }, article)), /*#__PURE__*/React.createElement("a", {
    href: href,
    className: "ds-row__title",
    style: {
      marginTop: 4
    }
  }, name), /*#__PURE__*/React.createElement("p", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 'var(--space-2)',
      alignItems: 'center',
      margin: '8px 0 0'
    }
  }, match ? /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: match === 'oem' ? 'oem' : 'analog'
  }, MATCH_LABEL[match]) : null, !inStock ? /*#__PURE__*/React.createElement("span", {
    className: "ds-stock ds-stock--out"
  }, "\u041D\u0435\u043C\u0430\u0454 \u0432 \u043D\u0430\u044F\u0432\u043D\u043E\u0441\u0442\u0456") : null))), offers.length > 0 ? /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      margin: 'var(--space-3) 0 0',
      padding: 0,
      display: 'grid',
      gap: 'var(--space-2)'
    }
  }, offers.map((offer, index) => /*#__PURE__*/React.createElement(__ds_scope.OfferRow, _extends({
    key: offer.key || index
  }, offer)))) : null, restCount > 0 ? /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-2)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "link",
    onClick: onExpandRest
  }, "\u0449\u0435 ", restCount, " \u043F\u0440\u043E\u043F\u043E\u0437\u0438\u0446\u0456\u0439 \u0432\u0456\u0434 ", restFrom, " \u20B4")) : null);
}
Object.assign(__ds_scope, { OfferPartRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/catalog/OfferPartRow.jsx", error: String((e && e.message) || e) }); }

// components/catalog/PartCard.jsx
try { (() => {
/**
 * DESIGN ONE of two — the TecDoc catalogue row, used by the list under a category node.
 *
 * It answers «what is there under this node»: one part, one best price, no quantity, and
 * every secondary control is an address into the part card rather than an expander.
 */
function PartCard({
  href = '#',
  image,
  brand,
  article,
  name,
  price,
  inStock = true,
  shipDate,
  shipRelative,
  cutoff,
  oem = false,
  fasterOffers = false,
  fasterDate = '',
  fasterPrice = null,
  analogsCount = 0,
  minQty = 1,
  onBuy,
  className = ''
}) {
  return /*#__PURE__*/React.createElement("li", {
    className: ['ds-row', className].filter(Boolean).join(' ')
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-4)',
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: href,
    style: {
      flex: 'none'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.PartThumb, {
    src: image,
    alt: name,
    size: 100
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0,
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("p", {
    className: "ds-row__meta",
    style: {
      margin: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 600,
      color: 'var(--text-body)'
    }
  }, brand), oem ? /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: "oem"
  }, "\u041E\u0440\u0438\u0433\u0456\u043D\u0430\u043B") : null), /*#__PURE__*/React.createElement("a", {
    href: href,
    className: "ds-row__title",
    style: {
      marginTop: 4
    }
  }, name), /*#__PURE__*/React.createElement("p", {
    className: "ds-row__meta",
    style: {
      margin: '3px 0 0'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "ds-article"
  }, article)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      gap: 3,
      marginTop: 8
    }
  }, inStock ? /*#__PURE__*/React.createElement(__ds_scope.ShipDate, {
    date: shipDate,
    relative: shipRelative,
    cutoff: cutoff
  }) : null, fasterOffers ? /*#__PURE__*/React.createElement("a", {
    href: `${href}?offers=all`,
    style: {
      fontSize: 'var(--text-sm)'
    }
  }, fasterDate ? /*#__PURE__*/React.createElement(React.Fragment, null, 'Швидше — ', /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 600
    }
  }, fasterDate), typeof fasterPrice === 'number' ? `, ${new Intl.NumberFormat('uk-UA').format(fasterPrice)} ₴` : null) : 'є швидше відправлення') : null)), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 'none',
      textAlign: 'right',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-end',
      gap: 'var(--space-2)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.PriceTag, {
    value: price,
    size: "md",
    stale: !inStock
  }), inStock ? /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "primary",
    size: "sm",
    icon: "shopping-cart",
    onClick: onBuy
  }, "\u0412 \u043a\u043e\u0448\u0438\u043a") : /*#__PURE__*/React.createElement("span", {
    className: "ds-stock ds-stock--out"
  }, "\u041D\u0435\u043C\u0430\u0454 \u0432 \u043D\u0430\u044F\u0432\u043D\u043E\u0441\u0442\u0456"), inStock && minQty > 1 ? /*#__PURE__*/React.createElement("span", {
    className: "ds-minqty"
  }, "\u0432\u0456\u0434 ", minQty, " \u0448\u0442") : null)), analogsCount > 0 ? /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-2)',
      textAlign: 'right'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: `${href}#analogs`,
    style: {
      fontSize: 'var(--text-sm)'
    }
  }, "\u043F\u0435\u0440\u0435\u0433\u043B\u044F\u043D\u0443\u0442\u0438 ", analogsCount, " \u0430\u043D\u0430\u043B\u043E\u0433\u0456\u0432")) : null);
}
Object.assign(__ds_scope, { PartCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/catalog/PartCard.jsx", error: String((e && e.message) || e) }); }

// components/core/EmptyState.jsx
try { (() => {
function EmptyState({
  icon = 'package-search',
  title,
  children,
  action,
  className = ''
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: ['ds-empty', className].filter(Boolean).join(' ')
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 30,
    strokeWidth: 1.4,
    style: {
      color: 'var(--ink-300)'
    }
  }), title ? /*#__PURE__*/React.createElement("p", {
    className: "ds-empty__title"
  }, title) : null, children ? /*#__PURE__*/React.createElement("p", {
    className: "ds-empty__body"
  }, children) : null, action);
}
Object.assign(__ds_scope, { EmptyState });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/EmptyState.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function IconButton({
  icon,
  label,
  size = 'md',
  tone = 'plain',
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": label,
    title: label,
    className: ['ds-iconbtn', `ds-iconbtn--${size}`, tone !== 'plain' ? `ds-iconbtn--${tone}` : '', className].filter(Boolean).join(' ')
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: size === 'sm' ? 17 : 20
  }));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Notice.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const GLYPH = {
  info: 'info',
  danger: 'triangle-alert',
  success: 'check',
  warning: 'clock',
  accent: 'info'
};
function Notice({
  tone = 'info',
  icon,
  role,
  className = '',
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ['ds-notice', tone !== 'info' ? `ds-notice--${tone}` : '', className].filter(Boolean).join(' '),
    role: role || (tone === 'danger' ? 'alert' : undefined)
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon || GLYPH[tone],
    size: 17,
    className: "ds-notice__icon"
  }), /*#__PURE__*/React.createElement("div", null, children));
}
Object.assign(__ds_scope, { Notice });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Notice.jsx", error: String((e && e.message) || e) }); }

// components/core/Skeleton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Skeleton({
  width = '100%',
  height = 16,
  radius,
  className = '',
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ['ds-skeleton', className].filter(Boolean).join(' '),
    style: {
      width,
      height,
      borderRadius: radius,
      ...style
    },
    "aria-hidden": "true"
  }, rest));
}
Object.assign(__ds_scope, { Skeleton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Skeleton.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Checkbox({
  label,
  count,
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    className: ['ds-check', className].filter(Boolean).join(' ')
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox"
  }, rest)), /*#__PURE__*/React.createElement("span", null, label), count !== undefined && count !== null ? /*#__PURE__*/React.createElement("span", {
    className: "ds-check__count"
  }, "(", count, ")") : null);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/QuantityStepper.jsx
try { (() => {
function QuantityStepper({
  value,
  min = 1,
  max,
  step = 1,
  onChange,
  label = 'Кількість',
  className = ''
}) {
  const set = next => {
    if (typeof onChange === 'function') onChange(next);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: ['ds-qty', className].filter(Boolean).join(' ')
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "\u0417\u043C\u0435\u043D\u0448\u0438\u0442\u0438 \u043A\u0456\u043B\u044C\u043A\u0456\u0441\u0442\u044C",
    disabled: value <= min,
    onClick: () => set(Math.max(min, value - step))
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "minus",
    size: 15,
    strokeWidth: 2.25
  })), /*#__PURE__*/React.createElement("input", {
    type: "text",
    inputMode: "numeric",
    "aria-label": label,
    value: value,
    onChange: event => {
      const parsed = Number(event.target.value.replace(/\D/g, ''));
      if (Number.isFinite(parsed) && parsed > 0) set(parsed);
    }
  }), /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "\u0417\u0431\u0456\u043B\u044C\u0448\u0438\u0442\u0438 \u043A\u0456\u043B\u044C\u043A\u0456\u0441\u0442\u044C",
    disabled: max !== undefined && value + step > max,
    onClick: () => set(value + step)
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "plus",
    size: 15,
    strokeWidth: 2.25
  })));
}
Object.assign(__ds_scope, { QuantityStepper });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/QuantityStepper.jsx", error: String((e && e.message) || e) }); }

// components/forms/SearchField.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Article-number search. This is the site's front door: it never searches by part name and
 * never needs a car chosen first.
 */
function SearchField({
  variant = 'hero',
  placeholder = 'Введіть артикул',
  label = 'Пошук за артикулом',
  submitLabel = 'Знайти',
  suggests,
  error,
  className = '',
  ...rest
}) {
  const hero = variant === 'hero';
  return /*#__PURE__*/React.createElement("div", {
    className: ['ds-search', hero ? 'ds-search--hero' : '', className].filter(Boolean).join(' '),
    role: "search"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ds-search__wrap"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "search",
    size: hero ? 20 : 17,
    className: "ds-search__icon"
  }), /*#__PURE__*/React.createElement("input", _extends({
    type: "search",
    className: ['ds-input', 'ds-search__input', hero ? 'ds-input--lg' : ''].filter(Boolean).join(' '),
    placeholder: placeholder,
    "aria-label": label,
    autoComplete: "off"
  }, rest)), suggests), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "dark",
    size: hero ? 'lg' : 'md'
  }, submitLabel), error ? /*#__PURE__*/React.createElement("p", {
    className: "ds-field__error",
    role: "alert",
    style: {
      position: 'absolute',
      top: '100%',
      left: 0
    }
  }, error) : null);
}

/** The list that opens under the field while somebody types. Pasting searches at once instead. */
function SearchSuggests({
  heading,
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "ds-suggest"
  }, heading ? /*#__PURE__*/React.createElement("p", {
    className: "ds-suggest__head"
  }, heading) : null, children);
}
function SearchSuggestRow({
  article,
  brand,
  name,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    className: "ds-suggest__row"
  }, rest), /*#__PURE__*/React.createElement("span", {
    className: "ds-article"
  }, article), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-sm)',
      color: 'var(--text-strong)',
      fontWeight: 500
    }
  }, name), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 'auto',
      fontSize: 'var(--text-xs)',
      color: 'var(--text-muted)'
    }
  }, brand));
}
Object.assign(__ds_scope, { SearchField, SearchSuggests, SearchSuggestRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/SearchField.jsx", error: String((e && e.message) || e) }); }

// components/forms/SelectField.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * The funnel's select. `settled` draws the black border that says «this level is decided» —
 * a cascade can settle four levels the customer never pressed, and they must be able to see it.
 */
function SelectField({
  label,
  hint,
  settled = false,
  id,
  className = '',
  children,
  ...rest
}) {
  const auto = React.useId();
  const fieldId = id || auto;
  return /*#__PURE__*/React.createElement("div", {
    className: ['ds-field', className].filter(Boolean).join(' ')
  }, label ? /*#__PURE__*/React.createElement("label", {
    className: "ds-field__label",
    htmlFor: fieldId
  }, label) : null, /*#__PURE__*/React.createElement("select", _extends({
    id: fieldId,
    className: "ds-select",
    "data-settled": settled ? 'true' : 'false'
  }, rest), children), hint ? /*#__PURE__*/React.createElement("p", {
    className: "ds-field__hint"
  }, hint) : null);
}
Object.assign(__ds_scope, { SelectField });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/SelectField.jsx", error: String((e && e.message) || e) }); }

// components/catalog/VehicleFunnel.jsx
try { (() => {
const LEVELS = [{
  key: 'mark',
  label: 'Марка',
  placeholder: 'Оберіть марку'
}, {
  key: 'general_model',
  label: 'Модель',
  placeholder: 'Оберіть модель'
}, {
  key: 'year',
  label: 'Рік випуску',
  placeholder: 'Оберіть рік'
}, {
  key: 'body',
  label: 'Кузов',
  placeholder: 'Оберіть кузов'
}, {
  key: 'engine',
  label: 'Обʼєм і пальне',
  placeholder: 'Оберіть двигун'
}];

/**
 * The five-step vehicle funnel. Each step narrows the next, and the server may settle several
 * at once — a cascade — so a settled level always shows its value plus a «змінити» option.
 */
function VehicleFunnel({
  chosen = {},
  options = {},
  activeLevel = 'mark',
  onChoose,
  className = ''
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: className,
    style: {
      display: 'grid',
      gap: 'var(--space-3)',
      gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))'
    }
  }, LEVELS.map(level => {
    const value = chosen[level.key] || '';
    const settled = Boolean(value);
    const active = activeLevel === level.key;
    return /*#__PURE__*/React.createElement(__ds_scope.SelectField, {
      key: level.key,
      label: level.label,
      settled: settled,
      disabled: !settled && !active,
      value: value,
      onChange: event => onChoose && onChoose(level.key, event.target.value)
    }, settled ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("option", {
      value: value
    }, value), /*#__PURE__*/React.createElement("option", {
      value: "__change"
    }, "\u0437\u043C\u0456\u043D\u0438\u0442\u0438")) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("option", {
      value: ""
    }, level.placeholder), (options[level.key] || []).map(option => /*#__PURE__*/React.createElement("option", {
      key: option,
      value: option
    }, option))));
  }));
}
Object.assign(__ds_scope, { VehicleFunnel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/catalog/VehicleFunnel.jsx", error: String((e && e.message) || e) }); }

// components/forms/TextField.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function TextField({
  label,
  hint,
  error,
  mono = false,
  size = 'md',
  id,
  className = '',
  suffix,
  ...rest
}) {
  const auto = React.useId();
  const fieldId = id || auto;
  const describedBy = [error ? `${fieldId}-err` : null, hint ? `${fieldId}-hint` : null].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("div", {
    className: ['ds-field', className].filter(Boolean).join(' ')
  }, label ? /*#__PURE__*/React.createElement("label", {
    className: "ds-field__label",
    htmlFor: fieldId
  }, label) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    id: fieldId,
    className: ['ds-input', mono ? 'ds-input--mono' : '', size === 'lg' ? 'ds-input--lg' : '', error ? 'ds-input--invalid' : ''].filter(Boolean).join(' '),
    "aria-invalid": error ? 'true' : undefined,
    "aria-describedby": describedBy || undefined,
    style: suffix ? {
      paddingRight: 56
    } : undefined
  }, rest)), suffix ? /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      right: 'var(--space-3)',
      fontSize: 'var(--text-sm)',
      color: 'var(--text-muted)'
    }
  }, suffix) : null), error ? /*#__PURE__*/React.createElement("p", {
    className: "ds-field__error",
    id: `${fieldId}-err`,
    role: "alert"
  }, error) : hint ? /*#__PURE__*/React.createElement("p", {
    className: "ds-field__hint",
    id: `${fieldId}-hint`
  }, hint) : null);
}
Object.assign(__ds_scope, { TextField });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/TextField.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Breadcrumbs.jsx
try { (() => {
function Breadcrumbs({
  items = [],
  className = ''
}) {
  return /*#__PURE__*/React.createElement("nav", {
    className: ['ds-crumbs', className].filter(Boolean).join(' '),
    "aria-label": "\u0414\u0435 \u0432\u0438 \u0437\u0430\u0440\u0430\u0437"
  }, items.map((item, index) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: item.label
  }, index > 0 ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-right",
    size: 12,
    className: "ds-crumbs__sep"
  }) : null, item.href && index < items.length - 1 ? /*#__PURE__*/React.createElement("a", {
    href: item.href
  }, item.label) : /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-strong)'
    }
  }, item.label))));
}
Object.assign(__ds_scope, { Breadcrumbs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Breadcrumbs.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Pager.jsx
try { (() => {
function Pager({
  page = 1,
  pages = 1,
  prevHref = '#',
  nextHref = '#',
  className = ''
}) {
  if (pages <= 1) return null;
  return /*#__PURE__*/React.createElement("div", {
    className: ['ds-pager', className].filter(Boolean).join(' ')
  }, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    as: "a",
    href: prevHref,
    variant: "secondary",
    size: "sm",
    icon: "arrow-left",
    disabled: page <= 1
  }, "\u041D\u0430\u0437\u0430\u0434"), /*#__PURE__*/React.createElement("span", {
    className: "ds-pager__state"
  }, "\u0421\u0442\u043E\u0440\u0456\u043D\u043A\u0430 ", page, " \u0437 ", pages), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    as: "a",
    href: nextHref,
    variant: "secondary",
    size: "sm",
    iconAfter: "arrow-right",
    disabled: page >= pages
  }, "\u0414\u0430\u043B\u0456"));
}
Object.assign(__ds_scope, { Pager });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Pager.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SiteFooter.jsx
try { (() => {
function SiteFooter({
  logoSrc = 'assets/logo.svg',
  className = ''
}) {
  return /*#__PURE__*/React.createElement("footer", {
    className: ['ds-footer', 'ds-stripes', className].filter(Boolean).join(' ')
  }, /*#__PURE__*/React.createElement("div", {
    className: "ds-container",
    style: {
      display: 'grid',
      gap: 'var(--space-8)',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      paddingBlock: 'var(--space-12)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("img", {
    src: logoSrc,
    alt: "\u0414\u0440\u0430\u0439\u0432",
    style: {
      height: 34,
      width: 'auto',
      display: 'block',
      filter: 'invert(1) grayscale(1) contrast(1.4)'
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 'var(--space-4) 0 0',
      maxWidth: '28ch'
    }
  }, "\u0410\u0432\u0442\u043E\u0437\u0430\u043F\u0447\u0430\u0441\u0442\u0438\u043D\u0438 \u0432 \u0417\u0430\u043F\u043E\u0440\u0456\u0436\u0436\u0456. \u041F\u0456\u0434\u0431\u0456\u0440 \u0437\u0430 \u0430\u0432\u0442\u043E, \u0437\u0430 VIN \u0456 \u0437\u0430 \u0430\u0440\u0442\u0438\u043A\u0443\u043B\u043E\u043C.")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "ds-footer__title"
  }, "\u041C\u0430\u0433\u0430\u0437\u0438\u043D"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0
    }
  }, "\u043C. \u0417\u0430\u043F\u043E\u0440\u0456\u0436\u0436\u044F, \u0432\u0443\u043B. \u0413\u0443\u043B\u044F\u0439\u043F\u0456\u043B\u044C\u0441\u044C\u043A\u0430 15"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 'var(--space-2) 0 0'
    }
  }, "\u043F\u043D\u2013\u043F\u0442 09:00\u201316:00 \xB7 \u0441\u0431 09:00\u201314:00 \xB7 \u043D\u0434 \u0432\u0438\u0445\u0456\u0434\u043D\u0438\u0439")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "ds-footer__title"
  }, "\u0417\u0432\u02BC\u044F\u0437\u043E\u043A"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      display: 'grid',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "tel:+380985593265"
  }, "+38 (098) 559-32-65"), /*#__PURE__*/React.createElement("a", {
    href: "tel:+380990450440"
  }, "+38 (099) 045-04-40"), /*#__PURE__*/React.createElement("a", {
    href: "mailto:magazine_drive@ukr.net"
  }, "magazine_drive@ukr.net"))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "ds-footer__title"
  }, "\u0414\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0438"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      display: 'grid',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "\u041F\u0443\u0431\u043B\u0456\u0447\u043D\u0438\u0439 \u0434\u043E\u0433\u043E\u0432\u0456\u0440 (\u043E\u0444\u0435\u0440\u0442\u0430)"), /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "\u041F\u043E\u043B\u0456\u0442\u0438\u043A\u0430 \u043A\u043E\u043D\u0444\u0456\u0434\u0435\u043D\u0446\u0456\u0439\u043D\u043E\u0441\u0442\u0456"), /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "\u0414\u043E\u0441\u0442\u0430\u0432\u043A\u0430, \u043E\u0431\u043C\u0456\u043D \u0456 \u043F\u043E\u0432\u0435\u0440\u043D\u0435\u043D\u043D\u044F")))), /*#__PURE__*/React.createElement("div", {
    className: "ds-container",
    style: {
      borderTop: '1px solid var(--line-inverse)',
      paddingBlock: 'var(--space-4)',
      display: 'flex',
      gap: 'var(--space-4)',
      alignItems: 'center',
      fontSize: 'var(--text-2xs)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 ", new Date().getFullYear(), " \u0414\u0440\u0430\u0439\u0432"), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 'auto',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "truck",
    size: 14
  }), "\u0414\u043E\u0441\u0442\u0430\u0432\u043A\u0430 \u041D\u043E\u0432\u043E\u044E \u041F\u043E\u0448\u0442\u043E\u044E \u0430\u0431\u043E \u0441\u0430\u043C\u043E\u0432\u0438\u0432\u0456\u0437")));
}
Object.assign(__ds_scope, { SiteFooter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SiteFooter.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SiteHeader.jsx
try { (() => {
/**
 * The site header. Three bands: a black utility bar with the shop's real contacts, the white
 * band with the mark, the article search and the account controls, and the nav.
 */
function SiteHeader({
  logoSrc = 'assets/logo.svg',
  phone = '+38 (098) 559-32-65',
  hours = 'пн–пт 09:00–16:00',
  cartCount = 0,
  active = 'catalog',
  signedIn = false,
  onNavigate,
  className = ''
}) {
  const nav_ = key => event => {
    if (!onNavigate) return;
    event.preventDefault();
    onNavigate(key);
  };
  const nav = [{
    key: 'catalog',
    label: 'Каталог за авто',
    href: '#'
  }, {
    key: 'oem',
    label: 'Оригінальні каталоги',
    href: '#'
  }, {
    key: 'contacts',
    label: 'Контакти',
    href: '#'
  }];
  return /*#__PURE__*/React.createElement("header", {
    className: ['ds-header', className].filter(Boolean).join(' ')
  }, /*#__PURE__*/React.createElement("div", {
    className: "ds-utilitybar"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ds-container",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-5)',
      height: 'var(--utilitybar-h)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "map-pin",
    size: 13
  }), "\u043C. \u0417\u0430\u043F\u043E\u0440\u0456\u0436\u0436\u044F, \u0432\u0443\u043B. \u0413\u0443\u043B\u044F\u0439\u043F\u0456\u043B\u044C\u0441\u044C\u043A\u0430 15"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "clock",
    size: 13
  }), hours), /*#__PURE__*/React.createElement("a", {
    href: `tel:${phone.replace(/\D/g, '')}`,
    style: {
      marginLeft: 'auto',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      color: 'var(--white)',
      fontWeight: 600
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "phone",
    size: 13
  }), phone))), /*#__PURE__*/React.createElement("div", {
    className: "ds-container",
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
      gap: 'var(--space-4) var(--space-6)',
      minHeight: 'var(--header-h)',
      paddingBlock: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      flex: 'none'
    },
    onClick: nav_('home')
  }, /*#__PURE__*/React.createElement("img", {
    src: logoSrc,
    alt: "\u0414\u0440\u0430\u0439\u0432",
    style: {
      height: 38,
      width: 'auto',
      display: 'block'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: '1 1 240px',
      minWidth: 200,
      maxWidth: 520
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.SearchField, {
    variant: "compact"
  })), /*#__PURE__*/React.createElement("nav", {
    className: "ds-header__nav",
    style: {
      marginLeft: 'auto'
    }
  }, nav.map(item => /*#__PURE__*/React.createElement("a", {
    key: item.key,
    href: item.href,
    className: "ds-navlink",
    "data-active": active === item.key ? 'true' : 'false',
    onClick: nav_(item.key)
  }, item.label)), /*#__PURE__*/React.createElement("a", {
    href: "#",
    className: "ds-navlink",
    "data-active": active === 'account' ? 'true' : 'false',
    onClick: nav_('account')
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "user",
    size: 17
  }), signedIn ? 'Мій кабінет' : 'Увійти'), /*#__PURE__*/React.createElement("a", {
    href: "#",
    className: "ds-navlink",
    "data-active": active === 'cart' ? 'true' : 'false',
    onClick: nav_('cart')
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "shopping-cart",
    size: 17
  }), "\u041A\u043E\u0448\u0438\u043A", cartCount > 0 ? /*#__PURE__*/React.createElement("span", {
    style: {
      minWidth: 19,
      height: 19,
      padding: '0 5px',
      borderRadius: 'var(--radius-full)',
      background: 'var(--red-500)',
      color: '#fff',
      fontSize: 'var(--text-3xs)',
      fontWeight: 700,
      display: 'inline-grid',
      placeItems: 'center'
    }
  }, cartCount) : null))));
}
Object.assign(__ds_scope, { SiteHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SiteHeader.jsx", error: String((e && e.message) || e) }); }

// components/navigation/TabStrip.jsx
try { (() => {
function TabStrip({
  tabs = [],
  active,
  onSelect,
  className = ''
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: ['ds-tabs', className].filter(Boolean).join(' '),
    role: "tablist"
  }, tabs.map(tab => /*#__PURE__*/React.createElement("button", {
    key: tab.key,
    type: "button",
    role: "tab",
    className: "ds-tab",
    "aria-selected": active === tab.key,
    onClick: () => onSelect && onSelect(tab.key)
  }, tab.label, tab.count !== undefined && tab.count !== null ? /*#__PURE__*/React.createElement("span", {
    className: "ds-tab__count"
  }, tab.count) : null)));
}
Object.assign(__ds_scope, { TabStrip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/TabStrip.jsx", error: String((e && e.message) || e) }); }

// ui_kits/panel/Panel.jsx
try { (() => {
const D = window.DesignSystem_d7c4f4;
const STATUS = {
  new: ['Нове', 'neutral'],
  confirming: ['Підтверджується', 'neutral'],
  confirmed: ['Підтверджено', 'best-date'],
  substitution: ['Підбираємо заміну', 'staff'],
  ordered: ['Замовлено у постачальника', 'neutral'],
  arrived: ['Надійшло в магазин', 'neutral'],
  shipping: ['Доставка', 'best-date'],
  done: ['Виконано', 'best-date'],
  cancelled: ['Скасовано', 'analog']
};
const ORDERS = [{
  n: 1042,
  at: '01.09 14:20',
  who: 'Іваненко О. П.',
  phone: '+38 (098) 559-32-65',
  total: 1284,
  pay: 'Післяплата',
  paid: 'Не оплачено',
  lines: 3,
  ship: 'сьогодні',
  status: 'new'
}, {
  n: 1041,
  at: '01.09 12:04',
  who: 'Коваль С. М.',
  phone: '+38 (099) 045-04-40',
  total: 3960,
  pay: 'Повна оплата картою',
  paid: 'Оплачено',
  lines: 5,
  ship: 'завтра',
  status: 'confirmed'
}, {
  n: 1040,
  at: '01.09 09:47',
  who: 'Мельник А.',
  phone: '+38 (067) 210-88-14',
  total: 742,
  pay: 'Післяплата з авансом',
  paid: 'Оплачено частково',
  lines: 1,
  ship: '4 вер, пт',
  status: 'substitution'
}, {
  n: 1039,
  at: '31.08 18:31',
  who: 'Бондаренко І. В.',
  phone: '+38 (050) 774-01-92',
  total: 2148,
  pay: 'Повна оплата картою',
  paid: 'Оплачено',
  lines: 4,
  ship: '3 вер, чт',
  status: 'shipping'
}, {
  n: 1038,
  at: '31.08 16:02',
  who: 'Шевченко Д.',
  phone: '+38 (063) 118-45-70',
  total: 519,
  pay: 'Післяплата',
  paid: 'Не оплачено',
  lines: 2,
  ship: '—',
  status: 'cancelled'
}, {
  n: 1037,
  at: '31.08 11:15',
  who: 'Ткаченко Р. О.',
  phone: '+38 (095) 302-66-08',
  total: 8410,
  pay: 'Повна оплата картою',
  paid: 'Оплачено',
  lines: 9,
  ship: '30.08',
  status: 'done'
}];
function OrdersBoard({
  open
}) {
  const {
    Chip,
    TextField,
    Badge,
    PriceTag,
    Pager,
    Icon
  } = D;
  const [filter, setFilter] = React.useState(null);
  const rows = ORDERS.filter(order => filter === null ? true : order.status === filter);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "pk-head"
  }, /*#__PURE__*/React.createElement("h1", {
    className: "ds-section-title"
  }, "\u0417\u0430\u043C\u043E\u0432\u043B\u0435\u043D\u043D\u044F ", /*#__PURE__*/React.createElement("span", {
    className: "ds-section-title__count"
  }, rows.length, " \u0437 ", ORDERS.length)), /*#__PURE__*/React.createElement("div", {
    className: "pk-shift"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ds-stock ds-stock--in"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ds-stock__dot"
  }), "\u0417\u043C\u0456\u043D\u0430 \u041F\u0420\u0420\u041E \u0432\u0456\u0434\u043A\u0440\u0438\u0442\u0430"))), /*#__PURE__*/React.createElement("div", {
    className: "pk-controls"
  }, /*#__PURE__*/React.createElement(TextField, {
    placeholder: "\u041D\u043E\u043C\u0435\u0440 \u0437\u0430\u043C\u043E\u0432\u043B\u0435\u043D\u043D\u044F \u0430\u0431\u043E \u0442\u0435\u043B\u0435\u0444\u043E\u043D",
    className: "pk-search"
  }), /*#__PURE__*/React.createElement(Chip, {
    as: "button",
    active: filter === null,
    onClick: () => setFilter(null)
  }, "\u0423\u0441\u0456"), /*#__PURE__*/React.createElement(Chip, {
    as: "button",
    active: filter === 'new',
    onClick: () => setFilter('new'),
    count: 1
  }, "\u041D\u043E\u0432\u0456"), /*#__PURE__*/React.createElement(Chip, {
    as: "button",
    active: filter === 'substitution',
    onClick: () => setFilter('substitution'),
    count: 1
  }, "\u041F\u0456\u0434\u0431\u0456\u0440 \u0437\u0430\u043C\u0456\u043D\u0438"), /*#__PURE__*/React.createElement(Chip, {
    as: "button",
    active: filter === 'shipping',
    onClick: () => setFilter('shipping'),
    count: 1
  }, "\u0414\u043E\u0441\u0442\u0430\u0432\u043A\u0430"), /*#__PURE__*/React.createElement(Chip, {
    as: "button",
    active: filter === 'done',
    onClick: () => setFilter('done'),
    count: 1
  }, "\u0412\u0438\u043A\u043E\u043D\u0430\u043D\u0456")), /*#__PURE__*/React.createElement("div", {
    className: "pk-tablewrap"
  }, /*#__PURE__*/React.createElement("table", {
    className: "pk-table"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "\u2116"), /*#__PURE__*/React.createElement("th", null, "\u0427\u0430\u0441"), /*#__PURE__*/React.createElement("th", null, "\u041A\u043B\u0456\u0454\u043D\u0442"), /*#__PURE__*/React.createElement("th", null, "\u0422\u0435\u043B\u0435\u0444\u043E\u043D"), /*#__PURE__*/React.createElement("th", {
    className: "num"
  }, "\u0421\u0443\u043C\u0430"), /*#__PURE__*/React.createElement("th", null, "\u041E\u043F\u043B\u0430\u0442\u0430"), /*#__PURE__*/React.createElement("th", null, "\u041F\u043E\u0437\u0438\u0446\u0456\u0439"), /*#__PURE__*/React.createElement("th", null, "\u0412\u0456\u0434\u043F\u0440\u0430\u0432\u043A\u0430"), /*#__PURE__*/React.createElement("th", null, "\u0421\u0442\u0430\u0442\u0443\u0441"), /*#__PURE__*/React.createElement("th", null))), /*#__PURE__*/React.createElement("tbody", null, rows.map(order => /*#__PURE__*/React.createElement("tr", {
    key: order.n,
    onClick: () => open(order)
  }, /*#__PURE__*/React.createElement("td", {
    className: "ds-article"
  }, order.n), /*#__PURE__*/React.createElement("td", {
    className: "muted"
  }, order.at), /*#__PURE__*/React.createElement("td", {
    className: "strong"
  }, order.who), /*#__PURE__*/React.createElement("td", {
    className: "ds-article muted"
  }, order.phone), /*#__PURE__*/React.createElement("td", {
    className: "num"
  }, /*#__PURE__*/React.createElement(PriceTag, {
    value: order.total,
    size: "sm"
  })), /*#__PURE__*/React.createElement("td", {
    className: "muted"
  }, order.pay, /*#__PURE__*/React.createElement("span", {
    className: `pk-paid pk-paid--${order.paid === 'Оплачено' ? 'ok' : order.paid === 'Не оплачено' ? 'no' : 'part'}`
  }, order.paid)), /*#__PURE__*/React.createElement("td", {
    className: "num muted"
  }, order.lines), /*#__PURE__*/React.createElement("td", {
    className: "muted"
  }, order.ship), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement(Badge, {
    tone: STATUS[order.status][1]
  }, STATUS[order.status][0])), /*#__PURE__*/React.createElement("td", {
    className: "num"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-right",
    size: 16
  }))))))), /*#__PURE__*/React.createElement(Pager, {
    page: 1,
    pages: 4
  }));
}
function OrderCard({
  order,
  back
}) {
  const {
    Button,
    Badge,
    PriceTag,
    Notice,
    SelectField,
    TextField,
    Icon,
    StockLabel,
    ShipDate
  } = D;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "pk-back",
    onClick: back
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-left",
    size: 15
  }), " \u0414\u043E \u0441\u043F\u0438\u0441\u043A\u0443"), /*#__PURE__*/React.createElement("div", {
    className: "pk-head"
  }, /*#__PURE__*/React.createElement("h1", {
    className: "ds-section-title"
  }, "\u0417\u0430\u043C\u043E\u0432\u043B\u0435\u043D\u043D\u044F \u2116", order.n, " ", /*#__PURE__*/React.createElement(Badge, {
    tone: STATUS[order.status][1]
  }, STATUS[order.status][0])), /*#__PURE__*/React.createElement(PriceTag, {
    value: order.total,
    size: "lg"
  })), /*#__PURE__*/React.createElement("div", {
    className: "pk-grid"
  }, /*#__PURE__*/React.createElement("section", {
    className: "ds-card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ds-card__head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "t-eyebrow"
  }, "\u041A\u043B\u0456\u0454\u043D\u0442")), /*#__PURE__*/React.createElement("div", {
    className: "ds-card__body pk-dl"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", null, "\u0406\u043C\u02BC\u044F"), /*#__PURE__*/React.createElement("b", null, order.who)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", null, "\u0422\u0435\u043B\u0435\u0444\u043E\u043D"), /*#__PURE__*/React.createElement("b", {
    className: "ds-article"
  }, order.phone)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", null, "E-mail"), /*#__PURE__*/React.createElement("b", null, "ivanenko@ukr.net")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", null, "\u041A\u043E\u043C\u0435\u043D\u0442\u0430\u0440"), /*#__PURE__*/React.createElement("b", null, "\u2014")))), /*#__PURE__*/React.createElement("section", {
    className: "ds-card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ds-card__head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "t-eyebrow"
  }, "\u0414\u043E\u0441\u0442\u0430\u0432\u043A\u0430")), /*#__PURE__*/React.createElement("div", {
    className: "ds-card__body pk-dl"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", null, "\u0421\u043F\u043E\u0441\u0456\u0431"), /*#__PURE__*/React.createElement("b", null, "\u041D\u043E\u0432\u0430 \u041F\u043E\u0448\u0442\u0430: \u0432\u0456\u0434\u0434\u0456\u043B\u0435\u043D\u043D\u044F")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", null, "\u041C\u0456\u0441\u0442\u043E"), /*#__PURE__*/React.createElement("b", null, "\u0417\u0430\u043F\u043E\u0440\u0456\u0436\u0436\u044F")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", null, "\u0422\u043E\u0447\u043A\u0430 \u0432\u0438\u0434\u0430\u0447\u0456"), /*#__PURE__*/React.createElement("b", null, "\u0412\u0456\u0434\u0434\u0456\u043B\u0435\u043D\u043D\u044F \u211612, \u0432\u0443\u043B. \u041F\u0435\u0440\u0435\u043C\u043E\u0433\u0438 68")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", null, "\u041E\u0442\u0440\u0438\u043C\u0443\u0432\u0430\u0447"), /*#__PURE__*/React.createElement("b", null, order.who)))), /*#__PURE__*/React.createElement("section", {
    className: "ds-card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ds-card__head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "t-eyebrow"
  }, "\u0413\u0440\u043E\u0448\u0456")), /*#__PURE__*/React.createElement("div", {
    className: "ds-card__body pk-dl"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", null, "\u0422\u043E\u0432\u0430\u0440\u0438"), /*#__PURE__*/React.createElement("b", null, /*#__PURE__*/React.createElement(PriceTag, {
    value: order.total,
    size: "sm"
  }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", null, "\u0417\u043D\u0438\u0436\u043A\u0430"), /*#__PURE__*/React.createElement("b", null, /*#__PURE__*/React.createElement(PriceTag, {
    value: 0,
    size: "sm"
  }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", null, "\u041E\u043F\u043B\u0430\u0447\u0435\u043D\u043E"), /*#__PURE__*/React.createElement("b", null, /*#__PURE__*/React.createElement(PriceTag, {
    value: order.paid === 'Оплачено' ? order.total : 0,
    size: "sm"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "pk-dl__total"
  }, /*#__PURE__*/React.createElement("span", null, "\u0414\u043E \u0441\u043F\u043B\u0430\u0442\u0438"), /*#__PURE__*/React.createElement("b", null, /*#__PURE__*/React.createElement(PriceTag, {
    value: order.paid === 'Оплачено' ? 0 : order.total,
    size: "md"
  })))))), /*#__PURE__*/React.createElement("section", {
    className: "ds-card pk-lines"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ds-card__head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "t-eyebrow"
  }, "\u041F\u043E\u0437\u0438\u0446\u0456\u0457"), /*#__PURE__*/React.createElement("span", {
    className: "pk-staffnote"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "eye-off",
    size: 13
  }), " \u0421\u043A\u043B\u0430\u0434 \u0456 \u0446\u0456\u043D\u0430 \u043F\u0440\u043E\u0434\u0430\u0432\u0446\u044F \u0432\u0438\u0434\u043D\u0456 \u043B\u0438\u0448\u0435 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u0443")), /*#__PURE__*/React.createElement("div", {
    className: "pk-tablewrap"
  }, /*#__PURE__*/React.createElement("table", {
    className: "pk-table"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "\u0414\u0435\u0442\u0430\u043B\u044C"), /*#__PURE__*/React.createElement("th", null, "\u0421\u043A\u043B\u0430\u0434"), /*#__PURE__*/React.createElement("th", {
    className: "num"
  }, "\u041A-\u0441\u0442\u044C"), /*#__PURE__*/React.createElement("th", {
    className: "num"
  }, "\u0426\u0456\u043D\u0430"), /*#__PURE__*/React.createElement("th", {
    className: "num"
  }, "\u0426\u0456\u043D\u0430 \u043F\u0440\u043E\u0434\u0430\u0432\u0446\u044F"), /*#__PURE__*/React.createElement("th", null, "\u0421\u0442\u0430\u043D"), /*#__PURE__*/React.createElement("th", null, "\u0414\u0456\u0457"))), /*#__PURE__*/React.createElement("tbody", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("b", {
    className: "strong"
  }, "\u0424\u0456\u043B\u044C\u0442\u0440 \u043C\u0430\u0441\u043B\u044F\u043D\u0438\u0439"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    className: "muted"
  }, "BOSCH \xB7 ", /*#__PURE__*/React.createElement("span", {
    className: "ds-article"
  }, "0 986 452 041"))), /*#__PURE__*/React.createElement("td", {
    className: "muted"
  }, "\u041A\u0438\u0457\u0432 \xB7 ELIT"), /*#__PURE__*/React.createElement("td", {
    className: "num"
  }, "1"), /*#__PURE__*/React.createElement("td", {
    className: "num"
  }, /*#__PURE__*/React.createElement(PriceTag, {
    value: 284,
    size: "sm"
  })), /*#__PURE__*/React.createElement("td", {
    className: "num staffcell"
  }, "210 \u20B4"), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement(Badge, {
    tone: "best-date"
  }, "\u041F\u0456\u0434\u0442\u0432\u0435\u0440\u0434\u0436\u0435\u043D\u043E")), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement(Button, {
    variant: "link"
  }, "\u0417\u0430\u043C\u0456\u043D\u0438\u0442\u0438"))), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("b", {
    className: "strong"
  }, "\u041A\u043E\u043B\u043E\u0434\u043A\u0438 \u0433\u0430\u043B\u044C\u043C\u0456\u0432\u043D\u0456, \u043F\u0435\u0440\u0435\u0434\u043D\u0456"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    className: "muted"
  }, "FEBI BILSTEIN \xB7 ", /*#__PURE__*/React.createElement("span", {
    className: "ds-article"
  }, "16346"))), /*#__PURE__*/React.createElement("td", {
    className: "muted"
  }, "\u041E\u0434\u0435\u0441\u0430 \xB7 AUTOTECHTEILE"), /*#__PURE__*/React.createElement("td", {
    className: "num"
  }, "1"), /*#__PURE__*/React.createElement("td", {
    className: "num"
  }, /*#__PURE__*/React.createElement(PriceTag, {
    value: 1000,
    size: "sm"
  })), /*#__PURE__*/React.createElement("td", {
    className: "num staffcell"
  }, "740 \u20B4"), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement(Badge, {
    tone: "staff"
  }, "\u041D\u0435\u043C\u0430\u0454 \u0432 \u043D\u0430\u044F\u0432\u043D\u043E\u0441\u0442\u0456")), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement(Button, {
    variant: "link"
  }, "\u0417\u0430\u043C\u0456\u043D\u0438\u0442\u0438"))))))), /*#__PURE__*/React.createElement("div", {
    className: "pk-grid pk-grid--2"
  }, /*#__PURE__*/React.createElement("section", {
    className: "ds-card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ds-card__head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "t-eyebrow"
  }, "\u0417\u043C\u0456\u043D\u0438\u0442\u0438 \u0441\u0442\u0430\u0442\u0443\u0441")), /*#__PURE__*/React.createElement("div", {
    className: "ds-card__body",
    style: {
      display: 'grid',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement(SelectField, {
    label: "\u041D\u043E\u0432\u0438\u0439 \u0441\u0442\u0430\u0442\u0443\u0441",
    defaultValue: "confirmed"
  }, /*#__PURE__*/React.createElement("option", {
    value: "confirmed"
  }, "\u041F\u0456\u0434\u0442\u0432\u0435\u0440\u0434\u0436\u0435\u043D\u043E \u2014 \u043A\u043B\u0456\u0454\u043D\u0442 \u043E\u0442\u0440\u0438\u043C\u0430\u0454 \u043B\u0438\u0441\u0442"), /*#__PURE__*/React.createElement("option", {
    value: "ordered"
  }, "\u0417\u0430\u043C\u043E\u0432\u043B\u0435\u043D\u043E \u0443 \u043F\u043E\u0441\u0442\u0430\u0447\u0430\u043B\u044C\u043D\u0438\u043A\u0430"), /*#__PURE__*/React.createElement("option", {
    value: "arrived"
  }, "\u041D\u0430\u0434\u0456\u0439\u0448\u043B\u043E \u0432 \u043C\u0430\u0433\u0430\u0437\u0438\u043D")), /*#__PURE__*/React.createElement(Notice, {
    tone: "warning"
  }, "\u041F\u0456\u0441\u043B\u044F \u0446\u0456\u0454\u0457 \u0437\u043C\u0456\u043D\u0438 \u043A\u043B\u0456\u0454\u043D\u0442\u043E\u0432\u0456 \u043F\u0456\u0434\u0435 \u043B\u0438\u0441\u0442. \u041D\u0430\u0434\u0456\u0441\u043B\u0430\u043D\u0438\u0439 \u043B\u0438\u0441\u0442 \u043D\u0435 \u0432\u0456\u0434\u043A\u043B\u0438\u043A\u0430\u0454\u0442\u044C\u0441\u044F."), /*#__PURE__*/React.createElement(TextField, {
    label: "\u041F\u0440\u0438\u043C\u0456\u0442\u043A\u0430",
    placeholder: "\u041D\u0435\u043E\u0431\u043E\u0432\u02BC\u044F\u0437\u043A\u043E\u0432\u043E \u2014 \u0437\u0430\u043B\u0438\u0448\u0438\u0442\u044C\u0441\u044F \u0432 \u0456\u0441\u0442\u043E\u0440\u0456\u0457"
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "dark"
  }, "\u0417\u043C\u0456\u043D\u0438\u0442\u0438 \u0441\u0442\u0430\u0442\u0443\u0441"))), /*#__PURE__*/React.createElement("section", {
    className: "ds-card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ds-card__head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "t-eyebrow"
  }, "\u0406\u0441\u0442\u043E\u0440\u0456\u044F \u0441\u0442\u0430\u0442\u0443\u0441\u0456\u0432")), /*#__PURE__*/React.createElement("div", {
    className: "ds-card__body"
  }, /*#__PURE__*/React.createElement("ol", {
    className: "pk-history"
  }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("b", null, "\u041D\u043E\u0432\u0435"), /*#__PURE__*/React.createElement("span", null, "01.09 14:20 \xB7 \u0441\u0442\u0432\u043E\u0440\u0435\u043D\u043E")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("b", null, "\u041F\u0456\u0434\u0442\u0432\u0435\u0440\u0434\u0436\u0443\u0454\u0442\u044C\u0441\u044F"), /*#__PURE__*/React.createElement("span", null, "01.09 14:41 \xB7 \u041E\u043B\u0435\u043D\u0430")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("b", null, "\u041F\u0456\u0434\u0431\u0438\u0440\u0430\u0454\u043C\u043E \u0437\u0430\u043C\u0456\u043D\u0443"), /*#__PURE__*/React.createElement("span", null, "01.09 15:02 \xB7 \u041E\u043B\u0435\u043D\u0430 \u2014 \xAB\u043A\u043E\u043B\u043E\u0434\u043E\u043A \u043D\u0435\u043C\u0430\u0454, \u0434\u0437\u0432\u043E\u043D\u044E \u043A\u043B\u0456\u0454\u043D\u0442\u0443\xBB")))))));
}
function PanelApp() {
  const [order, setOrder] = React.useState(null);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("header", {
    className: "pk-topbar"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ds-container pk-topbar__in"
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo.svg",
    alt: "\u0414\u0440\u0430\u0439\u0432",
    className: "pk-logo"
  }), /*#__PURE__*/React.createElement("span", {
    className: "pk-topbar__title"
  }, "\u041F\u0430\u043D\u0435\u043B\u044C"), /*#__PURE__*/React.createElement("nav", {
    className: "pk-nav"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    className: "ds-navlink",
    "data-active": "true"
  }, "\u0417\u0430\u043C\u043E\u0432\u043B\u0435\u043D\u043D\u044F"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    className: "ds-navlink"
  }, "\u041F\u043E\u0432\u0435\u0440\u043D\u0435\u043D\u043D\u044F"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    className: "ds-navlink"
  }, "\u041A\u043E\u0448\u0438\u043A \u043F\u0440\u043E\u0434\u0430\u0432\u0446\u044F"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    className: "ds-navlink"
  }, "\u041A\u043B\u0456\u0454\u043D\u0442\u0438"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    className: "ds-navlink"
  }, "\u041D\u0430\u043B\u0430\u0448\u0442\u0443\u0432\u0430\u043D\u043D\u044F")), /*#__PURE__*/React.createElement("span", {
    className: "pk-user"
  }, "\u041E\u043B\u0435\u043D\u0430 \xB7 \u0432\u0438\u0439\u0442\u0438"))), /*#__PURE__*/React.createElement("main", {
    className: "ds-container pk-main"
  }, order ? /*#__PURE__*/React.createElement(OrderCard, {
    order: order,
    back: () => setOrder(null)
  }) : /*#__PURE__*/React.createElement(OrdersBoard, {
    open: setOrder
  })));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(PanelApp, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/panel/Panel.jsx", error: String((e && e.message) || e) }); }

// ui_kits/storefront/App.jsx
try { (() => {
const D = window.DesignSystem_d7c4f4;
function App() {
  const {
    SiteHeader,
    SiteFooter
  } = D;
  const [route, setRoute] = React.useState('home');
  const [cart, setCart] = React.useState(window.DriveData.CART);
  const [garage, setGarage] = React.useState(window.DriveData.GARAGE);
  const [staffMode, setStaffMode] = React.useState(false);
  const go = next => {
    setRoute(next);
    window.scrollTo({
      top: 0
    });
  };
  const addToCart = part => {
    setCart(lines => {
      const found = lines.find(line => line.article === part.article);
      if (found) return lines.map(line => line === found ? {
        ...line,
        qty: line.qty + (line.step || 1)
      } : line);
      return [...lines, {
        id: Date.now(),
        brand: part.brand,
        article: part.article,
        name: part.name,
        price: part.price,
        qty: 1,
        ship: 'сьогодні'
      }];
    });
    go('cart');
  };
  const car = garage[0] || {
    name: 'BMW 3 (E90) 320d',
    spec: '2004–2011 · 163 к.с.'
  };
  const active = {
    home: null,
    vehicle: 'catalog',
    part: 'catalog',
    search: null,
    cart: 'cart'
  }[route];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(SiteHeader, {
    logoSrc: "../../assets/logo.svg",
    active: active,
    cartCount: cart.reduce((sum, line) => sum + line.qty, 0),
    signedIn: false,
    onNavigate: key => go(key === 'catalog' ? 'vehicle' : key === 'cart' ? 'cart' : 'home')
  }), /*#__PURE__*/React.createElement("main", {
    className: "ds-container kit-main"
  }, route === 'home' ? /*#__PURE__*/React.createElement(HomeScreen, {
    go: go,
    garage: garage,
    onRemoveCar: id => setGarage(cars => cars.filter(c => c.id !== id))
  }) : null, route === 'vehicle' ? /*#__PURE__*/React.createElement(VehicleScreen, {
    go: go,
    car: car,
    addToCart: addToCart
  }) : null, route === 'part' ? /*#__PURE__*/React.createElement(PartScreen, {
    go: go,
    addToCart: addToCart
  }) : null, route === 'search' ? /*#__PURE__*/React.createElement(SearchScreen, {
    go: go,
    addToCart: addToCart,
    staffMode: staffMode,
    onToggleStaff: () => setStaffMode(on => !on)
  }) : null, route === 'cart' ? /*#__PURE__*/React.createElement(CartScreen, {
    go: go,
    lines: cart,
    setQty: (id, qty) => setCart(lines => lines.map(line => line.id === id ? {
      ...line,
      qty
    } : line)),
    removeLine: id => setCart(lines => lines.filter(line => line.id !== id))
  }) : null), /*#__PURE__*/React.createElement("nav", {
    className: "kit-jump",
    "aria-label": "\u0415\u043A\u0440\u0430\u043D\u0438 \u043C\u0430\u043A\u0435\u0442\u0430"
  }, [['home', 'Головна'], ['vehicle', 'Каталог для авто'], ['part', 'Картка деталі'], ['search', 'Пошук'], ['cart', 'Кошик']].map(([key, label]) => /*#__PURE__*/React.createElement("button", {
    key: key,
    type: "button",
    "data-active": route === key ? 'true' : 'false',
    onClick: () => go(key)
  }, label))), /*#__PURE__*/React.createElement(SiteFooter, {
    logoSrc: "../../assets/logo.svg"
  }));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/storefront/App.jsx", error: String((e && e.message) || e) }); }

// ui_kits/storefront/CartSearch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const D = window.DesignSystem_d7c4f4;

/** Результати пошуку за артикулом — другий дизайн списку, з фільтром виду й сортуванням. */
function SearchScreen({
  go,
  addToCart,
  staffMode,
  onToggleStaff
}) {
  const {
    Chip,
    OfferPartRow,
    Notice,
    Button,
    Icon
  } = D;
  const [filter, setFilter] = React.useState(null);
  const [sort, setSort] = React.useState('popularity');
  const rows = window.DriveData.SEARCH_RESULTS.filter(row => filter === null ? true : row.match === filter).map(row => ({
    ...row,
    offers: (row.offers || []).map(offer => ({
      ...offer,
      staff: staffMode ? {
        warehouse: 'Київ · ELIT',
        price: `${Math.round(offer.price * 0.74)} ₴`,
        retailMark: offer.price > 300
      } : null
    }))
  }));
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    className: "ds-section-title"
  }, "\u0420\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u0438 \u0437\u0430 ", /*#__PURE__*/React.createElement("span", {
    className: "ds-article",
    style: {
      fontSize: 'var(--text-lg)'
    }
  }, "0986452041")), /*#__PURE__*/React.createElement(Notice, null, "\xAB0986452041\xBB \u0437\u043D\u0430\u0439\u0434\u0435\u043D\u043E. \u041F\u043E\u043A\u0430\u0437\u0443\u0454\u043C\u043E \u0442\u0430\u043A\u043E\u0436 \u0430\u043D\u0430\u043B\u043E\u0433\u0438 \u2014 \u0437\u0430\u043C\u0456\u043D\u0438 \u0432\u0456\u0434 \u043F\u043E\u0441\u0442\u0430\u0447\u0430\u043B\u044C\u043D\u0438\u043A\u0456\u0432 \u0456 \u0437\u0431\u0456\u0433\u0438 \u0437\u0430 \u043E\u0440\u0438\u0433\u0456\u043D\u0430\u043B\u044C\u043D\u0438\u043C \u043D\u043E\u043C\u0435\u0440\u043E\u043C."), /*#__PURE__*/React.createElement("div", {
    className: "kit-controls"
  }, /*#__PURE__*/React.createElement("span", {
    className: "kit-controls__label"
  }, "\u0412\u0438\u0434"), /*#__PURE__*/React.createElement(Chip, {
    as: "button",
    active: filter === null,
    onClick: () => setFilter(null)
  }, "\u0423\u0441\u0456"), /*#__PURE__*/React.createElement(Chip, {
    as: "button",
    active: filter === 'oem',
    onClick: () => setFilter('oem'),
    count: 1
  }, "\u041E\u0440\u0438\u0433\u0456\u043D\u0430\u043B"), /*#__PURE__*/React.createElement(Chip, {
    as: "button",
    active: filter === 'cross',
    onClick: () => setFilter('cross'),
    count: 2
  }, "\u0410\u043D\u0430\u043B\u043E\u0433 (\u043F\u043E \u043A\u0440\u043E\u0441\u0430\u043C)"), /*#__PURE__*/React.createElement(Chip, {
    as: "button",
    active: filter === 'oe',
    onClick: () => setFilter('oe'),
    count: 1
  }, "\u0410\u043D\u0430\u043B\u043E\u0433 (\u043F\u043E \u043E\u0440\u0438\u0433\u0456\u043D\u0430\u043B\u044C\u043D\u043E\u043C\u0443 \u043D\u043E\u043C\u0435\u0440\u0443)")), /*#__PURE__*/React.createElement("div", {
    className: "kit-controls"
  }, /*#__PURE__*/React.createElement("span", {
    className: "kit-controls__label"
  }, "\u0421\u043E\u0440\u0442\u0443\u0432\u0430\u043D\u043D\u044F"), [['popularity', 'За популярністю'], ['price_asc', 'Спочатку дешевші'], ['ship_date', 'За датою відправлення']].map(([key, label]) => /*#__PURE__*/React.createElement(Chip, {
    key: key,
    as: "button",
    active: sort === key,
    onClick: () => setSort(key)
  }, label)), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "kit-staff",
    onClick: onToggleStaff
  }, /*#__PURE__*/React.createElement(Icon, {
    name: staffMode ? 'eye' : 'eye-off',
    size: 15
  }), staffMode ? 'Сесія продавця' : 'Показати вигляд продавця')), /*#__PURE__*/React.createElement("ul", {
    className: "kit-list"
  }, rows.map(row => /*#__PURE__*/React.createElement(OfferPartRow, _extends({
    key: row.id
  }, row, {
    href: "#part",
    onExpandRest: () => {}
  })))));
}

/** Кошик: рядки з лічильником, липкий підсумок. */
function CartScreen({
  go,
  lines,
  setQty,
  removeLine
}) {
  const {
    PartThumb,
    PriceTag,
    QuantityStepper,
    Button,
    EmptyState,
    Notice,
    Icon,
    ShipDate
  } = D;
  const goods = lines.reduce((sum, line) => sum + line.price * line.qty, 0);
  if (lines.length === 0) {
    return /*#__PURE__*/React.createElement(EmptyState, {
      icon: "shopping-cart",
      title: "\u041A\u043E\u0448\u0438\u043A \u043F\u043E\u0440\u043E\u0436\u043D\u0456\u0439",
      action: /*#__PURE__*/React.createElement(Button, {
        variant: "dark",
        onClick: () => go('home')
      }, "\u041D\u0430 \u0433\u043E\u043B\u043E\u0432\u043D\u0443")
    }, "\u0417\u043D\u0430\u0439\u0434\u0456\u0442\u044C \u0434\u0435\u0442\u0430\u043B\u044C \u0437\u0430 \u0430\u0440\u0442\u0438\u043A\u0443\u043B\u043E\u043C \u2014 \u0456 \u0432\u043E\u043D\u0430 \u0437\u02BC\u044F\u0432\u0438\u0442\u044C\u0441\u044F \u0442\u0443\u0442.");
  }
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    className: "ds-section-title"
  }, "\u041A\u043E\u0448\u0438\u043A ", /*#__PURE__*/React.createElement("span", {
    className: "ds-section-title__count"
  }, lines.length, " \u043F\u043E\u0437\u0438\u0446\u0456\u0457")), /*#__PURE__*/React.createElement("div", {
    className: "kit-cart"
  }, /*#__PURE__*/React.createElement("ul", {
    className: "kit-cart__lines"
  }, lines.map(line => /*#__PURE__*/React.createElement("li", {
    key: line.id,
    className: "kit-cart__line"
  }, /*#__PURE__*/React.createElement(PartThumb, {
    size: 72
  }), /*#__PURE__*/React.createElement("div", {
    className: "kit-cart__id"
  }, /*#__PURE__*/React.createElement("p", {
    className: "kit-cart__meta"
  }, line.brand, " \xB7 ", /*#__PURE__*/React.createElement("span", {
    className: "ds-article"
  }, line.article)), /*#__PURE__*/React.createElement("a", {
    href: "#part",
    className: "ds-row__title",
    onClick: () => go('part')
  }, line.name), /*#__PURE__*/React.createElement("p", {
    className: "kit-cart__ship"
  }, /*#__PURE__*/React.createElement(ShipDate, {
    date: line.ship,
    relative: line.ship === 'сьогодні' ? 'today' : 'later'
  }))), /*#__PURE__*/React.createElement(QuantityStepper, {
    value: line.qty,
    min: line.minQty || 1,
    step: line.step || 1,
    max: 10,
    onChange: next => setQty(line.id, next)
  }), /*#__PURE__*/React.createElement("div", {
    className: "kit-cart__money"
  }, /*#__PURE__*/React.createElement(PriceTag, {
    value: line.price * line.qty,
    size: "md"
  }), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "kit-remove",
    onClick: () => removeLine(line.id)
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "x",
    size: 14
  }), " \u041F\u0440\u0438\u0431\u0440\u0430\u0442\u0438")), line.minQty > 1 ? /*#__PURE__*/React.createElement("div", {
    className: "kit-cart__note"
  }, /*#__PURE__*/React.createElement(Notice, null, "\u041C\u0456\u043D\u0456\u043C\u0430\u043B\u044C\u043D\u0430 \u043A\u0456\u043B\u044C\u043A\u0456\u0441\u0442\u044C \u2014 ", line.minQty, " \u0448\u0442, \u043F\u0440\u043E\u0434\u0430\u0454\u0442\u044C\u0441\u044F \u043A\u0440\u0430\u0442\u043D\u043E ", line.step, " \u0448\u0442")) : null))), /*#__PURE__*/React.createElement("aside", {
    className: "kit-cart__summary"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ds-card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ds-card__body"
  }, /*#__PURE__*/React.createElement("dl", {
    className: "kit-sum"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("dt", null, "\u0422\u043E\u0432\u0430\u0440\u0438"), /*#__PURE__*/React.createElement("dd", null, /*#__PURE__*/React.createElement(PriceTag, {
    value: goods,
    size: "sm"
  }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("dt", null, "\u0417\u043D\u0438\u0436\u043A\u0430"), /*#__PURE__*/React.createElement("dd", null, /*#__PURE__*/React.createElement(PriceTag, {
    value: 0,
    size: "sm"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "kit-sum__total"
  }, /*#__PURE__*/React.createElement("dt", null, "\u0420\u0430\u0437\u043E\u043C"), /*#__PURE__*/React.createElement("dd", null, /*#__PURE__*/React.createElement(PriceTag, {
    value: goods,
    size: "md"
  })))), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    block: true,
    onClick: () => go('home')
  }, "\u041E\u0444\u043E\u0440\u043C\u0438\u0442\u0438 \u0437\u0430\u043C\u043E\u0432\u043B\u0435\u043D\u043D\u044F"), /*#__PURE__*/React.createElement("p", {
    className: "kit-sum__note"
  }, "\u0414\u043E\u0441\u0442\u0430\u0432\u043A\u0430 \u041D\u043E\u0432\u043E\u044E \u041F\u043E\u0448\u0442\u043E\u044E \u0437\u0430 \u0457\u0457 \u0442\u0430\u0440\u0438\u0444\u0430\u043C\u0438, \u0430\u0431\u043E \u0441\u0430\u043C\u043E\u0432\u0438\u0432\u0456\u0437 \u0456\u0437 \u0432\u0443\u043B. \u0413\u0443\u043B\u044F\u0439\u043F\u0456\u043B\u044C\u0441\u044C\u043A\u0430 15."))))));
}
Object.assign(window, {
  SearchScreen,
  CartScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/storefront/CartSearch.jsx", error: String((e && e.message) || e) }); }

// ui_kits/storefront/Catalog.jsx
try { (() => {
const D = window.DesignSystem_d7c4f4;

/** Каталог для однієї машини: дерево ліворуч, список деталей, фільтри праворуч. */
function VehicleScreen({
  go,
  car,
  addToCart
}) {
  const {
    Breadcrumbs,
    CategoryTree,
    PartCard,
    Chip,
    FacetGroup,
    Checkbox,
    Pager,
    Button,
    Icon,
    Notice,
    TextField
  } = D;
  const [sort, setSort] = React.useState('popularity');
  const [facetsOpen, setFacetsOpen] = React.useState(false);
  const parts = window.DriveData.PARTS;
  const sorts = [['popularity', 'За популярністю'], ['price_asc', 'Спочатку дешевші'], ['price_desc', 'Спочатку дорожчі'], ['ship_date', 'За датою відправлення']];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Breadcrumbs, {
    items: [{
      label: 'Головна',
      href: '#',
      onClick: () => go('home')
    }, {
      label: car.name,
      href: '#'
    }, {
      label: 'Фільтри',
      href: '#'
    }, {
      label: 'Фільтр масляний'
    }]
  }), /*#__PURE__*/React.createElement("div", {
    className: "kit-vehicle-head"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    className: "ds-section-title"
  }, "\u0424\u0456\u043B\u044C\u0442\u0440 \u043C\u0430\u0441\u043B\u044F\u043D\u0438\u0439"), /*#__PURE__*/React.createElement("p", {
    className: "kit-vehicle-head__car"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "car-front",
    size: 16
  }), " ", car.name, " \xB7 ", car.spec)), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "sm",
    icon: "repeat",
    onClick: () => go('home')
  }, "\u0406\u043D\u0448\u0430 \u043C\u0430\u0448\u0438\u043D\u0430")), /*#__PURE__*/React.createElement("div", {
    className: "kit-cat"
  }, /*#__PURE__*/React.createElement("aside", {
    className: "kit-cat__tree"
  }, /*#__PURE__*/React.createElement(TextField, {
    label: "\u041F\u043E\u0448\u0443\u043A \u0443 \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0456\u044F\u0445",
    placeholder: "\u041D\u0430\u043F\u0440\u0438\u043A\u043B\u0430\u0434: \u0444\u0456\u043B\u044C\u0442\u0440 \u043C\u0430\u0441\u043B\u0430"
  }), /*#__PURE__*/React.createElement("p", {
    className: "kit-cat__treehint"
  }, "\u0426\u0435 \u043F\u043E\u0448\u0443\u043A \u043F\u043E \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0456\u044F\u0445. \u041F\u043E\u0448\u0443\u043A \u0437\u0430 \u0430\u0440\u0442\u0438\u043A\u0443\u043B\u043E\u043C \u2014 \u0443\u0433\u043E\u0440\u0456 \u0441\u0442\u043E\u0440\u0456\u043D\u043A\u0438."), /*#__PURE__*/React.createElement(CategoryTree, {
    nodes: window.DriveData.TREE,
    openCode: "oil-filter"
  })), /*#__PURE__*/React.createElement("main", {
    className: "kit-cat__main"
  }, /*#__PURE__*/React.createElement("div", {
    className: "kit-controls"
  }, /*#__PURE__*/React.createElement("span", {
    className: "kit-controls__label"
  }, "\u0421\u043E\u0440\u0442\u0443\u0432\u0430\u043D\u043D\u044F"), sorts.map(([key, label]) => /*#__PURE__*/React.createElement(Chip, {
    key: key,
    as: "button",
    active: sort === key,
    onClick: () => setSort(key)
  }, label)), /*#__PURE__*/React.createElement(Button, {
    className: "kit-facets-toggle",
    variant: "secondary",
    size: "sm",
    icon: "sliders-horizontal",
    onClick: () => setFacetsOpen(open => !open)
  }, "\u0424\u0456\u043B\u044C\u0442\u0440\u0438")), /*#__PURE__*/React.createElement("p", {
    className: "kit-total"
  }, "15 \u0434\u0435\u0442\u0430\u043B\u0435\u0439"), /*#__PURE__*/React.createElement("ul", {
    className: "kit-list"
  }, parts.map(part => /*#__PURE__*/React.createElement(PartCard, {
    key: part.id,
    brand: part.brand,
    article: part.article,
    name: part.name,
    price: part.price,
    oem: part.oem,
    inStock: part.qty > 0,
    shipRelative: part.rel,
    shipDate: part.date,
    cutoff: part.cutoff,
    analogsCount: part.analogs,
    fasterOffers: part.id === 1,
    href: "#part",
    onBuy: () => addToCart(part)
  }))), /*#__PURE__*/React.createElement(Pager, {
    page: 1,
    pages: 3
  })), /*#__PURE__*/React.createElement("aside", {
    className: `kit-cat__facets${facetsOpen ? ' is-open' : ''}`
  }, /*#__PURE__*/React.createElement("div", {
    className: "kit-facets-head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "t-eyebrow"
  }, "\u0424\u0456\u043B\u044C\u0442\u0440\u0438"), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "kit-reset"
  }, "\u0421\u043A\u0438\u043D\u0443\u0442\u0438")), /*#__PURE__*/React.createElement(FacetGroup, {
    title: "\u0411\u0440\u0435\u043D\u0434",
    moreCount: 14
  }, window.DriveData.BRANDS.slice(0, 5).map((brand, index) => /*#__PURE__*/React.createElement(Checkbox, {
    key: brand,
    label: brand,
    count: 24 - index * 4,
    defaultChecked: index === 0
  }))), /*#__PURE__*/React.createElement(FacetGroup, {
    title: "\u0422\u0438\u043F"
  }, /*#__PURE__*/React.createElement(Checkbox, {
    label: "\u041E\u0440\u0438\u0433\u0456\u043D\u0430\u043B",
    count: 4
  }), /*#__PURE__*/React.createElement(Checkbox, {
    label: "\u0410\u043D\u0430\u043B\u043E\u0433",
    count: 11
  })), /*#__PURE__*/React.createElement(FacetGroup, {
    title: "\u0426\u0456\u043D\u0430, \u20B4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "kit-price-range"
  }, /*#__PURE__*/React.createElement(TextField, {
    placeholder: "161",
    inputMode: "numeric"
  }), /*#__PURE__*/React.createElement(TextField, {
    placeholder: "318",
    inputMode: "numeric"
  }))), /*#__PURE__*/React.createElement(FacetGroup, {
    title: "\u0412\u0438\u0441\u043E\u0442\u0430, \u043C\u043C",
    moreCount: 7
  }, /*#__PURE__*/React.createElement(Checkbox, {
    label: "79",
    count: 6
  }), /*#__PURE__*/React.createElement(Checkbox, {
    label: "86",
    count: 4
  }), /*#__PURE__*/React.createElement(Checkbox, {
    label: "93",
    count: 2
  })))));
}
Object.assign(window, {
  VehicleScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/storefront/Catalog.jsx", error: String((e && e.message) || e) }); }

// ui_kits/storefront/Home.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const D = window.DesignSystem_d7c4f4;

/** Головна. Search first, car chooser second, and no heading that restates the field below it. */
function HomeScreen({
  go,
  garage,
  onRemoveCar
}) {
  const {
    CashbackBanner,
    SearchField,
    SearchSuggests,
    SearchSuggestRow,
    VehicleFunnel,
    GarageCard,
    Button,
    TextField,
    Notice,
    Icon
  } = D;
  const [chosen, setChosen] = React.useState({});
  const [typed, setTyped] = React.useState('');
  const levels = ['mark', 'general_model', 'year', 'body', 'engine'];
  const activeLevel = levels.find(level => !chosen[level]) || null;
  const choose = (level, value) => {
    if (value === '__change') {
      const next = {};
      for (const key of levels) {
        if (key === level) break;
        next[key] = chosen[key];
      }
      return setChosen(next);
    }
    const next = {
      ...chosen,
      [level]: value
    };
    setChosen(next);
    if (level === 'engine') go('vehicle');
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "kit-home"
  }, /*#__PURE__*/React.createElement("section", {
    className: "kit-hero"
  }, /*#__PURE__*/React.createElement(CashbackBanner, {
    percent: "30"
  }), /*#__PURE__*/React.createElement("h1", {
    className: "t-display-lg kit-hero__title"
  }, "\u0417\u043D\u0430\u0439\u0434\u0456\u0442\u044C \u0434\u0435\u0442\u0430\u043B\u044C \u0437\u0430 \u0430\u0440\u0442\u0438\u043A\u0443\u043B\u043E\u043C"), /*#__PURE__*/React.createElement("p", {
    className: "kit-hero__lead"
  }, "\u041D\u043E\u043C\u0435\u0440 \u0437 \u043A\u043E\u0440\u043E\u0431\u043A\u0438 \u0430\u0431\u043E \u0437\u0456 \u0441\u0442\u0430\u0440\u043E\u0457 \u0437\u0430\u043F\u0447\u0430\u0441\u0442\u0438\u043D\u0438. \u041F\u0440\u043E\u0431\u0456\u043B\u0438, \u043A\u0440\u0430\u043F\u043A\u0438 \u0439 \u0434\u0435\u0444\u0456\u0441\u0438 \u043C\u043E\u0436\u043D\u0430 \u043D\u0435 \u0432\u0432\u043E\u0434\u0438\u0442\u0438."), /*#__PURE__*/React.createElement(SearchField, {
    variant: "hero",
    value: typed,
    onChange: event => setTyped(event.target.value),
    onKeyDown: event => event.key === 'Enter' && go('search'),
    suggests: typed.length > 2 ? /*#__PURE__*/React.createElement(SearchSuggests, {
      heading: "\u0417\u043D\u0430\u0439\u0434\u0435\u043D\u0456 \u0434\u0435\u0442\u0430\u043B\u0456"
    }, /*#__PURE__*/React.createElement(SearchSuggestRow, {
      article: "0 986 452 041",
      brand: "BOSCH",
      name: "\u0424\u0456\u043B\u044C\u0442\u0440 \u043C\u0430\u0441\u043B\u044F\u043D\u0438\u0439",
      onClick: () => go('part')
    }), /*#__PURE__*/React.createElement(SearchSuggestRow, {
      article: "0 986 452 042",
      brand: "BOSCH",
      name: "\u0424\u0456\u043B\u044C\u0442\u0440 \u043C\u0430\u0441\u043B\u044F\u043D\u0438\u0439",
      onClick: () => go('part')
    })) : null
  }), /*#__PURE__*/React.createElement("p", {
    className: "kit-hero__example"
  }, "\u041D\u0430\u043F\u0440\u0438\u043A\u043B\u0430\u0434 ", /*#__PURE__*/React.createElement("span", {
    className: "ds-article"
  }, "0 986 452 041"))), /*#__PURE__*/React.createElement("section", {
    className: "kit-block"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "ds-section-title"
  }, "\u041F\u0456\u0434\u0431\u0456\u0440 \u0437\u0430 \u0430\u0432\u0442\u043E"), /*#__PURE__*/React.createElement("p", {
    className: "kit-block__lead"
  }, "\u041E\u0431\u0435\u0440\u0456\u0442\u044C \u043C\u0430\u0448\u0438\u043D\u0443 \u2014 \u0434\u0430\u043B\u0456 \u043A\u0430\u0442\u0430\u043B\u043E\u0433 \u043F\u043E\u043A\u0430\u0436\u0435 \u043B\u0438\u0448\u0435 \u0442\u0435, \u0449\u043E \u043D\u0430 \u043D\u0435\u0457 \u043F\u0456\u0434\u0445\u043E\u0434\u0438\u0442\u044C."), /*#__PURE__*/React.createElement(VehicleFunnel, {
    chosen: chosen,
    activeLevel: activeLevel,
    options: window.DriveData.FUNNEL_OPTIONS,
    onChoose: choose
  }), /*#__PURE__*/React.createElement("div", {
    className: "kit-vin"
  }, /*#__PURE__*/React.createElement("div", {
    className: "kit-vin__fields"
  }, /*#__PURE__*/React.createElement(TextField, {
    label: "VIN-\u043A\u043E\u0434",
    mono: true,
    placeholder: "WBAVB13506PT22180",
    hint: "17 \u0437\u043D\u0430\u043A\u0456\u0432 \u0456\u0437 \u0442\u0435\u0445\u043F\u0430\u0441\u043F\u043E\u0440\u0442\u0430 \u0430\u0431\u043E \u0437-\u043F\u0456\u0434 \u043B\u043E\u0431\u043E\u0432\u043E\u0433\u043E \u0441\u043A\u043B\u0430"
  }), /*#__PURE__*/React.createElement(TextField, {
    label: "\u0414\u0435\u0440\u0436\u0430\u0432\u043D\u0438\u0439 \u043D\u043E\u043C\u0435\u0440",
    mono: true,
    placeholder: "\u0410\u04101234\u0412\u0412",
    hint: "\u0417\u0430\u043F\u043E\u0432\u043D\u0456\u0442\u044C \u043E\u0434\u043D\u0435 \u043F\u043E\u043B\u0435 \u2014 \u0430\u0431\u043E VIN, \u0430\u0431\u043E \u043D\u043E\u043C\u0435\u0440"
  })), /*#__PURE__*/React.createElement(Button, {
    variant: "dark",
    icon: "car-front",
    onClick: () => go('vehicle')
  }, "\u0417\u043D\u0430\u0439\u0442\u0438 \u043C\u0430\u0448\u0438\u043D\u0443"))), garage.length > 0 ? /*#__PURE__*/React.createElement("section", {
    className: "kit-block"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "ds-section-title"
  }, "\u041C\u0456\u0439 \u0433\u0430\u0440\u0430\u0436 ", /*#__PURE__*/React.createElement("span", {
    className: "ds-section-title__count"
  }, "\u043C\u0430\u0448\u0438\u043D\u0430 \u0434\u043E\u0434\u0430\u0454\u0442\u044C\u0441\u044F \u0441\u0430\u043C\u0430, \u0449\u043E\u0439\u043D\u043E \u0432\u0438 \u0457\u0457 \u0437\u043D\u0430\u0439\u0434\u0435\u0442\u0435")), /*#__PURE__*/React.createElement("ul", {
    className: "kit-garage"
  }, garage.map(car => /*#__PURE__*/React.createElement(GarageCard, _extends({
    key: car.id
  }, car, {
    href: "#",
    onRemove: () => onRemoveCar(car.id)
  }))))) : null);
}
Object.assign(window, {
  HomeScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/storefront/Home.jsx", error: String((e && e.message) || e) }); }

// ui_kits/storefront/Part.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const D = window.DesignSystem_d7c4f4;

/** Картка деталі: галерея, пропозиції з сортуванням, вкладки. */
function PartScreen({
  go,
  addToCart
}) {
  const {
    Breadcrumbs,
    PartThumb,
    Badge,
    PriceTag,
    OfferRow,
    OfferPartRow,
    TabStrip,
    Button,
    SelectField,
    Notice,
    Icon
  } = D;
  const [tab, setTab] = React.useState('analogs');
  const [expanded, setExpanded] = React.useState(false);
  const [sort, setSort] = React.useState('');
  const all = window.DriveData.OFFERS;
  const offers = expanded || sort ? all : all.slice(0, 3);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Breadcrumbs, {
    items: [{
      label: 'Головна',
      href: '#'
    }, {
      label: 'BMW 3 (E90) 320d',
      href: '#'
    }, {
      label: 'Фільтри',
      href: '#'
    }, {
      label: 'Фільтр масляний'
    }]
  }), /*#__PURE__*/React.createElement("div", {
    className: "kit-part"
  }, /*#__PURE__*/React.createElement("div", {
    className: "kit-part__gallery"
  }, /*#__PURE__*/React.createElement(PartThumb, {
    size: 380
  }), /*#__PURE__*/React.createElement("div", {
    className: "kit-part__thumbs"
  }, /*#__PURE__*/React.createElement(PartThumb, {
    size: 64
  }), /*#__PURE__*/React.createElement(PartThumb, {
    size: 64
  }), /*#__PURE__*/React.createElement(PartThumb, {
    size: 64
  }))), /*#__PURE__*/React.createElement("div", {
    className: "kit-part__main"
  }, /*#__PURE__*/React.createElement("p", {
    className: "kit-part__brand"
  }, "BOSCH \xB7 ", /*#__PURE__*/React.createElement("span", {
    className: "ds-article"
  }, "0 986 452 041")), /*#__PURE__*/React.createElement("h1", {
    className: "t-display-md kit-part__title"
  }, "\u0424\u0456\u043B\u044C\u0442\u0440 \u043C\u0430\u0441\u043B\u044F\u043D\u0438\u0439"), /*#__PURE__*/React.createElement("p", {
    className: "kit-part__badges"
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "oem"
  }, "\u041E\u0440\u0438\u0433\u0456\u043D\u0430\u043B"), /*#__PURE__*/React.createElement(Badge, {
    tone: "neutral"
  }, "\u041F\u0456\u0434\u0445\u043E\u0434\u0438\u0442\u044C \u043D\u0430 41 \u0430\u0432\u0442\u043E")), /*#__PURE__*/React.createElement("div", {
    className: "kit-part__offers"
  }, /*#__PURE__*/React.createElement("div", {
    className: "kit-part__offershead"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "ds-section-title",
    style: {
      fontSize: 'var(--display-xs)'
    }
  }, "\u041F\u0440\u043E\u043F\u043E\u0437\u0438\u0446\u0456\u0457 ", /*#__PURE__*/React.createElement("span", {
    className: "ds-section-title__count"
  }, all.length)), /*#__PURE__*/React.createElement(SelectField, {
    value: sort,
    onChange: event => {
      setSort(event.target.value);
      setExpanded(true);
    }
  }, /*#__PURE__*/React.createElement("option", {
    value: ""
  }, "\u0421\u043F\u043E\u0447\u0430\u0442\u043A\u0443 \u0440\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u043E\u0432\u0430\u043D\u0456"), /*#__PURE__*/React.createElement("option", {
    value: "price"
  }, "\u0417\u0430 \u0446\u0456\u043D\u043E\u044E"), /*#__PURE__*/React.createElement("option", {
    value: "shipDate"
  }, "\u0417\u0430 \u0434\u0430\u0442\u043E\u044E \u0432\u0456\u0434\u043F\u0440\u0430\u0432\u043A\u0438"), /*#__PURE__*/React.createElement("option", {
    value: "quantity"
  }, "\u0417\u0430 \u043A\u0456\u043B\u044C\u043A\u0456\u0441\u0442\u044E"))), /*#__PURE__*/React.createElement("ul", {
    className: "kit-offers"
  }, offers.map(offer => /*#__PURE__*/React.createElement(OfferRow, _extends({
    key: offer.key
  }, offer, {
    onAdd: () => addToCart({
      id: 1,
      brand: 'BOSCH',
      article: '0 986 452 041',
      name: 'Фільтр масляний',
      price: offer.price
    })
  })))), !expanded && !sort ? /*#__PURE__*/React.createElement(Button, {
    variant: "link",
    onClick: () => setExpanded(true)
  }, "\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u0438 \u0440\u0435\u0448\u0442\u0443 (", all.length - 3, ")") : null, /*#__PURE__*/React.createElement("p", {
    className: "kit-terms"
  }, "\u0423\u043C\u043E\u0432\u0438 \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0438, \u043E\u0431\u043C\u0456\u043D\u0443, \u043F\u043E\u0432\u0435\u0440\u043D\u0435\u043D\u043D\u044F \u0439 \u0433\u0430\u0440\u0430\u043D\u0442\u0456\u0457 \u2014 \u0443 \u0440\u043E\u0437\u0434\u0456\u043B\u0456 ", /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "\xAB\u0414\u043E\u0441\u0442\u0430\u0432\u043A\u0430, \u043E\u0431\u043C\u0456\u043D \u0456 \u043F\u043E\u0432\u0435\u0440\u043D\u0435\u043D\u043D\u044F\xBB"), ".")))), /*#__PURE__*/React.createElement("div", {
    className: "kit-tabs"
  }, /*#__PURE__*/React.createElement(TabStrip, {
    active: tab,
    onSelect: setTab,
    tabs: [{
      key: 'analogs',
      label: 'Аналоги',
      count: 12
    }, {
      key: 'specs',
      label: 'Характеристики'
    }, {
      key: 'oe',
      label: 'Оригінальні номери',
      count: 4
    }, {
      key: 'vehicles',
      label: 'Застосовність',
      count: 41
    }]
  }), tab === 'analogs' ? /*#__PURE__*/React.createElement("div", {
    className: "kit-tabpanel"
  }, /*#__PURE__*/React.createElement(Notice, null, "\u041F\u043E\u0441\u0442\u0430\u0447\u0430\u043B\u044C\u043D\u0438\u043A\u0438 \u0432\u043A\u0430\u0437\u0443\u044E\u0442\u044C \u0446\u0456 \u0434\u0435\u0442\u0430\u043B\u0456 \u044F\u043A \u0437\u0430\u043C\u0456\u043D\u0443, \u0430\u0431\u043E \u0432 \u043D\u0438\u0445 \u0437\u0431\u0456\u0433\u0430\u0454\u0442\u044C\u0441\u044F \u043E\u0440\u0438\u0433\u0456\u043D\u0430\u043B\u044C\u043D\u0438\u0439 \u043D\u043E\u043C\u0435\u0440."), /*#__PURE__*/React.createElement("ul", {
    className: "kit-list"
  }, window.DriveData.ANALOGS.map(analog => /*#__PURE__*/React.createElement(OfferPartRow, _extends({
    key: analog.id
  }, analog, {
    href: "#"
  }))))) : null, tab === 'specs' ? /*#__PURE__*/React.createElement("div", {
    className: "kit-tabpanel"
  }, /*#__PURE__*/React.createElement("table", {
    className: "kit-table"
  }, /*#__PURE__*/React.createElement("tbody", null, window.DriveData.SPECS.map(([name, value]) => /*#__PURE__*/React.createElement("tr", {
    key: name
  }, /*#__PURE__*/React.createElement("th", null, name), /*#__PURE__*/React.createElement("td", null, value)))))) : null, tab === 'oe' ? /*#__PURE__*/React.createElement("div", {
    className: "kit-tabpanel"
  }, /*#__PURE__*/React.createElement("ul", {
    className: "kit-oe"
  }, window.DriveData.OE_NUMBERS.map(number => /*#__PURE__*/React.createElement("li", {
    key: number
  }, /*#__PURE__*/React.createElement("span", {
    className: "ds-article"
  }, number), /*#__PURE__*/React.createElement(Button, {
    variant: "link",
    icon: "copy"
  }, "\u0421\u043A\u043E\u043F\u0456\u044E\u0432\u0430\u0442\u0438"))))) : null, tab === 'vehicles' ? /*#__PURE__*/React.createElement("div", {
    className: "kit-tabpanel"
  }, /*#__PURE__*/React.createElement("ul", {
    className: "kit-vehicles"
  }, window.DriveData.VEHICLES.map(vehicle => /*#__PURE__*/React.createElement("li", {
    key: vehicle
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "car-front",
    size: 16
  }), vehicle))), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "sm"
  }, "\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u0438 \u0432\u0441\u0456 41")) : null));
}
Object.assign(window, {
  PartScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/storefront/Part.jsx", error: String((e && e.message) || e) }); }

// ui_kits/storefront/data.js
try { (() => {
/* Mock catalogue data for the Драйв storefront UI kit. Shapes follow the real API. */
const BRANDS = ['BOSCH', 'MANN-FILTER', 'FEBI BILSTEIN', 'MAHLE', 'SACHS', 'LEMFÖRDER', 'HELLA'];
const PARTS = [{
  id: 1,
  brand: 'BOSCH',
  article: '0 986 452 041',
  name: 'Фільтр масляний',
  price: 284,
  oem: true,
  analogs: 12,
  qty: 10,
  capped: true,
  rel: 'today',
  cutoff: '21:00'
}, {
  id: 2,
  brand: 'MANN-FILTER',
  article: 'W 712/75',
  name: 'Фільтр масляний',
  price: 196,
  oem: false,
  analogs: 8,
  qty: 4,
  rel: 'tomorrow'
}, {
  id: 3,
  brand: 'MAHLE',
  article: 'OC 90 OF',
  name: 'Фільтр масляний',
  price: 231,
  oem: false,
  analogs: 8,
  qty: 2,
  minQty: 2,
  rel: 'later',
  date: '4 вер, пт'
}, {
  id: 4,
  brand: 'FEBI BILSTEIN',
  article: '32100',
  name: 'Фільтр масляний',
  price: 161,
  oem: false,
  analogs: 3,
  qty: 0
}, {
  id: 5,
  brand: 'HELLA',
  article: '8DD 355 100-961',
  name: 'Фільтр масляний з ущільненням',
  price: 318,
  oem: false,
  analogs: 5,
  qty: 6,
  rel: 'today',
  cutoff: '18:00'
}];
const TREE = [{
  code: 'filters',
  name: 'Фільтри',
  count: 41,
  children: [{
    code: 'oil-filter',
    name: 'Фільтр масляний',
    count: 15,
    href: '#oil-filter'
  }, {
    code: 'air-filter',
    name: 'Фільтр повітряний',
    count: 12,
    href: '#air'
  }, {
    code: 'fuel-filter',
    name: 'Фільтр паливний',
    count: 9,
    href: '#fuel'
  }, {
    code: 'cabin-filter',
    name: 'Фільтр салона',
    count: 5,
    href: '#cabin'
  }]
}, {
  code: 'brakes',
  name: 'Гальмівна система',
  count: 64,
  children: [{
    code: 'brake-pads',
    name: 'Колодки',
    count: 31,
    children: [{
      code: 'pads-front',
      name: 'Передні',
      count: 18,
      href: '#pf'
    }, {
      code: 'pads-rear',
      name: 'Задні',
      count: 13,
      href: '#pr'
    }]
  }, {
    code: 'brake-discs',
    name: 'Диски гальмівні',
    count: 22,
    href: '#bd'
  }, {
    code: 'brake-hoses',
    name: 'Шланги гальмівні',
    count: 11,
    href: '#bh'
  }]
}, {
  code: 'engine',
  name: 'Двигун',
  count: 128,
  children: [{
    code: 'belts',
    name: 'Ремені й ролики',
    count: 34,
    href: '#belts'
  }, {
    code: 'gaskets',
    name: 'Прокладки',
    count: 51,
    href: '#gaskets'
  }, {
    code: 'cooling',
    name: 'Охолодження',
    count: 43,
    href: '#cooling'
  }]
}, {
  code: 'suspension',
  name: 'Підвіска й кермо',
  count: 96,
  children: [{
    code: 'shocks',
    name: 'Амортизатори',
    count: 24,
    href: '#shocks'
  }, {
    code: 'arms',
    name: 'Важелі',
    count: 30,
    href: '#arms'
  }, {
    code: 'bushings',
    name: 'Сайлентблоки',
    count: 42,
    href: '#bush'
  }]
}, {
  code: 'electrics',
  name: 'Електрика',
  count: 57,
  children: [{
    code: 'batteries',
    name: 'Акумулятори',
    count: 12,
    href: '#bat'
  }, {
    code: 'lamps',
    name: 'Лампи',
    count: 45,
    href: '#lamps'
  }]
}];
const OFFERS = [{
  key: 'o1',
  price: 284,
  qty: 10,
  qtyCapped: true,
  shipRelative: 'today',
  cutoff: '21:00',
  bestPrice: true,
  primary: true
}, {
  key: 'o2',
  price: 299,
  qty: 3,
  minQty: 2,
  shipRelative: 'tomorrow'
}, {
  key: 'o3',
  price: 312,
  qty: 8,
  shipDate: '4 вер, пт',
  shipRelative: 'later',
  bestDate: true
}, {
  key: 'o4',
  price: 341,
  qty: 2,
  shipDate: '5 вер, сб',
  shipRelative: 'later'
}, {
  key: 'o5',
  price: 368,
  qty: 10,
  qtyCapped: true,
  shipDate: '8 вер, пн',
  shipRelative: 'later'
}];
const ANALOGS = [{
  id: 21,
  brand: 'MANN-FILTER',
  article: 'W 712/75',
  name: 'Фільтр масляний',
  match: 'cross',
  restCount: 3,
  restFrom: 241,
  offers: [{
    key: 'a1',
    price: 196,
    qty: 4,
    shipRelative: 'tomorrow',
    bestPrice: true,
    primary: true
  }, {
    key: 'a2',
    price: 214,
    qty: 9,
    shipDate: '4 вер, пт',
    shipRelative: 'later'
  }]
}, {
  id: 22,
  brand: 'MAHLE',
  article: 'OC 90 OF',
  name: 'Фільтр масляний',
  match: 'oe',
  restCount: 0,
  offers: [{
    key: 'b1',
    price: 231,
    qty: 2,
    minQty: 2,
    shipDate: '4 вер, пт',
    shipRelative: 'later',
    primary: true
  }]
}, {
  id: 23,
  brand: 'FEBI BILSTEIN',
  article: '32100',
  name: 'Фільтр масляний',
  match: 'cross',
  inStock: false,
  offers: []
}];
const SPECS = [['Висота, мм', '79'], ['Зовнішній діаметр, мм', '76'], ['Внутрішній діаметр, мм', '62,5'], ['Тип фільтра', 'Фільтр, що вкручується'], ['Тиск відкриття перепускного клапана, бар', '1,0'], ['Зворотний клапан', 'так']];
const OE_NUMBERS = ['11 42 7 953 129', '11 42 7 542 021', '11 42 7 508 969', '11 42 7 837 997'];
const VEHICLES = ['BMW 1 (E87) 118 d · 2006–2011 · 122 к.с.', 'BMW 3 (E90) 318 d · 2005–2011 · 122 к.с.', 'BMW 3 (E90) 320 d · 2004–2011 · 163 к.с.', 'BMW 5 (E60) 520 d · 2005–2010 · 163 к.с.', 'BMW X3 (E83) 2.0 d · 2004–2011 · 150 к.с.'];
const GARAGE = [{
  id: 'bmw',
  name: 'BMW 3 (E90) 320d',
  spec: '2004–2011 · 163 к.с. · задній привод',
  vin: 'WBAVB13506PT22180',
  oemHref: '#oem'
}, {
  id: 'skoda',
  name: 'Skoda Octavia II 1.9 TDI',
  spec: '2004–2013 · 105 к.с. · передній привод'
}];
const FUNNEL_OPTIONS = {
  mark: ['AUDI', 'BMW', 'FORD', 'MERCEDES-BENZ', 'OPEL', 'RENAULT', 'SKODA', 'TOYOTA', 'VOLKSWAGEN'],
  general_model: ['1 (E87)', '3 (E90)', '5 (E60)', 'X3 (E83)', 'X5 (E70)'],
  year: ['2005', '2006', '2007', '2008', '2009', '2010'],
  body: ['Седан', 'Універсал', 'Хетчбек'],
  engine: ['2.0 Дизель', '2.0 Бензин', '3.0 Дизель']
};
const SEARCH_RESULTS = [{
  id: 31,
  brand: 'BOSCH',
  article: '0 986 452 041',
  name: 'Фільтр масляний',
  match: 'oem',
  restCount: 4,
  restFrom: 301,
  offers: [{
    key: 's1',
    price: 284,
    qty: 10,
    qtyCapped: true,
    shipRelative: 'today',
    cutoff: '21:00',
    bestPrice: true,
    primary: true
  }, {
    key: 's2',
    price: 299,
    qty: 3,
    minQty: 2,
    shipRelative: 'tomorrow'
  }, {
    key: 's3',
    price: 312,
    qty: 8,
    shipDate: '4 вер, пт',
    shipRelative: 'later',
    bestDate: true
  }]
}].concat(ANALOGS);
const CART = [{
  id: 1,
  brand: 'BOSCH',
  article: '0 986 452 041',
  name: 'Фільтр масляний',
  price: 284,
  qty: 1,
  ship: 'сьогодні'
}, {
  id: 3,
  brand: 'MAHLE',
  article: 'OC 90 OF',
  name: 'Фільтр масляний',
  price: 231,
  qty: 2,
  minQty: 2,
  step: 2,
  ship: '4 вер, пт'
}];
window.DriveData = {
  BRANDS,
  PARTS,
  TREE,
  OFFERS,
  ANALOGS,
  SPECS,
  OE_NUMBERS,
  VEHICLES,
  GARAGE,
  FUNNEL_OPTIONS,
  SEARCH_RESULTS,
  CART
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/storefront/data.js", error: String((e && e.message) || e) }); }

__ds_ns.CashbackBanner = __ds_scope.CashbackBanner;

__ds_ns.CategoryTree = __ds_scope.CategoryTree;

__ds_ns.FacetGroup = __ds_scope.FacetGroup;

__ds_ns.GarageCard = __ds_scope.GarageCard;

__ds_ns.OfferPartRow = __ds_scope.OfferPartRow;

__ds_ns.OfferRow = __ds_scope.OfferRow;

__ds_ns.PartCard = __ds_scope.PartCard;

__ds_ns.PartThumb = __ds_scope.PartThumb;

__ds_ns.PriceTag = __ds_scope.PriceTag;

__ds_ns.ShipDate = __ds_scope.ShipDate;

__ds_ns.StockLabel = __ds_scope.StockLabel;

__ds_ns.VehicleFunnel = __ds_scope.VehicleFunnel;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Chip = __ds_scope.Chip;

__ds_ns.EmptyState = __ds_scope.EmptyState;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Notice = __ds_scope.Notice;

__ds_ns.Skeleton = __ds_scope.Skeleton;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.QuantityStepper = __ds_scope.QuantityStepper;

__ds_ns.SearchField = __ds_scope.SearchField;

__ds_ns.SearchSuggests = __ds_scope.SearchSuggests;

__ds_ns.SearchSuggestRow = __ds_scope.SearchSuggestRow;

__ds_ns.SelectField = __ds_scope.SelectField;

__ds_ns.TextField = __ds_scope.TextField;

__ds_ns.Breadcrumbs = __ds_scope.Breadcrumbs;

__ds_ns.Pager = __ds_scope.Pager;

__ds_ns.SiteFooter = __ds_scope.SiteFooter;

__ds_ns.SiteHeader = __ds_scope.SiteHeader;

__ds_ns.TabStrip = __ds_scope.TabStrip;

/* ═══ Standardisation patch — 2026-09-02 ═══════════════════════════════════
   SiteHeader now owns the black utility bar (cashback promise + phone menu) and a nav
   without «Контакти»; SiteFooter owns the shop's real contact block (map link, stacked
   hours, marked phones, live document links, the підбір CTA). Both were hand-rolled per
   page and patched from page logic before this. Fold into the JSX sources in the master
   design system: components/navigation/SiteHeader.jsx and SiteFooter.jsx.            */
try { (() => {
const h = React.createElement;

const SHOP = {
  address: 'м. Запоріжжя, вул. Гуляйпільська 15',
  mapHref: 'https://drive.zp.ua/go/map',
  email: 'magazine_drive@ukr.net',
  hours: [['пн–пт', '09:00–16:00'], ['сб', '09:00–14:00'], ['нд', 'вихідний']],
  // Placeholder operator marks — the shop supplies the real glyphs later.
  phones: [
    { number: '+38 (099) 045-04-40', href: 'tel:+380990450440', mark: 'V', operator: 'Vodafone' },
    { number: '+38 (098) 559-32-65', href: 'tel:+380985593265', mark: 'К', operator: 'Київстар' },
  ],
  docs: [
    { label: 'Публічний договір (оферта)', href: 'Документи.dc.html#offer' },
    { label: 'Політика конфіденційності', href: 'Документи.dc.html#privacy' },
    { label: 'Доставка, обмін і повернення', href: 'Документи.dc.html#returns' },
  ],
  pages: {
    home: 'Головна.dc.html',
    catalog: 'Каталог за авто.dc.html',
    oem: 'Оригінальні каталоги.dc.html',
    account: 'Вхід.dc.html',
    cart: 'Кошик.dc.html',
    request: 'Головна.dc.html#request',
  },
};

function PhoneMenu({ phones }) {
  const [open, setOpen] = React.useState(false);
  React.useEffect(() => {
    if (!open) return undefined;
    const close = () => setOpen(false);
    document.addEventListener('click', close);
    return () => document.removeEventListener('click', close);
  }, [open]);
  return h('div', { className: 'ds-phonemenu' },
    h('button', {
      type: 'button', className: 'ds-phonemenu__trigger',
      'aria-expanded': open ? 'true' : 'false',
      onClick: (e) => { e.stopPropagation(); setOpen(!open); },
    },
      h(__ds_scope.Icon, { name: 'phone', size: 13 }),
      phones[0].number,
      h(__ds_scope.Icon, { name: 'chevron-down', size: 13 })),
    open
      ? h('div', { className: 'ds-phonemenu__list' }, phones.map((p) => h('a', {
          key: p.number, href: p.href, 'aria-label': p.operator + ' ' + p.number,
        }, h('span', { className: 'ds-phonemenu__mark' }, p.mark), p.number)))
      : null);
}

/**
 * The site header. Two bands: the black utility bar (the one cashback promise plus the
 * shop's numbers) and the white band with the mark, the article search and the nav.
 */
function SiteHeader({
  logoSrc = 'assets/logo-v2.svg',
  phones = SHOP.phones,
  cashbackPercent = 7,
  cartCount = 0,
  active = '',
  signedIn = false,
  onNavigate,
  className = '',
}) {
  const nav_ = (key) => (event) => {
    if (!onNavigate) return;
    event.preventDefault();
    onNavigate(key);
  };
  const link = (key) => encodeURI(SHOP.pages[key] || '#');
  const nav = [
    { key: 'catalog', label: 'Каталог за авто' },
    { key: 'oem', label: 'Оригінальні каталоги' },
  ];
  return h('header', { className: ['ds-header', className].filter(Boolean).join(' ') },
    h('div', { className: 'ds-utilitybar' },
      h('div', { className: 'ds-container ds-utilitybar__inner' },
        cashbackPercent
          ? h('span', { className: 'ds-utilitybar__promo' },
              h(__ds_scope.Icon, { name: 'badge-percent', size: 13 }),
              'Отримуйте до ', h('strong', null, cashbackPercent + '%'), ' кешбеку на будь-яке замовлення')
          : null,
        h(PhoneMenu, { phones }))),
    h('div', {
      className: 'ds-container',
      style: {
        display: 'flex', flexWrap: 'wrap', alignItems: 'center',
        gap: 'var(--space-4) var(--space-6)', minHeight: 'var(--header-h)',
        paddingBlock: 'var(--space-3)',
      },
    },
      h('a', { href: link('home'), style: { flex: 'none' }, onClick: nav_('home') },
        h('img', { src: logoSrc, alt: 'Драйв', style: { height: 38, width: 'auto', display: 'block' } })),
      h('div', { style: { flex: '1 1 240px', minWidth: 200, maxWidth: 520 } },
        h(__ds_scope.SearchField, { variant: 'compact' })),
      h('nav', { className: 'ds-header__nav', style: { marginLeft: 'auto' } },
        nav.map((item) => h('a', {
          key: item.key, href: link(item.key), className: 'ds-navlink',
          'data-active': active === item.key ? 'true' : 'false', onClick: nav_(item.key),
        }, item.label)),
        h('a', {
          href: link('account'), className: 'ds-navlink',
          'data-active': active === 'account' ? 'true' : 'false', onClick: nav_('account'),
        }, h(__ds_scope.Icon, { name: 'user', size: 17 }), signedIn ? 'Мій кабінет' : 'Увійти'),
        h('a', {
          href: link('cart'), className: 'ds-navlink',
          'data-active': active === 'cart' ? 'true' : 'false', onClick: nav_('cart'),
        }, h(__ds_scope.Icon, { name: 'shopping-cart', size: 17 }), 'Кошик',
          cartCount > 0 ? h('span', { className: 'ds-navlink__count' }, cartCount) : null))));
}

/**
 * «Запит на підбір запчастин» — the manual-lookup request. It lived only on the home page,
 * so the footer CTA on every other screen could only link back to it. Self-contained: it
 * owns its own fields, so any screen can mount it with one boolean.
 */
function RequestModal({ open, onClose, vin = '' }) {
  const [form, setForm] = React.useState({ vin: '', list: '', file: '', digits: '' });
  const set = (patch) => setForm((f) => Object.assign({}, f, patch));
  React.useEffect(() => { if (open) set({ vin: vin || '' }); }, [open, vin]);
  React.useEffect(() => {
    if (!open) return undefined;
    const esc = (e) => { if (e.key === 'Escape') onClose && onClose(); };
    document.addEventListener('keydown', esc);
    return () => document.removeEventListener('keydown', esc);
  }, [open, onClose]);
  if (!open) return null;

  const fmt = (digits) => {
    const d = (digits + '_________').slice(0, 9);
    return '+38 (0' + d.slice(0, 2) + ') ' + d.slice(2, 5) + '-' + d.slice(5, 7) + '-' + d.slice(7, 9);
  };
  const caret = (el, digits) => {
    const s = fmt(digits);
    const i = s.indexOf('_');
    const pos = i === -1 ? s.length : i;
    requestAnimationFrame(() => { try { el.setSelectionRange(pos, pos); } catch (e) { /* not a text input */ } });
  };
  const field = (label, control, hint) => h('label', { className: 'ds-field' },
    h('span', { className: 'ds-field__label' }, label), control,
    hint ? h('span', { className: 'ds-field__hint' }, hint) : null);

  return h('div', {
    onClick: onClose,
    style: {
      position: 'fixed', inset: 0, zIndex: 80, display: 'flex', alignItems: 'flex-start',
      justifyContent: 'center', padding: 'var(--space-8) var(--space-4)', overflowY: 'auto',
      background: 'var(--surface-overlay)',
    },
  }, h('div', {
    onClick: (e) => e.stopPropagation(),
    style: {
      width: '100%', maxWidth: 560, borderRadius: 'var(--radius-xl)',
      background: 'var(--white)', boxShadow: 'var(--shadow-lg)', overflow: 'hidden',
    },
  },
    h('div', { style: { display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 'var(--space-4)', padding: 'var(--space-5) var(--space-6)', borderBottom: '1px solid var(--line)' } },
      h('div', null,
        h('h3', { className: 't-display-sm', style: { margin: 0 } }, 'Запит на підбір запчастин'),
        h('p', { style: { margin: '8px 0 0', fontSize: 'var(--text-sm)', color: 'var(--text-muted)' } },
          'Ми передзвонимо протягом робочого дня й підтвердимо ціни та наявність.')),
      h('div', { style: { flex: 'none' }, onClick: onClose },
        h(__ds_scope.IconButton, { icon: 'x', label: 'Закрити', size: 'md', tone: 'plain' }))),

    h('div', { style: { display: 'grid', gap: 'var(--space-4)', padding: 'var(--space-6)' } },
      field('VIN-код', h('input', {
        className: 'ds-input ds-input--mono', placeholder: 'WBAVB13506PT22180', maxLength: 17,
        value: form.vin, onChange: (e) => set({ vin: e.target.value.toUpperCase() }),
      }), '17 символів, латиниця. VIN є у техпаспорті та під лобовим склом.'),
      field('Що потрібно підібрати', h('textarea', {
        className: 'ds-input', rows: 4, value: form.list,
        placeholder: 'Наприклад: передні гальмівні колодки, фільтр салону, права опора двигуна',
        onChange: (e) => set({ list: e.target.value }),
        style: { resize: 'vertical', minHeight: 104, paddingBlock: 11 },
      })),
      h('div', { className: 'ds-field' },
        h('span', { className: 'ds-field__label' }, 'Файл зі списком'),
        h('div', { style: { display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 'var(--space-3)', padding: '14px 16px', border: '1px dashed var(--line)', borderRadius: 'var(--radius-md)', background: 'var(--surface-sunken)' } },
          h('span', { style: { flex: '1 1 200px', fontSize: 'var(--text-sm)', color: 'var(--text-muted)' } },
            form.file || 'Файл не обрано'),
          h('button', {
            className: 'ds-btn ds-btn--sm ds-btn--secondary', style: { flex: 'none' },
            onClick: () => set({ file: 'список-запчастин.pdf · 240 КБ' }),
          }, 'Обрати файл')),
        h('span', { className: 'ds-field__hint' }, 'Необовʼязково. Фото та PDF — до 5 файлів по 10 МБ')),
      field('Телефон', h('input', {
        className: 'ds-input ds-input--mono', inputMode: 'tel', value: fmt(form.digits),
        onChange: (e) => {
          const raw = e.target.value;
          let digits = raw.replace(/\D/g, '').replace(/^380?/, '').slice(0, 9);
          if (raw.length < fmt(form.digits).length && digits.length === form.digits.length) digits = digits.slice(0, -1);
          set({ digits });
          caret(e.target, digits);
        },
        onFocus: (e) => caret(e.target, form.digits),
        onClick: (e) => caret(e.target, form.digits),
      }))),

    h('div', { style: { display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'flex-end', gap: 'var(--space-3)', padding: 'var(--space-5) var(--space-6)', borderTop: '1px solid var(--line)', background: 'var(--surface-sunken)' } },
      h('button', { className: 'ds-btn ds-btn--md ds-btn--ghost', onClick: onClose }, 'Скасувати'),
      h('button', { className: 'ds-btn ds-btn--md ds-btn--primary', onClick: onClose }, 'Надіслати запит'))));
}

/** The footer. It is the shop's contact card, so its content is owned here, not per page. */
function SiteFooter({
  logoSrc = 'assets/logo-v2-dark.svg',
  onRequest,
  className = '',
}) {
  // Without an onRequest from the page, the CTA opens the request modal itself, so every
  // screen has it without wiring.
  const [ownOpen, setOwnOpen] = React.useState(false);
  const openRequest = (e) => {
    e.preventDefault();
    if (onRequest) onRequest(); else setOwnOpen(true);
  };
  return h(React.Fragment, null,
    h('footer', { className: ['ds-footer', 'ds-stripes', className].filter(Boolean).join(' ') },
    h('div', { className: 'ds-container ds-footer__grid' },
      h('div', null,
        h('img', { src: logoSrc, alt: 'Драйв', className: 'ds-footer__logo' }),
        h('a', {
          className: 'ds-footer__cta', href: '#',
          onClick: openRequest,
        }, 'Допоможемо з підбором автозапчастин')),
      h('div', null,
        h('p', { className: 'ds-footer__title' }, 'Магазин'),
        h('p', { style: { margin: 0 } },
          h('a', {
            className: 'ds-footer__map', href: SHOP.mapHref, target: '_blank', rel: 'noopener',
          }, SHOP.address)),
        h('p', { className: 'ds-footer__hours' }, SHOP.hours.map(([day, time]) => h(React.Fragment, { key: day },
          h('span', null, day), h('span', null, time))))),
      h('div', null,
        h('p', { className: 'ds-footer__title' }, 'Звʼязок'),
        h('p', { className: 'ds-footer__links' },
          SHOP.phones.map((p) => h('a', { key: p.number, href: p.href, className: 'ds-footer__phone' },
            h('span', { className: 'ds-footer__mark' }, p.mark), p.number)),
          h('a', { href: 'mailto:' + SHOP.email }, SHOP.email))),
      h('div', null,
        h('p', { className: 'ds-footer__title' }, 'Документи'),
        h('p', { className: 'ds-footer__links' }, SHOP.docs.map((d) => h('a', {
          key: d.href, href: encodeURI(d.href),
        }, d.label))))),
    h('div', { className: 'ds-container ds-footer__bottom' },
      h('span', null, '© ' + new Date().getFullYear() + ' Драйв'),
      h('span', { className: 'ds-footer__ship' },
        h(__ds_scope.Icon, { name: 'truck', size: 14 }), 'Доставка Новою Поштою або самовивіз'))),
    h(RequestModal, { open: ownOpen, onClose: () => setOwnOpen(false) }));
}

/** Dispatch date with its cutoff. The date never wraps; the cutoff sits on its own row. */
function ShipDate({ date, relative, cutoff, className = '' }) {
  const soon = relative === 'today' || relative === 'tomorrow';
  const text = relative === 'today' ? 'сьогодні' : relative === 'tomorrow' ? 'завтра' : date;
  return h('span', { className: ['ds-ship', soon ? 'ds-ship--soon' : '', className].filter(Boolean).join(' ') },
    h(__ds_scope.Icon, { name: 'truck', size: 15 }),
    h('span', { className: 'ds-ship__date' }, 'Відправка ', text),
    cutoff ? h('span', { className: 'ds-cutoff' }, 'при замовленні до ', cutoff) : null);
}

Object.assign(__ds_scope, { SiteHeader, SiteFooter, PhoneMenu, ShipDate, RequestModal });
__ds_ns.SiteHeader = SiteHeader;
__ds_ns.ShipDate = ShipDate;
__ds_ns.RequestModal = RequestModal;
__ds_ns.SiteFooter = SiteFooter;
__ds_ns.SHOP = SHOP;
})(); } catch (e) { __ds_ns.__errors.push({ path: "standardisation-patch", error: String((e && e.message) || e) }); }

})();
