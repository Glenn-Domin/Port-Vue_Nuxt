export default {
  mode: 'spa',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'preload', as: 'font', crossorigin: 'crossorigin', type: 'font/woff2', href: '/fonts/leaguespartan-bold-webfont.woff2' }
    ]
  },
  render: {
    bundleRenderer: {
      shouldPreload: (file, type) => {
        return ['~static/fonts/leaguespartan-bold-webfont.woff2'].includes(type)
      }
    }
  },
  /*
   ** Customize the progress-bar color
   */
  loading: '~/components/loading.vue',
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
    transpile: ['gsap'],
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
