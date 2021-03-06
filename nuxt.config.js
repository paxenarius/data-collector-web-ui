
const nodeExternals = require('webpack-node-externals')
const resolve = (dir) => require('path').join(__dirname, dir)
require('dotenv').config()

module.exports = {
  env: {
    API: process.env.ROOT_API || '/undefined-api'
  },
  /*
  ** Headers of the page
  */
  head: {
    title: 'Ajira GIS Data Collector',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js + Vuetify.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' }
    ]
  },
  plugins: ['~/plugins/vuetify.js', '~/plugins/fireauth.js'],
  css: [
    '~/assets/style/app.styl'
  ],
  mode: 'spa',
  generate: {
    fallback: true // if you want to use '404.html'
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  // router: {
  //   middleware: 'router-auth'
  // },
  /*
  ** Build configuration
  */
  build: {
    babel: {
      plugins: [
        ['transform-imports', {
          'vuetify': {
            'transform': 'vuetify/es5/components/${member}',
            'preventFullImport': false
          }
        }]
      ]
    },
    vendor: [
      '~/plugins/vuetify.js',
      '~/plugins/fireauth.js',
      'axios'
    ],
    extractCSS: true,
    /*
    ** Run ESLint on save
    */
    extend(config, ctx) {
      // if (ctx.isDev && ctx.isClient) {
      //   config.module.rules.push({
      //     enforce: 'pre',
      //     test: /\.(js|vue)$/,
      //     loader: 'eslint-loader',
      //     exclude: /(node_modules)/
      //   })
      // }
      if (ctx.isServer) {
        config.externals = [
          nodeExternals({
            whitelist: [/^vuetify/]
          })
        ]
      }
    }
  }
}
