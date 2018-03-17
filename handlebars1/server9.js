//server9.js
var express = require("express");

var app = express(); 

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//make a get route that takes in a name and then displays that name in a handlebars file
app.get('/person/:name', function(req,res){
	var nme = req.params.name;

	res.render('profile', {
		name : nme
	})
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



