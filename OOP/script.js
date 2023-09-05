//                             ***** Practice Constructor Code *****

class Railway{
    constructor(name , trainNo , address) {
        this.name = name;
        this.trainNo = trainNo;
        this.address = address;

        console.log("Constructor Called....." , name , trainNo , address);
    }

preview(){
    console.log(this.name , "your form is for train no : " , this.trainNo , "and your address is : " , this.address);
}

submit() {
    console.log(this.name , "your form is for train no : " , this.trainNo , "is now submitted..!");
}

cancel() {
    console.log(this.name , "this  form is cancel for train no : " , this.trainNo);
    this.trainNo = 0;
}

}

let myForm = new Railway("Jack" , 12345 , "London Bridge");

myForm.preview();
myForm.submit();
myForm.cancel();
myForm.preview();


//                            ***** Practice Class Code *****

class Train {
    constructor(color, lightsOn) {
        this.color = color;
        this.lightsOn = lightsOn;
    }
    toggleLights() {
        this.lightsOn = !this.lightsOn;
    }
    lightsStatus() {
        console.log('Lights on?', this.lightsOn);
    }
    getSelf() {
        console.log(this);
    }
    getPrototype() {
        var proto = Object.getPrototypeOf(this);
        console.log(proto);
    }
}

class HighSpeedTrain extends Train {
    constructor(passengers, highSpeedOn, color, lightsOn) {
        super(color, lightsOn);
        this.passengers = passengers;
        this.highSpeedOn = highSpeedOn;
    }
    toggleHighSpeed() {
        this.highSpeedOn = !this.highSpeedOn;
        console.log('High speed status:', this.highSpeedOn);
    }
    toggleLights() {
        super.toggleLights();
        super.lightsStatus();
        console.log('Lights are 100% operational.');
    }
}

var myFirstTrain = new Train('red', false);
console.log(myFirstTrain); // Train {color: 'red', lightsOn: false}
var mySecondTrain = new Train('blue', false);
var myThirdTrain = new Train('blue', false);

var train4 = new Train('red', false);
train4.toggleLights(); // undefined
train4.lightsStatus(); // Lights on? true
train4.getSelf(); // Train {color: 'red', lightsOn: true}
train4.getPrototype(); // {constructor: f, toggleLights: f, ligthsStatus: f, getSelf: f, getPrototype: f}

var train5 = new Train('blue', false);
var highSpeed1 = new HighSpeedTrain(200, false, 'green', false);

train5.toggleLights(); // undefined
train5.lightsStatus(); // Lights on? true
highSpeed1.toggleLights(); // Lights on? true, Lights are 100% operational.


train5.getPrototype(); 
highSpeed1.getPrototype(); 


//                  Using class instance as another class' constructor's property

class StationaryBike {
    constructor(position , gears) {
        this.position = position;
        this.gears = gears;
    }
}

class Treadmill {
    constructor(position , modes) {
        this.position = position;
        this.modes = modes;
    }
}

class Gym {
    constructor(openHrs, stationaryBikePos, treadmillPos) {
        this.openHrs = openHrs
        this.stationaryBike = new StationaryBike(stationaryBikePos, 8)
        this.treadmill = new Treadmill(treadmillPos, 5)
    }
}

var boxingGym = new Gym("7-22", "right corner", "left corner")

console.log(boxingGym.openHrs) //
console.log(boxingGym.stationaryBike) //
console.log(boxingGym.treadmill)
