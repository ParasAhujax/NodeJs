const express = require('express');
const router = express.Router();

let {people} = require('../data');

router.get('/', (req, res) => {
    console.log(req.body);
    res.json({ success: true, data: people });
})

router.post('/', (req, res) => {
    let {name} = req.body;

    console.log(req.body);
    if(!name){
        return res.status(400).send("Person not found ")
    }
    res.status(201).json({success: true, person:name});
})

router.put('/:id', (req, res) => {
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

router.delete('/:id',(req,res) => {
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

module.exports = router;