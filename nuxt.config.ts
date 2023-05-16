import graphql from '@rollup/plugin-graphql';

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
    build: {
      transpile: ['@nuxtjs/apollo'],
      analyze: true,
    },
    nitro: {
      esbuild: {
        options: {
          target: 'esnext',
        },
      },
      prerender: {
        crawlLinks: false,
        routes: ['/'],
        ignore: ['/hi'],
      },
    },
    modules: [
      '@nuxtjs/apollo',
      '@pinia/nuxt'
    ],
    apollo: {
      autoImports: true,
      authType: 'Bearer',
      authHeader: 'Authorization',
      tokenStorage: 'cookie',
        clients: {
          default: {
            tokenStorage: 'cookie',
            httpEndpoint: process.env.NODE_ENV ==='production' ? `${process.env.DOMAIN}/graphql` : 'http://localhost:3001/graphql'
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
    vite: {
      plugins: [graphql()]
    }
})
