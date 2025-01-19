import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  vite: {
    plugins: [tailwindcss()],
  },
  css: ["~/assets/app.css"],
  app: {
    head: {
      title: 'Vote App'
    }
  },
  modules: [
    'nuxt-mongoose',
  ],
  mongoose: {
    options: {
      dbName: 'vote',
    },
  }
})
