const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
    const {name} = req.body;
    res.send(`Hello ${name}`);
    console.log(req.body);
})

module.exports = router;