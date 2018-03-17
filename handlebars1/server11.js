//server11.js
var express = require("express");

var app = express(); 

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


/*
	make a route that takes in a person's age and prints out whether they can drive or not in chicago.
	
	and send an array of things to do in chicago to the handlebars file and loop over them and display them in the handlebars file
*/

app.get('/person/:age', function(req, res){
	res.render('person', {
		can_drive : req.params.age >= 16,
		things_to_do : ['bowling', 'left turns', 'taco bell fridays', 'bar crawl']
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

	$ node server11
.js
*/



