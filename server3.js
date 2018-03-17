//server3.js
var express = require("express");

var app = express(); 

//write a get route here that takes in an age and returns true if the age is greater than 50 and false if it is not.

//one way
/*
	localhost:3000/age/3
		req.params.num is 3
		false
	localhost:3000/age/59
		req.params.num is 59
		true
*/

app.get('/age/3', function(req, res){
	res.send('wow')
});

app.get('/age/:num', function(req, res){
	var num = req.params.num;

	if (num > 50){
		res.send(true);
	}else{
		res.send(false);
	}
});

//another way

// app.get('/:num', function(req, res){
// 	var num = req.params.num;

// 	if (num > 50){
// 		res.send(true);
// 	}else{
// 		res.send(false);
// 	}
// });

//another way
// app.get('/age/:num', function(req, res){
// 	var num = req.params.num;

// 	res.send(num > 50);
// });


var port = 3000;
app.listen(port, function(){
	console.log('listening on port ' + port);
});

/*
	after making this file

	you do

	$ npm init -y

	$ npm install express --save

	$ node server3.js
*/



