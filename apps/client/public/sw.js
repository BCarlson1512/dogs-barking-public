if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return a[e]||(s=new Promise(async s=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=s}else importScripts(e),s()})),s.then(()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]})},s=(s,a)=>{Promise.all(s.map(e)).then(e=>a(1===e.length?e[0]:e))},a={require:Promise.resolve(s)};self.define=(s,c,n)=>{a[s]||(a[s]=Promise.resolve().then(()=>{let a={};const i={uri:location.origin+s.slice(1)};return Promise.all(c.map(s=>{switch(s){case"exports":return a;case"module":return i;default:return e(s)}})).then(e=>{const s=n(...e);return a.default||(a.default=s),a})}))}}define("./sw.js",["./workbox-f790fbde"],(function(e){"use strict";importScripts(),e.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/server/middleware-manifest.json",revision:"4f5ca87a6870c96ad6fb0f65adfdac9b"},{url:"/_next/static/chunks/07454ad4-ffb5c14cf82c9d7d.js",revision:"57da341f72bfe286f1f15f1a9253b6b6"},{url:"/_next/static/chunks/18a076a3-f9eca26ffcbee866.js",revision:"e2f290373fe02f2034e9a70db6541071"},{url:"/_next/static/chunks/312-5b8353a7e3430e61.js",revision:"6a556a135e12eaa33224db2467e25ffc"},{url:"/_next/static/chunks/387-804ad65586a59993.js",revision:"3c2092760da4f9a40a879f213e4d9af7"},{url:"/_next/static/chunks/455-577c3a31512ae880.js",revision:"0c671ba62cd1343a500b8514a6074ca1"},{url:"/_next/static/chunks/68-4fa3855efa5c3629.js",revision:"b048ac6a403c53d1a63b90f51eef545d"},{url:"/_next/static/chunks/framework-32601ef4faa93e16.js",revision:"d53f6dce73ac1f4f4985b4f4d3a575ed"},{url:"/_next/static/chunks/main-4af0464549ad562a.js",revision:"06898a67db91a92843aca9589458fd2f"},{url:"/_next/static/chunks/pages/_app-433962c49e5b1bf3.js",revision:"18a442adc2103868a2672622c821e393"},{url:"/_next/static/chunks/pages/_error-92d2b6ad79a17272.js",revision:"8fd08b4f6fe0e2790ae4620492009221"},{url:"/_next/static/chunks/pages/auth/sign-in-a31347ed43935c34.js",revision:"6cd61814e3872e7214e3d46b7413d2fd"},{url:"/_next/static/chunks/pages/auth/sign-out-ac06970093b419ec.js",revision:"35c2e5ac09b9842e591c380f587beeea"},{url:"/_next/static/chunks/pages/auth/sign-up-09d193aa514a267c.js",revision:"9ce702c49b4d38a27a5d953f689887e0"},{url:"/_next/static/chunks/pages/catalog-c7abbc353ee23f1b.js",revision:"36f0f6bebddae8d853f803d6ad1beafc"},{url:"/_next/static/chunks/pages/course/%5Bid%5D-e7ae5e2e92380a75.js",revision:"3febd087753969eb62b79ffd25964b1f"},{url:"/_next/static/chunks/pages/error/%5Bid%5D-86ec909f06489768.js",revision:"1aea6af823ed9e33b4f03126b1e84eef"},{url:"/_next/static/chunks/pages/index-8203fc863013260f.js",revision:"54a158471e778a8ee69c9f63d68ef562"},{url:"/_next/static/chunks/pages/planner-d6d4a2da6f4ebe22.js",revision:"7187d9c98785739f335e938e4b9474f3"},{url:"/_next/static/chunks/pages/profile-68edb0648ba304be.js",revision:"8d56d1f7296acece65616bf7a2c409f9"},{url:"/_next/static/chunks/pages/programs/%5BprogramId%5D-85bbf627d55413b0.js",revision:"3bab137a9aee0fb6199aa25f0fde9be7"},{url:"/_next/static/chunks/pages/school/%5Bid%5D-b9c264007ea74b9a.js",revision:"a72506cad8e637627e5dfa5d8abcdccd"},{url:"/_next/static/chunks/pages/swagger-8e514555c27cbbf7.js",revision:"cf055bf5c6f0278289d3db89280f59ec"},{url:"/_next/static/chunks/polyfills-5cd94c89d3acac5f.js",revision:"99442aec5788bccac9b2f0ead2afdd6b"},{url:"/_next/static/chunks/webpack-cb7634a8b6194820.js",revision:"1fd72a66e4bc2658bbca0754def47fc5"},{url:"/_next/static/css/6cf43f3f95e7d959.css",revision:"eff2d6c8192279617d8f7c3dfea014ec"},{url:"/_next/static/qWzwdvw4N9w-G3lt56bgo/_buildManifest.js",revision:"a7ed1e6832a86a643773c203419a97d1"},{url:"/_next/static/qWzwdvw4N9w-G3lt56bgo/_middlewareManifest.js",revision:"fb2823d66b3e778e04a3f681d0d2fb19"},{url:"/_next/static/qWzwdvw4N9w-G3lt56bgo/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/assets/contact_images/Ben.jpg",revision:"cde6c6d6ee996c7eedfe054fe5aba904"},{url:"/assets/contact_images/Conor.jpg",revision:"ec3e13f3c36061dc3075f3667599aa24"},{url:"/assets/contact_images/Dylan.jpg",revision:"b223d8269db52987c6edc17d8c62d711"},{url:"/assets/contact_images/Greg.jpg",revision:"e9b305a66abf0c6cbe50bd38ede60d2e"},{url:"/assets/contact_images/Karan.jpeg",revision:"a234d4d1575f978cc05e425ec778ee6d"},{url:"/assets/contact_images/Noah.png",revision:"fe15f632a9dbb574908d438e55d7d088"},{url:"/assets/contact_images/bender.jpg",revision:"06cd0447576f528e34034e3a9b42ac8c"},{url:"/assets/graph-example-1.png",revision:"bf6aea71f15906caec23537832d1da15"},{url:"/favicon.ico",revision:"11943ca75ae85dc12a0fea058c39b2e4"},{url:"/icons/Logo-no-bg.svg",revision:"6ac0d779321462ac9899ec2a44f6e6bc"},{url:"/icons/Logo.svg",revision:"b781987750b58b10749b3d35127c50da"},{url:"/icons/icon-128x128.png",revision:"5229855cdf3295384c1d576eb064c132"},{url:"/icons/icon-144x144.png",revision:"1c1b5977f186be245488dd74764702a6"},{url:"/icons/icon-152x152.png",revision:"6a7423f7e66fd63d67dc011a36c2b4bf"},{url:"/icons/icon-16x16.png",revision:"d030150ed9cea1c878845c220cce9d9a"},{url:"/icons/icon-180x180.png",revision:"a1430e24f6026733b96218eb37ef605f"},{url:"/icons/icon-192x192.png",revision:"3f77c7742c8323190250b385bbacb0dc"},{url:"/icons/icon-32x32.png",revision:"061bcf043f8c017413d5ccf613f95acd"},{url:"/icons/icon-384x384.png",revision:"755dd5b6462a192ef4e759c72b9e23c5"},{url:"/icons/icon-512x512.png",revision:"9e34884b5402f12e720573ee07c9813d"},{url:"/icons/icon-72x72.png",revision:"f399bc99b0719f9069bbee8570635104"},{url:"/icons/icon-96x96.png",revision:"f0adaf564e9d0a0b0a0661ec1b26cc16"},{url:"/manifest.json",revision:"4c7251f2f42045e378aceb0f9ebc3655"},{url:"/vercel.svg",revision:"26bf2d0adaf1028a4d4c6ee77005e819"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[new e.ExpirationPlugin({maxEntries:1,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/api\/.*$/i,new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/.*/i,new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));
