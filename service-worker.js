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
    "revision": "8ad3a52e14123cd1449b54c209e79021"
  },
  {
    "url": "about.html",
    "revision": "3bf9d0c34c40b6db4a1c82963742c8bf"
  },
  {
    "url": "assets/css/0.styles.b7fd28c5.css",
    "revision": "50097e94d52434c87de2844e96f440bf"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.de59e0a6.js",
    "revision": "1f1fc9ab48429628b3cd94b6c9a8c486"
  },
  {
    "url": "assets/js/11.ca38b1dd.js",
    "revision": "25fa24b734ce91a6faadc1c7f3f2e927"
  },
  {
    "url": "assets/js/12.a60c3602.js",
    "revision": "98901aa8d5884a856da355f0d684bfff"
  },
  {
    "url": "assets/js/13.c9b3a814.js",
    "revision": "c1b2a77de6bae2a15d332c0d99bbd99b"
  },
  {
    "url": "assets/js/14.b049f9a8.js",
    "revision": "48575e2c7388b83c4809057f8f765863"
  },
  {
    "url": "assets/js/15.7a6dbbf3.js",
    "revision": "06dc60ad528c25a208500692a595218a"
  },
  {
    "url": "assets/js/16.b04aa1c4.js",
    "revision": "ba8ca4016b1afb0d079baae07fb1d27c"
  },
  {
    "url": "assets/js/17.b03cf235.js",
    "revision": "21275e1de982110c1c0991870699fb80"
  },
  {
    "url": "assets/js/18.222b70ab.js",
    "revision": "3c7e81724e87621390b9f506a66ed5f8"
  },
  {
    "url": "assets/js/19.3c25bde9.js",
    "revision": "63925e97f789f7363d752184948e88d7"
  },
  {
    "url": "assets/js/2.dfcd6d99.js",
    "revision": "df3ed6854d14cdcce3690cec1506869f"
  },
  {
    "url": "assets/js/20.2abdb19c.js",
    "revision": "6403f11384f592127ba1aa4743aad00c"
  },
  {
    "url": "assets/js/21.07a23cf1.js",
    "revision": "0220d54b6413785de73ad7131de4cd69"
  },
  {
    "url": "assets/js/22.059f467d.js",
    "revision": "77e73cf7a1e050bcab108c45d3b7d2eb"
  },
  {
    "url": "assets/js/23.8be09dad.js",
    "revision": "71380c23beccb16c71ccdc7d1701f0ba"
  },
  {
    "url": "assets/js/24.12608d6e.js",
    "revision": "6a68f562d6026b4013b3c38a89af1d31"
  },
  {
    "url": "assets/js/25.50a8c2c7.js",
    "revision": "78bf57f68ffc69426d27bfb717da147f"
  },
  {
    "url": "assets/js/26.247469ac.js",
    "revision": "cdec65965266f27532294aa6f383b882"
  },
  {
    "url": "assets/js/27.c6943dad.js",
    "revision": "5c50ad3e39f8b02f5e2558104d6f9e76"
  },
  {
    "url": "assets/js/28.1fd9fd31.js",
    "revision": "749b78f3fe01e2502f0650f04cf4c72a"
  },
  {
    "url": "assets/js/29.b9b5f9f8.js",
    "revision": "f27f6e788c695a0214b147b1f7d1fb0c"
  },
  {
    "url": "assets/js/3.e04ee5db.js",
    "revision": "5cf97dc05bba97bfa8bcd81e7c748bf0"
  },
  {
    "url": "assets/js/30.9a156ad3.js",
    "revision": "450474af53a6f5f881b9a422bf69f793"
  },
  {
    "url": "assets/js/31.48481e26.js",
    "revision": "46e8500b636943f445c5f7ae78c65710"
  },
  {
    "url": "assets/js/32.3c1155a9.js",
    "revision": "f5baf2a10117e3baf2e911c2ea4bebb6"
  },
  {
    "url": "assets/js/33.8c7de49b.js",
    "revision": "27ce89b4b3a305c17ca060de449c04fc"
  },
  {
    "url": "assets/js/34.68ccec44.js",
    "revision": "65adc27909ee73146df8a88ad976464b"
  },
  {
    "url": "assets/js/35.8508acab.js",
    "revision": "b2e34ec54925aaa2914e2c796a0aee4f"
  },
  {
    "url": "assets/js/36.1c5255c1.js",
    "revision": "d4f66e8cabc0a343c64c3cbaf56daabe"
  },
  {
    "url": "assets/js/4.62966112.js",
    "revision": "5c93fce2f63f1f3544bd1652b582bf6a"
  },
  {
    "url": "assets/js/5.61836e37.js",
    "revision": "b7ece1efd1e0fbd0acf13973b2b82280"
  },
  {
    "url": "assets/js/6.bdcc210f.js",
    "revision": "b4f1d19736bb37f5f987a432b44b4b74"
  },
  {
    "url": "assets/js/7.b6c9764e.js",
    "revision": "4ff0cf4826c355a41773140be63404de"
  },
  {
    "url": "assets/js/8.fe5591e2.js",
    "revision": "fcb10431a808218e6526bc4c8abf8ef7"
  },
  {
    "url": "assets/js/9.8fb77b54.js",
    "revision": "3f0773c3fa1313ff25a93b7e2367ecb0"
  },
  {
    "url": "assets/js/app.7ff309ca.js",
    "revision": "536d1e546e544b426eeb632ff75fad6e"
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
    "revision": "cdad69de5b6487d1002995278476c607"
  },
  {
    "url": "my-life/index.html",
    "revision": "4d245fe186de22bdd0966cbf3da62165"
  },
  {
    "url": "my-life/life1.html",
    "revision": "fed3579c467ae442b9aff48c4035e708"
  },
  {
    "url": "my-life/life2.html",
    "revision": "4eb3a93942fd48723bab421323732469"
  },
  {
    "url": "my-life/life3.html",
    "revision": "30f8dd2d03dc83aaed659c90ebe0d484"
  },
  {
    "url": "my-life/life4.html",
    "revision": "d21c063cc171a123b8842e0a299f7540"
  },
  {
    "url": "my-life/life5.html",
    "revision": "9acbb64b31e52a270c635df5e29fd1d2"
  },
  {
    "url": "my-life/life6.html",
    "revision": "94c446424a926563351186ab503f314e"
  },
  {
    "url": "my-life/life7.html",
    "revision": "88755bae2891b385035cc489dfecf23e"
  },
  {
    "url": "my-life/life8.html",
    "revision": "71854ba63aa083df6fc00ca1b0377f80"
  },
  {
    "url": "technical/css/index.html",
    "revision": "243e532cc2d870138116454938f000b9"
  },
  {
    "url": "technical/css/qa.html",
    "revision": "5aca42373b5d4a86720b96ab27cc9b76"
  },
  {
    "url": "technical/index.html",
    "revision": "6cc7c40e2d5680e34edab9afccc25943"
  },
  {
    "url": "technical/js/index.html",
    "revision": "16c2933517f11e17cb975f571f66cc87"
  },
  {
    "url": "technical/js/qa.html",
    "revision": "11231b2a789678197b4bf9aea3d46f89"
  },
  {
    "url": "technical/js/qa1.html",
    "revision": "e9fac717c645c79b6a45f12f4a8821bc"
  },
  {
    "url": "technical/lwm/index.html",
    "revision": "c842ed828051ce54af9af07bd25982f8"
  },
  {
    "url": "technical/lwm/qa.html",
    "revision": "7383b49dc351f5424edfbf4ceb2b0f77"
  },
  {
    "url": "technical/lwm/qa1.html",
    "revision": "cc302027e8c364b53ccf05b535c0c7b6"
  },
  {
    "url": "technical/markdown/index.html",
    "revision": "d30f744a5eb7e77a852d4e9b1b4b14e8"
  },
  {
    "url": "technical/markdown/qa.html",
    "revision": "f959c1e85635e320cb81eafbdc1c214c"
  },
  {
    "url": "technical/node/index.html",
    "revision": "564e49489d4e33c706558579cbcc818c"
  },
  {
    "url": "technical/node/qa.html",
    "revision": "c99200e397cde8bd624df14f1c9e8047"
  },
  {
    "url": "timeAxis.html",
    "revision": "521cdfec64f8ace485220c01497d86de"
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
