//server4.js
var express = require("express");

var app = express(); 

//write a get route here that takes in an age and returns true if the age is greater than 50 and false if it is not.

//one way
/*
	localhost:3000/person/peter/22
		req.params.name is peter
		req.params.age is 22

	localhost:3000/person/voltron/18
		req.params.name is voltron
		req.params.age is 18
*/

app.get('/person/:name/:age', function(req, res){
	var name = req.params.name;
	var age = req.params.age;

	res.send("Person's name is " + name + ". Person's age is " + age);
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

	$ node server4.js
*/



