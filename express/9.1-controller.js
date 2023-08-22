const express = require('express');
const app = express();

const people = require('./routes/people_controller');      //importing the people module we created
const auth = require('./routes/auth');      

app.use(express.static('./methods_public'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());               

app.use('/api/people',people)       //we set a router for /api/people/... urls
app.use('/login',auth);             //we set a router for /login url

app.listen(3000, () => {
    console.log("server running on 3000");
})