const http = require('http');
const fs = require('fs');
const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html'); // Set the header once

    if (req.url === '/') {
        res.statusCode = 200;
        const data = fs.readFileSync(__dirname + '/index.html');
        res.end(data);
    }
    else if (req.url === '/about') {
        res.statusCode = 200;
        res.end("<h1>About CodeWith-Het</h1>");
    }
    else if (req.url === '/project') {
        res.statusCode = 200;
        res.end("<h1>Here Project is CodeWith-Het</h1>");
    }
     else if (req.url === '/content1') {
        res.statusCode = 200;
        res.end("<h1>Here Content 1</h1>");
    }
     else if (req.url === '/content2') {
        res.statusCode = 200;
        res.end("<h1>Here Content 2</h1>");
    }
     else if (req.url === '/content3') {
        res.statusCode = 200;
        res.end("<h1>Here Content 3</h1>");
    }
    else {
        res.statusCode = 404;
        res.end("<h1>404 Page Not Found</h1>");
    }
});

server.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
