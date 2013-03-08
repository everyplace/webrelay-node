
/*
 * door viewing and opening
 */

var request = require('request');

exports.knock = function(req, res, next){
  // req.debug = "Pass an optional debug message";
  req.data = {};
  next();
};

exports.open = function(req, res){

	var request_url = (process.env.DEBUG=='true') ? process.env.DEBUG_ACTION_URL : process.env.ACTION_URL;
	request.post(request_url, function(err, response, body){
		console.log("Action triggered");
		res.end();	
	});
};