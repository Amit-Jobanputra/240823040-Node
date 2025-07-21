let num1 = 10;
let num2 = 5;

let sum = num1 + num2;
let difference = num1 - num2;
let product = num1 * num2;
let quotient;

if (num2 !== 0) {
  quotient = num1 / num2;
} else {
  quotient = "Cannot divide by zero";
}

console.log("First Number: " + num1);
console.log("Second Number: " + num2);
console.log("Addition: " + sum);
console.log("Subtraction: " + difference);
console.log("Multiplication: " + product);
console.log("Division: " + quotient);
