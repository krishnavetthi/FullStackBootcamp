// Function
//Normal function without passing parameters
function greet(){
    console.log("Hello!!")
}

//function with passing parameters
function sum(value1, value2){ // passing arguments
    // function declaration
    console.log("Sum of two values", value1+value2)
}
greet();

sum(23,45) // function call
sum('krishna',4)

//function with return type

function multiply(val1, val2){
    let result = val1*val2;
    return result;
}

let mul1 = multiply(2,40)
console.log(mul1)

