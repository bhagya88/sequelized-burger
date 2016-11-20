var router = require('express').Router();
var models  = require('../models');
var sequelizeConnection = models.sequelize;
var Sequelize = models.Sequelize;


// middleware that is specific to this router - logs time of request
router.use(function timeLog (req, res, next) {
  console.log('Time: ', Date.now())
  next();
});

// route for home page
router.get('/',function (req, res) {
	sequelizeConnection.sync()
		
	.then(function(){
		return models.burgers.findAll({
			    include: [models.drinks],
			    where: { state: Sequelize.col('burgers.id')}
		})
	})
	.then(function(results){
			console.log(results);
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
	
	models.burgers.create(req.body)
	.then(function(){
		res.redirect('/');
	
	});
  
});


// define route adding new burger also add the drink
router.put('/', function (req, res) {
	models.burgers.update({devoured:true},{where:{id:req.body.id}})
	.then(function(){
		return models.drinks.create({drink_name:req.body.drink_name,burgerId:req.body.id});
		
	})
	.then(function(){
		res.redirect('/');
	})
});

module.exports = router;