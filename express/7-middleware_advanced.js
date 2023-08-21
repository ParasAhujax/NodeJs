const express = require('express');
const app = express();
const logger = require('./logger');
const authorize = require('./authorize');
const morgan = require('morgan');

//req => middleware => res

// app.use('./api', logger);    //logger will work only when url starts with /api....
// app.use(authorize);
app.use(morgan('tiny'));

app.get('/', (req, res) => {
    res.send("Home page");
})
app.get('/about', (req, res) => {
    res.send("About page");
})
app.get('/api/products', (req, res) => {
    res.send("Products");
})
app.get('/api/info', (req, res) => {
    res.send("info");
})


app.listen(3000, () => {
    console.log("server running on 3000");
})