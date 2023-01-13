export default defineNuxtConfig({
  ssr: false,
  modules: ["@pinia/nuxt", "@pinia-plugin-persistedstate/nuxt"],
  css: [
    "vuetify/lib/styles/main.sass",
    "@mdi/font/css/materialdesignicons.min.css",
  ],
  build: {
    transpile: ["vuetify"],
  },
  vite: {
    define: {
      "process.env.DEBUG": false,
    },
  },
  devServerHandlers: [],
});
