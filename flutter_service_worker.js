'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "73dbadadbaab99b51b5e15cc58745623",
"assets/AssetManifest.bin.json": "66ad86813a938b416a811d7eaccf634f",
"assets/AssetManifest.json": "ac9583b65a58fea26b7c9c76df2a3110",
"assets/assets/data/listings.txt": "bf864a0dd20f27cfb7045aac8601e913",
"assets/assets/fonts/Roboto-Black.ttf": "53ab4bb513d53af898e25637a2750ffc",
"assets/assets/fonts/Roboto-BlackItalic.ttf": "fc9c6dc66452de428b034f2af1a561ce",
"assets/assets/fonts/Roboto-Bold.ttf": "2e9b3d16308e1642bf8549d58c60f5c9",
"assets/assets/fonts/Roboto-BoldItalic.ttf": "fa726104cd4b7e8f106e391fea744b08",
"assets/assets/fonts/Roboto-Italic.ttf": "270c8dce1ab3c57848d7d278cb96574f",
"assets/assets/fonts/Roboto-Light.ttf": "5b55e48d4daee5634648dd487340e37e",
"assets/assets/fonts/Roboto-LightItalic.ttf": "b4591abf6ddac60905ad8a2ac5ba5363",
"assets/assets/fonts/Roboto-Medium.ttf": "6679d67d72e0e7b34f407bac6df715ab",
"assets/assets/fonts/Roboto-MediumItalic.ttf": "18191c4ed1413aac2700bbfa58b90774",
"assets/assets/fonts/Roboto-Regular.ttf": "327362a7c8d487ad3f7970cc8e2aba8d",
"assets/assets/fonts/Roboto-Thin.ttf": "8e1900eabb62e4e502ee3de329e0b833",
"assets/assets/fonts/Roboto-ThinItalic.ttf": "0d058ce1aecaa16d26b71bdab2be31b0",
"assets/assets/images/clothing.png": "12fb2a33de023ab78191b5ac857da6f9",
"assets/assets/images/furniture.png": "031c732c19614d10f3e10e9a667f7f7b",
"assets/assets/images/notes.png": "9d4b5a25961981af0340af705c7bdd28",
"assets/assets/images/textbooks.png": "aa2a18184c4dcc67145094376ee43a85",
"assets/assets/images/tutoring.png": "04f8c990f2457ae54f9abdec8df55df8",
"assets/assets/items/item0-resized.png": "4f5130371c910b1bf0cd97c97118c9b1",
"assets/assets/items/item1-resized.png": "7e810fb5786b1c0749a107145b228474",
"assets/assets/items/item10-resized.png": "d3eaba66589ac75a4c4c8eddd4a6ba86",
"assets/assets/items/item11-resized.png": "178105b7714432d047684123c173c61d",
"assets/assets/items/item12-resized.png": "70655420237a47a334a8b5433c0cf19a",
"assets/assets/items/item13-resized.png": "4e9e9be67a798da0ad71327c1686af08",
"assets/assets/items/item14-resized.png": "a06900e0fba013e4e079d0437a71242c",
"assets/assets/items/item15-resized.png": "dc7ba60d42653afc3e843547cbc27778",
"assets/assets/items/item16-resized.png": "11b1e4f114ac8f503cf3f11b313c801f",
"assets/assets/items/item17-resized.png": "675c61dc9a73d45abaf68baad77275fa",
"assets/assets/items/item18-resized.png": "693721348d9c357895f7f08967355ae9",
"assets/assets/items/item19-resized.png": "6817fd6da0b98ed76eff645eecfedf1d",
"assets/assets/items/item2-resized.png": "a11801c709fb09e35520c80bbc959efa",
"assets/assets/items/item3-resized.png": "0e45331131fc5250567b7f83df01f670",
"assets/assets/items/item4-resized.png": "94c935bceadf833d0f41a20425986cde",
"assets/assets/items/item5-resized.png": "10993a81365c656a79bc8b8a60df79a8",
"assets/assets/items/item6-resized.png": "a1832b9e8516ec5f8a7670f5db450c3f",
"assets/assets/items/item7-resized.png": "d028089a52535ab7d7379a9c769c4c2b",
"assets/assets/items/item8-resized.png": "da319e445bba41640f108a97d989d4e7",
"assets/assets/items/item9-resized.png": "70ab0d14599ed044682ad40c6257bc79",
"assets/assets/logo.png": "9e099c94e09995abea569b2fb51dc519",
"assets/assets/logored.png": "1d82519df86ef72e3cc9373ff9debc96",
"assets/assets/my_items/item0.png": "131c214514be1ba8a7a69a0f0a6eeb7d",
"assets/assets/my_items/item1.png": "8d8b4fcc40079f5da7225011af5b8c9d",
"assets/assets/sounds/button_click.mp3": "a4366f347c96ade2e5c43083346236f8",
"assets/assets/sounds/poland.mp3": "52a10937d66e9276989e20a2d327968d",
"assets/assets/sounds/swoosh.mp3": "a2d0f86f595125feeca18edfbf48025e",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/fonts/MaterialIcons-Regular.otf": "8dc0709fe8a04cd3e3f3813a0e91d9c4",
"assets/NOTICES": "b9d73e42e4a80380177e833ee28ab5f9",
"assets/packages/flutter_map/lib/assets/flutter_map_logo.png": "208d63cc917af9713fc9572bd5c09362",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"flutter_bootstrap.js": "e1a162ed5bd3a5ea49f1250054807097",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "c275665a02ba88757415543d9f8cba1f",
"/": "c275665a02ba88757415543d9f8cba1f",
"main.dart.js": "c0ed454a7e2281ff5e91ae642c96e11d",
"manifest.json": "5857aaa609cd2bfb3917394ec8dd96b5",
"version.json": "23d2035a15821b21d9dd1c42fa478243"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
