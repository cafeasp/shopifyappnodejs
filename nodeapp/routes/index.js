var express = require('express');
var router = express.Router();
require('dotenv').config();
//var config = require('../config/config.json'); //testing
/* GET home page. */
router.get('/', function(req, res, next) {

	console.log(process.env.appId);
  res.render('index', { title: 'Express' });

});

router.get('/install',function(req,res,next){
	var shop  = req.query.shop;
	console.log(shop);
	var appId=1;
	var appSecret=2;
	var appScope='read_orders';
	var appDomain='af.com';
	//build the url
	var url = `https://${shop}/admin/oauth/authorize?client_id=${appId}&scope=${appScope}&redirect_uri=https://${appDomain}/auth`;
	//res.redirect('');
	console.log(url);
	res.send('testing');
});

module.exports = router;
