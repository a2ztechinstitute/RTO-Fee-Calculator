self.addEventListener("install", event => {
  event.waitUntil(
    caches.open("rto-cache").then(cache => {
      return cache.addAll([
        "/",
        "/index.html",
        "/script.js",
        "/manifest.webmanifest"
      ]);
    })
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
