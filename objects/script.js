//                            ***** Arrays are Objects *****

// In JavaScript, arrays are objects. That means that arrays also have some built-in properties and methods.One of the most commonly used built-in methods on arrays are the push() and the pop() methods.


// 1- PUSH() METHOD --->  [To add new items to an array, I can use the push() method:]
var fruits = [];

fruits.push("apple");
fruits.push('pear');

console.log(fruits);



// 2- POP() METHOD --->   [To remove the last item from an array, I can use the pop() method:]
var color = ["red" , "green" , "blue"];
console.log(color);

color.pop();
console.log(color);


//  I can now build a function that takes all its arguments and pushes them into an array, like this: 
function arrayBuilder(one, two, three) {
    var arr = [];
    arr.push(one);
    arr.push(two);
    arr.push(three);
   
    console.log(arr);
}
arrayBuilder('mango' , 'banana' , 'grapes');


function arrayBuilder(one, two, three) {
    var arr = [];
    arr.push(one);
    arr.push(two);
    arr.push(three);

    return arr;
}
var simpleArr = arrayBuilder('mango' , 'banana' , 'grapes');
console.log(simpleArr);



//                                 ***** Math Object Cheat Sheet *****

/* 
a-) Number constants
     
1-The PI number: Math.PI which is approximately 3.14159
2-The Euler's constant: Math.E which is approximately 2.718
3-The natural logarithm of 2: Math.LN2 which is approximately 0.693

b-)Rounding methods
 
1-Math.ceil() - rounds up to the closest integer 
2-Math.floor() - rounds down to the closest integer 
3-Math.round() - rounds up to the closest integer if the decimal is .5 or above; otherwise, rounds down to the closest integer 
4-Math.trunc() - trims the decimal, leaving only the integer


c-)Arithmetic and calculus methods

1-Math.pow(2,3) - calculates the number 2 to the power of 3, the result is 8 
2-Math.sqrt(16) - calculates the square root of 16, the result is 4 
3-Math.cbrt(8) - finds the cube root of 8, the result is 2 
4-Math.abs(-10) - returns the absolute value, the result is 10 
5-Logarithmic methods: Math.log(), Math.log2(), Math.log10() 
6-Return the minimum and maximum values of all the inputs: Math.min(9,8,7) returns 7, Math.max(9,8,7) returns 9.
7-Trigonometric methods: Math.sin(), Math.cos(), Math.tan(), etc.
*/


//             ***** Creating Arrays and Objects *****

var clothes = [];        // step : 1

clothes.push('T-shirt');      // step : 2
clothes.push('Jeans');
clothes.push('Trouser');
clothes.push('Hijab');
clothes.push('Kurti');

console.log(clothes);

clothes.pop();          // step : 3
console.log(clothes);

clothes.push('Skirt');     // step : 4
console.log(clothes);

console.log(clothes[2]);    // step : 5

var favCar = {};    // step : 6

favCar.color = "red";   // step : 7
console.log(favCar);

favCar.convertible = "true";  // step : 8
console.log(favCar);




//                      ***** Objects Method *****

var car = {};

car.mileage = 98765;
car.color = "blue";

console.log(car);

car.turnTheKey = function () {
    console.log('The engine is running.');
}

car.lightsOn = function () {
    console.log('The lights are on.')
}

console.log(car);

car.turnTheKey();
car.lightsOn();











