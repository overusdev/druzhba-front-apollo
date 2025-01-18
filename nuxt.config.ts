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
      transpile: [
        '@nuxtjs/apollo',
        'tslib',
      ],
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
      '@pinia/nuxt',
      '@nuxt/image',

      // https://pictogrammers.com/library/mdi/icon/chevron-right/
      'nuxt-mdi'
    ],
    image: {
      inject: true
    },
    plugins: [
      { src: '~/plugins/ymapPlugin.js',  mode: 'client' },
      { src: '~/plugins/apollo.js' },
      // { src: '~/plugins/apollo.js',  mode: 'client' },
      { src: '~/plugins/apollo-error.js' },
    ],
    apollo: {
      autoImports: true,
      authType: 'Bearer',
      authHeader: 'Authorization',
      tokenStorage: 'cookie',
        clients: {
          default: {
            tokenStorage: 'cookie',
            httpEndpoint: process.env.NODE_ENV ==='production' ? `https://www.druzba-nn.ru/graphql` : 'http://localhost:3001/graphql'
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
        // 'reset-css/reset.css',
    ],
    vite: {
      plugins: [graphql()],
      // server: {
      //   watch: {
      //     usePolling: true,
      //   },
      //   host: true,
      //   strictPort: true,
      //   port: 8002
      // }
    },
    // runtimeConfig: {
    //   apiUrl: NUXT_API_URL,
    //   // Private config that is only available on the server
    //   apiSecret: '123',
    //   // Config within public will be also exposed to the client
    //   public: {
    //     apiBase: '/api'
    //   }
    // },
})