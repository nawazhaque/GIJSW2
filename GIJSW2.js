/* function declaration, under this is me 
seeing if I could write it as a function expression

function min(number1, number2) {
    if(number1 > number2)
    return number2;
    return number1;
}
const number = min(20,21)
console.log(number); 
*/

// very easy
'use strict'
var calcMinimum = function (number1, number2) {
    if(number1 > number2)
    return number2;
    return number1;
}
const minimum = calcMinimum(20,30);
console.log(minimum);

//easy
let student1 = [firstName="Anthony", lastName="Sanders", age= 21];
let student2 = [firstName="Faith", lastName="Marti", age=24];
let student3 = [firstName="john", lastName="peters", age=27];

let studentsData = [student1, student2, student3];
console.log(`Hello my name is ` + String(student2[0]) + " " + String(student2[1]) + ` and I'm ${age} years old.`  );

// let ages = [18, 19, 20]
// let lastName = ["Men", "Josephine", "Marti"]

//medium

/*
let userInput= prompt(`Please enter a number`);

if (userInput === String(1)) {
    alert("January")
}

if (userInput === String(2)) {
    alert("February")
}

if (userInput === String(3)) {
    alert("March")
}

if (userInput === String(4)) {
    alert("April")
}

if (userInput === String(5)) {
    alert("June")
}

if (userInput === String(7)) {
    alert("July")
}

if (userInput === String(8)) {
    alert("August")
}

if (userInput === String(9)) {
    alert("September")
}

if (userInput === String(10)) {
    alert("October")
}

if (userInput === String(11)) {
    alert("November")
}

if (userInput === String(12)) {
    alert("December")
} else if (userInput <=0) {
    alert("Invalid number!!")
}

*/ 

//hard
let heightTom = 9;
let massTom = 8;
let heightJerry = 10;
let massJerry = 45;

let bmiTom = (massTom / heightTom **2);
let bmiJerry = (massJerry / heightJerry **2);

let lowerBmi = bmiTom > bmiJerry

console.log(`Is Tom's BMI higher than Jerry's? ${lowerBmi}`);