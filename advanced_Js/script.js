//                      ***** Data Structures *****

//  Data structure is a way to organized data.

//                ***** The most common examples of Data structures in JS. *****

// 1- Object :
//Objects are collections of key-value pairs, but they are not iterable. They are used to represent structured data and can be nested within each other.

// 2- Arrays :
// Arrays are ordered collections of values . They can hold various data types, including numbers, strings, objects, and even other arrays. Arrays are zero-indexed meaning the first element is at index 0.

// 3- Maps :
// Maps are made up of iterable key value pairs.  Maps are collections of key-value pairs where keys can be of any data type, including objects and functions.

//           ***** Working with Maps in JavaScript *****

let bestBoxers = new Map();

bestBoxers.set(1, "The Champion");
bestBoxers.set(2, "The Runner-up");
bestBoxers.set(3, "The third place");

console.log(bestBoxers);

// To get a specific value, you need to use the "get()" method. For example:
console.log(bestBoxers.get(1));


// 4- Sets : 
// Sets are collections of unique values. They are useful when you need to store a list of values without duplicates

//                   ***** Working with Sets in Javascript *****
const repitativeFruit = ['Banana' , 'Pineapple' , 'Cherry' , 'Grapes'];
const uniqueFruits = new Set(repitativeFruit);
console.log(uniqueFruits);



//         ***** In this reading, the focus is on three specific methods that exist on arrays: *****

// 1- The forEach() method.
// Arrays in JavaScript come with a handy method that allows you to loop over each of their members
const fruits = ['Kivi', 'Mango', 'Aple', 'Pear'];
function appendIndex(fruit, index) {
    console.log(`${index} . ${fruit}`);
}
fruits.forEach(appendIndex);

// practice code
const numbers = [1, 2, 3, 4, 5];

numbers.forEach(function (number, index) {
    console.log(`Element at index ${index} is ${number}`);
});

// practice code
const veggies = ['onion', 'garlic', 'potato'];

veggies.forEach(function (veggies, index) {
    console.log(`${index} . ${fruits}`);

});


// 2- The filter() method
// Another very useful method on the array is the filter() method. It filters your arrays based on a specific test. Those array items that pass the test are returned.
const nums = [0, 10, 20, 30, 40, 50];
const filteredNum = nums.filter(function (num) {
    return num > 20;
});
console.log(filteredNum);


// 3- The map method
// Finally, there's a very useful map method. This method is used to map each array item over to another array's item, based on whatever work is performed inside the function that is passed-in to the map as a parameter.
const myNum = [0, 10, 20, 30, 40, 50];
const newNum = [0, 10, 20, 30, 40, 50].map(function (num) {
    return num / 10;
});
console.log(newNum);


// The example below demonstrates how to use the object data structure to complete a specific task. This task is to convert an object to an array
const result = [];

const drone = {
    speed : 100,
    color : 'yellow'
}

const droneKey = Object.keys(drone);
droneKey.forEach( function(key) {
    result.push(key , drone[key])
});
console.log(result);



//                                    ***** Spread operator *****

// 1- Cloning Arrays : ---> (You can use the spread operator to create a shallow copy of an array:)
const originalArray = [1 , 2 , 3];
const cloneArray = [...originalArray];
console.log("Cloning Array is : " , cloneArray);


// 2- Concatenating Arrays:  ---> ( You can combine multiple arrays into one using the spread operator:)
const array1 = [1 , 2];
const array2 = [3 , 4];
const combineArray = [...array1 , ...array2];
console.log("Concatenating Array is : " , combineArray);


// 3- Adding Elements to an Array:  ---> (You can add elements to an array while spreading existing elements)
const array = [1 , 2 , 3];
const addArray = [...array , 4 , 5 , 6];
console.log("Adding Array Element is : " , addArray);


// 4- Spreading Function Arguments:  ---> (You can use the spread operator to pass elements of an array as arguments to a function)
function sum(a , b , c) {
    return a + b + c;
}
const digits = [1 , 2 , 3];
const resultOfAddDigits = sum(...digits);
console.log("Spreading Function Arguments : " , resultOfAddDigits);



//                               ***** Rest Operator *****

// Using the Rest Operator in Array Destructuring: ---> (The rest operator can also be used when destructuring arrays to collect remaining elements into a new array )

const [first , second , ...rest] = [1 , 2 , 3 , 4 , 5];
console.log("The first number is : " , first);
console.log("The second number is : " , second);
console.log("The remaining number is : " , rest);



//                              ***** Using Rest and Spread operator *****

const lightColors = ['pink' , 'blue' , 'yellow'];
const darkColors = ['red' , 'black' , 'purple'];

const lightAndDark = [...lightColors , ...darkColors];

console.log("The combination of light and dark is : " , lightAndDark);


// It's also easy to join objects:
const flying = {wings : 2};
const car = {wheel : 4};

const flyingCar = {...flying , ...car};

console.log("The join of an object is : " , flyingCar);


// Add new members to arrays without using the push() method.
let cars = ['BMW' , 'Supra'];
cars = [...cars , 'Mercedes Benz' , 'Civic'];
console.log("All cars name is : " , cars);


// Convert a string to an array using the spread operator
const greeting = 'Hello';
const arrayOfChar = [...greeting];
console.log("The characters of Hello is : " , arrayOfChar);


// how to copy an object into a completely separate object, using the spread operator.
const car1 = {
    color : 'black',
    speed : 200
};
const car2 = {...car1};
car1.speed = 201;
console.log("The update speed of car1 is : " , car1.speed , "The speed of car2 is : " , car2.speed);


// You can copy an array into a completely separate array, also using the spread operator, like this:
const name1 = ['Ali' , 'Ahmed'];
const name2 = [...name1];
name1.pop();
console.log(name1 , "not" , name2);



