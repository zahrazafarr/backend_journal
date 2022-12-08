//Dependencies
const express = require('express');
const mongoose = require ('mongoose');
const app = express ();
const db = mongoose.connection;
require('dotenv').config()

app.use(express.json());// returns middleware that only parses JSON

//use public folder for static assets
app.use(express.static('public'));

//Port
const PORT = process.env.PORT

//Database
// How to connect to the database either via heroku or locally
const MONGODB_URI = process.env.MONGODB_URI;

// Schema
const Journal = require('./models/entry.js')


//Middleware--------------------------------------------------

// Routes

app.get('/carely' , (req, res) => {
  Journal.find({}, (err, allJournal) => {
    res.json(allJournal)
  })
})

app.post('/carely', (req, res) => {
  Journal.create(req.body, (err, postJournal) => {
    res.json(postJournal)
  })
})

app.put('/carely/:id', (req, res) => {
  Journal.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedJournal) => { 
    res.json(updatedJournal)
  })
})


app.delete('/carely/:id', (req, res) => {
  Journal.findByIdAndRemove(req.params.id, (err, deletedJournal) => { 
    res.json(deletedJournal)
  })
})



//------------------------------------------------------------------
//Listener
app.listen(PORT, () => console.log( 'Listening on port:', PORT));

// Connect to Mongo 
mongoose.connect(MONGODB_URI, () => {
    console.log('connected')
});

db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
db.on('connected', () => console.log('mongo connected: ', MONGODB_URI));
db.on('disconnected', () => console.log('mongo disconnected'));