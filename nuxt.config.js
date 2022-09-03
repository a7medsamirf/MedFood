import { theme } from './config/vuetify.options'
export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
/*   ssr: false,
  target: 'static', */
  // Target: https://go.nuxtjs.dev/config-target

/*   router: { base: '/MedFood/' }, */

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - MedFood',
    title: 'MedFood',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
      { name : 'theme-color', content: '#3270FC'}
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
      {rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Delius+Unicase:wght@400;700&display=swap"},
      {rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Monoton&display=swap"},
      {rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap"},
      {rel: "stylesheet", href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"},

      {
        hid: 'canonical',
        rel: 'canonical',
        href: global.siteUrl,
      },
    ]
  },

/* loading: '~/components/preloader.vue', */


  transition: 'slide-bottom',
  // Global CSS: https://go.nuxtjs.dev/config-css

  css: [
    '~/assets/vuetify-overrides.scss',
    "@sweetalert2/theme-material-ui",
    '~/assets/vendors/slick-carousel/slick.css',
    '~/assets/vendors/slick-carousel/slick-theme.css'
  ],

  styleResources: {
    scss: [
        '~/assets/_transition.scss',
        '~/assets/_mixins.scss',
        '~/assets/_functions.scss',
        '~/assets/_media-queries.scss',
        '~/assets/_url-img.scss'
    ]
},
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {src: '~/plugins/cart.js', ssr: false},
    {src: '~/plugins/toast-notification', ssr: false},
    {src: '~/plugins/wow.js', ssr: false}
  ],
  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    ['@nuxtjs/vuetify',{rtl:true}],
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    ["vue-toastification/nuxt", {
      timeout: 1000,
      draggable: false
    }],
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    // https://go.nuxtjs.dev/sitemap
/*     '@nuxtjs/sitemap',
 */    "vue-sweetalert2/nuxt/no-css",
    // https://resources.com/
    "@nuxtjs/style-resources",
  ],

/*   sitemap: {
    hostname: global.siteUrl,
    routes() {
      return getRoutes();
    },
  }, */
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: "http://localhost:3000"
  },
  publicRuntimeConfig: {
    axios: {
      browserBaseURL: process.env.BROWSER_BASE_URL
    }
  },

  privateRuntimeConfig: {
    axios: {
      baseURL: process.env.BASE_URL
    }
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {
    markdown: {
      prism: {
        theme: 'prism-themes/themes/prism-material-oceanic.css'
      }
    },
    nestedProperties: ['author.name']
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    optionsPath: './config/vuetify.options.js',
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    loaders: {
      vus: { cacheBusting: true },
      scss: { sourceMap: false }
    },
  }
}