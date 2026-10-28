// 서비스워커 비활성화 — 기존 캐시 모두 삭제
self.addEventListener('install', e => {
  self.skipWaiting();
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.map(k => caches.delete(k)))));
});
self.addEventListener('fetch', e => {
  e.respondWith(fetch(e.request));
});
