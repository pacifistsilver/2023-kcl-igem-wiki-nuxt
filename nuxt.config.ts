// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    baseURL: '/kcl-uk',
    head: {
      title: 'KCL - iGEM 2023',
      htmlAttrs: {
        lang: 'en',
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: '' },
        { name: 'format-detection', content: 'telephone=no' },
      ],  
      script: [
        {
          src: "https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js",
          integrity: "sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa",
          crossorigin: "anonymous"
        }
      ],
    }
  },
  ssr: false,
  devtools: { enabled: true },
  css: [
    '~/assets/css/main.scss',
  ],
  components: true,
  plugins: [{ src: "@/plugins/aos", ssr: false, mode: "client" }],
})
