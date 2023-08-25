// Swapping the numbers 
var a = 10;
var b = 20;
console.log("The value of a and b before swap is : " + a + " " + b);

var c = a;
a = b;
b = c;
console.log("The value of a and b after swap is : " + a + " " + b);


// Naming and Naming Convention for js Variables (valid variable name)
// var name = "Esha";
// var number = 123;
// var my123 = 123;
// var my_name = "Esha";
// var myName = "Esha";
// var abc123$_ = "Syntax";



//                       ***** Strings are Iterable *****

var greeting = 'Howdy';
console.log(greeting);

console.log(greeting.length);

for (var i = 0; i < greeting.length; i++) {
    console.log(greeting[i]);
}



//                       ***** Strings are not an array *****

var greet = 'Hello';
var user = 'Lisa';

// console.log(greet.pop() );           //{error} bcz greet.pop() is not a function
console.log(greet + " " + user);
console.log(greet.concat(user));





//                 ***** String Cheat sheet *****

var greet = "Hello, ";
var place = "World"

console.log(greet.length);         // To find length of a string.

console.log(greet.charAt(0) );    //  To read each individual character at a specific index in a string, starting from zero.

console.log("Wo".concat("rl").concat("d"));    // To join words.
 
console.log("lisa-jack".indexOf('l'));  // The indexOf returns the location of the first position that matches a character.
console.log("lisa-jack".indexOf('i'));
console.log("lisa-jack".indexOf('s'));
console.log("lisa-jack".indexOf('a'));

console.log("lisa-jack".split("-"));   //The split method chops up the string into an array of sub-strings.

console.log(place.toUpperCase() );   // uppercase

console.log(place.toLowerCase() );    //lowercase

console.log("lisa-jack".lastIndexOf('l') ) ;       //The lastIndexOf finds the last match, otherwise it works the same as indexOf
console.log("lisa-jack".lastIndexOf('-') ) ; 


















