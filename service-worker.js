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
    "revision": "109afc160c99e10b0b2743051f818842"
  },
  {
    "url": "about.html",
    "revision": "353d6f8073d1551b0c7f8cf4a1bc4666"
  },
  {
    "url": "assets/css/0.styles.1d38b27e.css",
    "revision": "2216feeb2b81063b4d6b4f799f4cb186"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.225e4604.js",
    "revision": "5f345a842363ea95305792ca1ffcf832"
  },
  {
    "url": "assets/js/11.08a5b1cc.js",
    "revision": "05cf3fa3b8320c64d9ffa1538ea12eac"
  },
  {
    "url": "assets/js/12.82fd3f55.js",
    "revision": "626781c43b14f7290b6d3c17c8a526a1"
  },
  {
    "url": "assets/js/13.fd4e2e57.js",
    "revision": "277cacef9980c49c969713b27a164da0"
  },
  {
    "url": "assets/js/14.b1d2bbcb.js",
    "revision": "1aa5286d454c1ab8cebfa665f738ff33"
  },
  {
    "url": "assets/js/15.f575786f.js",
    "revision": "2ef8a50c2076cf0c8e1eb0232e4ee955"
  },
  {
    "url": "assets/js/16.59c03dcf.js",
    "revision": "22e2d64d552b58c492979b2459b32db0"
  },
  {
    "url": "assets/js/17.bc269991.js",
    "revision": "b56e35feec1dca1b54bbcac652092f99"
  },
  {
    "url": "assets/js/18.b22a5497.js",
    "revision": "83de709f4314ac6f167f5c60a8eff4e6"
  },
  {
    "url": "assets/js/19.0b2c5f31.js",
    "revision": "d680d2fce81307675d6c7ee9dd43da9a"
  },
  {
    "url": "assets/js/2.712a7c4a.js",
    "revision": "63cd1225f662845695889c9a820e568a"
  },
  {
    "url": "assets/js/20.23b30be4.js",
    "revision": "0b284c5cf2a95c251640682e8b1d93c4"
  },
  {
    "url": "assets/js/21.b868d2dc.js",
    "revision": "4d64219a404409c65fa5d766dc5d31f4"
  },
  {
    "url": "assets/js/22.5d0ce4e8.js",
    "revision": "492725467aa560b45acbbf2f20277030"
  },
  {
    "url": "assets/js/23.36491600.js",
    "revision": "b644c196028e28261ef0110f6641cd00"
  },
  {
    "url": "assets/js/24.cb42fe30.js",
    "revision": "65f3c680a0d2dad56722332a297f1044"
  },
  {
    "url": "assets/js/25.6cb0aa7c.js",
    "revision": "2d9d6952ebf4ca5f6875ba468b17ebcf"
  },
  {
    "url": "assets/js/26.5f3fb982.js",
    "revision": "a4278d84ec1f885efabf391592138e53"
  },
  {
    "url": "assets/js/3.2bf8d69c.js",
    "revision": "98b43773275600f40ddaeb0c60a21692"
  },
  {
    "url": "assets/js/4.c625d032.js",
    "revision": "29afa439f73c4b632df2c881f8d3b675"
  },
  {
    "url": "assets/js/5.83d1da02.js",
    "revision": "a713ec5fe7189b01aa6fc08588564bf9"
  },
  {
    "url": "assets/js/6.a76d585b.js",
    "revision": "6eca091d8f99695fdcd6bd97546fafdd"
  },
  {
    "url": "assets/js/7.25b1b5b4.js",
    "revision": "4f5de9a76f470abd9b29a0bdeb7ed5ec"
  },
  {
    "url": "assets/js/8.3e4cb0d5.js",
    "revision": "75563b43424a65dc85e2f9c1c22504ea"
  },
  {
    "url": "assets/js/9.cfc8455c.js",
    "revision": "781173797c3f647962c4aaf272a7d269"
  },
  {
    "url": "assets/js/app.e81136df.js",
    "revision": "2ce30681555c96857528debbabe58c28"
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
    "revision": "4959791393ab6960b5c9bf17c0f7a117"
  },
  {
    "url": "my-life/index.html",
    "revision": "893485a209da1fb8bd76e684e577fbdf"
  },
  {
    "url": "my-life/life1.html",
    "revision": "a3e98aee0b8daa023f9559fafd9d9f29"
  },
  {
    "url": "my-life/life2.html",
    "revision": "bfb984c16435461bcf7e37653738a1fa"
  },
  {
    "url": "technical/css/index.html",
    "revision": "a52b08ed91a22b1c142f144906be3fcd"
  },
  {
    "url": "technical/css/qa.html",
    "revision": "2922664c9c978adb7e043758e7fcfa4b"
  },
  {
    "url": "technical/index.html",
    "revision": "4a99ef9c216bc5f614e73420be00b8d7"
  },
  {
    "url": "technical/js/index.html",
    "revision": "62487bafaa7d2bab2e033423ca839940"
  },
  {
    "url": "technical/js/qa.html",
    "revision": "dfdf471eef727e1f7ae77dfbce7cf123"
  },
  {
    "url": "technical/lwm/index.html",
    "revision": "4a8b1535d23d956b913aeec26cb31e76"
  },
  {
    "url": "technical/lwm/qa1.html",
    "revision": "7dd64099119cbaccb57132457f17548c"
  },
  {
    "url": "technical/node/index.html",
    "revision": "ff839b9cd344f2ab9c6a3657dfa1cdd7"
  },
  {
    "url": "technical/node/qa.html",
    "revision": "9741cda3e4089cb4c8be23d3a729c860"
  },
  {
    "url": "timeAxis.html",
    "revision": "78e4ba476adf06d3f9a8f3f269cb5f85"
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
