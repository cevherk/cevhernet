// Service Worker for cevhernet
const CACHE_NAME = 'cevhernet-cache-v1';

// Resources to cache on install
const STATIC_RESOURCES = [
    '/',
    '/index.html',
    '/assets/css/style.min.css',
    '/assets/js/main.min.js',
    '/assets/js/i18n.min.js',
    '/assets/js/error-tracking.min.js',
    '/assets/images/profile/profile-photo.webp',
    '/assets/images/favicon-16x16.webp',
    '/assets/images/favicon-32x32.webp'
];

// Install event
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                console.log('Opened cache');
                return cache.addAll(STATIC_RESOURCES);
            })
    );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
    const cacheWhitelist = [CACHE_NAME];
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    if (cacheWhitelist.indexOf(cacheName) === -1) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});

// Fetch event - serve from cache, fallback to network
self.addEventListener('fetch', (event) => {
    // Skip cross-origin requests
    if (!event.request.url.startsWith(self.location.origin)) {
        return;
    }
    
    // For HTML requests, use network-first strategy
    if (event.request.headers.get('Accept')?.includes('text/html')) {
        event.respondWith(
            fetch(event.request)
                .then((response) => {
                    // Clone response and store in cache
                    const clone = response.clone();
                    caches.open(CACHE_NAME)
                        .then((cache) => {
                            cache.put(event.request, clone);
                        });
                    return response;
                })
                .catch(() => {
                    return caches.match(event.request);
                })
        );
        return;
    }
    
    // For other requests, use cache-first strategy
    event.respondWith(
        caches.match(event.request)
            .then((response) => {
                // Return from cache if found
                if (response) {
                    return response;
                }
                
                // Otherwise, fetch from network
                return fetch(event.request)
                    .then((response) => {
                        // Check if valid response
                        if (!response || response.status !== 200 || response.type !== 'basic') {
                            return response;
                        }
                        
                        // Clone and cache new resources
                        const responseToCache = response.clone();
                        caches.open(CACHE_NAME)
                            .then((cache) => {
                                cache.put(event.request, responseToCache);
                            });
                        
                        return response;
                    });
            })
    );
}); 