const CACHE_NAME = 'gov24-mobile-id-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/mobile_id_full.html',
  '/manifest.json',
  '/images/id-photo.jpg',
  '/images/Emblem_of_the_Government_of_the_Republic_of_Korea.svg',
  '/images/제목 없음.jpeg',
  '/images/png-clipart-three-gray-lines-illustration-hamburger-menu-icon-icons-logos-emojis-menu-icons.png',
  'https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;700&display=swap'
];

// 설치 시 캐시 저장
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

// 요청 시 캐시에서 제공 (없으면 네트워크 요청)
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      return cachedResponse || fetch(event.request);
    })
  );
});

// 오래된 캐시 정리
self.addEventListener('activate', (event) => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then((cacheNames) =>
      Promise.all(
        cacheNames.map((cacheName) => {
          if (!cacheWhitelist.includes(cacheName)) {
            return caches.delete(cacheName);
          }
        })
      )
    )
  );
});
