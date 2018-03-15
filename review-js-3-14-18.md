part one
	make a variable, put in the word "dog" into it

	print the second letter

	add the letter z to the variable

	print the variable

	print the length of the variable

answer:
	
	var animal = "dog";
	console.log(animal[1]);
	animal += "z"; // animal = animal + "z";
	console.log(animal);
	console.log(animal.length);


part two
	loop over the variable and print each letter starting with the second letter and ending at the last letter.

answer:

	for (var i=1; i<animal.length; i++) {
		console.log(animal[i]);
	}

	/*
		for (var i=1; i<=animal.length; i++) {
			console.log(animal[i]);
		}
	*/

part 3:
	//how many times will this run?
	for (var i=1; i == animal.length; i++) {
		console.log(animal[i]);
	}

	//prints 0 times

	//because 1 does not equal the animal.length and then the for loop stops because of that

part 4:
	
	print the numbers 500 to 1 in that order using a for loop

	//this prints 1 to 500
	for (var i=1; i <= 500; i++){
		console.log(i);
	}

	//this also prints 1 to 500
	for (var i=1; i < 501; i++){
		console.log(i);
	}

	//this prints 500 to 1
	for (var i=500; i >= 1; i--){
		console.log(i);
	}

	//this also prints 500 to 1
	for (var i=500; i > 0; i--){
		console.log(i);
	}

	//this also prints 500 to 1
	for (var i=0; i < 500; i++){
		console.log(500-i);
	}

part 5:
	
	if (1 == 1){
		console.log('hi');
	}

	//what prints out?
	//hi

	---------------

	if (1 === 1){
		console.log('hi');
	}

	//what prints out?
	//hi

	---------------

	if (1 === '1'){
		console.log('hi');
	}

	//what prints out?
	//nothing prints out
	//=== checks value and type

	---------------

	if (1 == '1'){
		console.log('hi');
	}

	//what prints out?
	//hi
	//because == only checks the value, not the type

	---------------

	console.log("apple".length == 3);

	//what prints out?
	//false

	---------------

	var val = (4 == 4);

	console.log(val);

	//what prints out?
	//true

	---------------

	console.log(true == true);
	console.log(false == false);
	console.log(true == false);
	console.log(false == true);

	//what prints out?
	/*
	true
	true
	false
	false
	*/

	---------------

	var val = true && true;

	var val_two = true && false;

	var val_three = true || true;

	var val_four = true || false;

	var val_five = false || true;

	var val_six = false || false;

	console.log(val, val_two, val_three, val_four, val_five, val_six);

	//what prints out?
	true false true true true false

//part 6

	var wrd = "metallica";
	
	wrd.substr(4,6);
	"llica"
	var another_wrd = "metallica-the-band"
	
	another_wrd.substr(4,6);
	"llica-"


//part 7

	"   aple   ".trim()
	"aple"
	var s = "   aple   "  
	undefined
	s = s.trim();
	"aple"
	s
	"aple"
	var d = "  dog"
	undefined
	d.trim()
	"dog"
	d
	"  dog"


//part 8
	"hello".indexOf('z')
	-1
	"hello".indexOf('h')
	0
	"hello".indexOf('o')
	4
	"hello".indexOf('l')
	2
	"hello".indexOf(0)
	-1
	//if it finds what you pass to indexOf inside the string, it returns that position, if it doesn't then it returns -1
	undefined

//part 9


	var ani = "dragon"

	var ano = ani;

	console.log(ano);
	//dragon

	ani = "dog"

	console.log(ano);
	//dragon





	var val = 2;
	undefined
	var copy = val;
	undefined
	val = 3;
	3
	copy
	2






	var arr = [1,2,3]
	
	var copy = arr;
	
	arr.push(4)
	4
	arr
	(4) [1, 2, 3, 4]
	copy
	(4) [1, 2, 3, 4]
	var true_copy = arr.slice(0)
	
	arr
	(4) [1, 2, 3, 4]
	true_copy
	(4) [1, 2, 3, 4]
	arr.push(5)
	5
	arr
	(5) [1, 2, 3, 4, 5]
	true_copy
	(4) [1, 2, 3, 4]

//part 10

	//continue on with slice
	undefined
	var wrd = "classroom"
	undefined
	wrd.slice(1)
	"lassroom"
	wrd.slice(5)
	"room"
	wrd.slice(5,3)
	""
	wrd.slice(5,7)
	"ro"
	//returns the letters at index 5 and 6

part 11

	var cat = "gato"
	undefined
	cat.replace('a', 'z')
	"gzto"
	cat
	"gato"
	cat = cat.replace('a', 'z')
	"gzto"
	cat
	"gzto"

