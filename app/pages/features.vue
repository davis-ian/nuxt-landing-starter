<script setup lang="ts">
useSeoMeta({
  title: "Features",
  description: "Explore the reusable Nuxt, Tailwind CSS, and shadcn-vue foundation included in this starter.",
  ogTitle: "Features",
  ogDescription: "Explore the reusable Nuxt, Tailwind CSS, and shadcn-vue foundation included in this starter.",
});
</script>

<template>
  <section class="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
    <div class="max-w-3xl space-y-5">
      <p class="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
        Features
      </p>
      <h1 class="text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
        A practical base for static marketing sites.
      </h1>
      <p class="text-lg leading-8 text-muted-foreground">
        Placeholder content for the feature overview route. Use this page to highlight the reusable sections, SEO defaults, static generation, and component system.
      </p>
    </div>

    <div class="mt-12 grid gap-4 md:grid-cols-3">
      <article class="rounded-lg border border-border bg-card p-6 text-card-foreground shadow-xs">
        <h2 class="font-semibold">Static-first</h2>
        <p class="mt-2 text-sm leading-6 text-muted-foreground">
          Built around `nuxt generate` for fast deploys to static hosting.
        </p>
      </article>
      <article class="rounded-lg border border-border bg-card p-6 text-card-foreground shadow-xs">
        <h2 class="font-semibold">Owned components</h2>
        <p class="mt-2 text-sm leading-6 text-muted-foreground">
          shadcn-vue components live in the project and can be customized per client.
        </p>
      </article>
      <article class="rounded-lg border border-border bg-card p-6 text-card-foreground shadow-xs">
        <h2 class="font-semibold">SEO-ready</h2>
        <p class="mt-2 text-sm leading-6 text-muted-foreground">
          Sensible site defaults with per-page metadata overrides.
        </p>
      </article>
    </div>
  </section>
</template>
