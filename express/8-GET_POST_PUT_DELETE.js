const express = require('express');
const app = express();
const { people } = require('./data');

app.use(express.static('./methods_public'));
app.use(express.urlencoded({ extended: false }));       //used to access the submitted data in POST requests
app.use(express.json());                //handle the incoming json data we entered in body (v.imp)

app.get('/api/people', (req, res) => {
    console.log(req.body);
    res.json({ success: true, data: people });
})
app.post('/login', (req, res) => {
    const {name} = req.body;
    res.send(`Hello ${name}`);
    console.log(req.body);
})
app.post('/api/people', (req, res) => {
    let {name} = req.body;
    
    if(!name){
        return res.status(400).send("Person not found ")
    }
    res.status(201).json({success: true, person:name});
})

app.put('/api/people/:id', (req, res) => {
    const {id} = req.params;
    const {name} = req.body;

    const person = people.find((person) => {
        return person.id === Number(id)
    });                             //finding the person in {people} using :id (route params)

    if(!person){
        return res.status(404).json({success: false, message:`no person found with id ${id}`});
    }
    const newPerson = people.map((person) => {      //changes the person value in {people}
        if(person.id === Number(id)){
            person.name = name;
        }
        return person;
    })
    res.json({success:true,data:newPerson});    //we send the {newPerson}
})

app.delete('/api/people/:id',(req,res) => {
    const {id} = req.params;
    const {name} = req.body;

    const person = people.find((person) => {
        return person.id === Number(id);
    })

    if(!person){
        return res.status(404).json({success: false, message:"No person found"});
    }

    const newPeople = people.filter((person) => {
        return person.id !== Number(id);
    })
    res.json({success:true,data:newPeople});
})

app.listen(3000, () => {
    console.log("server running on 3000");
})