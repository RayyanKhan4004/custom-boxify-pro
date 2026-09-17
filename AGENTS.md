<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.

<!-- END:nextjs-agent-rules -->

## Project conventions

- Keep routes in `app/` thin. Place domain UI, queries, types, and API clients in `features/<feature>/`.
- Use the `@/` import alias and shared primitives from `components/ui/` before introducing new UI patterns.
- Store custom SVGs in `components/icons` and import them as React components through SVGR. Use direct imports for one-off assets and named exports from `components/icons/index.ts` for shared icons.
- Use `@phosphor-icons/react` for general UI icons. Use custom SVG components for brand or design-specific artwork; fixed SVG fills will not respond to Tailwind `text-*` classes.
- Put semantic colors and font families in `app/globals.css` CSS variables. Do not use raw colour values in TSX.
- Use semantic color names such as `--primary`, `--background`, `--foreground`, `--muted-foreground`, and `--border`; do not add Figma-prefixed aliases.
- Use `--font-display` and `--font-body` for Renner typography. Renner is a licensed local font: add its WOFF2 files before relying on it as the rendered production face.
- Use Framer Motion only in client components and respect `useReducedMotion` for non-essential animation.
- Use TanStack React Query for browser-side API requests. Keep request functions next to their feature, not inside components.
- Keep Lenis initialization in the shared provider and always preserve the user's reduced-motion preference.
- Prioritize static/server rendering, metadata, semantic HTML, and accessible interactions. Add client boundaries only where needed.
- Follow KISS and DRY: prefer a small focused component over premature generic abstractions.

## Project structure

```text
app/                         App Router routes, metadata, global CSS, providers
  industries/                Thin route entry for the industries landing page
components/                  Shared, domain-neutral building blocks
  constants/                 Shared navigation constants
  icons/                     Brand/design SVGs and their barrel exports
  images/                    Imported component-local image assets
  layout/                    SiteLayout, PageContainer, and navigation
  providers/                 Application-wide client providers
  types/                     Shared component/layout types and barrel exports
  ui/                        Reusable controls such as Button, Input, Select, Textarea
  utils/                     Small shared utilities and barrel exports
features/
  marketing/                 Customer marketing domain
    components/              Page sections and feature components
      home-sections/         Home-page-specific sections
      industries/            Industries hero, grid, card, CTA, and barrel export
    constants/               Marketing content/data, split by concern
    types/                   Marketing-owned types, split by concern
lib/                         App-wide utilities and configuration
public/                      Runtime-served static media
scripts/                     Maintenance scripts only
```

## Routing and feature ownership

- This is an independent Git repository inside the workspace. Run Git and npm
  commands from this client directory, never from the coordinator root.
- Keep `app/` route files thin. Compose pages from `features/<feature>/components`.
- Put feature-owned data in `features/<feature>/constants`, types in
  `features/<feature>/types`, and re-export public modules from each folder's
  `index.ts`.
- A component used only by a feature stays in that feature. Promote a component
  to `components/` only when it is genuinely shared across features.
- Do not put content arrays, types, or sizeable view components directly in a
  route file.

## Shared UI and tokens

- Extend `buttonVariants` for reusable button styles; do not duplicate CTA
  styling in page sections.
- Define colors, shadows, fonts, and breakpoints as CSS variables or Tailwind
  theme tokens in `app/globals.css`. Do not hardcode repeated breakpoint values.
- Preserve the existing marketing tokens: `--surface-page`, `--brand-primary`,
  `--text-primary`, and `--border-subtle`. Add a token instead of repeating a
  visual value.
- React Select has a server/client rendering pattern in `components/ui`; retain
  it to prevent hydration mismatches.

## Commands and verification

```bash
npm run dev
npm run lint
npx tsc --noEmit
npm run build
git diff --check
```

`next/font` can require network access during `npm run build`. Report a font
fetch failure as an environment issue rather than a code failure.

## Industry filter overlay invariants

These invariants apply to the shared filter on `/packaging-styles` and
`/industries`.

- Reuse `components/ui/filter-dropdown.tsx` on both pages. URL parameters
  (`search` and comma-separated `industries`) are applied state; checkbox state
  remains pending until Apply. Preserve unrelated parameters and derive chips
  and displayed results from applied state.
- Deduplicate options by stable slug/id. Keep the complete dropdown option
  source separate from searched Industry results.
- The portal is attached to `document.body`. Its desktop positioning must stay
  `fixed` because trigger measurements are viewport-based. Clamp horizontal
  coordinates and size the chosen upper/lower direction to available viewport
  space. Mobile remains a fixed bottom sheet and must not inherit desktop
  coordinates.
- Only the options region may scroll. Preserve `data-lenis-prevent`,
  `min-h-0`, `flex-1`, `overflow-y-auto`, and `overscroll-contain` there.
- The outer dialog must use `overflow-clip`. Do not replace it with
  `overflow-hidden`: hidden overflow is still programmatically scrollable and
  browser focus can shift every dialog child outside the clipped shell.
- Keep each native checkbox transparent and positioned over its visible
  control. Do not use `sr-only` checkboxes in this nested scroll overlay; focus
  scrolling previously caused the blank-panel failure.
- Do not lock `html` or `body` with `overflow: hidden`; this breaks the sticky
  navbar by changing the document scroll container. Block wheel, touch, and
  keyboard background input outside the dedicated inner list without changing
  root geometry.
- Lenis is intentionally disabled on these two routes. Do not re-enable it
  without retesting nested wheel/touch/keyboard input, sticky navigation, and
  focus behavior on a bottom option.
- Overlay lifecycle effects must not depend on recreated callbacks. Use stable
  callbacks or a latest-callback ref so checkbox changes do not restart locks
  and positioning subscriptions.
- Regression testing must reproduce the human gesture: open the panel,
  coordinate-scroll inside the visible list, and coordinate-click a visible
  bottom checkbox. Verify background `scrollY` is unchanged, header top is
  `0`, outer dialog `scrollTop` is `0`, inner scroll is preserved, the checkbox
  remains selected, and the panel stays visible. Accessibility-node clicks and
  static checks alone are not sufficient.
- After changes, run targeted ESLint, `npx tsc --noEmit`, and
  `git diff --check` from this client repository.
