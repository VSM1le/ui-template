# design.md

The visual language for this admin dashboard template. Every styling decision
follows this file. If something isn't covered here, ask.

## Principles

1. **Professional and minimal.** A dark navy sidebar, a white top bar, and a
   light content area. Thin borders, almost no shadows, no gradients, no pure
   black.
2. **Quasar first.** Use Quasar components, props, and utility classes before
   anything custom. Write custom CSS only when Quasar can't do it, and put it
   in `src/css/app.css`.
3. **Color means something.** The UI is navy and neutral. Color appears only
   for status (positive/negative/warning/info) and charts.
4. **No hardcoded colors in components.** Use Quasar brand colors
   (`color="primary"`, `text-negative`, …) or the `--app-*` tokens.
5. **Light only.** There is no dark mode. The sidebar is the only dark
   surface. Never apply dark styling to the content area.

## Where things live

| What                                 | File                                    |
| ------------------------------------ | --------------------------------------- |
| Brand colors, icon set               | `quasar.config.js` → `framework.config` |
| Tokens (`--app-*`), Quasar overrides | `src/css/app.css`                       |
| Fonts                                | `index.html` (Google Fonts)             |

## Color

### Brand (Quasar)

Use these through Quasar: `color="primary"`, `bg-positive`, `text-negative`,
etc.

| Brand       | Value     | Use                                      |
| ----------- | --------- | ---------------------------------------- |
| `primary`   | `#182333` | Main actions, focus, checked controls    |
| `secondary` | `#667085` | Secondary emphasis (rare)                |
| `accent`    | `#34465D` | Rare, prefer `secondary`                 |
| `positive`  | `#16845B` | Success                                  |
| `negative`  | `#dc2626` | Errors, destructive actions              |
| `warning`   | `#d97706` | Warnings                                 |
| `info`      | `#2563eb` | Neutral info, links in text              |
| `dark`      | `#182333` | Sidebar surface (`<q-drawer dark>`) only |

`dark` is set to the sidebar navy so Quasar styles the drawer's items for a
dark background on its own. Don't use the `dark` prop anywhere else.

**Rebranding a project:** change `primary` (and `dark` / the sidebar tokens if
the sidebar should follow) in `quasar.config.js` and `app.css`. Nothing else.

### Content tokens

Semantic tokens in `app.css`:

| Token              | Value     | Use                           |
| ------------------ | --------- | ----------------------------- |
| `--app-bg-page`    | `#F5F7FA` | Page background               |
| `--app-bg-surface` | `#FFFFFF` | Cards, tables, header, menus  |
| `--app-bg-hover`   | `#EEF1F5` | Hover / selected row          |
| `--app-border`     | `#E5E7EB` | Borders, separators           |
| `--app-text`       | `#182333` | Headings and body text        |
| `--app-text-muted` | `#667085` | Labels, captions, helper text |

### Sidebar tokens

| Token                      | Value                       | Use                     |
| -------------------------- | --------------------------- | ----------------------- |
| `--app-sidebar-bg`         | `#182333`                   | Sidebar background      |
| `--app-sidebar-text`       | `#FFFFFF`                   | Nav labels and icons    |
| `--app-sidebar-text-muted` | `#B6C1D0`                   | Group labels, inactive  |
| `--app-sidebar-active`     | `#34465D`                   | Active nav item         |
| `--app-sidebar-hover`      | `rgba(255, 255, 255, 0.06)` | Hovered nav item        |
| `--app-sidebar-border`     | `rgba(255, 255, 255, 0.08)` | Dividers inside sidebar |

### Status badges

Show status with **soft-tint** badges: a pale background (12% of the status
color) with text in the full status color. Use the `StatusBadge` component:

```html
<StatusBadge label="Active" color="positive" />
```

The tint comes from the `.app-badge-soft` class in `app.css`, so any brand
color works without new tokens.

Use solid status fills only for destructive confirmation buttons.

## Typography

- **Font:** IBM Plex Sans (Latin) + IBM Plex Sans Thai, loaded from Google
  Fonts in `index.html`. The CSS stack is `--app-font`. The UI is English
  only, but the Thai font stays so Thai data (e.g. from an API) renders
  correctly.
- **Base size:** 14px (Quasar default), line-height 1.5.
- **Use Quasar typography classes.** Don't set `font-size` manually.

| Role                 | Quasar class                | Size |
| -------------------- | --------------------------- | ---- |
| Page title           | `text-h5`                   | 24px |
| Section / card title | `text-h6`                   | 20px |
| Stat number          | `text-h4`                   | 34px |
| Emphasised body      | `text-subtitle1`            | 16px |
| Body (default)       | `text-body2` / none         | 14px |
| Label                | `text-subtitle2`            | 14px |
| Caption, helper      | `text-caption text-muted`\* | 12px |

\* `text-muted` is defined in `app.css`. Don't use `text-grey-*` for muted
text.

- **Weights:** `text-weight-regular` (400), `text-weight-medium` (500),
  `text-weight-bold` (700, use sparingly). No other weights.
- **Case:** sentence case everywhere, including buttons, tabs, and headers.
  Never use ALL CAPS.

## Spacing

Use **Quasar spacing classes only** (`q-pa-*`, `q-ma-*`, `q-gutter-*`,
`q-col-gutter-*`). Don't use pixel margins in components.

| Size | Value | Typical use                              |
| ---- | ----- | ---------------------------------------- |
| `xs` | 4px   | Icon ↔ text                              |
| `sm` | 8px   | Inside compact groups                    |
| `md` | 16px  | Card padding, gap between form fields    |
| `lg` | 24px  | Page padding, gap between cards/sections |
| `xl` | 48px  | Large empty states                       |

