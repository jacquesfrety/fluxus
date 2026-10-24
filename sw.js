// Minimal service worker: makes Fluxus installable. It does NOT cache anything, so the app is always
// the latest version — requests simply go to the network.
self.addEventListener('install', e => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', () => {});
