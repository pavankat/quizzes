//server6.js
var express = require("express");

var app = express(); 

app.get('/person/:name/:age/:hobby', function(req, res){
	var name = req.params.name;
	var age = req.params.age;
	var hobby = req.params.hobby;

	var html = "";

	html += "<!DOCTYPE html> <html> <head> <title>";
	html += name;
	html += "</title> </head> <body>"
	html += "<h1>name: " + name + "</h1>";
	html += "<h2>age: " + age + "</h2>";
	html += "<h2>hobby: " + hobby + "</h2>";
	html += "</body> </html>";

	res.send(html);
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

	$ node server6.js
*/



