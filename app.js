function add(n1, n2) {
    return n1 + n2;
}
// Void return type, means this function does not return anything
function printResult(num) {
    console.log("Result: " + num);
}
printResult(add(2, 45));
// Function types
// this variable accept any function with 2 number parameter and return number
var combineValue;
combineValue = add;
// combineValue = printResult; // <-- ERROR! this function receives one parameter
// combineValue = 5 // <-- ERROR! this is not a function
console.log(combineValue(2, 3));
