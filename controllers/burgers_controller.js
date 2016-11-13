var router = require('express').Router();
var burgerOrm = require('../models/burger.js');


// middleware that is specific to this router - logs time of request
router.use(function timeLog (req, res, next) {
  console.log('Time: ', Date.now())
  next();
});

// route for home page
router.get('/',function (req, res) {
	burgerOrm.getAllBurgers(function(err,results){
		
		var burgersToBeDevoured = results.filter(function(burger){
			return !burger.devoured;
		});

		var burgersDevoured = results.filter(function(burger){
			return burger.devoured;
		});

	  	res.render('index',{
	  		burgersToBeDevoured : burgersToBeDevoured,
	  		burgersDevoured : burgersDevoured 
	  	});
	});  	
  
});


// define route adding new burger
router.post('/', function (req, res) {
	
	burgerOrm.addBurger(req.body,function(err,result){
		if(err){ 
			console.log("error: new burger not added. ",err);
		}else{
			res.redirect('/');
		}
	});
  
});

// define route adding new burger
router.put('/', function (req, res) {
	burgerOrm.devourBurger(parseInt(req.body.id),function(err,result){
		if(err){ 
			console.log("error: burger not devoured. ",err);
		}else{
			
			res.redirect('/');
		}
	});
});

module.exports = router;