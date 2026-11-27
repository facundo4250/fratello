// Service worker mínimo: permite instalar la app. No guarda copias (siempre trae la versión nueva).
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', e => {
  if (e.request.mode !== 'navigate') return;
  e.respondWith(fetch(e.request).catch(() => new Response(
    '<!doctype html><meta charset="utf-8"><meta name="viewport" content="width=device-width"><body style="font-family:sans-serif;background:#0B0B0D;color:#fff;display:grid;place-items:center;height:100vh;margin:0;text-align:center"><div><h2>Sin conexión</h2><p>Fratello necesita internet. Probá de nuevo en un rato.</p></div>',
    { headers: { 'Content-Type': 'text/html; charset=utf-8' } })));
});
