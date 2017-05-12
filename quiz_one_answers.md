ONE:

make a variable named word and set it to an empty string

on the next line add the word hello to it

on the next line add a space to it

on the next line add world to it

on the next line console.log the word variable

ANSWER
var word = "";
word += "hello"; // word = word + "hello";
word += " "; // word = word + " ";
word += "world"; // word = word + "world";

console.log(word);

---------------------------------------------------------------------------
TWO:

create a for loop to loop over the word variable and console.log each character inside of it

ANSWER
for (var i=0; i<word.length; i++){
console.log(word[i]);
}

---------------------------------------------------------------------------

THREE:

var animal = "the fox says";

using indexOf console.log the index of the letter f in the animal variable. 
console.log(3); // you can't just do this. Instead of 3 you have to use the animal variable 

ANSWER
console.log(animal.indexOf('f'));

var index = animal.indexOf('f');
console.log(index);




---------------------------------------------------------------------------
FOUR:

var animal = "the giraffe says sup";

using indexOf console.log true if the word giraffe is in the animal variable and false otherwise

using indexOf console.log true if the word cat is in the animal variable and false otherwise.

ANSWER
//replace giraffe with cat for the second one
//one way
if (animal.indexOf('giraffe') >= 0){
console.log(true);
}else{
console.log(false);
}

//another way
if (animal.indexOf('giraffe') > -1){
console.log(true);
}else{
console.log(false);
}

//another way
console.log(animal.indexOf('giraffe') >= 0)

//another way
console.log(animal.indexOf('giraffe') > -1)




---------------------------------------------------------------------------
FIVE:

the first position of any string is ___.

ANSWER
0


---------------------------------------------------------------------------
SIX:

console.log the e in this word without using the letter e

var word = "fiesta";

ANSWER
//way
console.log(word[2]);

//another way
console.log(word.charAt(2));

//another way
console.log(word.slice(2,3))

---------------------------------------------------------------------------
SEVEN:

var greeting = "hello world";
greeting = greeting.replace(/o/g, 'g') 

what is the value of the variable greeting?

ANSWER
hellg wgrld

---------------------------------------------------------------------------
EIGHT:

var f = "apple";

write code to console.log ppl in the variable f without using the letters ppl and using the variable f

ANSWER
//one way
console.log(f.slice(1,4))
//another way
console.log(f[1] + f[2] + f[3]);
//another way
console.log(f.substr(1,3));

---------------------------------------------------------------------------
NINE:

Capitalize the first letter in gg

var gg = "the giraffe said hi";

HINT: the variable cat below will console log out MEESES
var cat = "meeses";
console.log(cat.toUpperCase());


ANSWER
//one way
console.log(gg[0].toUpperCase() + gg.slice(1));
//another way
console.log(gg.replace('t', 'T'));


---------------------------------------------------------------------------
TEN:

var animal = "moose";
//write code here to change the middle o to z

ANSWER
//this is wrong
animal[2] = 'z';
//one way
animal = animal.slice(0, 2) + 'z' + animal.slice(3);
//another way
animal.replace('oo', 'oz');

---------------------------------------------------------------------------
ELEVEN:

make a variable named dogs and initialize it to an empty array

on the next line append a string named rover into the dogs array

on the next line append a string named hunter into the dogs array

on the next line append a string named oak into the dogs array

on the next line console.log out the length of the dogs array

ANSWER
var dogs = [];
dogs.push('rover');
dogs.push('hunter');
dogs.push('oak');
console.log(dogs.length);

---------------------------------------------------------------------------
TWELVE:

//part one
var letters = ['h', 'c', 'i', 'r'];

on the next line reverse the letters array

on the next line convert the letters array into a string and console log it out

ANSWER
//one way
letters = letters.reverse();
letters = letters.join("");
console.log(letters);
//another way
letters = letters.reverse();
console.log(letters.join(""));
//another way
var lettersReversed = [];
for (var i=letters.length-1; i>=0; i--){
lettersReversed.push(letters[i]);
}
lettersReversed = lettersReversed.join("");
console.log(lettersReversed);


//part two 
//write code below famousToms to replace "Tom Hanks" with "Tom Petty"
var famousToms = ["Tom Cruise", "Tom Hanks", "Tom Keel"];

ANSWER
famousToms[1] = "Tom Petty";

//wrong
famousToms.replace('Tom Hanks', 'Tom Petty')

//part three
make a variable named nums and set it to an empty array

on the next line write code to add numbers 1 to 1000 into the nums array


ANSWER
var nums = [];

for (var i=1; i<1001; i++){
nums.push(i);
}

---------------------------------------------------------------------------
THIRTEEN:

write a function named doubleLength that takes in an argument of str and returns the length of str * 2

call the doubleLength function with a value of "allen" and console log the value

ANSWER:
//one way
function doubleLength(str){
return str.length*2;
}

console.log(doubleLength('allen'));
//another way
function doubleLength(str){
var len = str.length;
return len*2;
}
console.log(doubleLength('allen'));
//another way
function doubleLength(str){
var doub = str.length*2;
return doub;
}
var a = doubleLength('allen');
console.log(a);
---------------------------------------------------------------------------
FOURTEEN:

make a variable named nums and set it to an array with the numbers 1002 and 1001 in it.

