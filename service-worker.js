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
    "revision": "7432d57c85ef672482a390b7a58223eb"
  },
  {
    "url": "about.html",
    "revision": "16491813da48fca73b34fbde18ff95fa"
  },
  {
    "url": "assets/css/0.styles.3612d43b.css",
    "revision": "c989d88f11703704e901770fb6d97751"
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
    "url": "assets/js/1.2623e9f4.js",
    "revision": "1b2b83d56ef207f469d64b3bcd705c5f"
  },
  {
    "url": "assets/js/10.85b7737e.js",
    "revision": "54ccddd804286553636efa5a1ab67be2"
  },
  {
    "url": "assets/js/11.e5b0a2e8.js",
    "revision": "3d24426e9de6af550c06fec979ce421f"
  },
  {
    "url": "assets/js/12.59d4a72f.js",
    "revision": "f044848417e5abc0eecf7d5d04deff8c"
  },
  {
    "url": "assets/js/13.c3f34202.js",
    "revision": "151af83ce8bf99a00e5c93d34bb0d99c"
  },
  {
    "url": "assets/js/14.8b85c523.js",
    "revision": "bc2553774834f097debd64bd3dc60c52"
  },
  {
    "url": "assets/js/15.d0588f56.js",
    "revision": "55bcce7fce9f417a052ccd2e75078f85"
  },
  {
    "url": "assets/js/16.57edaf4b.js",
    "revision": "0f77e00ea7c4c3aabf8188dfbec90cdb"
  },
  {
    "url": "assets/js/17.ac9e537f.js",
    "revision": "e98abd12aafe1fadaffcaa5839b3a3d3"
  },
  {
    "url": "assets/js/18.0832f8f5.js",
    "revision": "58d65f108892403ff6dae5a28a19c6bd"
  },
  {
    "url": "assets/js/19.969c0d0c.js",
    "revision": "74b6bfd653acffa4f7d0aaebc1a1e172"
  },
  {
    "url": "assets/js/20.cad58f32.js",
    "revision": "630f3d7565539c925e0c5b9fe39c4af1"
  },
  {
    "url": "assets/js/21.7e2c9747.js",
    "revision": "2c2778901541395ff41471857f70ed76"
  },
  {
    "url": "assets/js/22.e7b738a5.js",
    "revision": "fc2e207ce051e15b2785e5c9f1da9c22"
  },
  {
    "url": "assets/js/23.59656441.js",
    "revision": "0defe84a71c2134c0871956a41f907b7"
  },
  {
    "url": "assets/js/24.77419f50.js",
    "revision": "43cda24e8a869e12250b8707f4197bb8"
  },
  {
    "url": "assets/js/25.08c65ac2.js",
    "revision": "6da687d0dfcb7de015e7dbed7a21bae1"
  },
  {
    "url": "assets/js/26.7cb2ca7e.js",
    "revision": "40f2e911412659412a268c7cfb3a54cc"
  },
  {
    "url": "assets/js/27.2d1195c9.js",
    "revision": "5222f89b7c3db1db3bc874b668509e01"
  },
  {
    "url": "assets/js/28.d4de6580.js",
    "revision": "de33c7613419f74e82d197698dc1d385"
  },
  {
    "url": "assets/js/29.37323ec2.js",
    "revision": "e5cbf8950e96294990243226fa723c73"
  },
  {
    "url": "assets/js/3.8fef3b30.js",
    "revision": "85c3769c1a102e3a0b5d836c74103f8d"
  },
  {
    "url": "assets/js/30.8493a52c.js",
    "revision": "93e995b7a7ff043c83ff6a2ae6a86399"
  },
  {
    "url": "assets/js/31.deaa29c8.js",
    "revision": "a2fdec3636747d408a99ff5ab73de210"
  },
  {
    "url": "assets/js/32.e8137c0f.js",
    "revision": "3f13f362e54e6bfd6e52a8edb8c0d0a6"
  },
  {
    "url": "assets/js/33.0b73a701.js",
    "revision": "1008fa9843ec80ea08986065bc479532"
  },
  {
    "url": "assets/js/34.417ca8ee.js",
    "revision": "ff0cb1c5d3131c980d613dd94536d47d"
  },
  {
    "url": "assets/js/35.9211fb3b.js",
    "revision": "ec6d7abeab12cf14ce1aa6c58d6ddea1"
  },
  {
    "url": "assets/js/36.2d880a54.js",
    "revision": "c0cbf30468be6fe4498bf2d0ab0eee2a"
  },
  {
    "url": "assets/js/37.01a771f9.js",
    "revision": "f26e63fab6f55f8c7d394cd270c38402"
  },
  {
    "url": "assets/js/38.7e7edbda.js",
    "revision": "5e27bdecba0f70aca5847b8b4f4ec643"
  },
  {
    "url": "assets/js/39.0ed14e50.js",
    "revision": "ca04cd031a2a639a4d6dc76b2df8dfe8"
  },
  {
    "url": "assets/js/4.5d2dae59.js",
    "revision": "63e655cd69e2abd6b55cf461d61eddee"
  },
  {
    "url": "assets/js/40.fc995537.js",
    "revision": "15bd6f38969e63f4adfc1fa80795b9d1"
  },
  {
    "url": "assets/js/41.a8186044.js",
    "revision": "72d98399bd37f924e3b6a7fa63ab21d3"
  },
  {
    "url": "assets/js/42.f17d58db.js",
    "revision": "6371b7ea32a72bcc7a21171eef8b871b"
  },
  {
    "url": "assets/js/43.56f85204.js",
    "revision": "98627aa94f700a742b60da3ecf00eed4"
  },
  {
    "url": "assets/js/44.7a317e8f.js",
    "revision": "7f3d76a869a900efdcaf16cc89317376"
  },
  {
    "url": "assets/js/45.3591bbea.js",
    "revision": "7d1116f1be47e8206f806a291293a3d2"
  },
  {
    "url": "assets/js/46.0f2b97d4.js",
    "revision": "19b64a3ac23a31acbbb4158f73f1b37d"
  },
  {
    "url": "assets/js/47.0d3a3a34.js",
    "revision": "6a58a25a3ca68cd401360f8eda7edccc"
  },
  {
    "url": "assets/js/48.bfdfa8b9.js",
    "revision": "0a7417f47efbb02f1ad6a6e8ace1ffdd"
  },
  {
    "url": "assets/js/49.22b56506.js",
    "revision": "c312621488de83537e142b4140a8fd2d"
  },
  {
    "url": "assets/js/5.3bc57a83.js",
    "revision": "f152d08fee54d9a8bacea9115a8afc43"
  },
  {
    "url": "assets/js/50.00dadd99.js",
    "revision": "11addf03d320e3b0f6ad8175edfb4fc4"
  },
  {
    "url": "assets/js/51.f0ae7867.js",
    "revision": "9a07fdc524e7f5ef6f1540e280609a5f"
  },
  {
    "url": "assets/js/52.410b3672.js",
    "revision": "f9b089b839dd14868012209c28ba0257"
  },
  {
    "url": "assets/js/53.638af85e.js",
    "revision": "78ca4e9a07cceabb846a0db480e39056"
  },
  {
    "url": "assets/js/54.5a4fd21d.js",
    "revision": "b0bf4879fd760fe70a34d3bfaec35fe5"
  },
  {
    "url": "assets/js/55.0b0ea75e.js",
    "revision": "294f9e1d5a4fc15ad690bd77037e91b1"
  },
  {
    "url": "assets/js/56.706ee8ea.js",
    "revision": "2c6f988db8ea676dfca568acb8db0dc0"
  },
  {
    "url": "assets/js/57.1f62bf17.js",
    "revision": "262576332210194c337fab30d5c8a5de"
  },
  {
    "url": "assets/js/58.152477bd.js",
    "revision": "6ca19adeddb2fd8baf02a7eebd909bf2"
  },
  {
    "url": "assets/js/59.f6b2dd6a.js",
    "revision": "e25f05fdde85ea0dc532057cd7252e6c"
  },
  {
    "url": "assets/js/6.98971001.js",
    "revision": "7e15e88d011cf8147f107e6a41967d59"
  },
  {
    "url": "assets/js/60.496adc6b.js",
    "revision": "54dc3131dc640162edaba3df5b17b9c9"
  },
  {
    "url": "assets/js/61.ac95ad2b.js",
    "revision": "27631abe2b1a4f7e7230f224368b390e"
  },
  {
    "url": "assets/js/62.fbd48032.js",
    "revision": "4980e1b600d49f523eb3cb4c72dd3e4d"
  },
  {
    "url": "assets/js/63.43903a65.js",
    "revision": "02b125edfe9ed45583e1111c7926a1ec"
  },
  {
    "url": "assets/js/64.0ccabe5c.js",
    "revision": "4c73dd91954cd7f014aa2b0dbe6c443d"
  },
  {
    "url": "assets/js/7.d5f3bbcd.js",
    "revision": "c8ce8de1f83257fb81a6058b6c6fb88a"
  },
  {
    "url": "assets/js/8.460de347.js",
    "revision": "b714f15b61c6ca6fd2297eac305fe5ab"
  },
  {
    "url": "assets/js/9.3ec60412.js",
    "revision": "b6497180a9e70058c290d38fdb15f24d"
  },
  {
    "url": "assets/js/app.d6f01b46.js",
    "revision": "f97d3f63e86b20d6481a32918628efc8"
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
    "revision": "396756998460df5f93846420a079c1f6"
  },
  {
    "url": "my-life/index.html",
    "revision": "8f68ea33dcb551e36b9d052e44c803cf"
  },
  {
    "url": "my-life/life10.html",
    "revision": "28b6c3987625e62d06a158fd00b8119f"
  },
  {
    "url": "my-life/life11.html",
    "revision": "876f4b362ca867dde0db2cff8d511b38"
  },
  {
    "url": "my-life/life12.html",
    "revision": "820374aa3418ffd37435f58a7515dbc8"
  },
  {
    "url": "my-life/life13.html",
    "revision": "91c012e16772d9638fa8c280a8826c88"
  },
  {
    "url": "my-life/life14.html",
    "revision": "fea6bc55dbbb4ba048a97c94c167cfde"
  },
  {
    "url": "my-life/life15.html",
    "revision": "bd93ca89f0add301f463f0ebc587ef9f"
  },
  {
    "url": "my-life/life16.html",
    "revision": "1fabb07713d5c00db09bfb81d2bbbb13"
  },
  {
    "url": "my-life/life17.html",
    "revision": "e768950ee9c50b9f041107dcdd208980"
  },
  {
    "url": "my-life/life2.html",
    "revision": "5eb0887d24da57e8b0d8d78267273bc8"
  },
  {
    "url": "my-life/life3.html",
    "revision": "68d03d0975ebc1a0baf7d0b2582f66b6"
  },
  {
    "url": "my-life/life4.html",
    "revision": "4bec18cb7ea4bba1f0c09455750963ab"
  },
  {
    "url": "my-life/life5.html",
    "revision": "5d0d2254dd8dd75ccdf6dc49f411bbec"
  },
  {
    "url": "my-life/life6.html",
    "revision": "f8d6f1c5ed20e0b014698679a3731482"
  },
  {
    "url": "my-life/life7.html",
    "revision": "e0c4d5985b91bc0bddc6da1d8868ed4a"
  },
  {
    "url": "my-life/life8.html",
    "revision": "e5df1e15bd0987baeccfbbf940439bd8"
  },
  {
    "url": "my-life/life9.html",
    "revision": "087838f7f60003e8f56a0928bdb7b9cb"
  },
  {
    "url": "technical/css/index.html",
    "revision": "0bd2072fe23e72c7041e76711d32b0f2"
  },
  {
    "url": "technical/css/qa.html",
    "revision": "74b80aa14f70c4835d7fd8398e630f7e"
  },
  {
    "url": "technical/css/qa1.html",
    "revision": "ec1f37760438f18974c8b3640fbec843"
  },
  {
    "url": "technical/css/qa2.html",
    "revision": "a0cb71fbcd0687126b95e63e3beca1de"
  },
  {
    "url": "technical/index.html",
    "revision": "25af505c23426efa10e940a083e69b52"
  },
  {
    "url": "technical/js/index.html",
    "revision": "e191c84b7f1e0d602edb3d2d773abf3c"
  },
  {
    "url": "technical/js/qa.html",
    "revision": "be42228aa9879ea24d6a2793951f0383"
  },
  {
    "url": "technical/js/qa1.html",
    "revision": "83199c0f7a3c4ee6d68bdab0694f2618"
  },
  {
    "url": "technical/js/qa2.html",
    "revision": "51e97bdf9d8fbb1b2414d9b27a1c830d"
  },
  {
    "url": "technical/js/qa3.html",
    "revision": "45005a35619f71c688aa1558c2c4e937"
  },
  {
    "url": "technical/lwm/index.html",
    "revision": "444537e88809b5caea689523a23d4abc"
  },
  {
    "url": "technical/lwm/qa.html",
    "revision": "c6fdc7d995da2c0ee9815d04440cc7df"
  },
  {
    "url": "technical/lwm/qa1.html",
    "revision": "4ab5103f150c0838804a07e5c1c7d4e1"
  },
  {
    "url": "technical/lwm/qa10.html",
    "revision": "3422a972926e683553fdc342e1f93390"
  },
  {
    "url": "technical/lwm/qa2.html",
    "revision": "85bea98bf88bc4145d6dc87bb985f3f8"
  },
  {
    "url": "technical/lwm/qa3.html",
    "revision": "9fbbb0268c60a13e2fbd0876cf2a678e"
  },
  {
    "url": "technical/lwm/qa30.html",
    "revision": "67926a73b4e747766970ebd624715928"
  },
  {
    "url": "technical/lwm/qa4.html",
    "revision": "a5539f52dc109fe686f1f15c7f442013"
  },
  {
    "url": "technical/markdown/index.html",
    "revision": "a2b74c6e8a7c4923d02a8075021e1caf"
  },
  {
    "url": "technical/markdown/qa.html",
    "revision": "7f34c9c72eef1b5e62c5e97427f0d324"
  },
  {
    "url": "technical/node/index.html",
    "revision": "df08946336d70c3c125f7ecd2dc19f62"
  },
  {
    "url": "technical/node/qa.html",
    "revision": "df27c57a09ea109c149d1ca3a5eb5954"
  },
  {
    "url": "technical/ts/index.html",
    "revision": "b953169a2304f4db7c7c21bea512242a"
  },
  {
    "url": "technical/ts/qa.html",
    "revision": "ddf6363a7881eff5f300259b6daab694"
  },
  {
    "url": "technical/vue/qa.html",
    "revision": "eaf6ef260fead0fcf6d9398c7f3b0395"
  },
  {
    "url": "timeAxis.html",
    "revision": "39a3a392b318fc716f91d351cd641163"
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
