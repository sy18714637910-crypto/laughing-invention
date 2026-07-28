const CACHE_NAME = 'habit-tracker-v2';
const ASSETS = ['/','/打卡.html'];
self.addEventListener('install',(e)=>{e.waitUntil(caches.open(CACHE_NAME).then(c=>c.addAll(ASSETS).catch(()=>{})))});
self.addEventListener('activate',(e)=>{e.waitUntil(caches.keys().then(n=>Promise.all(n.filter(x=>x!==CACHE_NAME).map(x=>caches.delete(x)))))});
self.addEventListener('fetch',(e)=>{e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request)))});