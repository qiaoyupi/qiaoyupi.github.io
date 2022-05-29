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
    "revision": "6f76b263e65569caa58bb63acbc4347f"
  },
  {
    "url": "about.html",
    "revision": "d4690fc1e9b06ad623c62c76fb313535"
  },
  {
    "url": "assets/css/0.styles.e1d00906.css",
    "revision": "8efe25dd5211c81dedf146b2ddff1c44"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.41c39787.js",
    "revision": "0c167f98959c0b4b2ed0a7258b5d90e7"
  },
  {
    "url": "assets/js/11.778f8d41.js",
    "revision": "157a0715194d9d12561e76d4a94a2176"
  },
  {
    "url": "assets/js/12.b82394c4.js",
    "revision": "76671bcd70bee135dff81b17e8ae6dd0"
  },
  {
    "url": "assets/js/13.c4777a23.js",
    "revision": "0ae80469e4484a603f20ede8c92e0d60"
  },
  {
    "url": "assets/js/14.6d0e9523.js",
    "revision": "87ed3bbfdd1d48e0d80ed0feea2afbd9"
  },
  {
    "url": "assets/js/15.d31675ad.js",
    "revision": "572890ad0e63cd35f3d840152d56c5af"
  },
  {
    "url": "assets/js/16.b472ab88.js",
    "revision": "9cdd02a2e3d8d9ac8cb159256dd1e346"
  },
  {
    "url": "assets/js/17.65c9e1ab.js",
    "revision": "3d2c5e16af8b179ae0dabd7c0a1f9925"
  },
  {
    "url": "assets/js/18.3e027d9b.js",
    "revision": "a9410aa99dec4ba210cc0a255591263b"
  },
  {
    "url": "assets/js/19.c1f9bd90.js",
    "revision": "4847cc8c13fd625f0a762d93087e1a7a"
  },
  {
    "url": "assets/js/2.04688be1.js",
    "revision": "23baf7e2ca129b7da3ff27a35e58389b"
  },
  {
    "url": "assets/js/20.dfa955c6.js",
    "revision": "84d16b6bc58034bfa60b3eaff94026b2"
  },
  {
    "url": "assets/js/21.40e476df.js",
    "revision": "ca06dea8453fa98c6c08e9e7ba1548b9"
  },
  {
    "url": "assets/js/22.a8413142.js",
    "revision": "13266a6fc2c31fb16d6217c1024d06a9"
  },
  {
    "url": "assets/js/23.0db8739e.js",
    "revision": "ff19c74f78a09681797e3701c64e8195"
  },
  {
    "url": "assets/js/24.20488589.js",
    "revision": "73ab96bf6c789774288e78dae4973fc6"
  },
  {
    "url": "assets/js/25.025ac6a8.js",
    "revision": "075e97f05140dbbb9e98b4d94e1ff6b6"
  },
  {
    "url": "assets/js/26.3ed61745.js",
    "revision": "4f1dc55e795e6efeb5ed2f2f6662e360"
  },
  {
    "url": "assets/js/27.5e8309cb.js",
    "revision": "39a44351b45d2dcf5c4333dc7336cacd"
  },
  {
    "url": "assets/js/28.c0a1fe75.js",
    "revision": "f1cb7bb328d01b1c7d16cf1e450bdd93"
  },
  {
    "url": "assets/js/29.db2dd464.js",
    "revision": "eeef6465a33e444036e5ee6d38f93403"
  },
  {
    "url": "assets/js/3.fe1c11fa.js",
    "revision": "215f4c264b6aafbb06d5cf1da302aaed"
  },
  {
    "url": "assets/js/30.15c3e16d.js",
    "revision": "fdda1c1b8b02c2a2e7819226975d9b20"
  },
  {
    "url": "assets/js/31.ce555518.js",
    "revision": "e2ea07adc579a54cab0841f314a1f913"
  },
  {
    "url": "assets/js/32.80eab418.js",
    "revision": "c95200810f56f18d23b835c709ba2d41"
  },
  {
    "url": "assets/js/33.62ade983.js",
    "revision": "7b71f2a8dafd2c32bdcb4aee9bf5aa31"
  },
  {
    "url": "assets/js/34.51b80872.js",
    "revision": "8c0eb2121944e12f121b4c6e7708ead6"
  },
  {
    "url": "assets/js/35.4855cafb.js",
    "revision": "14c1ef1ed578ed0cbd064e4cd20d2ddd"
  },
  {
    "url": "assets/js/36.dab1be0d.js",
    "revision": "decf869d36cb44a3325e21c651565ead"
  },
  {
    "url": "assets/js/4.0296af01.js",
    "revision": "cbdc6c2e6d1469672aa84c3aa09f6214"
  },
  {
    "url": "assets/js/5.65b049bc.js",
    "revision": "8e28ae7bbd0da0485e5d159d73d317ad"
  },
  {
    "url": "assets/js/6.d5e5bb38.js",
    "revision": "f6f1c586fa09442b8dc04fe4f03600a8"
  },
  {
    "url": "assets/js/7.e2715d41.js",
    "revision": "18f135cd82c37f53bfe1af1a747062f6"
  },
  {
    "url": "assets/js/8.83dc05fa.js",
    "revision": "6a9ddd75e4f8d2ea1308fe345496ff42"
  },
  {
    "url": "assets/js/9.2b691022.js",
    "revision": "4b4c879922eac59d9417b9da170a8131"
  },
  {
    "url": "assets/js/app.90a0eafa.js",
    "revision": "ef294fdba96014c1d366a5a86bd5eecd"
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
    "revision": "46197f2c347af235d38c7901a0396a82"
  },
  {
    "url": "my-life/index.html",
    "revision": "1cbd1cab41df99ab82597615a71cddde"
  },
  {
    "url": "my-life/life1.html",
    "revision": "c0d642090fd61f39c4ac85d442a43fd1"
  },
  {
    "url": "my-life/life2.html",
    "revision": "010982ea8f31fd98e8ef0fa9c19c4ed3"
  },
  {
    "url": "my-life/life3.html",
    "revision": "684cc70f7247d8186cba56276e44c71c"
  },
  {
    "url": "my-life/life4.html",
    "revision": "78332fc17c410bb7c69f8e5067a32dbf"
  },
  {
    "url": "my-life/life5.html",
    "revision": "104b0a109dc67e9c61126471b660a210"
  },
  {
    "url": "my-life/life6.html",
    "revision": "f47155e5591e8c0385aa9d7e16aa1268"
  },
  {
    "url": "my-life/life7.html",
    "revision": "b60719a194382bffca9e19adbd139d97"
  },
  {
    "url": "my-life/life8.html",
    "revision": "8e4d8e8051875ea488203861083702c8"
  },
  {
    "url": "technical/css/index.html",
    "revision": "906baeeaf4500bd053334345faef7445"
  },
  {
    "url": "technical/css/qa.html",
    "revision": "cd1acf7f5c998538dadc252efc7540b9"
  },
  {
    "url": "technical/index.html",
    "revision": "4407d0a088d4dac46438a4139af024b2"
  },
  {
    "url": "technical/js/index.html",
    "revision": "0f8c60c7acb74da2fe3c78dcc9d38a9d"
  },
  {
    "url": "technical/js/qa.html",
    "revision": "7fe5a433a07c02dac9f11a4905c14450"
  },
  {
    "url": "technical/js/qa1.html",
    "revision": "f0fab26792d5297771bad2dc2c70d2ea"
  },
  {
    "url": "technical/lwm/index.html",
    "revision": "d5224286d56eaacdc337ccc4133d6f25"
  },
  {
    "url": "technical/lwm/qa.html",
    "revision": "61cc2ce7671b3777097e28f023c63cae"
  },
  {
    "url": "technical/lwm/qa1.html",
    "revision": "5ad02599962a37edd12fcfe0eea0ab5a"
  },
  {
    "url": "technical/markdown/index.html",
    "revision": "aed165448e20f2a6a8d6108cb9abb179"
  },
  {
    "url": "technical/markdown/qa.html",
    "revision": "c0d688b362d5d01db44dd2179b6143bc"
  },
  {
    "url": "technical/node/index.html",
    "revision": "e6ca548f898f4588f17c7539d31ac00c"
  },
  {
    "url": "technical/node/qa.html",
    "revision": "df091bf98151c7596198ee03bf48481e"
  },
  {
    "url": "timeAxis.html",
    "revision": "9cc92db828de9ccd43672f6fdf2f9b16"
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