on the next line write code to push numbers 1000 to 1 into the nums array


ANSWER:
var nums = [1002, 1001];

for (var i=1000; i>=1; i--){
nums.push(i);
}



---------------------------------------------------------------------------
FIFTEEN:

write a function named arrayMerge that takes in an argument named arr, and returns a string of all the elements combined

ANSWER
function arrayMerge(arr){
return arr.join("");
}

---------------------------------------------------------------------------
SIXTEEN:

write a function named arrSum that takes in an array and returns the sum of the array

ANSWER

//one way
function arrSum(arr){
var sum = 0;
for (var i=0; i<arr.length; i++){
sum = sum + arr[i];
}

return sum;
}

---------------------------------------------------------------------------


//SEVENTEEN:

//what does the following code console log out

var a = 5;
var b = 6;

function returnSum(a,b){
return a + b;
}

console.log(returnSum()); 

ANSWER
NaN

//what does the following code console log out

var a = 5; 
var b = 6;

function returnSum(){
var a = 9;
return a + b;
}

console.log(returnSum());

ANSWER
15

//what does the following code console log out

var a = 5;
var b = 6;

function returnSum(){
return a + b;
var a = 9;
}

console.log(returnSum()); 

ANSWER
NaN

//what does the following code console log out

var a = 5;
var b = 6;

function returnSum(){
var a = "hi"
return a + b;
}

console.log(returnSum());

ANSWER
"hi6"

//what does the following code console log out

var num = 0;
for (var i=9; i>=0; i--){
num += i;
}
console.log(num)

ANSWER
45
---------------------------------------------------------------------------
EIGHTEEN:

make an html page 

make a button with hello in it

include jQuery
include a script tag 

write code using jQuery so that when you click on the button it alerts hello

bonus: 

1. write down what the doctype means

2. explain the CSS box model - draw the box model

ANSWER
1. tells you what the version of html you are using, the way we do it, it tells you to use the latest version of html 
2. 

margin 
border
padding
content

<!DOCTYPE html>
<html>
<body>
<button id='btn'>hello</button>
<script src="link to jquery">
<script>
//one way
$('button').on('click', function(){
alert('hello');
});
//other way
$('#btn').on('click, function(){
alert('hello');
}
//another way
$('#btn').on('click, function(){
alert($(this).text());
}
//another way
$('#btn').on('click, function(){
alert(this.innerHTML);
}
</script>
</body>
</html>

---------------------------------------------------------------------------
NINETEEN:

make a button saying arnold and have a div with an id of movieInfo

in the code using jQuery make it so that when you click on the button it makes an AJAX request to the omdb api using this url: http://www.omdbapi.com/?t the+terminator and add the Year, Awards, Actors to div with an id of movieInfo

//this is what the response form the ajax request would look like
{
Title: "The Terminator",
Year: "1984",
Rated: "R",
Released: "26 Oct 1984",
Runtime: "107 min",
Genre: "Action, Sci-Fi",
Director: "James Cameron",
Writer: "James Cameron, Gale Anne Hurd, William Wisher Jr. (additional dialogue)",
Actors: "Arnold Schwarzenegger, Michael Biehn, Linda Hamilton, Paul Winfield",
Plot: "A seemingly indestructible humanoid cyborg is sent from 2029 to 1984 to assassinate a waitress, whose unborn son will lead humanity in a war against the machines, while a soldier from that war is sent to protect her at all costs.",
Language: "English, Spanish",
Country: "UK, USA",
Awards: "5 wins & 6 nominations.",
Poster: "https://images-na.ssl-images-amazon.com/images/M/MV5BODE1MDczNTUxOV5BMl5BanBnXkFtZTcwMTA0NDQyNA@@._V1_SX300.jpg",
Metascore: "83",
imdbRating: "8.0",
imdbVotes: "628,783",
imdbID: "tt0088247",
Type: "movie",
Response: "True"
}

<!DOCTYPE html>
<html>
<body>
<button id='btn'>arnold</button>
<div id="movieInfo"></div>
<script src="link to jquery">
<script>
//one way
$('button').on('click', function(){
$.ajax({
url: "http://www.omdbapi.com/?t=the+terminator",
method: "GET"
}).done(function(data){
//one way
$('#movieInfo').text(data.Year + data.Awards + data.Actors);
//another way
$('#movieInfo').append(data.Year);
$('#movieInfo').append(data.Awards);
$('#movieInfo').append(data.Actors);
})
});
</script>
</body>
</html>


---------------------------------------------------------------------------
TWENTY:

make a variable called tyler and set it equal to an object with the following data of name Tyler, waterBottle true and whereLunchToday to "Tyler's house"

on the next line add a key to the tyler object called "is a bro" and set it to true

on the next line add a key to the tyler object called favBand and set it to "Iron Maiden"

on the next line update the waterBottle key in the tyler object with false

then after making the tyler object, loop over the object and alert the key and the value seperated by a space

ANSWER
var tyler = {
name: "Tyler",
waterBottle: true,
whereLunchToday: "Tyler's house"
}

tyler["is a bro"] = true;
tyler.favBand = 'Iron Maiden'; // tyler["favBand"] = "Iron Maiden";
tyler.waterBottle = false;

for (key in tyler){
alert(key + " " + tyler[key]);
}