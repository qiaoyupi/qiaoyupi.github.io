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
    "revision": "2c876ef5359da982c00aa54f2c94860c"
  },
  {
    "url": "about.html",
    "revision": "a9173588b1b0500ac7ceb094c1cd3135"
  },
  {
    "url": "assets/css/0.styles.d107948f.css",
    "revision": "a88639bfd9122ff8964a65ac345dc6e0"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.5cd179d5.js",
    "revision": "66ae70f1842fc38ea4fba1980bb3b118"
  },
  {
    "url": "assets/js/10.7813d8f3.js",
    "revision": "26f1e3624dfb534029541a6aa53b6d8e"
  },
  {
    "url": "assets/js/11.f9254fda.js",
    "revision": "a6d57d3dbb43327f37fd0ab789b7c98c"
  },
  {
    "url": "assets/js/12.804958d7.js",
    "revision": "ff2f4e6ae4de906bedeef9befb0a91c0"
  },
  {
    "url": "assets/js/13.2c97cc6e.js",
    "revision": "ddf4202168ee535209e769d6f11e1ce8"
  },
  {
    "url": "assets/js/14.7806cfe5.js",
    "revision": "98462ae25292b2802ee53030e445ae5a"
  },
  {
    "url": "assets/js/15.6236ba54.js",
    "revision": "d9347d97f86b8dd049b474eca68b8b98"
  },
  {
    "url": "assets/js/16.216fb19e.js",
    "revision": "f76b62fb2657174ed80163b2e53f1632"
  },
  {
    "url": "assets/js/17.1fe8cf61.js",
    "revision": "ea0a35e0e2ce581fda4c8531b80eda4c"
  },
  {
    "url": "assets/js/18.8637de63.js",
    "revision": "f1a9927ae80ddca6cab31c33b77c4560"
  },
  {
    "url": "assets/js/19.5cff26a7.js",
    "revision": "002ab74f1381eb9e618c59384ddbf6f4"
  },
  {
    "url": "assets/js/20.9d47535c.js",
    "revision": "02d2c03b3710f54ce3c66881a07a9c23"
  },
  {
    "url": "assets/js/21.ea04cb96.js",
    "revision": "d5cf5a6484a4d9d8fba872932be49e2b"
  },
  {
    "url": "assets/js/22.64f49ac1.js",
    "revision": "e856718dad4eeacee44cbdf0be958ff1"
  },
  {
    "url": "assets/js/23.a79345e5.js",
    "revision": "ed8e67405e3fb6b077a9bcf590d8d196"
  },
  {
    "url": "assets/js/24.02c0efe1.js",
    "revision": "3427ca9992a5c2854db0804e2bc77186"
  },
  {
    "url": "assets/js/25.3de2d8c1.js",
    "revision": "5cfd6c76ae23d21a0f4802d742e71c6e"
  },
  {
    "url": "assets/js/26.b529deb4.js",
    "revision": "dc28e2c9822f788a97a3fa575d7d2150"
  },
  {
    "url": "assets/js/27.2311aba1.js",
    "revision": "2aac109081498ca794c5b308eede1f10"
  },
  {
    "url": "assets/js/28.188bd61e.js",
    "revision": "2f26d639fa4cc040587a5dc62ec84c17"
  },
  {
    "url": "assets/js/29.64819862.js",
    "revision": "5b5e31e32c618c5f2c7ba6d7d7072e60"
  },
  {
    "url": "assets/js/3.4b43e776.js",
    "revision": "4e2fafa67422d07fdbb766f99b8d0eb6"
  },
  {
    "url": "assets/js/30.bc5c8381.js",
    "revision": "0c517c65908f514ad7f5546984210090"
  },
  {
    "url": "assets/js/31.51113d60.js",
    "revision": "522e43124e8397eddb78e7453f98889c"
  },
  {
    "url": "assets/js/32.c0cd5d46.js",
    "revision": "129908f7feaff8b38b472c43488cdeca"
  },
  {
    "url": "assets/js/33.50e8d7f7.js",
    "revision": "6019281bc822d74d2346e08d1ee86e4b"
  },
  {
    "url": "assets/js/34.9df98115.js",
    "revision": "c96b9c1c0ad28492762036ffdc191f2a"
  },
  {
    "url": "assets/js/35.42f052d7.js",
    "revision": "5e680420309128c68eb1b62e5bd1f43c"
  },
  {
    "url": "assets/js/36.18bbac15.js",
    "revision": "627f8db1325f763d1c9cce0892cdea7c"
  },
  {
    "url": "assets/js/37.9f744efc.js",
    "revision": "0bd806adf5be188ef46a6ec7525ec990"
  },
  {
    "url": "assets/js/38.b73c6825.js",
    "revision": "80b5bd899cfcc26701a1d539e0283b69"
  },
  {
    "url": "assets/js/39.4a4603d4.js",
    "revision": "517b49aa69cabc7141be513e78895d48"
  },
  {
    "url": "assets/js/4.f8a463fd.js",
    "revision": "ec246d3759797a7fe18876bea4322811"
  },
  {
    "url": "assets/js/40.05917c7e.js",
    "revision": "4e6e55234923d1f22ec675625b68c880"
  },
  {
    "url": "assets/js/41.ef25a7ed.js",
    "revision": "3c8fd10867ff1410c9c9b7d0c0971e57"
  },
  {
    "url": "assets/js/42.ae9d4a4f.js",
    "revision": "dcc66da62fd8f35392ee967ec0615539"
  },
  {
    "url": "assets/js/5.46d9ea04.js",
    "revision": "5ad81f96d35e88ff6b702066ea422c73"
  },
  {
    "url": "assets/js/6.7388b0b2.js",
    "revision": "21254c5e1ef91d6ed2afb9e04e588f0b"
  },
  {
    "url": "assets/js/7.bd4aed36.js",
    "revision": "ce0bf48adb24517d8201c0f3ec450c7f"
  },
  {
    "url": "assets/js/8.e979823a.js",
    "revision": "6d420a171ad37ef96669cb3b33045c8a"
  },
  {
    "url": "assets/js/9.5c73618a.js",
    "revision": "f2c59f68a4d20d3cba9e06354523031d"
  },
  {
    "url": "assets/js/app.4085af67.js",
    "revision": "15cf0e6a9c98d9b30e97c4c35944ebaf"
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
    "revision": "1eb18dddf81f28cd78d529b28fe3aa5b"
  },
  {
    "url": "my-life/index.html",
    "revision": "2ca69c46fa7042f71ae2df770e29933c"
  },
  {
    "url": "my-life/life1.html",
    "revision": "a964de8babf3ca550611c81b6ef168d8"
  },
  {
    "url": "my-life/life2.html",
    "revision": "557b65153eac90f3dd930f5b2b30dbf7"
  },
  {
    "url": "my-life/life3.html",
    "revision": "627be6918c476193467cc53e8f1c11d2"
  },
  {
    "url": "my-life/life4.html",
    "revision": "628a918f1289cd6248cc4a7394f31848"
  },
  {
    "url": "my-life/life5.html",
    "revision": "e78e2bf1d2894cb0eb187ae1da0a424f"
  },
  {
    "url": "my-life/life6.html",
    "revision": "f0e9df8fbbccb933d5cfa2a4a715c621"
  },
  {
    "url": "my-life/life7.html",
    "revision": "a221ffa5a28b4fbf86e1a00c52198d06"
  },
  {
    "url": "my-life/life8.html",
    "revision": "cb1b5480bde8ca8f71f71991a772533c"
  },
  {
    "url": "my-life/life9.html",
    "revision": "1d2a8da1e02b5a5f9b1661fa50448cce"
  },
  {
    "url": "technical/css/index.html",
    "revision": "d97b7d32a14b6455914609bf287577fc"
  },
  {
    "url": "technical/css/qa.html",
    "revision": "e646a6ec01e97e3f0286d8b57800da62"
  },
  {
    "url": "technical/index.html",
    "revision": "919e53754e7a15cea962e80fc929d8fb"
  },
  {
    "url": "technical/js/index.html",
    "revision": "98b8359630d8c1faed8b96b7bd9f073f"
  },
  {
    "url": "technical/js/qa.html",
    "revision": "f62bc6f21385490549a4ed79f8c0594f"
  },
  {
    "url": "technical/js/qa1.html",
    "revision": "ca20095e6055dfe6397ee4edbcbd8bb7"
  },
  {
    "url": "technical/js/qa2.html",
    "revision": "0599a2f4eac35acb96a40763c4cf885b"
  },
  {
    "url": "technical/lwm/index.html",
    "revision": "57774a3288b85623d7305fd749999495"
  },
  {
    "url": "technical/lwm/qa.html",
    "revision": "fa69a8b96555b6250aa8798f49ac817c"
  },
  {
    "url": "technical/lwm/qa1.html",
    "revision": "e96d8de036ad2d816aa61433e23f0507"
  },
  {
    "url": "technical/markdown/index.html",
    "revision": "d4d50b556899d25af866a283c1b0dab1"
  },
  {
    "url": "technical/markdown/qa.html",
    "revision": "12e0861b038fc1cc0bd51ac92b9fd211"
  },
  {
    "url": "technical/node/index.html",
    "revision": "ad81861560c7cb621bcaea4b4e6ae4f0"
  },
  {
    "url": "technical/node/qa.html",
    "revision": "ffe68fba89793c2ba779d9013a2bf591"
  },
  {
    "url": "timeAxis.html",
    "revision": "739724b4e49cbc858bcdb2c320e6b2fb"
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
