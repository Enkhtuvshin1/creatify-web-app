# Creatify

Creatify is a creator marketplace web application that connects brands with content creators. I built it as a modern frontend project focused on discovery, campaign collaboration, messaging, and a clean marketing experience for a Mongolian creator economy platform.

## Live Demo

Coming soon.

## Tech Stack

- React 19
- TanStack Start
- TanStack Router
- TypeScript
- Tailwind CSS
- shadcn/ui and Radix UI
- React Hook Form and Zod
- TanStack Query
- Vite
- Cloudflare Workers

## Features

- Landing page for a creator marketplace platform
- Brand and creator focused navigation
- Creator discovery and job listing pages
- Login and registration screens
- Responsive UI built with reusable components
- Theme support with light and dark modes
- Cloudflare Workers deployment configuration

## Getting Started

### Prerequisites

- Node.js 22.12+
- npm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The app runs locally at:

```bash
http://localhost:5173
```

### Build

```bash
npm run build
```

### Preview

```bash
npm run preview
```

### Lint

```bash
npm run lint
```

## Project Structure

```text
src/
  components/
    landing/      Landing page sections
    ui/           Reusable UI components
  hooks/          Custom React hooks
  lib/            Utilities and shared helpers
  routes/         File-based routes
  router.tsx      Router setup
  server.ts       Server entry
  start.ts        Client entry
  styles.css      Global styles
```

## Deployment

This project is configured for deployment on Cloudflare Workers. After setting up the Cloudflare project and environment, I can deploy it with:

```bash
npx wrangler deploy
```
