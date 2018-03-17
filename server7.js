//server7.js
var express = require("express");

var app = express(); 

/*
create a get route that takes in a person's name. If the name has a length that is even then show an h1 tag of the person's name is a cat person and then a picture of a cat

if the person's name has a length that is odd then show an h1 tag of the persons name is a dog person and then a picture of a dog.

ex

localhost:3000/person/pavan
	<h1>Pavan is a dog person</h1>
	<img src="dog picture url here">

localhost:3000/person/adam
	<h1>Adam is a cat person</h1>
	<img src="cat picture url here">
*/

app.get('/person/:name', function(req,res){
	var name = req.params.name;
	var name_len = name.length;

	var html = "";

	html += "<!DOCTYPE html> <html> <head> <title>";
	html += name;
	html += "</title> </head> <body>"
	html += "<h1>" + name + " is a ";
	
	if (name_len % 2 == 0){
		html += "cat person</h1>"
		html += "<br>";
		html += "<img src='http://www.prestigeanimalhospital.com/sites/default/files/08-cat-cancer-4.jpeg' width='200' height='200'>"
	}else{
		html += "dog person</h1>"
		html += "<br>";
		html += "<img src='https://www.nationalgeographic.com/content/dam/animals/thumbs/rights-exempt/mammals/d/domestic-dog_thumb.jpg' width='200' height='200'>"
	}

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

	$ node server7.js
*/



