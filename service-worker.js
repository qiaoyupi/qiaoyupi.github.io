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
    "revision": "78d4da1aac3782781ee1e2658a33f3a9"
  },
  {
    "url": "about.html",
    "revision": "00fd7020cc6ecd20fc72baa8d95044a4"
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
    "url": "assets/js/13.1df3006a.js",
    "revision": "942317921522370b3a362edd119136fe"
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
    "url": "assets/js/app.498638eb.js",
    "revision": "7bd1d021d454ae7bb4b539dc7bdd8e1a"
  },
  {
    "url": "coding.html",
    "revision": "dbb1ff0af68de723b8c362a533d01b26"
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
    "revision": "090681d3149e4caca8580b3431b55a22"
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
    "revision": "be50ebfe04d9523e6071e4609ccdf960"
  },
  {
    "url": "songlian.html",
    "revision": "74c3e1658475f3199ad62d4e5dd0e66a"
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
