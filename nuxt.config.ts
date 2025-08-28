// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: [
    "@nuxt/ui",
    "@vueuse/nuxt",
    "@nuxtjs/google-fonts",
    "@nuxt/icon",
    "@nuxtjs/i18n",
  ],
  i18n: {
    defaultLocale: "en",
    locales: [
      { code: "en", name: "EN", file: "en.json" },
      { code: "th", name: "TH", file: "th.json" },
    ],
  },
  devServer: {
    port: 3005,
  },
  runtimeConfig: {
    public: {
      n8nURL: process.env.N8N_URL,
      N8N_HISTORY_URL: process.env.N8N_HISTORY_URL,
      N8N_URL_v2: process.env.N8N_URL_v2,
    },
  },
  ui: {
    theme: {
      colors: [
        "primary",
        "secondary",
        "tertiary",
        "info",
        "success",
        "warning",
        "error",
      ],
    },
  },
});
