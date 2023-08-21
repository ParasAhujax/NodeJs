const express = require('express');
const app = express();
const { products } = require('./data');

app.get('/api/v1/query', (req, res) => {
    const { search, limit } = req.query; //query keywords

    let sortedProducts = [...products]; //using spread operator to create copy of array
    sortedProducts.sort((a, b) => {
        return a.id - b.id;
    })

    if (search) {
        sortedProducts = sortedProducts.filter((products) => {
            return products.name.startsWith(search);
        })
    }
    if (limit) {
        sortedProducts = sortedProducts.slice(0, Number(limit));
    }
    if (sortedProducts.length < 1) {
        // res.status(200).send("No Products matched your search");
        return res.status(200).json({ success: 'true', data: [] });
    } //imp to return res.status else header error will occur 

    return res.status(200).json(sortedProducts);
})


app.listen(3000, () => {
    console.log("server running on 3000");
})