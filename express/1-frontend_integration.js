const express = require('express');
const path = require('path');
const app = express();

app.use(express.static('./public'))

// // we could have used the code below but express.static does the work
// app.get('/', (req, res) => {
//     console.log("home");
//     res.sendFile('./index.html');       //res.sendFile automatically sets the content-type(headers) and is more convienient
// })

// app.get('/style.css', (req, res) => {
//     res.sendFile('./style.css');
// })

app.listen(3000, () => {
    console.log("server running on 3000");
})