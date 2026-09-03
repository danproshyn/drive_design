# Драйв — Design System

**Драйв** is an auto-parts shop in Запоріжжя, Ukraine, selling to consumers (B2C) both over the
counter and online. The site is a parts catalogue first and a shop second: people arrive knowing
either an article number off a box, or a car, and the whole product exists to get them from one of
those two starting points to a price and a dispatch date.

**Every surface must work equally well on desktop, tablet and phone.** Драйв's customers split
roughly evenly across the three — a mechanic checking an article number on a phone in a garage, a
customer comparing offers on a laptop, an owner browsing on a tablet — so none of them is the
"real" target and none gets a degraded layout. The responsive rules are in §4 › Responsive.

Everything here is written in Ukrainian for the customer-facing surface, because the site is
Ukrainian-only. Documentation and code comments are in English.

---

## 1. Sources

| Source | What was taken from it |
| --- | --- |
| `drive_frontend/` — the live Next.js 16 / React 19 / Tailwind v4 frontend, mounted read-only | Component inventory, screen structure, product rules, all Ukrainian copy (`messages/uk.json`, 1 438 lines), shop contacts (`lib/contacts.ts`) |
| `drive_frontend/public/logo-v2.svg`, `logo-v2-full.svg` | The brand mark, in both cuts. Copied to `assets/logo.svg` and `assets/logo-full.svg` |
| `uploads/logo-v2-full.svg` | The same full lockup, uploaded by the owner. Byte-identical to the file in the repo |
| `drive_frontend/public/vehicle-no-photo.png` | The 300×200 illustration used when a car model has no photograph. Copied to `assets/` |
| Owner's brief | Colour pane: **white, red, black**. Responsive. Copy may be rewritten or cut |

No Figma file, no design tokens and no component library were provided — the frontend was built
functionally, with Tailwind's default blue as a placeholder brand colour. **This design system
replaces that placeholder.** Nothing in the old `app/globals.css` palette (`--color-brand-*`, an
oklch blue ramp) survives.

## 2. The product

One customer-facing product, plus two staff surfaces inside the same codebase.

**Storefront (`/`)** — the whole B2C site. Its two entry paths are load-bearing and must not be
blurred together:

1. **Search by article number.** Available in the header on every page. Needs no car. Article,
   OE number or a fuzzy near-match; pasting a number searches immediately, typing opens a suggest
   list.
2. **Browse by car.** Choosing a vehicle is **obligatory** — no catalogue, no categories and no
   part lists exist before a car is resolved. A car is resolved by a five-step funnel (марка →
   модель → рік → кузов → обʼєм і пальне), by VIN, or by a Ukrainian number plate. Once resolved,
   the car is added to the garage automatically, with no button and no question.

From there: a three-level category tree per car → a parts list → a part card with offers, analogs,
characteristics, OE numbers and applicability → cart → checkout (Нова Пошта or самовивіз; card,
part-prepaid or cash on delivery) → account (orders, addresses, bonuses, returns).

**Мій кабінет** — the customer's account, inside the storefront shell.
**Панель** — the staff panel: orders board, returns, offline seller cart, customers, warehouses,
markup ladders, cashback ladder, promo codes, settings. Same tokens, denser layout, no marketing.

### Two list designs, and why there are two

This is the single most important structural rule in the product, and the design system encodes it
as two separate components rather than one with a flag.

| | `PartCard` | `OfferPartRow` |
| --- | --- | --- |
| Where | TecDoc catalogue list under a category node | Article search results, «Аналоги» tab |
| Question it answers | «what is there under this node» | «I know what I need — where is it cheaper and sooner» |
| Offers | one best price | up to three, expandable in place |
| Quantity | **not shown** | **shown** |
| Secondary links | addresses into the part card | expand in place |
| Staff view | — | extra warehouse name and seller price |

A `variant` flag on one component would be cheaper for a day and more expensive forever: every
later change to one design would have to prove it did not touch the other.

