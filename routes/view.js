
/*
 * GET door.
 */

exports.door = function(req, res){
	var data = {
		page: {
			title:"Door v2"
		}, 
		app: {
			title:"Apartm.net Door"
		},
		debug:(req.debug != false) ? req.debug : null
	};

  res.render('door', data);
};