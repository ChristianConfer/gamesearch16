var mongoose = require('mongoose'),
    gameList = mongoose.model('GameData');
    
    var sendJSONresponse = function(res, status, content) {
    res.status(status);
    res.json(content);
}




module.exports.gameDataReadAll = function (req, res) {
    
    gameList.find({})
            .exec(function(err, gameData ) {
                if (err) {
                    console.log(err);
                    sendJSONresponse(res, 404, err);
                }
                console.log(gameData);
                sendJSONresponse(res, 200, gameData);
                
            });
    
}
