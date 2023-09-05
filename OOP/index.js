//                ***** Introduction to Object Oriented Programming *****

//  Group data

// using object(purchase) keyword
var purchase = {
    shoes : 100,
    stateTAx : 1.2,

    totalPrice : function() {
        var calculated = purchase.shoes * purchase.stateTAx;
        console.log(`Total price is : ${calculated}`);
    }

} 
purchase.totalPrice();


// using (this) keyword  -->  The "this" keyword is an alias for the name of the object
var purchase2 = {
    shoes : 50,
    stateTAx : 1.2,

    totalPrice : function() {
        var calculated = this.shoes * this.stateTAx;
        console.log(`Total price is : ${calculated}`);
    }

} 
purchase2.totalPrice();


//  same code thing in functional programming
var shirt = 20;
var tax = 1.2;

function pay(shirt , tax) {
    return shirt * tax
}
var cost = pay(shirt , tax);
console.log(cost);



//                         ***** Classes *****

// In js any class is built using the "class" keyword.

class Car {           // Build your classes using the “class” keyword.
    constructor(color , speed) {    // Add a constructor function to accept your parameters.
        this.color = color;
        this.speed = speed;
    }

    turboOn() {
        console.log("Turbo is on.!")
    }
}
// Create an instance of the class using the keyword new and that class' name, followed by opening and closing parentheses, and optional arguments, based on how the class itself is defined.
const corolla = new Car("red" , 1300);
const civic = new Car("white",1500);
const mira = new Car("Black",500);

console.log(corolla.color);
console.log(civic.speed);
console.log(mira.color);
mira.turboOn();


//                             ***** Principles of OOP *****

// This allows us to utilize the "Object.create()" method to create or instansiate objects of our classes.
class Animal1 {

}
var myDog = Object.create(Animal1);
console.log(Animal1);


// A more common method of creating obbjects from classes is to use the "new" keyword.
class Fruit {

} 
var myFruit = new Fruit()
console.log(Fruit);


/*
Here's an example of an inheritance hierarchy in JavaScript:
To setup the inheritance relation between classes in JavaScript, I can use the "extends" keyword, as in class B extends A
*/
class Animal { }

class Cat extends Animal { }

class kitten extends Cat { }



// Practice no : 1
class Animalss {
    constructor(color , breed) {
        this.color = color;
        this.breed = breed;
    }
}
var myDog = Object.create(Animalss);


// Practice no : 2
class Bird{
    usewing(){
        console.log("flying")
    }
};

class Eagle extends Bird{
    usewingEagle(){
    super.usewing();
    console.log("barely flappping")
    }

};

class Penguin extends Bird{
    usewing(){
        console.log("swim")
    }
};


const eagle = new Eagle();
const penguin = new Penguin();

eagle.usewingEagle();
penguin.usewing();


//                                ***** Inheritance *****

var skybird = {
    hasWings : true,
    canFly : true,
    hasFeathers : true
}

// for sparrow
var sparrow = Object.create(skybird);
console.log("Sparrow : " + sparrow);

console.log("Sparrow has wings : " , sparrow.hasWings);
console.log("Sparrow  can fly : " , sparrow.canFly);
console.log("Sparrow has feathers : " , sparrow.hasFeathers);

//for crow
var crow = Object.create(skybird);
console.log("Crow has wings : " , crow.hasWings);
console.log("Crow can fly : " , crow.canFly);
console.log("Crow has feathers : " , crow.hasFeathers);

// for fish
var fish = Object.create(skybird);

fish.hasWings = false;
fish.hasFeathers = false;
fish.canFly = false;
console.log("Fish :" , fish);

console.log("Fish has wings : " , fish.hasWings);
console.log("Fish can fly : " , fish.canFly);
console.log("Fish has feathers : " , fish.hasFeathers);




