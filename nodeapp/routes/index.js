var express = require('express');
var router = express.Router();
var url = require('url');
var verifyCall = require('../tools/verify');

//var config = require('../config/config.json'); //testing
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/shopify/install',function(req,res,next){
	var shop  = req.query.shop;
	var appId=process.env.appId;
	var appSecret=process.env.appSecret;
	var appScope=process.env.appScope;
	var appDomain=process.env.appDomain;

	//build the url
	var installUrl = `https://${shop}/admin/oauth/authorize?client_id=${appId}&scope=${appScope}&redirect_uri=https://${appDomain}/shopify/auth`;
	
	res.redirect(installUrl);
});

router.get('/shopify/auth',function(req,res,next){
	var shop  = req.query.shop;

	// 1. Parse the string URL to object
    var urlObj = url.parse(req.url);
    // 2. Get the 'query string' portion
    var query = urlObj.search.slice(1);
	console.log('is ok ' + verifyCall.verify(query));
	//get token
	res.render('index',{title:'hello'});
});

module.exports = router;
