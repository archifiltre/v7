importScripts("precache-manifest.7df5a4a1638501ed5f804519845a0c10.js", "https://storage.googleapis.com/workbox-cdn/releases/3.2.0/workbox-sw.js");

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


workbox.skipWaiting();
workbox.clientsClaim();

try {
  workbox.googleAnalytics.initialize();
} catch(e) {

}

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */

self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(
  /.*googleapis|.*jsdelivr|.*gstatic|.*cloudflare/,
  workbox.strategies.cacheFirst({
    plugins: [new workbox.cacheableResponse.Plugin({"statuses":[200]})]
  }),
  'GET'
);

