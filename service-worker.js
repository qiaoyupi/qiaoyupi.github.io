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
    "revision": "b2c7fb14681522ab1534330b8b20235a"
  },
  {
    "url": "about.html",
    "revision": "546fe28629f4b6ca0e233e9dfe06d400"
  },
  {
    "url": "assets/css/0.styles.030ae91f.css",
    "revision": "108851801cfcbc5c0db60eb3b3e963c8"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.46202ceb.js",
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
    "url": "assets/js/14.325f0899.js",
    "revision": "6335dd4589dd2408fc78b5ffa6bf3d02"
  },
  {
    "url": "assets/js/15.c6f798ad.js",
    "revision": "51827b61eecebfb2a20d5d56ad7ae2f6"
  },
  {
    "url": "assets/js/16.f93c973b.js",
    "revision": "edc8c517b5632c43fa736ba3ac26c57a"
  },
  {
    "url": "assets/js/17.ac9e537f.js",
    "revision": "e98abd12aafe1fadaffcaa5839b3a3d3"
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
    "url": "assets/js/20.cad58f32.js",
    "revision": "630f3d7565539c925e0c5b9fe39c4af1"
  },
  {
    "url": "assets/js/21.8a95ae6d.js",
    "revision": "a1799383f8625d5dc604bfd9c43bd6f5"
  },
  {
    "url": "assets/js/22.338ec08d.js",
    "revision": "775701364272147cb2f993ef1a142d15"
  },
  {
    "url": "assets/js/23.df810fd6.js",
    "revision": "0c231cf136dddc89c583c67dbda8eaed"
  },
  {
    "url": "assets/js/24.dcc4edff.js",
    "revision": "4fc5b57f9993a79ca606de996ac16080"
  },
  {
    "url": "assets/js/25.bfe67084.js",
    "revision": "7a7a21345393219299e6e685a9f37215"
  },
  {
    "url": "assets/js/26.34a00a20.js",
    "revision": "c57477ce6b13942520a2adc1b571f22c"
  },
  {
    "url": "assets/js/27.39e2feda.js",
    "revision": "64ae8acd252dc2a600c040a1984148bf"
  },
  {
    "url": "assets/js/28.e84dc21d.js",
    "revision": "2c39e5802bb7a6ba4c56fbf4f8f01aea"
  },
  {
    "url": "assets/js/29.2b4c9dc6.js",
    "revision": "8ff13465e0df0e09759404e7e404bedf"
  },
  {
    "url": "assets/js/3.4df6de8c.js",
    "revision": "fff974a3010ae027c5af74a32cd1c5d6"
  },
  {
    "url": "assets/js/30.a31c7465.js",
    "revision": "72d773cdb6dc091e2848245f1c2d9c52"
  },
  {
    "url": "assets/js/31.bb3feb3f.js",
    "revision": "4f4af953df7f65169213a710ff5a3dc8"
  },
  {
    "url": "assets/js/32.51084a72.js",
    "revision": "8ca74e77687f783a9fccca561583171f"
  },
  {
    "url": "assets/js/33.9e6db97b.js",
    "revision": "31775eaec72433bd3396a70fe7fd019d"
  },
  {
    "url": "assets/js/34.6ea0ec2d.js",
    "revision": "0a303fe7b483cef732e214bec43f717d"
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
    "url": "assets/js/38.2d84ce8b.js",
    "revision": "3224ff1b6aaf8a7f8b797d02ff810369"
  },
  {
    "url": "assets/js/39.200a0ccf.js",
    "revision": "f0de576713b7182cc59dbef42dfcd539"
  },
  {
    "url": "assets/js/4.b2897aa4.js",
    "revision": "206fc3515e98acacc4cdeebd2569da7a"
  },
  {
    "url": "assets/js/40.81df72ac.js",
    "revision": "6b5840b1388e0429440153352d149063"
  },
  {
    "url": "assets/js/41.71b3becf.js",
    "revision": "bba9ad92750ead2d3352976755d0df08"
  },
  {
    "url": "assets/js/42.57b4dd8c.js",
    "revision": "4ebf8190fbf866b8059d531670f99ac4"
  },
  {
    "url": "assets/js/43.7e3bdbf2.js",
    "revision": "6c7122d0480fa0d6504bf870b634513d"
  },
  {
    "url": "assets/js/44.82f62b9c.js",
    "revision": "a986ea266f070d01a490d354e870d440"
  },
  {
    "url": "assets/js/45.f393973c.js",
    "revision": "7c37a7900cf80b4d1875beb99eaa692c"
  },
  {
    "url": "assets/js/46.46999188.js",
    "revision": "deee3b23a7cf92a1ed2966b6a04b3c45"
  },
  {
    "url": "assets/js/47.3495df6d.js",
    "revision": "7e210b61e20bb1802148cfdc598c89f1"
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
    "url": "assets/js/51.66becfbe.js",
    "revision": "13f1fabd57185c470e47ec4946d99a66"
  },
  {
    "url": "assets/js/52.e610749a.js",
    "revision": "1684b2f281dee48a9da70b534635678f"
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
    "url": "assets/js/7.1ee0a74b.js",
    "revision": "e434b75c5461184b44eba44be7aa7dc8"
  },
  {
    "url": "assets/js/8.548540be.js",
    "revision": "528644c3483b0caa34707a6ac3eb6888"
  },
  {
    "url": "assets/js/9.fc8a6f71.js",
    "revision": "e0ea8bb4ebc2273a2791edafabfaf6b8"
  },
  {
    "url": "assets/js/app.55259c47.js",
    "revision": "c673be48f02a5c9402ba65e33a3c6b7f"
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
    "revision": "a138ab5f39e01f61d714d9370a8aaf7e"
  },
  {
    "url": "my-life/index.html",
    "revision": "c2cbcd47afc0e89724ad1061684243a9"
  },
  {
    "url": "my-life/life1.html",
    "revision": "46b0ff25cc3eedfa160135c782afbb93"
  },
  {
    "url": "my-life/life10.html",
    "revision": "6f2b2c5b1f8d1cd0b74c2fb4dc12a692"
  },
  {
    "url": "my-life/life11.html",
    "revision": "16944bf23eb97af5ccdc0587ff39f04b"
  },
  {
    "url": "my-life/life12.html",
    "revision": "4d092765282ad3c65d54164bd187fa9b"
  },
  {
    "url": "my-life/life2.html",
    "revision": "2f83021352f43960d246d1f6fd2813a6"
  },
  {
    "url": "my-life/life3.html",
    "revision": "b43e7c5ca9e6ee72b388594de0edb31f"
  },
  {
    "url": "my-life/life4.html",
    "revision": "a000ceb9f7e3a27ad9c331aceeb4cb71"
  },
  {
    "url": "my-life/life5.html",
    "revision": "851adefa8fe2346de796c60bfd245f29"
  },
  {
    "url": "my-life/life6.html",
    "revision": "8c998b4641e1fea5220a02966bec248d"
  },
  {
    "url": "my-life/life7.html",
    "revision": "c52fea1f8460e671cf5d55ea9f7fac31"
  },
  {
    "url": "my-life/life8.html",
    "revision": "51b1a7353629983efee558f2eda21371"
  },
  {
    "url": "my-life/life9.html",
    "revision": "8c0dee25b350854f35745583b4a70765"
  },
  {
    "url": "technical/css/index.html",
    "revision": "3fdb3aa49f3b3788261b572245aa19c6"
  },
  {
    "url": "technical/css/qa.html",
    "revision": "df5b4a928da9505559ed7033cb274ffc"
  },
  {
    "url": "technical/css/qa1.html",
    "revision": "8f303cffe284e83ed33172d25783a0bd"
  },
  {
    "url": "technical/css/qa2.html",
    "revision": "48aa53f2844d2d3f8b3544654376ee27"
  },
  {
    "url": "technical/index.html",
    "revision": "209c46dc690749e5e040dc6c388ad580"
  },
  {
    "url": "technical/js/index.html",
    "revision": "577a92c6b6bcd4d362e40802aeb7e549"
  },
  {
    "url": "technical/js/qa.html",
    "revision": "fef45c1ffd037aea31fd14a4b8c16bbe"
  },
  {
    "url": "technical/js/qa1.html",
    "revision": "e013d81622d285dc397843c64b58781b"
  },
  {
    "url": "technical/js/qa2.html",
    "revision": "3df1b5f04e6652fc74a9401df2a69283"
  },
  {
    "url": "technical/js/qa3.html",
    "revision": "fe44b1a00d0c7e115ea8d7ff63aa6a87"
  },
  {
    "url": "technical/lwm/index.html",
    "revision": "8f6e10db311aa1c06ca594ed25b8df8e"
  },
  {
    "url": "technical/lwm/qa.html",
    "revision": "cc35dc1380ed76f278f7aaf603cf30dc"
  },
  {
    "url": "technical/lwm/qa1.html",
    "revision": "cd43d863cbc036fb7ed2057fe5a2a60b"
  },
  {
    "url": "technical/markdown/index.html",
    "revision": "c206b7f43e27ff14681a2982aafb3f7c"
  },
  {
    "url": "technical/markdown/qa.html",
    "revision": "57d6ad8f4cfbd10695079c00db8db157"
  },
  {
    "url": "technical/node/index.html",
    "revision": "6125e38a042ac851d3ba3885ea11d875"
  },
  {
    "url": "technical/node/qa.html",
    "revision": "af3a21c605a8b4f14e44e2e6b8bb9cd0"
  },
  {
    "url": "technical/vue/qa.html",
    "revision": "818bc321f2c6812c55b54aa7310bd7d0"
  },
  {
    "url": "timeAxis.html",
    "revision": "75b4cb3e2f242a654ea302f155bbd28e"
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
