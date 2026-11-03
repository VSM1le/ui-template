# Showcase

## Purpose

A visual reference of the design system on one screen: buttons, status
colors, and a data table with row actions. Used to check `design.md` in the
real app. Projects built from this template may delete it.

## Route

`/showcase` (name `showcase`), sidebar group "Design".

## Sections / components

- **Buttons:** every level from `design.md` (primary, secondary, tertiary,
  destructive, icon only), plus disabled and loading states.
- **Action colors:** one action per brand status color (positive, negative,
  warning, info) in unelevated, outline, and flat variants.
- **Status badges:** soft-tint `StatusBadge`s for every status used by the mock table.
- **Table:** mock orders with multiple selection, a status badge column, and
  row actions (view, edit, delete). A toggle switches between data, loading,
  and empty states.

## Mock data needed

`src/mocks/orders.js`: `orders` (id, customer, date, amount, status) and
`orderStatuses` (status → label + brand color). Some customer names are Thai
to check the Thai font.

## States (loading / empty / error)

- Table loading: `:loading` with skeleton rows.
- Table empty: `no-data` slot with `EmptyState`.
- Error: a `q-banner` example in the states toggle.

## Out of scope

Real actions (buttons do nothing), sorting/filtering logic beyond Quasar
defaults, dialogs.
