import { defineNuxtConfig } from 'nuxt3'

export default defineNuxtConfig({
  build: {
    transpile: [
      'path-browserify'
    ]
  },

  alias: {
    'path-browserify': 'node_modules/path-browserify/index.js'
  },

  meta: {
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
      { rel: 'stylesheet', type: 'text/css', href: 'https://unpkg.com/purecss@2.0.6/build/pure-min.css' },
      { rel: 'stylesheet', type: 'text/css', href: 'https://fonts.googleapis.com/css2?family=Nunito:wght@400;700;800&display=swap' },
    ]
  },

  css: [
    '~/assets/styles.css',
  ],

  components: [
    {
      path: 'components',
      pathPrefix: false,
      pattern: '**/*.{vue,js,ts}',
    }
  ],

  buildModules: [
    'nuxt-areas',
  ],

  areas: {
    base: 'areas',
    app: 'app',
    debug: true,
    external: [
      {
        src: '~/external/admin',
        route: '/admin'
      },
      {
        src: '~/external/user-admin',
        route: '/admin/users',
        namespace: '/admin/users'
      },
      {
        src: 'area-51',
        route: '/fifty-one',
        namespace: '/external/fiftyone',
      },
    ]
  }
})
