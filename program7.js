// 7. All of the above questions from 3-6 needs to be done with arrow functions also

//3. Write a function expression that takes in another function as an argument using arrow function

const firstName = () => "Manoj";     // Arrow function for firstName
const fullName = (fname) => fname + " Kumar";   // Arrow function for fullName

const myName = fullName(firstName());  // Get the full name by passing firstName() as an argument

console.log("The output of name is::" ,myName);  //Output


// 4. Write a function expression that takes in a number and returns its square using arrow function syntax.

const squareNum = (num) => num ** 2;
let square = squareNum(5);    // Calling the function with an example number (e.g - 5)

console.log("The square of the number is:", square);   // Logging the result

//5. Using Arrow function to calculate the sum of two numbers

const sumNum = (num1, num2) => num1 + num2;

// Calculate the sum
let sum = sumNum(10, 20);

// Log the result
console.log("The sum of the numbers is:", sum);


//6. Arrow function to check if a number is even

const checkEven = (num) => num % 2 === 0;
let num = 5;

if (checkEven(num)) {
    console.log("The number is Even");
} else {
    console.log("The number is Odd");
}

