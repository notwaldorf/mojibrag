/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */
module.exports = {
  staticFileGlobs: [
    '/index.html',
    '/manifest.json',
    '/bower_components/webcomponentsjs/webcomponents-lite.min.js',
    '/bower_components/emojilib/emojis.json',
    // Precache offline support deps
    // https://github.com/notwaldorf/mojibrag/issues/49
    '/bower_components/app-storage/app-indexeddb-mirror/app-indexeddb-mirror-worker.js',
    '/bower_components/app-storage/app-indexeddb-mirror/common-worker-scope.js',
    '/bower_components/app-storage/app-indexeddb-mirror/common-worker.html',
  ],
  // Enable retrieval of cached common-scope-worker on browsers lacking SharedWorker
  // The worker is fetched as "https://.../common-scope-worker.js?.../app-indexeddb-mirror.js"
  // the arg needs to be stripped so we hit the cache
  // https://github.com/notwaldorf/mojibrag/issues/49
  ignoreUrlParametersMatching: [
    /app-indexeddb-mirror/
  ],
  navigateFallback: '/index.html',
  navigateFallbackWhitelist: [/^(?!\/__)/, ' /getProjectConfig/'],
  runtimeCaching: [
    {
      // cache Google user profile pics
      urlPattern: /^https:\/\/lh3.googleusercontent.com\/.*/,
      handler: 'networkFirst'
    }
  ]
};
