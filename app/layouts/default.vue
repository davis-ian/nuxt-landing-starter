<script setup lang="ts">
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "Features", to: "/features" },
  { label: "Work", to: "/work" },
  { label: "Contact", to: "/contact" },
] as const;

const currentYear = new Date().getFullYear();
</script>

<template>
  <div class="min-h-screen bg-background text-foreground">
    <header class="sticky top-0 z-50 border-b border-border/70 bg-background/90 backdrop-blur">
      <div class="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <NuxtLink to="/" class="flex items-center gap-2 font-semibold tracking-tight">
          <span class="flex size-8 items-center justify-center rounded-md bg-primary text-sm text-primary-foreground">
            NL
          </span>
          <span>Nuxt Landing Starter</span>
        </NuxtLink>

        <nav aria-label="Primary navigation" class="hidden items-center gap-6 text-sm text-muted-foreground md:flex">
          <NuxtLink
            v-for="item in navItems"
            :key="item.to"
            :to="item.to"
            class="transition-colors hover:text-foreground"
          >
            {{ item.label }}
          </NuxtLink>
        </nav>

        <Button as-child size="sm" class="hidden md:inline-flex">
          <NuxtLink to="/contact">Start a Project</NuxtLink>
        </Button>
      </div>
    </header>

    <main>
      <slot />
    </main>

    <footer class="border-t border-border bg-muted/30">
      <div class="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-[1fr_auto] lg:px-8">
        <div class="max-w-md space-y-3">
          <NuxtLink to="/" class="font-semibold tracking-tight">
            Nuxt Landing Starter
          </NuxtLink>
          <p class="text-sm leading-6 text-muted-foreground">
            A clean static starter for freelance landing pages, marketing sites, and simple content sites.
          </p>
        </div>

        <nav aria-label="Footer navigation" class="flex flex-wrap gap-x-5 gap-y-3 text-sm text-muted-foreground md:justify-end">
          <NuxtLink
            v-for="item in navItems"
            :key="item.to"
            :to="item.to"
            class="transition-colors hover:text-foreground"
          >
            {{ item.label }}
          </NuxtLink>
        </nav>

        <p class="text-sm text-muted-foreground md:col-span-2">
          © {{ currentYear }} Nuxt Landing Starter. Built with Nuxt, Tailwind CSS, and shadcn-vue.
        </p>
      </div>
    </footer>
  </div>
</template>
