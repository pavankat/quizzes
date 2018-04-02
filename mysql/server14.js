//server14.js
var express = require("express");
var app = express(); 

// Set up MySQL connection.
var mysql = require("mysql");

console.log('--------------the environment we are using----------------');
console.log(app.settings.env);
console.log('--------------the environment we are using----------------');

if (app.settings.env == 'development'){
  var connection = mysql.createConnection({
    port: 3306,
    host: "localhost",
    user: "root",
    password: "",
    database: "hobbies_db"
  });
}else {
  var connection = mysql.createConnection(process.env.JAWSDB_URL);
}

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


app.get('/', function(req, res){
  
	var query = "SELECT * FROM hobbies";

	connection.query(query, function(err, result) {
		// res.json(result);
    res.render('hobbies', {
			hobbies: result
		});
	});
});


//make a route called /hobbies/:id and render a page with that specific hobby's hobby and id on it.
app.get('/hobbies/:id', function(req, res){
  var id = req.params.id;
  var query = "SELECT * FROM hobbies WHERE id = ";
  query = query + id; //query += id;
  
  connection.query(query, function(err, result) {
	   // res.json(result[0]);
    res.render('hobby', {
			id: result[0].id,
      hobby: result[0].hobby
		});
	});
  
});


// 1. profile.handlebars and mixes it with the object that you send it
// 2. it takes that html and puts it into main.handlebars
// 3. it sends that back

var port = 3001;
app.listen(port, function(){
	console.log('listening on port ' + port);
});

/*
	after making this file

	you do

	$ npm init -y

	$ npm install express --save

	$ node server14.js
*/



