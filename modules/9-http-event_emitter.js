const http = require('http');

const server = http.createServer();

server.on('request', (req, res) => { //using event api
    res.end("anyohaseo"); //server listens and responds to the request 
})

server.listen(3000);