//        ***** Function without parameter *****
function addTwoNums () {
    var a = 10;
    var b = 20;
    var c = a + b;
    console.log(c);
}
addTwoNums();


//        ***** Function with parameter *****
function addTwoNum(a,b) {
     var c = a + b;
    console.log(c);
}

addTwoNum(2,2);
addTwoNum(10,20);


//                           ***** Practice with Function *****

// A function that accepts two parameters
function letterFinder(word , match) {
        
        //this loop exists when i is equal to the length of the word
    for(var i = 0; i < word.length; i++) {

        //check if the current characater, word[i], is equal to the match
        if(word[i] == match) {
            console.log('Found the' , match , 'at' , i);
        }
        else{
            console.log('Not found the' , match , 'at' , i);
        }

    }
}
letterFinder("test" , "t");