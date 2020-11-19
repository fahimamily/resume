//server.js
let http = require('http');
let router = require('./routes');
let handleRequest = (request, response) => {
    response.writeHead(200, {
        'Content-Type': 'text/html'
    });
};
http.createServer(router.handleRequest).listen(8500);
console.log("server running on 8500");