# Creatify

A creator marketplace web app that connects brands with content creators. Built with TanStack Start, React 19, and Tailwind CSS, deployed on Cloudflare Workers.

## Tech Stack

- **Framework:** [TanStack Start](https://tanstack.com/start) (SSR) + [TanStack Router](https://tanstack.com/router)
- **UI:** React 19, [Tailwind CSS v4](https://tailwindcss.com/), [shadcn/ui](https://ui.shadcn.com/) (Radix primitives)
- **Forms:** React Hook Form + Zod
- **Data:** TanStack Query
- **Tooling:** Vite, TypeScript, ESLint, Prettier
- **Deployment:** Cloudflare Workers (via `@cloudflare/vite-plugin` + Wrangler)

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 20+ or [Bun](https://bun.sh/)

### Install

```bash
bun install
# or
npm install
```

### Develop

```bash
bun run dev
```

The app runs at http://localhost:5173.

### Build

```bash
bun run build
```

### Preview production build

```bash
bun run preview
```

### Lint & format

```bash
bun run lint
bun run format
```

## Project Structure

```
src/
├── components/
│   ├── landing/         # Landing page sections (hero, features, workflow, etc.)
│   ├── ui/              # shadcn/ui components
│   └── ...
├── hooks/               # Custom React hooks
├── lib/                 # Utilities and helpers
├── routes/              # File-based routes (TanStack Router)
│   ├── __root.tsx
│   ├── index.tsx        # Landing page
│   ├── creators.tsx
│   ├── jobs.tsx
│   ├── login.tsx
│   └── register.tsx
├── router.tsx
├── server.ts            # Server entry
├── start.ts             # Client entry
└── styles.css
```

## Deployment

The project is configured for Cloudflare Workers. After building:

```bash
npx wrangler deploy
```

Configure your environment and routes in [wrangler.jsonc](wrangler.jsonc).
