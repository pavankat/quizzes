ONE:

make a variable named word and set it to an empty string

on the next line add the word hello to it

on the next line add a space to it

on the next line add world to it

on the next line add a ! to it

on the next line console.log the word variable

---------------------------------------------------------------------------
TWO:

create a for loop to loop over the word variable from the previous problem and console.log each character inside of it

---------------------------------------------------------------------------



THREE:

var animal = "the fox says";

using indexOf console.log the index of the letter f + 1 in the animal variable.

YOU CAN'T DO THIS: 
console.log(3); //Instead of 3 you have to use the animal variable 


---------------------------------------------------------------------------
FOUR:

var animal = "the giraffe says sup";

using indexOf console.log true if the word sup is in the animal variable and false otherwise

using indexOf console.log true if the word the is in the animal variable and false otherwise.

---------------------------------------------------------------------------
FIVE:

the last position of any string is _______.


---------------------------------------------------------------------------
SIX:

console.log the e in this word without using the letter e

var word = "fiesta";

---------------------------------------------------------------------------











SEVEN:

//PART ONE
var greeting = "hello world";
greeting = greeting.replace(/o/g, 'g') 

what is the value of the variable greeting?

//PART TWO
var greeting = "hello world";
greeting = greeting.replace('h', 'g') 

what is the value of the variable greeting?

---------------------------------------------------------------------------
EIGHT:

var f = "apple";

write code to console.log pl in the variable f without using the letters pl and using the variable f




---------------------------------------------------------------------------
NINE:

Capitalize the first letter in gg

var gg = "the giraffe said hi";

HINT: the variable cat below will console log out MEESES
var cat = "meeses";
console.log(cat.toUpperCase());


---------------------------------------------------------------------------
TEN:

var animal = "moose";
//write code here to change the s to z









---------------------------------------------------------------------------
ELEVEN:

make a variable named dogs and initialize it to an empty array

on the next line append a string named rover into the dogs array

on the next line append a string named hunter into the dogs array

on the next line append a string named oak into the dogs array

on the next line console.log out the length of the dogs array minus 3




6:54







---------------------------------------------------------------------------
TWELVE:

//part one
var letters = ['h', 'c', 'i', 'r'];

on the next line reverse the letters array

on the next line convert the letters array into a string and console log it out

//part two 
//write code below famousToms to replace "Tom Cruise" with "Tom Petty"
var famousToms = ["Tom Cruise", "Tom Hanks", "Tom Keel"];

//part three
make a variable named nums and set it to an empty array

on the next line write code to add numbers 8 to 1000 into the nums array



7:00


---------------------------------------------------------------------------
THIRTEEN:

write a function named tripleLength that takes in an argument of str and returns the length of str * 3

call the tripleLength function with a value of "allen" and console log the value

---------------------------------------------------------------------------
FOURTEEN:

make a variable named nums and set it to an array with the numbers 102 and 101 in it.

on the next line write code to push numbers 100 to 1 into the nums array

---------------------------------------------------------------------------
FIFTEEN:

write a function named arrayMerge that takes in an argument named arr, and returns a string of all the elements combined



7:10
---------------------------------------------------------------------------
SIXTEEN:

write a function named arrSum that takes in an array and returns the sum of the array

---------------------------------------------------------------------------

//SEVENTEEN:

//what does the following code console log out

var a = 5;
var b = 6;

function returnSum(a,b){
return a + b;
}

console.log(returnSum()); 


//what does the following code console log out

var a = 5; 
var b = 6;

function returnSum(){
var a = 9;
return a + b;
}

console.log(returnSum());


//what does the following code console log out

var a = 5;
var b = 6;

function returnSum(){
return a + b;
var a = 9;
}

console.log(returnSum()); 

//what does the following code console log out

var a = 5;
var b = 6;

function returnSum(){
var a = "hi"
return a + b;
}

console.log(returnSum());




//what does the following code console log out

var num = 3;
for (var i=9; i>=0; i--){
num += i;
}
console.log(num)




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

---------------------------------------------------------------------------
TWENTY:

make a variable called tyler and set it equal to an object with the following data of name Tyler, waterBottle true and whereLunchToday to "Tyler's house"

on the next line add a key to the tyler object called "is a bro" and set it to true

on the next line add a key to the tyler object called favBand and set it to "Iron Maiden"

on the next line update the waterBottle key in the tyler object with false

then after making the tyler object, loop over the object and alert the key and the value seperated by a space