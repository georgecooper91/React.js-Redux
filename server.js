const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const films = require('./routes/api/films');

const app = express();

//body-parser
app.use(bodyParser.json());

//connect to Db
mongoose.connect('mongodb://localhost/films', { useNewUrlParser: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function(){
    console.log('connected to database');
});

//Routes
app.use('/api/films', films);

app.listen('3001', () => {
    console.log('Server started');
})
