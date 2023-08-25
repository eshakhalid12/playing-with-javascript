/*                 ***** Bugs and Error *****


  Most common type of an error is ;

 1- Syntax error.
 2- Reference error.
 3- Type error.
 */

 //                               ***** Syntax, Logical and Runtime Error ***** 


console.log(username);     // A "ReferenceError" gets thrown when, for example, one tries to use variables that haven't been declared anywhere

// var a "there's no assignment operator here";    // Any kind of invalid JavaScript code will cause a "SyntaxError".

"hello".pop()                  // Uncaught TypeError:





//                            ***** Try catch blocks *****


try {
    console.log(a + b)
} 
    catch (err) {
    console.log(err)    
    console.log('Ther was an error');
    console.log("The error was save in the error log");
}
console.log("May program does not stop.");




try {
    throw new ReferenceError() ;
}  
    catch (err) {
   console.log(err)
   console.log('There was a Reference error.')
}
console.log("My program does not stop!");











