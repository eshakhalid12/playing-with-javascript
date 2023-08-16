//                                       ********** FOR LOOP **********

 // code without for loop
 console.log('1')   
 console.log('2')   
 console.log('3')   
 console.log('Go!') 

 // code with for loop

//  1-question
for(var i = 1; i <= 3; i++){
    console.log(i);
}
    console.log("Go!");

//  2-question 
for(var i = 10; i > 0; i--){
    console.log(i);
} 
    console.log("Happy New Year!"); 
    
    
// TASK NO : 1
for(var i = 1; i <= 5; i++){
    console.log(i);
}
    console.log('Counting Compelete!');


// TASK NO : 2
for(var i = 5; i > 0; i--){
    console.log(i);
}
    console.log('Counting Finished!');   


//                                       ********** WHILE LOOP **********

//  1-question 

var counter = 3;
while(counter > 0){
    console.log(counter);
    counter = counter - 1;
}
    console.log("Have a good day!");


// TASK NO : 3   
var i = 1;
while(i <= 5){
    console.log(i);
    i = i + 1; 
}
    console.log('Counting Complete!');


// TASK NO : 4   
var i = 5;
while(i > 0){
    console.log(i);
    i = i - 1; 
}
    console.log('Counting Finished!');


// TASK NO : 3
var Year = 2018;
while(Year < 2023){
    console.log(Year);
    Year++;
} 


//                                       ********** NESTED LOOP **********

// 1-QUESTION
for(var year = 2023; year < 2025; year++){
    console.log(year);
}


// 2-QUESTION
for(var year = 2023; year < 2025; year++){
    console.log(year);

    for(var month = 6; month < 9; month++){
        console.log("------" , month);
    }
}


// 3-QUESTION
for (var firstNum = 0; firstNum < 2; firstNum++) {
    for (var secondNum = 0; secondNum < 10; secondNum++) {
        console.log(firstNum + ", " + secondNum);
    }
}


// 4-QUESTION
for(var firstNum = 0; firstNum < 2; firstNum++){
    for(var secondNum = 0; secondNum < 10; secondNum++){
        console.log(firstNum , "times" , secondNum , "equals" , firstNum * secondNum);
    }
}


// 5-QUESTION
for(var i = 100; i > 10; i = i - 10)
    for(var j = 10; j > 4; j = j - 5){
        console.log(i + " " + "divided by" +" " + j + " " + "equals to" + " " + i / j);
}


//                                 ********** USES OF LOOPS **********

var cubes = 'ABCDEFG';
//styling console output using CSS with a %c format specifier
for (var i = 0; i < 7; i++) {
    var styles = "font-size: 40px; border-radius: 10px; border: 1px solid blue; background: pink; color: purple";
    console.log("%c" + cubes[i], styles)
}

// --------------------------------- 

var cubes = 'ABCDEFG';
//styling console output using CSS with a %c format specifier
for (var i = 0; i < cubes.length; i++) {
    var styles = "font-size: 40px; border-radius: 10px; border: 1px solid blue; background: pink; color: purple";
    console.log("%c" + cubes[i], styles)
}


//                                 ********** EXERCISE NO : 1 **********  
for(var i = 1; i <= 10; i++){
    if(i == 1){
        console.log("Gold Medal");
    }
    else if(i == 2){
        console.log("Silver Medal");
    }
    else if(i == 3){
        console.log("Bronze Medal");
    }
    else{
        console.log(i);
    }
}

//                                 ********** EXERCISE NO : 2 ********** 
for( var i = 1; i <= 10; i++){
    switch(i) {

        case 1:
            console.log("Gold Medal");
            break;

        case 2:
            console.log("Silver Medal");
            break;

        case 3:
            console.log("Bronze Medal");
            break;

        default:
            console.log(i);
    }
}




