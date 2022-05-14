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
    "revision": "db6af43479943792efb63f9069a96982"
  },
  {
    "url": "about.html",
    "revision": "40c46a26ba23b325b2f057360b9a315e"
  },
  {
    "url": "assets/css/0.styles.52b9ee71.css",
    "revision": "ece0753e2c90a4ad6f32af9cc2e85df1"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.aab02a06.js",
    "revision": "b11f1b46193159fb33e2d8624475b8f4"
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
    "url": "assets/js/14.a2ace31b.js",
    "revision": "48575e2c7388b83c4809057f8f765863"
  },
  {
    "url": "assets/js/15.7a6dbbf3.js",
    "revision": "06dc60ad528c25a208500692a595218a"
  },
  {
    "url": "assets/js/16.4ec68cef.js",
    "revision": "aa0e3f1e9ca2bc95019a613410e08e1e"
  },
  {
    "url": "assets/js/17.86e15dbe.js",
    "revision": "cb1d06b76e54efad93ecd401adac03f5"
  },
  {
    "url": "assets/js/18.3fbd4c79.js",
    "revision": "e858540517520239c4427cbb89de9f54"
  },
  {
    "url": "assets/js/19.da64b11c.js",
    "revision": "2923c180f4f6265fa3357932e12eee39"
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
    "url": "assets/js/21.0217b6f3.js",
    "revision": "cb7f710c1b6cf50dcb089e129c78de11"
  },
  {
    "url": "assets/js/22.5d487a2f.js",
    "revision": "015acf3d0739c7271f574037f119b9fa"
  },
  {
    "url": "assets/js/23.668a2931.js",
    "revision": "c8e43f201c73f00b34a47ef6468ff9df"
  },
  {
    "url": "assets/js/24.050cd8ca.js",
    "revision": "13ca8182250c00f41b63a1745a648544"
  },
  {
    "url": "assets/js/25.b7a123d2.js",
    "revision": "f7f054a6ded469bce9e22db70336496a"
  },
  {
    "url": "assets/js/26.8ef69343.js",
    "revision": "b8b44eb5b1347b23f64e48447a19b513"
  },
  {
    "url": "assets/js/27.092a373b.js",
    "revision": "7529da3f0415639cec6a665396eaf024"
  },
  {
    "url": "assets/js/28.59be9ae1.js",
    "revision": "255eee8df85f06a2f310de82d217e000"
  },
  {
    "url": "assets/js/29.dbb8b3c2.js",
    "revision": "11a0aa719e1eddf1029884377cf07947"
  },
  {
    "url": "assets/js/3.e04ee5db.js",
    "revision": "5cf97dc05bba97bfa8bcd81e7c748bf0"
  },
  {
    "url": "assets/js/30.2cf598e8.js",
    "revision": "6e1d375be5cdfea88376b934980f5c0f"
  },
  {
    "url": "assets/js/31.f074b974.js",
    "revision": "8f8a38307adda0b11c65f0d47d48c90b"
  },
  {
    "url": "assets/js/32.389add0a.js",
    "revision": "9ae6b530b725c4b6c9713b11a76c1081"
  },
  {
    "url": "assets/js/33.a8c89949.js",
    "revision": "7c1d93fe44f4b655424a8722895ec473"
  },
  {
    "url": "assets/js/34.bef707c9.js",
    "revision": "e383e7ea510a37a2c17901c9dbee47dc"
  },
  {
    "url": "assets/js/35.f6275af5.js",
    "revision": "d6e8e1e93c80c70b10281618bac770c5"
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
    "url": "assets/js/6.750313ad.js",
    "revision": "88339bee5e8ae7717fa8f8f187a73f17"
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
    "url": "assets/js/app.203d7de5.js",
    "revision": "7f41690d8f512beb8283027dbfaf3525"
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
    "revision": "d5c317f8d29bd5c12fb5af337bdea2c8"
  },
  {
    "url": "my-life/index.html",
    "revision": "6d875fdededfde80325d4931e69c0013"
  },
  {
    "url": "my-life/life1.html",
    "revision": "a23eca580d6a0f722bc30c5d9e975334"
  },
  {
    "url": "my-life/life2.html",
    "revision": "e4a10ebc10142411447284d750e8c462"
  },
  {
    "url": "my-life/life3.html",
    "revision": "ead5159e35c3a6ae07c4a4c34944c58d"
  },
  {
    "url": "my-life/life4.html",
    "revision": "94d94296386c97e6b5a4b64a5f8b80cc"
  },
  {
    "url": "my-life/life5.html",
    "revision": "7e67373201dddb84986fae680399b905"
  },
  {
    "url": "my-life/life6.html",
    "revision": "c5f73138bd9ad6fd79fcb5a11b930a64"
  },
  {
    "url": "my-life/life7.html",
    "revision": "2cc78ef9152100bf00ce67a2f5e70ead"
  },
  {
    "url": "technical/css/index.html",
    "revision": "5d82589ead860053a8ce429cdfcbaff5"
  },
  {
    "url": "technical/css/qa.html",
    "revision": "7bd9fad769e91ba0b57a2cd0dcc5d177"
  },
  {
    "url": "technical/index.html",
    "revision": "f2d601b505a4b75f702a36916ac7f876"
  },
  {
    "url": "technical/js/index.html",
    "revision": "895321e27cb2d371778c4d3d54619cbc"
  },
  {
    "url": "technical/js/qa.html",
    "revision": "7feaedf7c2999cfb475a3bbace54dc7e"
  },
  {
    "url": "technical/js/qa1.html",
    "revision": "7abc4c561b76283efc578dd21b761cec"
  },
  {
    "url": "technical/lwm/index.html",
    "revision": "430bc9faee1cbbaee7ba8f562378587b"
  },
  {
    "url": "technical/lwm/qa.html",
    "revision": "0cc5112fda291ac6c975539638c1017d"
  },
  {
    "url": "technical/lwm/qa1.html",
    "revision": "d0bb7693c743ef885711978687b80ea3"
  },
  {
    "url": "technical/markdown/index.html",
    "revision": "06af75ed9a2ba8727f90c178a90121a2"
  },
  {
    "url": "technical/markdown/qa.html",
    "revision": "06f4a66fd91207376e69e0dfc8647703"
  },
  {
    "url": "technical/node/index.html",
    "revision": "ff67757daafeca4023b4f9368b061467"
  },
  {
    "url": "technical/node/qa.html",
    "revision": "25d618a9593e98d96cf5cc6098b59c5b"
  },
  {
    "url": "timeAxis.html",
    "revision": "87a6951d9c8ea0690c9896d77004ac45"
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
