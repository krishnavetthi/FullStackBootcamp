// Calculator App using Javascript
console.log("This is a calculator program!")
const prompt = require("prompt-sync")();
let operator = prompt("Choose an operation, +,-,*,/,%");
let num1 = prompt("Enter first number");
let num2 = prompt("Enter second number"); 
let value1 = parseInt(num1);
let value2 = parseInt(num2);

switch(operator){
    case '+': let sum = value1+value2;
    console.log(`The sum of ${value1} and ${value2} is ${sum}`); break;
    case '-': let difference = value1-value2;
    console.log(`The difference of ${value1} and ${value2} is ${difference}`); break;
    case '*': let product = value1*value2;
    console.log(`The product of ${value1} and ${value2} is ${product}`); break;
    case '/': let quotient = value1/value2;
    console.log(`The quotient of ${value1} and ${value2} is ${quotient}`); break;
    case '%': let remainder = value1%value2;
    console.log(`The remainder of ${value1} and ${value2} is ${remainder}`); break;
}