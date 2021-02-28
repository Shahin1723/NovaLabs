// Load express module
const express = require('express');

// Initialize app
const app = express();

// Mongoose connection
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/nodemongo');
const db = mongoose.connection;
const sellers = require('./routes/sellers');
// Check for DB connection
db.once('open', function(){
    console.log("Connected to MongoDB successfully!");
});
db.on('error', function(){
    console.log(err);
});

// Route for home
app.get('/', function (req, res) {
    res.send('hello world')
});


app.use('/sellers', sellers);

// Start server with port 3000
app.listen(3000, function(){
    console.log("Server started on localhost:3000");
});