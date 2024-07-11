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
    "revision": "98dfeffdf9fa118452c9a97c290b3a4c"
  },
  {
    "url": "about.html",
    "revision": "3673711b5b316ca98c2ab2911426423c"
  },
  {
    "url": "assets/css/0.styles.a82fdfa9.css",
    "revision": "a9691c986ed14875bf9fb47a7a2875b6"
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
    "url": "assets/js/14.a16eac75.js",
    "revision": "16a4fcd993dfe03f05409551d4709a72"
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
    "url": "assets/js/21.8284c2db.js",
    "revision": "0ac18091688e7580fb05a264b9efa024"
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
    "url": "assets/js/29.ea0b57a5.js",
    "revision": "c9581d7d4881a54680f4e48fd35264b6"
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
    "url": "assets/js/31.6b52fcdb.js",
    "revision": "4314394deff56cf84b9d1635a0d75543"
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
    "url": "assets/js/47.bfa7e544.js",
    "revision": "11dbb85be6b97d2091a14ba6e4614b0c"
  },
  {
    "url": "assets/js/48.4244412d.js",
    "revision": "f01df3abdcc10a9e3cc8fd32a27e9b5c"
  },
  {
    "url": "assets/js/49.96c56b7f.js",
    "revision": "30b456edd7c3acd40c06ba9378d397c3"
  },
  {
    "url": "assets/js/5.ddc41d9b.js",
    "revision": "f2bc292dcb584f45e2559e1a82bb957f"
  },
  {
    "url": "assets/js/50.7becb6e5.js",
    "revision": "e2e3345f8f0f5859821bdbefbb510cb7"
  },
  {
    "url": "assets/js/51.b45d3bae.js",
    "revision": "a66b1aba04e647128e526024e56c8fdf"
  },
  {
    "url": "assets/js/52.ae75888f.js",
    "revision": "46ce23d3c4f51ebd303f58ed22fa2b1c"
  },
  {
    "url": "assets/js/53.0fb6346f.js",
    "revision": "764ca718564c17b711c05875477298b9"
  },
  {
    "url": "assets/js/54.8898d61f.js",
    "revision": "f08977a7323b543ebfbdd9bf02864e6f"
  },
  {
    "url": "assets/js/55.af807367.js",
    "revision": "2862f50171bec78f585ac92271d7d11c"
  },
  {
    "url": "assets/js/56.6bea9f1e.js",
    "revision": "fdacdad2f983f0c9bdef8acd6ed08f97"
  },
  {
    "url": "assets/js/57.492c9c3c.js",
    "revision": "0a8a10305e2d52a033db545e38377323"
  },
  {
    "url": "assets/js/58.0226159f.js",
    "revision": "33b76cb95880cae430b74928de563bde"
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
    "url": "assets/js/app.d634472a.js",
    "revision": "2f2a3fb56c8263335125ddac8e65b60e"
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
    "revision": "0d72d5e20199ca260b23288b0d85d5f9"
  },
  {
    "url": "my-life/index.html",
    "revision": "4dc207b927f9f846ae68649f2acbf2c8"
  },
  {
    "url": "my-life/life10.html",
    "revision": "d99ae43dcfa975872310260a7c5e5afa"
  },
  {
    "url": "my-life/life11.html",
    "revision": "a4015a694decd3147fda8b13661299d3"
  },
  {
    "url": "my-life/life12.html",
    "revision": "9bb892b76a32b662d866e1ea430c29bf"
  },
  {
    "url": "my-life/life13.html",
    "revision": "e9897e5beda2c89055a5c506c9ecdd7a"
  },
  {
    "url": "my-life/life14.html",
    "revision": "c8602e925ef65a18a262db6dd85c54c1"
  },
  {
    "url": "my-life/life15.html",
    "revision": "867022b8b800f9cb2e60cc41bb95a6fe"
  },
  {
    "url": "my-life/life16.html",
    "revision": "4cbede0af8080ddabead9331b8782c1b"
  },
  {
    "url": "my-life/life2.html",
    "revision": "373931fae8b3ae129775644fa9ec59a0"
  },
  {
    "url": "my-life/life3.html",
    "revision": "0b6fe10fcccf1bb74b1fcc5444aeeeb7"
  },
  {
    "url": "my-life/life4.html",
    "revision": "9687a21205796036d275128386e6a3eb"
  },
  {
    "url": "my-life/life5.html",
    "revision": "1918e3dd4d6f05c37b92cfdd788c9f03"
  },
  {
    "url": "my-life/life6.html",
    "revision": "7f7752297d1c11a1cd5cc9bf5111f84b"
  },
  {
    "url": "my-life/life7.html",
    "revision": "b5b22efcf4ee63eecebc41ec58f7c73e"
  },
  {
    "url": "my-life/life8.html",
    "revision": "337635297b94bfc85f8526e2381012a7"
  },
  {
    "url": "my-life/life9.html",
    "revision": "cf414aac76a605455cec98adcb91b002"
  },
  {
    "url": "technical/css/index.html",
    "revision": "18ec7ff90b39666d31772bf159f5bab0"
  },
  {
    "url": "technical/css/qa.html",
    "revision": "f165fd78dd515902c233012456595436"
  },
  {
    "url": "technical/css/qa1.html",
    "revision": "2f7b85c940f92a72c980bba93e2b82a4"
  },
  {
    "url": "technical/css/qa2.html",
    "revision": "ce8e98b7dc3d4080ea37b912da856815"
  },
  {
    "url": "technical/index.html",
    "revision": "0517060af1829049b35b4fd918995b02"
  },
  {
    "url": "technical/js/index.html",
    "revision": "65a3f929f76da67ac18b4a1ab07976d3"
  },
  {
    "url": "technical/js/qa.html",
    "revision": "c74a9fa1a168b9a5f87688ba2e28a156"
  },
  {
    "url": "technical/js/qa1.html",
    "revision": "a73fe475beee6acb663ba2a23dfc23b7"
  },
  {
    "url": "technical/js/qa2.html",
    "revision": "90f0c9b7d7df03644436abc4296ee898"
  },
  {
    "url": "technical/js/qa3.html",
    "revision": "10f1543ebd4ab09dd4fdeecc751e1fd4"
  },
  {
    "url": "technical/lwm/index.html",
    "revision": "54e43b2ee9c464593abe52dc7b217039"
  },
  {
    "url": "technical/lwm/qa.html",
    "revision": "5f07af5b42526bcb24a05e0181984785"
  },
  {
    "url": "technical/lwm/qa1.html",
    "revision": "9a638631a33510eca2cdfe3e0272f5bb"
  },
  {
    "url": "technical/markdown/index.html",
    "revision": "a2b501d0c72d3eb1aab3e535613d7c92"
  },
  {
    "url": "technical/markdown/qa.html",
    "revision": "c9dc3be7fdf945f915997cd247dfbfb9"
  },
  {
    "url": "technical/node/index.html",
    "revision": "2dfa912cdb6add7406b3a21b5e485c47"
  },
  {
    "url": "technical/node/qa.html",
    "revision": "33617c189ef6ca99eec340d7210bcd9c"
  },
  {
    "url": "technical/ts/index.html",
    "revision": "e32275ffdf699c46c00de31a91648299"
  },
  {
    "url": "technical/ts/qa.html",
    "revision": "082bc49b473a9684e4af7bba671f9ae6"
  },
  {
    "url": "technical/vue/qa.html",
    "revision": "dc8518d552dd5b7a5bc28871d1da6e17"
  },
  {
    "url": "timeAxis.html",
    "revision": "bb8b749b36853dc041fff0f554244a8e"
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
