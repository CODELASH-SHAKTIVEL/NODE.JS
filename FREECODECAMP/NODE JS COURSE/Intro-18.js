// const server = http.createServer((req , res)=>{
//     if (req.url === '/') {
//         res.end('home page')
//     }
//     if (req.url === '/about') {
//         res.end('/ABOUT')
//     }
//     res.end('error page')
// })
// server.listen(5000,()=>{
//     console.log('server listening on 5000....')
// })

const http = require('http');
const port = 3000;
const hostname = '127.0.0.1';
const server = http.createServer((req, res) => {
    console.log(req.url);
    url = req.url;

    res.statusCode = 200;
    res.setHeader('content-type', 'text/html');
    if (url == '/') {
        res.end(home);
    }
    else if (url == '/about') {
        res.end(about);
    }
    else if (url == '/services') {
        res.end(services);
    }
    else if (url == '/contact') {
        res.end(contact);
    }
    else {
        res.statusCode = 404;
        res.end("<h1>404 not found</h1>");
    }
});
server.listen(port, hostname, () => {
    console.log(`server running at http://${hostname}:${port}/`);
});