'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "404.html": "a41ff51fd82b83325ea6afddd61786ee",
"assets/AssetManifest.json": "f9ab3f66ba6eed5df9d4114f8a5da896",
"assets/assets/data/cities.json": "081c32a639f6b5e5a074840764c4fe6c",
"assets/assets/data/file": "5a3799ea33c3bd52402ab2a8583129cc",
"assets/assets/data/Institutes.json": "a5e0da09d9e2b92955b1acd92c71397c",
"assets/assets/data/List%2520of%2520cities.json": "acd5e7d5f68f536e4c70d978685b43d3",
"assets/assets/data/list_cities.dart": "acd3ca36d7db2e5fa42bd0b193a51f08",
"assets/assets/data/list_institutes.dart": "dbd1e81943635cacc3ad5a18dcd2efbf",
"assets/assets/data/list_provinces.dart": "c5bf85eb995ac2d86b9ad5eda3615247",
"assets/assets/fonts/Caroline.otf": "9befde600a3cee89f05a827726f069d8",
"assets/assets/fonts/DancingScript-VariableFont_wght.ttf": "d3bebba97d549436fd6137d05d55ae33",
"assets/assets/fonts/josephsophia.otf": "9795861f56eed42e6ccfef1358e445a5",
"assets/assets/fonts/josephsophia.ttf": "481b202383728d3e0c7f3b2de03a1a25",
"assets/assets/fonts/Quicksand-VariableFont_wght.ttf": "f9baef8ac0d836e6486419e282e42336",
"assets/assets/fonts/Raleway-Italic-VariableFont_wght.ttf": "676edc6dcd84e2d64bb6d3f242651d59",
"assets/assets/fonts/Raleway-VariableFont_wght.ttf": "3b5635ac5d39c28200bf3993d90d09c7",
"assets/assets/fonts/Sail-Regular.ttf": "820151b880fd3140fa9a1b230c2391bc",
"assets/assets/fonts/Valentime.otf": "170e051fafbb781443e07b33c342e018",
"assets/assets/fonts/WorkSans-Italic-VariableFont_wght.ttf": "89d7843b0b807faca3ff435fc0f23c0c",
"assets/assets/fonts/WorkSans-VariableFont_wght.ttf": "b24396917a138794160b24ff04a71d80",
"assets/assets/images/2.png": "a162741a89d5504cbf8db70f6dc0ea23",
"assets/assets/images/3.png": "6771388c86320307ba03cd1dbbb2227f",
"assets/assets/images/4.png": "530dac6900ced1c8ed94b1bed0854db7",
"assets/assets/images/blackmode.png": "a657ae94f6c0a357f2c03f6249021786",
"assets/assets/images/consultants.png": "ef6516bd9befd6f0b11d9cfed9dcac01",
"assets/assets/images/heramigo.png": "999ecde29d64914c28995ce00a932092",
"assets/assets/images/heramigo_.png": "7c588becd223eba566095d0f713e8112",
"assets/assets/images/her_shield.png": "49f508296c86964d9bbe6b6463776026",
"assets/assets/images/lightmode.jpg": "c9aaae2394cabdedd16c65e4a4cfb117",
"assets/assets/images/Quick%2520Tips%2520Thumbnail.png": "a96801778c42a8355e5759531ef16211",
"assets/assets/images/SAFETY%2520Tips%2520Thumbnail.png": "f42b2933e8118ea412bb138321e5c4fd",
"assets/assets/images/Self%2520Defense%2520Thumbnail.png": "9268eb138078fd1a5bc003af467198fd",
"assets/assets/images/weaponsThumbnail.png": "b0870592914753d667e3814bb4aa7e77",
"assets/FontManifest.json": "92f9bcf2d472b7b4340062760c8f1681",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/NOTICES": "7a9503a40a8ea0f98f6264fcd723250d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/packages/flutter_inappwebview/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "00bb2b684be61e89d1bc7d75dee30b58",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "4b6a9b7c20913279a3ad3dd9c96e155b",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "dffd9504fcb1894620fa41c700172994",
"assets/packages/typicons_flutter/fonts/typicons.ttf": "29f9630f7d87a79830d1c321e1600f2e",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"CNAME": "aec446d9f5dae018e3ad69e136479e90",
"favicon.png": "e11b6808b7a9ce955017c9a2d08dc627",
"google9364ca3b72cd041e.html": "a1bb6b27eb048cf02c1f629d23948d24",
"icons/icon-192.png": "4bc6d994168838a9d4a18f148dc05a56",
"icons/icon-512.png": "a3514640779653725903e0ab08da82a0",
"index.html": "8e51ca5dd80de99e099c50c665926596",
"/": "8e51ca5dd80de99e099c50c665926596",
"main.dart.js": "f847c57a78ef360eaf1bd61347c65738",
"manifest.json": "ea2d0dbd734b37d8ae480ed7439fc7e5",
"privacy_policy.html": "5de06437c8a03677cf7537b993c5d31c",
"script.js": "82f86c1fc95ec414a8f51b23fd40c03a",
"version.json": "e84eade4413e9ae2bd3adf974a98751e"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
