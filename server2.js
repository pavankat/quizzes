//server2.js
var express = require("express");

var app = express(); 

app.get('/test', function(req, res){
	res.send('test');
});

/*
localhost:3000/animal/_______
	
	localhost:3000/animal/platapus
		PLATAPUS
	localhost:3000/animal/giraffe
		GIRAFFE
	localhost:3000/animal/elephant
		ELEPHANT
*/
app.get('/animal/:name', function(req, res){
	var name = req.params.name;
	res.send(name.toUpperCase());
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

	$ node server2.js
*/



