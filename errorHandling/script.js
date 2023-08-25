
//                       ***** Undefined , null and empty values *****

var noise;   // undefined 
console.log(noise);

noise = 'thunder';    // defined
console.log(noise);

var games = {
    score: 1000
}
games.Score;    // undefned


var name1 = " ";   // empty string
console.log(name1);



//                          ***** Error Preventation *****

//Task no : 1

function addTwoNums(a, b) {
    try {
        if (typeof (a) != 'number') {
            throw new ReferenceError("The first argument is not a number")
        }
        else if (typeof (b) != 'number') {
            throw new ReferenceError("The second arugument is also not a number")
        }
        else {
            console.log(a + b)
        }
    } catch (err) {
        console.log("Error!", err)
    }
}
addTwoNums(5, "5")
console.log("It still works");



//                          ***** Defensive Programming *****

// Task no : 2

function letterFinder(word , match) {

    var condition1 = typeof(word) == 'string' && word.length >= 2    // if the word is a string and the length is greater than or equal to 2

    var condition2 = typeof(match) == 'string' && match.length == 1   // if the match is a string and the length is equal to 1
 
    if(condition1 && condition2) {

        for ( var i =  0 ; i < word.length ; i++) {

            if(word[i] == match) {
    
                console.log("Found the" , match , "at" , i)
            }
    
            else {
    
                console.log("Not Found the" , match , at , i)
            }
    
        }

    }

    else {
        console.log("please pass correct argument to the function")
    }

    
}

letterFinder([] , [])
letterFinder("cat" , "c")







//-----------------------

function letterFinder(word, match) {
    var condition1 = typeof(word) == 'string' && word.length >= 2; //if the word is a string and the length is greater than or equal to 2
    var condition2 = typeof(match) == 'string' && match.length == 1; //if the match is a string and the length is equal to 1
    if(condition1 && condition2) { //if both condition matches
        for(var i = 0; i < word.length; i++) {
            if(word[i] == match) {
                //check if the character at this i position in the word is equal to the match
                console.log('Found the', match, 'at', i)
            } else {
                console.log('---No match found at', i)
            }
        }
    } else {
        //if the requirements don't match
        console.log("Please pass correct arguments to the function")
    }
}
letterFinder([],[])
letterFinder("cat","c")