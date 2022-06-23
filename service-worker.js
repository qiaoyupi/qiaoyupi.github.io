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
    "revision": "4b22543a289ddebed92a8878f91f73ea"
  },
  {
    "url": "about.html",
    "revision": "e88604796ff4c4251be12512c509cc30"
  },
  {
    "url": "assets/css/0.styles.ccc8088e.css",
    "revision": "6bb6e571aaff498ac02194eb1bc8a69a"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.3edbc5fe.js",
    "revision": "b06a84ea237c70388e5a7e77eca383aa"
  },
  {
    "url": "assets/js/10.bd071af4.js",
    "revision": "5669800ec341331073751c22eaff0428"
  },
  {
    "url": "assets/js/11.27edeb9d.js",
    "revision": "55fed7a180a14181bad9e01379a4329d"
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
    "url": "assets/js/25.3b7c8c5f.js",
    "revision": "f1eb1ee4249284d6e9018a161173d9ce"
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
    "url": "assets/js/4.189f248f.js",
    "revision": "549a4ef49e778ea760f88f877552b99f"
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
    "url": "assets/js/5.f8b47974.js",
    "revision": "548237051f11f30bcdc1182dbbef8fd6"
  },
  {
    "url": "assets/js/6.7192f9c3.js",
    "revision": "b8ebd9b174394974298d070b2a3a7199"
  },
  {
    "url": "assets/js/7.16244f0a.js",
    "revision": "c1aa54689d4689667134d39a6daddbc3"
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
    "url": "assets/js/app.1dbf37f4.js",
    "revision": "d4fdcb9e0201b3ed5e4e3e52322e24ab"
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
    "revision": "f38b6f7e36001691ad5cd6c4ca5befb5"
  },
  {
    "url": "my-life/index.html",
    "revision": "63c537c2fa21b7ca9914e078236ab7b8"
  },
  {
    "url": "my-life/life1.html",
    "revision": "5c34b0df2f3b49442b4eb9168fed9408"
  },
  {
    "url": "my-life/life2.html",
    "revision": "94b5f1413b38ce81924f38bf002d2c8e"
  },
  {
    "url": "my-life/life3.html",
    "revision": "a9b357983b6b62a76d5f066a65e3dc50"
  },
  {
    "url": "my-life/life4.html",
    "revision": "3ffe09fe10e8674c45651ae851b8694c"
  },
  {
    "url": "my-life/life5.html",
    "revision": "bfc76d498964ca897c52a0e37535c466"
  },
  {
    "url": "my-life/life6.html",
    "revision": "49cd46b9bac74f9a176c61af22ed42dc"
  },
  {
    "url": "my-life/life7.html",
    "revision": "e08522e014fc0d0d6a80f193cf7d427b"
  },
  {
    "url": "my-life/life8.html",
    "revision": "d5c905e5497b84bbcf6780db0e3e68d1"
  },
  {
    "url": "my-life/life9.html",
    "revision": "2dfda5198227dbbefe58bb69d5cf68f2"
  },
  {
    "url": "technical/css/index.html",
    "revision": "d59eaefe396cc36fa94b7f29d4057593"
  },
  {
    "url": "technical/css/qa.html",
    "revision": "b41215790df5ad5b063a71fe2946915e"
  },
  {
    "url": "technical/css/qa1.html",
    "revision": "5a77d73e7fa2ad940579d0f83d5ae334"
  },
  {
    "url": "technical/index.html",
    "revision": "f23e932e18f55063ab3f12e382013bf6"
  },
  {
    "url": "technical/js/index.html",
    "revision": "769177576410c02d26fd9c4766cae995"
  },
  {
    "url": "technical/js/qa.html",
    "revision": "fa6b5ed432ca2c86bd4957b6d61992f2"
  },
  {
    "url": "technical/js/qa1.html",
    "revision": "8be206e230198b0c3b0264ada90a0907"
  },
  {
    "url": "technical/js/qa2.html",
    "revision": "593967bd7b294b9b0b945e4d266ac2ad"
  },
  {
    "url": "technical/js/qa3.html",
    "revision": "880a043baef76bd896827ac816835223"
  },
  {
    "url": "technical/lwm/index.html",
    "revision": "92da82f7873a16daca074a3f103e1edf"
  },
  {
    "url": "technical/lwm/qa.html",
    "revision": "0af54eb0604fe2d2a12983685b75de9b"
  },
  {
    "url": "technical/lwm/qa1.html",
    "revision": "c14909375ed06858ee4036a8a1de1826"
  },
  {
    "url": "technical/markdown/index.html",
    "revision": "14b8deda31a328f64d1642d373668814"
  },
  {
    "url": "technical/markdown/qa.html",
    "revision": "462372c2fd72d67b56b2b5a589ee718b"
  },
  {
    "url": "technical/node/index.html",
    "revision": "6176363908be24408950a2b7a4221283"
  },
  {
    "url": "technical/node/qa.html",
    "revision": "a06d2a0ab58e3e6c561738287db79000"
  },
  {
    "url": "technical/vue/qa.html",
    "revision": "3cbaff39bbc136d57bbcce6853e9f09f"
  },
  {
    "url": "timeAxis.html",
    "revision": "c2b26ec86ff01f4f6ac5d0318f786fd9"
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
