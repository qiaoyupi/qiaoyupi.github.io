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
    "revision": "2bfa6af1538ad9eeee20fd8ebfe90b72"
  },
  {
    "url": "about.html",
    "revision": "03876a19729641b3dfb2d2f6b26997a7"
  },
  {
    "url": "assets/css/0.styles.1c153dff.css",
    "revision": "e9ab108eec1919ece762666b9da4f533"
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
    "url": "assets/js/1.43565954.js",
    "revision": "82fbc6a6d60eef40b3077a2f085c4c98"
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
    "url": "assets/js/13.e9a620f5.js",
    "revision": "11423d9c7e7415c96b4e4f55daec9679"
  },
  {
    "url": "assets/js/14.e26f174c.js",
    "revision": "0523e22052895db1a74d8b0734642a76"
  },
  {
    "url": "assets/js/15.799f289d.js",
    "revision": "72a5cbd87704a97ccf72d858ba8a852a"
  },
  {
    "url": "assets/js/16.9e9891b0.js",
    "revision": "a23d6ffa62538c65466f7b422d3553f6"
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
    "url": "assets/js/23.e16036b1.js",
    "revision": "0d26eb8d5b0424bbed6cec76ad01bbe8"
  },
  {
    "url": "assets/js/24.f714bef9.js",
    "revision": "dcb0e51276a7b8bea386380a3086130c"
  },
  {
    "url": "assets/js/25.a6d6fe55.js",
    "revision": "7c714c08878aedf716f502f872fd9803"
  },
  {
    "url": "assets/js/26.09ec8189.js",
    "revision": "a04587d7f5bc926e27494ceee12eff20"
  },
  {
    "url": "assets/js/27.cd2fc508.js",
    "revision": "bc22f5015ff833c4b8445b29732f07be"
  },
  {
    "url": "assets/js/28.45c95817.js",
    "revision": "2b61f4846bc6d3dac5bd84cfc0ba90ce"
  },
  {
    "url": "assets/js/29.476fa918.js",
    "revision": "1a44dfaafa1881d7461a84d609aae7f6"
  },
  {
    "url": "assets/js/3.3e578b72.js",
    "revision": "98110fefe03085fdbc5cb83b9ab5f687"
  },
  {
    "url": "assets/js/30.915d742e.js",
    "revision": "2e33bf0b45ee697af45a27f098972843"
  },
  {
    "url": "assets/js/31.647e5348.js",
    "revision": "d31e710d3b2f7d1746f20d674b17d949"
  },
  {
    "url": "assets/js/32.fd9aef3d.js",
    "revision": "06c862865eaf6bff7fd39f9b3d0d84c6"
  },
  {
    "url": "assets/js/33.b8f2ebd0.js",
    "revision": "982579073b99248c81b2b1fa20b1b1d0"
  },
  {
    "url": "assets/js/34.7ac9055c.js",
    "revision": "41ad584a855c3b5ff0b10d5446c2f297"
  },
  {
    "url": "assets/js/35.12d3ebd8.js",
    "revision": "a5d44685add881010635b92ff1e74b47"
  },
  {
    "url": "assets/js/36.1a3aca73.js",
    "revision": "fee830ef62621c05492f812abd4c1385"
  },
  {
    "url": "assets/js/37.f0da31db.js",
    "revision": "f6913daf0eea27eff19218da4ce6e19d"
  },
  {
    "url": "assets/js/38.f404cffb.js",
    "revision": "a395c8eb4d424cdb96ae1b26af3b3dab"
  },
  {
    "url": "assets/js/39.a8ad102f.js",
    "revision": "2e43fe40442b01164b87fbe53c7351ca"
  },
  {
    "url": "assets/js/4.5d2dae59.js",
    "revision": "63e655cd69e2abd6b55cf461d61eddee"
  },
  {
    "url": "assets/js/40.8faa1aed.js",
    "revision": "517f934dfab403026680ce1a46ab0fcb"
  },
  {
    "url": "assets/js/41.f277ce91.js",
    "revision": "897c6a339866a3e88fbef5bd81c78381"
  },
  {
    "url": "assets/js/42.e5660c23.js",
    "revision": "a4f7e4537a3167985ab03640fac8e44d"
  },
  {
    "url": "assets/js/43.6b6a5897.js",
    "revision": "1f4b392baa8f509458a295306317879d"
  },
  {
    "url": "assets/js/44.5fd87e29.js",
    "revision": "dc803d62b87df83af64894aa65094410"
  },
  {
    "url": "assets/js/45.ae6a18e0.js",
    "revision": "d1dc199de5a64dc0a66b011eef7ef0ff"
  },
  {
    "url": "assets/js/46.4e391f0f.js",
    "revision": "fd043350e6706e6fd8254df102c587a5"
  },
  {
    "url": "assets/js/47.e0c87b61.js",
    "revision": "83cfcc8b6147af4d92004cdbf0165af8"
  },
  {
    "url": "assets/js/48.5984b5e9.js",
    "revision": "328c04b04985d8a13b42ae4be7ac1bb0"
  },
  {
    "url": "assets/js/49.33e50c6f.js",
    "revision": "45afa83d3e6ead5cc8cab655fa8bcc2d"
  },
  {
    "url": "assets/js/5.3bc57a83.js",
    "revision": "f152d08fee54d9a8bacea9115a8afc43"
  },
  {
    "url": "assets/js/50.4fdda193.js",
    "revision": "8050779bf53a15639a812e3ff4c4a449"
  },
  {
    "url": "assets/js/51.d2886a59.js",
    "revision": "a5fd55fc74ffef074e4b7c669b655271"
  },
  {
    "url": "assets/js/52.cef6867e.js",
    "revision": "b27a21d48c05ceeb54847016c930738d"
  },
  {
    "url": "assets/js/53.f2c45792.js",
    "revision": "2d44940bb32c1a110c6ab750e5623f17"
  },
  {
    "url": "assets/js/54.ccc41c06.js",
    "revision": "01381862728399957249be57ee9dab7c"
  },
  {
    "url": "assets/js/55.e2ef2b12.js",
    "revision": "b5455b70a65cc3137e45586e0045bc08"
  },
  {
    "url": "assets/js/56.d0e6f2db.js",
    "revision": "7859c63f9929f396e6de98d64342c9c8"
  },
  {
    "url": "assets/js/57.f1a6870e.js",
    "revision": "c57a1167656dec6ff067983783f46f7d"
  },
  {
    "url": "assets/js/58.4b14e442.js",
    "revision": "71f1f3cbfce9f23036952a0d31478126"
  },
  {
    "url": "assets/js/59.9114cb4c.js",
    "revision": "f46a384145591aa40b37af68d383e126"
  },
  {
    "url": "assets/js/6.98971001.js",
    "revision": "7e15e88d011cf8147f107e6a41967d59"
  },
  {
    "url": "assets/js/60.8cdf7d88.js",
    "revision": "7ecbcd14a51df2864b4e0d5e413dbfd0"
  },
  {
    "url": "assets/js/61.63ab4624.js",
    "revision": "2fffa90bf457473f3c444fda891544ad"
  },
  {
    "url": "assets/js/62.09944388.js",
    "revision": "3a7d476a3aac788f60fe04c75496ac07"
  },
  {
    "url": "assets/js/63.33838b49.js",
    "revision": "484cf9476057c2d10d1c016c1de6a21f"
  },
  {
    "url": "assets/js/64.beb28e88.js",
    "revision": "09d2bc2930e77f7ecae1613298fe4430"
  },
  {
    "url": "assets/js/65.9d0b7564.js",
    "revision": "2a46f0ba3778c07d41636673e927517c"
  },
  {
    "url": "assets/js/66.acfed8cb.js",
    "revision": "75be4fbe186a52dbfd68ab9d9dc9738e"
  },
  {
    "url": "assets/js/67.57c9085a.js",
    "revision": "7ccf34cb1f59f3797e41ca5bfbb6e8f7"
  },
  {
    "url": "assets/js/68.ec0a78ae.js",
    "revision": "87d4fe9881ce07981fd1f2efbd4b3484"
  },
  {
    "url": "assets/js/69.d07639dd.js",
    "revision": "b396d985664655fc20b9ae68b3a36464"
  },
  {
    "url": "assets/js/7.c4d22280.js",
    "revision": "bc37c384fb0d4db7727df77e4dc77c56"
  },
  {
    "url": "assets/js/70.6dada3cb.js",
    "revision": "a77fdd58805d6d0094cdf8415b0ad409"
  },
  {
    "url": "assets/js/71.677c6703.js",
    "revision": "a9ae64a95ea9783bc9080db09ab908e4"
  },
  {
    "url": "assets/js/72.4ffd64b1.js",
    "revision": "be272e3d8d92a56985de7c23cb7ad25c"
  },
  {
    "url": "assets/js/73.1274dd9b.js",
    "revision": "067e078c87a4aac6c264f200d9dd622a"
  },
  {
    "url": "assets/js/8.dbe11597.js",
    "revision": "7ca6f12d134c35076033c04bddcdb578"
  },
  {
    "url": "assets/js/9.3ec60412.js",
    "revision": "b6497180a9e70058c290d38fdb15f24d"
  },
  {
    "url": "assets/js/app.0f69a06a.js",
    "revision": "ca6dbee8c54d41daf5b729b0ff9e55b4"
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
    "revision": "a86890d309be1e22d08cc786cce9bf38"
  },
  {
    "url": "my-life/index.html",
    "revision": "2503bf633ba18c9499f14e18c61742df"
  },
  {
    "url": "my-life/life10.html",
    "revision": "509fb6b74c39a13ff9354b8e79332fb2"
  },
  {
    "url": "my-life/life11.html",
    "revision": "5e216c2c310fffa890a6df7126ead772"
  },
  {
    "url": "my-life/life12.html",
    "revision": "207ff79b59fa8346e2aca4c69944e753"
  },
  {
    "url": "my-life/life13.html",
    "revision": "f024bda9b53e4c790f072049ae9152d6"
  },
  {
    "url": "my-life/life14.html",
    "revision": "e64fa251eaaefa9e87d71b051c4e0624"
  },
  {
    "url": "my-life/life17.html",
    "revision": "1b94489548dcf595e1f6f7f7c3275100"
  },
  {
    "url": "my-life/life18.html",
    "revision": "ab1a44044fabe1341f30987a020bd6c0"
  },
  {
    "url": "my-life/life19.html",
    "revision": "2f0ae219d2d72e93fe1221244be85bfd"
  },
  {
    "url": "my-life/life2.html",
    "revision": "cc46fcdb946ab046367a552d4728d650"
  },
  {
    "url": "my-life/life20.html",
    "revision": "2db95886fdb313a45705f6c3f5c6b008"
  },
  {
    "url": "my-life/life21.html",
    "revision": "94a4122eff035844918ac73dc336ef94"
  },
  {
    "url": "my-life/life22.html",
    "revision": "16a9d327f2056595756b037e2a55d3bf"
  },
  {
    "url": "my-life/life3.html",
    "revision": "6e8804f9538aa8ede493c276ac343406"
  },
  {
    "url": "my-life/life4.html",
    "revision": "ec717c0be54b73a6347f6947074caa76"
  },
  {
    "url": "my-life/life5.html",
    "revision": "fa6a778f8e2d2e5bb4797e1774d56f16"
  },
  {
    "url": "my-life/life6.html",
    "revision": "3ed1654dff3722c9728158514510a9f9"
  },
  {
    "url": "my-life/life7.html",
    "revision": "dc35af0b702772b11137915fcf75e6a1"
  },
  {
    "url": "my-life/life8.html",
    "revision": "76b0e7fc35089cea345ed6bf362c335b"
  },
  {
    "url": "my-life/life9.html",
    "revision": "6449509259e6cb6a9fb850a0655be732"
  },
  {
    "url": "my-life/self1.html",
    "revision": "57a5e55ec263ba7ebe460bd500b257c4"
  },
  {
    "url": "my-life/self2.html",
    "revision": "7d06de3d7199a9651b15866224fbc69b"
  },
  {
    "url": "my-life/self3.html",
    "revision": "d868641042270b3e57a5e75b47f17428"
  },
  {
    "url": "my-life/self4.html",
    "revision": "60dbf73b2b74a8a822bdae5af79b3967"
  },
  {
    "url": "my-life/self5.html",
    "revision": "0e5879c3a96a225ad2acacc267ce839e"
  },
  {
    "url": "my-life/self6.html",
    "revision": "074c54ae5f5527d45214546ce91471cc"
  },
  {
    "url": "technical/css/index.html",
    "revision": "c29030939304589f29ca59d50bfa35d2"
  },
  {
    "url": "technical/css/qa.html",
    "revision": "dfddc13a73642e1c3a51b745db5f0b0d"
  },
  {
    "url": "technical/css/qa1.html",
    "revision": "5d14be1a58a78c97e3c376559d02ccb0"
  },
  {
    "url": "technical/css/qa2.html",
    "revision": "3f512bd160d85be6e1bfd2e822f88bbe"
  },
  {
    "url": "technical/index.html",
    "revision": "33ee6d048fb8b70a16aaa8fb65e8a42c"
  },
  {
    "url": "technical/js/index.html",
    "revision": "2f478de66f83f2c39131636788600dbb"
  },
  {
    "url": "technical/js/qa.html",
    "revision": "ac4c03fa7fcc7ddbcb0b36dbc6cdcb00"
  },
  {
    "url": "technical/js/qa1.html",
    "revision": "41e5fbeea2748402b24e5094a4f61cc8"
  },
  {
    "url": "technical/js/qa2.html",
    "revision": "2d8eb953fe8f9e067188916b61e89eca"
  },
  {
    "url": "technical/js/qa3.html",
    "revision": "1ec2bfa05a4c933fccfb041de0146fe7"
  },
  {
    "url": "technical/lwm/index.html",
    "revision": "72cb0c9b83ac7d388570aaf486605edb"
  },
  {
    "url": "technical/lwm/qa.html",
    "revision": "3db22f32772fc2c39b450e00efb27a6c"
  },
  {
    "url": "technical/lwm/qa1.html",
    "revision": "fe822a6a6660288ecbe638d89606a063"
  },
  {
    "url": "technical/lwm/qa10.html",
    "revision": "a8e775328b3423d2bcb9add4c8bbc8cf"
  },
  {
    "url": "technical/lwm/qa2.html",
    "revision": "9c1f080176f8dcedd26db9823a426b06"
  },
  {
    "url": "technical/lwm/qa3.html",
    "revision": "56867549ae167efe009bd8caa566ea50"
  },
  {
    "url": "technical/lwm/qa30.html",
    "revision": "b2460d66325089f670618b0752644b0b"
  },
  {
    "url": "technical/lwm/qa4.html",
    "revision": "589c98673842d91e35cdc9a64644ef81"
  },
  {
    "url": "technical/markdown/index.html",
    "revision": "54e11d06fdc56d60ab50da282b9ea20a"
  },
  {
    "url": "technical/markdown/qa.html",
    "revision": "f7a9b4e252a9d27959cbf117b54aed26"
  },
  {
    "url": "technical/node/index.html",
    "revision": "e1df381cff8f986338f437550a9069f8"
  },
  {
    "url": "technical/node/qa.html",
    "revision": "d5d92373426b7b92b4c06cee0bf60512"
  },
  {
    "url": "technical/ts/index.html",
    "revision": "f99736b3794b8511eff63dab7afe3608"
  },
  {
    "url": "technical/ts/qa.html",
    "revision": "8b246a9543872a6eacea95bcbba30784"
  },
  {
    "url": "technical/vue/qa.html",
    "revision": "da4a0de766b430237973ffad3e45f487"
  },
  {
    "url": "timeAxis.html",
    "revision": "7a6d374205058635e59621bb97bb7ad0"
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
