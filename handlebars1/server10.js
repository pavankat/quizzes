//server10.js
var express = require("express");

var app = express(); 

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.get('/profile/:name/:age', function(req,res){
	var nme = req.params.name;
	var ag = req.params.age;

	res.render('profile_two', {
		name : nme,
		age : ag,
		can_drink : ag >= 21,
		hobbies : ['bird watching', 'march madness', 'cooking']
	})
});

var port = 3000;
app.listen(port, function(){
	console.log('listening on port ' + port);
});

/*
	after making this file

	you do

	$ npm init -y

	$ npm install express --save

	$ node server10
.js
*/



