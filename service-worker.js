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
    "revision": "30f6ae4bbb325f4b4fcb5bb86fcff946"
  },
  {
    "url": "about.html",
    "revision": "280e21d2543adc06885087d9778cd889"
  },
  {
    "url": "assets/css/0.styles.c5796ae9.css",
    "revision": "4749fb12bf58d69b51ec510ba2dd92a1"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.ec5a03c3.js",
    "revision": "93411ed68ab9960f8c9bef732138d30f"
  },
  {
    "url": "assets/js/10.ed9a0120.js",
    "revision": "0bf8b7950af6256d9a49ed461c9f0f8d"
  },
  {
    "url": "assets/js/11.9eae6909.js",
    "revision": "e327cffdf59c1a6dedfe85e25ebf705b"
  },
  {
    "url": "assets/js/12.f64a66ab.js",
    "revision": "8990bf06d1abb5920d41b86bccbe2609"
  },
  {
    "url": "assets/js/13.f66a952a.js",
    "revision": "84f99aa52648d465dfb19d4bab5f350b"
  },
  {
    "url": "assets/js/14.00a41560.js",
    "revision": "a1fa950f79fd9bcb7dba1fe5b64cd100"
  },
  {
    "url": "assets/js/15.b5006dc6.js",
    "revision": "871dbe7906838e4c86a44573339d6337"
  },
  {
    "url": "assets/js/16.1736fcbe.js",
    "revision": "577952b7db950312b140fefea98988d6"
  },
  {
    "url": "assets/js/17.bf5fe53c.js",
    "revision": "4c80e8e1f34fbac0f3e467e31c9709ca"
  },
  {
    "url": "assets/js/18.7d0c109c.js",
    "revision": "615f9c83320f78d38a9f03da39d130bc"
  },
  {
    "url": "assets/js/19.168fe4f2.js",
    "revision": "0826fe8789777b40aaf08eda329fe7e5"
  },
  {
    "url": "assets/js/20.acee8bc5.js",
    "revision": "23cb1898a04865bedde7b73b07e41900"
  },
  {
    "url": "assets/js/21.61dc27d0.js",
    "revision": "7236f1c1adbb08396bae401a930831f0"
  },
  {
    "url": "assets/js/22.b9dd2e9d.js",
    "revision": "612b3423a0a9e509f797ad38447965b4"
  },
  {
    "url": "assets/js/23.45ed81e1.js",
    "revision": "705e03be069b5bcf0ac6848fad19e295"
  },
  {
    "url": "assets/js/24.324b1d43.js",
    "revision": "37cf75fb5ce1dd31de01b707a2377e5a"
  },
  {
    "url": "assets/js/25.2caf253f.js",
    "revision": "8d9081433565b44b80835876a0da86d9"
  },
  {
    "url": "assets/js/26.0c04c6d0.js",
    "revision": "9bcbf2effe58333374aab370cba4817d"
  },
  {
    "url": "assets/js/27.d547efed.js",
    "revision": "68f32f4a66a54d757c65f1308c095e79"
  },
  {
    "url": "assets/js/28.23410654.js",
    "revision": "490f22ee4154c6d504fc50a533187211"
  },
  {
    "url": "assets/js/29.6c6e1dfe.js",
    "revision": "4b6a28c5a9199e32a7087f9f86e361d6"
  },
  {
    "url": "assets/js/3.8633f736.js",
    "revision": "aea8d593bb901d449cebbbfb81ebba80"
  },
  {
    "url": "assets/js/30.5105ee2a.js",
    "revision": "ea7beeceb8d1a7973ec182465b9fbfff"
  },
  {
    "url": "assets/js/31.e4379a08.js",
    "revision": "97e8d542cd95f8dd60bf347267b94f83"
  },
  {
    "url": "assets/js/32.9ae978f2.js",
    "revision": "00a5de0403614ba22c947e2ead6710c5"
  },
  {
    "url": "assets/js/33.b545c646.js",
    "revision": "1591fc1c0676abdb34f8c70e383d1d1e"
  },
  {
    "url": "assets/js/34.d5d8df00.js",
    "revision": "be38018e9d9cc474815848e601251f4f"
  },
  {
    "url": "assets/js/35.dc31537e.js",
    "revision": "2229fdf5e447675dcc70f2567d135682"
  },
  {
    "url": "assets/js/36.cc03815b.js",
    "revision": "02946f2bc15e50c336b3a76c84003d26"
  },
  {
    "url": "assets/js/37.313e7f41.js",
    "revision": "efa3bb78528ea136359e55f68e1af77f"
  },
  {
    "url": "assets/js/38.796f03f1.js",
    "revision": "cc132343595ba47f71dad92de570695e"
  },
  {
    "url": "assets/js/39.465cc4f4.js",
    "revision": "55827823a21d180728dffc4884c52e15"
  },
  {
    "url": "assets/js/4.c7c9798b.js",
    "revision": "fb03138d99b9631bb54447e212b083c9"
  },
  {
    "url": "assets/js/5.dcd4638e.js",
    "revision": "b84ce7204341b80ec36c56064704f02a"
  },
  {
    "url": "assets/js/6.7aa9fb18.js",
    "revision": "ef39a19b3d586ab82ece37c3d8a41beb"
  },
  {
    "url": "assets/js/7.317030f6.js",
    "revision": "e65031ca84c7e73039d075fd802663ba"
  },
  {
    "url": "assets/js/8.3564f6f9.js",
    "revision": "b14a08da9ef51d207b92974fc7c18c6f"
  },
  {
    "url": "assets/js/9.ba911606.js",
    "revision": "e580207506e4c168fb0c0e1077e90166"
  },
  {
    "url": "assets/js/app.f1adeaa8.js",
    "revision": "811490ad272b3148f99fcc05fb771b4d"
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
    "revision": "011561b8da851af521665719cb23a427"
  },
  {
    "url": "my-life/index.html",
    "revision": "ebc8f090c52500b1a5edd2bd2c5d55b0"
  },
  {
    "url": "my-life/life1.html",
    "revision": "4fec64ff31538b521bbd45fcd877b907"
  },
  {
    "url": "my-life/life2.html",
    "revision": "0cf19cf4388952426acb9099de009d40"
  },
  {
    "url": "my-life/life3.html",
    "revision": "ec9c9cc4d569a10834545d9754e99d78"
  },
  {
    "url": "my-life/life4.html",
    "revision": "3b47289b66657d5d24c28c6833d56548"
  },
  {
    "url": "my-life/life5.html",
    "revision": "3effb93dd6a3f3f886e20df3572033f4"
  },
  {
    "url": "my-life/life6.html",
    "revision": "ed790fe6314904bb662b65b864c18e46"
  },
  {
    "url": "my-life/life7.html",
    "revision": "86b267636d853a4a0712f8519225f350"
  },
  {
    "url": "my-life/life8.html",
    "revision": "52aa7054340fca1a27bf549c517e5165"
  },
  {
    "url": "technical/css/index.html",
    "revision": "5228c90c49c7fd383d4cee0c7668d5c2"
  },
  {
    "url": "technical/css/qa.html",
    "revision": "2b5cdee1685bc9e9bab83941a88c1c72"
  },
  {
    "url": "technical/index.html",
    "revision": "58319744d57396f7cfba0abc646d7ebc"
  },
  {
    "url": "technical/js/index.html",
    "revision": "cfc802758da1cbe0ab8760d55c7730ff"
  },
  {
    "url": "technical/js/qa.html",
    "revision": "60790b9b83786d1fc5cbf825ca4bb523"
  },
  {
    "url": "technical/js/qa1.html",
    "revision": "6e588276ebfa102799908f569d85bb37"
  },
  {
    "url": "technical/lwm/index.html",
    "revision": "2f5ea764d57a5ca2a0cf984531b02b7c"
  },
  {
    "url": "technical/lwm/qa.html",
    "revision": "8dcca957dd44cbcd9b4a9d7f164ca1fa"
  },
  {
    "url": "technical/lwm/qa1.html",
    "revision": "2e84976b3bf2935e9b10461e88a1ea79"
  },
  {
    "url": "technical/markdown/index.html",
    "revision": "a8baab90f727daec4d819e7d77939bba"
  },
  {
    "url": "technical/markdown/qa.html",
    "revision": "701a2698965bf833a00d75798ffbaabc"
  },
  {
    "url": "technical/node/index.html",
    "revision": "3c1a2a4bc1a07bba5f800fae96ce070f"
  },
  {
    "url": "technical/node/qa.html",
    "revision": "6b5299815501ffb6dca88e20245a177b"
  },
  {
    "url": "timeAxis.html",
    "revision": "31b47e3f3aa7815f680a73c616007d4c"
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
