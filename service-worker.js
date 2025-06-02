
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('gov24-cache').then(cache => {
      return cache.addAll([
        './',
        './index.html',
        './images/id-photo.jpg',
        './images/Emblem_of_the_Government_of_the_Republic_of_Korea.svg',
        './images/제목 없음.jpeg',
        './manifest.json'
      ]);
    })
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => response || fetch(e.request))
  );
});
