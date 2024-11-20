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
    "revision": "65d217c41076cb2b1b9e943d4b1a3a8f"
  },
  {
    "url": "about.html",
    "revision": "9e3f25cf2a2a84e892b9383aad4110a7"
  },
  {
    "url": "assets/css/0.styles.2b3db6dc.css",
    "revision": "6b7844d57e0696ca8f097b1832ea9d45"
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
    "url": "assets/js/1.2623e9f4.js",
    "revision": "1b2b83d56ef207f469d64b3bcd705c5f"
  },
  {
    "url": "assets/js/10.85b7737e.js",
    "revision": "54ccddd804286553636efa5a1ab67be2"
  },
  {
    "url": "assets/js/11.e5b0a2e8.js",
    "revision": "3d24426e9de6af550c06fec979ce421f"
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
    "url": "assets/js/14.ae73b6d2.js",
    "revision": "54a23a0106722b3ba3d6a255b0ffb45b"
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
    "url": "assets/js/28.d4de6580.js",
    "revision": "de33c7613419f74e82d197698dc1d385"
  },
  {
    "url": "assets/js/29.fe06a87d.js",
    "revision": "60bcaf73ed39ef140c5e462481e2dd9d"
  },
  {
    "url": "assets/js/3.8fef3b30.js",
    "revision": "85c3769c1a102e3a0b5d836c74103f8d"
  },
  {
    "url": "assets/js/30.bfd855db.js",
    "revision": "56eedc8bc5e1fd0c817fab67da112652"
  },
  {
    "url": "assets/js/31.3ce7020f.js",
    "revision": "e320fb85379b23799a0971af5b8838c6"
  },
  {
    "url": "assets/js/32.32192071.js",
    "revision": "608431dfad8cd3ca286bb22f11b8ce9b"
  },
  {
    "url": "assets/js/33.f843b0bd.js",
    "revision": "ccf4589af3be9432dbe18f3128054fbb"
  },
  {
    "url": "assets/js/34.b03aa358.js",
    "revision": "703dac2242d3757378d69643f4df4611"
  },
  {
    "url": "assets/js/35.6f507b37.js",
    "revision": "2682e620aadae539162f9a0155d91420"
  },
  {
    "url": "assets/js/36.9905d535.js",
    "revision": "28a2695aa823e574196a166665af6f18"
  },
  {
    "url": "assets/js/37.56f50d8f.js",
    "revision": "51a65a7ce6e772a63ac2044bf643229e"
  },
  {
    "url": "assets/js/38.a2b52f6c.js",
    "revision": "62e5fa4faff87a0cc16148c0672ca36e"
  },
  {
    "url": "assets/js/39.fa9162b8.js",
    "revision": "e8b425f5d46dd6314f4f10cebbd38dbe"
  },
  {
    "url": "assets/js/4.5d2dae59.js",
    "revision": "63e655cd69e2abd6b55cf461d61eddee"
  },
  {
    "url": "assets/js/40.02371d55.js",
    "revision": "f8938dd0639b914a313a2db649ed76c7"
  },
  {
    "url": "assets/js/41.e28cb1d0.js",
    "revision": "50c901c0f0d2a0f26772237bc9b82a92"
  },
  {
    "url": "assets/js/42.55599659.js",
    "revision": "d64fcb18d2f972680d94227c9b6835cb"
  },
  {
    "url": "assets/js/43.b61724c8.js",
    "revision": "cc1abfd2b264d3bd07b86e8f84c29529"
  },
  {
    "url": "assets/js/44.e3bbe285.js",
    "revision": "d18ad85bccf95111c77ef859af937d00"
  },
  {
    "url": "assets/js/45.d8075934.js",
    "revision": "4f6d64195705f70f52418652ce18b572"
  },
  {
    "url": "assets/js/46.98a3b8b1.js",
    "revision": "1bbdb567bb50093f832f216ad75e0cfb"
  },
  {
    "url": "assets/js/47.1d4d1c3d.js",
    "revision": "94d458cec937b13a8cffd77fec8a496f"
  },
  {
    "url": "assets/js/48.2aad3dae.js",
    "revision": "bdaceef9c63f29063acdb14d69f98208"
  },
  {
    "url": "assets/js/49.4f6ee893.js",
    "revision": "58f935163703ec0c8a31b8856aad8ee7"
  },
  {
    "url": "assets/js/5.3bc57a83.js",
    "revision": "f152d08fee54d9a8bacea9115a8afc43"
  },
  {
    "url": "assets/js/50.ca783209.js",
    "revision": "571da9ab2f9adf7cb2cc95790a5d672a"
  },
  {
    "url": "assets/js/51.b41824b1.js",
    "revision": "627451516564b7fd4b6eac4649cebf67"
  },
  {
    "url": "assets/js/52.fa7cdab4.js",
    "revision": "24113155120ce3fe7911475457fd06fa"
  },
  {
    "url": "assets/js/53.5b5a3565.js",
    "revision": "05202e53f5c5529222986aaca1ed29d0"
  },
  {
    "url": "assets/js/54.788d960c.js",
    "revision": "a279bdf518016849beda242f84fbae8b"
  },
  {
    "url": "assets/js/55.8faaa843.js",
    "revision": "230b9fd46b4f0f006595a547d740f6d9"
  },
  {
    "url": "assets/js/56.ba945d30.js",
    "revision": "7619a810211dde642efd06b9feec88f9"
  },
  {
    "url": "assets/js/57.5225077a.js",
    "revision": "08c931581b5dd3e9f4ece6d76bd4898e"
  },
  {
    "url": "assets/js/58.27533228.js",
    "revision": "d375dd982dc00161d5d64124c6e83a8d"
  },
  {
    "url": "assets/js/59.5e262f55.js",
    "revision": "787ddad174753ca1893e3098883bc857"
  },
  {
    "url": "assets/js/6.98971001.js",
    "revision": "7e15e88d011cf8147f107e6a41967d59"
  },
  {
    "url": "assets/js/60.f58533e8.js",
    "revision": "a74eb0b014633b0682de7c2368510570"
  },
  {
    "url": "assets/js/61.d9265e21.js",
    "revision": "202c9d7ae353b2fefb70bca35f60a3b2"
  },
  {
    "url": "assets/js/62.ca5e64eb.js",
    "revision": "af7bbb9326b96f39e20d617348068101"
  },
  {
    "url": "assets/js/63.994154a4.js",
    "revision": "f39a28c9fafbca965d7fd01e08bc0469"
  },
  {
    "url": "assets/js/7.88bc551f.js",
    "revision": "4cd420e601e383310fd8d8c315e99558"
  },
  {
    "url": "assets/js/8.af1dc031.js",
    "revision": "72a95b652c33dfeb15bf961ea693c5ca"
  },
  {
    "url": "assets/js/9.3ec60412.js",
    "revision": "b6497180a9e70058c290d38fdb15f24d"
  },
  {
    "url": "assets/js/app.337834bd.js",
    "revision": "63e20bb6986adff32f6c5fd1d3a44115"
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
    "revision": "b63bc75d216ddeafd564ac1fe7526e2b"
  },
  {
    "url": "my-life/index.html",
    "revision": "1620c32847c4cc925a82b4b5b3b4424f"
  },
  {
    "url": "my-life/life10.html",
    "revision": "acb66f7e25cd9604b7d2500ff0d68655"
  },
  {
    "url": "my-life/life11.html",
    "revision": "88aab7de2666676050258000f9c3b7b1"
  },
  {
    "url": "my-life/life12.html",
    "revision": "dda06ebf715436b1062610c17adc901f"
  },
  {
    "url": "my-life/life13.html",
    "revision": "0c15ad682549352ac08e6835bd650850"
  },
  {
    "url": "my-life/life14.html",
    "revision": "c3452742887a5be86efecf2fa36769cf"
  },
  {
    "url": "my-life/life15.html",
    "revision": "29ff952a244e08ee53df4351e09d1c1d"
  },
  {
    "url": "my-life/life16.html",
    "revision": "4b316b6f750baa97647124eaee5d92d5"
  },
  {
    "url": "my-life/life2.html",
    "revision": "4a1501103f5e7129cbff792fe767e37f"
  },
  {
    "url": "my-life/life3.html",
    "revision": "bb0ab82f1272da1d9cf52e5e443d74e9"
  },
  {
    "url": "my-life/life4.html",
    "revision": "db6ea1df3cff949f0836b7bebb27f654"
  },
  {
    "url": "my-life/life5.html",
    "revision": "14466784900165bf552f8aeb0427c86d"
  },
  {
    "url": "my-life/life6.html",
    "revision": "0bf9635bdd1fa446f6d3ffe9050177a4"
  },
  {
    "url": "my-life/life7.html",
    "revision": "3088281364ff78f8509064518ed5bbda"
  },
  {
    "url": "my-life/life8.html",
    "revision": "4092807a300d8353869f3dbf15836226"
  },
  {
    "url": "my-life/life9.html",
    "revision": "9ecec11fb6d47962e8e5cc7792bc1c73"
  },
  {
    "url": "technical/css/index.html",
    "revision": "e43ceb2bf34cfe2e7aa2ad164afc6f78"
  },
  {
    "url": "technical/css/qa.html",
    "revision": "5a60a878b835c90bbd9caf8c92d341b4"
  },
  {
    "url": "technical/css/qa1.html",
    "revision": "9d8a45b1df730cf738b0bb9a7d7f35dc"
  },
  {
    "url": "technical/css/qa2.html",
    "revision": "e72445a83a0b21faecae1ade42c2cf2b"
  },
  {
    "url": "technical/index.html",
    "revision": "73bf26c9797323b6d4cdd80f3405e74a"
  },
  {
    "url": "technical/js/index.html",
    "revision": "c1b9eb2170629e8f81c854051337bc3d"
  },
  {
    "url": "technical/js/qa.html",
    "revision": "06bca16439d6ccd2b0ba7344be0a3d60"
  },
  {
    "url": "technical/js/qa1.html",
    "revision": "8dd0dee93ae8ef2fb423e554ff6a5723"
  },
  {
    "url": "technical/js/qa2.html",
    "revision": "09edc88310831c715daa0410d011a2d6"
  },
  {
    "url": "technical/js/qa3.html",
    "revision": "47e574c9207245c57feef6620dd6680c"
  },
  {
    "url": "technical/lwm/index.html",
    "revision": "14531b7d603d5fa5896fa8bc1062cd8c"
  },
  {
    "url": "technical/lwm/qa.html",
    "revision": "a6d325b90f1c28a7fe41d1d71187ac02"
  },
  {
    "url": "technical/lwm/qa1.html",
    "revision": "c40657bb55ab8262818f5896155592c6"
  },
  {
    "url": "technical/lwm/qa10.html",
    "revision": "8989711e7284a35f563af9ffe071e29f"
  },
  {
    "url": "technical/lwm/qa2.html",
    "revision": "f37b074a1e3c70f54e2802bf8ad6313d"
  },
  {
    "url": "technical/lwm/qa3.html",
    "revision": "d965922640d29a6479ed50c6c738df4e"
  },
  {
    "url": "technical/lwm/qa30.html",
    "revision": "4c9a85fc2aa88a20732600ed44266304"
  },
  {
    "url": "technical/lwm/qa4.html",
    "revision": "9bc8f65ff4e32c620ec486d047abf024"
  },
  {
    "url": "technical/markdown/index.html",
    "revision": "1ec8e6b54f120821587d9ab3fa322c49"
  },
  {
    "url": "technical/markdown/qa.html",
    "revision": "78022a2dc99d3c70b8759de1e985c7e5"
  },
  {
    "url": "technical/node/index.html",
    "revision": "ef76b889e117df42a0f589a78c6096a7"
  },
  {
    "url": "technical/node/qa.html",
    "revision": "148f703e216f1a1e5f7d3fdb65b84012"
  },
  {
    "url": "technical/ts/index.html",
    "revision": "affe3d0d63ce23817d282ec011114c35"
  },
  {
    "url": "technical/ts/qa.html",
    "revision": "3f4a366a1c1dc2bda0ce843980b7c271"
  },
  {
    "url": "technical/vue/qa.html",
    "revision": "762cf079694af7bd9927cf0ff6898f10"
  },
  {
    "url": "timeAxis.html",
    "revision": "5dc1b253ed4c49eaf2f091edf7a61c8e"
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
