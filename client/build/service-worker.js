"use strict";var precacheConfig=[["/index.html","100ee4bb57170d1a33b535ddeb84c245"],["/static/css/main.96e37d69.css","18d1e366ca9cfa1e6ab695ffb77e8c3a"],["/static/js/main.6042b117.js","7ad244daaa85822fff7e65f2ec022ef8"],["/static/media/5gal1.cf54d43d.jpg","cf54d43d346961f15eb2f0fbaf9f6137"],["/static/media/5gal2.37239f64.jpg","37239f64b462f0e4dc25db293b7b4263"],["/static/media/5gal3.9875df80.jpg","9875df806ce8fb891ead17e1a666d073"],["/static/media/5gal4.20eea594.jpg","20eea594eaab395255ea91e0f093ecca"],["/static/media/5gal5.903d90a8.jpg","903d90a8ce6b72a2b7168b1816b6f6ba"],["/static/media/amazon-button.f75d1e5a.png","f75d1e5ad51e1bb51435919589d068a7"],["/static/media/clownfish.b8f20bec.png","b8f20bec9c9141c554975baee890759c"],["/static/media/fishLogo.86120817.png","86120817f569a0e607687cbad938c901"],["/static/media/goal1.19c418dc.jpg","19c418dceb6957148da6de3a5a542b94"],["/static/media/goal1Transparent.7e8959ba.png","7e8959ba60e90ce2eaf00fd80451b83a"],["/static/media/goal2.becb7dd2.jpg","becb7dd2af39735f56d3d5867af1fefa"],["/static/media/goal3.3eab9588.jpg","3eab9588b305bb8786503a2e3cb29c4c"],["/static/media/goal4.bc3dce3e.jpg","bc3dce3e13e47852b5a53902a13b34d8"],["/static/media/goal5.e1d66a69.jpg","e1d66a69094dd1bff0447f1a42a25a0f"],["/static/media/hero10.9873d9eb.jpg","9873d9ebe14f68340bb8ca4d7cbf0ecd"],["/static/media/hero11.08cb7026.jpg","08cb70262d4558101fc680f8b229c3f0"],["/static/media/hero12.9873d9eb.jpg","9873d9ebe14f68340bb8ca4d7cbf0ecd"],["/static/media/hero13.c2a63bc5.jpg","c2a63bc5b37d36cddb04077a4e5d34f4"],["/static/media/hero14.69f5713b.jpg","69f5713bb86b1b5d14c85dc9f09a205c"],["/static/media/hero15.33a8fa19.jpg","33a8fa19f97b4eb35c6662e105d7981a"],["/static/media/hero16.67fa9fcc.jpg","67fa9fcce9e20ee513295b3e7e156fab"],["/static/media/hero17.9b8d7660.jpg","9b8d7660990ece4667b06a16da1a0b16"],["/static/media/hero3.062aa802.jpg","062aa802a26c15dda1e9f06686edf13c"],["/static/media/hero5.d1aa844d.jpg","d1aa844df08acf324ef903eead641040"],["/static/media/hero6.12a43b4c.jpg","12a43b4c4b30490b5a0fd3186b4d5730"],["/static/media/hero7.24748fcf.jpg","24748fcfeaece7dd2337c99fa3a10636"],["/static/media/hero8.ef4ac566.jpg","ef4ac5664cfc38a2e7ccc8be8ae7da12"],["/static/media/hero9.da9da595.jpg","da9da59542882d5c3b12da45982d1478"],["/static/media/instagram.e2adc36c.png","e2adc36cee4af06d6ef6a35081f4a519"],["/static/media/messenger.89bc0e89.png","89bc0e8931d58d262b9d4f836fa90c25"],["/static/media/tank.87e3cc54.jpeg","87e3cc54c6fdfb9fddd1f6c5125423b2"],["/static/media/tankTransparent.7b4dca52.png","7b4dca5215d587233655cdc333e27734"],["/static/media/twitter.eda5365c.png","eda5365cf6ae4c118829bcb1e724b861"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,t,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),n.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return t.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],c=new URL(a,self.location),n=createCacheKey(c,hashParamName,t,/\.\w{8}\./);return[c.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(c){return setOfCachedUrls(c).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return c.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,t=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),c="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,c),e=urlsToCacheKeys.has(t));var n="/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(t=new URL(n,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});