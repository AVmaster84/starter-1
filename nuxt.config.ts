import tailwindcss from "@tailwindcss/vite"
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1.0" }
      ]
    }
  },
  devtools: { enabled: true },
  vite: {
    plugins: [tailwindcss(),]},
  css: ["assets/css/app.css"],
  

  modules: [
    // "@nuxt/ui",
    "@nuxt/icon",
    "@nuxt/image",
    // "@nuxtjs/tailwindcss",
    // "@nuxtjs/color-mode"
  ],

  pages: false,
  // colorMode: {
  //   preference: 'light'
  // },
  icon: {
    serverBundle: {
      collections: ['heroicons']
    }
  },
  compatibilityDate: "2025-01-23"
})