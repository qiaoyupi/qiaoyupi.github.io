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
    "revision": "704bceefdcd3eb02b9d27596fc450c8c"
  },
  {
    "url": "about.html",
    "revision": "e4ac110fe8578feca4fcefeb587b42b5"
  },
  {
    "url": "assets/css/0.styles.f2c246d0.css",
    "revision": "0b212dbdcf0f21f9a304fe7d52666b99"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.a6a6918e.js",
    "revision": "7986e62ea5ff9b38b8e327d3cecc608a"
  },
  {
    "url": "assets/js/11.c7bf4373.js",
    "revision": "3a7c99a0723eae39432c4ec64995bf96"
  },
  {
    "url": "assets/js/12.d49f1ba7.js",
    "revision": "87cb7bd50c64d42d07ba479c4ee97e25"
  },
  {
    "url": "assets/js/13.40a62ae0.js",
    "revision": "152d517722ab77067b9b72e9cc0865c0"
  },
  {
    "url": "assets/js/14.7478e112.js",
    "revision": "b146d6c0265aec82997c10a7cf8411b4"
  },
  {
    "url": "assets/js/15.31a27ece.js",
    "revision": "f4a8b9fc5735b269714b9b3861690ceb"
  },
  {
    "url": "assets/js/16.5bfbed7e.js",
    "revision": "4486216058a58bb0c8f68a82859b9719"
  },
  {
    "url": "assets/js/17.88ecaccc.js",
    "revision": "187e3a7ff7aab4942dd1bf2933951451"
  },
  {
    "url": "assets/js/18.77ea61ff.js",
    "revision": "593392ec8cf842f45cf18410fce9190e"
  },
  {
    "url": "assets/js/19.b1fed77a.js",
    "revision": "29c4fbf13afcfb7fc1bdd74d9e1cd397"
  },
  {
    "url": "assets/js/2.2834b672.js",
    "revision": "9fac81f5c99b8dda197deab614c569f1"
  },
  {
    "url": "assets/js/20.d09017d2.js",
    "revision": "5f190611cd21a803ba1d76b73c5d0b64"
  },
  {
    "url": "assets/js/21.ebc31e15.js",
    "revision": "05852564023ce3c4bbbd542c04ea5154"
  },
  {
    "url": "assets/js/22.2956ebfd.js",
    "revision": "49a0ececef8de42f679b6061db21f340"
  },
  {
    "url": "assets/js/23.cf303885.js",
    "revision": "cf3af1b70968609035c88780ece0660f"
  },
  {
    "url": "assets/js/24.5b09f5ec.js",
    "revision": "130486a1d19a75946b363f63dc87a0e1"
  },
  {
    "url": "assets/js/25.74e7f8d9.js",
    "revision": "eb365f60da534fac371452e23b34ec1e"
  },
  {
    "url": "assets/js/26.46f56fe8.js",
    "revision": "ed96c7178fb19be66fbcb34e463dfa9e"
  },
  {
    "url": "assets/js/27.a2a5d214.js",
    "revision": "6c38e496b2142c470fd0fa85268324c6"
  },
  {
    "url": "assets/js/28.156e38fe.js",
    "revision": "4617883a29caedb77533c9f348a2ba20"
  },
  {
    "url": "assets/js/3.7ff6ccd4.js",
    "revision": "e3ef9d7715d6a6cd6d4c45300c09dfdf"
  },
  {
    "url": "assets/js/4.73c50fd1.js",
    "revision": "2429376312684c5f35464a05e4eadc70"
  },
  {
    "url": "assets/js/5.91f54fcd.js",
    "revision": "a18c6c84cb2dbe450a8c608e07ccf1db"
  },
  {
    "url": "assets/js/6.ff9b1e00.js",
    "revision": "d176c39ffc528eebbb99a7a54d4d89bd"
  },
  {
    "url": "assets/js/7.f2264339.js",
    "revision": "162fd69d70e68de807533390eca56e41"
  },
  {
    "url": "assets/js/8.0214c336.js",
    "revision": "043f3071b6cb94a96754051bbc8c958a"
  },
  {
    "url": "assets/js/9.bc5497cd.js",
    "revision": "446de320abc1d5ea72e8ebd1327ac04b"
  },
  {
    "url": "assets/js/app.130f0abb.js",
    "revision": "5800ef151019fb089633707042ac144a"
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
    "revision": "4120eff971b45fcf9e9ae9cf431491c2"
  },
  {
    "url": "my-life/index.html",
    "revision": "5f0a4d84d5e66de9a296d53c6214e833"
  },
  {
    "url": "my-life/life1.html",
    "revision": "31ba577fb1e02f404abcaf9107824bb8"
  },
  {
    "url": "my-life/life2.html",
    "revision": "a54406868e0e1fd496e5a8cd246196c8"
  },
  {
    "url": "my-life/life3.html",
    "revision": "bf98433e3b73cdc69920ea8ecfed2cf3"
  },
  {
    "url": "my-life/life4.html",
    "revision": "8d191d6b9aba7a569572431783d88a0c"
  },
  {
    "url": "technical/css/index.html",
    "revision": "2d8cbc50e7b4f0b9a50938156bb832fd"
  },
  {
    "url": "technical/css/qa.html",
    "revision": "f88426ce5a597fd5f1f5b0925fa377aa"
  },
  {
    "url": "technical/index.html",
    "revision": "d67889fd669f960accdf8a752e203474"
  },
  {
    "url": "technical/js/index.html",
    "revision": "c81a6b68e17cc455bd797628026de907"
  },
  {
    "url": "technical/js/qa.html",
    "revision": "5853bb91b1191f55f0b6d0be8a0f8269"
  },
  {
    "url": "technical/lwm/index.html",
    "revision": "3658d44e9bd9315cead088d85e6f665d"
  },
  {
    "url": "technical/lwm/qa1.html",
    "revision": "4d8ff6f70b4898f6949d45803f22cee5"
  },
  {
    "url": "technical/node/index.html",
    "revision": "5bf136d1758665317a7d4acc265df892"
  },
  {
    "url": "technical/node/qa.html",
    "revision": "71d20b3fba4fb002c525532fc6e890b7"
  },
  {
    "url": "timeAxis.html",
    "revision": "775423f6a3e4bfedd370303095e3190f"
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
