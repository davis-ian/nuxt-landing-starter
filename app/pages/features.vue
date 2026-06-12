<script setup lang="ts">
useSeoMeta({
  title: "Features",
  description:
    "Explore the reusable Nuxt, Tailwind CSS, and shadcn-vue foundation included in this starter.",
  ogTitle: "Features",
  ogDescription:
    "Explore the reusable Nuxt, Tailwind CSS, and shadcn-vue foundation included in this starter.",
});
</script>

<template>
  <section class="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
    <div class="max-w-3xl space-y-5">
      <p class="text-muted-foreground text-sm font-medium tracking-[0.2em] uppercase">Features</p>
      <h1 class="text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
        A practical base for static marketing sites.
      </h1>
      <p class="text-muted-foreground text-lg leading-8">
        Placeholder content for the feature overview route. Use this page to highlight the reusable
        sections, SEO defaults, static generation, and component system.
      </p>
    </div>

    <div class="mt-12 grid gap-4 md:grid-cols-3">
      <article class="border-border bg-card text-card-foreground rounded-lg border p-6 shadow-xs">
        <h2 class="font-semibold">Static-first</h2>
        <p class="text-muted-foreground mt-2 text-sm leading-6">
          Built around `nuxt generate` for fast deploys to static hosting.
        </p>
      </article>
      <article class="border-border bg-card text-card-foreground rounded-lg border p-6 shadow-xs">
        <h2 class="font-semibold">Owned components</h2>
        <p class="text-muted-foreground mt-2 text-sm leading-6">
          shadcn-vue components live in the project and can be customized per client.
        </p>
      </article>
      <article class="border-border bg-card text-card-foreground rounded-lg border p-6 shadow-xs">
        <h2 class="font-semibold">SEO-ready</h2>
        <p class="text-muted-foreground mt-2 text-sm leading-6">
          Sensible site defaults with per-page metadata overrides.
        </p>
      </article>
    </div>
  </section>
</template>
