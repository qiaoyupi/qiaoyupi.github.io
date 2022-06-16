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
    "revision": "601ac845440139ce7455f853289b0ed0"
  },
  {
    "url": "about.html",
    "revision": "1d717ebc98e7f95cd8aaef10bd78af15"
  },
  {
    "url": "assets/css/0.styles.2971263e.css",
    "revision": "029baf3b64e85189d4215c387a4ab3ae"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.fc592487.js",
    "revision": "e29d8a0bf49be7b4ab695b5846a5aac6"
  },
  {
    "url": "assets/js/10.6228555b.js",
    "revision": "6dc72084f724affbdc4a788d4e2b4782"
  },
  {
    "url": "assets/js/11.89fabfd8.js",
    "revision": "f74e06c5d91ef94fb77e668e668eceb0"
  },
  {
    "url": "assets/js/12.7ebbbd91.js",
    "revision": "46a2b191f715b3215689a6e26ac18f80"
  },
  {
    "url": "assets/js/13.5b38087c.js",
    "revision": "277e7cd59d513108ab85e16a3d3ed4b4"
  },
  {
    "url": "assets/js/14.21536cb0.js",
    "revision": "1c3083f85e1830e6438770fa7c9c089e"
  },
  {
    "url": "assets/js/15.4d26533e.js",
    "revision": "5e0a22bc49e9481fe998e57c64ba1489"
  },
  {
    "url": "assets/js/16.45620594.js",
    "revision": "808908909cc0738fbd3d25a217cb7de6"
  },
  {
    "url": "assets/js/17.34385124.js",
    "revision": "0be4762a782ad591d9dfa1e5b8162150"
  },
  {
    "url": "assets/js/18.fe55a1de.js",
    "revision": "761965f81591522d6a8664703027cc77"
  },
  {
    "url": "assets/js/19.21b1bb62.js",
    "revision": "6de4e8c0323a7fdcd77df70e5eb4fdfb"
  },
  {
    "url": "assets/js/20.157fcfe6.js",
    "revision": "d328bfabe11ead6293317648b100ecf4"
  },
  {
    "url": "assets/js/21.e7f8e100.js",
    "revision": "7aa57b3a72bf42076b1c1db480bcb478"
  },
  {
    "url": "assets/js/22.b75874ed.js",
    "revision": "7bef7b0e87dc985649477e7ae3b0ebfc"
  },
  {
    "url": "assets/js/23.d3138aa6.js",
    "revision": "9e0caae504c4d213df0d7756d45d68dd"
  },
  {
    "url": "assets/js/24.fbea9da6.js",
    "revision": "5867e0816851cdf7434921d323de12dd"
  },
  {
    "url": "assets/js/25.7e6ce3e0.js",
    "revision": "6cb915e198bf36418a0d6710ac999d75"
  },
  {
    "url": "assets/js/26.9dee0f86.js",
    "revision": "751e42aab1943960b074ae47d30f5720"
  },
  {
    "url": "assets/js/27.5e620e7c.js",
    "revision": "ce0b390715768a62a8ab6f815665d7a7"
  },
  {
    "url": "assets/js/28.31829333.js",
    "revision": "d8fe0b7d6fc02160541fff7c994f399a"
  },
  {
    "url": "assets/js/29.b26b4aa3.js",
    "revision": "ec855a305092ff1946932650467ed190"
  },
  {
    "url": "assets/js/3.495d9da0.js",
    "revision": "debedbde4ef1a28787db009c13f7a3e9"
  },
  {
    "url": "assets/js/30.9d6bd994.js",
    "revision": "8d28863c54637f85c9c10382b7602ef8"
  },
  {
    "url": "assets/js/31.bab857bb.js",
    "revision": "2dbbe365ae301c2f411814a4e4c03a16"
  },
  {
    "url": "assets/js/32.f1902ed1.js",
    "revision": "369239b20a519b07ea63c0ecd2fcfc1d"
  },
  {
    "url": "assets/js/33.0199f7d3.js",
    "revision": "6db7d7bf6f2ed3e7e9b81665bd8460e4"
  },
  {
    "url": "assets/js/34.a2a0fa5f.js",
    "revision": "c63c548c930c2b5865d9daf6624adf9c"
  },
  {
    "url": "assets/js/35.6ce2a08d.js",
    "revision": "c19a66b484858baab776d1ba291cf5bf"
  },
  {
    "url": "assets/js/36.9ae1a023.js",
    "revision": "4aa14e0064385df2aef1bcb4563dc5b3"
  },
  {
    "url": "assets/js/37.8fc64910.js",
    "revision": "16ee2311473895327da1603201faa0fd"
  },
  {
    "url": "assets/js/38.44864dc0.js",
    "revision": "034b267a47b65e0084252449aa01c7e2"
  },
  {
    "url": "assets/js/39.b2736a08.js",
    "revision": "cd4d6dab50394e880f34bd01690706db"
  },
  {
    "url": "assets/js/4.03b20361.js",
    "revision": "0a6260eb98e4026b50f6d45304dbb716"
  },
  {
    "url": "assets/js/40.a62c376b.js",
    "revision": "6df51fe6a28a20c954d081785deaefcc"
  },
  {
    "url": "assets/js/41.2a6c6132.js",
    "revision": "2a71ee930e121a608a3f3b453f204eb5"
  },
  {
    "url": "assets/js/42.3c5d1f1c.js",
    "revision": "9a22900f8947d1c5ae241bfc7a2eb234"
  },
  {
    "url": "assets/js/43.8d3a2328.js",
    "revision": "afa17875f43ba84a65a813eb4f55f9cc"
  },
  {
    "url": "assets/js/44.71baacce.js",
    "revision": "9c84d735a6e285a10fdb24cc32c64c10"
  },
  {
    "url": "assets/js/5.558411d8.js",
    "revision": "da311bb3584d17def6677a82ab641d74"
  },
  {
    "url": "assets/js/6.5528e037.js",
    "revision": "dedb23a5cd05f3b7552c507f22230f26"
  },
  {
    "url": "assets/js/7.0456bdc6.js",
    "revision": "d8c6254d21f651429f63e141082ab923"
  },
  {
    "url": "assets/js/8.74c86fba.js",
    "revision": "700ab93e052eb1bdfcaba3618d89ea72"
  },
  {
    "url": "assets/js/9.4e400534.js",
    "revision": "b0ada725ec6329b27b91864cab1f7a83"
  },
  {
    "url": "assets/js/app.505be0fc.js",
    "revision": "07c98fedcead805b4af1ba98990d87b8"
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
    "revision": "907c7b91b5527798c122e24ccb4c86dc"
  },
  {
    "url": "my-life/index.html",
    "revision": "15f38f34377fb7d6f0c1c7eca4608e87"
  },
  {
    "url": "my-life/life1.html",
    "revision": "88e2c2153b812af113c3f922e32e53dd"
  },
  {
    "url": "my-life/life2.html",
    "revision": "60e8126df658f119ab8f08713378e9d5"
  },
  {
    "url": "my-life/life3.html",
    "revision": "040e2d9c5123ff84a63b9450b882ebb8"
  },
  {
    "url": "my-life/life4.html",
    "revision": "196920b0fdab8266bbc7223f0021e33c"
  },
  {
    "url": "my-life/life5.html",
    "revision": "cb6cc1edb75799f2858b2bae43c42c69"
  },
  {
    "url": "my-life/life6.html",
    "revision": "d37014d0785c1e6b5384e30fda6966da"
  },
  {
    "url": "my-life/life7.html",
    "revision": "f5e7da77fdd932672fe6de7bdac8e8a3"
  },
  {
    "url": "my-life/life8.html",
    "revision": "dd313c6167ec975a5f52e4b91a3385b7"
  },
  {
    "url": "my-life/life9.html",
    "revision": "59c198d4df4c0855913643ade0be5c8f"
  },
  {
    "url": "technical/css/index.html",
    "revision": "5f0c81b018ba76ff69784d8797ae57b0"
  },
  {
    "url": "technical/css/qa.html",
    "revision": "dea1285b4d65f5023f219912bf304388"
  },
  {
    "url": "technical/css/qa1.html",
    "revision": "a199a86ea5d884c41aabb4e02a1c32fb"
  },
  {
    "url": "technical/index.html",
    "revision": "f9f05611200c8dfa080f52c4246c3a55"
  },
  {
    "url": "technical/js/index.html",
    "revision": "d2cfa43df1fcb07b731750099e363b7f"
  },
  {
    "url": "technical/js/qa.html",
    "revision": "de08cff1ab0e628fc10e2a0d54429a5d"
  },
  {
    "url": "technical/js/qa1.html",
    "revision": "5152fc0744c15ef5348bd10fc3b02c56"
  },
  {
    "url": "technical/js/qa2.html",
    "revision": "fb31cb11580651b26c68a4e936793f1c"
  },
  {
    "url": "technical/lwm/index.html",
    "revision": "70021b38677674b44eab9a91a69b83c5"
  },
  {
    "url": "technical/lwm/qa.html",
    "revision": "5c99554b65e24ac717a7782228d4d1ab"
  },
  {
    "url": "technical/lwm/qa1.html",
    "revision": "d8674bb1267fb24a0d18a03107ff3b7d"
  },
  {
    "url": "technical/markdown/index.html",
    "revision": "26e7e48699f6fe37ef115dd42689c6ef"
  },
  {
    "url": "technical/markdown/qa.html",
    "revision": "23e8e064f894ea5aaf9f6821fda8b420"
  },
  {
    "url": "technical/node/index.html",
    "revision": "2ad22dc2e99c4edf0dc17f62ee6748d9"
  },
  {
    "url": "technical/node/qa.html",
    "revision": "4b4aa6c810c28b2ed675abaee6f2c68c"
  },
  {
    "url": "timeAxis.html",
    "revision": "64739c8fb0e8a8f17ff8f5020ef17731"
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
