const CACHE_NAME = 'picsum-app-v1';
const urlsToCache = [
  'index.html',
  'Styles/style.css',
  'JavaScript/aleatorio.js',
  'JavaScript/batalla.js',
  'JavaScript/lista.js',
  'JavaScript/busqueda.js'
];

// Instalar y cachear archivos
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(urlsToCache))
  );
});

// Activar y limpiar cachés viejos
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.filter(key => key !== CACHE_NAME)
            .map(key => caches.delete(key))
      )
    )
  );
});

// Interceptar peticiones
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then(resp => resp || fetch(event.request))
  );
});