- Page content: `q-pa-lg` (`q-pa-md` on mobile).
- Card grids: `row q-col-gutter-lg`.
- Vertical stacks: `column no-wrap`. Quasar's `column` wraps by default,
  which lets a wide child (like a table) stretch the whole stack past the
  screen on mobile.
- **Density:** comfortable by default. Tables may use `dense` when they hold a
  lot of data.

## Shape & depth

- **Radius:** 8px (`--app-radius`) on cards, buttons, outlined inputs, menus,
  and nav items. It's applied globally in `app.css`, so don't set it per
  component. Round buttons stay round.
- **Cards:** always `<q-card flat bordered>`, white on the `#F5F7FA` page. No
  shadows on cards.
- **Shadows** only on floating layers: `q-menu`, `q-dialog`, notifications.
  Keep Quasar's defaults there.
- **Borders:** 1px `--app-border`. Quasar's `bordered` props are already
  recoloured globally.

## Buttons

Sentence case is applied globally to buttons and tabs, so there's no need for
`no-caps`.

| Level       | Markup                                                 |
| ----------- | ------------------------------------------------------ |
| Primary     | `<q-btn unelevated color="primary" label="Save" />`    |
| Secondary   | `<q-btn outline color="primary" label="Cancel" />`     |
| Tertiary    | `<q-btn flat color="primary" label="Learn more" />`    |
| Destructive | `<q-btn unelevated color="negative" label="Delete" />` |
| Icon only   | `<q-btn flat round dense icon="sym_o_more_vert" />`    |

- Always use `unelevated`. Never use raised buttons.
- Use one primary button per view or section.

## Forms

- Inputs: `<q-input outlined dense? />`. Always use `outlined`, never `filled`
  or `standout`.
- Put the label above or inside the field (`label` prop). Use `hint` for help
  text and `:rules` for validation.
- Stack fields with `q-gutter-md` in a column.

## Tables

- `<q-table flat bordered />`, with `dense` allowed for data-heavy tables.
- Header text: `text-weight-medium`, muted color.
- Show status columns as `StatusBadge` (see Color).
- Every table has loading (`:loading`) and empty (`no-data` slot) states.

## Icons

- **Material Symbols Outlined** (Quasar extra + icon set
  `material-symbols-outlined`).
- In components, always use the `sym_o_` prefix: `icon="sym_o_dashboard"`.
  Browse names at https://fonts.google.com/icons (Outlined style).
- Sizes: 20px inline with text and in navigation, 24px default in buttons.

## App shell

`q-layout view="lHh Lpr lFf"`

- **Sidebar** (`q-drawer dark show-if-above`, **no** `bordered`, class
  `app-sidebar`):
  - Navy `--app-sidebar-bg` across the full height.
  - 240px expanded, 64px collapsed (`mini` mode, icons only, tooltips on
    hover).
  - Becomes an overlay drawer below the `md` breakpoint.
  - Brand block at the top (56px, same height as the top bar): a 32px white
    rounded square with a navy icon, then the app name in white,
    `text-weight-medium`.
  - Group labels: `text-caption` in `--app-sidebar-text-muted`.
  - Nav items: `dense`, 20px icons, 8px radius. Inactive labels and icons
    use `--app-sidebar-text-muted`, white on hover with
    `--app-sidebar-hover` background.
  - Active item: `--app-sidebar-active` background, white text,
    `text-weight-medium`. No colored bar.
  - **Submenus:** an item with `children` in `navigation.js` becomes a
    `q-expansion-item` with a `sym_o_expand_more` chevron. Child links have
    no icon and line up with the parent's label (`inset-level="1"`).
    - The submenu holding the current route opens by itself. Its parent
      label turns white and medium weight, with no background. Only the
      child link gets the active background.
    - Collapsed sidebar: the parent shows its icon only (active background
      when a child is current). Clicking it opens a white `q-menu` to the
      right with the submenu's name as a caption header and the child
      links; the current one uses `bg-hover`.
    - One level of nesting only.
- **Top bar** (`q-header bordered`, **not** `elevated`, 56px tall):
  - White `--app-bg-surface` background, text and icons in `--app-text`,
    1px `--app-border` bottom border.
  - Left: sidebar toggle and breadcrumbs.
  - Right: search and user menu. Don't add controls the app doesn't support.
- **Page:** `--app-bg-page` background, `q-pa-lg` padding, page title in
  `text-h5`.

## Charts (ApexCharts)

- Series colors use the muted categorical palette, in this order:

  | Token           | Color     |
  | --------------- | --------- |
  | `--app-chart-1` | `#4e79a7` |
  | `--app-chart-2` | `#f28e2b` |
  | `--app-chart-3` | `#59a14f` |
  | `--app-chart-4` | `#e15759` |
  | `--app-chart-5` | `#76b7b2` |
  | `--app-chart-6` | `#b07aa1` |

- Gridlines use `--app-border`, axis labels use `--app-text-muted`, and the
  font uses `--app-font`.
- Turn off the ApexCharts toolbar, drop shadows, and gradients. Use flat
  fills only.
- Put charts inside a `flat bordered` card with a `text-h6` title.

## States

Every data view designs all of these states:

- **Loading:** `q-skeleton` shaped like the content. No full-page spinners.
- **Empty:** muted icon (48px), one-line message, optional primary action.
- **Error:** `q-banner` with `negative` outline styling and a retry action.

## Motion

Keep Quasar's default transitions. Don't add custom animations.
