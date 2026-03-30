# Sweet Home Services

Professional websites with SEO optimization and smart automations for local businesses across the USA.

## Tech Stack

- **Framework:** [Next.js 15](https://nextjs.org/) (App Router)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Language:** TypeScript (strict mode)
- **Package Manager:** pnpm
- **Database:** Supabase (Postgres)
- **Auth:** Supabase Auth
- **Payments:** Stripe

## Getting Started

### Prerequisites

- Node.js 20+
- pnpm (`corepack enable && corepack prepare pnpm@latest --activate`)

### Setup

```bash
# Clone the repo
git clone https://github.com/geotzur/sweet-home-services.git
cd sweet-home-services

# Install dependencies
pnpm install

# Copy environment variables
cp .env.example .env.local
# Fill in your Supabase and Stripe keys in .env.local

# Start dev server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/           # App Router pages and layouts
├── components/    # Reusable UI components
├── lib/           # Utilities, API clients, helpers
public/            # Static assets (images, fonts)
```

## Scripts

| Command            | Description                        |
| ------------------ | ---------------------------------- |
| `pnpm dev`         | Start development server           |
| `pnpm build`       | Production build                   |
| `pnpm start`       | Start production server            |
| `pnpm lint`        | Run ESLint                         |
| `pnpm type-check`  | Run TypeScript type checker        |
| `pnpm format`      | Format code with Prettier          |
| `pnpm format:check`| Check formatting without writing   |

## Environment Variables

See [`.env.example`](.env.example) for the full list. Required:

| Variable                          | Description                    |
| --------------------------------- | ------------------------------ |
| `NEXT_PUBLIC_SUPABASE_URL`        | Supabase project URL           |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY`   | Supabase anonymous/public key  |
| `STRIPE_SECRET_KEY`               | Stripe secret API key          |
| `STRIPE_PUBLISHABLE_KEY`          | Stripe publishable API key     |
| `STRIPE_WEBHOOK_SECRET`           | Stripe webhook signing secret  |
| `NEXT_PUBLIC_SITE_URL`            | Canonical site URL             |

## CI/CD

- **Pull Requests:** GitHub Actions runs lint, type-check, and build.
- **Merge to main:** Auto-deploys via Vercel GitHub integration.

## Brand Colors

| Token  | Hex       | Usage         |
| ------ | --------- | ------------- |
| Teal   | `#1A6B6B` | Primary       |
| Amber  | `#F5A623` | Accent/CTA    |
