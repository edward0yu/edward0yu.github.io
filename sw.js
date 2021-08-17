const cacheName = 'greener-v011';
const filesToCache = [];

/* Start the service worker and cache all of the app's content */
self.addEventListener('install', function (e) {});

/* Serve cached content when offline */
self.addEventListener('fetch', function (e) {
  e.respondWith(
    caches.match(e.request).then(function (response) {
      return response || fetch(e.request);
    })
  );
});