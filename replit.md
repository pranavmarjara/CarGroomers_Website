# CarGroomers - Automotive Detailing Business Website

## Overview

CarGroomers is a professional business website for an automotive detailing company based in Beaumont, Canada. It's a single-page application with a dark luxury automotive theme (black, smoke grey, metallic grey) featuring deep red accents and subtle gold highlights. The site includes a hero section, services overview, pricing cards, a contact form that stores inquiries in a PostgreSQL database, and a booking section with click-to-call phone buttons. The design emphasizes premium aesthetics with smooth animations, glossy metallic feel, and fully responsive mobile layout.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend
- **Framework**: React 18 with TypeScript, bundled by Vite
- **Routing**: Wouter (lightweight router) — currently just `/` (Home) and a 404 fallback
- **Styling**: Tailwind CSS with CSS variables for theming, shadcn/ui component library (new-york style)
- **Animations**: Framer Motion for scroll animations and smooth interactions
- **Smooth Scrolling**: react-scroll for navigation between page sections
- **State Management**: TanStack React Query for server state (mutations for form submissions)
- **Form Handling**: React Hook Form with Zod validation via @hookform/resolvers
- **Fonts**: Orbitron (display/headings) and Rajdhani (body text), loaded via Google Fonts
- **Path aliases**: `@/` maps to `client/src/`, `@shared/` maps to `shared/`

### Backend
- **Runtime**: Node.js with Express 5
- **Language**: TypeScript, executed via tsx in dev and compiled with esbuild for production
- **API Design**: A single POST endpoint at `/api/inquiries` for contact form submissions. Route definitions and input validation schemas are shared between client and server in `shared/routes.ts`
- **Dev Server**: Vite dev server is used as middleware in development (via `server/vite.ts`), while production serves static files from `dist/public`

### Data Layer
- **Database**: PostgreSQL (required, via `DATABASE_URL` environment variable)
- **ORM**: Drizzle ORM with `drizzle-zod` for schema-to-validation bridging
- **Schema**: Single `inquiries` table with fields: id (serial), name, email, phone (optional), message, createdAt
- **Migrations**: Managed via `drizzle-kit push` (schema push approach, not migration files)
- **Storage Pattern**: `IStorage` interface in `server/storage.ts` with `DatabaseStorage` implementation

### Shared Code (`shared/` directory)
- `schema.ts` — Drizzle table definitions and Zod insert schemas, shared between frontend and backend
- `routes.ts` — API route definitions with path, method, input schema, and response schemas. Used by both the server (for validation) and client (for type-safe API calls)

### Build Process
- **Dev**: `tsx server/index.ts` with Vite middleware for HMR
- **Production Build**: Vite builds the client to `dist/public`, esbuild bundles the server to `dist/index.cjs`. Select dependencies are bundled to reduce cold start times; others are kept external.
- **Start**: `node dist/index.cjs` serves both the API and static files

## External Dependencies

### Database
- **PostgreSQL** — Required. Connection via `DATABASE_URL` environment variable. Uses `pg` (node-postgres) Pool with `connect-pg-simple` for session storage capability.

### Key NPM Packages
- **UI**: Full shadcn/ui component set (Radix UI primitives), Tailwind CSS, class-variance-authority, lucide-react icons
- **Animation**: framer-motion, embla-carousel-react
- **Forms**: react-hook-form, @hookform/resolvers, zod, drizzle-zod
- **Data Fetching**: @tanstack/react-query
- **Routing**: wouter (client-side), react-scroll (smooth scroll navigation)
- **Server**: express v5, drizzle-orm, pg

### External Services
- **Google Fonts** — Orbitron and Rajdhani fonts loaded via CDN
- **Unsplash** — Hero background image loaded from unsplash.com CDN

### Replit-Specific Plugins
- `@replit/vite-plugin-runtime-error-modal` — Always active
- `@replit/vite-plugin-cartographer` and `@replit/vite-plugin-dev-banner` — Dev-only, when running on Replit