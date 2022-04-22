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
    "revision": "ed42485e828741817539d70406a1b8a1"
  },
  {
    "url": "about.html",
    "revision": "f87433eafcc35d25aa0738919323c2b3"
  },
  {
    "url": "assets/css/0.styles.158ccfcd.css",
    "revision": "3438389bda47e25fee55e10d53a5f0a3"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.e628d76d.js",
    "revision": "293d0794af1cdf7cbd6d5d6c26c2b115"
  },
  {
    "url": "assets/js/11.d89c940c.js",
    "revision": "f93d0f5395a2a8dc6339620144cc5e0d"
  },
  {
    "url": "assets/js/12.8fc40f3f.js",
    "revision": "ba8127ae65f7b165723d65da0513e8f5"
  },
  {
    "url": "assets/js/13.c082dbe9.js",
    "revision": "a2b2d46e9a8623dc5dddfa93b7020cb6"
  },
  {
    "url": "assets/js/2.21a6181a.js",
    "revision": "795ed7c736d33245c55e8dbfcae14ca3"
  },
  {
    "url": "assets/js/3.d07fd8be.js",
    "revision": "ca9a2df2880cab24ff984c9cd9c39d21"
  },
  {
    "url": "assets/js/4.f629f8b0.js",
    "revision": "5cc5e763bb6bd796071b876724b4bc52"
  },
  {
    "url": "assets/js/5.d0aa5975.js",
    "revision": "a6b6d827f277560972b3e6d919cc0b9b"
  },
  {
    "url": "assets/js/6.bef294ee.js",
    "revision": "d62c0cc11db12a74011e2d1ada4a05db"
  },
  {
    "url": "assets/js/7.32910088.js",
    "revision": "a3b283ac5f10973aeabc738ebc551540"
  },
  {
    "url": "assets/js/8.005b46cc.js",
    "revision": "c280fd7e527d4e40bfba44ffbd64afa2"
  },
  {
    "url": "assets/js/9.ec70fe37.js",
    "revision": "5161f5797ee245785966816d15e9c0d1"
  },
  {
    "url": "assets/js/app.5df28ccc.js",
    "revision": "e51616b2577f53c78bd7bf3282e97a74"
  },
  {
    "url": "history.html",
    "revision": "14c7752704ab9ae7d55cac9c7a6592ad"
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
    "revision": "3e5c09b4cc5058d5ac270045edf327f0"
  },
  {
    "url": "logo.jpeg",
    "revision": "25f18e8a7c47f392bbef09064e01c9c5"
  },
  {
    "url": "songlian.html",
    "revision": "1f51f4162d0efe9cff1f96c7b0f790b6"
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
