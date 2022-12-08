//Dependencies
const express = require('express');
const mongoose = require ('mongoose');
const app = express ();
const db = mongoose.connection;
require('dotenv').config()

app.use(express.json());// returns middleware that only parses JSON - may or may not need it depending on your project

//use public folder for static assets
app.use(express.static('public'));

//Port
const PORT = process.env.PORT

//Database
// How to connect to the database either via heroku or locally
const MONGODB_URI = process.env.MONGODB_URI;


//Middleware--------------------------------------------------

// Routes

app.get('/' , (req, res) => {
  res.json({
    test: 'meow'
  })
});

//app.post

//app.put

//app.delete






















//------------------------------------------------------------------
//Listener
app.listen(PORT, () => console.log( 'Listening on port:', PORT));

// Connect to Mongo &
// Fix Depreciation Warnings from Mongoose
// May or may not need these depending on your Mongoose version
mongoose.connect(MONGODB_URI, () => {
    console.log('connected')
});

db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
db.on('connected', () => console.log('mongo connected: ', MONGODB_URI));
db.on('disconnected', () => console.log('mongo disconnected'));