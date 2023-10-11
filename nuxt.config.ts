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
          src: "@/node_modules/bootstrap/dist/js/bootstrap.bundle.min.js", 
          body: true 
        }
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: './favicon-32x32.png' }],
    }
  },
  ssr: false,
  devtools: { enabled: false },
  css: [
    '~/assets/css/main.scss',
  ],
  components: true,
  plugins: [{ src: "@/plugins/aos", ssr: false, mode: "client" }, {src: "@/plugins/useBootstrap.client.ts", ssr: false}],
  
})
