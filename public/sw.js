/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("workbox-v3.6.2/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v3.6.2"});

workbox.core.setCacheNameDetails({prefix: "gatsby-plugin-offline"});

workbox.skipWaiting();
workbox.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "webpack-runtime-7c1821992b9cbe41eae5.js"
  },
  {
    "url": "app-30e225c3485fd11fcb7b.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-9a8684828c06f70132d3.js"
  },
  {
    "url": "index.html",
    "revision": "a82348c145bec8986d14a02a9f95050b"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "3f04c601c02f57d75fb391d3f40b7a99"
  },
  {
    "url": "component---src-pages-index-js.4ae242bee67afeaa3f9b.css"
  },
  {
    "url": "component---src-pages-index-js-f1d5bda7bccaeac0c352.js"
  },
  {
    "url": "5-53b2ddc7f751f6d21bdb.js"
  },
  {
    "url": "static/d/441/path---index-6a9-4mP32B8HOZ8NWPmuBFNdn35kDB8.json",
    "revision": "a923741409e32cc4fef57e91ed72ae98"
  },
  {
    "url": "component---src-pages-404-js.0cc3bf74cf88fe54c698.css"
  },
  {
    "url": "component---src-pages-404-js-e899a356dc08ceda3eb6.js"
  },
  {
    "url": "static/d/164/path---404-html-516-62a-NZuapzHg3X9TaN1iIixfv1W23E.json",
    "revision": "c2508676a2f33ea9f1f0bf472997f9a0"
  },
  {
    "url": "static/d/520/path---offline-plugin-app-shell-fallback-a-30-c5a-NZuapzHg3X9TaN1iIixfv1W23E.json",
    "revision": "c2508676a2f33ea9f1f0bf472997f9a0"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "20a3ab69240b51a997068463ba56c635"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute("/offline-plugin-app-shell-fallback/index.html", {
  whitelist: [/^[^?]*([^.?]{5}|\.html)(\?.*)?$/],
  blacklist: [/\?(.+&)?no-cache=1$/],
});

workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/, workbox.strategies.staleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https:/, workbox.strategies.networkFirst(), 'GET');
"use strict";

/* global workbox */
self.addEventListener("message", function (event) {
  var api = event.data.api;

  if (api === "gatsby-runtime-cache") {
    var resources = event.data.resources;
    var cacheName = workbox.core.cacheNames.runtime;
    event.waitUntil(caches.open(cacheName).then(function (cache) {
      return Promise.all(resources.map(function (resource) {
        return cache.add(resource).catch(function (e) {
          // ignore TypeErrors - these are usually due to
          // external resources which don't allow CORS
          if (!(e instanceof TypeError)) throw e;
        });
      }));
    }));
  }
});