/* archivo de scripts que corre en segundo plano e intercepta las peticiones a la red 
para guardar copias de HTML, CSS y JS. Eso permite que funcione sin conexión. */

const CACHE_NAME = 'v1_cache_pwa_exp';
const urlsToCache = ['./', './styles.css', './scripts.js'];

// instalar el Service Worker y guardar archivos en caché
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

// responder con los archivos en caché si no hay internet
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(res => res || fetch(e.request))
  );
});
