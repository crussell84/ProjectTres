"use strict";var precacheConfig=[["/index.html","0d27659742e6b38ce7e9662c11fc862d"],["/static/css/main.8b79b53f.css","148c8c144bfced6bf5a077ddf3154e0e"],["/static/js/main.0fcc0b22.js","8d337707ba9bb09f68116adbcb8686c8"],["/static/media/1.2519e7ad.jpg","2519e7adf907460e35cc574af26a5fbd"],["/static/media/applebrick.3664d275.jpg","3664d275f3df43bbd94a51d393d4c5e2"],["/static/media/applecord.5662dcdc.jpg","5662dcdcb31ca1cda866b6febfd21dc4"],["/static/media/arrow_down.ebe1c3a6.svg","ebe1c3a69ddb3b046edbb1f11f689d78"],["/static/media/cart.4dfa156e.svg","4dfa156e444147e64a0755b3a6a9a111"],["/static/media/construction.56f40fc9.png","56f40fc9940abc9a3cd6b94918250c28"],["/static/media/default_pic.7a21cbe9.svg","7a21cbe90fd31540fb0384792fbc4a86"],["/static/media/ent3rprise.bddeb198.svg","bddeb1989798fb94ee2aeca4ae3a46ee"],["/static/media/headset.f8d472f4.jpg","f8d472f44fd013dc0dd990f1599e4418"],["/static/media/hplaptop.cb4584a5.png","cb4584a5d9f977827e431e087ec3e630"],["/static/media/iphone_xr.387846cc.jpg","387846cc92acb6076721ecd6e85f651c"],["/static/media/magic_keyboard.bd2b59fd.jpg","bd2b59fdd7964ea6ad794f323a523062"],["/static/media/manage.58a47239.svg","58a472392fe1b1cc929a319de259b090"],["/static/media/market.e7167249.svg","e716724995e7c399f5b43ccd5281121b"],["/static/media/mbp_13.a713397b.jpg","a713397b3b8387dbc1870b9c2c4e0a40"],["/static/media/mbp_15.fc827b14.jpg","fc827b1423ec0bdd00b796e7d41271f3"],["/static/media/pixel3.4c7b8606.png","4c7b86061d96564072703643710928d2"],["/static/media/products.8efc3b3f.svg","8efc3b3f75efd836d0ae7daf54b6e33e"],["/static/media/support.e3be11d1.svg","e3be11d199e470c8f7bdf339cd21fbd5"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,n){var c=new URL(e);return n&&c.pathname.match(n)||(c.search+=(c.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),c.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),c=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),c]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),e=urlsToCacheKeys.has(a));var c="/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(c,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});