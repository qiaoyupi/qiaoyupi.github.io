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
    "revision": "b73eabfa4271be161741b84796def4eb"
  },
  {
    "url": "about.html",
    "revision": "f3f292920d9fb647e2315b7eff2a9cbc"
  },
  {
    "url": "assets/css/0.styles.b1cdbe0c.css",
    "revision": "265658844e0eb848be5463e743ba57e3"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.352c76da.js",
    "revision": "561f0457ecdc21f68665fdc7fb9b299e"
  },
  {
    "url": "assets/js/11.c7bf4373.js",
    "revision": "3a7c99a0723eae39432c4ec64995bf96"
  },
  {
    "url": "assets/js/12.d49f1ba7.js",
    "revision": "87cb7bd50c64d42d07ba479c4ee97e25"
  },
  {
    "url": "assets/js/13.40a62ae0.js",
    "revision": "152d517722ab77067b9b72e9cc0865c0"
  },
  {
    "url": "assets/js/14.63512892.js",
    "revision": "fbb9343c1dd746ee76c65f6be407660a"
  },
  {
    "url": "assets/js/15.fe03a2a0.js",
    "revision": "106f7e9adbccb907cb6d35ff07283671"
  },
  {
    "url": "assets/js/16.6f946e97.js",
    "revision": "4b06f9c9d1d0ade74e9d44e6acceded4"
  },
  {
    "url": "assets/js/17.ce0ad0e5.js",
    "revision": "3db1fed53aa1f6d3aac1681793fa2075"
  },
  {
    "url": "assets/js/18.e493a1e0.js",
    "revision": "37acc8b02e721c823e9ba4ffdf7a27c7"
  },
  {
    "url": "assets/js/19.712da1fa.js",
    "revision": "bae00ace06c79f38d563be1dda5fdfa4"
  },
  {
    "url": "assets/js/2.641c1ef1.js",
    "revision": "fd6c37d333884c5be4963bdbf290e98b"
  },
  {
    "url": "assets/js/20.d97799a6.js",
    "revision": "5a7083460dd6e59daab7f672063fc87d"
  },
  {
    "url": "assets/js/21.a687df57.js",
    "revision": "d48411cc491b2ecec176821be3a5ff0c"
  },
  {
    "url": "assets/js/22.0c01921b.js",
    "revision": "22d7f4d60662ae891417d6475745c558"
  },
  {
    "url": "assets/js/23.11a77fd3.js",
    "revision": "b3d6a47b893e0525326bbc2886629967"
  },
  {
    "url": "assets/js/24.bf78e08e.js",
    "revision": "fc3e3e1b2a8fb8ad0159848d3f384079"
  },
  {
    "url": "assets/js/25.625c44c2.js",
    "revision": "2416059828a4baeeeeb5d8d21e97bce3"
  },
  {
    "url": "assets/js/26.7f33ff6f.js",
    "revision": "2350450c363cd196e28707b1e88a5aff"
  },
  {
    "url": "assets/js/27.35cad540.js",
    "revision": "006b67b2ed92ccd13cba9fdf42587941"
  },
  {
    "url": "assets/js/28.01649917.js",
    "revision": "6e0bebcc63441aaea15c7bb8e29626a0"
  },
  {
    "url": "assets/js/29.806aecfe.js",
    "revision": "27ce6676fac55d34177e34d65a40b998"
  },
  {
    "url": "assets/js/3.341073fc.js",
    "revision": "e3ef9d7715d6a6cd6d4c45300c09dfdf"
  },
  {
    "url": "assets/js/30.8d5af53a.js",
    "revision": "b7cf7ba24c1ed957790cd9a766434535"
  },
  {
    "url": "assets/js/31.7543adf8.js",
    "revision": "226e7d6353614f10375f2e4c15ee92c7"
  },
  {
    "url": "assets/js/4.f8749edc.js",
    "revision": "aadf0ffbb7f3e443a50e33124a68645c"
  },
  {
    "url": "assets/js/5.b0d263ec.js",
    "revision": "cc75d6ff63dc91c6d09d8ebd8e5e265e"
  },
  {
    "url": "assets/js/6.1a915ed2.js",
    "revision": "84023e95e6510f576b60f25fde67cb0d"
  },
  {
    "url": "assets/js/7.f2264339.js",
    "revision": "162fd69d70e68de807533390eca56e41"
  },
  {
    "url": "assets/js/8.0214c336.js",
    "revision": "043f3071b6cb94a96754051bbc8c958a"
  },
  {
    "url": "assets/js/9.1c9e4035.js",
    "revision": "a9e952b1fb9e5e2e6fe61887c79e57f1"
  },
  {
    "url": "assets/js/app.12229313.js",
    "revision": "7afc1bb8cce51fe510bc6f8989def6b7"
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
    "revision": "4a7d1e4250440189dc1962e8145776c5"
  },
  {
    "url": "my-life/index.html",
    "revision": "7e8007e90fb1b41c0192591a7cb14f2c"
  },
  {
    "url": "my-life/life1.html",
    "revision": "0d746820302ec8c51464f97e4e34627c"
  },
  {
    "url": "my-life/life2.html",
    "revision": "ad69df3a60bd58e8adbf103a402b5c45"
  },
  {
    "url": "my-life/life3.html",
    "revision": "8fdb7343c8b281906554bb1544e79576"
  },
  {
    "url": "my-life/life4.html",
    "revision": "81907873126d475aeb00306d23157f5a"
  },
  {
    "url": "my-life/life5.html",
    "revision": "010c2933d86b5017a26c311490af0277"
  },
  {
    "url": "my-life/life6.html",
    "revision": "e96e619463e344b7ddf378bc455c7627"
  },
  {
    "url": "my-life/life7.html",
    "revision": "9dc1c47c7a2e4e1895a7b2662befcd7e"
  },
  {
    "url": "technical/css/index.html",
    "revision": "55091f4b51b2964807ce5e2d1d80a0bd"
  },
  {
    "url": "technical/css/qa.html",
    "revision": "5394f31337992430f57961fdd11d5e22"
  },
  {
    "url": "technical/index.html",
    "revision": "061cb0bd337bff15ecef5f54de60fdd2"
  },
  {
    "url": "technical/js/index.html",
    "revision": "29aa795e82ac957cba3ed3af0fc88667"
  },
  {
    "url": "technical/js/qa.html",
    "revision": "bfea0799886b4959d7719ad767bbeb68"
  },
  {
    "url": "technical/lwm/index.html",
    "revision": "0aa529b3be6eca51fb4c2250cb15dd33"
  },
  {
    "url": "technical/lwm/qa1.html",
    "revision": "f9b8cb94b5d99eed88b85186f5d34785"
  },
  {
    "url": "technical/node/index.html",
    "revision": "583e353fa7effced152cb0b817ef31b7"
  },
  {
    "url": "technical/node/qa.html",
    "revision": "adf34c3c29d513db67d899fd4c2fc4c8"
  },
  {
    "url": "timeAxis.html",
    "revision": "5ccefc939c33b890265eee6395ca7a59"
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
