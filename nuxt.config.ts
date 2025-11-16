// import svgLoader from 'vite-svg-loader'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',

  devtools: { enabled: true },
  // vite: {
  //   plugins: [svgLoader()],
  // },

  css: ['~/assets/css/main.css'],

  modules: ['@nuxt/ui'],


})
