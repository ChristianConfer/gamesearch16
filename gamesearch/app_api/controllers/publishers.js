var mongoose = require('mongoose'),
    publisherList = mongoose.model('PublisherData');
    
    var sendJSONresponse = function(res, status, content) {
    res.status(status);
    res.json(content);
}




module.exports.publisherDataReadAll = function (req, res) {
    
    publisherList.find({})
            .exec(function(err, publisherData ) {
                if (err) {
                    console.log(err);
                    sendJSONresponse(res, 404, err);
                }
                console.log(publisherData);
                sendJSONresponse(res, 200, publisherData);
                
            });
    
}