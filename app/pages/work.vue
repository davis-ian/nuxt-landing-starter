<script setup lang="ts">
useSeoMeta({
  title: "Work",
  description:
    "A placeholder work page for showcasing client projects, case studies, or featured outcomes.",
  ogTitle: "Work",
  ogDescription:
    "A placeholder work page for showcasing client projects, case studies, or featured outcomes.",
});
</script>

<template>
  <section class="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
    <div class="max-w-3xl space-y-5">
      <p class="text-muted-foreground text-sm font-medium tracking-[0.2em] uppercase">Work</p>
      <h1 class="text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
        Showcase client outcomes and proof points.
      </h1>
      <p class="text-muted-foreground text-lg leading-8">
        Placeholder content for a work route. Replace these cards with case studies, portfolio
        items, testimonials, or selected project snapshots.
      </p>
    </div>

    <div class="mt-12 grid gap-4 md:grid-cols-2">
      <article class="border-border bg-card text-card-foreground rounded-lg border p-6 shadow-xs">
        <p class="text-muted-foreground text-sm">Case Study</p>
        <h2 class="mt-3 text-xl font-semibold">Marketing site refresh</h2>
        <p class="text-muted-foreground mt-3 text-sm leading-6">
          Placeholder project summary describing the client problem, implementation, and measurable
          result.
        </p>
      </article>
      <article class="border-border bg-card text-card-foreground rounded-lg border p-6 shadow-xs">
        <p class="text-muted-foreground text-sm">Launch</p>
        <h2 class="mt-3 text-xl font-semibold">Landing page campaign</h2>
        <p class="text-muted-foreground mt-3 text-sm leading-6">
          Placeholder project summary for a focused campaign page or lead-generation flow.
        </p>
      </article>
    </div>
  </section>
</template>
