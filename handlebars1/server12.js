//server9.js
var express = require("express");

var app = express(); 

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.get('/page-one/', function(req,res){
  res.render('page_one', {});
});

app.get('/page-two/', function(req,res){
  res.render('page_two', {});
});

// 1. profile.handlebars and mixes it with the object that you send it
// 2. it takes that html and puts it into main.handlebars
// 3. it sends that back

var port = 3000;
app.listen(port, function(){
	console.log('listening on port ' + port);
});

/*
	after making this file

	you do

	$ npm init -y

	$ npm install express --save

	$ node server9.js
*/



