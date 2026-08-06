const CACHE_NAME = 'ruko-slot-app-v20260807-pages-redeploy';
const APP_SHELL_URLS = [
  './',
  './index.html',
  './app.js?v=20260807-pages-redeploy',
  './manifest.webmanifest',
  './apple-touch-icon.png',
  './ruko-app-loading.png',
];
const STATIC_CDN_HOSTS = new Set([
  'cdn.tailwindcss.com',
  'unpkg.com',
  'esm.sh',
]);

const isCacheableResponse = (response) => (
  response && (response.ok || response.type === 'opaque')
);

const cacheResponse = async (cache, request, response) => {
  if (isCacheableResponse(response)) {
    await cache.put(request, response.clone());
  }
  return response;
};

const fallbackDocument = async (cache) => (
  await cache.match('./index.html') ||
  new Response('アプリを読み込めませんでした。通信状況を確認して再読み込みしてください。', {
    status: 503,
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  })
);

self.addEventListener('install', event => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE_NAME);
    await Promise.allSettled(APP_SHELL_URLS.map(url => cache.add(url)));
    await self.skipWaiting();
  })());
});

self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    const cacheNames = await caches.keys();
    await Promise.all(cacheNames
      .filter(name => name !== CACHE_NAME)
      .map(name => caches.delete(name)));
    await self.clients.claim();
  })());
});

self.addEventListener('fetch', event => {
  const request = event.request;
  if (request.method !== 'GET') return;

  const url = new URL(request.url);
  const isStaticCdnRequest = STATIC_CDN_HOSTS.has(url.hostname);
  const isStaticAsset = ['style', 'image', 'font'].includes(request.destination);
  const isAppScript = url.origin === self.location.origin && url.pathname.endsWith('/app.js');

  if (request.mode === 'navigate' || isAppScript) {
    event.respondWith((async () => {
      const cache = await caches.open(CACHE_NAME);
      try {
        const response = await fetch(request);
        return cacheResponse(cache, request, response);
      } catch (error) {
        if (request.mode === 'navigate') return fallbackDocument(cache);
        const cached = await cache.match(request);
        return cached || new Response('', { status: 504, statusText: 'Offline' });
      }
    })());
    return;
  }

  if (url.origin === self.location.origin || isStaticCdnRequest || isStaticAsset) {
    event.respondWith((async () => {
      const cache = await caches.open(CACHE_NAME);
      const cached = await cache.match(request);
      if (cached) {
        fetch(request)
          .then(response => cacheResponse(cache, request, response))
          .catch(() => null);
        return cached;
      }

      try {
        const response = await fetch(request);
        return cacheResponse(cache, request, response);
      } catch (error) {
        return new Response('', { status: 504, statusText: 'Offline' });
      }
    })());
  }
});
