const CACHE_NAME = "fsy-checkin-safe-v1";

self.addEventListener("install", (event) => {
  // すぐ新しい Service Worker を有効化
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => caches.delete(key))
      );
    }).then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  // 何もキャッシュせず、常にネットワークを使う
  return;
});
