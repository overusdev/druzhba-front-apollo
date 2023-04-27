export default defineNuxtConfig({
    app: {
      head: {
          title: 'СНТ Дружба',
          htmlAttrs: {
              lang: 'ru'
          },
          meta: [
              
              { name: 'viewport', content: 'width=device-width, initial-scale=1' }
          ],
          script: [],
          link: [],
          style: []
      },
    },
    modules: [
      '@nuxtjs/apollo',
      // 'nuxt-graphql-client',
      '@pinia/nuxt'
    ],
    // 'graphql-client':{
    //     watch: true,
    //     autoImport: true,
    //     functionPrefix: 'Gql',
    //     documentPaths: ['./'],
    //     preferGETQueries: false
    // },
    apollo: {
      autoImports: true,
      authType: 'Bearer',
      authHeader: 'Authorization',
      tokenStorage: 'cookie',
        clients: {
          default: {
            tokenStorage: 'cookie',
            httpEndpoint: 'http://localhost:3001/graphql'
          },
        },
    },
    // runtimeConfig: {
    //   autoImport: true,
    //   public: {
    //     GQL_HOST: 'http://localhost:3001/graphql'
    //   }
    // },
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
