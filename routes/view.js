
/*
 * GET door.
 */

exports.door = function(req, res){
	var data = {
		page: {
			title:"WebRelay Door"
		}, 
		app: {
			title:"Apartm.net Door"
		},
		debug:(req.debug != false) ? req.debug : null
	};

  res.render('door', data);
};