### One promotional surface

«Отримуйте до N% кешбеку» is the **only** promo banner on the site. Do not design others. When the
cashback ladder is empty the banner renders nothing at all — never «до 0%».

Product reviews are out of scope and no rating component exists.

---

## 3. Content fundamentals

The Ukrainian copy in this codebase is unusually good and it is the voice this design system
inherits. Its rules, read off `messages/uk.json`:

**Address the customer as «ви», lower-case, and speak as «ми» for the shop.**
«Ми зателефонуємо, щоб підтвердити замовлення й узгодити відправку.»

**Sentence case everywhere.** The only upper-case is the Oswald display face and eyebrow labels,
and that is a typographic decision, not a copy one. Button labels are sentence case: «В кошик»,
«Оформити замовлення», «Показати ще».

**No emoji. Ever.** There is not one in 1 438 lines of catalogue.

**No exclamation marks, no «Упс», no cheerfulness.** The tone is a knowledgeable person behind a
counter: plain, exact, unhurried.

**Every refusal says what to do next.** This is the strongest pattern in the copy.
- «Не вдалося розпізнати цей VIN або держномер. Перевірте написання — латиниця, без пробілів.»
- «Машину розпізнано, але її ще немає в нашому каталозі. Оберіть її вручну — марка, модель, двигун.»
- «Перевірте артикул — або попросіть менеджера підібрати деталь вручну.»

**An explained absence is data; a plausible placeholder is not.** Empty states state the state and
then say why it is normal: «Драбина порожня — кешбек не нараховується. Це робочий стан, а не помилка
налаштування.» «Тут зʼявляться машини, які ви знайдете. Окремо додавати не треба.»

**Numbers are always qualified.** «більше 10 шт» rather than «10 шт» when the count is capped;
«від 4 шт, кратно 4» rather than a bare minimum; «Остання відома ціна» over a greyed price.

**Ukrainian plural forms are used properly** — one / few / many / other. «# позиція», «# позиції»,
«# позицій». Never «1 позицій».

**Dates are words when they are near.** «сьогодні», «завтра», then «4 вер, пт».

**Em dash, not colon, for the second clause.** «Артикул виробника — його наносять на саму деталь.»
Ukrainian typographic quotes «…» throughout, and the apostrophe is ʼ (U+02BC).

**Length.** Labels 1–3 words; hints one sentence; explanations at most two. Nothing on this site is
a paragraph except the legal pages.

**Cut before you add.** The owner's brief says there is a lot of genuinely redundant text on the
current site, and the redesign takes him at his word: this system removes headings that restate the
page («Пошук автозапчастин за артикулом» above a search field labelled «Пошук за артикулом»),
instructions that describe the control below them, and any sentence whose removal changes nothing.

---

## 4. Visual foundations

### The idea

The mark is a heavy condensed italic Cyrillic wordmark with a speedometer glyph and motion lines —
a 2000s Ukrainian auto-shop logo, and an honest one. The design system does not modernise it away
and does not imitate it either. It takes three things from the mark — the warm black, the red, the
diagonal — and builds a quiet, dense, technical catalogue around them. **The mark is the loud part;
the interface is the calm part.**

### Colour

White page, warm black structure, one red. `tokens/colors.css`.

- **Red** `--red-500 #E81B21` is the logo red and is graphic only: the active underline, the hover
  keyline, the cashback percentage, the cart count. Interactive red is `--red-600 #C4151A`, one step
  darker, because it must pass AA as small text and as a white-on-red button fill.
- **Red means buy.** A screen with two red buttons is a bug. Filters, sorts and tabs when active are
  **black**, not red.
- **Black** `--ink-800 #24211D` is the logo black — warm, never `#000`. It is a surface as much as a
  colour: the utility bar, the footer, the cashback banner and the primary-offer keyline are all
  black.
