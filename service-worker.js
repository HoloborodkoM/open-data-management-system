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
    "url": "03-01.jpg",
    "revision": "61ccd31b9a99e4dc0b2115d7a181dc71"
  },
  {
    "url": "03-02.jpg",
    "revision": "0e42c83dcc174ebfdbb611ab0956fcd9"
  },
  {
    "url": "03-03.jpg",
    "revision": "dd23072447e0798b536bd162235d14c3"
  },
  {
    "url": "03-04.jpg",
    "revision": "661a64ee2776ef94b23ba82f7ee50969"
  },
  {
    "url": "03-05.jpg",
    "revision": "6f52dcb2ccb40af28a65a4b796eb918d"
  },
  {
    "url": "03-06.jpg",
    "revision": "2643698d9412e41a449c1edee719fb29"
  },
  {
    "url": "03-07.jpg",
    "revision": "c4a788f41d803f8b9bddb5adc0513be6"
  },
  {
    "url": "03-08.jpg",
    "revision": "4c810503ec4bc1adfd29904056fc2886"
  },
  {
    "url": "03-09.jpg",
    "revision": "9c798bc91f80f84b6b0e7f7fba26d65b"
  },
  {
    "url": "03-10.jpg",
    "revision": "bb5b18b65591e9d058edbc14b02c6ba5"
  },
  {
    "url": "03-11.jpg",
    "revision": "6a88d8f48c63e79c72ec45ae84a8d9ff"
  },
  {
    "url": "04-01.jpg",
    "revision": "4bbafd5dd4000461cef55f669139b17b"
  },
  {
    "url": "05-01.jpg",
    "revision": "8d54b111a4b6b5fb4cd39e4c7261b927"
  },
  {
    "url": "06-01.jpg",
    "revision": "cf2dab320c48c5ead6fe105863629e4e"
  },
  {
    "url": "06-02.jpg",
    "revision": "aa286f8fd6540b7a7b6d36392a63f505"
  },
  {
    "url": "06-03.jpg",
    "revision": "239fa5fb2a9063f1e261ae2db81fceef"
  },
  {
    "url": "06-04.jpg",
    "revision": "a2dbf924afd6a8580ce4a2d2bcd6e049"
  },
  {
    "url": "06-05.jpg",
    "revision": "22f4f542b283cdc3d027eb664424d3c8"
  },
  {
    "url": "06-06.jpg",
    "revision": "12017ddd5b9179e8f53e93044acee998"
  },
  {
    "url": "06-07.jpg",
    "revision": "1ded65fc56da9f0008ae4ef2eacc8175"
  },
  {
    "url": "1.jpg",
    "revision": "f1ea37a492254cc85dd6fd1e89b1a6b4"
  },
  {
    "url": "1.png",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "12-01.jpg",
    "revision": "cc85570b3c89f73291af87791115986a"
  },
  {
    "url": "12-02.jpg",
    "revision": "f2b24c5c4beb21d5302c64b59445927a"
  },
  {
    "url": "12-03.jpg",
    "revision": "61fe98dff39d0887978deb0af605571b"
  },
  {
    "url": "12-04.jpg",
    "revision": "ff2468e7fbb03e034be0ffd7312dc7d9"
  },
  {
    "url": "12-05.jpg",
    "revision": "a126fe17514d81279c677666fd459d9d"
  },
  {
    "url": "12-06.jpg",
    "revision": "c25686b2f77ac7c5a2d4706f43e40132"
  },
  {
    "url": "12-07.jpg",
    "revision": "de17f3eb1df503250bcf1a5a4b533eec"
  },
  {
    "url": "12-08.jpg",
    "revision": "f3b58c768c18919a6fa2ab59ea6627db"
  },
  {
    "url": "13-01.jpg",
    "revision": "b22f06060909d43d796a8ffd4b0743a0"
  },
  {
    "url": "13-02.jpg",
    "revision": "2d2bca0518716a8dfaf37ef5c15e54ee"
  },
  {
    "url": "13-03.jpg",
    "revision": "fec1a3db903dc05c462fb6f384a400d6"
  },
  {
    "url": "2.jpg",
    "revision": "572bc2e4ef3efb7c81bbbcac5f09147b"
  },
  {
    "url": "3.jpg",
    "revision": "248757985bb49f73624c6923057530ac"
  },
  {
    "url": "4.jpg",
    "revision": "407c52446e2e463c4f8e494d52dbe485"
  },
  {
    "url": "404.html",
    "revision": "23fa8c55ff3ba04783241920d9e29d60"
  },
  {
    "url": "5.jpg",
    "revision": "7e861769b640afa00fcc0ac4b72d9c52"
  },
  {
    "url": "assets/css/0.styles.7a86bea2.css",
    "revision": "d808a88946ba4c29b4a27ba717c65aa7"
  },
  {
    "url": "assets/img/allGet.4c29b8ca.jpg",
    "revision": "4c29b8ca25a73ae0ffd36c83bffb908e"
  },
  {
    "url": "assets/img/checkDelete.42359ad5.jpg",
    "revision": "42359ad524541e70148b8610ac639e1d"
  },
  {
    "url": "assets/img/checkPost.b247588a.jpg",
    "revision": "b247588abc579d88d8d9acdcd39eaa1f"
  },
  {
    "url": "assets/img/checkPut.7cb943bc.jpg",
    "revision": "7cb943bc2cf82c53d6493b9f54b346ae"
  },
  {
    "url": "assets/img/delete.0833519e.jpg",
    "revision": "0833519e89e4a6627b8e06c7823bac2a"
  },
  {
    "url": "assets/img/deleteCant.6d088dc4.jpg",
    "revision": "6d088dc4cb6386368f1613d843e92771"
  },
  {
    "url": "assets/img/dublicateIdForPost.7db31498.jpg",
    "revision": "7db31498fa7c75484e27f361cbe19d61"
  },
  {
    "url": "assets/img/get.01f82a3d.jpg",
    "revision": "01f82a3dfa9341618e48ba4d65ddd3dd"
  },
  {
    "url": "assets/img/noGet.7c72c635.jpg",
    "revision": "7c72c635570230750cc77c46775d5540"
  },
  {
    "url": "assets/img/post.d45ad2dc.jpg",
    "revision": "d45ad2dced23d04006b4bec61c597aff"
  },
  {
    "url": "assets/img/postEmptyField.482312f2.jpg",
    "revision": "482312f23f17eebd64f0669451339010"
  },
  {
    "url": "assets/img/putAfter.2f9c6150.jpg",
    "revision": "2f9c6150f0994c1b2fcb9f7f2ec5415a"
  },
  {
    "url": "assets/img/putAfterEmptyField.d9c28ec9.jpg",
    "revision": "d9c28ec9f4548610d0185784670a8e33"
  },
  {
    "url": "assets/img/putBefore.d811f0ab.jpg",
    "revision": "d811f0abb75636ccd166096e05601ec7"
  },
  {
    "url": "assets/img/putBeforeEmptyField.cb1fe3ab.jpg",
    "revision": "cb1fe3abcd6f0239a553538057b25cbc"
  },
  {
    "url": "assets/img/putCheck.ecee5fc3.jpg",
    "revision": "ecee5fc31ef13d50dca873dfc73a4220"
  },
  {
    "url": "assets/img/putNoFile.71ecafcc.jpg",
    "revision": "71ecafcc0eef8a1410f1dfeb3e8ba171"
  },
  {
    "url": "assets/img/relation_model.8c8f8c61.png",
    "revision": "8c8f8c615cc8e05d5dd32635f7650194"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.75b440dc.js",
    "revision": "843ca06b6324c73e1faccac31f7e18db"
  },
  {
    "url": "assets/js/11.7eabde9b.js",
    "revision": "22503a94efff628b3a0d0b459c9ef90c"
  },
  {
    "url": "assets/js/12.9caeee7d.js",
    "revision": "1b7d8ae0eec01831821302aef129ea12"
  },
  {
    "url": "assets/js/13.34340d72.js",
    "revision": "15f74752b772992d8f60a85af91aba38"
  },
  {
    "url": "assets/js/14.94c3075b.js",
    "revision": "0bdc358ed53c8a5b6a0115da08305ea2"
  },
  {
    "url": "assets/js/15.78199be7.js",
    "revision": "534f082029119ff57cbc26f9f6af74cc"
  },
  {
    "url": "assets/js/16.4b8254c5.js",
    "revision": "1f86af2c992916fc08d4bc85c3e8ca7c"
  },
  {
    "url": "assets/js/17.c5cb52d0.js",
    "revision": "fbfe861510ca5f95a5144c7826805fef"
  },
  {
    "url": "assets/js/18.d1ef6edd.js",
    "revision": "ee54c41ba9a8a21d3d94bcd7a4e9aabc"
  },
  {
    "url": "assets/js/19.55754952.js",
    "revision": "505f9ace0290ede2cca2bd74ac136f82"
  },
  {
    "url": "assets/js/2.55bee359.js",
    "revision": "15809e08139f5198d3d5b80c07124be6"
  },
  {
    "url": "assets/js/20.ea7eee7d.js",
    "revision": "a61c209906dbebc4dd8406fe7a707aa0"
  },
  {
    "url": "assets/js/21.45eebc58.js",
    "revision": "fe716e4c5e76f41d30cd54ab7266cbbd"
  },
  {
    "url": "assets/js/22.b59c0c7c.js",
    "revision": "a06d854e14b54fe61001e86d273792b5"
  },
  {
    "url": "assets/js/23.fa3b7b01.js",
    "revision": "924ffc9b177fd511975863369798ad19"
  },
  {
    "url": "assets/js/24.b39602f8.js",
    "revision": "780380c63fcdc5b84daaa96f114f8b24"
  },
  {
    "url": "assets/js/26.41d20dc7.js",
    "revision": "058d1850acc933be9709b88b2a9aa2e0"
  },
  {
    "url": "assets/js/3.488d412f.js",
    "revision": "41409e2f36c88384b1e00434d6e514fa"
  },
  {
    "url": "assets/js/4.9c9d3145.js",
    "revision": "d5153a15dd1ae9a521eece359df27708"
  },
  {
    "url": "assets/js/5.069c0b69.js",
    "revision": "29bc06df25f404ebd94eaccac29c89af"
  },
  {
    "url": "assets/js/6.e6705529.js",
    "revision": "2a15b79831d13b0fe98b9100b9a3eea9"
  },
  {
    "url": "assets/js/7.a2e66a62.js",
    "revision": "e086fed79d5e074856f1e5a2adf76591"
  },
  {
    "url": "assets/js/8.7b540ffb.js",
    "revision": "cb08d45d2093176116f0b6111c496907"
  },
  {
    "url": "assets/js/9.31d597cd.js",
    "revision": "824fbe2e0ecf26cf4f966c35afd35469"
  },
  {
    "url": "assets/js/app.7e66a40a.js",
    "revision": "ffeaad1a8f92ac7cb2598f92ec7b840c"
  },
  {
    "url": "conclusion/index.html",
    "revision": "f645158255c2b15140abf7d746c45eb3"
  },
  {
    "url": "design/index.html",
    "revision": "741b891d9b357cc6df5d655af8cade11"
  },
  {
    "url": "index.html",
    "revision": "c8e258f169b7fb0a5e76ef516cf25047"
  },
  {
    "url": "intro/index.html",
    "revision": "8cb6f88727b461f3a1bf9a4dfc2533d4"
  },
  {
    "url": "license.html",
    "revision": "70a2edbdcd1a16b29dc6ec11e14ab937"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "02dd30a62cd3760213de80c3c2a6254c"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "2bf0d9543b3b0ea96eec88c366057d21"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "318aec447f549c54bb11db5ecea38232"
  },
  {
    "url": "software/index.html",
    "revision": "5df60147c6e22f87f6ef300cf03f4cee"
  },
  {
    "url": "test/index.html",
    "revision": "b476b11fd2d3d3ed8dfc82920dd0fb99"
  },
  {
    "url": "use cases/index.html",
    "revision": "23065d4f1b9c805a4c81ecab258ddc15"
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
