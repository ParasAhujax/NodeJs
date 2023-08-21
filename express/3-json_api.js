const express = require('express');
const app = express();
const { products } = require('./data');

app.get('/', (req, res) => {
    res.send(`<h1>Home Page</h1> <a href ="/api/products">Products</a>`);
})

app.get('/api/products', (req, res) => {
    const newProduct = products.map((products) => {
        const { id, name, image } = products; //destructing to extract individual properties
        return { id, name, image };
    })
    res.json(newProduct);
})

app.listen(3000, () => {
    console.log("server running on 3000");
})