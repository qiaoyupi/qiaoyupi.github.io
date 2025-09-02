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
    "revision": "77f95207aad46d2ab5c8c7b8b9ebf806"
  },
  {
    "url": "about.html",
    "revision": "41e6e2fc4aa063f2b6feb79a589cc1a2"
  },
  {
    "url": "assets/css/0.styles.30c6b364.css",
    "revision": "56def4f843d16912e9d2fc894c2177d9"
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
    "url": "assets/js/21.6d13e3ae.js",
    "revision": "057afd115fcedf44e3835cd2c7f227c7"
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
    "url": "assets/js/24.c30aa41f.js",
    "revision": "d72df0053f5256e2e50af56fc1f4aa5c"
  },
  {
    "url": "assets/js/25.90fa0933.js",
    "revision": "40911221245f4e9d50d87dca0a008f06"
  },
  {
    "url": "assets/js/26.a8f8c18b.js",
    "revision": "716d8789b80a6a0e44eef59f65f4b862"
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
    "url": "assets/js/33.4941ca4a.js",
    "revision": "2de47cfc9b36cc6629daeec1708cdbbc"
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
    "url": "assets/js/45.231d599f.js",
    "revision": "1c96970310d354df74a9c6e22b6565a1"
  },
  {
    "url": "assets/js/46.2843e608.js",
    "revision": "aeaeb239a1b4031afaa153205724a318"
  },
  {
    "url": "assets/js/47.4a1208c7.js",
    "revision": "2085e3053cb5b45cba6736f4c7c28487"
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
    "url": "assets/js/53.cca27c6a.js",
    "revision": "72c18f0fccdbfb457fdea9395787d0f7"
  },
  {
    "url": "assets/js/54.7fdbe6c6.js",
    "revision": "48c4c4499eb6a643b1d12f93803f625d"
  },
  {
    "url": "assets/js/55.f7952db3.js",
    "revision": "be6edaa0c2306c52e583f2fcc3b0c255"
  },
  {
    "url": "assets/js/56.437b113c.js",
    "revision": "a944e0eddbb18fde11df6678707ba9de"
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
    "url": "assets/js/68.fd096d9d.js",
    "revision": "283fa6c282ec881dde2f960dbac43568"
  },
  {
    "url": "assets/js/69.fdaeee8b.js",
    "revision": "7460bbbf032f45e3c0ac8353c4ef9d6b"
  },
  {
    "url": "assets/js/7.c4d22280.js",
    "revision": "bc37c384fb0d4db7727df77e4dc77c56"
  },
  {
    "url": "assets/js/70.bbbbb7dc.js",
    "revision": "8984dda996f8bf48dc1188427a8a696a"
  },
  {
    "url": "assets/js/71.5b22e217.js",
    "revision": "b92ac9bc8a8589f9e914748640069796"
  },
  {
    "url": "assets/js/72.03382b65.js",
    "revision": "0d6b32cc6926fb5dec9616a073aba7a4"
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
    "url": "assets/js/app.43181d97.js",
    "revision": "62aa4e855adfe520c75fb83842ca4f41"
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
    "revision": "3b9f0f0239d1251f1e7de5de33ea6fdd"
  },
  {
    "url": "my-life/index.html",
    "revision": "0ca600129f7b0772bc4ccef149a577ae"
  },
  {
    "url": "my-life/life10.html",
    "revision": "a0f035190cb5084b2b1e4be2fcb8a695"
  },
  {
    "url": "my-life/life11.html",
    "revision": "b719d3edc76515ff9f93fc74b6931f02"
  },
  {
    "url": "my-life/life12.html",
    "revision": "ffaeb4d8af8874c95a77017359485c99"
  },
  {
    "url": "my-life/life13.html",
    "revision": "10785db8a24740b535e9866378ec3e6e"
  },
  {
    "url": "my-life/life14.html",
    "revision": "8c2a185b06bc662d66fe6f91926deef4"
  },
  {
    "url": "my-life/life17.html",
    "revision": "964905f5050765952bc92a907e09f7da"
  },
  {
    "url": "my-life/life18.html",
    "revision": "c8a08474638bd566042235cded2f676a"
  },
  {
    "url": "my-life/life19.html",
    "revision": "d05f2df12a173197a0fe580ea2021cd9"
  },
  {
    "url": "my-life/life2.html",
    "revision": "82958e0a6e3e70b7cf36f986aa76ca51"
  },
  {
    "url": "my-life/life20.html",
    "revision": "8c249ce0218a6ef2a43f31117a7dd499"
  },
  {
    "url": "my-life/life21.html",
    "revision": "060a3824bef8a7de8f52c49a036fd290"
  },
  {
    "url": "my-life/life22.html",
    "revision": "42d483edf7486486940c068d720c0d28"
  },
  {
    "url": "my-life/life3.html",
    "revision": "7d86e2c464630d9daa0765365da562de"
  },
  {
    "url": "my-life/life4.html",
    "revision": "4a2266b1af38c3256a07a3e64f2bbf68"
  },
  {
    "url": "my-life/life5.html",
    "revision": "4c9a7e9d4405c4c59a78893acbf8d130"
  },
  {
    "url": "my-life/life6.html",
    "revision": "16f2dcef60fd19f58c8b6fc495837344"
  },
  {
    "url": "my-life/life7.html",
    "revision": "df66d8ed9ece7e314c225987ffb1fe8e"
  },
  {
    "url": "my-life/life8.html",
    "revision": "7f542e322fe7d249a98590d990511d63"
  },
  {
    "url": "my-life/life9.html",
    "revision": "174b54ae7efd29da050d25904fea9577"
  },
  {
    "url": "my-life/self1.html",
    "revision": "ecc950e52f1fcdfb2fc3a5e6e4344043"
  },
  {
    "url": "my-life/self2.html",
    "revision": "d24cb43b491e58536caf074c9f2e9ece"
  },
  {
    "url": "my-life/self3.html",
    "revision": "de855c82ae1978887a73ffb59363e616"
  },
  {
    "url": "my-life/self4.html",
    "revision": "93ea427afbe489347e78cef980ad8671"
  },
  {
    "url": "my-life/self5.html",
    "revision": "9fc4076a57b13aba6205bf4c9ef9d2de"
  },
  {
    "url": "my-life/self6.html",
    "revision": "cc4a0375aec84baf239eeeab3cde4dd5"
  },
  {
    "url": "technical/css/index.html",
    "revision": "c7c8d599dd48ab574ac6999ac190d977"
  },
  {
    "url": "technical/css/qa.html",
    "revision": "fea6c50bc9e0773c0ebe1f1c9d9fc7a8"
  },
  {
    "url": "technical/css/qa1.html",
    "revision": "343ff58d6d973f53a1b8f930c106e27f"
  },
  {
    "url": "technical/css/qa2.html",
    "revision": "507e5d0ea835bfc48f36b283eee879c1"
  },
  {
    "url": "technical/index.html",
    "revision": "ec6ffe7683b8805486e7719ec4088f37"
  },
  {
    "url": "technical/js/index.html",
    "revision": "b19674b9716986d35a8d14bf87d13f5b"
  },
  {
    "url": "technical/js/qa.html",
    "revision": "fbdacee9e1d406d1f63239d3b419cc6c"
  },
  {
    "url": "technical/js/qa1.html",
    "revision": "5a1c08c6291830e355319ecf15952278"
  },
  {
    "url": "technical/js/qa2.html",
    "revision": "4a9cd643ac9021afa2e619881d29b31e"
  },
  {
    "url": "technical/js/qa3.html",
    "revision": "e125902631e66f30d87bf6b162fdf0b5"
  },
  {
    "url": "technical/lwm/index.html",
    "revision": "099209076c16e66d10ad461b15fd73fe"
  },
  {
    "url": "technical/lwm/qa.html",
    "revision": "53502433d13dba12b75f797681dcbf77"
  },
  {
    "url": "technical/lwm/qa1.html",
    "revision": "9b85d7fc6a6dc38f6371c7f72b16ac29"
  },
  {
    "url": "technical/lwm/qa10.html",
    "revision": "a9a82215d669ede63cf83c3b9e1ffb07"
  },
  {
    "url": "technical/lwm/qa2.html",
    "revision": "9418e993fd63e454575b5cfc7536c49c"
  },
  {
    "url": "technical/lwm/qa3.html",
    "revision": "e7c0721ca2aab3ad033eaea719c718d9"
  },
  {
    "url": "technical/lwm/qa30.html",
    "revision": "344a098df1dd6d3309765ebcf9061483"
  },
  {
    "url": "technical/lwm/qa4.html",
    "revision": "307cc553ff329bdc8c1d0aaeaca37812"
  },
  {
    "url": "technical/markdown/index.html",
    "revision": "5170347f0701350a42c3a69cb8124c40"
  },
  {
    "url": "technical/markdown/qa.html",
    "revision": "dc19c049f7b305505f96868351255ec0"
  },
  {
    "url": "technical/node/index.html",
    "revision": "175a18f4389155ba3031351a74f9d4a5"
  },
  {
    "url": "technical/node/qa.html",
    "revision": "f830a1d0440e3e54ac07b9c6d645a208"
  },
  {
    "url": "technical/ts/index.html",
    "revision": "5264869a63c9c529474d81d1eeeccb3d"
  },
  {
    "url": "technical/ts/qa.html",
    "revision": "220fc29751a921cee5f8c0906f871b34"
  },
  {
    "url": "technical/vue/qa.html",
    "revision": "16998f3a6f42cd3c39eda6b7f9166af7"
  },
  {
    "url": "timeAxis.html",
    "revision": "8a85f74fac9e5f376b2b07e1ed45e331"
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
