// https://nuxt.com/docs/api/configuration/nuxt-config

import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ["~/assets/css/tailwind.css"],

  vite: {
    plugins: [tailwindcss()],
  },

  modules: ["@nuxt/eslint", "shadcn-nuxt"],
  shadcn: {
    prefix: "",
    componentDir: "@/components/ui",
  },

  nitro: {
    prerender: {
      routes: ["/"],
      crawlLinks: true,
    },
  },

  app: {
    head: {
      htmlAttrs: {
        lang: "en",
      },
      title: "Nuxt Landing Starter",
      titleTemplate: "%s | Nuxt Landing Starter",
      meta: [
        {
          name: "description",
          content:
            "A clean Nuxt starter for landing pages, marketing sites, and simple content sites.",
        },
        {
          property: "og:site_name",
          content: "Nuxt Landing Starter",
        },
        {
          property: "og:type",
          content: "website",
        },
        {
          property: "og:title",
          content: "Nuxt Landing Starter",
        },
        {
          property: "og:description",
          content:
            "A clean Nuxt starter for landing pages, marketing sites, and simple content sites.",
        },
        {
          property: "og:image",
          content: "/og-image.png",
        },
        {
          name: "twitter:card",
          content: "summary_large_image",
        },
        {
          name: "twitter:title",
          content: "Nuxt Landing Starter",
        },
        {
          name: "twitter:description",
          content:
            "A clean Nuxt starter for landing pages, marketing sites, and simple content sites.",
        },
        {
          name: "twitter:image",
          content: "/og-image.png",
        },
      ],
    },
  },
});
