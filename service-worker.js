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
    "revision": "0c9e0f4f964ea1786e84c16626a26cb5"
  },
  {
    "url": "about.html",
    "revision": "288bfdf7268ddda0769badda00fe4b9f"
  },
  {
    "url": "assets/css/0.styles.447d85ad.css",
    "revision": "f8362f62bd20cef448de8ca86a4b2ad2"
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
    "url": "assets/js/1.43565954.js",
    "revision": "82fbc6a6d60eef40b3077a2f085c4c98"
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
    "url": "assets/js/13.e9a620f5.js",
    "revision": "11423d9c7e7415c96b4e4f55daec9679"
  },
  {
    "url": "assets/js/14.e26f174c.js",
    "revision": "0523e22052895db1a74d8b0734642a76"
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
    "url": "assets/js/23.e16036b1.js",
    "revision": "0d26eb8d5b0424bbed6cec76ad01bbe8"
  },
  {
    "url": "assets/js/24.f714bef9.js",
    "revision": "dcb0e51276a7b8bea386380a3086130c"
  },
  {
    "url": "assets/js/25.a6d6fe55.js",
    "revision": "7c714c08878aedf716f502f872fd9803"
  },
  {
    "url": "assets/js/26.09ec8189.js",
    "revision": "a04587d7f5bc926e27494ceee12eff20"
  },
  {
    "url": "assets/js/27.cd2fc508.js",
    "revision": "bc22f5015ff833c4b8445b29732f07be"
  },
  {
    "url": "assets/js/28.45c95817.js",
    "revision": "2b61f4846bc6d3dac5bd84cfc0ba90ce"
  },
  {
    "url": "assets/js/29.26ee75a8.js",
    "revision": "6e871482a8934d5565cb7b7f8592970e"
  },
  {
    "url": "assets/js/3.3e578b72.js",
    "revision": "98110fefe03085fdbc5cb83b9ab5f687"
  },
  {
    "url": "assets/js/30.b7f43128.js",
    "revision": "0d7612e791acbaa4930c8f74fb46c60f"
  },
  {
    "url": "assets/js/31.1d70ef10.js",
    "revision": "a7554dd798fcb933d7f7f35f38f875da"
  },
  {
    "url": "assets/js/32.fd9aef3d.js",
    "revision": "06c862865eaf6bff7fd39f9b3d0d84c6"
  },
  {
    "url": "assets/js/33.b8f2ebd0.js",
    "revision": "982579073b99248c81b2b1fa20b1b1d0"
  },
  {
    "url": "assets/js/34.5b939a64.js",
    "revision": "52d892974c9dd7b7edda71d299a2d2a5"
  },
  {
    "url": "assets/js/35.194a3e11.js",
    "revision": "63bfe668601da21bfa864649ec868f09"
  },
  {
    "url": "assets/js/36.1a3aca73.js",
    "revision": "fee830ef62621c05492f812abd4c1385"
  },
  {
    "url": "assets/js/37.f0da31db.js",
    "revision": "f6913daf0eea27eff19218da4ce6e19d"
  },
  {
    "url": "assets/js/38.d9bb56fa.js",
    "revision": "16ee9d45cbaa3c6dc60dbfc263f73a34"
  },
  {
    "url": "assets/js/39.a8ad102f.js",
    "revision": "2e43fe40442b01164b87fbe53c7351ca"
  },
  {
    "url": "assets/js/4.5d2dae59.js",
    "revision": "63e655cd69e2abd6b55cf461d61eddee"
  },
  {
    "url": "assets/js/40.a232a533.js",
    "revision": "c24355340da82ade21af6a20d86b7de5"
  },
  {
    "url": "assets/js/41.fd861160.js",
    "revision": "9b43f20117aa68877e756810f64fa277"
  },
  {
    "url": "assets/js/42.56abba59.js",
    "revision": "cf224af1bab03cad0b97a836eb9e9909"
  },
  {
    "url": "assets/js/43.42e3dcad.js",
    "revision": "97c49ca57df0f4cd5da0e092074b5c9a"
  },
  {
    "url": "assets/js/44.68e5341a.js",
    "revision": "da59e220ba14ac8aab2c92dcc549a529"
  },
  {
    "url": "assets/js/45.56e56236.js",
    "revision": "5b10f8768f68d73927c112ea83de58af"
  },
  {
    "url": "assets/js/46.2843e608.js",
    "revision": "aeaeb239a1b4031afaa153205724a318"
  },
  {
    "url": "assets/js/47.4a1208c7.js",
    "revision": "2085e3053cb5b45cba6736f4c7c28487"
  },
  {
    "url": "assets/js/48.845e171d.js",
    "revision": "9d01eacf91be16a6d1ce3dc0c85272c7"
  },
  {
    "url": "assets/js/49.b83fc67c.js",
    "revision": "9689a41821b28651ca43a6147b22d5ce"
  },
  {
    "url": "assets/js/5.3bc57a83.js",
    "revision": "f152d08fee54d9a8bacea9115a8afc43"
  },
  {
    "url": "assets/js/50.967d6cea.js",
    "revision": "1899d4a05a2ed76dda45d29a32724874"
  },
  {
    "url": "assets/js/51.d68bcc22.js",
    "revision": "ea8f068f5ed55b8bb0ea1b7a114b72f9"
  },
  {
    "url": "assets/js/52.330c17c9.js",
    "revision": "80fc382a61dc9e33ef2f25c5cbc29db0"
  },
  {
    "url": "assets/js/53.f2c45792.js",
    "revision": "2d44940bb32c1a110c6ab750e5623f17"
  },
  {
    "url": "assets/js/54.ccc41c06.js",
    "revision": "01381862728399957249be57ee9dab7c"
  },
  {
    "url": "assets/js/55.e2ef2b12.js",
    "revision": "b5455b70a65cc3137e45586e0045bc08"
  },
  {
    "url": "assets/js/56.d0e6f2db.js",
    "revision": "7859c63f9929f396e6de98d64342c9c8"
  },
  {
    "url": "assets/js/57.f1a6870e.js",
    "revision": "c57a1167656dec6ff067983783f46f7d"
  },
  {
    "url": "assets/js/58.4b14e442.js",
    "revision": "71f1f3cbfce9f23036952a0d31478126"
  },
  {
    "url": "assets/js/59.9114cb4c.js",
    "revision": "f46a384145591aa40b37af68d383e126"
  },
  {
    "url": "assets/js/6.98971001.js",
    "revision": "7e15e88d011cf8147f107e6a41967d59"
  },
  {
    "url": "assets/js/60.8cdf7d88.js",
    "revision": "7ecbcd14a51df2864b4e0d5e413dbfd0"
  },
  {
    "url": "assets/js/61.63ab4624.js",
    "revision": "2fffa90bf457473f3c444fda891544ad"
  },
  {
    "url": "assets/js/62.09944388.js",
    "revision": "3a7d476a3aac788f60fe04c75496ac07"
  },
  {
    "url": "assets/js/63.33838b49.js",
    "revision": "484cf9476057c2d10d1c016c1de6a21f"
  },
  {
    "url": "assets/js/64.beb28e88.js",
    "revision": "09d2bc2930e77f7ecae1613298fe4430"
  },
  {
    "url": "assets/js/65.9d0b7564.js",
    "revision": "2a46f0ba3778c07d41636673e927517c"
  },
  {
    "url": "assets/js/66.acfed8cb.js",
    "revision": "75be4fbe186a52dbfd68ab9d9dc9738e"
  },
  {
    "url": "assets/js/67.23e96637.js",
    "revision": "a85bd52ab7e32a1329ebdc842e56c075"
  },
  {
    "url": "assets/js/68.83773545.js",
    "revision": "f35e1823f09a9df4c59999545cb19c76"
  },
  {
    "url": "assets/js/69.fdaeee8b.js",
    "revision": "7460bbbf032f45e3c0ac8353c4ef9d6b"
  },
  {
    "url": "assets/js/7.c4d22280.js",
    "revision": "bc37c384fb0d4db7727df77e4dc77c56"
  },
  {
    "url": "assets/js/70.bbbbb7dc.js",
    "revision": "8984dda996f8bf48dc1188427a8a696a"
  },
  {
    "url": "assets/js/71.677c6703.js",
    "revision": "a9ae64a95ea9783bc9080db09ab908e4"
  },
  {
    "url": "assets/js/72.4ffd64b1.js",
    "revision": "be272e3d8d92a56985de7c23cb7ad25c"
  },
  {
    "url": "assets/js/73.1274dd9b.js",
    "revision": "067e078c87a4aac6c264f200d9dd622a"
  },
  {
    "url": "assets/js/8.dbe11597.js",
    "revision": "7ca6f12d134c35076033c04bddcdb578"
  },
  {
    "url": "assets/js/9.3ec60412.js",
    "revision": "b6497180a9e70058c290d38fdb15f24d"
  },
  {
    "url": "assets/js/app.d9d3111e.js",
    "revision": "008789f5f235a116a82780d3b7395b19"
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
    "revision": "b1d4fa5a72d7d63ab8bfb1103af3a5c0"
  },
  {
    "url": "my-life/index.html",
    "revision": "abf98b1eb8b3f4cf30bef27807ca41fb"
  },
  {
    "url": "my-life/life10.html",
    "revision": "99cf9761762853a5aaa777ac20444d38"
  },
  {
    "url": "my-life/life11.html",
    "revision": "f78aed94c37108f5e3e1a8c00cf553c8"
  },
  {
    "url": "my-life/life12.html",
    "revision": "c4d66bddbd4f37c387be41ce9dafc534"
  },
  {
    "url": "my-life/life13.html",
    "revision": "01eb0da612fb3c12435774838f8157a7"
  },
  {
    "url": "my-life/life14.html",
    "revision": "c65d957cc402e8f575f96cc0ce724f08"
  },
  {
    "url": "my-life/life17.html",
    "revision": "458cc974f1a9a50262e2bd6158e918a2"
  },
  {
    "url": "my-life/life18.html",
    "revision": "40e223ce9427a6a8b084cb2d7ac2153b"
  },
  {
    "url": "my-life/life19.html",
    "revision": "ad5efb7cfb1d77789d4b7ad36fc73db3"
  },
  {
    "url": "my-life/life2.html",
    "revision": "6fb05f6e6a2de3901bf7bdc1f993b570"
  },
  {
    "url": "my-life/life20.html",
    "revision": "74adfd07481023a240c2944e47307144"
  },
  {
    "url": "my-life/life21.html",
    "revision": "05244478ddeaead10ed5f97870153f86"
  },
  {
    "url": "my-life/life22.html",
    "revision": "c582722621e0d743ed7a688e0ffcb781"
  },
  {
    "url": "my-life/life3.html",
    "revision": "aba7a5cee76afaec6434e058347e16c0"
  },
  {
    "url": "my-life/life4.html",
    "revision": "06afd0095182033de64216c35283c7dd"
  },
  {
    "url": "my-life/life5.html",
    "revision": "691faf8007bd7d76fc13f9300e69e995"
  },
  {
    "url": "my-life/life6.html",
    "revision": "b688f890a3475ba0c4a40e0d7992efc6"
  },
  {
    "url": "my-life/life7.html",
    "revision": "f563e0c0780d91e4a0448a8942a4bcba"
  },
  {
    "url": "my-life/life8.html",
    "revision": "ed5e452affbdb4566d944cb4a60354f0"
  },
  {
    "url": "my-life/life9.html",
    "revision": "d79aea1c9691308e425c2d6952cd23cf"
  },
  {
    "url": "my-life/self1.html",
    "revision": "6b8e5b57e2371dbd3a98994cdfeae7a4"
  },
  {
    "url": "my-life/self2.html",
    "revision": "b3e267b9fb6b6b9db5a7e27788cf2e70"
  },
  {
    "url": "my-life/self3.html",
    "revision": "59185f0cb06591420fa3566ea1275b01"
  },
  {
    "url": "my-life/self4.html",
    "revision": "c98292aecce4319ce7dfb3f92f3dfe4b"
  },
  {
    "url": "my-life/self5.html",
    "revision": "80825b1ed2e02aa76f0f7343f27de0f1"
  },
  {
    "url": "my-life/self6.html",
    "revision": "689af139c951d9421997d8e5e8ada525"
  },
  {
    "url": "technical/css/index.html",
    "revision": "2772fe9b1cdbb566ea99baeca7bda179"
  },
  {
    "url": "technical/css/qa.html",
    "revision": "4f6d60a8af3735dcdec60aaf71ce10d7"
  },
  {
    "url": "technical/css/qa1.html",
    "revision": "37f91a07e7a12dbd91bc321312ee260a"
  },
  {
    "url": "technical/css/qa2.html",
    "revision": "61260eecb409d7b56d3c37f6cbe87386"
  },
  {
    "url": "technical/index.html",
    "revision": "c2c0b6bb027124dea6202ec42797e61d"
  },
  {
    "url": "technical/js/index.html",
    "revision": "a46687ec99b072c338d388f1604bce25"
  },
  {
    "url": "technical/js/qa.html",
    "revision": "91c25890493bda2e5ff20c0ed681b65a"
  },
  {
    "url": "technical/js/qa1.html",
    "revision": "342505ec32cf4cc259f8625bc16ac1ec"
  },
  {
    "url": "technical/js/qa2.html",
    "revision": "102df1a9eb1080f94dc8942bbd1e4df1"
  },
  {
    "url": "technical/js/qa3.html",
    "revision": "2451210ca359d0c1a56f32568633a7fb"
  },
  {
    "url": "technical/lwm/index.html",
    "revision": "2fc6e4d0837b53f2132051355171ee5f"
  },
  {
    "url": "technical/lwm/qa.html",
    "revision": "1314be1c3a08d3a3fb3fdc8fb91b5a85"
  },
  {
    "url": "technical/lwm/qa1.html",
    "revision": "d3a5ee8de135dd8a1e33d54366662a34"
  },
  {
    "url": "technical/lwm/qa10.html",
    "revision": "1483c6cd6932c945eff0059e61ce9e13"
  },
  {
    "url": "technical/lwm/qa2.html",
    "revision": "78d1dd2a3098d2f84d186db7333b28b0"
  },
  {
    "url": "technical/lwm/qa3.html",
    "revision": "62b92f16626ccd618ee75bad842a2e0f"
  },
  {
    "url": "technical/lwm/qa30.html",
    "revision": "ce7a28535321a956fe5bd4d5da4fac51"
  },
  {
    "url": "technical/lwm/qa4.html",
    "revision": "c901c310b3965aaa76844387fa232d73"
  },
  {
    "url": "technical/markdown/index.html",
    "revision": "496aa7fff62afeb947a46b875b959b95"
  },
  {
    "url": "technical/markdown/qa.html",
    "revision": "e7662b348ff98679646e869d285cd541"
  },
  {
    "url": "technical/node/index.html",
    "revision": "c76e160b6675d12c242dad310098e008"
  },
  {
    "url": "technical/node/qa.html",
    "revision": "aef131ebeb521819e4f2d7d149323b53"
  },
  {
    "url": "technical/ts/index.html",
    "revision": "2db372bbcdc44b5b123660eb5bd4299f"
  },
  {
    "url": "technical/ts/qa.html",
    "revision": "9b82cce2ca6ef6e63ab2bc726a139431"
  },
  {
    "url": "technical/vue/qa.html",
    "revision": "031d7ecfe36f25bf6f2e3ba9bf282dc3"
  },
  {
    "url": "timeAxis.html",
    "revision": "ed554b5ef210e3d6399596f56d5aa781"
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
