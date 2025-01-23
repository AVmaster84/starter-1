// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["@assets/css/main.css"],

  modules: ["@nuxt/ui", "@nuxt/icon", // "@nuxt/tailwindcss",
  "@nuxt/image", "@nuxtjs/tailwindcss", "@nuxtjs/color-mode"],

  ui: {
    global: true
  },

  tailwindcss: {

  },

  colorMode: {
    preference: 'light'
  },

  compatibilityDate: "2025-01-23"
})