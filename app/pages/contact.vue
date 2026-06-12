<script setup lang="ts">
import { Button } from "@/components/ui/button";

useSeoMeta({
  title: "Contact",
  description: "A placeholder contact page for project inquiries and client intake.",
  ogTitle: "Contact",
  ogDescription: "A placeholder contact page for project inquiries and client intake.",
});
</script>

<template>
  <section
    class="mx-auto grid max-w-6xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1fr_24rem] lg:px-8"
  >
    <div class="max-w-3xl space-y-5">
      <p class="text-muted-foreground text-sm font-medium tracking-[0.2em] uppercase">Contact</p>
      <h1 class="text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
        Start a focused project conversation.
      </h1>
      <p class="text-muted-foreground text-lg leading-8">
        Placeholder content for a contact route. Replace this page with a form, booking link, or
        client intake flow when adapting the starter.
      </p>

      <Button as-child size="lg">
        <a href="mailto:hello@example.com">Email hello@example.com</a>
      </Button>
    </div>

    <aside class="border-border bg-card text-card-foreground rounded-lg border p-6 shadow-xs">
      <h2 class="font-semibold">Good fit for</h2>
      <ul class="text-muted-foreground mt-4 space-y-3 text-sm leading-6">
        <li>Landing pages</li>
        <li>Small marketing sites</li>
        <li>Simple content sites</li>
        <li>Freelance client launches</li>
      </ul>
    </aside>
  </section>
</template>
