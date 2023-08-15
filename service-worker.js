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
    "revision": "c8db09edfd0459524ad57416f28d3916"
  },
  {
    "url": "about.html",
    "revision": "b9019874394521b72104979bf0ee687d"
  },
  {
    "url": "assets/css/0.styles.98310daa.css",
    "revision": "25153a6beceb5e82b4cc949d09127b09"
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
    "url": "assets/js/1.9180162b.js",
    "revision": "0101486d78599891af35f18d8be278b9"
  },
  {
    "url": "assets/js/10.cd432b99.js",
    "revision": "0ac16dc8324d0c4c15c0c742af4fca25"
  },
  {
    "url": "assets/js/11.8c49e009.js",
    "revision": "1f2d48481ebf684aaacc765c47f9a293"
  },
  {
    "url": "assets/js/12.74c9ad64.js",
    "revision": "77f40e14ec01495218979f336a9bfe3f"
  },
  {
    "url": "assets/js/13.b9dbee03.js",
    "revision": "28d0135bdb1ea3602ed497e0be15247c"
  },
  {
    "url": "assets/js/14.223be322.js",
    "revision": "7207c1ea4fe401065b531b50af2827d4"
  },
  {
    "url": "assets/js/15.34afce68.js",
    "revision": "ff59d62242b0f842dfb33e62ef02fd42"
  },
  {
    "url": "assets/js/16.57edaf4b.js",
    "revision": "0f77e00ea7c4c3aabf8188dfbec90cdb"
  },
  {
    "url": "assets/js/17.831b68c6.js",
    "revision": "59d08185749ec6e9c6548f1ed55782ef"
  },
  {
    "url": "assets/js/18.051d29c0.js",
    "revision": "058fd8d235564d19c393ebe5d715f8e4"
  },
  {
    "url": "assets/js/19.a3711591.js",
    "revision": "0333bcc49c4207bb9e29250263834bd1"
  },
  {
    "url": "assets/js/20.74ad2698.js",
    "revision": "962cde2f723a31f82e6cafb3ee08d8ed"
  },
  {
    "url": "assets/js/21.02b8ec2b.js",
    "revision": "f9b0e66257cd84fc65191db22ad7a54f"
  },
  {
    "url": "assets/js/22.e8f0fcc2.js",
    "revision": "9abc621d215ba676d02de716b2acc649"
  },
  {
    "url": "assets/js/23.8ff69b0a.js",
    "revision": "f0720033df534c586569ebb8da87c26a"
  },
  {
    "url": "assets/js/24.f42f77df.js",
    "revision": "697e635b399da2173cb2be8ed74e8975"
  },
  {
    "url": "assets/js/25.34c91360.js",
    "revision": "7c1391c03b5b8d9bc92664ebba52c34e"
  },
  {
    "url": "assets/js/26.7b995b49.js",
    "revision": "d1af28cd947becfc430621a8c51c6727"
  },
  {
    "url": "assets/js/27.a12951d7.js",
    "revision": "b60c325df7fe41b7b5faccad706d5581"
  },
  {
    "url": "assets/js/28.a3eb8cc0.js",
    "revision": "cc235e0b129fe6464236ac9e539bc527"
  },
  {
    "url": "assets/js/29.615c5197.js",
    "revision": "2945c114ddbe9b62ea79a7bea607fe30"
  },
  {
    "url": "assets/js/3.494aa1b5.js",
    "revision": "0c6ba21f7769f9a5d713e0f45bd1d9b9"
  },
  {
    "url": "assets/js/30.44a7b6e8.js",
    "revision": "5f7714e01f3e7f78c255fb46f290efbc"
  },
  {
    "url": "assets/js/31.870c893f.js",
    "revision": "189942e55af1d3c409633ead39f4c263"
  },
  {
    "url": "assets/js/32.596b313a.js",
    "revision": "b7901d55df825fb6cdd63c31974b5148"
  },
  {
    "url": "assets/js/33.84889e30.js",
    "revision": "262bb9f769efdceb79d855c94f37cda2"
  },
  {
    "url": "assets/js/34.cea52314.js",
    "revision": "298f1459d9d61f525fb0d29bbe58ea85"
  },
  {
    "url": "assets/js/35.a5f82888.js",
    "revision": "dd0eeea37aaa28b9da3038f982f1a97e"
  },
  {
    "url": "assets/js/36.3dbf88b7.js",
    "revision": "f5927b65fbede9a58ea1a13e1ca2771c"
  },
  {
    "url": "assets/js/37.2bdc3cba.js",
    "revision": "6030ca4e1d089be718b0d082439663a5"
  },
  {
    "url": "assets/js/38.b6556b56.js",
    "revision": "700fb513c840591675867de1b42739fa"
  },
  {
    "url": "assets/js/39.94eed2eb.js",
    "revision": "be9d66a475b699fb55483a8a27346e67"
  },
  {
    "url": "assets/js/4.e0873704.js",
    "revision": "b577fe081cabaa60b7e76e5551e991ef"
  },
  {
    "url": "assets/js/40.d156788f.js",
    "revision": "26ee1b24891c7d3989f88599280f4142"
  },
  {
    "url": "assets/js/41.a2976d84.js",
    "revision": "eb4fecf3fa75724a63e7c368a5e1d89f"
  },
  {
    "url": "assets/js/42.ef0d015b.js",
    "revision": "63cef2b939b70058d2de0ac375cd9407"
  },
  {
    "url": "assets/js/43.2fe0997c.js",
    "revision": "fff18215589a4b252433cb0bb6e53454"
  },
  {
    "url": "assets/js/44.b2fde977.js",
    "revision": "68aef352be45246132abb8c5a86174bd"
  },
  {
    "url": "assets/js/45.eaa90685.js",
    "revision": "44ac3e6e4e3a67090fa11306550f42dc"
  },
  {
    "url": "assets/js/46.a3a9e634.js",
    "revision": "05b2b0dbbf8064556fdbdb8e54a614ca"
  },
  {
    "url": "assets/js/47.5c9e457b.js",
    "revision": "9f35b6dac48b6b7cd0dc0e38d96fc839"
  },
  {
    "url": "assets/js/48.4e0b1c27.js",
    "revision": "89b2a36bd646fdbb84d607233751295b"
  },
  {
    "url": "assets/js/49.430ea2b4.js",
    "revision": "b82b021a185dc8c7b990279899c4ac5b"
  },
  {
    "url": "assets/js/5.3a580cc7.js",
    "revision": "45d78fe4ef7c1306286173641b6e3374"
  },
  {
    "url": "assets/js/50.aa478c1a.js",
    "revision": "10b4a7e3a8403199c245ead291034d98"
  },
  {
    "url": "assets/js/51.d01be204.js",
    "revision": "83aef5e2ad350ab4499a177ff720a599"
  },
  {
    "url": "assets/js/52.9ab4f2f6.js",
    "revision": "a7eaa8c7d1a53df10b32bf75eb172cc2"
  },
  {
    "url": "assets/js/6.fcea3c03.js",
    "revision": "a9f9a186e7deda79d264b10f34e4f53b"
  },
  {
    "url": "assets/js/7.9be63d3a.js",
    "revision": "756edb2a43ca09135313beb3cd4ef8eb"
  },
  {
    "url": "assets/js/8.db1dce77.js",
    "revision": "0e97646b9c29c71b59346f969e574eca"
  },
  {
    "url": "assets/js/9.fc8a6f71.js",
    "revision": "e0ea8bb4ebc2273a2791edafabfaf6b8"
  },
  {
    "url": "assets/js/app.a8ee3bd3.js",
    "revision": "72742fef0d103c837c79cca0ed3e8f3e"
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
    "revision": "867361e5a6e23c55f6cc217725e65a41"
  },
  {
    "url": "my-life/index.html",
    "revision": "9829b9f20f6a2a98be77cebd68c3dc12"
  },
  {
    "url": "my-life/life10.html",
    "revision": "be487ffe3e7b15f527fc91653626bbf7"
  },
  {
    "url": "my-life/life11.html",
    "revision": "aa24e53ce898fbfef02b3201b743be5a"
  },
  {
    "url": "my-life/life12.html",
    "revision": "e506509ea39b6546df7138587f51c455"
  },
  {
    "url": "my-life/life2.html",
    "revision": "301188c938d7d9bba03ef996e9f774e4"
  },
  {
    "url": "my-life/life3.html",
    "revision": "315ca362734527893ed0ab306277862f"
  },
  {
    "url": "my-life/life4.html",
    "revision": "b3534e52dad04d6a7979234eaa35fb4c"
  },
  {
    "url": "my-life/life5.html",
    "revision": "bb2ab49b1b796caa82c0f4fdfb945146"
  },
  {
    "url": "my-life/life6.html",
    "revision": "9d3fa064b47db579ecd371cdd86e1a17"
  },
  {
    "url": "my-life/life7.html",
    "revision": "11d809e907f30ec92ac11c259c4cb9d3"
  },
  {
    "url": "my-life/life8.html",
    "revision": "af6bc4bcbd0fb543acdab14d4f239b01"
  },
  {
    "url": "my-life/life9.html",
    "revision": "28afbcf28be6eeaa28713a7e050cb49e"
  },
  {
    "url": "technical/css/index.html",
    "revision": "d472841c52e53ee751e24d42f7755b53"
  },
  {
    "url": "technical/css/qa.html",
    "revision": "80eca1122b024014d48b2a840ca414d6"
  },
  {
    "url": "technical/css/qa1.html",
    "revision": "dbc26f36b19a13e1aea889e583e1b85e"
  },
  {
    "url": "technical/css/qa2.html",
    "revision": "edd015ffef0b19db7a00256c00b3bbf0"
  },
  {
    "url": "technical/index.html",
    "revision": "b0804f04e15c2440267b566d6a3aef49"
  },
  {
    "url": "technical/js/index.html",
    "revision": "f0c173c29e1282d450d8977445a47452"
  },
  {
    "url": "technical/js/qa.html",
    "revision": "cb4c7c3000f73f3beff9959cb5ef0a35"
  },
  {
    "url": "technical/js/qa1.html",
    "revision": "95aae9a72da74e17a9e1b40a1c8bfd9a"
  },
  {
    "url": "technical/js/qa2.html",
    "revision": "2d599b3f9c8abc65b40b8aa9c2720464"
  },
  {
    "url": "technical/js/qa3.html",
    "revision": "9a1c644656e0c7dd6a133573a043e656"
  },
  {
    "url": "technical/lwm/index.html",
    "revision": "50e0e4b5fb528e57cd96b6204f3cce5a"
  },
  {
    "url": "technical/lwm/qa.html",
    "revision": "7d955aa04fca0a4365291feb10dd888e"
  },
  {
    "url": "technical/lwm/qa1.html",
    "revision": "fdef4aa88fed09b8115c60106eaa32b3"
  },
  {
    "url": "technical/markdown/index.html",
    "revision": "fc19db6b35022b18c7075c34d39e4e2c"
  },
  {
    "url": "technical/markdown/qa.html",
    "revision": "19f1faa0c51c3f37262c20d1f361628a"
  },
  {
    "url": "technical/node/index.html",
    "revision": "81a788cad80e4555edd0b3e637ad5469"
  },
  {
    "url": "technical/node/qa.html",
    "revision": "2a00b7b61686d41c79e5c2ac890ee8c8"
  },
  {
    "url": "technical/vue/qa.html",
    "revision": "5b501fc761e49b8746a19b40a0bfb9a8"
  },
  {
    "url": "timeAxis.html",
    "revision": "e060f3362592ef058839b484078874a4"
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
