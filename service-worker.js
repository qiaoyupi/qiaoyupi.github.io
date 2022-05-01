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
    "revision": "099da61cae01ec75e1bd59a72ff9d349"
  },
  {
    "url": "about.html",
    "revision": "7fd2c983ee58e0bb73ff8c89919f4f1f"
  },
  {
    "url": "assets/css/0.styles.b8378ba2.css",
    "revision": "3426b9b1cc91c15f06d0712c066e1a71"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.b83a9cc0.js",
    "revision": "e80451f91b2ecbeb3a2fbe38e4db3e0b"
  },
  {
    "url": "assets/js/10.c8fda7e6.js",
    "revision": "59cd60219054c31c781a1cc368e76fc1"
  },
  {
    "url": "assets/js/11.0ba85ded.js",
    "revision": "2ae154d5c0dc620555d107b4c8ae3621"
  },
  {
    "url": "assets/js/12.4ff8c4c2.js",
    "revision": "aea6168e91c2984a3be40b5d12a5a7a4"
  },
  {
    "url": "assets/js/13.c8258825.js",
    "revision": "043ac92d01fd174cb75ba0983c19954c"
  },
  {
    "url": "assets/js/14.d08a91b1.js",
    "revision": "fd6cb8f33b1972481095cf166fd584b2"
  },
  {
    "url": "assets/js/15.0470b61b.js",
    "revision": "1a1c4bdc09a1297c9ff1800b34e684c6"
  },
  {
    "url": "assets/js/16.38ba6452.js",
    "revision": "779a33d70a40d2f198bfe1c864d54d89"
  },
  {
    "url": "assets/js/17.a0596184.js",
    "revision": "18f2c1549cbdc98d59c3927b2e2b0eb3"
  },
  {
    "url": "assets/js/18.0b33a459.js",
    "revision": "fc1d25d5e4067f3ba764e6e24eb2c183"
  },
  {
    "url": "assets/js/19.f7ddcfb9.js",
    "revision": "f7346572a94688bb5154cc59dfb17007"
  },
  {
    "url": "assets/js/20.59298eff.js",
    "revision": "08df29bd82b661c5ac9fea9968f2a0cb"
  },
  {
    "url": "assets/js/21.bf9a392b.js",
    "revision": "9c93e1a4c5f6b9a63587c9d2f39231eb"
  },
  {
    "url": "assets/js/22.2bf3c9a5.js",
    "revision": "e4391249b6aea376607b38df5821a40e"
  },
  {
    "url": "assets/js/23.155de5cd.js",
    "revision": "d209e5eb12da17d5be60c290529180fd"
  },
  {
    "url": "assets/js/24.facb4212.js",
    "revision": "0d8735b74c1e24a0234cbcddbb67909b"
  },
  {
    "url": "assets/js/25.bf5d1217.js",
    "revision": "24075eec10ffcd5a9bab02793df30efc"
  },
  {
    "url": "assets/js/26.ccaa6fe9.js",
    "revision": "5d26eb25004c8229c74628b97d74938b"
  },
  {
    "url": "assets/js/27.aab35e9f.js",
    "revision": "204f00954c4842c9c7d29789997e2a78"
  },
  {
    "url": "assets/js/3.9a9c29bb.js",
    "revision": "eb0b4149183da3ca998859f85f23e595"
  },
  {
    "url": "assets/js/4.4ffd062b.js",
    "revision": "c1c93c9f246203060ac3359464c6d5be"
  },
  {
    "url": "assets/js/5.78a7d53b.js",
    "revision": "8ca7f0fd248b7d2540e4119c7fd582a3"
  },
  {
    "url": "assets/js/6.65a1ed7a.js",
    "revision": "dbec2430e2ef96b377b8a98c15d246c3"
  },
  {
    "url": "assets/js/7.ba9d00b6.js",
    "revision": "4ee60399ae7b90a8fcb2b9db4afe91fa"
  },
  {
    "url": "assets/js/8.25b61379.js",
    "revision": "31d0e35048f4f3aa973f3e37f9d8d75e"
  },
  {
    "url": "assets/js/9.a5e78245.js",
    "revision": "78d5e689e3febff5142bb79eb01eaa3d"
  },
  {
    "url": "assets/js/app.0488307d.js",
    "revision": "041f7cd293d1c40eed063b1056c1f9a7"
  },
  {
    "url": "bj-m.jpeg",
    "revision": "e29cb0630a3d8f0270f7e37cbe55be36"
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
    "revision": "b264ebe325b167a21089b5e4d5fa046a"
  },
  {
    "url": "logo.jpeg",
    "revision": "25f18e8a7c47f392bbef09064e01c9c5"
  },
  {
    "url": "my-life/index.html",
    "revision": "5de65a0b188f30ec53818b5cea97eb95"
  },
  {
    "url": "my-life/life1.html",
    "revision": "b00dde19dc5632779c75c89a4120269c"
  },
  {
    "url": "my-life/life2.html",
    "revision": "8a87a5c10b7283e1d7f3c083fce8ace9"
  },
  {
    "url": "technical/css/index.html",
    "revision": "ce991b1c89c2511b19b66d620b564478"
  },
  {
    "url": "technical/css/qa.html",
    "revision": "42375bc134fb329c0c29ce459f4122b8"
  },
  {
    "url": "technical/index.html",
    "revision": "b09fa451627853ce00a4cc24f524d22c"
  },
  {
    "url": "technical/js/index.html",
    "revision": "d08ff4ea5d2f13a72e5b9c751a941246"
  },
  {
    "url": "technical/js/qa.html",
    "revision": "c0eec9034c95cea82531eb2fcbc8b4d1"
  },
  {
    "url": "technical/lwm/index.html",
    "revision": "3bf733213ace63654bfdc34b7eef8b6a"
  },
  {
    "url": "technical/lwm/qa1.html",
    "revision": "c41ad6bf6eed5155fdba344ed9054636"
  },
  {
    "url": "technical/node/index.html",
    "revision": "a10e14fffe87d3935130a328b8095fde"
  },
  {
    "url": "technical/node/qa.html",
    "revision": "41eb80492909f76f8b81374ef07ecd15"
  },
  {
    "url": "timeAxis.html",
    "revision": "646da06271c4b494cd39341612a952f7"
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
