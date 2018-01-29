var express = require('express');
var router = express.Router();
var url = require('url');
var verifyCall = require('../tools/verify');

//var config = require('../config/config.json'); //testing
/* GET home page. */
router.get('/', function (req, res, next) {
	res.render('index', { title: 'Express' });
});



module.exports = router;
