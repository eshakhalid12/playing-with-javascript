//                   ***** Introduction to Objects *****

var user = {} ; //create object


////creating an object with properties and their values.
var assistantManager = {
    movement : 3,
    socialSkills : 30,
    streetSmart : 30,
    health : 40,
    specialability : "Young and ambitious",
    greeting : "Let's make some money"
}
console.log(assistantManager);   //display the object in the developer console


var table = {
    legs: 3,
    color: "brown",
    priceUSD: 100,
}
console.log(table); 


var thing = {
    bike: 3,
    car: "blue",
    USDprice: 200,
}
console.log(thing.car);   // Additionally, I can console log any individual property, like this




 
//                 ***** Objects Literals and the dot notations *****


// Now that I have this "syntax recipe", I can build any other object in a similar way:
var house = {
    rooms : 3,
    color : "pink",
    priceUSD : 100000,
}
// Additionally, nothing is preventing me from combining the two approaches. For example:  
console.log(house);
house.windows = 10;
console.log(house);
// This flexbility additionally means that I can update already existing properties, not just add new ones:
house.windows = 11;
console.log(house);



// An alternative approach of building objects is to first save an empty object literal to a variable, then use the dot notation to declare new properties on the fly, and use the assignment operator to add values to those properties; for example;
var house2 = {};
house2.rooms = 4;
house2.color = "purple";
house2.priceUSD = 12345;
console.log(house2);


//                   ***** Objects Literals and the brackets notations *****

var car = {};
car["color"] = "red";
car["speed"] = 200;
console.log(car);

car["number of doors"] = 4;
console.log(car);

car["2022"] = 1901;
console.log(car);





// I can both access and update properties on objects using either the dot notation, or the brackets notation, or a combination of both, like in the following example:
var car = {};
car.color = "red";
car["color"] = "green";
car["speed"] = 200;
car.speed = 100;
console.log(car);




// Finally, there's one really useful thing that bracket notation has but is not available in the dot notation: It can evaluate expressions.
var arrOfKeys = ['speed' , 'altitude' , 'color'];
var drone = {
    speed : 100,
    altitude : 200,
    color : "red"
}
   for(var i = 0; i < arrOfKeys.length; i++) {
    console.log(drone[arrOfKeys[i]])
}