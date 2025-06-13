// 6. Write a program to find sum of an array .

function sumArray(arr) 
{
  let sum = 0;
  for (let i = 0; i < arr.length; i++) 
  {
    sum += arr[i]; // Add each element to sum
  }
  return sum;
}

// Take input from the user
let userInput = prompt("Enter the elements of the array separated by commas (e.g., 1,2,3,4,5):");

let inputArray = userInput.split(',');       
let numberArray = inputArray.map(Number);     
let result = sumArray(numberArray);           // Perform the sum

alert("The final result is :: " + result);   // Display final result

