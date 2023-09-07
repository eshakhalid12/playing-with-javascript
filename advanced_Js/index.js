//                                 ***** De-structuring arrays and objects *****

//  In JavaScript, it's possible to extract the properties from objects into distinct variables using destructuring.

let { PI } = Math;
console.log(PI);      // 3.141592.......

let { pi } = Math;
console.log(pi);     // undefined

PI === Math.PI;
console.log(PI);     // true

PI = 1;
PI === Math.PI;
console.log(PI);     // 1


//                            ***** For of loop and Objects *****

// To begin, it's important to know that a for of loop cannot work on an object directly, since an object is not iterable.
// const car = {
//     speed: 100,
//     color: "blue"
// }
// for (prop of car) {
//     console.log(prop);     // Type Error : car is not iterable
// }

//Contrary to objects, arrays are iterable. For example: 
const colors = ['red', 'orange', 'yellow']
for (var color of colors) {
    console.log(color);
}                             // red , orange , yellow

/* There are 3 Built-in Method

1- The Object.keys() method
The Object.keys() method receives an object as its parameter.
*/
const car1 = {
    color: 'black',
    speeed: 120
}
console.log(Object.keys(car1));        //  ['color' , 'speed']


// 2- The Object.values() method
const car2 = {
    color: 'black',
    speeed: 120
}
console.log(Object.values(car2));        // ['black' , 120]


/* 3- The Object.entries() method
Finally, there's another useful method, Object.entries(), which returns an array listing both the keys and the values.
*/
const car3 = {
    speed: 400,
    color: 'magenta'
}
console.log(Object.entries(car3));          // [ [ 'speed', 400 ], [ 'color', 'magenta' ] ]

// 4- In JavaScript, Object.create() is a method that allows you to create a new object and specify its prototype object. It provides a way to create objects with a specific prototype chain, which is a fundamental concept in JavaScript's prototypal inheritance system.


// Here's the example's code:
function testBracketsDynamicAccess() {
    var dynamicKey;
    if (Math.random > 0.5) {
        dynamicKey = "speed";
    }
    else {
        dynamicKey = "color";
    }

    var drone = {
        speed: 15,
        color: "pink"
    }

    console.log(drone[dynamicKey]);
}
testBracketsDynamicAccess();
testBracketsDynamicAccess();


// practice code
var clothingItem = {
    price: 50,
    color: 'beige',
    material: 'cotton',
    season: 'autumn'
}

for (key of Object.keys(clothingItem)) {    //  Object.keys(clothingItem): This part of the code extracts all the keys (property names) from the clothingItem object and returns them as an array. In your example, it will return ['price', 'color', 'material', 'season'].
    console.log(key, ":", clothingItem[key])
}


//              ***** Difference Between For-of Loop and For-in Loop *****

/* The for-of loop will iterate over the object's own properties only when using the Object.keys() method to return an array to loop over   and   The for-of loop will not iterate over the object and its prototype properties.

The for-in loop will iterate over the object and its prototype properties.
*/

const myCar = {
    engine: true,
    streeing: true,
    speed: "slow"
}
const sportsCar = Object.create(myCar);
sportsCar.speed = "fast";
console.log("The sportaCar Object :", sportsCar);      // The sportaCar Object : { speed: 'fast' }

console.log("----- For-in Loop is unreliable -----");
for (prop in sportsCar) {
    console.log(prop);             // speed , engine , streeing  -->  {means sports car properties}
}

console.log("*** Iterating over objects and its prototype ***");

console.log("----- For-of Loop is reliable -----");
for (prop of Object.keys(sportsCar)) {
    console.log(prop + ":" + sportsCar[prop]);        // speed:fast
}

console.log("*** Iterating over object's own properties only..! ***");


// practice code:
const myBike = {
    engine: true
}
const yamaha = Object.create(myBike);
yamaha.speed = 'fast';
console.log("The object of yamaha :", yamaha);    // The object of yamaha : { speed: 'fast' }

for (prop in yamaha) {
    console.log("The properties in yamaha is :", prop);     // The properties in yamaha is : speed , The properties in yamaha is : engine
}

for (prop of Object.keys(yamaha)) {
    console.log(prop + ":" + yamaha[prop]);          // speed:fast
}


//                  ***** Template Literals *****

//Template literals can be used to create multi-line strings, interpolate variables, and to combine strings with simpler code.

console.log("Hello World..!");
console.log('Hello World..!');
console.log(`Hello World..!`);


let name = 'Ahmed';
let lastName = 'Ali';
console.log(`${name}  ${lastName} ! `)


// ES5 string   --> you can not write multi line string code in this
let noMultiLine = "No multi line string in ES5";
console.log("Did you know.? " + " " + noMultiLine);


//ES6 string  --> you can write multi line string code in this
let multiLine = `Using ES6
backticks,
multi-line
strings are
possible
`;
console.log(multiLine);











