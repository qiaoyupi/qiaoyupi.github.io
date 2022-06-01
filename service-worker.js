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
    "revision": "629167566f96f9b32e8046376e9bcf82"
  },
  {
    "url": "about.html",
    "revision": "dc99246bb14db9119bd2df7f9d82869a"
  },
  {
    "url": "assets/css/0.styles.b9458207.css",
    "revision": "f30df5ab0ed8416c05502e6f3fca4075"
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
    "url": "assets/js/20.3ee7f8d6.js",
    "revision": "4a523670ad207f8ca9449eae2d2e105c"
  },
  {
    "url": "assets/js/21.26d5c776.js",
    "revision": "7b567473a2a82a7e850962df62d6a024"
  },
  {
    "url": "assets/js/22.7217b0cf.js",
    "revision": "96df81f561aed8984ebd7e62f2dda470"
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
    "url": "assets/js/34.eb1d1387.js",
    "revision": "a5a636e43f903cc2e1632044fd3cbccb"
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
    "url": "assets/js/4.375f122e.js",
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
    "url": "assets/js/app.9190b41d.js",
    "revision": "8662463b17d852c3ec55958353fcde22"
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
    "revision": "beac190bcecd6873a7071fadcc36b739"
  },
  {
    "url": "my-life/index.html",
    "revision": "1815667fe885592d0abae12a5b7b2207"
  },
  {
    "url": "my-life/life1.html",
    "revision": "0b5c7ad8105ee762b2795a5c1bd20927"
  },
  {
    "url": "my-life/life2.html",
    "revision": "066f79dd5aa1c994d5f151c9fe0c08db"
  },
  {
    "url": "my-life/life3.html",
    "revision": "31d3be6204d959a552c35b94354791f6"
  },
  {
    "url": "my-life/life4.html",
    "revision": "da2d22a0f9fe2b5204e4f02102ca3e0c"
  },
  {
    "url": "my-life/life5.html",
    "revision": "ef19b819baea3255071bc0477bcceb81"
  },
  {
    "url": "my-life/life6.html",
    "revision": "ff2f4a0c8eba58817aa7a6b6ea0bd473"
  },
  {
    "url": "my-life/life7.html",
    "revision": "af2c12a7df91c88f2ac51a84185b77d1"
  },
  {
    "url": "my-life/life8.html",
    "revision": "a5293e7089d278218acbcf1997dc422a"
  },
  {
    "url": "technical/css/index.html",
    "revision": "f6ebd9778d5bf143134bff206e1268e5"
  },
  {
    "url": "technical/css/qa.html",
    "revision": "2399844cf76bbf632e1a1d78f47df570"
  },
  {
    "url": "technical/index.html",
    "revision": "bc12f34a1dd282062ed0a0637d224af6"
  },
  {
    "url": "technical/js/index.html",
    "revision": "9177e279939c18e4783af709b6df5818"
  },
  {
    "url": "technical/js/qa.html",
    "revision": "55dfb5d75f7bc5a178f7f078d838f6ec"
  },
  {
    "url": "technical/js/qa1.html",
    "revision": "4319e1ce029a85bc6a28d147adf80d20"
  },
  {
    "url": "technical/lwm/index.html",
    "revision": "353c1d7db7971de38b295233ba55f27a"
  },
  {
    "url": "technical/lwm/qa.html",
    "revision": "8cde829c37343138d670dab8471a4413"
  },
  {
    "url": "technical/lwm/qa1.html",
    "revision": "8b3b8cab37d4e695e96554384fb716ae"
  },
  {
    "url": "technical/markdown/index.html",
    "revision": "4967bdbd2412bb8c0515aeaa29979080"
  },
  {
    "url": "technical/markdown/qa.html",
    "revision": "80468ea75952253b921d66583314c6d4"
  },
  {
    "url": "technical/node/index.html",
    "revision": "51407fe77786f8486901d04c3d0e51f7"
  },
  {
    "url": "technical/node/qa.html",
    "revision": "e07562a642c01ba16104252756b34e52"
  },
  {
    "url": "timeAxis.html",
    "revision": "747c3c92ecc191704fc4d16abf1d4b0a"
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
