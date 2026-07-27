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
