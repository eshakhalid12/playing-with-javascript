// Storing Data in Array 
var train1 = ["wheat" , "barley" , "potato" , "salt" , "rocks"];

console.log(train1[0]);
console.log(train1[1]);
console.log(train1[2]);
console.log(train1[3]);
console.log(train1[4]);



//function that takes an array as input and display all items of this array
function listArrayItems(arr) {
    for (var i = 0; i < arr.length; i++) {
        console.log(i, arr[i])
    }
}
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink'];
listArrayItems(colors);



// To start the count from one instead of zero, I can update my function declaration
function listOfArrayItems(arr) {
    for(var i = 0; i < arr.length; i++) {
        console.log(i+1,arr[i])
    }
}
var things = ['book' , 'copy' , 'pencil' , 'chair' , 'pen' , 'shoes'];
listOfArrayItems(things);



//I can even add one or more conditions, such as:
function arrayItemList(arr) {
    for(var i = 0; i < arr.length; i++){

        if(arr[i] == 'glass') {
            console.log(i*100 , "Sunglasses!");
        }
        else{
            console.log(i*100, arr[i]);
        }
    }
}
var a = ['glass' , 'box' , 'button' , 'pc'];
arrayItemList(a);


//                             ***** Arrays are iterable *****

var veggies = ['onion' , 'parsley' , 'carrot'];
console.log(veggies);

console.log(veggies.length);

for(var i = 0; i < veggies.length; i++) {
    console.log(veggies[i]);
}