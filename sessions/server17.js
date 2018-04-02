//server14.js
var express = require("express");
var app = express(); 


//install bodyparser
//so I can get req.body inside routes
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));


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

//set up sessions
  var cookieParser = require('cookie-parser');

  var session = require('express-session');
  //allow sessions
  app.use(session({ secret: 'app', cookie: { maxAge: 6*1000*1000*1000*1000*1000*1000 }}));
  app.use(cookieParser());
  
app.get('/login', function(req, res){
  if (req.session.logged_in){
    res.redirect('/home');
  }
  
  res.render('login', {});
  
});

app.post('/sign-in', function(req, res){
  if (req.session.logged_in){
    res.redirect('/home');
  }  
  
  var query = "SELECT * FROM users WHERE username = (?) AND password = (?)";

	connection.query(query, [req.body.username, req.body.password], function(err, result) {
    
    if (result.length > 0){
      req.session.logged_in = true;
      req.session.userid = result[0].id;
      req.session.username = result[0].username;
      
      res.redirect('/home');
    }else{
      res.redirect('/login');
    }
	});
});

app.get('/sign-up', function(req, res){
  if (req.session.logged_in){
    res.redirect('/home');
  }
  
  res.render('signup', {});
  
});

app.post('/create-user', function(req, res){
  if (req.session.logged_in){
    res.redirect('/home');
  }  
  
  var query = "INSERT INTO users (username, password) VALUES (?, ?)";

	connection.query(query, [req.body.username, req.body.password], function(err, result) {
    
    if (err){
      res.send('there was an error');
    }
    
    req.session.logged_in = true;
    req.session.userid = result.insertId;
    req.session.username = req.body.username;
    
		res.redirect('/home');
	});
});

app.get('/home', function(req, res){
  if (req.session.logged_in){
    res.render('home', {
      logged_in : req.session.logged_in,
      username : req.session.username,
      id : req.session.userid
    });
  }  else {
    res.redirect('/login')
  }
    
});

app.get('/logout', function(req,res){
  req.session.destroy(function(err) {
     res.redirect('/login')
  })
});

var port = 3001;
app.listen(port, function(){
	console.log('listening on port ' + port);
});

/*
	after making this file

	you do

	$ npm init -y

	$ npm install express --save

	$ node server15.js
*/



