"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prompt = require('prompt-sync')();
let num1 = parseInt(prompt("Enter Your First Value: "));
let num2 = parseInt(prompt("Enter Your Second Value: "));
let Operator = prompt("Enter Your Operator: ");
if (Operator == "+") {
    console.log(`${num1} ${Operator} ${num2} = ${num1 + num2}`);
}
else if (Operator == "-") {
    console.log(`${num1} ${Operator} ${num2} = ${num1 - num2}`);
}
else if (Operator == "*") {
    console.log(`${num1} ${Operator} ${num2} = ${num1 * num2}`);
}
else if (Operator == "/") {
    console.log(`${num1} ${Operator} ${num2} = ${num1 / num2}`);
}
else {
    console.log("Please Enter Your Corrent Operators");
}
