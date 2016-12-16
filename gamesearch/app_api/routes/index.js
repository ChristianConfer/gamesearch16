var express = require('express');
var router = express.Router();
var ctrlPublisherData = require('../controllers/publishers');
var ctrlGameData = require('../controllers/games')

/* GET home page. 
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
*/

router.get('/publisherData', ctrlPublisherData.publisherDataReadAll);






module.exports = router;
