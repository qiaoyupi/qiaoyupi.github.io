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
    "revision": "8d2c135468b296953b3da3521f96153a"
  },
  {
    "url": "about.html",
    "revision": "8f56d0e6ba267b079b96903e9fec5007"
  },
  {
    "url": "assets/css/0.styles.d133af4d.css",
    "revision": "a15820d7f575ced27f2e737fe58afe69"
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
    "url": "assets/js/14.ae73b6d2.js",
    "revision": "54a23a0106722b3ba3d6a255b0ffb45b"
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
    "url": "assets/js/19.12196c14.js",
    "revision": "daa621e5327dc213e504e20e5a6533a0"
  },
  {
    "url": "assets/js/20.74ad2698.js",
    "revision": "962cde2f723a31f82e6cafb3ee08d8ed"
  },
  {
    "url": "assets/js/21.ca229985.js",
    "revision": "b42fe932ba153899819fcfb14ea9e7fa"
  },
  {
    "url": "assets/js/22.2ef1943c.js",
    "revision": "3cb8736e20d3d0ffcf5766786b1c027f"
  },
  {
    "url": "assets/js/23.2d077c9e.js",
    "revision": "6675909e6d9ac093a6d724e66ba1489d"
  },
  {
    "url": "assets/js/24.bbae0a46.js",
    "revision": "45c3c9b932f8fac57460bff3201c96f5"
  },
  {
    "url": "assets/js/25.73058fe5.js",
    "revision": "6d4b476538985901e7c42105ea830828"
  },
  {
    "url": "assets/js/26.d1790763.js",
    "revision": "5c84332e014f201aaa1fcf010677d454"
  },
  {
    "url": "assets/js/27.726d7f7d.js",
    "revision": "b75c13eb83f62b328201c0f83f2abfa0"
  },
  {
    "url": "assets/js/28.d941c89f.js",
    "revision": "96d01499773dada7b03755513447323a"
  },
  {
    "url": "assets/js/29.066e8d19.js",
    "revision": "519a7a6064276d64ef9fb6161b28fbf6"
  },
  {
    "url": "assets/js/3.8fef3b30.js",
    "revision": "85c3769c1a102e3a0b5d836c74103f8d"
  },
  {
    "url": "assets/js/30.e30e6226.js",
    "revision": "245e3ba2e716417a3ebf7eaa1d8ec016"
  },
  {
    "url": "assets/js/31.19adcd9a.js",
    "revision": "ccdb7cf9d646112eb2b94a716988e4f5"
  },
  {
    "url": "assets/js/32.9a6319fd.js",
    "revision": "d5103cb004dbbbce46737bffd8c101a2"
  },
  {
    "url": "assets/js/33.d8953596.js",
    "revision": "6400980ae095416897f39bb217905393"
  },
  {
    "url": "assets/js/34.4949bb82.js",
    "revision": "704f9c758a320d6f4fadc25dce98009e"
  },
  {
    "url": "assets/js/35.21800485.js",
    "revision": "518069163483c4f35ee68869d385697c"
  },
  {
    "url": "assets/js/36.b59b9f26.js",
    "revision": "bfeeb482be74c428251762fba122e8cf"
  },
  {
    "url": "assets/js/37.bda34d06.js",
    "revision": "a129cfa43e63dd15d6c9015060007ea6"
  },
  {
    "url": "assets/js/38.7b5e86b4.js",
    "revision": "1fe692dd8651d0add7111a16b8d16dde"
  },
  {
    "url": "assets/js/39.3f23106e.js",
    "revision": "84f64b95b22aec969945d8a08a14f5e6"
  },
  {
    "url": "assets/js/4.5d2dae59.js",
    "revision": "63e655cd69e2abd6b55cf461d61eddee"
  },
  {
    "url": "assets/js/40.ac5f58da.js",
    "revision": "7721e964285c230cc99bcd827493e766"
  },
  {
    "url": "assets/js/41.a3602cd2.js",
    "revision": "90830bfe810e1446c5d0a5170541956e"
  },
  {
    "url": "assets/js/42.b8d2633d.js",
    "revision": "bf1dfb8d6cbbd75a3ccf67aa06b58d37"
  },
  {
    "url": "assets/js/43.c3037e73.js",
    "revision": "83a24a9f6f4ec10d12cbcfe5753e2915"
  },
  {
    "url": "assets/js/44.b3c288fa.js",
    "revision": "f539c12b19d683ef06113d1a7f201dfe"
  },
  {
    "url": "assets/js/45.e4d91ed0.js",
    "revision": "4e0ea57ae34210410ba65d658ceca49d"
  },
  {
    "url": "assets/js/46.65d0203a.js",
    "revision": "08327b661f2c030f51e19ef058256b3b"
  },
  {
    "url": "assets/js/47.3b25587a.js",
    "revision": "dacb68615fbbea0f0b8c619c7956d8c1"
  },
  {
    "url": "assets/js/48.cc5f7ff3.js",
    "revision": "769ff98660d6cd5db897ecf2362721d9"
  },
  {
    "url": "assets/js/49.6176c459.js",
    "revision": "39973757b703af6f1bd6872f22b2bc22"
  },
  {
    "url": "assets/js/5.3bc57a83.js",
    "revision": "f152d08fee54d9a8bacea9115a8afc43"
  },
  {
    "url": "assets/js/50.a10a50a5.js",
    "revision": "be6ebf2abc2d80a39bb064641ff7e51f"
  },
  {
    "url": "assets/js/51.0b883730.js",
    "revision": "309eb1be9dc3d4d487f5afd2dffd4105"
  },
  {
    "url": "assets/js/52.b06978ea.js",
    "revision": "7bb34281298d19e000dd1f2a15b8f757"
  },
  {
    "url": "assets/js/53.2b6b30a8.js",
    "revision": "093776dfccf092e157ad826a863df832"
  },
  {
    "url": "assets/js/54.21f1803d.js",
    "revision": "c5c3f3a0a987586a800042d5473f3451"
  },
  {
    "url": "assets/js/55.e3cfa636.js",
    "revision": "afa5ed251407a20af0075b71f540b0db"
  },
  {
    "url": "assets/js/56.ce8d5df0.js",
    "revision": "c2e61bf0f18b870fb4b18c850667c43b"
  },
  {
    "url": "assets/js/57.a2f85609.js",
    "revision": "04192d28b17ad21fe9626a99624ac829"
  },
  {
    "url": "assets/js/58.901c5cb8.js",
    "revision": "6c1210c02a315f0c61bccacfc9657089"
  },
  {
    "url": "assets/js/59.63aafbd8.js",
    "revision": "e35a4a713b522fb86e13f02d22b10824"
  },
  {
    "url": "assets/js/6.98971001.js",
    "revision": "7e15e88d011cf8147f107e6a41967d59"
  },
  {
    "url": "assets/js/60.b9849bf6.js",
    "revision": "0bdfbe77b18ce78c27a7eea6511a36c6"
  },
  {
    "url": "assets/js/61.30614d4f.js",
    "revision": "1abff4e276233c49e57bf6548a862f4c"
  },
  {
    "url": "assets/js/62.e98af007.js",
    "revision": "b82f7a0fe77d715fc1d94a0dd8ce79f3"
  },
  {
    "url": "assets/js/63.994154a4.js",
    "revision": "f39a28c9fafbca965d7fd01e08bc0469"
  },
  {
    "url": "assets/js/7.e6beaf1e.js",
    "revision": "deab388647ea8d3dbc3362e4161b739a"
  },
  {
    "url": "assets/js/8.b4e9b090.js",
    "revision": "a1d310541da7841d960013c89b8d474d"
  },
  {
    "url": "assets/js/9.3ec60412.js",
    "revision": "b6497180a9e70058c290d38fdb15f24d"
  },
  {
    "url": "assets/js/app.c39ab391.js",
    "revision": "b016eb0acb3e8bc24bfa78457cbefe87"
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
    "revision": "0d6fc87fbdffd06ab2706970a5374144"
  },
  {
    "url": "my-life/index.html",
    "revision": "d09a53dfb42aa134f5732880b8230d0e"
  },
  {
    "url": "my-life/life10.html",
    "revision": "b663c4aacc645df2708dd3c53c3415d5"
  },
  {
    "url": "my-life/life11.html",
    "revision": "55c63b2e42db2303ebc717f2f9e002b1"
  },
  {
    "url": "my-life/life12.html",
    "revision": "011215961f0d4bc9586a41bf77fd8961"
  },
  {
    "url": "my-life/life13.html",
    "revision": "84d5a1bd4039cb1351a758c6b3d6ea54"
  },
  {
    "url": "my-life/life14.html",
    "revision": "c04f5b14a2749c425c79c654ba90c0ba"
  },
  {
    "url": "my-life/life15.html",
    "revision": "bc534de5808438bfe4704f7f064a76db"
  },
  {
    "url": "my-life/life16.html",
    "revision": "7993a19983e49b1ef49f7200feaa9436"
  },
  {
    "url": "my-life/life2.html",
    "revision": "cbd6314b26a0d7006903eb8fcd8b7341"
  },
  {
    "url": "my-life/life3.html",
    "revision": "e2a2e8d03e11503bae4b1f760520dff2"
  },
  {
    "url": "my-life/life4.html",
    "revision": "0ee29a264fd4788470062c392302036d"
  },
  {
    "url": "my-life/life5.html",
    "revision": "6eaf5eb1576cfd647c26485aa8466458"
  },
  {
    "url": "my-life/life6.html",
    "revision": "040170cfde6db142d5cf6414a08a6cb3"
  },
  {
    "url": "my-life/life7.html",
    "revision": "6593391914d2886599f0b67944cdd6c7"
  },
  {
    "url": "my-life/life8.html",
    "revision": "30fdb54319931bcc014cc5ceb75e0926"
  },
  {
    "url": "my-life/life9.html",
    "revision": "bfd78082d5c72b913e8acaaa77156f07"
  },
  {
    "url": "technical/css/index.html",
    "revision": "8c0e62b5b4c5b6625aac8b35f765565e"
  },
  {
    "url": "technical/css/qa.html",
    "revision": "53ab703a75017e6d6ca83078247dde33"
  },
  {
    "url": "technical/css/qa1.html",
    "revision": "40eb1b600f9f260ed7c04ffe5900c3a1"
  },
  {
    "url": "technical/css/qa2.html",
    "revision": "1e55ff00175dcd9f41facff719fc28a1"
  },
  {
    "url": "technical/index.html",
    "revision": "422dde379c10ffcbd8819e46d88733b6"
  },
  {
    "url": "technical/js/index.html",
    "revision": "1253c96e75c9fdf230fd1c898a0de462"
  },
  {
    "url": "technical/js/qa.html",
    "revision": "11e17dd3e1668ff451036824472d75ab"
  },
  {
    "url": "technical/js/qa1.html",
    "revision": "a44a22f983356cd17f92b4bd5be26329"
  },
  {
    "url": "technical/js/qa2.html",
    "revision": "4f5763f018db28d9cb9f2d2413719309"
  },
  {
    "url": "technical/js/qa3.html",
    "revision": "341f14e3a55b39bce640b20abe76980b"
  },
  {
    "url": "technical/lwm/index.html",
    "revision": "f112353b98768f2b9a884220e4aa6605"
  },
  {
    "url": "technical/lwm/qa.html",
    "revision": "9e05acb3b991cffa2fc995b7f5918da2"
  },
  {
    "url": "technical/lwm/qa1.html",
    "revision": "dcc2e5c2eefa15f3a83364c9e6db760a"
  },
  {
    "url": "technical/lwm/qa10.html",
    "revision": "21f106bf392c24643b453eb9369e0708"
  },
  {
    "url": "technical/lwm/qa2.html",
    "revision": "205796901b62b0794eb7866d9fcb4cc2"
  },
  {
    "url": "technical/lwm/qa3.html",
    "revision": "3e242566e798248151e135608ac4af86"
  },
  {
    "url": "technical/lwm/qa30.html",
    "revision": "c77ca036a026ddb1551394aee7a95a9c"
  },
  {
    "url": "technical/lwm/qa4.html",
    "revision": "8542bd45b652576ebeb771cb2faba633"
  },
  {
    "url": "technical/markdown/index.html",
    "revision": "23c745707453f14edd959d5249f2edbf"
  },
  {
    "url": "technical/markdown/qa.html",
    "revision": "59465fcaef2ff2833c9b234e7a5640b9"
  },
  {
    "url": "technical/node/index.html",
    "revision": "f3bda7760c8c263032b41590e8aa51cb"
  },
  {
    "url": "technical/node/qa.html",
    "revision": "be54f21476c70dfc3376079cc84e7475"
  },
  {
    "url": "technical/ts/index.html",
    "revision": "ba7f60ffee3683e287f0013f01b8f46f"
  },
  {
    "url": "technical/ts/qa.html",
    "revision": "7d0fd82ba035c64fe3349b333f471039"
  },
  {
    "url": "technical/vue/qa.html",
    "revision": "fccfdd35a4b621edfe5690ed24e178dc"
  },
  {
    "url": "timeAxis.html",
    "revision": "8434c572705876df9c330eb584b5a4f1"
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
