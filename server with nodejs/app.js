const http = require('http');
const route = require('./routes/route');

// To create server
const server = http.createServer(route);    //route for navigating the pages

// To listen the requests
server.listen(3000);
