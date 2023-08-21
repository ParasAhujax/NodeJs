const express = require('express');
const server = express();

server.get('/', (req, res) => {
        console.log("home page");
        res.status(200).send("Home page");
    }) //we need to set headers if we're sending html/css files using res.set('Content-Type', 'text/html')

server.get('/about', (req, res) => {
    console.log("about page");
    res.status(200).send("About page");
})

server.all('*', (req, res) => { //any other url request
    console.log("404 error");
    res.status(404).send("404 page not found");
})

server.listen(3002, () => {
    console.log("server running on 3002");
})

//server.get      read data 
//server.post     insert data
//server.put      update data
//server.delete   delete data
//server.all
//server.use
//server.listen