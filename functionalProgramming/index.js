//                ***** Functional Programming *****

var currencyOne = 100;
var currencyTwo = 0;
var exchangeRate = 1.2;

function convertCurrency(amount , rate) {
    return amount * rate;
}

currencyTwo = convertCurrency(currencyOne , exchangeRate);

console.log(currencyTwo);


//                  ***** Return Values From Fucntion *****

// 1-
var num1 = 5;
var num2 = 1;
var num3 = 0;

function doubleIt(num1 , num2) {
    return num1 * 2;
}
 num3 = doubleIt(num1 , num2);
 console.log(num3)


 // 2-
 function objectMaker(val) {
    return {
        prop: val
    }
}
console.log( objectMaker(20) );


//                ***** Functional Calling and Recursion *****

// 1- function calling
function example () {
    console.log('Line one..1');
    console.log('Line two..2');
    console.log('Line thre..3');
}
example();

// 2- recurion means when function call itself

//  The function will run over and over, as there is no condition to stop it
// function myDay() {
//     console.log('Morning');
//     console.log('Afternoon');
//     console.log('Evening');
//     console.log('Night');

//     myDay();
// }
// console.log(myDay());


//  The function will run only one time, as there is  condition to stop it
let counter = 3;
function myExample(counter) {
    console.log(counter);
    counter = counter - 1;
    if (counter === 0) return;
    myExample(counter);
}


myExample(counter);


//                       ***** Introduction to Scope *****

// 1-
var num1 = 10;       // the code that exist outside of the function is called "Global Scope".

function score() {         // the code that exist inside of the function is called "Local Scope".
    var num2 = 20;
    console.log(num2);
}
console.log( score() );

// 2-
var globalVar = "I'm in the global scope.";

function scopeTest () {
    localVar = "I'm in the function.";
    console.log(globalVar);
}
console.log( scopeTest() );


//                        ***** Functional Programming *****


//When writing FP code, we keep data and functionality separate and pass data into functions only when we want something computed.

// 1-
function getTotal(a , b) {
    return a + b;
}

var num1 = 2;
var num2 = 3;

var total = getTotal(num1 , num2);

console.log( getTotal(num1 , num2) );

//2-
function getDistance(mph , h) {
    return mph * h;
}

var mph = 60;
var h = 2;

var distance = getDistance(mph , h);

console.log(distance);



//                     ***** Object-Oriented Programming *****

//  object-oriented programming (OOP). In this style, we group data and functionality as properties and methods inside objects.

//1-
var virtualPet = {    //creating an object
    sleepy : true,
    nap : function() {
        this.sleepy = false
    }
}
console.log(virtualPet.sleepy)   // true
virtualPet.nap()
console.log(virtualPet.sleepy)   // false


//TASK:-
function addTwoNum(a , b) {
    console.log(a + b);
}

function randomNum() {
    return Math.floor( ( Math.random() * 10 ) + 1 );
}