- Neutrals are warm-tinted throughout (`#F6F4F1`, `#DCD8D2`, `#726C64`), so nothing on the page goes
  bluish next to the mark.
- **Out of stock is grey, not red** (`--stock-out #97918A`). It is a state, not an error, and red is
  spoken for. In stock is `--stock-in #157F3E`, used sparingly; the dispatch cutoff hint is amber
  `--cutoff #B26A00`.
- Maximum two background colours per view: white and one of `--surface-sunken` / `--surface-inverse`.

### Type

- **Oswald** — display. Condensed, uppercase, `letter-spacing: .01em`, line-height 1.05. Page
  titles, section headings, tabs, prices at card size, eyebrow labels. It is the typographic echo of
  the wordmark's narrow italic.
- **Onest** — everything a customer reads. Full Cyrillic, neutral, slightly warm. 400/500/600.
- **IBM Plex Mono** — article numbers, VINs, OE numbers, ТТН numbers. Anything compared character by
  character. Ligatures off. **Never** for part names, brands or prose.

All three carry complete Cyrillic, which was the hard constraint: the previous frontend used Inter
with the `cyrillic` subset, and any substitute that drops it silently falls back to a system face on
every page. See §7 for the font-substitution flag.

### Space and shape

4 px base scale; nothing exists between 4 and 8. Rows breathe on 12–16, sections on 32–64. Radii:
3 px badges, 6 px small controls, 8 px buttons/inputs/offers, 12 px cards, pill for filter chips.
Container is a single token, `--container: 1200px`, shared by header, body and footer — three
literals that happen to agree are three places to forget.

### Backgrounds and imagery

No photography of its own, no illustration, no gradients, no texture on white. The page is white.
The only decorative motif is `.ds-stripes` — a repeating -66° hairline stripe at 7 % white, lifted
from the logo's speed lines, used **only** on black surfaces (the cashback banner and the footer),
never behind body copy. Product imagery is supplier photography on white, so it is framed in a
`--surface-sunken` box with a hairline rather than bled. Roughly a fifth of parts and a twelfth of
vehicles have no photograph at all: the placeholder is always drawn, because a hole beside a price
tells a customer something about their part instead of about our data.

### Depth

Almost none. Structure is hairlines (`--line #DCD8D2`) and background steps, not cards floating on a
page — a catalogue of floating cards reads as a page of adverts. Shadows are warm-tinted from the
ink and reserved for things that genuinely sit above the page: the search suggest list, the sticky
summary, the gallery lightbox.

### States — the signature

- **Hover on a row:** background goes to `--surface-sunken` and a 3 px red keyline appears on the
  left edge (`--keyline-red`). This is the design's one gesture, and it repeats on catalogue rows,
  tree leaves and suggest rows.
