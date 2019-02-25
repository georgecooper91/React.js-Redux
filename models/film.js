const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create schema
const filmSchema = new Schema({
    id: {
        type: String 
    },
    title: {
        type: String
    },
    year: {
        type: String
    },
    type: {
        type: String
    },
    url: {
        type: String
    }
});

module.exports = film = mongoose.model('film', filmSchema);