var mongoose = require('mongoose');

var PublisherSchema = new mongoose.Schema({
    name: String,
})

mongoose.model('PublisherData', PublisherSchema, 'PublisherData'); 