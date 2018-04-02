//server14.js
var express = require("express");
var app = express(); 

//install bodyparser
//so I can get req.body inside routes
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));


// Set up MySQL connection.
var mysql = require("mysql");

console.log('--------------the environment we are using----------------');
console.log(app.settings.env);
console.log('--------------the environment we are using----------------');

if (app.settings.env == 'development'){
  var connection = mysql.createConnection({
    port: 3306,
    host: "localhost",
    user: "root",
    password: "",
    database: "hobbies_db"
  });
}else {
  var connection = mysql.createConnection(process.env.JAWSDB_URL);
}

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.get('/form', function(req,res){
  var query = "SELECT * FROM hobbies";
  
  connection.query(query, function(err, result) {
		res.render('form', {
      hobbies : result
    });
	});
  
});

app.post('/create', function(req,res){
  //res.json(req.body);
  
  var query = "INSERT INTO hobbies (hobby) VALUES (?)";

	connection.query(query, [req.body.hobby], function(err, result) {
		res.redirect('/form');
	});
});

//activity
  //make a table called foods with an id and a food column 

  //make a route that renders a form to submit a food 
app.get('/food-form', function(req, res){
  var query = "SELECT * FROM foods";
  
  connection.query(query, function(err, result) {
		res.render('food_form', {
      foods : result
    });
	});
});

  //make a route that the form submits to that inserts the food into the foods table
app.post('/create-food', function(req,res){
  var query = "INSERT INTO foods (food) VALUES (?)";

	connection.query(query, [req.body.food], function(err, result) {
		res.redirect('/food-form');
	});
});


// 1. profile.handlebars and mixes it with the object that you send it
// 2. it takes that html and puts it into main.handlebars
// 3. it sends that back

var port = 3001;
app.listen(port, function(){
	console.log('listening on port ' + port);
});

/*
	after making this file

	you do

	$ npm init -y

	$ npm install express --save

	$ node server15.js
*/



