var express = require('express');
var router = express.Router();

//var config = require('../config/config.json'); //testing
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/shopify/install',function(req,res,next){
	var shop  = req.query.shop;
	console.log(shop);
	var appId=process.env.appId;
	var appSecret=process.env.appSecret;
	var appScope=process.env.appScope;
	var appDomain=process.env.appDomain;

	//build the url
	var url = `https://${shop}/admin/oauth/authorize?client_id=${appId}&scope=${appScope}&redirect_uri=https://${appDomain}/shopify/auth`;
	
	console.log(url);
	res.redirect(url);
});

router.get('/shopify/auth',function(req,res,next){
	//todo 
	//get token
	res.render('index',{title:'get token'});
});

module.exports = router;
