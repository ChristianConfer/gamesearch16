var mongoose = require('mongoose');

var gameSchema = new mongoose.Schema({
    
    name: String,
    publisher: String,
    boxUrl: String,
    
    
    
});

mongoose.model('GameData', gameSchema, 'GameData');