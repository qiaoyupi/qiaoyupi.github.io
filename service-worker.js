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
    "revision": "5dd301f08d8d7f8a2e1d4f2f981d5d63"
  },
  {
    "url": "about.html",
    "revision": "8953a491bec1e47ff513399799b3b0e2"
  },
  {
    "url": "assets/css/0.styles.b01a1e6f.css",
    "revision": "bac8c1f9d7ee96b78d04fe0e20923dce"
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
    "url": "assets/js/17.831b68c6.js",
    "revision": "59d08185749ec6e9c6548f1ed55782ef"
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
    "url": "assets/js/21.6d13e3ae.js",
    "revision": "057afd115fcedf44e3835cd2c7f227c7"
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
    "url": "assets/js/24.c30aa41f.js",
    "revision": "d72df0053f5256e2e50af56fc1f4aa5c"
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
    "url": "assets/js/29.476fa918.js",
    "revision": "1a44dfaafa1881d7461a84d609aae7f6"
  },
  {
    "url": "assets/js/3.3e578b72.js",
    "revision": "98110fefe03085fdbc5cb83b9ab5f687"
  },
  {
    "url": "assets/js/30.915d742e.js",
    "revision": "2e33bf0b45ee697af45a27f098972843"
  },
  {
    "url": "assets/js/31.647e5348.js",
    "revision": "d31e710d3b2f7d1746f20d674b17d949"
  },
  {
    "url": "assets/js/32.fd9aef3d.js",
    "revision": "06c862865eaf6bff7fd39f9b3d0d84c6"
  },
  {
    "url": "assets/js/33.e0b116d7.js",
    "revision": "7615b6311043b403087f2eecf5b2d2fb"
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
    "url": "assets/js/36.fd4048b4.js",
    "revision": "50aa079725a9dd6082190857285142f9"
  },
  {
    "url": "assets/js/37.d6eb9693.js",
    "revision": "e62e367478ad60fc7e0678b497d23088"
  },
  {
    "url": "assets/js/38.7fc183bb.js",
    "revision": "780e81bc162ce406a41e3e2a7b86e028"
  },
  {
    "url": "assets/js/39.e34366b4.js",
    "revision": "61d7893921e95e3a4e16c4ff1a328f10"
  },
  {
    "url": "assets/js/4.5d2dae59.js",
    "revision": "63e655cd69e2abd6b55cf461d61eddee"
  },
  {
    "url": "assets/js/40.3326e2ad.js",
    "revision": "1d041e5c2c4c2fc38d983a30eeea6e49"
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
    "url": "assets/js/5.f8c781a4.js",
    "revision": "b8e3c91d9ecc2daf978f0a491b5e8b44"
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
    "url": "assets/js/52.37341ddd.js",
    "revision": "0bc54a3a78446dae20833ef3c473212a"
  },
  {
    "url": "assets/js/53.cfdcced1.js",
    "revision": "bebe1deecbaa9f81dd1bb67b37cb48fa"
  },
  {
    "url": "assets/js/54.7fdbe6c6.js",
    "revision": "48c4c4499eb6a643b1d12f93803f625d"
  },
  {
    "url": "assets/js/55.f7952db3.js",
    "revision": "be6edaa0c2306c52e583f2fcc3b0c255"
  },
  {
    "url": "assets/js/56.437b113c.js",
    "revision": "a944e0eddbb18fde11df6678707ba9de"
  },
  {
    "url": "assets/js/57.a3b7dcaa.js",
    "revision": "eb6c84ba63cd9032a24a1f57ade7a0ab"
  },
  {
    "url": "assets/js/58.fb200f31.js",
    "revision": "1500d8950f44c59cf84b15827c94e8ac"
  },
  {
    "url": "assets/js/59.3888a6a5.js",
    "revision": "7cec59a75ef748d98255523504aa84b0"
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
    "url": "assets/js/61.c7c8be1c.js",
    "revision": "7770d4198a50ab28ac0d60040b40add4"
  },
  {
    "url": "assets/js/62.e6f275c4.js",
    "revision": "f09ebebd63de36ac1e15a4bdfe59d01d"
  },
  {
    "url": "assets/js/63.fed065ed.js",
    "revision": "10564505a63b74228bf095826718db95"
  },
  {
    "url": "assets/js/64.5e3a98c7.js",
    "revision": "bdf926a6ef2c22a6dc36688ec97d2516"
  },
  {
    "url": "assets/js/65.5b8ed85c.js",
    "revision": "c0b19c030447d2bb670f745c2eb00e12"
  },
  {
    "url": "assets/js/66.acfed8cb.js",
    "revision": "75be4fbe186a52dbfd68ab9d9dc9738e"
  },
  {
    "url": "assets/js/67.57c9085a.js",
    "revision": "7ccf34cb1f59f3797e41ca5bfbb6e8f7"
  },
  {
    "url": "assets/js/68.ec0a78ae.js",
    "revision": "87d4fe9881ce07981fd1f2efbd4b3484"
  },
  {
    "url": "assets/js/69.1ca49c5e.js",
    "revision": "21ccdc45a1f8d7ccb73f462efc6cde66"
  },
  {
    "url": "assets/js/7.c4d22280.js",
    "revision": "bc37c384fb0d4db7727df77e4dc77c56"
  },
  {
    "url": "assets/js/70.75108a63.js",
    "revision": "25fab3123f75050f77f89c360d3e32aa"
  },
  {
    "url": "assets/js/71.8beeffb7.js",
    "revision": "bb29a9c81dff48c74459ef87667b648f"
  },
  {
    "url": "assets/js/72.baa814c3.js",
    "revision": "de45787f8c9fcb7105875a3717d0e3b5"
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
    "url": "assets/js/app.6d4d7ad1.js",
    "revision": "f6b14c467f5c51863b2c9d0d471e8bf2"
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
    "revision": "3c9360a622e5de901c1c671283cf875c"
  },
  {
    "url": "my-life/index.html",
    "revision": "96ab966db268adcbac239e6d1e6aafaa"
  },
  {
    "url": "my-life/life10.html",
    "revision": "75754da291a780fe368f562f8377c2fc"
  },
  {
    "url": "my-life/life11.html",
    "revision": "7526c5ab8f7b5591eb526b4c398262f3"
  },
  {
    "url": "my-life/life12.html",
    "revision": "8c673f850456d1ae7d6bc68f98eb1d29"
  },
  {
    "url": "my-life/life13.html",
    "revision": "f62cc4db3bcf759d72c639b7b4bb5074"
  },
  {
    "url": "my-life/life14.html",
    "revision": "68629f61da168aeee0b4e7be2b4330f3"
  },
  {
    "url": "my-life/life17.html",
    "revision": "876f54221eda7389f3dd0e1d296d56f0"
  },
  {
    "url": "my-life/life18.html",
    "revision": "7e7430478f9895cfb0efdc5ac8222f70"
  },
  {
    "url": "my-life/life19.html",
    "revision": "16da2d0456ebc889215af71884ba134f"
  },
  {
    "url": "my-life/life2.html",
    "revision": "b2d04560ceb4c31005b0b9dd9c166b38"
  },
  {
    "url": "my-life/life20.html",
    "revision": "81e62778ba66a1b9bcf8a93d257a340c"
  },
  {
    "url": "my-life/life21.html",
    "revision": "8b4584c8568e8ad406d84c9d72b0915e"
  },
  {
    "url": "my-life/life22.html",
    "revision": "24901eb1c81b8325eb0f6118cefe8fa2"
  },
  {
    "url": "my-life/life3.html",
    "revision": "3257addf8d20fc4b24defb89eabdff4e"
  },
  {
    "url": "my-life/life4.html",
    "revision": "9fe3ec154e0a636d6288b98df8adf436"
  },
  {
    "url": "my-life/life5.html",
    "revision": "115771d6fd67ce1eb0e8a28133f2a48c"
  },
  {
    "url": "my-life/life6.html",
    "revision": "feb13951d18e07f8934b181a501f466d"
  },
  {
    "url": "my-life/life7.html",
    "revision": "9cc89195312a5e9c297fefa6ab0850dd"
  },
  {
    "url": "my-life/life8.html",
    "revision": "850c4d54b56c43cc17c5616b5cb8537c"
  },
  {
    "url": "my-life/life9.html",
    "revision": "58128e4681d448850a73d94588103c42"
  },
  {
    "url": "my-life/self1.html",
    "revision": "c2ae72aa4497d9f94f1e6b5b0a64d9b5"
  },
  {
    "url": "my-life/self2.html",
    "revision": "dc7d833d1534917f3fd739e9437afdb5"
  },
  {
    "url": "my-life/self3.html",
    "revision": "af0a169f8344aa7c6467be69d3300566"
  },
  {
    "url": "my-life/self4.html",
    "revision": "6526bcc4ff540095c5d136baee040504"
  },
  {
    "url": "my-life/self5.html",
    "revision": "40cbf94afdd310e1a6ceed7b8b878efa"
  },
  {
    "url": "my-life/self6.html",
    "revision": "04f2c10b982f4eb56f2052d149e5f4ff"
  },
  {
    "url": "technical/css/index.html",
    "revision": "402bdaf578cc7202845107a1a2cfeb55"
  },
  {
    "url": "technical/css/qa.html",
    "revision": "6d432d06c3efae2e16b055c03c86f845"
  },
  {
    "url": "technical/css/qa1.html",
    "revision": "f03d45735d3fca223d7f9b026e96c0ea"
  },
  {
    "url": "technical/css/qa2.html",
    "revision": "344d6cdc4f2dc7d8823477232d613737"
  },
  {
    "url": "technical/index.html",
    "revision": "a55165e145abe80f3bc1128d887f8810"
  },
  {
    "url": "technical/js/index.html",
    "revision": "7d661e45cb454e10cf333584fdbdb0d7"
  },
  {
    "url": "technical/js/qa.html",
    "revision": "28d38cad3dd54d00ad53abda32a702ba"
  },
  {
    "url": "technical/js/qa1.html",
    "revision": "4258bfdd460e0381931a5d75e80808eb"
  },
  {
    "url": "technical/js/qa2.html",
    "revision": "50e3dd90d5a764a0fabc9dab3587244e"
  },
  {
    "url": "technical/js/qa3.html",
    "revision": "015ec0f3970f2f576b0ac6c862add96a"
  },
  {
    "url": "technical/lwm/index.html",
    "revision": "2779d59f3850fa8c96bf90e5882b9d2b"
  },
  {
    "url": "technical/lwm/qa.html",
    "revision": "af51fcdcca83cfe65dee1749c9fc0857"
  },
  {
    "url": "technical/lwm/qa1.html",
    "revision": "10fb8f6520ec032d713c8a51c3534f2f"
  },
  {
    "url": "technical/lwm/qa10.html",
    "revision": "8457b55fcb80026ba1dbcdbad389ad7c"
  },
  {
    "url": "technical/lwm/qa2.html",
    "revision": "1ff20455a1e9ac96cf043bfb597128a6"
  },
  {
    "url": "technical/lwm/qa3.html",
    "revision": "0609339ccf64691c8fae16d6435d58f5"
  },
  {
    "url": "technical/lwm/qa30.html",
    "revision": "c1fe1af91ef6e5d6ceba49924bcee17f"
  },
  {
    "url": "technical/lwm/qa4.html",
    "revision": "8158fd59d1348190571846adab0c763e"
  },
  {
    "url": "technical/markdown/index.html",
    "revision": "85c591a587ed5a44e1daae4b14a0e236"
  },
  {
    "url": "technical/markdown/qa.html",
    "revision": "7261429ee7167c2e7e1317e35313d699"
  },
  {
    "url": "technical/node/index.html",
    "revision": "399e55d44fd55507c6dc3dad2a2a11b7"
  },
  {
    "url": "technical/node/qa.html",
    "revision": "4436e792a5724c52d4f4d2c2327a7816"
  },
  {
    "url": "technical/ts/index.html",
    "revision": "a630c78f13544b5cb33e723ad5f62cbd"
  },
  {
    "url": "technical/ts/qa.html",
    "revision": "7d357a36a09b9385eb45a2b6a370cc75"
  },
  {
    "url": "technical/vue/qa.html",
    "revision": "885d2cb2d0f365ce75b522fb573607ba"
  },
  {
    "url": "timeAxis.html",
    "revision": "0f5d3321d604478258d2eac2dfd60e2b"
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
