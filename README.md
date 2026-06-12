# nuxt-landing-starter

A clean Nuxt 4 starter for freelance landing pages, marketing sites, and simple content sites.

The starter is optimized for static generation, small hydration surfaces, strong TypeScript defaults, Tailwind CSS styling, and project-owned shadcn-vue components.

## Stack

| Layer           | Choice          | Notes                                                   |
| --------------- | --------------- | ------------------------------------------------------- |
| Framework       | Nuxt 4          | Static-first Nuxt app structure                         |
| UI Runtime      | Vue 3           | Composition API with `<script setup lang="ts">`         |
| Language        | TypeScript      | Nuxt-generated project references                       |
| Styling         | Tailwind CSS v4 | Configured through `@tailwindcss/vite`                  |
| UI Components   | shadcn-vue      | Components copied into the app and owned by the project |
| Primitives      | Reka UI         | Used by shadcn-vue components                           |
| Package Manager | pnpm            | Lockfile-based installs                                 |
| Output          | Static site     | Generated with `nuxt generate`                          |

## Getting Started

Install dependencies:

```bash
pnpm install
```

Start the development server:

```bash
pnpm dev
```

The dev server runs at the local URL printed by Nuxt, usually `http://localhost:3000`.

## Scripts

Run the development server:

```bash
pnpm dev
```

Build for production:

```bash
pnpm build
```

Generate a static site:

```bash
pnpm generate
```

Preview the production output:

```bash
pnpm preview
```

Lint the project:

```bash
pnpm lint
```

Fix lint issues where possible:

```bash
pnpm lint:fix
```

Check formatting:

```bash
pnpm format:check
```

Format files:

```bash
pnpm format
```

Run Nuxt type checking:

```bash
pnpm typecheck
```

Run the full local quality check:

```bash
pnpm check
```

## Static Generation

This starter is intended for static hosting. Generate the site with:

```bash
pnpm generate
```

Deploy the generated output from:

```text
.output/public
```

## Netlify Hosting

Use these Netlify build settings:

| Setting           | Value                       |
| ----------------- | --------------------------- |
| Build command     | `pnpm generate`             |
| Publish directory | `.output/public`            |
| Node version      | Use the current LTS version |

Netlify should install dependencies from `pnpm-lock.yaml` automatically. If the site needs an explicit package manager version, add a `packageManager` field to `package.json`.

For a dashboard deploy, connect the repo in Netlify and enter the build settings above. For a CLI deploy, generate the site locally and deploy `.output/public`.

## Project Notes

- Global SEO defaults live in `nuxt.config.ts` under `app.head`.
- Per-page SEO metadata uses Nuxt composables such as `useSeoMeta`.
- Static prerendering is configured through Nitro in `nuxt.config.ts`.
- Tailwind CSS is loaded from `app/assets/css/tailwind.css` and wired into Vite with `@tailwindcss/vite`.
- shadcn-vue is configured through `shadcn-nuxt` and writes UI components to `app/components/ui`.
- The starter includes a reusable `Button` component as the first shadcn-vue component.
- ESLint uses Nuxt's generated flat config through `@nuxt/eslint`.
- Prettier handles formatting and `prettier-plugin-tailwindcss` sorts Tailwind classes.

## Customizing For A Client

- Replace the starter copy in `app/pages` with client-specific messaging.
- Update global title, description, and social metadata in `nuxt.config.ts`.
- Replace placeholder contact links with the client's form, booking page, or inbox.
- Add only the shadcn-vue components each project needs.
- Customize theme tokens and utility classes in the Tailwind CSS entry file.
- Keep client-only browser behavior inside `onMounted` or `<ClientOnly>` when needed.

## Code Style

New Vue components should use `<script setup lang="ts">`, typed `defineProps` and `defineEmits`, and Composition API patterns. Keep business logic out of route pages when it grows beyond page wiring, and move reusable stateful logic into composables.
