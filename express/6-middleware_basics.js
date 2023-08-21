const express = require('express');
const app = express();

//req => middleware => res

const logger = ((req, res, next) => {
    const method = req.method;
    const url = req.url;
    const time = new Date().getFullYear();
    console.log(method, url, time);
    next();              //v.imp to call at end of middleware
})

app.get('/', logger, (req, res) => {
    res.send("Home page");
})
app.get('/about', (req, res) => {
    res.send("About page");
})


app.listen(3000, () => {
    console.log("server running on 3000");
})