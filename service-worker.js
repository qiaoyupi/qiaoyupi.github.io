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
    "revision": "283f20d8b661eb737c696a7cedb4854d"
  },
  {
    "url": "about.html",
    "revision": "b73e0d2e95c37fb6b442d63dc95faf22"
  },
  {
    "url": "assets/css/0.styles.e8729818.css",
    "revision": "5ae04776a7eaf456999462ba225e3f6b"
  },
  {
    "url": "assets/img/nomal.4a16132b.png",
    "revision": "4a16132be0d1f6dddb28ab6cf9ab9094"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.9180162b.js",
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
    "url": "assets/js/12.74c9ad64.js",
    "revision": "77f40e14ec01495218979f336a9bfe3f"
  },
  {
    "url": "assets/js/13.b9dbee03.js",
    "revision": "28d0135bdb1ea3602ed497e0be15247c"
  },
  {
    "url": "assets/js/14.223be322.js",
    "revision": "7207c1ea4fe401065b531b50af2827d4"
  },
  {
    "url": "assets/js/15.34afce68.js",
    "revision": "ff59d62242b0f842dfb33e62ef02fd42"
  },
  {
    "url": "assets/js/16.57edaf4b.js",
    "revision": "0f77e00ea7c4c3aabf8188dfbec90cdb"
  },
  {
    "url": "assets/js/17.831b68c6.js",
    "revision": "59d08185749ec6e9c6548f1ed55782ef"
  },
  {
    "url": "assets/js/18.051d29c0.js",
    "revision": "058fd8d235564d19c393ebe5d715f8e4"
  },
  {
    "url": "assets/js/19.a3711591.js",
    "revision": "0333bcc49c4207bb9e29250263834bd1"
  },
  {
    "url": "assets/js/20.74ad2698.js",
    "revision": "962cde2f723a31f82e6cafb3ee08d8ed"
  },
  {
    "url": "assets/js/21.02b8ec2b.js",
    "revision": "f9b0e66257cd84fc65191db22ad7a54f"
  },
  {
    "url": "assets/js/22.e8f0fcc2.js",
    "revision": "9abc621d215ba676d02de716b2acc649"
  },
  {
    "url": "assets/js/23.8ff69b0a.js",
    "revision": "f0720033df534c586569ebb8da87c26a"
  },
  {
    "url": "assets/js/24.f42f77df.js",
    "revision": "697e635b399da2173cb2be8ed74e8975"
  },
  {
    "url": "assets/js/25.74243a82.js",
    "revision": "ca735f26f1e711fa75bc2b50f5e41e20"
  },
  {
    "url": "assets/js/26.7b995b49.js",
    "revision": "d1af28cd947becfc430621a8c51c6727"
  },
  {
    "url": "assets/js/27.ee633334.js",
    "revision": "6497289eeb737d5837042e3f2ab3b8e5"
  },
  {
    "url": "assets/js/28.a3eb8cc0.js",
    "revision": "cc235e0b129fe6464236ac9e539bc527"
  },
  {
    "url": "assets/js/29.615c5197.js",
    "revision": "2945c114ddbe9b62ea79a7bea607fe30"
  },
  {
    "url": "assets/js/3.494aa1b5.js",
    "revision": "0c6ba21f7769f9a5d713e0f45bd1d9b9"
  },
  {
    "url": "assets/js/30.cf0ba779.js",
    "revision": "23d70d5922105b32cf6aeb1663789719"
  },
  {
    "url": "assets/js/31.870c893f.js",
    "revision": "189942e55af1d3c409633ead39f4c263"
  },
  {
    "url": "assets/js/32.f178b417.js",
    "revision": "f6296f1d44f1a6d9d56ffa1db4a9dd89"
  },
  {
    "url": "assets/js/33.84889e30.js",
    "revision": "262bb9f769efdceb79d855c94f37cda2"
  },
  {
    "url": "assets/js/34.cea52314.js",
    "revision": "298f1459d9d61f525fb0d29bbe58ea85"
  },
  {
    "url": "assets/js/35.a5f82888.js",
    "revision": "dd0eeea37aaa28b9da3038f982f1a97e"
  },
  {
    "url": "assets/js/36.3dbf88b7.js",
    "revision": "f5927b65fbede9a58ea1a13e1ca2771c"
  },
  {
    "url": "assets/js/37.2bdc3cba.js",
    "revision": "6030ca4e1d089be718b0d082439663a5"
  },
  {
    "url": "assets/js/38.b6556b56.js",
    "revision": "700fb513c840591675867de1b42739fa"
  },
  {
    "url": "assets/js/39.94eed2eb.js",
    "revision": "be9d66a475b699fb55483a8a27346e67"
  },
  {
    "url": "assets/js/4.57d2c38f.js",
    "revision": "0d23c952b283864275ebc4a6b8641931"
  },
  {
    "url": "assets/js/40.d156788f.js",
    "revision": "26ee1b24891c7d3989f88599280f4142"
  },
  {
    "url": "assets/js/41.a2976d84.js",
    "revision": "eb4fecf3fa75724a63e7c368a5e1d89f"
  },
  {
    "url": "assets/js/42.ef0d015b.js",
    "revision": "63cef2b939b70058d2de0ac375cd9407"
  },
  {
    "url": "assets/js/43.2fe0997c.js",
    "revision": "fff18215589a4b252433cb0bb6e53454"
  },
  {
    "url": "assets/js/44.b2fde977.js",
    "revision": "68aef352be45246132abb8c5a86174bd"
  },
  {
    "url": "assets/js/45.eaa90685.js",
    "revision": "44ac3e6e4e3a67090fa11306550f42dc"
  },
  {
    "url": "assets/js/46.a3a9e634.js",
    "revision": "05b2b0dbbf8064556fdbdb8e54a614ca"
  },
  {
    "url": "assets/js/47.5c9e457b.js",
    "revision": "9f35b6dac48b6b7cd0dc0e38d96fc839"
  },
  {
    "url": "assets/js/48.4e0b1c27.js",
    "revision": "89b2a36bd646fdbb84d607233751295b"
  },
  {
    "url": "assets/js/49.430ea2b4.js",
    "revision": "b82b021a185dc8c7b990279899c4ac5b"
  },
  {
    "url": "assets/js/5.3a580cc7.js",
    "revision": "45d78fe4ef7c1306286173641b6e3374"
  },
  {
    "url": "assets/js/50.aa478c1a.js",
    "revision": "10b4a7e3a8403199c245ead291034d98"
  },
  {
    "url": "assets/js/51.d01be204.js",
    "revision": "83aef5e2ad350ab4499a177ff720a599"
  },
  {
    "url": "assets/js/52.9ab4f2f6.js",
    "revision": "a7eaa8c7d1a53df10b32bf75eb172cc2"
  },
  {
    "url": "assets/js/6.bac6364f.js",
    "revision": "4775cd0eaaf10e221437e7ac440a25f7"
  },
  {
    "url": "assets/js/7.82be745e.js",
    "revision": "99fcfa72d3ad6e2cbfeb3e8a6fb9e261"
  },
  {
    "url": "assets/js/8.2643bf29.js",
    "revision": "7798588637be27a44f2171e1f3748861"
  },
  {
    "url": "assets/js/9.fc8a6f71.js",
    "revision": "e0ea8bb4ebc2273a2791edafabfaf6b8"
  },
  {
    "url": "assets/js/app.6eaf5939.js",
    "revision": "7437304c98ee060847536fa0d973a059"
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
    "revision": "17f24a48abf0081a63fb44bdc86a1e07"
  },
  {
    "url": "my-life/index.html",
    "revision": "f37be60fd204fd4820774b011017673a"
  },
  {
    "url": "my-life/life10.html",
    "revision": "f58bcd4268256008b049564f63ab9704"
  },
  {
    "url": "my-life/life11.html",
    "revision": "9f30f50cb8b239c1acff7dda463e5a9b"
  },
  {
    "url": "my-life/life12.html",
    "revision": "d8832d49ec2fdbd493cc2e99bb91cebd"
  },
  {
    "url": "my-life/life2.html",
    "revision": "dc6f748b2cb3c3317b618378812ea09e"
  },
  {
    "url": "my-life/life3.html",
    "revision": "af3c02377a3979e5bea5f269c3dfb779"
  },
  {
    "url": "my-life/life4.html",
    "revision": "fa1a66a4e3cd0a6c8df723820689254d"
  },
  {
    "url": "my-life/life5.html",
    "revision": "5a35ea4673ea5fa16f281a6bd4f18a3c"
  },
  {
    "url": "my-life/life6.html",
    "revision": "a952ad52c361ed108970ed26951d7771"
  },
  {
    "url": "my-life/life7.html",
    "revision": "93cf19b7f2f3785b660ad6c7fe4a0bba"
  },
  {
    "url": "my-life/life8.html",
    "revision": "de29a57e9d10510e25ba13c2ba15652f"
  },
  {
    "url": "my-life/life9.html",
    "revision": "58ea6606bf2de78d27f6ad6a587b0ecd"
  },
  {
    "url": "technical/css/index.html",
    "revision": "cd0c32bccff7def0f0abddd1ce2a8fcb"
  },
  {
    "url": "technical/css/qa.html",
    "revision": "8f10d458061b4fabd97d0d8dcfab2df0"
  },
  {
    "url": "technical/css/qa1.html",
    "revision": "6ff4c0eda1cf220a7c090f5c52f050a6"
  },
  {
    "url": "technical/css/qa2.html",
    "revision": "1e13df4a13c9cf83e306633384ad33fc"
  },
  {
    "url": "technical/index.html",
    "revision": "00815856bb7d38f0e1d5881111c4585e"
  },
  {
    "url": "technical/js/index.html",
    "revision": "d497784df03d856b6a0dbf686955f43f"
  },
  {
    "url": "technical/js/qa.html",
    "revision": "1d0f13d7a64c714eba25fdfa59818c17"
  },
  {
    "url": "technical/js/qa1.html",
    "revision": "cdd3cc6969020fa109c00eb26df99194"
  },
  {
    "url": "technical/js/qa2.html",
    "revision": "fde977020ae6b6fe54248ca11ee0ce18"
  },
  {
    "url": "technical/js/qa3.html",
    "revision": "6e19d15c88312bd88965fd942260dcfa"
  },
  {
    "url": "technical/lwm/index.html",
    "revision": "ba1541f8a02559642d2f103ed7e8b887"
  },
  {
    "url": "technical/lwm/qa.html",
    "revision": "6481702b0d5673cc022c8d406689870b"
  },
  {
    "url": "technical/lwm/qa1.html",
    "revision": "65749013f8a3d171d853726d451a47dc"
  },
  {
    "url": "technical/markdown/index.html",
    "revision": "9e71bc16c36238a7a275c0ac779e6d54"
  },
  {
    "url": "technical/markdown/qa.html",
    "revision": "750981b03a15add35b12afdd47a09aad"
  },
  {
    "url": "technical/node/index.html",
    "revision": "9afe50fed837f0dc222423d2e41aa85d"
  },
  {
    "url": "technical/node/qa.html",
    "revision": "8cb7655ce65f1c9053a4909470e44035"
  },
  {
    "url": "technical/vue/qa.html",
    "revision": "5be01a3f864cc7f9ac863dc9754cc702"
  },
  {
    "url": "timeAxis.html",
    "revision": "51751cc6f36424329a85177070bf428e"
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
