//                         ***** FUNCTION PART NO : 1 *****

//                       ***** Creating and Calling Function *****
function getMilk () {
    console.log("LeaveHouse");
    console.log("MoveRight");
    console.log("MoveRight");
    console.log("MoveUp");
    console.log("MoveUp");
    console.log("MoveUp");
    console.log("MoveUp");
    console.log("MoveRight");
    console.log("MoveRight");
    console.log("ByMilk");
    console.log("MoveLeft");
    console.log("MoveLeft");
    console.log("MoveDown");
    console.log("MoveDown");
    console.log("MoveDown");
    console.log("MoveDown");
    console.log("MoveLeft");
    console.log("MoveLeft");
    console.log("EnterHouse");
}
getMilk();

//                                  ***** Chess Board Game *****

function main () {
    beepersRight();
    goUpTurnLeft();
    beepersLeft();
    goUpTurnRight();
        beepersRight();
    goUpTurnLeft();
    beepersLeft();
    goUpTurnRight();
        beepersRight();     
}

function goUpTurnRight () {
    turnRight();
    move();
    turnRight();
}

function goUpTurnLeft () {
    turnLeft();
    move();
    turnLeft();
}

function beepersRight () {
    putBeeper();
    move();
    move();
    putBeeper();
    move();
    move();
    putBeeper();
}

function beepersLeft () {
    move();
    putBeeper();
    move();
    move();
    putBeeper();
    move();
}

//                                 ***** FUNCTION PART NO : 2 *****

//                                ***** Parameters and Arguments *****
function getMilk (money) {
    console.log("LeaveHouse");
    console.log("MoveRight");
    console.log("MoveRight");
    console.log("MoveUp");
    console.log("MoveUp");
    console.log("MoveUp");
    console.log("MoveUp");
    console.log("MoveRight");
    console.log("MoveRight");

    var numberOfBottles = Math.floor(money / 1.5);
    console.log("Buy" + " " + numberOfBottles +" " + "bottles of milk");

    console.log("MoveLeft");
    console.log("MoveLeft");
    console.log("MoveDown");
    console.log("MoveDown");
    console.log("MoveDown");
    console.log("MoveDown");
    console.log("MoveLeft");
    console.log("MoveLeft");
    console.log("EnterHouse");
}
getMilk(5);


//                                     ***** Life in Week *****

function lifeOFWeeks(age) {

    var yearsRemaining = 90 - age;
    var days = yearsRemaining * 365;
    var weeks = yearsRemaining * 52;
    var months = yearsRemaining * 12;

    console.log("You have left" + " " + days + " days " + "," + " " + weeks + " " + "weeks" + " " + " and" + " " + months) + " months.";

  }
  lifeOFWeeks(21);


//                                    ***** FUNCTION PART NO : 3 *****

//                                   ***** Outputs and Return Value *****


  function getMilk (money, costPerBottle) {
    console.log("LeaveHouse");
    console.log("MoveRight");
    console.log("MoveRight");
    console.log("MoveUp");
    console.log("MoveUp");
    console.log("MoveUp");
    console.log("MoveUp");
    console.log("MoveRight");
    console.log("MoveRight");

   console.log("Buy " + calcBottles(money , costPerBottle) + " " + "bottles of milk");
    
    console.log("MoveLeft");
    console.log("MoveLeft");
    console.log("MoveDown");
    console.log("MoveDown");
    console.log("MoveDown");
    console.log("MoveDown");
    console.log("MoveLeft");
    console.log("MoveLeft");
    console.log("EnterHouse");

    return money % 1.5;         //Remainder of this division

}
// var change = getMilk(4);
// console.log(change);

function calcBottles(staringMoney, costPerBottle) {
    var numberOfBottles = Math.floor(staringMoney / costPerBottle);
    return numberOfBottles;
}

function calcChange(staringAmount, costPerBottle) {
    var change = staringAmount % costPerBottle;
    return change;
}
console.log("Hello master , here is your " + getMilk(20 , 6) + " "  + "change.");
