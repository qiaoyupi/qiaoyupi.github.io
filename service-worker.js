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
    "revision": "9045575315b2c468785b29120e4c6504"
  },
  {
    "url": "about.html",
    "revision": "babea46632d99a7d47a8f805a9d98101"
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
    "url": "assets/js/17.d28edd0c.js",
    "revision": "3db899edd54f5f2da280ec09b62df880"
  },
  {
    "url": "assets/js/18.aba2d671.js",
    "revision": "f959acc1c551a4491d2203e2749fa20d"
  },
  {
    "url": "assets/js/19.d76e11a9.js",
    "revision": "3a92ac558ac6a789b7e14c5bcc792714"
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
    "url": "assets/js/21.de62ef9c.js",
    "revision": "5684041609e9ee93ed87900bbda0a8c4"
  },
  {
    "url": "assets/js/22.c695b166.js",
    "revision": "8ea9d50e381652378f74971bc873c69e"
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
    "url": "assets/js/app.3bda2efd.js",
    "revision": "d124f927a347024fbe813c3e03c8a0d5"
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
    "revision": "535140e2c5aa189b5a3f0110aa98640a"
  },
  {
    "url": "my-life/index.html",
    "revision": "154be1183e062246dcd687c28e8ee1d5"
  },
  {
    "url": "my-life/life1.html",
    "revision": "637a7e8b1f4228fd7e516905aab6dcd2"
  },
  {
    "url": "my-life/life2.html",
    "revision": "9df416ab753d2ff953b1dd87f37e1ee7"
  },
  {
    "url": "my-life/life3.html",
    "revision": "91ceacbee0ed03eeeac0a35b575a8048"
  },
  {
    "url": "my-life/life4.html",
    "revision": "de5ed6657651d4d89079d5e311d7095c"
  },
  {
    "url": "my-life/life5.html",
    "revision": "787f901881afed877dcdc1068c99fac2"
  },
  {
    "url": "my-life/life6.html",
    "revision": "677d0e6aa59de3dca4716a3370145298"
  },
  {
    "url": "my-life/life7.html",
    "revision": "409997dfc95aae5baf6831a17336d89b"
  },
  {
    "url": "technical/css/index.html",
    "revision": "1932fae71d3c161e7265a55c47ab68f2"
  },
  {
    "url": "technical/css/qa.html",
    "revision": "5b3af0f5c66e237b49cd330339e35bfb"
  },
  {
    "url": "technical/index.html",
    "revision": "87f3ffa655d5f1f7a5cd2a5138392f03"
  },
  {
    "url": "technical/js/index.html",
    "revision": "e43bf22db215f9236b927c989c49dfc4"
  },
  {
    "url": "technical/js/qa.html",
    "revision": "08397ccc49b32323a1e54a47c6f5d93d"
  },
  {
    "url": "technical/js/qa1.html",
    "revision": "48e8ae04b380996a7fbf92b67efaab93"
  },
  {
    "url": "technical/lwm/index.html",
    "revision": "08715712cdd6447c15986c0067447d99"
  },
  {
    "url": "technical/lwm/qa.html",
    "revision": "594ba40ef0adc7afd9a02c6a9074fa4c"
  },
  {
    "url": "technical/lwm/qa1.html",
    "revision": "8a90680301f8b0c818f2a12acef15519"
  },
  {
    "url": "technical/markdown/index.html",
    "revision": "c107969bc9f53ad082f6e767d71969fa"
  },
  {
    "url": "technical/markdown/qa.html",
    "revision": "2b326af265a783d123e56784d58dea7c"
  },
  {
    "url": "technical/node/index.html",
    "revision": "1e8605b91b12e41afd86884172ba893c"
  },
  {
    "url": "technical/node/qa.html",
    "revision": "9ad234b92c4df7965245c320a637adbd"
  },
  {
    "url": "timeAxis.html",
    "revision": "c00b756a63df9a18e2e4edf20b5bbbed"
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
