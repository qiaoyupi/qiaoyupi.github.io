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
    "revision": "1d0988b25da69da2b62ba6dc7db9874d"
  },
  {
    "url": "about.html",
    "revision": "434a1a6c6f3d2265f135a973eb7b412e"
  },
  {
    "url": "assets/css/0.styles.53b7fb04.css",
    "revision": "574fd812073135d32867496b64ef54a0"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.57062de6.js",
    "revision": "b80b194de0a3238bf1deb6ae36fd81be"
  },
  {
    "url": "assets/js/10.302a21ff.js",
    "revision": "5cae9cea42069e72023a0359e6cb07bc"
  },
  {
    "url": "assets/js/11.eab25122.js",
    "revision": "9460a28a20016dfe282eaed4021eb3e5"
  },
  {
    "url": "assets/js/12.15d67332.js",
    "revision": "c5109816a238d4da7459c59bbbf8b086"
  },
  {
    "url": "assets/js/13.005fed66.js",
    "revision": "db8ca2aacd20e7415ba422844da4d970"
  },
  {
    "url": "assets/js/14.300910f6.js",
    "revision": "0f4de41d27ed0ef63fd66fe1ab07fba6"
  },
  {
    "url": "assets/js/15.2021ec3d.js",
    "revision": "387d3c69dd2b0f86fa0b74d34c93cea3"
  },
  {
    "url": "assets/js/16.71b4ce99.js",
    "revision": "0da82d45e16b618e17233f33b92cfb91"
  },
  {
    "url": "assets/js/17.5d3f09f9.js",
    "revision": "68c7fb62260f27b8ff04f98d4d7e1799"
  },
  {
    "url": "assets/js/18.b3e3df0e.js",
    "revision": "8a5c504dc325452f59f2c9d65c1bac89"
  },
  {
    "url": "assets/js/19.effa2ca9.js",
    "revision": "4a481795b33595b4ca77e23807243831"
  },
  {
    "url": "assets/js/20.678d21e8.js",
    "revision": "b0ef2ad35a50cfecb1b1b84fa67c4e8c"
  },
  {
    "url": "assets/js/21.0ef3b914.js",
    "revision": "672d683ec30fda5fb7156fcba5235773"
  },
  {
    "url": "assets/js/22.7eb8b710.js",
    "revision": "df96dab00dd9baafeb37a9390c1ec8c8"
  },
  {
    "url": "assets/js/23.d4f72b4c.js",
    "revision": "dc65e172d099f9410087f0a2d7367bcb"
  },
  {
    "url": "assets/js/24.78d07a67.js",
    "revision": "8eb5efef885abb21d3bfd9f224721669"
  },
  {
    "url": "assets/js/25.4a625b5f.js",
    "revision": "11b27c9a037774f6c4bcb39ddefa980c"
  },
  {
    "url": "assets/js/26.b54fa56c.js",
    "revision": "a1c77cac3b1e65a23deabe918bc0f4ed"
  },
  {
    "url": "assets/js/27.86727a16.js",
    "revision": "c4a49c32b8f4a3b231ac25ca11c3a6f2"
  },
  {
    "url": "assets/js/28.06aa9323.js",
    "revision": "744dff4b97bd9a2944a9478947ad41a9"
  },
  {
    "url": "assets/js/29.cd28bdfc.js",
    "revision": "ac2dc7f233f28deb01aa517733628af9"
  },
  {
    "url": "assets/js/3.701b1ea5.js",
    "revision": "eb6d9c4a933099d73be0d975d26c6a60"
  },
  {
    "url": "assets/js/30.7249017d.js",
    "revision": "12232e5a36cd2c2ad9254acf7820faf9"
  },
  {
    "url": "assets/js/31.c660401d.js",
    "revision": "6bf04d124b526e5cc0cedfd3d9c0da66"
  },
  {
    "url": "assets/js/32.8cb2168a.js",
    "revision": "471b8662f6401d92314b9e0763bcebb0"
  },
  {
    "url": "assets/js/33.9ce647bd.js",
    "revision": "a1514996dd49b090f2a09e691cd35f1a"
  },
  {
    "url": "assets/js/34.434e593e.js",
    "revision": "e96d3e8b3232db8b5af322cadb8b3040"
  },
  {
    "url": "assets/js/35.b2a19d2f.js",
    "revision": "d2153a6f2a5569e8e7d826f3d7950eee"
  },
  {
    "url": "assets/js/36.bf79cee1.js",
    "revision": "d3f6e4418bedfe0be28751877f4a6125"
  },
  {
    "url": "assets/js/37.b8254673.js",
    "revision": "d677a83c287984b68aa8b253656d5d1e"
  },
  {
    "url": "assets/js/38.b50e36a9.js",
    "revision": "7e70a11f9ad950d561a066e645af6cf0"
  },
  {
    "url": "assets/js/39.0394e1a5.js",
    "revision": "9036767ba0b1eb43558827d37d7ed448"
  },
  {
    "url": "assets/js/4.a18eb6e6.js",
    "revision": "092f59ddae1cad068b404ddb32b8a71c"
  },
  {
    "url": "assets/js/40.ba2e0483.js",
    "revision": "c7451e8a32c6107dd251a1974ff5ab42"
  },
  {
    "url": "assets/js/41.29bd9151.js",
    "revision": "58dab4ffcfca591453b8254f605191f7"
  },
  {
    "url": "assets/js/42.70bcce66.js",
    "revision": "1b16564d891e90808132e3c6078a4e7a"
  },
  {
    "url": "assets/js/43.beae79fc.js",
    "revision": "8bacf0f72fdc0cc22fffaab0a4284b43"
  },
  {
    "url": "assets/js/44.8ba6e498.js",
    "revision": "ead725eff103efc9a8e2f7637b2e9dbe"
  },
  {
    "url": "assets/js/45.2a79d27f.js",
    "revision": "7d81af922f04fa8234852247fb503348"
  },
  {
    "url": "assets/js/5.e4b50e24.js",
    "revision": "0e278cc1b6860c64fb37f1fc5477971c"
  },
  {
    "url": "assets/js/6.5c3daab7.js",
    "revision": "8246f89469603b8b66e7d05120e63319"
  },
  {
    "url": "assets/js/7.096f03b5.js",
    "revision": "d0b0e63598044c8676f2ff2a12d77685"
  },
  {
    "url": "assets/js/8.63265a0a.js",
    "revision": "8c0d7cd056176bd5e8742f3add176bdb"
  },
  {
    "url": "assets/js/9.ae091a4f.js",
    "revision": "56511a53837ce45ae1e9ef2cc597199c"
  },
  {
    "url": "assets/js/app.ddb88207.js",
    "revision": "a5a51a49ca2ed090ad53635206882047"
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
    "revision": "e42cc521f14c270ba0c3133f765cdf93"
  },
  {
    "url": "my-life/index.html",
    "revision": "aba7e5fd5e76a5da07a0b9013a20bdb1"
  },
  {
    "url": "my-life/life1.html",
    "revision": "969c2199fe3b431e3e1eb2284aabed63"
  },
  {
    "url": "my-life/life2.html",
    "revision": "33b3039bcfd34fdbc3d12260d5c89e93"
  },
  {
    "url": "my-life/life3.html",
    "revision": "e8f77e37fc98c8133dfb2ad8662e0342"
  },
  {
    "url": "my-life/life4.html",
    "revision": "fe98a56a95ca598639ad885dcf708703"
  },
  {
    "url": "my-life/life5.html",
    "revision": "f43aaff8397eceeacabc4b0206bfb1e0"
  },
  {
    "url": "my-life/life6.html",
    "revision": "38de4b11b46f330b91ec2747cdf0e205"
  },
  {
    "url": "my-life/life7.html",
    "revision": "37a7c8cf44e9dc559a91e8ade5daa227"
  },
  {
    "url": "my-life/life8.html",
    "revision": "93c320f710ad33b31e5ac5bba21ce456"
  },
  {
    "url": "my-life/life9.html",
    "revision": "d1c830865450095593fb00abbb7cad3c"
  },
  {
    "url": "technical/css/index.html",
    "revision": "0c3aa6d2359e843e635f3950b7e88c6b"
  },
  {
    "url": "technical/css/qa.html",
    "revision": "6f193f3db62bf5ae08890f5ef49825ed"
  },
  {
    "url": "technical/css/qa1.html",
    "revision": "3d13c392d772f0f858a55e768d623ce6"
  },
  {
    "url": "technical/index.html",
    "revision": "f292b8a47190beba4cae1913011acf9c"
  },
  {
    "url": "technical/js/index.html",
    "revision": "45de49079b71e22f9b4a0a3f6f5a25c8"
  },
  {
    "url": "technical/js/qa.html",
    "revision": "b07da2b8aacd1835c67d24f180471570"
  },
  {
    "url": "technical/js/qa1.html",
    "revision": "4ebdb311951ba36f0463ef66c7114761"
  },
  {
    "url": "technical/js/qa2.html",
    "revision": "7037d2017280ea19628ec5727cddcc55"
  },
  {
    "url": "technical/lwm/index.html",
    "revision": "c5eebb49909836813a4921a871f6f3ef"
  },
  {
    "url": "technical/lwm/qa.html",
    "revision": "facecb1f0b20ac7ae58bfa3ea9b32df5"
  },
  {
    "url": "technical/lwm/qa1.html",
    "revision": "d036faef46085b0e15c027b4a17841ce"
  },
  {
    "url": "technical/markdown/index.html",
    "revision": "0262b1effce2a5b8a8ca980b24273d84"
  },
  {
    "url": "technical/markdown/qa.html",
    "revision": "5c353208f377c7f2e0fc377eb318892f"
  },
  {
    "url": "technical/node/index.html",
    "revision": "a4d263ba7dd0aff3674963d9f8a0d25f"
  },
  {
    "url": "technical/node/qa.html",
    "revision": "24cfa1be926dc66b9aaa77deaf1b8269"
  },
  {
    "url": "timeAxis.html",
    "revision": "e8ae1c932cd8f8010a07432eb9143546"
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
