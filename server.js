const http = require('http');
const fs = require('fs');
const path = require('path');

// Function uses fileSystem module of node.js to read and display contents of a html file.
function fileServer(res, filePath, ContentType) {
    fs.readFile(filePath, (err, data) => {
        if (err) {
            res.writeHead(500, { 'Content-type': 'text/html' });
            res.end(`<h1>Internal Server Error</h1>`);
            return;
        }
        res.writeHead(200, { 'Content-type': ContentType });
        res.end(data);
    });
}



const server = http.createServer((req, res) => {
    const URL = req.url.toLowerCase();
    if (URL === '/' || URL === '/home') {
        fileServer(res, path.join(__dirname, 'pages', 'home.html'), 'text/html');
    } else if (URL === '/contact') {
        fileServer(res, path.join(__dirname, 'pages', 'contactUs.html'), 'text/html');
    } else if (URL === '/about') {
        fileServer(res, path.join(__dirname, 'pages', 'aboutUs.html'), 'text/html');
    } else if (URL === '/services') {
        fileServer(res, path.join(__dirname, 'pages', 'services.html'), 'text/html');
    } else if (URL.startsWith('/styles/') && URL.endsWith('.css')) {
        fileServer(res, path.join(__dirname, URL), 'text/css');
    } else if (URL.startsWith('/scripts/') && URL.endsWith('.js')) {
        fileServer(res, path.join(__dirname, URL), 'text/js');
    } else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end(`<h1>404 - Page Not Found</h1>`);
    }
});

const PORT = 3000;

server.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`);
})