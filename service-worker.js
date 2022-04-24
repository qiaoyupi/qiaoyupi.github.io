/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "ecc542e4c1ec1c4ed268a17a63650fa0"
  },
  {
    "url": "about.html",
    "revision": "174b288a8e4769e672a2f08506de185e"
  },
  {
    "url": "assets/css/0.styles.0ad39d54.css",
    "revision": "f239f60470550542478a8ffbec8ebcf6"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.6a345617.js",
    "revision": "cf8c6f043395ab4a62b037ba6a428ad1"
  },
  {
    "url": "assets/js/11.28f99b47.js",
    "revision": "0214ff52fa68fa3669f0ac5c03a039dd"
  },
  {
    "url": "assets/js/12.325903f1.js",
    "revision": "423f57713a5b59b76bb0d413bf2911b0"
  },
  {
    "url": "assets/js/13.440f0b7b.js",
    "revision": "7cfc42952e0feb0c26f314005a88c2a9"
  },
  {
    "url": "assets/js/14.877e87e3.js",
    "revision": "6910fb276c2396c099948d0ede2f7243"
  },
  {
    "url": "assets/js/15.a05f1602.js",
    "revision": "82862c484e0951fc9bf92a94ceea8b24"
  },
  {
    "url": "assets/js/2.5e71b730.js",
    "revision": "2e1a8fc18045287ec4f71619c3dfbe2b"
  },
  {
    "url": "assets/js/3.5d01be45.js",
    "revision": "c01e1d4a59a5f7da13aaa3c267bbccbc"
  },
  {
    "url": "assets/js/4.3b5a20ec.js",
    "revision": "f3bc2d2ed5a75c6c2c33fec4cc06f80b"
  },
  {
    "url": "assets/js/5.affc1ad4.js",
    "revision": "834cf82a9fc8c89d2cfd9890e0edf19e"
  },
  {
    "url": "assets/js/6.b17709b6.js",
    "revision": "dd70d0ac8796a6b28ceed85a0b9c3b2d"
  },
  {
    "url": "assets/js/7.512c708c.js",
    "revision": "dcb08b626a7ab6e4687c6ea0cef973a8"
  },
  {
    "url": "assets/js/8.4f5d7a09.js",
    "revision": "0903590a3553e5d45229fc2d70e3560e"
  },
  {
    "url": "assets/js/9.16d047ea.js",
    "revision": "5c6d1bbeb8d09764c388b3a099cab379"
  },
  {
    "url": "assets/js/app.3736357d.js",
    "revision": "cf99dca07a849ea42a3468e6285859f9"
  },
  {
    "url": "coding.html",
    "revision": "d55578922b0fbdb8746a0afadc999cbf"
  },
  {
    "url": "icons/128.png",
    "revision": "3ca54ff4eead742764ed8c9373f01d5f"
  },
  {
    "url": "icons/144.png",
    "revision": "11817ef78a818c07ddc66078bfea19db"
  },
  {
    "url": "icons/192.png",
    "revision": "fa21cc3304fc24de40c42be8b4e91830"
  },
  {
    "url": "icons/256.png",
    "revision": "5708f39c45db496ab89042685ca05793"
  },
  {
    "url": "icons/512.png",
    "revision": "8dcf6f992f9a6780b9688e770ef8962b"
  },
  {
    "url": "icons/logo.svg",
    "revision": "f2037d1d285e804b308f489aa50190ae"
  },
  {
    "url": "index.html",
    "revision": "f278b6f6f54c77548fb84faad296604e"
  },
  {
    "url": "logo.jpeg",
    "revision": "25f18e8a7c47f392bbef09064e01c9c5"
  },
  {
    "url": "rszs.png",
    "revision": "1be026b3eeba80651e61983acf0778d9"
  },
  {
    "url": "self.html",
    "revision": "c86c583518a6c9deb3cf95bcaf010e37"
  },
  {
    "url": "songlian.html",
    "revision": "abf9793fe651fa913e688ad234d0dde1"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
