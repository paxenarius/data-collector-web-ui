importScripts('/_nuxt/workbox.3de3418b.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "nuxt-firebase-auth",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/_nuxt/app.6ef759542907d5313af2ae815ec0ffe5.css",
    "revision": "6ef759542907d5313af2ae815ec0ffe5"
  },
  {
    "url": "/_nuxt/app.d538c80bb8b036255f46.js",
    "revision": "abc7af10e4d24ff66712538301f5a3e3"
  },
  {
    "url": "/_nuxt/layouts_default.2bab70d9c776ec030c91.js",
    "revision": "e98696aba3c209c9741b7447f20b6b10"
  },
  {
    "url": "/_nuxt/manifest.792d9641a2464fa389a6.js",
    "revision": "d698c0a071312b6b6da41848044b5548"
  },
  {
    "url": "/_nuxt/pages_about.95cc8af093445a98e66f.js",
    "revision": "52ad03c1641659139485f5e6a4f62ac9"
  },
  {
    "url": "/_nuxt/pages_collect_index.b5ba2d01f6c19406e6e3.js",
    "revision": "22a47177fe3954298a01d17109f8237e"
  },
  {
    "url": "/_nuxt/pages_collect_items.e043844804f96f822f30.js",
    "revision": "e7143ba8526f514c362faf81f31c2bc4"
  },
  {
    "url": "/_nuxt/pages_collect_settings.85676750d184cfdd7544.js",
    "revision": "82b029137c363239223c45b2da0bae84"
  },
  {
    "url": "/_nuxt/pages_collect.2b806b660cf3a54b4647.js",
    "revision": "cf04fa4d31095cb7b9b04c6a8be474ab"
  },
  {
    "url": "/_nuxt/pages_index.ccbc72ce470875a53a9a.js",
    "revision": "8c18e4479bc5ccffc569c17280c0e4c0"
  },
  {
    "url": "/_nuxt/pages_login.c79e3d4ef530da3404cf.js",
    "revision": "da720a439f78292c7192c033792fb48c"
  },
  {
    "url": "/_nuxt/vendor.242efbb8a8aa74a581c5.js",
    "revision": "51c1d7b29097887ba4ec58f217904ad1"
  }
])


workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')

