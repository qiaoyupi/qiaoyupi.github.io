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
    "revision": "5f13775e0f3b3e6fb981bea0b9969246"
  },
  {
    "url": "about.html",
    "revision": "3c73b78236134a58e84ccdc1e69bb3c2"
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
    "url": "assets/js/10.73b62990.js",
    "revision": "35a2133d01ed92e19588de5401b24057"
  },
  {
    "url": "assets/js/11.81f0eb42.js",
    "revision": "365819a459fd3635a801dc2be02d6522"
  },
  {
    "url": "assets/js/12.634abab5.js",
    "revision": "18fd5c917ce25b2e26454462361dfab3"
  },
  {
    "url": "assets/js/13.a94f2822.js",
    "revision": "2bba43367bc33052ec28eebaa9724084"
  },
  {
    "url": "assets/js/14.c481c664.js",
    "revision": "b6eaac1b595cff9d97dc9c4ff12c5365"
  },
  {
    "url": "assets/js/15.52b868f3.js",
    "revision": "bd41034d0b153f29c0ffb44431f9bad8"
  },
  {
    "url": "assets/js/16.ce201591.js",
    "revision": "b76335509389401a647bad933834e44a"
  },
  {
    "url": "assets/js/17.5dfa2626.js",
    "revision": "9d335997617a37e5f84f3c283cfde836"
  },
  {
    "url": "assets/js/18.cd76481d.js",
    "revision": "866c345ea2a18f3141e0ffc9bc20de93"
  },
  {
    "url": "assets/js/19.2aa5bf00.js",
    "revision": "6f00e366f6e933d767bc14462d487eed"
  },
  {
    "url": "assets/js/2.ead3ae88.js",
    "revision": "c282122eafb0b9060f054cbd3f32f3d8"
  },
  {
    "url": "assets/js/20.33b7face.js",
    "revision": "698344686ae80a90eff270d0bb0a1ca2"
  },
  {
    "url": "assets/js/21.b71e9063.js",
    "revision": "6c93436fda20b7118771ada1d58bd6a4"
  },
  {
    "url": "assets/js/22.82063e28.js",
    "revision": "2ff15bb7a80ca7978a992f85ddb923d1"
  },
  {
    "url": "assets/js/23.ac07fb2a.js",
    "revision": "22ce168c0dae26d2872e84918dcef6db"
  },
  {
    "url": "assets/js/24.d6cb04bb.js",
    "revision": "f83c99cfebf2444c2c0c4037f3895d78"
  },
  {
    "url": "assets/js/25.1797b5ec.js",
    "revision": "703df4b7b324d7a4ab6b1a079852bac9"
  },
  {
    "url": "assets/js/26.43f9c58a.js",
    "revision": "b87a646871318b1123a6b49bf9b10d5f"
  },
  {
    "url": "assets/js/3.e3ff5ad3.js",
    "revision": "c5e515274affb52dd9f2fddf82612462"
  },
  {
    "url": "assets/js/4.da1b93f4.js",
    "revision": "daeef9f81707320c8fe296b51ba3f921"
  },
  {
    "url": "assets/js/5.8e21b88a.js",
    "revision": "22a1f158b70b0c493321cef4b5a9563a"
  },
  {
    "url": "assets/js/6.ee36c4d8.js",
    "revision": "0169b8d11bfd518feb9f74f28efd56a9"
  },
  {
    "url": "assets/js/7.e5149022.js",
    "revision": "f0d72c723b37dc55e5199fd316c9ae95"
  },
  {
    "url": "assets/js/8.f132c5b0.js",
    "revision": "b377cf700f2d8aa20fec0c1a5d161440"
  },
  {
    "url": "assets/js/9.e5322e4e.js",
    "revision": "09ad25c0d504f300afabc0e44395f232"
  },
  {
    "url": "assets/js/app.62e83a07.js",
    "revision": "392c34ebdd671fa25ad70df9ee58fd1f"
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
    "revision": "5d2178ee3a9e71d4a6b93217d09cab52"
  },
  {
    "url": "my-life/index.html",
    "revision": "08c6768cce5d0a939bbb6d119990dd57"
  },
  {
    "url": "my-life/life1.html",
    "revision": "e787dfb6c3a5da78957697f1e0ed7fe4"
  },
  {
    "url": "my-life/life2.html",
    "revision": "b22de89c62d64cd7db01ffdd43119c3c"
  },
  {
    "url": "technical/css/index.html",
    "revision": "dc61e40c38861c21f4b020a1624bb172"
  },
  {
    "url": "technical/css/qa.html",
    "revision": "9a9c97c96c1245c3301ac5c002c5edb7"
  },
  {
    "url": "technical/index.html",
    "revision": "6a1bf4f43b6d591b2777562886cf7ba5"
  },
  {
    "url": "technical/js/index.html",
    "revision": "a49189512deb51b2bced03dbddbcd8a7"
  },
  {
    "url": "technical/js/qa.html",
    "revision": "079d60200977743126c2c70864dd2323"
  },
  {
    "url": "technical/lwm/index.html",
    "revision": "e34c6f3f3f28738688651e442f52312d"
  },
  {
    "url": "technical/lwm/qa1.html",
    "revision": "676cac500bd0fe040e2aec742f6c1f71"
  },
  {
    "url": "technical/node/index.html",
    "revision": "06ca2da598595f740906a9fff3530451"
  },
  {
    "url": "technical/node/qa.html",
    "revision": "1e9ab8ad0e9123fc7286321fee9cbf92"
  },
  {
    "url": "timeAxis.html",
    "revision": "ac2d2cccf748ad38197b2cd0c18db8aa"
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
