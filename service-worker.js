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
    "revision": "d0b88ffeeabaec89179fb210373448a0"
  },
  {
    "url": "about.html",
    "revision": "4fa53460eef1285343f342fbfed40de8"
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
    "url": "assets/js/10.f3a95938.js",
    "revision": "06a139c9a5f493021cd2477d003578bc"
  },
  {
    "url": "assets/js/11.dbe1ae58.js",
    "revision": "0c11060a156c04587225fa4ec6da4cb2"
  },
  {
    "url": "assets/js/12.43e09f93.js",
    "revision": "e298c96973a5fe9ac221620f8d97ed93"
  },
  {
    "url": "assets/js/13.ed42cdd4.js",
    "revision": "69a2ff9225421158287d738c72e1d6d0"
  },
  {
    "url": "assets/js/14.3ee72a34.js",
    "revision": "4222905ca16ae4d809f07a340bf453cd"
  },
  {
    "url": "assets/js/15.a05f1602.js",
    "revision": "82862c484e0951fc9bf92a94ceea8b24"
  },
  {
    "url": "assets/js/2.4c10abeb.js",
    "revision": "2e1a8fc18045287ec4f71619c3dfbe2b"
  },
  {
    "url": "assets/js/3.a372cb4d.js",
    "revision": "c01e1d4a59a5f7da13aaa3c267bbccbc"
  },
  {
    "url": "assets/js/4.3b5a20ec.js",
    "revision": "f3bc2d2ed5a75c6c2c33fec4cc06f80b"
  },
  {
    "url": "assets/js/5.65b1a92d.js",
    "revision": "834cf82a9fc8c89d2cfd9890e0edf19e"
  },
  {
    "url": "assets/js/6.70d420b9.js",
    "revision": "dd70d0ac8796a6b28ceed85a0b9c3b2d"
  },
  {
    "url": "assets/js/7.403ad9b5.js",
    "revision": "dcb08b626a7ab6e4687c6ea0cef973a8"
  },
  {
    "url": "assets/js/8.e3ae2ac8.js",
    "revision": "0903590a3553e5d45229fc2d70e3560e"
  },
  {
    "url": "assets/js/9.a44fd27d.js",
    "revision": "5c6d1bbeb8d09764c388b3a099cab379"
  },
  {
    "url": "assets/js/app.d5cc5d71.js",
    "revision": "93dc3284fadb54a5ba129e0636e94cb0"
  },
  {
    "url": "countUp.html",
    "revision": "86c98e3958679cd744dab1fc4d8a4b66"
  },
  {
    "url": "history.html",
    "revision": "4eb531c4991a97fe665b3614c128568c"
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
    "revision": "c0b0d6c1e91560bf5613e4e63ebad9c3"
  },
  {
    "url": "logo.jpeg",
    "revision": "25f18e8a7c47f392bbef09064e01c9c5"
  },
  {
    "url": "songlian.html",
    "revision": "fc7b3fe4ef193b8d93101fc7010a293b"
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
