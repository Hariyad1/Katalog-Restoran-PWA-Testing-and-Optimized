if(!self.define){let e,i={};const n=(n,d)=>(n=new URL(n+".js",d).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(d,c)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let s={};const b=e=>n(e,r),a={module:{uri:r},exports:s,require:b};i[r]=Promise.all(d.map((e=>a[e]||b(e)))).then((e=>(c(...e),s)))}}define(["./workbox-3ca83693"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"51f86ac74ab00a18df07.jpg",revision:null},{url:"app.webmanifest",revision:"dde1b6df710914881b7ac79072b12bf6"},{url:"app~a51fa3f5.bundle.js",revision:"49baf0228661d285314ebece4ca2fbcc"},{url:"app~a51fa3f5.bundle.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"app~ca0940c6.bundle.js",revision:"cee3bfd0b2f25a64c6ecc0a876d60e8c"},{url:"app~ca0940c6.bundle.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"app~d1658f4b.bundle.js",revision:"e8b1faebdbbb83df0c6e668d5d363df9"},{url:"app~d1658f4b.css",revision:"91c497d01e16b9011fb0078b1dda2528"},{url:"app~e4317507.bundle.js",revision:"77a9c9016b97dae2514295a68b07790b"},{url:"app~e4317507.bundle.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"app~f82e0cd2.bundle.js",revision:"c72b81e0684e45a0b6941ab24d9632d2"},{url:"data/DATA.json",revision:"ab0067c1caf3c486d84548b792705c5e"},{url:"e9c760ba59ebe86fee73.jpg",revision:null},{url:"favicon.png",revision:"34b09bd4b53edf949e51f64d7414425e"},{url:"icons/icon-128x128.png",revision:"35aff81e905d96863635b75445d12d93"},{url:"icons/icon-144x144.png",revision:"5b9a94ec86255b8d1e008b0d1b28c219"},{url:"icons/icon-152x152.png",revision:"752338b0cb7ac51a73b0d501773a98c5"},{url:"icons/icon-192x192.png",revision:"34b09bd4b53edf949e51f64d7414425e"},{url:"icons/icon-384x384.png",revision:"d10363b0f809b3bf133dc20b9554d5ac"},{url:"icons/icon-512x512.png",revision:"31e0b5e4a1dbce69bf44d920f3c8ce6c"},{url:"icons/icon-72x72.png",revision:"f51727e9ed79822e161e2bd46d7ff7da"},{url:"icons/icon-96x96.png",revision:"8c9647c90ad01dc35beffc2fd0d4727e"},{url:"index.html",revision:"bc99f4936258f8390a2d9933643295b8"}],{}),e.registerRoute((({url:e})=>e.href.startsWith("https://restaurant-api.dicoding.dev")),new e.StaleWhileRevalidate({cacheName:"restodb-api",plugins:[]}),"GET"),e.registerRoute((({url:e})=>e.href.startsWith("https://restaurant-api.dicoding.dev/images/medium/")),new e.StaleWhileRevalidate({cacheName:"restodb-image-api",plugins:[]}),"GET")}));
//# sourceMappingURL=sw.bundle.js.map
