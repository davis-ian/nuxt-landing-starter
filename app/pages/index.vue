<template>
  <section class="mx-auto flex min-h-[calc(100vh-4rem)] max-w-6xl items-center px-4 py-20 sm:px-6 lg:px-8">
    <div class="max-w-3xl space-y-8">
      <div class="inline-flex rounded-full border border-border bg-muted/50 px-3 py-1 text-sm text-muted-foreground">
        Static-first Nuxt starter for client work
      </div>

      <div class="space-y-5">
        <h1 class="text-4xl font-semibold tracking-tight text-balance sm:text-6xl">
          Launch polished marketing sites without rebuilding the foundation.
        </h1>
        <p class="max-w-2xl text-lg leading-8 text-muted-foreground">
          A reusable Nuxt, Tailwind CSS, and shadcn-vue base for landing pages, small marketing sites, and simple content projects.
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
  </section>
</template>
