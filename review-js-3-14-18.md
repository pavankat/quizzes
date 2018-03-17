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

//part 32

	function timesTwo(num){
		console.log(num*2);
	}

	timesTwo(10)
	VM95:2 20

	timesTwo(25)
	50

	var a = timesTwo(4);

	a
	undefined

	//a is undefined because we console logged num*2 in the function, we need to return it



	function timesTwo(num){
		return num*2;
	}

	var a = timesTwo(4);
	8

//part 33
	
	write a function that takes in a number and returns if it is even or odd

	//answer
		function isEven(num){
			if (num % 2 == 0){
				console.log('is even');
			}else{
				console.log('is odd');
			}
		}

		isEven(3);

		isEven(4);

	//another way

		function isEven(num){
			if (num % 2 == 0){
				return 'is even';
			}else{
				return 'is odd';
			}
		}

		isEven(3);

		isEven(4);

	//another way

		function isEven(num){
			return (num % 2 == 0);
		}

		var a = isEven(3);

		var b = isEven(4);

		a
		false

		b
		true

//part 34

	write a function that takes in two numbers and adds them together and returns the result if they are both even. If they are not then subtract them and return the result.

	function addOrSub(a,b){
		if ((a % 2 == 0 ) && (b % 2 == 0)){
			return a+b;
		} else {
			return a-b;
		}
	}


//part 35

	var ob = {
			a : 1,
			b : 2
		}
	
	Object.keys(ob) //["a", "b"]
	
	Object.values(ob) //[1, 2]

//part 36

	write a function that takes in an object and returns the number of keys inside of it

	//answer
		function numKeys(ob){
			return Object.keys(ob).length;
		}

		numKeys({b:2, c:3, d:8});

		numKeys({fruit: apple, vege: carrot});

		var person = {
			name: 'rich',
			age: 19
		};

		numKeys(person)

	//another way

		function numKeys(ob){
			var count = 0; //value of count is initialized 0

			for (key in ob){
				count++; //count = count + 1;
			}

			return count;	
		}


//part 37

	write a function that takes in an object and returns if one of the keys is named animal.

		//answer
			function isKeyAnimal(ob){
				return (Object.keys(ob).indexOf('animal') > -1);
			}

		//another way

			function isKeyAnimal(ob){
				var keys = Object.keys(ob);

				for (var i=0; i<keys.length; i++){
					if (keys[i] === 'animal'){
						return true;
					}
				}

				return false;
			}

		//another way

			function isKeyAnimal(ob){
				for (key in ob){
					if (keys === 'animal'){
						return true;
					}
				}

				return false;
			}


//part 38

	write a function that takes in a letter and returns true if it is a or b. If it is not a or b then return false.

	//answer
		function isAOrB(letter){
			letter = letter.toLowerCase();

			return (letter == 'a' || letter == 'b');
		}

	//another way
		console.log('A' == 'a') //false
		console.log('A' === 'a') //false

		function isAOrB(letter){
			letter = letter.toLowerCase();

			if (letter == 'a' || letter == 'b'){
				return true;
			}else {
				return false;
			}
		}

	//another way
		function isAOrB(letter){
			letter = letter.toLowerCase();

			if (letter == 'a'){
				return true;
			else if(letter == 'b'){
				return true;
			}else {
				return false;
			}
		}

//part 39

	write a function that takes in a letter and returns true if it is a vowel and false otherwise.

	//answer

		function isVowel(letter){
			letter = letter.toLowerCase();
			var vows = ['a', 'e', 'i', 'o', 'u', 'y'];

			return (vows.indexOf(letter) > -1);
		}

	//another way

		function isVowel(letter){
			letter = letter.toLowerCase();

			if (letter == 'a' || letter == 'e' || letter == 'i' || letter == 'o' || letter == 'u' || letter == 'y']){
				return true;
			}else {
				return false;
			}
		}

	//another way

		function isVowel(letter){
			letter = letter.toLowerCase();

			if (letter == 'a'){
				return true;
			} 

			if (letter == 'e'){
				return true;
			} 

			if (letter == 'i'){
				return true;
			} 

			if (letter == 'o'){
				return true;
			} 

			if (letter == 'u'){
				return true;
			} 

			if (letter == 'y'){
				return true;
			}

			return false;
		}

		//another way

			function isVowel(letter){
				letter = letter.toLowerCase();

				if (letter == 'a'){
					return true;
				} 

				if (letter == 'e'){
					return true;
				} 

				if (letter == 'i'){
					return true;
				} 

				if (letter == 'o'){
					return true;
				} 

				if (letter == 'u'){
					return true;
				} 

				if (letter == 'y'){
					return true;
				}else {
					return false;
				}
			}

		//another way

			function isVowel(letter){
				letter = letter.toLowerCase();
				var vows = ['a', 'e', 'i', 'o', 'u', 'y'];

				for (var i=0; i<vows.length; i++){
					if (vows[i] == letter){
						return true;
					}
				}

				return false;
			}

//part 40

	write a function that takes a number and returns true if it is greater than 500 and false if otherwise

	//answer
		function greaterThan(num){
			return (num > 500);
		}

	//another way
		function greaterThan(num){
			if (num > 500){
				return true;
			}else{
				return false;
			}
		}

