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
    "revision": "2ca233fc776751b30f44f3a3cd94be68"
  },
  {
    "url": "about.html",
    "revision": "8f6e077bbfb823ac943b7d414233dcd5"
  },
  {
    "url": "assets/css/0.styles.6b1a9d0e.css",
    "revision": "a0e54b7fd7e547b84c887d95648d2cdd"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.f21f714f.js",
    "revision": "2f8c9a55bf49086e21435e3323ccc9d5"
  },
  {
    "url": "assets/js/10.306fead5.js",
    "revision": "d96cecf30f253f1b524ace308fd3fe42"
  },
  {
    "url": "assets/js/11.3d35c2ed.js",
    "revision": "8ac4e4f8b8a16fd04fa8cbcdc0421959"
  },
  {
    "url": "assets/js/12.2df0ea75.js",
    "revision": "4dfdf3a12925c71289b99dfcfee6447e"
  },
  {
    "url": "assets/js/13.3b135bfa.js",
    "revision": "778cb4cbe67d2a77c6cc75ee235a4156"
  },
  {
    "url": "assets/js/14.40151dc1.js",
    "revision": "bb887b8ee649bab10b8c6ca2a5cf9ce5"
  },
  {
    "url": "assets/js/15.5de5732f.js",
    "revision": "8762e5cf28da9602d7fac22c91828999"
  },
  {
    "url": "assets/js/16.9a74414d.js",
    "revision": "b4d7572af63f0f7d1cfdf22eca8e19b6"
  },
  {
    "url": "assets/js/17.dcb1157c.js",
    "revision": "c4041674e1714dd7c7b3a52fff2bdfad"
  },
  {
    "url": "assets/js/18.758727fb.js",
    "revision": "367f81b972d3ff7b87e2ba3eb078324b"
  },
  {
    "url": "assets/js/19.3d4e2981.js",
    "revision": "37350cf1c9cc046f798a4dddf18e12a6"
  },
  {
    "url": "assets/js/20.38920a0a.js",
    "revision": "59dd4b055aae6bdff5fc5ab3189ecd0f"
  },
  {
    "url": "assets/js/21.b65ae3cd.js",
    "revision": "d866eb01f3a6c4402143f4d8032396b4"
  },
  {
    "url": "assets/js/22.7431bc82.js",
    "revision": "2f270f13c140fc0368a6444095e9e10f"
  },
  {
    "url": "assets/js/23.f64bd4f7.js",
    "revision": "19989b59ab62d5837e897fdc01f361e3"
  },
  {
    "url": "assets/js/24.e26493ba.js",
    "revision": "a062bf6a230927279fd73c4fb38b38a7"
  },
  {
    "url": "assets/js/25.de866236.js",
    "revision": "0db4032c41b13191bb5490cdb68ea080"
  },
  {
    "url": "assets/js/26.8505f8ca.js",
    "revision": "1d318e2b0f49ccb63355d913d043221b"
  },
  {
    "url": "assets/js/27.cea95d34.js",
    "revision": "ee76ad675f06548c50ae20a89767ad9d"
  },
  {
    "url": "assets/js/28.d4de1bbf.js",
    "revision": "afe813f6411a74b818e985ee300ec2df"
  },
  {
    "url": "assets/js/29.2ee71510.js",
    "revision": "1e2703e9987dd268cbf5d0089d1c1483"
  },
  {
    "url": "assets/js/3.19d3458d.js",
    "revision": "84d29e2d36f0f3bbb7cfccd6f2c0779d"
  },
  {
    "url": "assets/js/30.2dfd2af1.js",
    "revision": "eb76ca12164dd273b05c2c112eb35ccd"
  },
  {
    "url": "assets/js/31.a26b29de.js",
    "revision": "c872e36c6e132eeba8c4dea8abca416e"
  },
  {
    "url": "assets/js/32.16d847f8.js",
    "revision": "af81ff0ed51f522fab42ada1ff95c837"
  },
  {
    "url": "assets/js/33.8c67d355.js",
    "revision": "c5b83b0b54f2dd28752fcd82d729553f"
  },
  {
    "url": "assets/js/34.fc7e30f2.js",
    "revision": "8ef84ff6531035f4d8d5845bfe1a675d"
  },
  {
    "url": "assets/js/35.746e2297.js",
    "revision": "edb855ed4749e03038566ea649dc98f0"
  },
  {
    "url": "assets/js/36.7e170758.js",
    "revision": "dec950042e87fd6746a2fde1983e776b"
  },
  {
    "url": "assets/js/37.2e03f318.js",
    "revision": "f277cdcacc720ee1d5d72f378ca8ef7e"
  },
  {
    "url": "assets/js/38.940cf121.js",
    "revision": "98de92a30fd92382f7303e40d5d6cfed"
  },
  {
    "url": "assets/js/39.594d22ac.js",
    "revision": "c07e9c8a2e0276f834ad99fb62ec74f5"
  },
  {
    "url": "assets/js/4.a78b516e.js",
    "revision": "fdafebe3280b7789159edbd38e067448"
  },
  {
    "url": "assets/js/40.055371fd.js",
    "revision": "6d18440ee82dcaa0c0d55b836d671b6d"
  },
  {
    "url": "assets/js/41.4593048b.js",
    "revision": "e949a89a5011aaaca0f4965da8a84b62"
  },
  {
    "url": "assets/js/42.8ada4bbb.js",
    "revision": "e4f02265e58386db0660c2321b8d292d"
  },
  {
    "url": "assets/js/43.df4cbd74.js",
    "revision": "f285b93b0a1e0d0ab3f87a36f90bdc68"
  },
  {
    "url": "assets/js/44.6afec095.js",
    "revision": "e6aff4b22a1b2782aaa62da8e2028d5f"
  },
  {
    "url": "assets/js/45.f7cc6e2f.js",
    "revision": "500084bcbc760d5f62e83505601f77bd"
  },
  {
    "url": "assets/js/46.4ec44f2f.js",
    "revision": "4f348a990201853c5598d48cd2291d7b"
  },
  {
    "url": "assets/js/47.caac0be0.js",
    "revision": "4231f8c8eea04842e8eba4da82328ab0"
  },
  {
    "url": "assets/js/48.dd470200.js",
    "revision": "77b18b8661434df41395a348e97d1662"
  },
  {
    "url": "assets/js/49.6aa3821f.js",
    "revision": "b81a8016e89ca07f1f31699985345887"
  },
  {
    "url": "assets/js/5.e17ee929.js",
    "revision": "c759109472f062502aa4fec1cea9df51"
  },
  {
    "url": "assets/js/6.c0389554.js",
    "revision": "6938b43d2f49ff4373ca08411c7a9f18"
  },
  {
    "url": "assets/js/7.b6aae8aa.js",
    "revision": "bfcf352b0ac3502492fbdc17a7d3c287"
  },
  {
    "url": "assets/js/8.6fc05870.js",
    "revision": "fec569b6c5569fbeb19090d827997ea9"
  },
  {
    "url": "assets/js/9.c7bf9da1.js",
    "revision": "f0bbd0bbb770e490f6a9ab6f5c71587e"
  },
  {
    "url": "assets/js/app.c57531f1.js",
    "revision": "bf73efce01a992be1b0447fd05518cdd"
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
    "revision": "3d2f06d32745a0e6696c05e1603a3ae2"
  },
  {
    "url": "my-life/index.html",
    "revision": "500a7d1279531c265cb71ac39499092d"
  },
  {
    "url": "my-life/life1.html",
    "revision": "913b81b72de63ffc25f3f6bc35d4b018"
  },
  {
    "url": "my-life/life10.html",
    "revision": "ba8ccc2f285ae727e0dc74dff96ed5d8"
  },
  {
    "url": "my-life/life2.html",
    "revision": "6b55c141932b6d9b82c3b8649b07cc4d"
  },
  {
    "url": "my-life/life3.html",
    "revision": "6a483a961f72bd26c6ee9d11d47234e1"
  },
  {
    "url": "my-life/life4.html",
    "revision": "5761ea2902e989d3fc594c42d026af4e"
  },
  {
    "url": "my-life/life5.html",
    "revision": "44df7ff660b21e1365ef6a5c822dca75"
  },
  {
    "url": "my-life/life6.html",
    "revision": "83101b4f84cb25b828a33a60a42a2d5c"
  },
  {
    "url": "my-life/life7.html",
    "revision": "b31c915241766973e79962e0a591a520"
  },
  {
    "url": "my-life/life8.html",
    "revision": "c720fcd529ca5679385342a55496c89e"
  },
  {
    "url": "my-life/life9.html",
    "revision": "6343ed2f961711b22d9035856d543ba0"
  },
  {
    "url": "technical/css/index.html",
    "revision": "f2133d8b961dd7a5a433dec9bde21f3e"
  },
  {
    "url": "technical/css/qa.html",
    "revision": "9d4644470b48f527cc415f92a74d5d82"
  },
  {
    "url": "technical/css/qa1.html",
    "revision": "2047e483fffdcbacc59110196ef4b995"
  },
  {
    "url": "technical/index.html",
    "revision": "f4a2876426d78ab92d6c14d5e48aae71"
  },
  {
    "url": "technical/js/index.html",
    "revision": "4f3f93bad3c1d2ebb227125075e706f3"
  },
  {
    "url": "technical/js/qa.html",
    "revision": "8157315796f5b59f5b6ada26ddf53b3b"
  },
  {
    "url": "technical/js/qa1.html",
    "revision": "25f3dcd97bf180d2dc05a1b7f1db5084"
  },
  {
    "url": "technical/js/qa2.html",
    "revision": "aa9d9a22f11e2a60ab27604aecd18610"
  },
  {
    "url": "technical/js/qa3.html",
    "revision": "fd51b99803dc14e436a66f8ac77e1e7a"
  },
  {
    "url": "technical/lwm/index.html",
    "revision": "bc9c0545a2c4a309d0f9c3f4f3b9a575"
  },
  {
    "url": "technical/lwm/qa.html",
    "revision": "92489bf0ac766a14973c59ab5017908f"
  },
  {
    "url": "technical/lwm/qa1.html",
    "revision": "a186cb9038dda0639b33e5b424064ce6"
  },
  {
    "url": "technical/markdown/index.html",
    "revision": "8363b8b5eda836686a7e513e9a152ff4"
  },
  {
    "url": "technical/markdown/qa.html",
    "revision": "2557d13174abd85745e32bb1f1fb8496"
  },
  {
    "url": "technical/node/index.html",
    "revision": "43b731b9bca48611233e53fb16e83f34"
  },
  {
    "url": "technical/node/qa.html",
    "revision": "7125d329037d9712f678e61f13eae3d0"
  },
  {
    "url": "technical/vue/qa.html",
    "revision": "1167f1af9a4214aad977bf8fad889419"
  },
  {
    "url": "timeAxis.html",
    "revision": "f672dbbbe9e3a09b476fa9a37d98ebef"
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
