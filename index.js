'use strict';
const http = require('http');
const server = http.createServer(function(request, response) {

    response.writeHead(200, {"Content-Type": "text/html"});
    response.end("<h1>Vinay, Chavadi...Hello World, Again!</h1>");
});

var port = process.env.PORT || 1337;
server.listen(port);
console.log("Server running at http://localhost:%d", port);
