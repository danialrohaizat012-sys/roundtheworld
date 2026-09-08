const CACHE='phoenix-astra-v24-icon-fix';
const CORE=['./','./index.html','./manifest.json','./astra-icon.svg','./icon-192.png','./icon-512.png','./icon-maskable-512.png','./apple-touch-icon.png','./favicon-64.png','./firebase-config.js'];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(CORE))));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k))))));
self.addEventListener('fetch',e=>{
 if(e.request.method!=='GET') return;
 e.respondWith(caches.match(e.request).then(cached=>{
   if(cached) return cached;
   return fetch(e.request).then(res=>{
     const copy=res.clone();
     caches.open(CACHE).then(c=>c.put(e.request,copy)).catch(()=>{});
     return res;
   }).catch(()=>caches.match('./index.html'));
 }));
});
