var express = require("express");

var app = express(); 

app.get('/', function(req, res){
	res.send('hi');
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
*/



