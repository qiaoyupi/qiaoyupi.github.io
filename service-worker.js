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
    "revision": "7a61863b285b28688427bef9c02f002f"
  },
  {
    "url": "about.html",
    "revision": "1a5b6b0fb7aca5a7a4852f74db2cc380"
  },
  {
    "url": "assets/css/0.styles.98310daa.css",
    "revision": "25153a6beceb5e82b4cc949d09127b09"
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
    "url": "assets/js/12.a4815b17.js",
    "revision": "726e40f1b1bfcf29872a11ba8b36d36c"
  },
  {
    "url": "assets/js/13.a1c9b86e.js",
    "revision": "237e00b42ca3c2ee4adfd6f3f7ebcd36"
  },
  {
    "url": "assets/js/14.3eab814b.js",
    "revision": "7e9f3b0cb4c99326b9bac364a2bc8f6d"
  },
  {
    "url": "assets/js/15.4694d44e.js",
    "revision": "02ab24fff56161be254b3bf8fe53faca"
  },
  {
    "url": "assets/js/16.d8474cc5.js",
    "revision": "adfd188ca530546470e1debd0ad45fe9"
  },
  {
    "url": "assets/js/17.a0e46c64.js",
    "revision": "f437c13fa7a17f0cc86ea68d92bb9b6a"
  },
  {
    "url": "assets/js/18.2f5cd1db.js",
    "revision": "5d21c923d60015ab77f1c3577de2ca03"
  },
  {
    "url": "assets/js/19.e2bb49f8.js",
    "revision": "8944cb229cbc85f6926948ac33acf23c"
  },
  {
    "url": "assets/js/20.2b16bcba.js",
    "revision": "17b1ce6aea0f9199c80e809b665db113"
  },
  {
    "url": "assets/js/21.89f8ed8a.js",
    "revision": "e3fc0c916c104302a1c15ccf47d89ae0"
  },
  {
    "url": "assets/js/22.e2507fec.js",
    "revision": "63b9e091d6bfe1092641190130a3152d"
  },
  {
    "url": "assets/js/23.07760e6c.js",
    "revision": "a8179197738222a5b9d567371012cab2"
  },
  {
    "url": "assets/js/24.bf981881.js",
    "revision": "8bc9a489e7a4b59882103f74035f80a4"
  },
  {
    "url": "assets/js/25.bfe67084.js",
    "revision": "7a7a21345393219299e6e685a9f37215"
  },
  {
    "url": "assets/js/26.ace54d00.js",
    "revision": "9c5778d6d856960d67c75e04ad4c0fbd"
  },
  {
    "url": "assets/js/27.5b72bb68.js",
    "revision": "93da1eca772f1cf103491d2dca8d1222"
  },
  {
    "url": "assets/js/28.e84dc21d.js",
    "revision": "2c39e5802bb7a6ba4c56fbf4f8f01aea"
  },
  {
    "url": "assets/js/29.26eaecb5.js",
    "revision": "0f3d0daf30a7436eea52bc35246bd48b"
  },
  {
    "url": "assets/js/3.4df6de8c.js",
    "revision": "fff974a3010ae027c5af74a32cd1c5d6"
  },
  {
    "url": "assets/js/30.4b122164.js",
    "revision": "cbfe7ffe83e0d1b913594bdc290b1c88"
  },
  {
    "url": "assets/js/31.32ecbb11.js",
    "revision": "dd9e08ebbc895f790da122754a607b05"
  },
  {
    "url": "assets/js/32.673091b2.js",
    "revision": "f31097228e7f3a174a69c7d36f3e2dff"
  },
  {
    "url": "assets/js/33.d7811b74.js",
    "revision": "5fdc614190ea3cbc814ea686f1a2e7b0"
  },
  {
    "url": "assets/js/34.7d446248.js",
    "revision": "44a74f67e4e2edd1a95fca32fd6bf8ac"
  },
  {
    "url": "assets/js/35.388143db.js",
    "revision": "8e824fcf0cd0ba1c5fc9d0ee303faa71"
  },
  {
    "url": "assets/js/36.54caa8c8.js",
    "revision": "e70864d54d454c15714570ea223591bf"
  },
  {
    "url": "assets/js/37.cb29d920.js",
    "revision": "e501b75f7358ebb638db362de23af027"
  },
  {
    "url": "assets/js/38.6645d691.js",
    "revision": "aff37df35a89cebf7a349f329801edf7"
  },
  {
    "url": "assets/js/39.2fd7f968.js",
    "revision": "47354dd94c4cde00f336ed91b0be9656"
  },
  {
    "url": "assets/js/4.5f7c21dc.js",
    "revision": "206fc3515e98acacc4cdeebd2569da7a"
  },
  {
    "url": "assets/js/40.81df72ac.js",
    "revision": "6b5840b1388e0429440153352d149063"
  },
  {
    "url": "assets/js/41.5a3cc5c5.js",
    "revision": "be850f1a2919bb4c5495f1922594d163"
  },
  {
    "url": "assets/js/42.a060b2f8.js",
    "revision": "df5050e387dd92a89aad156257ae465c"
  },
  {
    "url": "assets/js/43.bf2759e3.js",
    "revision": "7ec1e6797d772ae85da16511547eef1b"
  },
  {
    "url": "assets/js/44.9f8f4ec2.js",
    "revision": "0403712faf46427a3477864249be9b62"
  },
  {
    "url": "assets/js/45.f393973c.js",
    "revision": "7c37a7900cf80b4d1875beb99eaa692c"
  },
  {
    "url": "assets/js/46.39990798.js",
    "revision": "e260247b2ddec703b1340dfdd0d83f10"
  },
  {
    "url": "assets/js/47.bb81c3de.js",
    "revision": "546f4b04caddcf9ac48fac51c7f395d3"
  },
  {
    "url": "assets/js/48.36366eab.js",
    "revision": "1ba015525260c2dc661cc59f8e61563f"
  },
  {
    "url": "assets/js/49.83ecd61f.js",
    "revision": "fce5132027dd8ce1dc88fd0acd3b485c"
  },
  {
    "url": "assets/js/5.6f1db697.js",
    "revision": "69f22b54993a8f4148a68e65d38eb1d6"
  },
  {
    "url": "assets/js/50.734b23b3.js",
    "revision": "7a7f913f2912bf7628f0df48f8b3e28f"
  },
  {
    "url": "assets/js/51.41b71e35.js",
    "revision": "de9e5ec2a16b6cde34d3c48da15da3ca"
  },
  {
    "url": "assets/js/52.134fba5c.js",
    "revision": "b385b6360d3f2581d0808e140b441bcc"
  },
  {
    "url": "assets/js/53.8262b152.js",
    "revision": "84faefa1f31bb84940ff6a2e17cf07bc"
  },
  {
    "url": "assets/js/6.fcea3c03.js",
    "revision": "a9f9a186e7deda79d264b10f34e4f53b"
  },
  {
    "url": "assets/js/7.40edc0e3.js",
    "revision": "00bb0f1c158cf942832c623e4405c05b"
  },
  {
    "url": "assets/js/8.2454877b.js",
    "revision": "08b4e977cc10979dce068e8a4d0c479a"
  },
  {
    "url": "assets/js/9.fc8a6f71.js",
    "revision": "e0ea8bb4ebc2273a2791edafabfaf6b8"
  },
  {
    "url": "assets/js/app.456e7531.js",
    "revision": "09c6f1f6a9895fb3d10fdc7d36a46309"
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
    "revision": "5c8f89e986cc416e48c161dcbb5bc66a"
  },
  {
    "url": "my-life/index.html",
    "revision": "2fac945f636da4e508914dfc2b79ab21"
  },
  {
    "url": "my-life/life1.html",
    "revision": "21f82d72f6dafc93b3ade91e206ac2ad"
  },
  {
    "url": "my-life/life10.html",
    "revision": "95384fe2d0db1fa12ff5ed7e31a876f7"
  },
  {
    "url": "my-life/life11.html",
    "revision": "afd529668a1de4b34d7d7654950812a0"
  },
  {
    "url": "my-life/life12.html",
    "revision": "3246376fb1fafaaf2b8e761078a5b1b6"
  },
  {
    "url": "my-life/life2.html",
    "revision": "80be5c800855c496302a8936ffc74f06"
  },
  {
    "url": "my-life/life3.html",
    "revision": "2dd6814271364741911e572508a5a3b8"
  },
  {
    "url": "my-life/life4.html",
    "revision": "e2c776801a7568674bf6b19af36e4e6d"
  },
  {
    "url": "my-life/life5.html",
    "revision": "e26cab5472bac60fb82185e0cb365588"
  },
  {
    "url": "my-life/life6.html",
    "revision": "51841b7296fc24cb3fb2c08b01d39ab9"
  },
  {
    "url": "my-life/life7.html",
    "revision": "de3241f6900a8396656f2dee519e1149"
  },
  {
    "url": "my-life/life8.html",
    "revision": "cc98506d764b3ec7f9167de4a580ed6d"
  },
  {
    "url": "my-life/life9.html",
    "revision": "04ad1ab6fe24a0e814da3886deb59a00"
  },
  {
    "url": "technical/css/index.html",
    "revision": "7c441af470de0411207ea216d1df63de"
  },
  {
    "url": "technical/css/qa.html",
    "revision": "94695c2f4004d9ac7ce700df926093e2"
  },
  {
    "url": "technical/css/qa1.html",
    "revision": "67fe57dc55346b19e09690c592b71396"
  },
  {
    "url": "technical/css/qa2.html",
    "revision": "daba4bed518675a9fb0a9154af6437bc"
  },
  {
    "url": "technical/index.html",
    "revision": "204d5c02769c2df376d9c28c2c4abe3d"
  },
  {
    "url": "technical/js/index.html",
    "revision": "93077fed0af95e951573bb2563980afb"
  },
  {
    "url": "technical/js/qa.html",
    "revision": "d5d8b8dc1ca20274eb3ada502b653148"
  },
  {
    "url": "technical/js/qa1.html",
    "revision": "fba71c059cc7db00bd3c1bd51ec2cd07"
  },
  {
    "url": "technical/js/qa2.html",
    "revision": "d97d2565323988bb86a07f4597f26f0e"
  },
  {
    "url": "technical/js/qa3.html",
    "revision": "0b9b1ac2a4261515ee11d93a65e459da"
  },
  {
    "url": "technical/lwm/index.html",
    "revision": "1334c792bff69e7e3dc243d2f33ef28f"
  },
  {
    "url": "technical/lwm/qa.html",
    "revision": "2ad5739cae3893abcea4a72d42a36a17"
  },
  {
    "url": "technical/lwm/qa1.html",
    "revision": "cba5eb539fd708505b3d2f311052baf1"
  },
  {
    "url": "technical/markdown/index.html",
    "revision": "cb2237e1af07d49fbd6090b26186b22a"
  },
  {
    "url": "technical/markdown/qa.html",
    "revision": "01fa7cad99944ed1ee2d843730ee0bb2"
  },
  {
    "url": "technical/node/index.html",
    "revision": "336e8732ed490519365f8f02cd269d43"
  },
  {
    "url": "technical/node/qa.html",
    "revision": "2738cf24c7d0908a1157bd55c05b8e26"
  },
  {
    "url": "technical/vue/qa.html",
    "revision": "b9f2eac47ab274120b8df5ae1b13907a"
  },
  {
    "url": "timeAxis.html",
    "revision": "cb202e8bcf40adbbc2f31a414fd8c56a"
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
