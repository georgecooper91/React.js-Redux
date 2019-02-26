const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const films = require('./routes/api/films');
const path = require('path');

const app = express();

//body-parser
app.use(bodyParser.json());

//connect to Db
// mongoose.connect('mongodb://localhost/films', { useNewUrlParser: true });
mongoose.connect('mongodb+srv://george123:george123@films-hqjvb.mongodb.net/test?retryWrites=true', { useNewUrlParser: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function(){
    console.log('connected to database');
});

//Routes
app.use('/api/films', films);

//serve static assets if i production
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}


// app.listen('3001', () => {
//     console.log('Server started');
// })

app.listen(process.env.PORT || 5000);