part 12

	var dog = "allbertto"
	undefined
	dog.replace('l', z');
	VM6492:1 Uncaught SyntaxError: Invalid or unexpected token
	dog.replace('l', 'z');
	"azlbertto"
	dog.replace(\l\, 'z');
	VM6523:1 Uncaught SyntaxError: Invalid or unexpected token
	dog.replace(/l/g, 'z');
	"azzbertto"
	dog.replace('ll', 'z');
	"azbertto"
	dog.replace('ll', 'zz');
	"azzbertto"



part 13

	part one
		var wrd = "legomyeggo";

		//console.log eggo using the word wrd with substr

	answer
		var wrd = "legomyeggo";
		undefined
		wrd.substr(6, 10)
		"eggo"
		wrd.substr(5, 10)
		"yeggo"
		wrd.substr(6, wrd.length-1)
		"eggo"
		wrd.substr(6, 4)
		"eggo"
		wrd.substr(6, 0)
		""
		wrd.substr(6, 1)
		"e"

	part two
		var wrd = "legomyeggo";

		//console.log eggo using the word wrd with slice

	answer

		var wrd = "legomyeggo";

		undefined
		wrd.slice(6)
		"eggo"


part 14

	var wrd = "yellow";

	//replace each l with a z

	wrd.replace('ll', 'zz');
	'yezzow'

	//the value of wrd will still be yellow

	wrd = wrd.replace('ll', 'zz');

	//the value of wrd will be yezzow

	//another way

	wrd = wrd.replace(/l/g, 'z');

	var anotherWrd = yellowl;

	anotherWrd = anotherWrd.replace(/ll/g, 'z');

	//anotherWrd's value would be yezowl

//part 15

	Math.random()
	0.1890731978720992
	Math.random()
	0.6859113409028355
	Math.random()
	0.1540801173541504
	//random number between 0 and 1
	undefined
	Math.random()*5
	4.824713154807146
	Math.random()*5
	0.4769835809033196
	//random number between 0 and 5
	undefined
	//not including 0 and 5


//part 16

	var randBetZeroFive = Math.random()*5
	undefined
	Math.floor(randBetZeroFive)
	4
	Math.ceiling(randBetZeroFive)
	VM9037:1 Uncaught TypeError: Math.ceiling is not a function
	    at <anonymous>:1:6
	(anonymous) @ VM9037:1
	Math.ceiil(randBetZeroFive)
	VM9049:1 Uncaught TypeError: Math.ceiil is not a function
	    at <anonymous>:1:6
	(anonymous) @ VM9049:1
	Math.ceil(randBetZeroFive)
	5
	randBetZeroFive
	4.6613265101648285



//part 17

	4/2
	2
	4/3
	1.3333333333333333
	4 % 3
	1
	5 % 3
	2

//part 18

	5 % 2
	1
	7 % 2
	1
	4 % 2
	0
	6 % 2
	0
	//any even number % 2 will give you 0
	undefined
	0 % 2
	0
	-5 % 2
	-1
	-7 % 3
	-1
	-7 % 4
	-3


//part 19

	loop through the numbers 1 to 100 and print out if they are even or odd

	for (var i=1; i<101; i++){
		if (i % 2 == 0){
			console.log(i, 'even');
		}else{
			console.log(i, 'odd');
		}
	}

	//another way
	for (var i=1; i<101; i++){
		if (i % 2 != 0){
			console.log('odd');
		}else{
			console.log('even');
		}
	}

	//another way
	for (var i=1; i<=100; i++){
		if (i % 2 == 0){
			console.log('even');
		}else{
			console.log('odd');
		}
	}

//part 20
	
	var fruit = "banana";

	//print a random letter from fruit without explicitly typing out a letter

	//answer
		fruit.substr(Math.floor(Math.random()*6), 1)

		//another way
		var ran = Math.random()*fruit.length;

		console.log(fruit[Math.floor(ran)]);

		//another way
		var ran = Math.random()*fruit.length;

		var ranRound = Math.floor(ran);

		console.log(fruit[ranRound]);

//part 21
	
	arr = [1,2,3,4,5]
	(5) [1, 2, 3, 4, 5]
	arr.length
	5
	arr.join()
	"1,2,3,4,5"
	arr.join('')
	"12345"
	arr.reverse()
	(5) [5, 4, 3, 2, 1]
	arr
	(5) [5, 4, 3, 2, 1]


//part 22

	var str = "apple"
	undefined
	str.reverse()
	VM14325:1 Uncaught TypeError: str.reverse is not a function
	    at <anonymous>:1:5
	(anonymous) @ VM14325:1
	str.split()
	["apple"]
	str.split('')
	(5) ["a", "p", "p", "l", "e"]
	str.split('').reverse()
	(5) ["e", "l", "p", "p", "a"]
	str.split('').reverse().stringify()
	VM14426:1 Uncaught TypeError: str.split(...).reverse(...).stringify is not a function
	    at <anonymous>:1:25
	(anonymous) @ VM14426:1
	str.split('').reverse().join()
	"e,l,p,p,a"
	str.split('').reverse().join('')
	"elppa"
	str.split('').reverse().join('Z')
	"eZlZpZpZa"

//part 23
	arr = "apple".split('')
	(5) ["a", "p", "p", "l", "e"]
	arr
	(5) ["a", "p", "p", "l", "e"]
	

//part 24
	
	//write a for loop to print each letter in the array and the index

	//doesn't work

	for (var i=0; i<arr.length; i++){
	  console.log(arr[i]);
	  console.log(arr.indexOf(arr[i]));
	}

	//doesn't work

	for (var i=0; i<=arr.length-1; i++){
	  console.log(arr[i]);
	  console.log(arr.indexOf(arr[i]));
	}
		//can't do it this way, because it prints 1 for both p's in apple


	//works

	for (var i=0; i<=arr.length-1; i++){
	  console.log(arr[i]);
	  console.log(i);
	}

	//works

	for (var i=0; i<=arr.length-1; i++){
	  console.log(arr[i], i);
	}


//part 25

	var words = ["dog", "cat", "lizard"];

	loop through the words and print the word if it has an even length

	//prints every word
	for (var i=0; i <= words.length-1; i++){
		console.log(words[i]);
	}

	//prints even numbers
	for (var i=0; i <= words.length-1; i++){
		if (words[i].length % 2 == 0){
			console.log(words[i]);
		}
	}

	//prints even numbers another way
	for (var i=0; i < words.length; i++){
		if (words[i].length % 2 == 0){
			console.log(words[i]);
		}
	}

	//prints even numbers another way
	for (var i=0; i < words.length; i++){
		var wrdLength = words[i].length;
		if (wrdLength % 2 == 0){
			console.log(words[i]);
		}
	}

// part 26
	
	var words = ["desk", "phone", "screen"];

	//loop through the words and print a random letter from each word

	for (var i=0; i<words.length; i++){
		var ranNum = Math.random()*words[i].length;
		var ranIndex = Math.floor(ranNum);
		console.log(words[i][ranIndex]);
	}
	/*
		words is an array of 3 strings

		words[0] is the word desk

		if I wanted to return the last the 2nd letter of desk, it would be e and that's index 1

		so

		words[0][1] //that gives me e
		"desk"[1] -> e

	*/

// part 27

	//loop through the words and print the last letter of each word

	for (var i=0; i<words.length; i++){
		var lastIndex = words[i].length - 1;
		console.log(words[i][lastIndex]);
	}

//part 28

	var ob = {}
	undefined
	ob.k = 'value'
	"value"
	ob
	{k: "value"}
	ob["animal"] = "tiger"
	"tiger"
	ob
	{k: "value", animal: "tiger"}
	ob["big building"] = "empire state building"
	"empire state building"
	ob
	{k: "value", animal: "tiger", big building: "empire state building"}
	ob.big building
	VM18669:1 Uncaught SyntaxError: Unexpected identifier
	ob["big building"]
	"empire state building"



//part 29

	var ob_two = {
	   a : 1,
	   b : 2,
	   cat : 'gato'

	}
	undefined
	ob_two
	{a: 1, b: 2, cat: "gato"}
	ob_two.dog = 'woof'
	"woof"
	ob_two
	{a: 1, b: 2, cat: "gato", dog: "woof"}
	ob_two.a = 3
	3
	ob_two
	{a: 3, b: 2, cat: "gato", dog: "woof"}


//part 30

	ob_two
	{a: 3, b: 2, cat: "gato", dog: "woof"}a: 3b: 2cat: "gato"dog: "woof"__proto__: Object
	for(key in ob_two){
	   console.log(key);  
	}
	VM19087:2 a
	VM19087:2 b
	VM19087:2 cat
	VM19087:2 dog
	undefined
	for(key in ob_two){
	   console.log(ob_two.key);  
	}
	4VM19153:2 undefined
	undefined
	for(key in ob_two){
	   console.log(ob_two[key]);  
	}
	VM19173:2 3
	VM19173:2 2
	VM19173:2 gato
	VM19173:2 woof
	undefined
	for(key in ob_two){
	   console.log(key, ob_two[key]);  
	}
	VM19214:2 a 3
	VM19214:2 b 2
	VM19214:2 cat gato
	VM19214:2 dog woof

//part 31

	var animals = {
		cat : 'gato',
		dog : 'woofo',
		moose : 'mooseo'
	}

	animals['cat'] // 'gato'

	//loop through the values of the animals object and print out the value if the length of the value is greater than 5.

	for (var key in animals){
		var val = animals[key]; //animals['cat'] -> 'gato'

		var valLength = val.length; //4

		if (valLength > 5){ // if (4 > 5) ...
			console.log(val);
		}
	}








