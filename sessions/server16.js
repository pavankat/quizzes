//server14.js
var express = require("express");
var app = express(); 


//set up sessions
  var cookieParser = require('cookie-parser');

  var session = require('express-session');
  //allow sessions
  app.use(session({ secret: 'app', cookie: { maxAge: 6*1000*1000*1000*1000*1000*1000 }}));
  app.use(cookieParser());
  
app.get('/dog', function(req, res){
    req.session.animal = 'dog';
    res.send(req.session.animal);
});

app.get('/cat', function(req, res){
    req.session.animal = 'cat';
    res.send(req.session.animal);
});

// app.get('/handlebars-ex', function(req, res){
//   res.render('filepathofhandlebarsfile', {
//     animal: req.session.animal
//   })
// });

app.get('/another-page', function(req,res){
  res.send(req.session.animal);
});

app.get('/logout', function(req,res){
  req.session.destroy(function(err) {
     res.redirect('/another-page')
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



