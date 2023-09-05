//                      ***** Default Parameters *****

// A function declaration without default parameters set.
function noDefaultParameter(number) {
    console.log("Result :", number * number);
}
noDefaultParameter();


// now, the following improvement, using default parameters:
function withDefaultParameter(number = 10) {
    console.log("Result : ", number * number);
}
withDefaultParameter();


//Consider the following class definition: (without parameter)
class NoDefaultParams {
    constructor(num1, num2, num3, string1, bool1) {
        this.num1 = num1;
        this.num2 = num2;
        this.num3 = num3;
        this.string1 = string1;
        this.bool1 = bool1;
    }
    calculate() {
        if (this.bool1) {
            console.log(this.string1, this.num1 + this.num2 + this.num3);
            return;
        }
        return "The value of bool1 is incorrect"
    }
}
var fail = new NoDefaultParams(1, 2, 3, false);
fail.calculate();


//Consider the following class definition: (with parameter)
class WithDefaultParams {
    constructor(no1 = 1, no2 = 2, no3 = 3, string_1 = "Result : ", bool_1 = true) {
        this.no1 = no1;
        this.no2 = no2;
        this.no3 = no3;
        this.string_1 = string_1;
        this.bool_1 = bool_1;
    }

    calculateValue() {
        if (this.bool_1) {
            console.log("With Parameters")
            console.log(this.string_1, this.no1 + this.no2 + this.no3)
            return;
        }
        return "The value of bool is incorrect"
    }
}
var better = new WithDefaultParams();
better.calculateValue();



//                             ***** Designing an OO Program *****

/*
    Animal
/            \
Cat           Bird
/         \        \
HouseCat   Tiger     Parrot

There are two keywords that are essential for OOP with classes in JavaScript.
These keywords are "extends" and "super".


*/



//making Animal class
class Animal {
    constructor(color = 'yellow', energy = 100) {
        this.color = color;
        this.energy = energy;
    }
    isActive() {
        if(this.energy > 0) {  
            this.energy -= 20;   
            console.log('Energy is decreasing, currently at:', this.energy);
        } 
        else if(this.energy == 0){   
            this.sleep();      
        }
    }
    sleep() {
        this.energy += 20;
        console.log('Energy is increasing, currently at:', this.energy)
    }
    getColor() {
        console.log(this.color)
    }
}
// making Cat class
class Cat extends Animal {
    constructor(sound = 'purr', canJumpHigh = true, canClimbTrees = true, color, energy) {
        super(color, energy);
        this.sound = sound;
        this.canClimbTrees = canClimbTrees;
        this.canJumpHigh = canJumpHigh;
    }
    makeSound() {
        console.log(this.sound);
    }
}
//making Bird class
class Bird extends Animal {
    constructor(sound = 'chirp', canFly = true, color, energy) {
        super(color, energy);
        this.sound = sound;
        this.canFly = canFly;
    }
    makeSound() {
        console.log(this.sound);
    }
}

//making HouseCat class...
//This code declares a new class named HouseCat that extends the Cat class. It means that HouseCat inherits properties and methods from both the Cat class and its parent class, which is Animal.
class HouseCat extends Cat {
    constructor(houseCatSound = "meow", sound,canJumpHigh,canClimbTrees, color,energy) {
        super(sound,canJumpHigh,canClimbTrees, color,energy);
        this.houseCatSound = houseCatSound;
    }
    makeSound(option) {
        if (option) {
            super.makeSound();
        }
        console.log(this.houseCatSound);
    }
}
//making Tiger class
class Tiger extends Cat {
    constructor(tigerSound = "Roar!", sound,canJumpHigh,canClimbTrees, color,energy) {
        super(sound,canJumpHigh,canClimbTrees, color,energy);
        this.tigerSound = tigerSound;
    }
    makeSound(option) {
        if (option) {
            super.makeSound();
        }
        console.log(this.tigerSound);
    }
}
//making Parrot class
class Parrot extends Bird {
    constructor(canTalk = false, sound,canFly, color,energy) {
        super(sound,canFly, color,energy);
        this.canTalk = canTalk;
    }
    makeSound(option) {
        if (option) {
            super.makeSound();
        }
        if (this.canTalk) {
            console.log("I'm a talking parrot!");
        }
    }
}
//for parrot
var fiji = new Parrot(false); // we're passing `false` to the constructor so that fiji can't talk
var polly = new Parrot(true); // we're passing `true` to the constructor so that polly can talk

fiji.makeSound(); // undefined
fiji.makeSound(true); // chirp

polly.makeSound(); // I'm a talking parrot!
polly.makeSound(true); // chirp, I'm a talking parrot!

polly.color; // yellow
polly.energy; // 100

polly.isActive(); // Energy is decreasing, currently at: 80

// for Bird
var penguin = new Bird("shriek", false, "black and white", 200); // setting all the custom properties
penguin; // Bird {color: 'black and white', energy: 200, sound: 'shriek', canFly: false }

penguin.sound; // 'shriek'
penguin.canFly; // false
penguin.color; // 'black and white'
penguin.energy; // 200
penguin.isActive(); // Energy is decreasing, currently at: 180

//for HouseCat
var leo = new HouseCat();

// leo, no purring please:
leo.makeSound(false); // meow
// leo, both purr and meow now:
leo.makeSound(true); // purr, meow

//for Tiger
var cuddles = new Tiger();
cuddles.makeSound(false); // Roar!
cuddles.makeSound(true); // purr, Roar!