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
    "revision": "dfd22804ce4ce21db602bdce55ecf78e"
  },
  {
    "url": "about.html",
    "revision": "ca247ab7276e393c703ba088e539d9e3"
  },
  {
    "url": "assets/css/0.styles.035718dd.css",
    "revision": "e443fb706366e3266a5b186dafa477b1"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.9be9adc1.js",
    "revision": "490924c359b83ad4067570770e1efc0f"
  },
  {
    "url": "assets/js/10.acb60fdb.js",
    "revision": "724e42668252b22ee1683ad8c5884db2"
  },
  {
    "url": "assets/js/11.f66cd43c.js",
    "revision": "3c9243b007f329eae7342f481102a9d4"
  },
  {
    "url": "assets/js/12.ad57b7fe.js",
    "revision": "72f2d8de8baf7960e208cceb47bb2d61"
  },
  {
    "url": "assets/js/13.bf620606.js",
    "revision": "68beaa537aa63d45a9cbd7290509c7bf"
  },
  {
    "url": "assets/js/14.507e537c.js",
    "revision": "fb2cacb166f9d8fb9d5395305e05b8a6"
  },
  {
    "url": "assets/js/15.e13b7348.js",
    "revision": "233870f3fe390edde07d313897dce6d9"
  },
  {
    "url": "assets/js/16.ca89b74f.js",
    "revision": "73537b6189deaca46853f564fc3cc00c"
  },
  {
    "url": "assets/js/17.9dbec381.js",
    "revision": "758fc809e480ffe2e046f2d0e36561dd"
  },
  {
    "url": "assets/js/18.89f2f1bc.js",
    "revision": "45c81444b07aef972e972e2db0d7a812"
  },
  {
    "url": "assets/js/19.a0a003c9.js",
    "revision": "a5d388c2e7d748d1e58e78ce6e2f2761"
  },
  {
    "url": "assets/js/20.8b377dd2.js",
    "revision": "ea1a77f101fbe44f418146c4a961c13c"
  },
  {
    "url": "assets/js/21.87ce479d.js",
    "revision": "a7d2df0f1b2ed8304eee3136bb57bfd8"
  },
  {
    "url": "assets/js/22.6fa586ae.js",
    "revision": "e5225cab6e8f07adfdafc735ad3f1624"
  },
  {
    "url": "assets/js/23.331a7550.js",
    "revision": "0c2d5c3f5074539a386daf6d771eb310"
  },
  {
    "url": "assets/js/24.37c91520.js",
    "revision": "09aa29d36ae6bde14d7d008f7771ddcd"
  },
  {
    "url": "assets/js/25.1d2fc59d.js",
    "revision": "dda4b98f09424ca291adc66b402f416d"
  },
  {
    "url": "assets/js/26.6bb87e2d.js",
    "revision": "5444c68d3d23bf2abda8648a8fbb98bb"
  },
  {
    "url": "assets/js/27.a9afa03c.js",
    "revision": "0795c695c11649a768e4aa65879acf8f"
  },
  {
    "url": "assets/js/28.2ba674b3.js",
    "revision": "d967a37c617d34f2fe709de84eb1a902"
  },
  {
    "url": "assets/js/29.20655f42.js",
    "revision": "3ccae92a25f992efe239a29565b22a9e"
  },
  {
    "url": "assets/js/3.d911e8e3.js",
    "revision": "8d7068a9b5a774a8c96ce481214a7332"
  },
  {
    "url": "assets/js/30.e3e55ad2.js",
    "revision": "bf0ea3940a8ef5cb4669ee1c18fda0a7"
  },
  {
    "url": "assets/js/31.940d79ef.js",
    "revision": "24a4e1301d301e21eccd81026626db81"
  },
  {
    "url": "assets/js/32.281c3f21.js",
    "revision": "6566c9b40f22376d0bdeb5018cd3a2af"
  },
  {
    "url": "assets/js/33.f427576f.js",
    "revision": "405c056efe0885fb3590952c7bcf1563"
  },
  {
    "url": "assets/js/34.2ee24977.js",
    "revision": "4c1f6c35a2ddb016419898e496f2e4fc"
  },
  {
    "url": "assets/js/35.a899f7dd.js",
    "revision": "49408448bf053bf030bbec6ad3e5d5c9"
  },
  {
    "url": "assets/js/36.db05b80a.js",
    "revision": "fad0a349fbff14ff4f9bc812c62fb720"
  },
  {
    "url": "assets/js/37.240e9435.js",
    "revision": "06a15d7db6503559fad6fad18c9b76e6"
  },
  {
    "url": "assets/js/38.41d5b079.js",
    "revision": "268e65e575f9b2f9eb8c2047b0112ae3"
  },
  {
    "url": "assets/js/39.b02c2751.js",
    "revision": "079a2773765b9218f55714d2f0fbb15f"
  },
  {
    "url": "assets/js/4.a45d90e6.js",
    "revision": "318202d2164384a4ffa63a071aa45041"
  },
  {
    "url": "assets/js/40.77fd0a60.js",
    "revision": "b008c17f7e0cadbf4c3b4768d4f26151"
  },
  {
    "url": "assets/js/41.f6fec14b.js",
    "revision": "cf784eee6098525a6bfc77b482f3b2b7"
  },
  {
    "url": "assets/js/42.8578a272.js",
    "revision": "ae8766f0833ca5916c35501d7abf4620"
  },
  {
    "url": "assets/js/43.67a89fd5.js",
    "revision": "ba639117433fa881a993d052b5a4286b"
  },
  {
    "url": "assets/js/44.725f1144.js",
    "revision": "03e7d7603601766aa773c6cfae7b6591"
  },
  {
    "url": "assets/js/45.f6f303c6.js",
    "revision": "e17a0a62d42af3a8c614eef5a160d4af"
  },
  {
    "url": "assets/js/46.3f291e5b.js",
    "revision": "d2eb86471038ebacb05814e80e51d40a"
  },
  {
    "url": "assets/js/47.23fee9cb.js",
    "revision": "7102f72c4674d2fa4c7030c580079ffa"
  },
  {
    "url": "assets/js/48.5defb48e.js",
    "revision": "478f9dc69da93884647d176628020a50"
  },
  {
    "url": "assets/js/5.e99e678f.js",
    "revision": "fe7bd9dea57672356a7d5801650f7d1d"
  },
  {
    "url": "assets/js/6.aef36619.js",
    "revision": "c50f5b9c3bc17793b0c0193606a5274c"
  },
  {
    "url": "assets/js/7.d2defef0.js",
    "revision": "ddf1922f2e2a86136ba6c34e653028d0"
  },
  {
    "url": "assets/js/8.2c002099.js",
    "revision": "eba452af9303939ed59df30baaf834ef"
  },
  {
    "url": "assets/js/9.54f10521.js",
    "revision": "3bd1f81d902230310faf2cdc25c58000"
  },
  {
    "url": "assets/js/app.937c9103.js",
    "revision": "2f84de9836b43853cda81a34f87d0401"
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
    "revision": "3087a266ab84e94551e4d7f2e838330c"
  },
  {
    "url": "my-life/index.html",
    "revision": "02dd2e92f78d3aec852165174595dda5"
  },
  {
    "url": "my-life/life1.html",
    "revision": "c03ef7f53cd68289db522be5acba6695"
  },
  {
    "url": "my-life/life2.html",
    "revision": "fbe30d27a604d5b266c53641ad3601b2"
  },
  {
    "url": "my-life/life3.html",
    "revision": "e32d3e22f674088bfa25b8a7c0770bc0"
  },
  {
    "url": "my-life/life4.html",
    "revision": "17eb623f42159755bf5e8ff3bc9e0627"
  },
  {
    "url": "my-life/life5.html",
    "revision": "f48de65b942f800b3bff211f28614208"
  },
  {
    "url": "my-life/life6.html",
    "revision": "7d7c4a110c6c94a4b86e0d3c16ab815c"
  },
  {
    "url": "my-life/life7.html",
    "revision": "0c896c2dd4ce899d1cdaa2876885df0d"
  },
  {
    "url": "my-life/life8.html",
    "revision": "2fcb368549c30de01c9b7075c13fb42f"
  },
  {
    "url": "my-life/life9.html",
    "revision": "973d5ceb418053c8f224c4e146d07c13"
  },
  {
    "url": "technical/css/index.html",
    "revision": "edc7e838f8f4edc04079217ca63d2588"
  },
  {
    "url": "technical/css/qa.html",
    "revision": "04c29904854b0c47da1ab4b8f353e6bb"
  },
  {
    "url": "technical/css/qa1.html",
    "revision": "302d8189068260fe697f241cb90d5228"
  },
  {
    "url": "technical/index.html",
    "revision": "abefc16ef3299ee9b5f37fdfa0d63a64"
  },
  {
    "url": "technical/js/index.html",
    "revision": "ec63bdb8767ce7e6d3c012e7b197cfb0"
  },
  {
    "url": "technical/js/qa.html",
    "revision": "966699f1af25b2b59128c9a04cdd4f8f"
  },
  {
    "url": "technical/js/qa1.html",
    "revision": "03b6b262464014dddf4486daca502268"
  },
  {
    "url": "technical/js/qa2.html",
    "revision": "151873a9fb4e261ebb344c1e45e4092c"
  },
  {
    "url": "technical/js/qa3.html",
    "revision": "913f773e22dd368944929f70b2b2031a"
  },
  {
    "url": "technical/lwm/index.html",
    "revision": "0ad7d488062ae60d99420db9cf46f9ba"
  },
  {
    "url": "technical/lwm/qa.html",
    "revision": "f586c47903dfde211e002e765f24c039"
  },
  {
    "url": "technical/lwm/qa1.html",
    "revision": "37af5635758cdba206bb0d73a9996896"
  },
  {
    "url": "technical/markdown/index.html",
    "revision": "2fec8155c91d748d22999d335fd0cf2f"
  },
  {
    "url": "technical/markdown/qa.html",
    "revision": "d6c9c38c6a738a1aa3fac89167bf0f2b"
  },
  {
    "url": "technical/node/index.html",
    "revision": "d2ef60f238ff1068be136519cb40360a"
  },
  {
    "url": "technical/node/qa.html",
    "revision": "4c36fbb067ea5f62fcf2bd7d009321ff"
  },
  {
    "url": "technical/vue/qa.html",
    "revision": "afb6c2220b243a191ed5434147294696"
  },
  {
    "url": "timeAxis.html",
    "revision": "0cf24e639d8583dc37d5094110433a28"
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
