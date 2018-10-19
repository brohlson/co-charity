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
    "url": "webpack-runtime-ff2db2b8a51788b34559.js"
  },
  {
    "url": "app-c285f7471f94b07676a1.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-0691004cd9de246c1542.js"
  },
  {
    "url": "index.html",
    "revision": "78f991b546b51bf242adbfafaf28ae6f"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "9df7cd76e623068fbc90cd66c6fd0bf6"
  },
  {
    "url": "component---src-pages-index-js.13a3da962e6f2e5fc5d2.css"
  },
  {
    "url": "component---src-pages-index-js-8ecae847018a28215e24.js"
  },
  {
    "url": "7-20b0916fa340b05e0635.js"
  },
  {
    "url": "0-553bf37a71f3ae5affd3.js"
  },
  {
    "url": "static/d/46/path---index-6a9-kDEd7Np8C0OtnYHrkLgxrhX6w.json",
    "revision": "0b2cedfc21b45763f9efcd692dd2bae0"
  },
  {
    "url": "component---src-pages-404-js.13a3da962e6f2e5fc5d2.css"
  },
  {
    "url": "component---src-pages-404-js-c70d22de1f4612384841.js"
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