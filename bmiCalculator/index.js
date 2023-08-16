//                                    ***** BMI CALCULATOR *****

function bmiCalculator(weight, height) {
    var bmi = weight / (height * height);
    return bmi;
}

// Math.pow(base, exponent) --> this is the syntax of finding power in javascript.
// Math.round(any decimal number) --> this is the syntax of round number to nearest whole number in javascript.

function bmiCalculator(weight, height) {
    var bmi = weight / Math.pow(height,2);
    return Math.round(bmi);
}
   var bmi = bmiCalculator(42, 4.9);
   console.log(bmi);


