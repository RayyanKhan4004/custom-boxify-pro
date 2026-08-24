# Custom Boxify Pro

Customer-facing marketing site for Custom Boxify Pro, built with Next.js App
Router, React, Tailwind CSS, and TypeScript.

## Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`. If that port is already used, Next.js selects the
next available port and prints it in the terminal.

## Quality checks

```bash
npm run lint
npx tsc --noEmit
npm run build
git diff --check
```

## Project structure

```text
app/                         Routes, metadata, global styling, providers
components/                  Reusable site-wide UI and layout
  icons/                     Brand SVG components
  layout/                    Navbar, footer wrapper, page container
  ui/                        Reusable form and button primitives
  types|constants|utils/     Shared cross-feature modules
features/marketing/          Marketing domain
  components/home-sections/  Home-only sections
  components/industries/     Industries page components
  constants/                 Marketing copy, links, and data arrays
  types/                     Marketing domain types
lib/                         Shared application helpers/configuration
public/                      Static images available by URL
```

Routes should remain small composition files. Feature UI, content data, and
types belong in the relevant feature folder and are exposed through barrel
exports where shared.

## Styling and components

The visual system lives in `app/globals.css` as CSS variables and Tailwind theme
tokens. Reuse shared controls from `components/ui`, including button variants,
instead of recreating controls inside page sections. General-purpose interface
icons use Phosphor; brand artwork remains in `components/icons`.

## Environment and SEO

The canonical production domain is `https://www.customboxifypro.com`. Copy
`.env.example` to `.env.local` to override `NEXT_PUBLIC_SITE_URL` for a
deployment. It supplies canonical URLs, Open Graph metadata, JSON-LD,
`robots.txt`, and `sitemap.xml`.

After deployment, submit `/sitemap.xml` to Google Search Console. Set
`GOOGLE_SITE_VERIFICATION` when a verification token is required.

## Contributor guidance

Read [AGENTS.md](./AGENTS.md) before making changes. It defines folder
ownership, rendering/motion rules, accessibility expectations, and validation
requirements.
