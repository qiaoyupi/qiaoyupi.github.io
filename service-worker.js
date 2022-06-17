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
    "revision": "b5987fbb935baa5525ba8acc99ee8515"
  },
  {
    "url": "about.html",
    "revision": "1ff928c140b0eeca6d8014215ee8a3e8"
  },
  {
    "url": "assets/css/0.styles.dc2ca55c.css",
    "revision": "ff12402547eeaa87bd758023cc7c8bf0"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.57062de6.js",
    "revision": "b80b194de0a3238bf1deb6ae36fd81be"
  },
  {
    "url": "assets/js/10.c80b88f9.js",
    "revision": "9dee7b9f86057f5fc6924661b09c4b3d"
  },
  {
    "url": "assets/js/11.abc09aef.js",
    "revision": "7f9e4d87c7c014c04842fef6f327aff8"
  },
  {
    "url": "assets/js/12.5a3fb1e1.js",
    "revision": "7a4d4fd2d2e9e28343d230033881a8c0"
  },
  {
    "url": "assets/js/13.4e65db94.js",
    "revision": "1b99f6bf57b0a6efab23e7e92b8eeda4"
  },
  {
    "url": "assets/js/14.2b6c3836.js",
    "revision": "1ecc8955203b54d34d2f112a5e4cd892"
  },
  {
    "url": "assets/js/15.a768cc26.js",
    "revision": "8b93d609d46deaca174c6e1d88fc5564"
  },
  {
    "url": "assets/js/16.6ad77334.js",
    "revision": "376ed0b81f05f1bb8ef9daa4e6ec6c59"
  },
  {
    "url": "assets/js/17.1e9571bf.js",
    "revision": "e386d2c2fe3ecc4a68b55c35e10b505e"
  },
  {
    "url": "assets/js/18.fd58b819.js",
    "revision": "88062b53e3f38ae2aa64dd32dd02b5cf"
  },
  {
    "url": "assets/js/19.c150fa09.js",
    "revision": "a19619aa57b96541267fee7904e3207d"
  },
  {
    "url": "assets/js/20.47540043.js",
    "revision": "da5f10e350540d603e0af8a9d343a841"
  },
  {
    "url": "assets/js/21.ca244a14.js",
    "revision": "b2a570563a9068a943a35f1e3b5dbad8"
  },
  {
    "url": "assets/js/22.5cf5c148.js",
    "revision": "ec164a57187708845e46e93ed169be76"
  },
  {
    "url": "assets/js/23.9fbb8b14.js",
    "revision": "a80ca39f6de044f1dfc79b065852998f"
  },
  {
    "url": "assets/js/24.52ec9511.js",
    "revision": "44819b02b916a17fe5616255e57c6eeb"
  },
  {
    "url": "assets/js/25.659d44ed.js",
    "revision": "201cf35592e082faae90caea810265a0"
  },
  {
    "url": "assets/js/26.f2cd0f7d.js",
    "revision": "112780a3faefd9d7d5f291fe739ded91"
  },
  {
    "url": "assets/js/27.e9cbedc5.js",
    "revision": "426e8a40c41ba731058cfde1a0fe2e7a"
  },
  {
    "url": "assets/js/28.bf9dde7f.js",
    "revision": "9d5f3ffb10e9dfcae609d2c064d69092"
  },
  {
    "url": "assets/js/29.ef2ae33b.js",
    "revision": "a637582aa1246f0ed72512df5cf887c6"
  },
  {
    "url": "assets/js/3.f8984efe.js",
    "revision": "6d5ca8e04ab380d5fa60ab81105210ee"
  },
  {
    "url": "assets/js/30.7dcf69fd.js",
    "revision": "3e614601c5c3c2bb276118d19a0cf21d"
  },
  {
    "url": "assets/js/31.13f6b74c.js",
    "revision": "2dbefe841e3c74740e6954129938975c"
  },
  {
    "url": "assets/js/32.6925b60c.js",
    "revision": "e85b79ec927fb46943a392f8f92dbb06"
  },
  {
    "url": "assets/js/33.8e2c338a.js",
    "revision": "091baac9eeeb48e1eeb6d5af930b4b74"
  },
  {
    "url": "assets/js/34.08edb8b7.js",
    "revision": "5d631d4ed30617db72ac3ec053b465a7"
  },
  {
    "url": "assets/js/35.d142c1d5.js",
    "revision": "7cb7feb4734ace8075ac50c2a2957dcd"
  },
  {
    "url": "assets/js/36.3395e6a0.js",
    "revision": "1d9c8d7f9ab3a208b2fdb50d5d6e36be"
  },
  {
    "url": "assets/js/37.59330db7.js",
    "revision": "ad496b4f21010ee3eee5f6ba60850321"
  },
  {
    "url": "assets/js/38.72eea349.js",
    "revision": "c908c17969bfcdec6211d4dcc32f4565"
  },
  {
    "url": "assets/js/39.f661309c.js",
    "revision": "4e19d2df2061f7976842a2b7c9a93bb8"
  },
  {
    "url": "assets/js/4.588a893a.js",
    "revision": "21c2627f4acad9e282b55a21e00c91a8"
  },
  {
    "url": "assets/js/40.58b8c4b2.js",
    "revision": "6b5678d21c28081326dd44abf1698a17"
  },
  {
    "url": "assets/js/41.90b5d0cd.js",
    "revision": "886cc778e96017aeeff97fd847b240b1"
  },
  {
    "url": "assets/js/42.61e51bea.js",
    "revision": "ba95b21bb04e027f3e711ca67bdc4721"
  },
  {
    "url": "assets/js/43.288198d9.js",
    "revision": "3409912e138807ff95b65e863bbcd1df"
  },
  {
    "url": "assets/js/44.3aa61d30.js",
    "revision": "74a977b903d83e72aae988ad387e69a6"
  },
  {
    "url": "assets/js/45.8af74283.js",
    "revision": "dc901bea13937c5d7afcf8985622b37b"
  },
  {
    "url": "assets/js/5.ca804c9d.js",
    "revision": "9a46c86728c43af41d31ba71f89aa975"
  },
  {
    "url": "assets/js/6.55e02512.js",
    "revision": "8246f89469603b8b66e7d05120e63319"
  },
  {
    "url": "assets/js/7.096f03b5.js",
    "revision": "d0b0e63598044c8676f2ff2a12d77685"
  },
  {
    "url": "assets/js/8.63265a0a.js",
    "revision": "8c0d7cd056176bd5e8742f3add176bdb"
  },
  {
    "url": "assets/js/9.ae091a4f.js",
    "revision": "56511a53837ce45ae1e9ef2cc597199c"
  },
  {
    "url": "assets/js/app.7552f19a.js",
    "revision": "5781d0765fd19e6513bcd947bf6e0382"
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
    "revision": "3fa1bb963014975edc6ffb3b6d3cf138"
  },
  {
    "url": "my-life/index.html",
    "revision": "d89bdda17f131fc5e256f1531a1e5781"
  },
  {
    "url": "my-life/life1.html",
    "revision": "8d408260c6aac5e95d2fb9103ee1d7fe"
  },
  {
    "url": "my-life/life2.html",
    "revision": "e7cc7e29004a75e83a73b812c56a2503"
  },
  {
    "url": "my-life/life3.html",
    "revision": "8fcd58a20fa1141728477d0d8419ca6a"
  },
  {
    "url": "my-life/life4.html",
    "revision": "d5132695fcd59c5bd128bfca57a6092b"
  },
  {
    "url": "my-life/life5.html",
    "revision": "ec13526d838b7b50437f34b1a19bb12a"
  },
  {
    "url": "my-life/life6.html",
    "revision": "99bb76df27857fc3a6faebf92fd2f38e"
  },
  {
    "url": "my-life/life7.html",
    "revision": "e3716535fd30ac760ba5963c29b8f9d2"
  },
  {
    "url": "my-life/life8.html",
    "revision": "06970d06c6ad96f0de9040c1a45ca260"
  },
  {
    "url": "my-life/life9.html",
    "revision": "3225085dadf169a8f208afb322c78460"
  },
  {
    "url": "technical/css/index.html",
    "revision": "5896202ff3af0bfb035a03c31833266e"
  },
  {
    "url": "technical/css/qa.html",
    "revision": "66cd13fbc45d617e3cf067894975e5f6"
  },
  {
    "url": "technical/css/qa1.html",
    "revision": "3b939f5163e2c08b39dcd3e70b15c568"
  },
  {
    "url": "technical/index.html",
    "revision": "84d789fa84f20dfde9730d8d11b09cec"
  },
  {
    "url": "technical/js/index.html",
    "revision": "6fbeedfb8e801d5c37ca4ddc31e67e0d"
  },
  {
    "url": "technical/js/qa.html",
    "revision": "5ed65726277f44411ced87852ee1271e"
  },
  {
    "url": "technical/js/qa1.html",
    "revision": "85568f19cd60f820ad597aa83db60c38"
  },
  {
    "url": "technical/js/qa2.html",
    "revision": "ed3b35063cf9d89632271502abd6963a"
  },
  {
    "url": "technical/lwm/index.html",
    "revision": "c94508bda66b8d44a43e7a4073ff380c"
  },
  {
    "url": "technical/lwm/qa.html",
    "revision": "cd64befd70cc4b588e525a3cbf13e9a3"
  },
  {
    "url": "technical/lwm/qa1.html",
    "revision": "730c46662d72084c16af53625d60a1a3"
  },
  {
    "url": "technical/markdown/index.html",
    "revision": "30871859f6fbe5021a45c297962edc07"
  },
  {
    "url": "technical/markdown/qa.html",
    "revision": "86bcc1ccc4e00938a7caeebe3e736ca3"
  },
  {
    "url": "technical/node/index.html",
    "revision": "e8c0c5005829bad2ef4fece6eae53f06"
  },
  {
    "url": "technical/node/qa.html",
    "revision": "47170ecad68751835360fa25584bd961"
  },
  {
    "url": "timeAxis.html",
    "revision": "239f4bf6ec47cc28ce7e62886299f258"
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
