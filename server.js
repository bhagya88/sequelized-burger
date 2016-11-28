// get all the dependencies
var express = require('express');
var methodOveride = require('method-override');
var bodyParser = require('body-parser');
var exphbs = require('express-handlebars');
var logger = require('morgan');
var burgers = require('./controllers/burgers_controller.js');
var models  = require('./models');

// extract our sequelize connection from the models object, to avoid confusion
//var sequelizeConnection = models.sequelize;


// create each table based on the associated model.
// sync the tables


// set the port
var PORT = process.env.PORT || 3000;
// instantiate express
var app = express();

//Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(__dirname+'/public'));

//parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
	extended:false
}));

// override with POST having ?_method
app.use(methodOveride('_method'));

var exphbs = require('express-handlebars');

// register handlebars
app.engine('handlebars',exphbs({
	defaultLayout: 'main'
}));

// middleware to log request to console
app.use(logger('combined'));

// set the view engine
app.set('view engine', 'handlebars');

app.use('/',burgers);


app.listen(PORT,function(){
	console.log('Server waiting for requests');
});


