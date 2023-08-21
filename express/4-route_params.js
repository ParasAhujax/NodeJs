const express = require('express');
const app = express();
const { products } = require('./data');

app.get('/', (req, res) => {
    res.send(`<h1>Home Page</h1> <a href ="/api/products">Products</a>
    <a href ="/api/products/1">Product 1</a>`);
})

app.get('/api/products', (req, res) => {
    const newProduct = products.map((products) => {
        const { id, name, image } = products;
        return { id, name, image };
    })
    res.json(newProduct);
})

app.get(`/api/products/:productId`, (req, res) => { //:productId = route parameter

    const { productId } = req.params; //parameter requested
    const single_product = products.find((product) => { return product.id === Number(productId) })

    if (!single_product) res.status(404).send("Product not found");
    res.json(single_product);
})

app.get(`/api/products/:productId/reviews/:reviewId`, (req, res) => {
    const { reviewId } = req.params.reviewId;
    res.json({ reviewId: "this is a review for the product" });
})

app.listen(3000, () => {
    console.log("server running on 3000");
})