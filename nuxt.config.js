export default {
  mode: 'spa',
  /*
   ** Headers of the page
   */
  head: {
    title: 'Glenn Domin | Portfolio',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'msapplication-TileColor', content: '#da532c' },
      { name: 'theme-color', content: '#ffffff' }
    ],
    htmlAttrs: {
      lang: 'en-au',
    },
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'icon', type: 'image/x-icon', sizes: '32x32', href: '/favicon-32x32.png' },
      { rel: 'icon', type: 'image/x-icon', sizes: '16x16', href: '/favicon-16x16.png' },
      { rel: 'apple-touch-icon', type: 'image/x-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
      { rel: 'mask-icon', type: 'image/x-icon', color: '#5bbad5', href: '/safari-pinned-tab.svg' },
      { rel: 'manifest', href: '/site.webmanifest' },
      { rel: 'preload', as: 'font', crossorigin: 'crossorigin', type: 'font/woff2', href: '/fonts/leaguespartan-bold-webfont.woff2' },
      { rel: 'preload', as: 'font', crossorigin: 'crossorigin', type: 'font/woff2', href: '/fonts/wotfard-regular-webfont.woff2' },
      { rel: 'preload', as: 'font', crossorigin: 'crossorigin', type: 'font/woff2', href: '/fonts/wotfard-bold-webfont.woff2' }
    ]
  },
  render: {
    bundleRenderer: {
      shouldPreload: (file, type) => {
        return [
          '~static/fonts/leaguespartan-bold-webfont.woff2',
          '~static/fonts/wotfard-regular-webfont.woff2',
          '~static/fonts/wotfard-bold-webfont.woff2',
        ].includes(type)
      }
    }
  },
  /*
   ** Customize the progress-bar color
   */
  loadingIndicator: '~/loading.html',
  /*
   ** Global CSS
   */
  css: [
    { src: '~assets/scss/styles.scss', lang: 'css' }
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  devModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [],
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  },
  // TODO: Maybe there's a better way of hacking the props attribute to true?
  router: {
    extendRoutes (routes, resolve) {
      routes.map(route => {
        const tempRoute = route
        tempRoute['props'] = true
        return tempRoute
      })
    }
  }
}
