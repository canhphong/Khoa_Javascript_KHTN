// Tên cache. Bạn có thể kiểm tra tại Chrome dev tools -> Applications -> Cache storage
const CACHE_NAME = 'demo-offline'
// Đường dẫn các resources mà bạn muốn cache
const CACHED_RESOURCES = [
    'page_1.html',
    'server.php?id=1',
    'server.php?id=2',
    'app.js',
]
// Bắt sự kiện oninstall của service worker để thêm các resource muốn cache
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(CACHED_RESOURCES)
        })
    )
});
// Intercept request 
self.addEventListener('fetch', (event) => {
    // Nếu trình duyệt đang online thì gửi request như bình thường. Nhưng thêm thao tác luu cache.
    if (navigator.onLine) {
        // Kiểm tra resource có thuộc CACHED_RESOURCES hay không
        let doPutToCache = (CACHED_RESOURCES.indexOf(location.pathname) !== -1)
        event.respondWith(fetchAndPut(event.request.url, doPutToCache))
    } else {
        // Nếu trình duyệt đang offline thì kiểm tra xem file, đường dẫn request có tồn tại trong cache storage không
        // Nếu có thì trả về kết quả đã cache, nếu không thì báo lỗi
        event.respondWith(
            caches.match(event.request)
                .then((response) => {
                    return response
                })
                .catch(() => {
                    console.error("Cannot found cache file!")
                })
        )
    }
})

// Hook vào quá trình gửi request
// Lưu cache nếu cần
function fetchAndPut(url, doPutToCache) {
    return fetch(url).then(res => {
        if (doPutToCache) {
            caches.open(CACHE_NAME).then((cache) => {
                cache.put(url, res)
            })
        }
        return res
    })
}