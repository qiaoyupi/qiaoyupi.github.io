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
    "revision": "dfcf2e5a37d0812bfaa6c3bd550cfd3a"
  },
  {
    "url": "about.html",
    "revision": "f6e70baece1bbf3268b8aa718637574a"
  },
  {
    "url": "assets/css/0.styles.f3d88342.css",
    "revision": "d48e48794893088fd15b74afddd81654"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.bf65fda9.js",
    "revision": "2413c27098b3556bf7aaa1479fe2f12a"
  },
  {
    "url": "assets/js/10.94232116.js",
    "revision": "e137eb08bfa5bcf44e749cfd86c9c535"
  },
  {
    "url": "assets/js/11.68dff325.js",
    "revision": "bb6336b0aba710f152e6caebb924da18"
  },
  {
    "url": "assets/js/12.495b651a.js",
    "revision": "85f350cb7836b324deea8f9034ebb6fb"
  },
  {
    "url": "assets/js/13.ebfe6a3e.js",
    "revision": "51377ee17fb8b5dd4b8fa000d3e18d05"
  },
  {
    "url": "assets/js/14.655524dc.js",
    "revision": "790f75ed18b616b8fb44e7a8d26a6449"
  },
  {
    "url": "assets/js/15.7d9a8fcf.js",
    "revision": "49afa69d971b56071f25dc950b69dcec"
  },
  {
    "url": "assets/js/16.2427b9d4.js",
    "revision": "00055c5a098f1dffbd6ddd48ba66f4e9"
  },
  {
    "url": "assets/js/17.b03cf235.js",
    "revision": "21275e1de982110c1c0991870699fb80"
  },
  {
    "url": "assets/js/18.1d44e2d9.js",
    "revision": "264a7361339f299f7bc598c8b70fe1de"
  },
  {
    "url": "assets/js/19.88e0aeeb.js",
    "revision": "d32a2184320eca716eb8a78f30f38469"
  },
  {
    "url": "assets/js/20.e78cb606.js",
    "revision": "daa5780055ae5738dd46a51dcdd8fe7d"
  },
  {
    "url": "assets/js/21.26d5c776.js",
    "revision": "7b567473a2a82a7e850962df62d6a024"
  },
  {
    "url": "assets/js/22.a7c9e11a.js",
    "revision": "3411f80402c4edee6326ffdb8da29979"
  },
  {
    "url": "assets/js/23.96196b46.js",
    "revision": "10980853222dec79e3b1ceda0f1d69b5"
  },
  {
    "url": "assets/js/24.a53c4c52.js",
    "revision": "f12d70e97f7ca8ca844de10f0e8a505d"
  },
  {
    "url": "assets/js/25.acf997c1.js",
    "revision": "5f449ecd643f8afec6b2b7ce0618f75d"
  },
  {
    "url": "assets/js/26.ce90d619.js",
    "revision": "c2aa84e583a801da1cbf0eaf4be359c2"
  },
  {
    "url": "assets/js/27.5b6150d8.js",
    "revision": "adcffaa9592cda410511d5df5b5085ff"
  },
  {
    "url": "assets/js/28.61806d7d.js",
    "revision": "66f2a16e37e9fd78006e35d1bcf1412b"
  },
  {
    "url": "assets/js/29.89022e1a.js",
    "revision": "e309b6a302b0d0e2221b870fc299b4d9"
  },
  {
    "url": "assets/js/3.0ca2f1f7.js",
    "revision": "0714ddfc831cd4dbd8e575827c65ea01"
  },
  {
    "url": "assets/js/30.43a7bf6b.js",
    "revision": "9895353259e59f30324360f2f12efaa4"
  },
  {
    "url": "assets/js/31.f44842fb.js",
    "revision": "d878ab8d032caec09b4a4a90a5b55d1c"
  },
  {
    "url": "assets/js/32.d1155ad2.js",
    "revision": "90ba91a031743421f9437cdf32731a74"
  },
  {
    "url": "assets/js/33.77f3a62f.js",
    "revision": "3dde05874b20bd985725894a47fcb667"
  },
  {
    "url": "assets/js/34.2830aa51.js",
    "revision": "7f25fa65e461b61cbb80e3deaa8c814b"
  },
  {
    "url": "assets/js/35.d046ef9f.js",
    "revision": "74608049c4d09bab7e3106eb1ea67b21"
  },
  {
    "url": "assets/js/36.3b53b70f.js",
    "revision": "1733704751fcdc6b9182a749cf7f51da"
  },
  {
    "url": "assets/js/37.6d0d8fd5.js",
    "revision": "90422ee11b614ca09530e0c6d50696f5"
  },
  {
    "url": "assets/js/38.bd8f7dc0.js",
    "revision": "2de78e2c9f8dcd437e3504810aaeb9b7"
  },
  {
    "url": "assets/js/4.29076b3a.js",
    "revision": "5bb9f42d5a4afc5416110c45f158644f"
  },
  {
    "url": "assets/js/5.206d1b5f.js",
    "revision": "5f14a845827421b49c757ce8dddfef1a"
  },
  {
    "url": "assets/js/6.d3c6c451.js",
    "revision": "43d9a5c6496901ad2d02158703d927de"
  },
  {
    "url": "assets/js/7.13f95826.js",
    "revision": "7a079f9ee722db856c72b449feceef01"
  },
  {
    "url": "assets/js/8.4c3a315d.js",
    "revision": "b9d965850c73e9f187045b702b7cfd66"
  },
  {
    "url": "assets/js/9.e238691a.js",
    "revision": "680f9c00515747b5e310179fed002f31"
  },
  {
    "url": "assets/js/app.493a9995.js",
    "revision": "cfbc9a121c98125071badfae404fefb0"
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
    "revision": "c365bf6f2e820f9c2f94e4e7bced0825"
  },
  {
    "url": "my-life/index.html",
    "revision": "04e8e9b582cc37b91725fd7ffabeb843"
  },
  {
    "url": "my-life/life1.html",
    "revision": "7f803ef11f5a1d0504bb2dd9c2aed567"
  },
  {
    "url": "my-life/life2.html",
    "revision": "70ec70f5270c576a9987d4ba6f649708"
  },
  {
    "url": "my-life/life3.html",
    "revision": "61b29df64b381199f947010b1a2adc41"
  },
  {
    "url": "my-life/life4.html",
    "revision": "86e7de1189544f51a55cac5eb4262d7a"
  },
  {
    "url": "my-life/life5.html",
    "revision": "f920409998afc2798b76cf3bdc65b763"
  },
  {
    "url": "my-life/life6.html",
    "revision": "7340cf29077fc0cebdb13b214bfa735b"
  },
  {
    "url": "my-life/life7.html",
    "revision": "f50e197eac6b70070c501a7f92a77dca"
  },
  {
    "url": "my-life/life8.html",
    "revision": "1afd73527016ee084c2863d35cfeacfa"
  },
  {
    "url": "technical/css/index.html",
    "revision": "ceedf930de733addfe568248c70524f2"
  },
  {
    "url": "technical/css/qa.html",
    "revision": "bd6ddb8e255249d0d69a2da55f414bad"
  },
  {
    "url": "technical/index.html",
    "revision": "652f626f4a439e0a4ddd0b24f200a0ad"
  },
  {
    "url": "technical/js/index.html",
    "revision": "de5c349f8412902e091c3255cce3579c"
  },
  {
    "url": "technical/js/qa.html",
    "revision": "b1abadbd5cd80e1beb6b3bbb71e1c965"
  },
  {
    "url": "technical/js/qa1.html",
    "revision": "95e074f5fec4c36d08faafaa8637f451"
  },
  {
    "url": "technical/lwm/index.html",
    "revision": "dbf2722ee99da827601bcdecf09be9cc"
  },
  {
    "url": "technical/lwm/qa.html",
    "revision": "7ea54c5d119dfdc9cae3628f24b72865"
  },
  {
    "url": "technical/lwm/qa1.html",
    "revision": "2f88201d8e02b2e9edb6ebd609b7c3a1"
  },
  {
    "url": "technical/markdown/index.html",
    "revision": "7606f8b061ad06a9e47a78c18dc6800d"
  },
  {
    "url": "technical/markdown/qa.html",
    "revision": "b76f607df19cf1dbcbdbf4d73376fa14"
  },
  {
    "url": "technical/node/index.html",
    "revision": "060ba3ea3ae2921c25ee1903d4cb75a4"
  },
  {
    "url": "technical/node/qa.html",
    "revision": "01e4739074658b3de46f4ac96d3df56a"
  },
  {
    "url": "timeAxis.html",
    "revision": "114ae039f445378b47edff5f8a6bda02"
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
