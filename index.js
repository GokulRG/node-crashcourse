const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req, res) => {
    // if (req.url === '/') {
    //     fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, content) => {
    //         if (err) throw err;
    //         res.writeHead(200, { 'Content-Type': 'text/html' });
    //         res.end(content);
    //     }); 
    // }

    // if (req.url === '/about') {
    //     fs.readFile(path.join(__dirname, 'public', 'about.html'), (err, content) => {
    //         if (err) throw err;
    //         res.writeHead(200, { 'Content-Type': 'text/html' });
    //         res.end(content);
    //     });
    // }

    // if (req.url === '/api/users') {
    //    const users = [
    //        {
    //            name: 'Bob Smith',
    //            age: 40
    //        },
    //        {
    //            name: 'RF',
    //            age: 39
    //        }
    //    ];
    //    res.writeHead(200, { 'Content-Type': 'application/json'});
    //    res.end(JSON.stringify(users));
    // }

    //Build file path
    let filePath = path.join(__dirname, 'public', req.url === '/' ? 'index.html' : req.url);

    // Get extension of the file, to decide the Content-Type
    let extName = path.extname(filePath);

    // Initial Content Type
    let contentType = 'text/html';

    // Check ext and set content type
    switch(extName) {
        case '.js':
            contentType = 'text/javascript';
            break;
        case '.png':
            contentType = 'image/png';
            break;
        case '.jpg':
            contentType = 'image/jpg';
            break;
        case '.json':
            contentType = 'application/json';
            break;
        case '.css':
            contentType = 'text/css';
            break;
    }

    // Read File
    fs.readFile(filePath, (err, content) => {
        if (err) {
            if (err.code === 'ENOENT') {
                // Page not found
                fs.readFile(path.join(__dirname, 'public', 'notfound.html'), (err, content) => {
                    res.writeHead(200, {'Content-Type': 'text/html'});
                    res.end(content, 'utf8');
                });
            } else {
                //Some Server Error
                res.writeHead(500);
                res.end(`Internal Server Error : ${err.code}`);
            }
        } else {
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content, 'utf8');
        }
    });

    console.log(req.url);
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server is running on port:${PORT}`));
