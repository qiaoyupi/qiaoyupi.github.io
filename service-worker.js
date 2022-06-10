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
    "revision": "f07e40da95106e465ffa1caa3f947f9d"
  },
  {
    "url": "about.html",
    "revision": "f9c30da394a486cd22ddc0e889e36644"
  },
  {
    "url": "assets/css/0.styles.182a1584.css",
    "revision": "d802a0ed1bd3b419963924c9f68ed0aa"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.668c8e03.js",
    "revision": "5ca57153d351827dcec0f89e44e94b0e"
  },
  {
    "url": "assets/js/10.757f3538.js",
    "revision": "d1cd075d7314ac6c34cf33067d0339f6"
  },
  {
    "url": "assets/js/11.57809068.js",
    "revision": "dcd5891d489d8c2952c9f0d4f9c50847"
  },
  {
    "url": "assets/js/12.c4413b09.js",
    "revision": "310684bb40cd67afed91c220adccdf74"
  },
  {
    "url": "assets/js/13.44a27993.js",
    "revision": "1e3600e79c3fb3ebefd7de78c54e43f7"
  },
  {
    "url": "assets/js/14.d4f86d8d.js",
    "revision": "53b7490b5a4d6e0d0d279edceef4341d"
  },
  {
    "url": "assets/js/15.4d26533e.js",
    "revision": "5e0a22bc49e9481fe998e57c64ba1489"
  },
  {
    "url": "assets/js/16.00b34c0c.js",
    "revision": "6b67c5ba737843843bb42b63662f0959"
  },
  {
    "url": "assets/js/17.87171d49.js",
    "revision": "4cf131b4169271528cafce655452d1db"
  },
  {
    "url": "assets/js/18.ab3cf72f.js",
    "revision": "c14923e9a4d7eef5fdf74485d78d31cb"
  },
  {
    "url": "assets/js/19.a18c1e11.js",
    "revision": "5b8ac56532f828ce5345e7b14b15233a"
  },
  {
    "url": "assets/js/20.4fd55127.js",
    "revision": "53621af486765976bf1eb3c0b9e59595"
  },
  {
    "url": "assets/js/21.6073d1d6.js",
    "revision": "39a1292638ebda29d56700e7c322a24b"
  },
  {
    "url": "assets/js/22.18119efa.js",
    "revision": "7d1326edabe4c7de2c992f7d1ae60586"
  },
  {
    "url": "assets/js/23.97a8e23f.js",
    "revision": "e47cda7ac323824f75f3a53514be4e2e"
  },
  {
    "url": "assets/js/24.a83a29cc.js",
    "revision": "53bec7c934fb5f8c0326797950e1348a"
  },
  {
    "url": "assets/js/25.a6bc9c08.js",
    "revision": "8e0ce2512fa8cdde7a6214ef846ae533"
  },
  {
    "url": "assets/js/26.68ac184b.js",
    "revision": "d0041ceaed15767c646fdc5faf80867d"
  },
  {
    "url": "assets/js/27.03b233f5.js",
    "revision": "28d6a7ef84e7ca568d66b9d2c6f9d18d"
  },
  {
    "url": "assets/js/28.3d58c041.js",
    "revision": "983916ac6454fb9c53add005b9a3020a"
  },
  {
    "url": "assets/js/29.8b094c1f.js",
    "revision": "f6a011da312bc37a750885a4945ecc7f"
  },
  {
    "url": "assets/js/3.7e6fc423.js",
    "revision": "ad76bee8c60066cdafbed24620405eae"
  },
  {
    "url": "assets/js/30.a5c5faf3.js",
    "revision": "198d441f4176868e480a162a91293056"
  },
  {
    "url": "assets/js/31.275f1b9f.js",
    "revision": "98fad1c53a6d82236eb6a90731f1e425"
  },
  {
    "url": "assets/js/32.76dd1e83.js",
    "revision": "dcbc4127b53aca9f1fc8aa66ed03bc47"
  },
  {
    "url": "assets/js/33.aa6705ca.js",
    "revision": "a0fd6c648c63894c28d1098c23d07c71"
  },
  {
    "url": "assets/js/34.e50aded9.js",
    "revision": "af965516fea61392555506b8a5909856"
  },
  {
    "url": "assets/js/35.53c7a461.js",
    "revision": "ceb84ab31a196d610f04a6045affb468"
  },
  {
    "url": "assets/js/36.89d3cfed.js",
    "revision": "68aae3403d111f5b107496beab01a08d"
  },
  {
    "url": "assets/js/37.f8415d33.js",
    "revision": "d55401f92e7ab45835dc5c1af434505d"
  },
  {
    "url": "assets/js/38.7f7c4463.js",
    "revision": "c79321f1e672f14377c617859b186415"
  },
  {
    "url": "assets/js/39.a6ce5fe8.js",
    "revision": "e135eeb2210f9d8096b0e340d5c316fb"
  },
  {
    "url": "assets/js/4.ea25336c.js",
    "revision": "00dfc4d73c6182981347ffab4fd2fd91"
  },
  {
    "url": "assets/js/40.c8554783.js",
    "revision": "7b8c318748757aeb9d2df3e7a5611e63"
  },
  {
    "url": "assets/js/41.2b3c7e2c.js",
    "revision": "dd6acd64ba0f3a8bd72fcb9869fe07f4"
  },
  {
    "url": "assets/js/42.043e587a.js",
    "revision": "123d2839e5c8e64385b8231457877597"
  },
  {
    "url": "assets/js/5.542f6420.js",
    "revision": "680295581f4ff43e98d29133539811fb"
  },
  {
    "url": "assets/js/6.6f0f671d.js",
    "revision": "e742aa06ed42e08beba2085104e3ac9f"
  },
  {
    "url": "assets/js/7.018e8fcd.js",
    "revision": "c72f6e58c249d6cf0a837c9f213bb855"
  },
  {
    "url": "assets/js/8.0c9cf86e.js",
    "revision": "30348c60ce1e8075b6ced4f522b450b8"
  },
  {
    "url": "assets/js/9.01f591ff.js",
    "revision": "5c24c1e283172fca0ebb7668cb29c960"
  },
  {
    "url": "assets/js/app.198aa486.js",
    "revision": "595b931885e46b0719efea44cb7781d2"
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
    "revision": "54fa40e11e64a826a08351ea14905290"
  },
  {
    "url": "my-life/index.html",
    "revision": "1ad165cc6223881ea555806b902aa063"
  },
  {
    "url": "my-life/life1.html",
    "revision": "18cf92ff56ad9dafeae079c57331c42f"
  },
  {
    "url": "my-life/life2.html",
    "revision": "28a8c1e47704f655ec11f7790453a6cc"
  },
  {
    "url": "my-life/life3.html",
    "revision": "f27c7c9a6508bf4134da047d2e072fd1"
  },
  {
    "url": "my-life/life4.html",
    "revision": "5a8d1bd07dcb0ef2d3aac9db4f0674b1"
  },
  {
    "url": "my-life/life5.html",
    "revision": "85ae26dc52a6942a77a563b95459ec1e"
  },
  {
    "url": "my-life/life6.html",
    "revision": "f327e702a3c71c14747d8710fcd1f043"
  },
  {
    "url": "my-life/life7.html",
    "revision": "fa4a3784b72f46dd0298df549ad089fe"
  },
  {
    "url": "my-life/life8.html",
    "revision": "db5ab13188072f7f5b717ab14ff50fa3"
  },
  {
    "url": "technical/css/index.html",
    "revision": "2c617f19a7c2f7d9899f057cf8e1847f"
  },
  {
    "url": "technical/css/qa.html",
    "revision": "27ec60e052550a87cf507f34f6232f1a"
  },
  {
    "url": "technical/index.html",
    "revision": "0788e5fe410f21e5423273f9ecb6bef5"
  },
  {
    "url": "technical/js/index.html",
    "revision": "39a5a69f7e82ccec60e52cf83b4833e8"
  },
  {
    "url": "technical/js/qa.html",
    "revision": "d1e83bcc28e563b70ffe487ebc1cdb82"
  },
  {
    "url": "technical/js/qa1.html",
    "revision": "472fa3cfa0397fe9f407483cf1a9f195"
  },
  {
    "url": "technical/js/qa2.html",
    "revision": "ea40630f1dd9f2d6cd049447b9d4952d"
  },
  {
    "url": "technical/lwm/index.html",
    "revision": "e3f0f703ed2dcbdfa36393410554ffc6"
  },
  {
    "url": "technical/lwm/qa.html",
    "revision": "2df82dcf91b1ebddcbaa1de917fb6881"
  },
  {
    "url": "technical/lwm/qa1.html",
    "revision": "10bc5470bd8f9e1f75034b9f6a0daf13"
  },
  {
    "url": "technical/markdown/index.html",
    "revision": "45f3b459c9db662ba7dce5c6f8e01a09"
  },
  {
    "url": "technical/markdown/qa.html",
    "revision": "9e6e1179c7de79e0b017627e17bc154d"
  },
  {
    "url": "technical/node/index.html",
    "revision": "4fe2344b1dc799d68993e80be54e389f"
  },
  {
    "url": "technical/node/qa.html",
    "revision": "528bc4eff9c45510f0b21c505f856e6e"
  },
  {
    "url": "timeAxis.html",
    "revision": "4ea311af0053a7de2ab14f554c147f35"
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
