const http = require('http');

const server1 = http.createServer((req,res) => {     // req => request from user, res => response from server
    res.write("this is a server");                   // res.write can be called multiple times
    res.end();                                       // res.end is used to end the response     
})

server1.listen(3000);    //server is listening on port 3000

const server2 = http.createServer((req,res) => {
    if(req.url === '/'){                    //checks if url is home page
        res.end("This is home page");
    }
    if(req.url === '/about'){               //if url is /about
        res.end("This is about page hahah");
    }
    res.end(`                               
    <h1>Sorry!</h1>
    <p1>We cant seem to find the page you are looking for</p1>`);  //if any another url is requested
})  

server2.listen(3001);    //server is listening on port 3001
