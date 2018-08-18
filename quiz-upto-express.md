quiz

	1. flash card

		front:
			write the SQL to create a monkeys table in MySQL with an id, name, is_athletic, is_funny, age, bio columns
		back:
			CREATE TABLE monkeys(
				id INT NOT NULL AUTO_INCREMENT,
				name VARCHAR(255) NOT NULL,
				is_athletic BOOLEAN NOT NULL,
				is_funny BOOLEAN NOT NULL
				age INT NOT NULL,
				bio TEXT NOT NULL,
				PRIMARY KEY(id)
			);

			CREATE TABLE monkeys(
				id INT NOT NULL AUTO_INCREMENT,
				name VARCHAR(255),
				is_athletic BOOLEAN,
				is_funny BOOLEAN
				age INT,
				bio VARCHAR(255),
				PRIMARY KEY(id)
			);


10:37








	2. flash card

		front:
			what does the result of this left join return?

			select *
			from users
			left join things
			on users.id = things.user_id;

10:44
			users 
				id name
				1   austin
				2   sabrina
				3   omar
				4   alex

			things
				id  name  		user_id
				1   jet ski   	1
				2	calculator	3

		back:
			id name  		id 		name 			user_id
			1  austin  		1   	jet ski  		1
			2  sabrina		null 	null  			null
			3  omar			2 		calculator 		3
			4  alex  		null    null 			null

	2.5 flash card
		front: 10:48
			what does the result of this right join return?

			select *
			from users
			right join things
			on users.id = things.user_id;

			users 
				id name
				1   austin
				2   sabrina
				3   omar
				4   alex

			things
				id  name  		user_id
				1   jet ski   	1
				2	calculator	3

		back:
			id name  		id 		name 			user_id
			1  austin  		1   	jet ski  		1
			3  omar			2 		calculator 		3





	3. flash card - 10:55

		front:
			how do you select everything from a table named monkeys

		back:
			SELECT * FROM monkeys;

			or

			SELECT * FROM monkeys

			or 

			select * from monkeys


	4. flash card

		front:
			how do you select only the rows with columns of is_athletic = true and is_funny = true and age > 5 from a table named monkeys

		back:	
			SELECT * 
			FROM monkeys
			WHERE is_athletic = true AND is_funny = true AND age > 5;

			or 

			select * 
			from monkeys
			where is_athletic = true and is_funny = true and age > 5





	5. flash card - 11:00

		front:
			select all the monkeys and each monkey's pet(s) in one query 

			monkeys
				id name is_athletic is_funny age bio

			pets
				id name type monkey_id

		back:	
			SELECT *
			FROM monkeys
			LEFT JOIN pets
			ON monkeys.id = pets.monkey_id;

			SELECT *
			FROM pets
			RIGHT JOIN monkeys
			ON monkeys.id = pets.monkey_id;

			SELECT *
			FROM monkeys m
			LEFT JOIN pets p
			ON m.id = p.monkey_id;

			SELECT m.id, m.name, p.id, p.name
			FROM monkeys m
			LEFT JOIN pets p
			ON m.id = p.monkey_id;

			SELECT monkeys.id, monkeys.name, pets.id, pets.name
			FROM monkeys
			LEFT JOIN pets
			ON monkeys.id = pets.monkey_id;

	6. flash card - 11:04

		front:
			app.get('/monkeys/:a/:b/:c', function(req, res){
				//how do I get access to :c here?
			});

		back:
			req.params.c







	7. flash card - 11:08

		front:
			what are examples of requests that would hit this route

			app.get('/monkeys/:a/:b/:c/', function(req, res){
				//...
			});
		back:

			/monkeys/hi/bye/stuff

			/monkeys/1/2/3

			/monkeys/3/4/5

			localhost:3000/monkeys/3/4/5




	8. flash card - 11:13

		front:
			//I want the response below to look like this:

			// {q : 'frontal lobe', limit: 100}

			//what does the url look like for that?

			app.get('/monkeys', function(req, res){
				res.json(req.query);
			});
		back:

			/monkeys?q=frontal%20lobe&limit=100

			/monkeys?q=frontal+lobe&limit=100

			localhost:3000/monkeys?q=frontal+lobe&limit=100

			/monkeys?limit=100&q=frontal+lobe


	9. flash card - 11:21

		front:

			initialize an array and use a for loop to add even numbers into it up to 100 from 0 

		back:
			//one way
				var arr = [];

				for (var i=0; i<101; i++){
					if (i % 2 == 0) arr.push(i);
				}

			//second way
				var arr = [];

				for (var i=0; i<=100; i++){
					if (i % 2 == 0) arr.push(i);
				}

			//third way
				var arr = [];

				for (var i=0; i<100; i++){
					if (i % 2 == 0) arr.push(i);
				}

			//fourth way
				var arr = [];

				for (var i=0; i<100; i=i+2){
					arr.push(i);
				}

	10. flash card

		front:

			initialize an array and use a for loop to add odd AND even numbers into it up to 100 from 0

		back:
			//way one
				var arr = [];

				for (var i=0; i<100; i++){
					arr.push(i);
				}

			//way two
				var arr = [];

				for (var i=0; i<=100; i++){
					arr.push(i);
				}

			//way three
				var arr = [];

				for (var i=0; i<101; i++){
					arr.push(i);
				}

			//way three
				var arr = [];

				for (var i=0; i<101; i++){
					if (i % 2 == 0) arr.push(i);
					else if (i % 2 != 0) arr.push(i);
				}



	11. flash card - 11:27

		front:

			write a function that takes a number and returns that number tripled with 3 added to it and the whole thing divided by 7

		back:
			//one way
				function doAlg(n){
					return (3n+3)/7;
				}
			//another
				function doAlg(n){
					return ((3*n)+3)/7;
				}
			//another
				function doAlg(n){
					var x = 3n+3;
					return x/7;
				}

			//another
				function doAlg(n){
					var x = 3n;
					var y = x+3;
					return y/7;
				}








	12. flash card - 11:36

		front
			write an ajax query that hits this route and adds paragraphs to the body for each object with all the values in it

			app.get('/monkeys', function(req, res){
				res.json([
					{name: 'sarah'}, 
					{name: 'jason'},
					{name: 'lu'},
					{name: 'will'}
					]);
			});

		back
			//one way
				$.ajax({url: '/monkeys'})
				.then(function(data){
					var p;
					for (var i=0; i<data.length; i++){
						p = $('<p>');
						p.text(data[i].name);
						$('body').append(p);
					}
				});

			//another way
				$.ajax({url: '/monkeys'})
				.then(function(data){
					var p, ob;
					for (var i=0; i<data.length; i++){
						ob = data[i]
						p = $('<p>');
						p.text(ob.name);
						$('body').append(p);
					}
				});

	13. flash card 11:41

		front 
			write a function to take in a number and return the odd numbers up to that number (not including the number)

			3 would return 
				[1]

			5 would return
				[1, 3]

		back
			//one way
				function oddNumsUpTo(n){
					var res = [];

					for (var i=0; i<n; i++){
						if (i % 2 != 0) res.push(i);
					}

					return res;
				}
			//another way
				function oddNumsUpTo(n){
					var res = [];

					for (var i=1; i<n; i=i+2){
						res.push(i);
					}

					return res;
				}








	14. flash card - 11:48

		front
			write a function that takes in a radius and returns the area of a circle 

				area of a circle = pi * radius squared

				or area = pi * radius * radius

				you can estimate that pi is 3.14

		back
			function areaOfCirc(r){
				return Math.PI*r*r;
			}

			function areaOfCirc(r){
				return 3.14 * r * r;
			}

			function areaOfCirc(r){
				return 3.14 * Math.POW(r, 2);
			}

			function areaOfCirc(r){
				var sq = Math.POW(r, 2)
				return 3.14 * sq;
			}




