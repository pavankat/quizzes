//ONE
var word = "";
word += "hello";
word += "";
word += "world";
var += "!";
console.log(word);

//TWO
for (var i=0; i<word.length; i++){
console.log(word[i]);
}

//THREE

console.log(animal.indexOf('f') + 1);

//FOUR
//ONE WAY	
console.log(animal.indexOf('sup') >= 0)

console.log(animal.indexOf('the') >= 0)

//ANOTHER WAY
if (animal.indexOf('sup') >= 0){
console.log(true);
}else{
console.log(false);
}

if (animal.indexOf('the') >= 0){
console.log(true);
}else{
console.log(false);
}

//FIVE

length of the string - 1

so it would be 

stringNameGoesHere.length - 1

//SIX

console.log(word[2]);

//SEVEN

//PART ONE
hellg wgrld

//PART TWO
gello world

//EIGHT
//one way
console.log(f[2] + f[3]);
//another way
console.log(f.slice(2,4));

//NINE
//one way	
gg = gg[0].toUpperCase() + gg.slice(1);
//another way
gg = gg[0].toUpperCase() + gg[1] + gg[2] ... all the way to the last index

//TEN
//one way
animal = animal.slice(0, 3) + 'z' + animal.slice(4);
//another way
animal = animal[0] + animal[1] + animal[2] + "z" + animal[4];

//ELEVEN
var dogs = [];
dogs.push('rover');
dogs.push('hunter');
dogs.push('oak');
console.log(dogs.length);

//TWELVE
//part one
letters = letters.reverse();
console.log(letters.join(""));

//part two
famousToms[0] = "Tom Petty";

//part three
//one way
var nums = [];
for (var i=8; i<=1000; i++){
nums.push(i);
}

//another way
var nums = [];
for (var i=8; i<1001; i++){
nums.push(i);
}

//THIRTEEN
//one way
function tripleLength(str){
return str.length*3;
}
console.log(tripleLength("allen"));
//another way
function tripleLength(str){ return str.length*3; }
console.log(tripleLength("allen"));
//another way
var tripleLength = function()(str) {
return str.length*3;
}
console.log(tripleLength("allen"));
//FOURTEEN
//one way
var nums = [102, 101];
for (var i=100; i>=0; i--){
nums.push(i);
}
//another way
var nums = [102, 101];
for (var i=100; i>-1; i--){
nums.push(i);
}
//another way
var nums = [102, 101];
for (var i=100; i>-1; i--) nums.push(i);

//FIFTEEN
//one way
function arrayMerge(arr){
return arr.join("");
}
//another way
var arrayMerge = function(arr){
return arr.join("");
}

//SIXTEEN
//one way
function arrSum(arr){
var sum = 0;
for (var i=0; i<arr.length; i++){
sum += arr[i];
}
return sum;
}
//another way
var arrSum = function(arr){
var sum = 0;
for (var i=0; i<arr.length; i++){
sum += arr[i];
}
return sum;
}

//SEVENTEEN
NaN, 15, NaN, hi6, 48

//EIGHTEEN
<!DOCTYPE html>
<html>
<head>
<title></title>
</head>
<body>
<button>hello</button>
<script type="text/javascript" src="jQuery cdn link"></script>
<script type="text/javascript">
$('button').on('click', function(){
alert('hello'); //one way
alert($(this).text()); //another way
})
</script>
</body>
</html>

bonus part one:
doctype tells what version of html we're using

bonus part two:
margin
border
padding
content

//NINETEEN
<!DOCTYPE html>
<html>
<head>
<title></title>
</head>
<body>
<button>arnold</button>
<div id="movieInfo"></div>
<script type="text/javascript" src="jQuery cdn link"></script>
<script type="text/javascript">
$('button').on('click', function(){
$.ajax({
url: "http://www.omdbapi.com/?t=the+terminator",
method: "GET"
}).done(function(data){
//one way
$('#movieInfo').append(data.Year);
$('#movieInfo').append(data.Awards);
$('#movieInfo').append(data.Actors);
//another way
$('#movieInfo').text(data.Year + data.Awards + data.Actors);
//another way
$('#movieInfo').html(data.Year + data.Awards + data.Actors);
//another way
$('#movieInfo').text(data.Year + " " + data.Awards + " " + data.Actors);
})
})
</script>
</body>
</html>

//TWENTY
var tyler = {
name: "Tyler",
waterBottle: true,
whereLunchToday: "Tyler's house"
}

tyler["is a bro"] = true;
tyler.favBand = "Iron Maiden"; 
//another way
tyler["favBand"] = "Iron Maiden";
tyler.waterBottle = false;
//another way
tyler["waterBottle"] = false;

for (key in tyler){
alert(key + " " + tyler[key]);
}
