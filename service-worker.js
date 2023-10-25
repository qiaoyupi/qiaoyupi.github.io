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
    "revision": "e4b0df8120f44af8c7dee09cd7a5ad0b"
  },
  {
    "url": "about.html",
    "revision": "d735cdad8671edee699f6bb91d0de8eb"
  },
  {
    "url": "assets/css/0.styles.6693b22a.css",
    "revision": "de591ea7c23ebb7381ddb449b6059fb4"
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
    "url": "assets/js/25.bfd19939.js",
    "revision": "5ef44a7f8bf300b9ef8b64e82272dc5d"
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
    "url": "assets/js/37.7f1a4ef1.js",
    "revision": "a65c644288b7ee1d6f9699cf9374ff54"
  },
  {
    "url": "assets/js/38.2cc478d3.js",
    "revision": "f06b3451a42bed64b07bffc98266c600"
  },
  {
    "url": "assets/js/39.cf35e8ab.js",
    "revision": "b16fb0a9dae246080ec553ea56f4cce7"
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
    "url": "assets/js/app.0a8a710f.js",
    "revision": "91132c2463b47bd7b806c15c7d8777fa"
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
    "revision": "42a12ac575f5f78ba473b61334d2b758"
  },
  {
    "url": "my-life/index.html",
    "revision": "950ca6e766a8bde3b650fe93f10c69d1"
  },
  {
    "url": "my-life/life10.html",
    "revision": "33023b4b1b2b793432080d4300b1305e"
  },
  {
    "url": "my-life/life11.html",
    "revision": "7bb587c9db5ac0c3bde5a081ef454727"
  },
  {
    "url": "my-life/life12.html",
    "revision": "ca5d3f91dbb880c32f556265725f0c4b"
  },
  {
    "url": "my-life/life13.html",
    "revision": "b9357cad90eff8d2f20b526fd887916d"
  },
  {
    "url": "my-life/life2.html",
    "revision": "0f1be8b51602ec4f3d05bdca209dd631"
  },
  {
    "url": "my-life/life3.html",
    "revision": "d7cb10282587010401b064639e1d331f"
  },
  {
    "url": "my-life/life4.html",
    "revision": "cfc01c9639af53d02b6e0ed8fc32d70f"
  },
  {
    "url": "my-life/life5.html",
    "revision": "cc1e2c675049d97c6fd202c45c470f1f"
  },
  {
    "url": "my-life/life6.html",
    "revision": "254be93a159726a15942a74ce50c8bd6"
  },
  {
    "url": "my-life/life7.html",
    "revision": "acb147f9199d6d1c28880187f2d1c44b"
  },
  {
    "url": "my-life/life8.html",
    "revision": "4cca75a1a8aee9791d670e5b7bf6eefc"
  },
  {
    "url": "my-life/life9.html",
    "revision": "50c85069f89fc97f65e316feb43aaaa3"
  },
  {
    "url": "technical/css/index.html",
    "revision": "e428e33e4a3d14d0c2ce0573a68a6cf1"
  },
  {
    "url": "technical/css/qa.html",
    "revision": "2239cec045256370405a86328f061911"
  },
  {
    "url": "technical/css/qa1.html",
    "revision": "699fe83bfb93f9573e583401ef0b91e6"
  },
  {
    "url": "technical/css/qa2.html",
    "revision": "93e0b66f08ce5c0058d2e953ee3aef81"
  },
  {
    "url": "technical/index.html",
    "revision": "c25449908a539cdedb5537c9eb626617"
  },
  {
    "url": "technical/js/index.html",
    "revision": "bb065806775c9aa62d5399c1f08e64a0"
  },
  {
    "url": "technical/js/qa.html",
    "revision": "c9ee5e3a6cea98107f7264f6e660727c"
  },
  {
    "url": "technical/js/qa1.html",
    "revision": "b995c53f8090e9d8528c41dde7e0a247"
  },
  {
    "url": "technical/js/qa2.html",
    "revision": "269c23dd0db574331a14f4f8c110bb3e"
  },
  {
    "url": "technical/js/qa3.html",
    "revision": "1abe711fc109c1ec136edf8ba7ebf573"
  },
  {
    "url": "technical/lwm/index.html",
    "revision": "39f5c7f786164eb7551c206cff4a83ed"
  },
  {
    "url": "technical/lwm/qa.html",
    "revision": "fb862c777be73bdf55dde2e875c393a1"
  },
  {
    "url": "technical/lwm/qa1.html",
    "revision": "8e2a99877e7e32cd0c725e2a1e9bf4e1"
  },
  {
    "url": "technical/markdown/index.html",
    "revision": "6bb7822379c88030d107654f33a29f0b"
  },
  {
    "url": "technical/markdown/qa.html",
    "revision": "bced7372076b5e176982c3e83588747b"
  },
  {
    "url": "technical/node/index.html",
    "revision": "5c204d046247ddb37912288d95d65f7d"
  },
  {
    "url": "technical/node/qa.html",
    "revision": "a4db8d4db84ea6894017853818fea6bf"
  },
  {
    "url": "technical/vue/qa.html",
    "revision": "a07ef919cc3044ba366a2ecbf5e30fc7"
  },
  {
    "url": "timeAxis.html",
    "revision": "5052d564ec9f469456136b97bce75194"
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
