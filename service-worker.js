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
    "revision": "5fa218c6692fdb9f940ac796100e7438"
  },
  {
    "url": "about.html",
    "revision": "2e829287c6be93f6f94ce88b96ef95ae"
  },
  {
    "url": "assets/css/0.styles.e0738c21.css",
    "revision": "afeab85832fd01ae1a80bac4189743f2"
  },
  {
    "url": "assets/img/nomal.4a16132b.png",
    "revision": "4a16132be0d1f6dddb28ab6cf9ab9094"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.56c5a395.js",
    "revision": "413161dc8e1647ea30587dd913e7f355"
  },
  {
    "url": "assets/js/10.85b7737e.js",
    "revision": "54ccddd804286553636efa5a1ab67be2"
  },
  {
    "url": "assets/js/11.798dbd7f.js",
    "revision": "cd3484756ebc6be8b5b4aff8761178db"
  },
  {
    "url": "assets/js/12.59d4a72f.js",
    "revision": "f044848417e5abc0eecf7d5d04deff8c"
  },
  {
    "url": "assets/js/13.c3f34202.js",
    "revision": "151af83ce8bf99a00e5c93d34bb0d99c"
  },
  {
    "url": "assets/js/14.5708ded7.js",
    "revision": "71d252acca544a06d16921b7a9d04ec6"
  },
  {
    "url": "assets/js/15.799f289d.js",
    "revision": "72a5cbd87704a97ccf72d858ba8a852a"
  },
  {
    "url": "assets/js/16.9e9891b0.js",
    "revision": "a23d6ffa62538c65466f7b422d3553f6"
  },
  {
    "url": "assets/js/17.ac9e537f.js",
    "revision": "e98abd12aafe1fadaffcaa5839b3a3d3"
  },
  {
    "url": "assets/js/18.0832f8f5.js",
    "revision": "58d65f108892403ff6dae5a28a19c6bd"
  },
  {
    "url": "assets/js/19.969c0d0c.js",
    "revision": "74b6bfd653acffa4f7d0aaebc1a1e172"
  },
  {
    "url": "assets/js/20.cad58f32.js",
    "revision": "630f3d7565539c925e0c5b9fe39c4af1"
  },
  {
    "url": "assets/js/21.7e2c9747.js",
    "revision": "2c2778901541395ff41471857f70ed76"
  },
  {
    "url": "assets/js/22.e7b738a5.js",
    "revision": "fc2e207ce051e15b2785e5c9f1da9c22"
  },
  {
    "url": "assets/js/23.59656441.js",
    "revision": "0defe84a71c2134c0871956a41f907b7"
  },
  {
    "url": "assets/js/24.77419f50.js",
    "revision": "43cda24e8a869e12250b8707f4197bb8"
  },
  {
    "url": "assets/js/25.08c65ac2.js",
    "revision": "6da687d0dfcb7de015e7dbed7a21bae1"
  },
  {
    "url": "assets/js/26.7cb2ca7e.js",
    "revision": "40f2e911412659412a268c7cfb3a54cc"
  },
  {
    "url": "assets/js/27.2d1195c9.js",
    "revision": "5222f89b7c3db1db3bc874b668509e01"
  },
  {
    "url": "assets/js/28.cefc37af.js",
    "revision": "51d99a68c73b8ad1eca994bed0ca0f68"
  },
  {
    "url": "assets/js/29.e16240d5.js",
    "revision": "e97938bc3dcb6a3758ac8c0d099f1382"
  },
  {
    "url": "assets/js/3.8fef3b30.js",
    "revision": "85c3769c1a102e3a0b5d836c74103f8d"
  },
  {
    "url": "assets/js/30.604b761b.js",
    "revision": "3982356406b9261cec33cf188bffc5d3"
  },
  {
    "url": "assets/js/31.dc61fecf.js",
    "revision": "66ae1a32accd089de8628d4cf018bdf3"
  },
  {
    "url": "assets/js/32.f534f66f.js",
    "revision": "ae432bb5002808fc1d0486b674e801dd"
  },
  {
    "url": "assets/js/33.d824ad15.js",
    "revision": "50047eca14fe54e88b4fda15f5aa957d"
  },
  {
    "url": "assets/js/34.6c10a876.js",
    "revision": "3ad433e138a49a05faeee5526793620d"
  },
  {
    "url": "assets/js/35.00a6a1c5.js",
    "revision": "c84f52d4c8a9f39c96abe8951223e55e"
  },
  {
    "url": "assets/js/36.f413e824.js",
    "revision": "b94266b79a782a390712a1c5d95a9889"
  },
  {
    "url": "assets/js/37.d9013890.js",
    "revision": "45a777cdd06951e2ce7ddeeb68454d88"
  },
  {
    "url": "assets/js/38.2fbce058.js",
    "revision": "4ff9ec29bc65c057638ccfec6c4d659b"
  },
  {
    "url": "assets/js/39.b75dc134.js",
    "revision": "3c58e86b272d89e54f99a7a5bdcf368a"
  },
  {
    "url": "assets/js/4.5d2dae59.js",
    "revision": "63e655cd69e2abd6b55cf461d61eddee"
  },
  {
    "url": "assets/js/40.bbcc8f8b.js",
    "revision": "47537c485fca34f8d4ce86e007fbe5fb"
  },
  {
    "url": "assets/js/41.82d9de16.js",
    "revision": "14594374f75f44a99761fd0c712a4d86"
  },
  {
    "url": "assets/js/42.b9f237a9.js",
    "revision": "ac437f92d1a5745f246d94e54ad72068"
  },
  {
    "url": "assets/js/43.4830dc67.js",
    "revision": "33e85375240f0aee5e2ca9c21b8625f5"
  },
  {
    "url": "assets/js/44.055d3a60.js",
    "revision": "78eb12b9f216b662121ff31a446690f3"
  },
  {
    "url": "assets/js/45.566a67c0.js",
    "revision": "b6e4aa13bd88a8970f3cc2a095ebc8aa"
  },
  {
    "url": "assets/js/46.40446ae9.js",
    "revision": "b6afd80a31adbaa87bb4c79b32b9e4fe"
  },
  {
    "url": "assets/js/47.f608a1f0.js",
    "revision": "85f0167d8d8d55c0c1662303a97cdbae"
  },
  {
    "url": "assets/js/48.b1ef2328.js",
    "revision": "8d9bd4ee7ca910318d43ebe1db531a3c"
  },
  {
    "url": "assets/js/49.47c98318.js",
    "revision": "c027d09d4cff731e668f6324c5d7ff8a"
  },
  {
    "url": "assets/js/5.ddc41d9b.js",
    "revision": "f2bc292dcb584f45e2559e1a82bb957f"
  },
  {
    "url": "assets/js/50.76a1d1d8.js",
    "revision": "196e95f58fa10cebc37af6732b0832d7"
  },
  {
    "url": "assets/js/51.3d50d548.js",
    "revision": "9d18c7425c295d80ad87082879fc54bb"
  },
  {
    "url": "assets/js/52.e5cd4ffe.js",
    "revision": "b906fc6f43e842dd24fb12ad86e6e9a0"
  },
  {
    "url": "assets/js/53.8bdabd36.js",
    "revision": "ccd192ca3f3d52a22edf860a9d43718b"
  },
  {
    "url": "assets/js/54.50d6b97e.js",
    "revision": "5b5a6adfd8cc50502f9135594f438c6e"
  },
  {
    "url": "assets/js/55.39f258ea.js",
    "revision": "2c806e5e57db3e431c254f359f34f0d6"
  },
  {
    "url": "assets/js/56.88f0bd26.js",
    "revision": "0bae4273605051fbbf5ca912442f2554"
  },
  {
    "url": "assets/js/57.6a3c2500.js",
    "revision": "8fdaf6c989d43e515d257d77f288611a"
  },
  {
    "url": "assets/js/6.98971001.js",
    "revision": "7e15e88d011cf8147f107e6a41967d59"
  },
  {
    "url": "assets/js/7.77fdc882.js",
    "revision": "e7d49a60d7e1b2ae5cadd19a5181cdd5"
  },
  {
    "url": "assets/js/8.088bf5f0.js",
    "revision": "bd66cae5359650bd5104c9d6f727fa3b"
  },
  {
    "url": "assets/js/9.3ec60412.js",
    "revision": "b6497180a9e70058c290d38fdb15f24d"
  },
  {
    "url": "assets/js/app.5c42fbfe.js",
    "revision": "91271d4a9cfa872704844a73b5a56c09"
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
    "revision": "abcd7a4114b788d9ad6b220e8e99fab2"
  },
  {
    "url": "my-life/index.html",
    "revision": "67967f46a2961b0d6d8b692a4d04e6ed"
  },
  {
    "url": "my-life/life10.html",
    "revision": "43db56817a60b0f77d4f14e0605e1b44"
  },
  {
    "url": "my-life/life11.html",
    "revision": "a457a87c8eecd83d3d3abfc959d15e4b"
  },
  {
    "url": "my-life/life12.html",
    "revision": "9c378ae3bef99cbdab5285fe109dac11"
  },
  {
    "url": "my-life/life13.html",
    "revision": "f6879c597e2b8a947361ddabdc96d8bc"
  },
  {
    "url": "my-life/life14.html",
    "revision": "5766631b3d90a7cf355ca8ff6b929aed"
  },
  {
    "url": "my-life/life15.html",
    "revision": "2a70506273611187d25c8cd10a91cdd7"
  },
  {
    "url": "my-life/life2.html",
    "revision": "77e1c6aad0630eeee96e16d5dad67a4d"
  },
  {
    "url": "my-life/life3.html",
    "revision": "451bfd875591c56557bad4cfc50bbe0e"
  },
  {
    "url": "my-life/life4.html",
    "revision": "81473d52dd4b5428ae65d0ee8bf56797"
  },
  {
    "url": "my-life/life5.html",
    "revision": "bed55cc030395b24d15138dda97f8fd0"
  },
  {
    "url": "my-life/life6.html",
    "revision": "bf81ee4f242f4ca59c6867c443d52152"
  },
  {
    "url": "my-life/life7.html",
    "revision": "65a427a09b6ff31c27ee0b5451f39088"
  },
  {
    "url": "my-life/life8.html",
    "revision": "7b98649a6f41d94cdfc9d656416867c1"
  },
  {
    "url": "my-life/life9.html",
    "revision": "4b157c7c0cd932786c48a104df6329f4"
  },
  {
    "url": "technical/css/index.html",
    "revision": "e5222a4042007c9b6cbfc9df920cda01"
  },
  {
    "url": "technical/css/qa.html",
    "revision": "c23404c827804066a98632f6ed98f892"
  },
  {
    "url": "technical/css/qa1.html",
    "revision": "2b47b352c9243e5809c50d4ce29761f5"
  },
  {
    "url": "technical/css/qa2.html",
    "revision": "c8956c038257bb512dba786afd9d1a3d"
  },
  {
    "url": "technical/index.html",
    "revision": "d4a66e619915d879aa58c40667ace68b"
  },
  {
    "url": "technical/js/index.html",
    "revision": "0a299d1fa95869645ecba21455a32bc8"
  },
  {
    "url": "technical/js/qa.html",
    "revision": "dcef38755763daddd46c0fc6d07f86eb"
  },
  {
    "url": "technical/js/qa1.html",
    "revision": "ea3790efec6df3b3bfe7da184c01242c"
  },
  {
    "url": "technical/js/qa2.html",
    "revision": "e2a5aa57fd5232c277dc4b9776d56282"
  },
  {
    "url": "technical/js/qa3.html",
    "revision": "6f48e03b7399e9f298ee59f105b066ab"
  },
  {
    "url": "technical/lwm/index.html",
    "revision": "fd6ff28c86297892f77192c2c06133f7"
  },
  {
    "url": "technical/lwm/qa.html",
    "revision": "3c1de05ac27aa20b9090869c476363de"
  },
  {
    "url": "technical/lwm/qa1.html",
    "revision": "0fa6811b1f3eafc1afd6b76a4a4ca7b3"
  },
  {
    "url": "technical/markdown/index.html",
    "revision": "b1ea98dd60c2b2030ecb3ce7b4fe6779"
  },
  {
    "url": "technical/markdown/qa.html",
    "revision": "b3831e340a71fc40f08f45878804f353"
  },
  {
    "url": "technical/node/index.html",
    "revision": "5873e118f3313d3021db316f7ff9538e"
  },
  {
    "url": "technical/node/qa.html",
    "revision": "765547a7e86bd6ad0105b5914588a0f3"
  },
  {
    "url": "technical/ts/index.html",
    "revision": "dd0396abe171e70c72cafba43654184c"
  },
  {
    "url": "technical/ts/qa.html",
    "revision": "ddbad579b1920b86cb82d8c162fcee47"
  },
  {
    "url": "technical/vue/qa.html",
    "revision": "50e0955dca927aa7a14c25fec77ed8a7"
  },
  {
    "url": "timeAxis.html",
    "revision": "fcee8bfd59503d3e1a30935cccef4f05"
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
