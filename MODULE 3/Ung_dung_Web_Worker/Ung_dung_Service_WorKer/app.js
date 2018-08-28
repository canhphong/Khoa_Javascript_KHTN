if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('sw.js').then((registration) => {
            console.log('ServiceWorker registration successful with scope: ', registration.scope);
        }, function (err) {
            console.log('ServiceWorker registration failed: ', err);
        });
    });
}

// API URL
const serverURL = 'server.php?id=' + articleID

// Lấy dữ liệu từ API
fetch(serverURL).then(res => res.json()).then(article => setArticle(article))

// Render bài viết
function setArticle(article) {
    document.title = article.title
    const rootElement = document.getElementById('app')

    const title = document.createElement('h1')
    title.appendChild(document.createTextNode(article.title))
    
    const id = document.createElement('h1')
    id.appendChild(document.createTextNode(article.id))

    const content = document.createElement('h2')
    content.appendChild(document.createTextNode(article.content))

    const img=document.createElement('img')
    img.src=article.img

    rootElement.appendChild(title)
    rootElement.appendChild(id)
    rootElement.appendChild(content)
    rootElement.appendChild(img)
}