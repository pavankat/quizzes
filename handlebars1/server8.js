//server8.js
var express = require("express");

var app = express(); 

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.get('/', function(req,res){
	res.render('test', {
		dog : 'brett'
	});
});

app.get('/another', function(req,res){
	res.render('test', {
		dog_two:'fido'
	});
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

	$ node server8.js
*/



