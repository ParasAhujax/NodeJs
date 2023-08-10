const http = require('http');
const { CLIENT_RENEG_LIMIT } = require('tls');  //used for secure communication

const server = http.createServer((req,res) => {
    res.statusCode = 200;
    res.setHeader('Content-type','text/plain');
    res.end('Hello World! lala lal lalalaaa ');
});

const port=3000;
server.listen(port, () => {
    console.log(`Server running on port ${port}`);
});