//part 41

	<!DOCTYPE html>
	<html>
	<head>
		<title></title>
		<style type="text/css">
			/*
				write css to give the div a height and width of 200, a background color red, a blue solid border with 2px
			*/

			div {
				height : 200px;
				width : 200px;
				background-color: red;
				border: solid 2px blue;
			}
			
		</style>
	</head>
	<body>
		<div></div>
	</body>
	</html>


//part 42

	<!DOCTYPE html>
	<html>
	<head>
		<title></title>
		<style type="text/css">
			#box{
				background-color: blue;
				margin-bottom: 25px;
			}

			.borderDash {
				background-color: yellow;
				border: dashed 10px red;
			}

			.tall {
				height : 200px;
			}
		</style>
	</head>
	<body>
		<div id="box" class="borderDash tall">stuff</div>
		<div class="borderDash tall">more stuff</div>
	</body>
	</html>

//part 43

	<!DOCTYPE html>
	<html>
	<head>
		<title></title>
		<style type="text/css">
			#box{
				background-color: blue;
			}

			.borderDash {
				background-color: yellow;
				border: dashed 10px red;
			}

			.tall {
				height : 200px;
				width: 100px;
			}

			.botSpace {
				margin-right: 5px;
			}

			.fl {
				float : left;
			}
		</style>
	</head>
	<body>
		<div id="box" class="fl botSpace borderDash tall">stuff</div>
		<div class="fl botSpace borderDash tall">more stuff</div>

		<div class="fl botSpace borderDash tall">more stuff</div>

		<div class="fl botSpace borderDash tall">more stuff</div>

		<div class="fl botSpace borderDash tall">more stuff</div>
	</body>
	</html>

//part 44
	<!DOCTYPE html>
	<html>
	<head>
		<title></title>

		<style type="text/css">

		</style>
	</head>
	<body>
		<button>click me</button>

	<script
	  src="https://code.jquery.com/jquery-3.3.1.min.js"
	  integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="
	  crossorigin="anonymous"></script>
	<script type="text/javascript">
		//write some code here so that when the button is clicked, it alerts hi

		//answer
			$('button').click(function(){
				alert('hi');
			});

		//another way
			$('button').on('click', function(){
				alert('hi');
			});

		//another way
			function hi(){
				alert('hi');
			}

			$('button').on('click', hi);
	</script>

	</body>
	</html>

//part 45

	<!DOCTYPE html>
	<html>
	<head>
		<title></title>

		<style type="text/css">

		</style>
	</head>
	<body>
		<button>click me</button>

	<script
	  src="https://code.jquery.com/jquery-3.3.1.min.js"
	  integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="
	  crossorigin="anonymous"></script>
	<script type="text/javascript">
		//write some code here so that when the button is clicked, it alerts a random number, 1 to 1000, including 1 and 1000

		//answer
			$('button').on('click', function(){
				alert(Math.ceil(Math.random()*1000));
			});

		//another way
			$('button').on('click', function(){
				alert(Math.floor(Math.random() * 999) + 1);
			});

	</script>

	</body>
	</html>

//part 46

	<!DOCTYPE html>
	<html>
	<head>
		<title></title>

		<style type="text/css">

		</style>
	</head>
	<body>
		<div id="space"></div>
		<div></div>
		<button id="hit">click me</button>
		<button>click me too</button>
	<script
	  src="https://code.jquery.com/jquery-3.3.1.min.js"
	  integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="
	  crossorigin="anonymous"></script>
	<script type="text/javascript">
		//write some code here so that when the button with an id of hit is clicked, you put a random vowel into the div with an id of space

		var vowels = ['a','i','e','o','u','y'];
		//var vowels = 'aieouy'; //another way of representing vowels

		$('#hit').on('click', function(){
			//rand number between 0 and 6, not including 0 and 6
			var randNum = Math.random()*vowels.length;

			//this rounds down so it's either 0,1,2,3,4,5
			var randIndex = Math.floor(randNum);

			//this grabs that element inside of the vowels array
			var randVowel = vowels[randIndex];

			$('#space').html(randVowel);
			//$('#space').text(randVowel);
		});
		
	</script>

	</body>
	</html>

//part 47

	<!DOCTYPE html>
	<html>
	<head>
		<title></title>

		<style type="text/css">

		</style>
	</head>
	<body>
		<div id="space"></div>

		<input type="text" id="a"></input>
		<br><br>
		<input type="text" id="b"></input>

		<button id="hit">click me</button>

	<script
	  src="https://code.jquery.com/jquery-3.3.1.min.js"
	  integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="
	  crossorigin="anonymous"></script>
	<script type="text/javascript">
		//part one
			//write some code here so that when the button with an id of hit is clicked, you multiply the values from the inputs with an id of a and b and put the result into the div with an id of space

			// $('#hit').on('click', function(){
			// 	var a = parseInt($('#a').val());
			// 	var b = parseInt($('#b').val());

			// 	$('#space').html(a*b)
			// });

		//part two
			//alert you must put in a number, if the value of either inputs are not numbers
			
			$('#hit').on('click', function(){
				var a = parseInt($('#a').val());
				var b = parseInt($('#b').val());

				if ((isNaN(a)) || (isNaN(b))){
					alert('you must put numbers into the inputs')
				}else {
					$('#space').html(a*b);
					
				}
				
			});
	</script>

	</body>
	</html>

//part 48
	//server1.js - server7.js

	express get routes review

//part 49
	//handlebars1

	handlebars get routes review








	