- **Hover on a link:** darker red plus a 1.5 px underline at 2 px offset.
- **Hover on a button:** one step darker fill. No lift, no shadow bloom.
- **Press:** `translateY(1px)` and a darker fill. Nothing scales.
- **Active nav item / active tab:** a 3 px red bar under the label. Active filter chip: solid black.
- **Focus:** 2 px `--red-500` outline at 2 px offset, on everything, always visible.
- **Selected offer (the server's recommendation):** white on a sunken list, plus a 3 px black
  keyline.

### Motion

120 ms for hover/focus/press, 180 ms for disclosure and tab changes, 280 ms for the lightbox.
`cubic-bezier(.2,.8,.3,1)`. Colour, background and box-shadow only. **Nothing bounces, nothing
springs, nothing animates on scroll, there are no page transitions.** Every duration collapses to
0 ms under `prefers-reduced-motion`.

### Transparency and blur

Effectively unused. The only transparencies are the stripe motif, the modal scrim
(`--surface-overlay`, ink at 60 %) and inverse text at 64 %. No frosted glass anywhere — it costs
legibility on a data screen and buys nothing.

### Layout rules

- One sticky element: the header. On the cart and checkout, the summary becomes sticky above
  900 px.
- Catalogue view is a three-column grid at ≥1120 px: tree 272 px / parts / facets 248 px. Below
  that the facets collapse into a sheet and the tree into a disclosure above the list.
- Minimum tap target 44 px, phone and desktop alike.

### Responsive

**Desktop, tablet and phone are all first-class. There is no "main" breakpoint and no screen that is
allowed to be merely tolerable on one of them.** A layout that only works at 1280 px is unfinished;
so is one that only works at 375 px.

- **Design and check every screen at four widths: 360, 768, 1024, 1440.** Breakpoint tokens live in
  `tokens/layout.css` — `--bp-sm 640px`, `--bp-md 900px`, `--bp-lg 1120px`.
- **Phone is where parts get bought in a garage**, often one-handed on a dirty screen. Tap targets
  never go below 44 px, controls go full-width rather than shrinking, and the primary action of any
  screen is reachable without a stretch.
- **Tablet is not a wide phone.** At 768–1023 px the catalogue keeps its category tree and drops
  only the facet column; the cart keeps its summary but moves it under the lines rather than beside
  them.
- **Reflow, don't hide.** No content is dropped on small screens — filters move into a sheet, the
  tree into a disclosure, the header's utility bar into the footer. Decorative chrome is the only
  thing allowed to disappear.
- **Data tables scroll horizontally inside their own container** (`overflow-x: auto` on the wrapper,
  a `min-width` on the table) rather than wrapping cells. A price broken across two lines is worse
  than a swipe.
- **Rows, not tiles.** The catalogue row stacks price and button under the part identity below
  640 px; it never becomes a grid of cards, because a tile shows fewer parts per screen and this
  audience is comparing.
- **Type steps, it does not scale fluidly.** Display sizes drop at named breakpoints (`--display-lg`
  → `--display-md` below 640 px); body type stays 16 px everywhere.
- **Test with the longest real string.** «Аналог (по оригінальному номеру)» and «Заміна від
  постачальника» are the labels that break chip rows; Ukrainian runs long.

Both UI kits carry these rules in their own `index.html` and are the reference implementation.

---

## 5. Iconography

**Драйв has no icons.** The frontend contains zero SVG elements and no icon dependency — every
affordance is currently a text link. That is a real gap for a catalogue, so this system adopts a set
and **flags it as a substitution** (§7).

- **Set:** [Lucide](https://lucide.dev), loaded from CDN:
  `<script src="https://unpkg.com/lucide@0.544.0/dist/umd/lucide.min.js"></script>`
- **Why Lucide:** open-licensed, thin geometric strokes that sit with Onest without competing with
  the heavy wordmark, and it has the vehicle/logistics glyphs this product actually needs
  (`car-front`, `truck`, `package-search`, `badge-percent`).
- **Sizes:** 16 in dense rows, 20 default, 24 in the header. **Stroke 1.75**, never 2 except below
  16 px.
- **Colour:** always `currentColor`. Icons never carry their own colour.
- **Icons never stand alone** where a label is possible — this is a shop whose customers are
  comparing numbers, and a bare glyph is a guess. `IconButton` requires a `label`.
- Wrap every glyph in the `Icon` component so the whole set can be swapped in one place.
- **Emoji: never.** **Unicode characters as icons: never**, with one inherited exception — `⧉` is
  used as the OE-number copy affordance in the manufacturer catalogues; replace it with
  `Icon name="copy"`.

Brand assets in `assets/`:

| File | Use |
| --- | --- |
| `logo.svg` | The single-line wordmark. Header, footer, email, anything under 90 px of height |
| `logo-full.svg` | The two-tier lockup (2.08:1). Only at ≥90 px — below that «автомагазин» is a red smear |
| `vehicle-no-photo.png` | The 300×200 fallback illustration for car models with no photograph |

There is no inverted mark. On black, the wordmark goes on a white plate — see the *Mark on dark*
card.

---

## 6. Index

```
styles.css                 the one file consumers link — @import list only
tokens/                    fonts, colors, typography, space, elevation, motion, layout, base
components/components.css  every component's classes, hover/press/focus states
components/core/           Button IconButton Icon Badge Chip Notice Skeleton EmptyState
components/forms/          TextField SelectField Checkbox SearchField SearchSuggests
                           SearchSuggestRow QuantityStepper
components/catalog/        PriceTag StockLabel ShipDate PartThumb PartCard OfferRow
                           OfferPartRow GarageCard FacetGroup CategoryTree VehicleFunnel
                           CashbackBanner
components/navigation/     SiteHeader SiteFooter Breadcrumbs TabStrip Pager
guidelines/                19 foundation specimen cards (Brand, Colors, Type, Spacing, Depth)
ui_kits/storefront/        the B2C site — 6 screens, click-through
ui_kits/panel/             the staff panel — orders board and order card
assets/                    logo.svg, logo-full.svg, vehicle-no-photo.png
SKILL.md                   Agent Skill wrapper
```

### Components

Each directory holds `<Name>.jsx`, `<Name>.d.ts`, `<Name>.prompt.md`, and one `@dsCard` HTML.

**core** — `Button`, `IconButton`, `Icon`, `Badge`, `Chip`, `Notice`, `Skeleton`, `EmptyState`
**forms** — `TextField`, `SelectField`, `Checkbox`, `SearchField`, `SearchSuggests`,
`SearchSuggestRow`, `QuantityStepper`
**catalog** — `PriceTag`, `StockLabel`, `ShipDate`, `PartThumb`, `PartCard`, `OfferRow`,
`OfferPartRow`, `GarageCard`, `FacetGroup`, `CategoryTree`, `VehicleFunnel`, `CashbackBanner`
**navigation** — `SiteHeader`, `SiteFooter`, `Breadcrumbs`, `TabStrip`, `Pager`

### Intentional additions

The source codebase defines the inventory; three things here have no direct counterpart in it and
are listed rather than smuggled in:

- **`Icon`** — a wrapper for the adopted Lucide set. The codebase has no icons at all, so there was
  nothing to wrap; without it the set could not be swapped in one place.
- **`Badge` / `Chip` as named components** — the codebase renders both as inline Tailwind class
  strings in four different files, which is how the same badge came to be drawn two different ways
  on two lists. They are components here for that reason.
- **`SiteHeader`'s black utility bar** — the live header has no such band. The address, hours and
  phone are already in the footer and on `/contacts`; putting them at the top is a redesign
  decision, made because Драйв is a physical shop in Запоріжжя and «is this near me, are they open»
  is the first question a local customer has.

### UI kits

- **`ui_kits/storefront/`** — Головна, Підбір за авто, Каталог для авто, Картка деталі, Результати
  пошуку, Кошик. Click-through: choose a car, open a category, open a part, add to cart.
- **`ui_kits/panel/`** — Дошка замовлень and Картка замовлення, including the staff-only offer
  fields (warehouse name and seller price).

---

## 7. Flags for the owner

1. **Fonts are substitutions.** No font files were provided. Oswald / Onest / IBM Plex Mono were
   chosen from Google Fonts for full Cyrillic coverage and for the fit with the wordmark. If Драйв
   owns licensed faces, send them and this swaps in one file (`tokens/fonts.css`).
2. **Icons are a substitution.** The codebase has none. Lucide was adopted; if you prefer another
   set, only `components/core/Icon.jsx` and the CDN tag change.
3. **The blue in the current frontend is gone**, replaced by the logo red and warm black. Every
   `--color-brand-*` reference in the old Tailwind theme maps to `--red-*` or `--ink-*`.
4. **No photography.** The kits use supplier-style placeholders. Real category and hero imagery
   would change the home page materially — ask before assuming.
