const CACHE_NAME = 'fnaf-hardcore-v1';

// I grabbed these filenames directly from your code's IMAGE_URLS object
const ASSETS = [
  './',
  './index.html',
  './BonnieCamera.png',
  './BonnieDoor.png',
  './BonneJumpscare.png', // Kept your spelling from the code
  './ChicaCamera.png',
  './ChicaDoor.png',
  './ChicaJumpscare.png',
  './GoldenFreddyOffice.png',
  './GoldenJumpscare.png',
  './FreddyJumpscare.png',
  './icon-192.png',
  './icon-512.png'
];

// Install Event: Caches the game files
self.addEventListener('install', (e) => {
  console.log('[Service Worker] Installing and caching game files...');
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

// Fetch Event: Serve from cache if offline
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});
