export default defineNuxtConfig({
    modules: [
      '@nuxtjs/apollo',
      '@pinia/nuxt'
    ],
    apollo: {
        clients: {
          default: {
            httpEndpoint: 'http://localhost:3001/graphql'
          },
        },
    },
    pinia: {
      autoImports: [
        'defineStore',
        ['defineStore', 'definePiniaStore'],
      ],
    },
    css: [
        '@/assets/styles/media.scss',
        '@/assets/styles/main.scss',
        '@/assets/styles/fonts/Montserrat.css',
        'reset-css/reset.css',
    ],
})
