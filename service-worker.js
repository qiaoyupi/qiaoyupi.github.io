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
    "revision": "42497a1b5dfaabd9b0aca3380e4054b3"
  },
  {
    "url": "about.html",
    "revision": "a6eaa84211210faa62d49ece93e95c7d"
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
    "url": "assets/js/10.42d805ee.js",
    "revision": "45ae3dd949c88f84c30b3f5219791b45"
  },
  {
    "url": "assets/js/11.70829e21.js",
    "revision": "4f81f718f78d98cc9407b11c489a1d1e"
  },
  {
    "url": "assets/js/12.4bb47156.js",
    "revision": "75cd72dae1ca5d3ab149e7883e9f0b16"
  },
  {
    "url": "assets/js/13.5910251c.js",
    "revision": "1870eed3b01af96ad8ef42be497f0fcb"
  },
  {
    "url": "assets/js/14.79fe2307.js",
    "revision": "c513953fd1e8cad336cd09a9d58e4977"
  },
  {
    "url": "assets/js/15.8787dafc.js",
    "revision": "a9078c226e28008893e423a037b899f5"
  },
  {
    "url": "assets/js/16.dbb8ca52.js",
    "revision": "5b4a17ccbd7abe6b063c3a2a094b6e5f"
  },
  {
    "url": "assets/js/17.37b3c604.js",
    "revision": "78d1a4b6afd8fe4bd074f17768ea196f"
  },
  {
    "url": "assets/js/18.8d427288.js",
    "revision": "f2740435d809bdf530fd57f662dca822"
  },
  {
    "url": "assets/js/19.a047d9f3.js",
    "revision": "11f89233fc1ce93673d90e60d91a7e55"
  },
  {
    "url": "assets/js/2.f268a6fc.js",
    "revision": "1455a013927b52cb6dcc67e3f876e811"
  },
  {
    "url": "assets/js/20.4bd30581.js",
    "revision": "e88a707ccc4d8b2637bece4099a1efc2"
  },
  {
    "url": "assets/js/21.262fea86.js",
    "revision": "3edf578509e333b63ed73a697dc7979d"
  },
  {
    "url": "assets/js/22.20ad4985.js",
    "revision": "2c9d7b5cfc51fcea5d6622c925139690"
  },
  {
    "url": "assets/js/3.aa6c93d5.js",
    "revision": "e418a518dd9e015548c8ac97c8d5ec31"
  },
  {
    "url": "assets/js/4.a59ad2bf.js",
    "revision": "f9108d8c90db43a64b36cf99659863ec"
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
    "url": "assets/js/app.f20cb040.js",
    "revision": "b07c0097a0205b86fd291d1016c7ea4b"
  },
  {
    "url": "fe/css/qa.html",
    "revision": "bf2e0a6af352ffecd7d70f62fd000d4f"
  },
  {
    "url": "fe/index.html",
    "revision": "a696c3f6c96a5b858cb7128d5e519401"
  },
  {
    "url": "fe/node/index.html",
    "revision": "060fd82ce525507dabfa4c0528e1b9b1"
  },
  {
    "url": "fe/node/qa.html",
    "revision": "dbb5994b0f0ebdd9309f1b3d08415a99"
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
    "revision": "e2de8cea6039d84bb4a5fe46b72564af"
  },
  {
    "url": "logo.jpeg",
    "revision": "25f18e8a7c47f392bbef09064e01c9c5"
  },
  {
    "url": "pm/index.html",
    "revision": "79259ea046b6cccd9245f98431bd588c"
  },
  {
    "url": "pm/vs.html",
    "revision": "baded9e03a04f413f14159f3b24ec5e5"
  },
  {
    "url": "self.html",
    "revision": "c8ce755b66f597930bfdd3ead97dd69c"
  },
  {
    "url": "self/classicalPoetry.html",
    "revision": "1b01c92de54afd979ef8e309aabe83ea"
  },
  {
    "url": "self/index.html",
    "revision": "8d5192fde46d69b957633d59c502c214"
  },
  {
    "url": "timeAxis.html",
    "revision": "a1da41d37ea9e45477c6c0fcdbef4bbd"
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
