<script setup lang="ts">
useSeoMeta({
  title: "Work",
  description: "A placeholder work page for showcasing client projects, case studies, or featured outcomes.",
  ogTitle: "Work",
  ogDescription: "A placeholder work page for showcasing client projects, case studies, or featured outcomes.",
});
</script>

<template>
  <section class="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
    <div class="max-w-3xl space-y-5">
      <p class="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
        Work
      </p>
      <h1 class="text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
        Showcase client outcomes and proof points.
      </h1>
      <p class="text-lg leading-8 text-muted-foreground">
        Placeholder content for a work route. Replace these cards with case studies, portfolio items, testimonials, or selected project snapshots.
      </p>
    </div>

    <div class="mt-12 grid gap-4 md:grid-cols-2">
      <article class="rounded-lg border border-border bg-card p-6 text-card-foreground shadow-xs">
        <p class="text-sm text-muted-foreground">Case Study</p>
        <h2 class="mt-3 text-xl font-semibold">Marketing site refresh</h2>
        <p class="mt-3 text-sm leading-6 text-muted-foreground">
          Placeholder project summary describing the client problem, implementation, and measurable result.
        </p>
      </article>
      <article class="rounded-lg border border-border bg-card p-6 text-card-foreground shadow-xs">
        <p class="text-sm text-muted-foreground">Launch</p>
        <h2 class="mt-3 text-xl font-semibold">Landing page campaign</h2>
        <p class="mt-3 text-sm leading-6 text-muted-foreground">
          Placeholder project summary for a focused campaign page or lead-generation flow.
        </p>
      </article>
    </div>
  </section>
</template>
