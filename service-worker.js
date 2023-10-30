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
    "revision": "d9267c0989cb463add274a769c7c4c3d"
  },
  {
    "url": "about.html",
    "revision": "aa38d507061ba57299313ed31fa9b223"
  },
  {
    "url": "assets/css/0.styles.af1a084f.css",
    "revision": "b17702ff71a0e7e867035b7bc0811f83"
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
    "url": "assets/js/14.3bfdf42b.js",
    "revision": "657b418ff985ed4b273b4916371653e2"
  },
  {
    "url": "assets/js/15.799f289d.js",
    "revision": "72a5cbd87704a97ccf72d858ba8a852a"
  },
  {
    "url": "assets/js/16.6ebb398d.js",
    "revision": "cba33141752bf75fa19112dbbc0fbbb1"
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
    "url": "assets/js/25.3530e365.js",
    "revision": "2be04b171643f7bb653d95b58b18157b"
  },
  {
    "url": "assets/js/26.3302be7c.js",
    "revision": "518f0f692039a4c4fff3ab64fffcdb86"
  },
  {
    "url": "assets/js/27.8744f6ba.js",
    "revision": "b851b42a3d57b8e3120b6f1cd397beee"
  },
  {
    "url": "assets/js/28.a7bbc700.js",
    "revision": "24646ce61e15399c1bf16fabbf5f9354"
  },
  {
    "url": "assets/js/29.2b4c9dc6.js",
    "revision": "8ff13465e0df0e09759404e7e404bedf"
  },
  {
    "url": "assets/js/3.494aa1b5.js",
    "revision": "0c6ba21f7769f9a5d713e0f45bd1d9b9"
  },
  {
    "url": "assets/js/30.a31c7465.js",
    "revision": "72d773cdb6dc091e2848245f1c2d9c52"
  },
  {
    "url": "assets/js/31.443dd9db.js",
    "revision": "c4798e712e71664b92fa98ec85e5ae45"
  },
  {
    "url": "assets/js/32.51084a72.js",
    "revision": "8ca74e77687f783a9fccca561583171f"
  },
  {
    "url": "assets/js/33.13744797.js",
    "revision": "4bedf14178eae5e28c1dc59e34263441"
  },
  {
    "url": "assets/js/34.cd54906c.js",
    "revision": "9f8bede7251962365ca44fc4e7d49d46"
  },
  {
    "url": "assets/js/35.c8fcae88.js",
    "revision": "809f4f3405b5d6794e05cb3d3a23b098"
  },
  {
    "url": "assets/js/36.ca6a21ff.js",
    "revision": "93132b4d2d588531af47a2a4f4f3038f"
  },
  {
    "url": "assets/js/37.4f560018.js",
    "revision": "4d510242cfe525075c12ffcf5283b557"
  },
  {
    "url": "assets/js/38.6645d691.js",
    "revision": "aff37df35a89cebf7a349f329801edf7"
  },
  {
    "url": "assets/js/39.2fd7f968.js",
    "revision": "47354dd94c4cde00f336ed91b0be9656"
  },
  {
    "url": "assets/js/4.57d2c38f.js",
    "revision": "0d23c952b283864275ebc4a6b8641931"
  },
  {
    "url": "assets/js/40.6d7feed7.js",
    "revision": "bc2d59f7a5ba2e4e787ed2f6e32aa2d7"
  },
  {
    "url": "assets/js/41.3e081e81.js",
    "revision": "9334ae941622036bbfeef23057eb1a61"
  },
  {
    "url": "assets/js/42.929b8e00.js",
    "revision": "c040f2f334ce64ec2a12eca1bcc6df96"
  },
  {
    "url": "assets/js/43.7e3bdbf2.js",
    "revision": "6c7122d0480fa0d6504bf870b634513d"
  },
  {
    "url": "assets/js/44.df760842.js",
    "revision": "df19dc5dbc4de8e7c8e5da3954a56a3a"
  },
  {
    "url": "assets/js/45.dbd35e33.js",
    "revision": "05f76cf4570153ddf80db7c3ce7ce4c9"
  },
  {
    "url": "assets/js/46.46999188.js",
    "revision": "deee3b23a7cf92a1ed2966b6a04b3c45"
  },
  {
    "url": "assets/js/47.2a6aba16.js",
    "revision": "6f92a741de4d2171f148093fa03392a8"
  },
  {
    "url": "assets/js/48.b23d0475.js",
    "revision": "4c90c39fcf8969db3d31664febf2044f"
  },
  {
    "url": "assets/js/49.d1424fc5.js",
    "revision": "3d98415dda35b2b159d24523695036b4"
  },
  {
    "url": "assets/js/5.3a580cc7.js",
    "revision": "45d78fe4ef7c1306286173641b6e3374"
  },
  {
    "url": "assets/js/50.1e2e5846.js",
    "revision": "9ff105ed17bf36700c432057308c30f3"
  },
  {
    "url": "assets/js/51.66becfbe.js",
    "revision": "13f1fabd57185c470e47ec4946d99a66"
  },
  {
    "url": "assets/js/52.58aca1f7.js",
    "revision": "cb3abbe2f1d8d4fef184480c4eabacce"
  },
  {
    "url": "assets/js/53.57fb4eda.js",
    "revision": "b4c71268274da35852df25b9bb5fe931"
  },
  {
    "url": "assets/js/6.bac6364f.js",
    "revision": "4775cd0eaaf10e221437e7ac440a25f7"
  },
  {
    "url": "assets/js/7.7cb8c9a3.js",
    "revision": "535a938d724f6de871efded2df2a848e"
  },
  {
    "url": "assets/js/8.8d1f4de0.js",
    "revision": "f4d297c406041dd4b40ed1cca9b03e82"
  },
  {
    "url": "assets/js/9.fc8a6f71.js",
    "revision": "e0ea8bb4ebc2273a2791edafabfaf6b8"
  },
  {
    "url": "assets/js/app.25a310c8.js",
    "revision": "fc3ac9d8e2304ff848a295cdaf2a1cb6"
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
    "revision": "a8649354f0cd649fdf033c90d1897958"
  },
  {
    "url": "my-life/index.html",
    "revision": "70431ca36f4c29248b85d5650c995eca"
  },
  {
    "url": "my-life/life10.html",
    "revision": "b1972373eb377c06dadf521445aa0baf"
  },
  {
    "url": "my-life/life11.html",
    "revision": "2df5795dd31115dbe8b47581b0450796"
  },
  {
    "url": "my-life/life12.html",
    "revision": "10ea7baa2bba131d7e48df6272d44e9b"
  },
  {
    "url": "my-life/life13.html",
    "revision": "f1e1fb9af046d84778319d8e71bacbb5"
  },
  {
    "url": "my-life/life2.html",
    "revision": "be58756d387972875b22e56510ce9903"
  },
  {
    "url": "my-life/life3.html",
    "revision": "fa51ba2658ccd47fccf50ac0f1dd63ad"
  },
  {
    "url": "my-life/life4.html",
    "revision": "9273e3ce74ecd5acd86a2a6f5a007f0b"
  },
  {
    "url": "my-life/life5.html",
    "revision": "453ce9c541179ac365917e13e7725514"
  },
  {
    "url": "my-life/life6.html",
    "revision": "db212f4e6ffa2778b3b14f114e4097cd"
  },
  {
    "url": "my-life/life7.html",
    "revision": "2de1f703e1a250c9ebc082d70ca63ab2"
  },
  {
    "url": "my-life/life8.html",
    "revision": "c68e74a29c220fff39a0a2cdaaa6370a"
  },
  {
    "url": "my-life/life9.html",
    "revision": "2f680a1970e3c287e01d341fce1bf198"
  },
  {
    "url": "technical/css/index.html",
    "revision": "c304b823a3ef763307fd83708f6b3d38"
  },
  {
    "url": "technical/css/qa.html",
    "revision": "ce9fa67a7c3bc0713bb281210f6824ec"
  },
  {
    "url": "technical/css/qa1.html",
    "revision": "236d1bbfffebc08b5414a52875df1bcb"
  },
  {
    "url": "technical/css/qa2.html",
    "revision": "82729d692b2b649f5f97753992a86b03"
  },
  {
    "url": "technical/index.html",
    "revision": "858206bdc4922d46440210fb00568d1b"
  },
  {
    "url": "technical/js/index.html",
    "revision": "315bc15d4a327201b01e7983f858da25"
  },
  {
    "url": "technical/js/qa.html",
    "revision": "70ef3b3befc3ac92c1e58084be5e4d3f"
  },
  {
    "url": "technical/js/qa1.html",
    "revision": "bed20eda112b435649e8af1ed8a79952"
  },
  {
    "url": "technical/js/qa2.html",
    "revision": "00b78490999977e7abf7f1fdc59134a4"
  },
  {
    "url": "technical/js/qa3.html",
    "revision": "0b0212a8f8fae16d8c1d62542198672b"
  },
  {
    "url": "technical/lwm/index.html",
    "revision": "cbc25afa41c71663675cc0543d184b95"
  },
  {
    "url": "technical/lwm/qa.html",
    "revision": "a95b2b30b999681c3fa6e0e0c207041d"
  },
  {
    "url": "technical/lwm/qa1.html",
    "revision": "a0a5d384723467b39cbc94f2b28ef253"
  },
  {
    "url": "technical/markdown/index.html",
    "revision": "3a9cf9b754d0e70b00675371116ab819"
  },
  {
    "url": "technical/markdown/qa.html",
    "revision": "a43dc154130b324c2531a9a88470a6a3"
  },
  {
    "url": "technical/node/index.html",
    "revision": "03e0ad6c07f6f362aa2aec4dacf7abef"
  },
  {
    "url": "technical/node/qa.html",
    "revision": "e2a391d6b8dd75edfa7c90f5392433ac"
  },
  {
    "url": "technical/vue/qa.html",
    "revision": "04e41d46b35b6b3a7ec5de4691020231"
  },
  {
    "url": "timeAxis.html",
    "revision": "44fa9a8086b1cd139c908ed4e1cc18b5"
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
