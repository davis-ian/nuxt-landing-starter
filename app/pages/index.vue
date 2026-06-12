<script setup lang="ts">
import { Button } from "@/components/ui/button";

useSeoMeta({
  title: "Home",
  description:
    "A clean Nuxt starter for static landing pages, marketing sites, and simple content sites.",
  ogTitle: "Nuxt Landing Starter",
  ogDescription:
    "A clean Nuxt starter for static landing pages, marketing sites, and simple content sites.",
});

const stackItems = ["Nuxt", "Tailwind CSS", "shadcn-vue", "SSG"] as const;

const features = [
  {
    title: "Static-first output",
    description:
      "Built around `nuxt generate` so client sites can ship to Netlify, Vercel, Cloudflare Pages, or any static host.",
  },
  {
    title: "Owned UI components",
    description:
      "shadcn-vue components are copied into the project, giving you full control over markup, styling, and behavior.",
  },
  {
    title: "SEO defaults",
    description:
      "Global metadata, Open Graph tags, and per-page overrides give each route a useful baseline before launch.",
  },
  {
    title: "Tailwind v4 theme",
    description:
      "Theme tokens, dark-mode variables, and utility classes are ready for client-specific visual direction.",
  },
  {
    title: "Multi-page ready",
    description:
      "Routing is set up for small marketing sites with room for pages like features, work, contact, and legal content.",
  },
  {
    title: "Low hydration surface",
    description:
      "The starter favors static content and progressive enhancement instead of JavaScript-heavy first paint experiences.",
  },
] as const;

const projectSteps = [
  "Swap in client copy and brand tokens",
  "Add the shadcn-vue components each project needs",
  "Generate static output and deploy `.output/public`",
] as const;
</script>

<template>
  <div>
    <section class="border-border relative overflow-hidden border-b">
      <div
        class="absolute inset-x-0 top-0 -z-10 h-80 bg-[radial-gradient(circle_at_top_left,var(--muted),transparent_45%)]"
      />

      <div
        class="mx-auto grid min-h-[calc(100vh-4rem)] max-w-6xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1fr_26rem] lg:px-8"
      >
        <div class="max-w-3xl space-y-8">
          <div
            class="border-border bg-background/80 text-muted-foreground inline-flex rounded-full border px-3 py-1 text-sm shadow-xs"
          >
            Static-first Nuxt starter for client work
          </div>

          <div class="space-y-5">
            <h1 class="text-4xl font-semibold tracking-tight text-balance sm:text-6xl">
              Launch polished marketing sites without rebuilding the foundation.
            </h1>
            <p class="text-muted-foreground max-w-2xl text-lg leading-8">
              A reusable Nuxt, Tailwind CSS, and shadcn-vue base for landing pages, small marketing
              sites, and simple content projects.
            </p>
          </div>

          <div class="flex flex-col gap-3 sm:flex-row">
            <Button as-child size="lg">
              <NuxtLink to="/contact">Start a Project</NuxtLink>
            </Button>
            <Button as-child variant="outline" size="lg">
              <NuxtLink to="/features">View Features</NuxtLink>
            </Button>
          </div>
        </div>

        <aside class="border-border bg-card text-card-foreground rounded-2xl border p-5 shadow-sm">
          <div class="border-border bg-muted/40 rounded-xl border p-4">
            <p class="text-muted-foreground text-sm font-medium">Starter brief</p>
            <h2 class="mt-3 text-2xl font-semibold tracking-tight">Freelance landing page</h2>
            <p class="text-muted-foreground mt-3 text-sm leading-6">
              Static output, SEO defaults, reusable UI, and a simple path from client brief to
              deployable site.
            </p>
          </div>

          <div class="mt-5 flex flex-wrap gap-2">
            <span
              v-for="item in stackItems"
              :key="item"
              class="border-border text-muted-foreground rounded-full border px-3 py-1 text-xs"
            >
              {{ item }}
            </span>
          </div>

          <ol class="text-muted-foreground mt-6 space-y-3 text-sm">
            <li v-for="(step, index) in projectSteps" :key="step" class="flex gap-3">
              <span
                class="bg-primary text-primary-foreground flex size-6 shrink-0 items-center justify-center rounded-full text-xs"
              >
                {{ index + 1 }}
              </span>
              <span>{{ step }}</span>
            </li>
          </ol>
        </aside>
      </div>
    </section>

    <section id="features" class="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
      <div class="max-w-2xl space-y-4">
        <p class="text-muted-foreground text-sm font-medium tracking-[0.2em] uppercase">Features</p>
        <h2 class="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
          The basics every small marketing site needs.
        </h2>
        <p class="text-muted-foreground text-lg leading-8">
          Keep the starter lean, understandable, and easy to reshape for each client instead of
          fighting a large opinionated template.
        </p>
      </div>

      <div class="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <article
          v-for="feature in features"
          :key="feature.title"
          class="border-border bg-card text-card-foreground rounded-xl border p-6 shadow-xs"
        >
          <h3 class="font-semibold">{{ feature.title }}</h3>
          <p class="text-muted-foreground mt-3 text-sm leading-6">
            {{ feature.description }}
          </p>
        </article>
      </div>
    </section>

    <section class="border-border bg-muted/30 border-y">
      <div
        class="mx-auto grid max-w-6xl items-center gap-8 px-4 py-16 sm:px-6 md:grid-cols-[1fr_auto] lg:px-8"
      >
        <div class="max-w-2xl space-y-3">
          <p class="text-muted-foreground text-sm font-medium tracking-[0.2em] uppercase">
            Reuse the foundation
          </p>
          <h2 class="text-3xl font-semibold tracking-tight text-balance">
            Start each client build from a clean, static-ready base.
          </h2>
          <p class="text-muted-foreground">
            Keep the stack predictable while leaving enough room for custom sections, integrations,
            and brand direction.
          </p>
        </div>

        <div class="flex flex-col gap-3 sm:flex-row md:flex-col">
          <Button as-child size="lg">
            <NuxtLink to="/contact">Plan a Project</NuxtLink>
          </Button>
          <Button as-child variant="outline" size="lg">
            <NuxtLink to="/work">View Work Page</NuxtLink>
          </Button>
        </div>
      </div>
    </section>

    <section
      id="contact"
      class="mx-auto grid max-w-6xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1fr_24rem] lg:px-8"
    >
      <div class="max-w-3xl space-y-5">
        <p class="text-muted-foreground text-sm font-medium tracking-[0.2em] uppercase">Contact</p>
        <h2 class="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
          Swap this placeholder into a real intake flow.
        </h2>
        <p class="text-muted-foreground text-lg leading-8">
          Use a simple mailto link, a booking page, or a form provider depending on the client. The
          starter keeps contact intentionally provider-agnostic.
        </p>
      </div>

      <aside class="border-border bg-card text-card-foreground rounded-xl border p-6 shadow-xs">
        <h3 class="font-semibold">Project inquiries</h3>
        <p class="text-muted-foreground mt-3 text-sm leading-6">
          Replace the placeholder address with the client or studio inbox before launch.
        </p>
        <Button as-child class="mt-6 w-full">
          <a href="mailto:hello@example.com">Email hello@example.com</a>
        </Button>
        <div class="border-border text-muted-foreground mt-6 border-t pt-6 text-sm">
          <p class="text-foreground font-medium">Best for</p>
          <p class="mt-2 leading-6">
            Landing pages, small content sites, service pages, and focused launch campaigns.
          </p>
        </div>
      </aside>
    </section>
  </div>
</template>
