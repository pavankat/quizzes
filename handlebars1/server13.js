//server9.js
var express = require("express");

var app = express(); 

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//make a route called /person and add two query parameters :name and :age to the url. render a handlebars file that takes that name and age and prints them on the screen
app.get('/person/:name/:age', function(req, res){
    res.render('person_profile', {
      name : req.params.name,
      age : parseInt(req.params.age)
    });
});

//make a route that renders a handlebars file that links to the previous route with the name of jake and age of 25
app.get('/link-to-profile', function(req, res){
  res.render('link_to_profile', {});
});

//make a route that renders a handlebars file that links to the previous route with the name of jake and age of 25
app.get('/links-to-profiles', function(req, res){
  res.render('links_to_profiles', {
    people : [
      {
        name : 'jake',
        age : 25
      },
            {
        name : 'rich',
        age : 24
      },
            {
        name : 'mango',
        age : 22
      },
            {
        name : 'brian',
        age : 24
      }
    ]
  });
});

// 1. profile.handlebars and mixes it with the object that you send it
// 2. it takes that html and puts it into main.handlebars
// 3. it sends that back

var port = 3000;
app.listen(port, function(){
	console.log('listening on port ' + port);
});

/*
	after making this file

	you do

	$ npm init -y

	$ npm install express --save

	$ node server9.js
*/



