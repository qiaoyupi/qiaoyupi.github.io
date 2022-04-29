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
    "revision": "7b8166958a18f36c6e1863ee4a14f834"
  },
  {
    "url": "about.html",
    "revision": "6d7522c3827157288bc5180ef75ad080"
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
    "url": "assets/js/1.5482f0e7.js",
    "revision": "d2d16b12507df2239e0f51e6bec6f44c"
  },
  {
    "url": "assets/js/10.e636a636.js",
    "revision": "857dff93d176c156394789a4bdb4b584"
  },
  {
    "url": "assets/js/11.bd68b2ea.js",
    "revision": "c3db6158815917b3f6dadc5cc8c4f023"
  },
  {
    "url": "assets/js/12.6938897f.js",
    "revision": "a83bd41034d36ee6147fd0e2ca6d32d9"
  },
  {
    "url": "assets/js/13.892a9663.js",
    "revision": "29538d5e2fc7615d83c263ba6b8a2984"
  },
  {
    "url": "assets/js/14.39bd3965.js",
    "revision": "94ec0b763348ce178de55737fb8d7bc5"
  },
  {
    "url": "assets/js/15.52b868f3.js",
    "revision": "bd41034d0b153f29c0ffb44431f9bad8"
  },
  {
    "url": "assets/js/16.ce201591.js",
    "revision": "b76335509389401a647bad933834e44a"
  },
  {
    "url": "assets/js/17.5dfa2626.js",
    "revision": "9d335997617a37e5f84f3c283cfde836"
  },
  {
    "url": "assets/js/18.cd76481d.js",
    "revision": "866c345ea2a18f3141e0ffc9bc20de93"
  },
  {
    "url": "assets/js/19.2aa5bf00.js",
    "revision": "6f00e366f6e933d767bc14462d487eed"
  },
  {
    "url": "assets/js/20.33b7face.js",
    "revision": "698344686ae80a90eff270d0bb0a1ca2"
  },
  {
    "url": "assets/js/21.47a45448.js",
    "revision": "de97f66b604e347cf715902ad3683fe4"
  },
  {
    "url": "assets/js/22.5e777765.js",
    "revision": "d4a56a385e2f7a0b717dc076f6cb53be"
  },
  {
    "url": "assets/js/23.6eed6ea8.js",
    "revision": "d340fcc08827b3fc0b9fc8b9d52d6f46"
  },
  {
    "url": "assets/js/24.1344c7fc.js",
    "revision": "3da0a89cdfbd9f9e961dee9c98b65131"
  },
  {
    "url": "assets/js/25.2d72da82.js",
    "revision": "06d0bdb69b06e7b79e143dc01099c1bd"
  },
  {
    "url": "assets/js/26.f6e9fbff.js",
    "revision": "5c27faa66ce59bd3042e8f1812da16ac"
  },
  {
    "url": "assets/js/3.451c139a.js",
    "revision": "bb2a7fd28090d70ca3cb94bbbfafccae"
  },
  {
    "url": "assets/js/4.3348e95f.js",
    "revision": "0826b8c80f2555dff5eb1493feed4978"
  },
  {
    "url": "assets/js/5.ad8b7f5e.js",
    "revision": "4995f7761bff91311a059d66282fcc7e"
  },
  {
    "url": "assets/js/6.09cae1aa.js",
    "revision": "8cfd5b1f69ea14fc679b2ad12b2a1e9b"
  },
  {
    "url": "assets/js/7.e8ad9997.js",
    "revision": "9a7b66827730c8b18b85bea22965e165"
  },
  {
    "url": "assets/js/8.271a6e8b.js",
    "revision": "0f5592f5d0f9c566353984ac0e931d29"
  },
  {
    "url": "assets/js/9.328762f0.js",
    "revision": "2a0687c730c3d1e60c5f3d58dfd47ae6"
  },
  {
    "url": "assets/js/app.6a033ece.js",
    "revision": "ccada9fb1711091a4c03898e14d236ea"
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
    "revision": "a15d691699164e54ac77e22b431c8af9"
  },
  {
    "url": "logo.jpeg",
    "revision": "25f18e8a7c47f392bbef09064e01c9c5"
  },
  {
    "url": "my-life/index.html",
    "revision": "ee02076481b90685ffe82a3849b594b6"
  },
  {
    "url": "my-life/life1.html",
    "revision": "03db8a63fbe7ab68252f1ef74ff9e415"
  },
  {
    "url": "my-life/life2.html",
    "revision": "62f614934e51b2494b2660a3da7ccea2"
  },
  {
    "url": "technical/css/index.html",
    "revision": "fc852464f89224a75c39070607b30d36"
  },
  {
    "url": "technical/css/qa.html",
    "revision": "7f929982a577bf58406d8346fd558f17"
  },
  {
    "url": "technical/index.html",
    "revision": "596d7ea48ba944455faa2c8cd422320c"
  },
  {
    "url": "technical/js/index.html",
    "revision": "76adf9f75a7299900884fb120b4f8510"
  },
  {
    "url": "technical/js/qa.html",
    "revision": "fbb563fbc72781612088fe91ab4664e4"
  },
  {
    "url": "technical/lwm/index.html",
    "revision": "205313bc46b75a9fd7f0e6b48f3af064"
  },
  {
    "url": "technical/lwm/qa1.html",
    "revision": "7dc1a92cc807b85825de76dc362d6f74"
  },
  {
    "url": "technical/node/index.html",
    "revision": "0db83c4b44237d23a14f8f39abc7669f"
  },
  {
    "url": "technical/node/qa.html",
    "revision": "e4015a7877477c0739f43802d98832d8"
  },
  {
    "url": "timeAxis.html",
    "revision": "0b40cac3d6f754aaa08642836df6f181"
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
