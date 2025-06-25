import { subtract, sum } from "./math/math.js";

let [a,b]=process.argv.slice(2);
let num1 = parseFloat(a);
let num2 = parseFloat(b);

console.log("The Sum of 2 numbers is",sum(num1, num2));
console.log("The difference of 2 numbers is",subtract(num1, num2));
