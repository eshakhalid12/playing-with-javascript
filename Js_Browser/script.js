//                          ***** Web Page Content Update *****

// Ques no : 1
let answer = prompt('What is your name ?');

if(typeof (answer) === 'string') {
    var h1 = document.createElement('h1');
    h1.innerText = answer;
    document.body.innerText = ' ';
    document.body.appendChild(h1);
}


// Ques no : 2
var h2 = document.createElement('h2');
h2.innerText = "Type into the input to make this text change";

var input = document.createElement('input');
input.setAttribute('type' , 'text');

document.body.innerText = ' ';
document.body.appendChild(h2);
document.body.appendChild(input);


// Ques no : 3  (Now, the only thing that you still need to do to complete my code is to update the text content of the h1 element with the value you got from the input field.)
var h3 = document.createElement('h3');
h2.innerText = "Type into the input to make this text change";

var input = document.createElement('input');
input.setAttribute('type' , 'text');

document.body.innerText = ' ';
document.body.appendChild(h3);
document.body.appendChild(input);

input.addEventListener('change' , function() {
    document.write(input.value);

});


// Ques no : 4  (After this update, whatever you type into the input, after pressing the ENTER key, will be shown as the text inside the h1 element)
var h4 = document.createElement('h4')
h1.innerText = "Type into the input to make this text change"

var input = document.createElement('input')
input.setAttribute('type', 'text')

document.body.innerText = '';
document.body.appendChild(h4);
document.body.appendChild(input);

input.addEventListener('change', function() {
    h4.innerText = input.value
})










