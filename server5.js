//server5.js
var express = require("express");

var app = express(); 

//create a get route where it takes in two strings and prints true if they both have the same length and false otherwise
app.get('/string-comparison/:str_one/:str_two', function(req, res){
	res.send(req.params.str_one.length == req.params.str_two.length);
});

/*
//another way
app.get('/string-comparison/:str_one/:str_two', function(req, res){
	var str_one_length = req.params.str_one.length;
	var str_two_length = req.params.str_two.length;

	res.send(str_one_length == str_two_length);
});

//another way
app.get('/string-comparison/:str_one/:str_two', function(req, res){
	var str_one_length = req.params.str_one.length;
	var str_two_length = req.params.str_two.length;

	if (str_one_length == str_two_length){
		res.send(true);
	}else {
		res.send(false);
	}
});

//create another get route that takes in two strings and prints true if they both have lengths that are even numbers and false otherwise

*/

/*
	4/2 = 2, 0 remainder      4 % 2 = 0
	6/2 = 3, 0 remainder      6 % 2 = 0
	7/2 = 3, 1 remainder      7 % 2 = 1
*/

/*
	true && true -> true
	true && false -> false
	false && true -> false
	false && false -> false

	true || true
	true

	true || false
	true

	false || true
	true

	false || false
	false
*/
app.get('/even-lengths/:str_one/:str_two', function(req,res){
	var str_one_length = req.params.str_one.length;
	var str_two_length = req.params.str_two.length;
	var str_one_even = str_one_length % 2 == 0;
	var str_two_even = str_two_length % 2 == 0;

	res.send(str_one_even && str_two_even);
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

	$ node server5.js
*/



