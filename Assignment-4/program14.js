// 14. Write a program to reverse an array.

function reverseArray(arr) 
{
  let reverseArr = [];  // Create a new empty array to store reversed elements
  for (let i = arr.length - 1; i >= 0; i--) {
    reverseArr.push(arr[i]);  // Add elements from the end of arr to reversed
  }
  return reverseArr;  // Return the reversed array
}

// Take input from the user
let userInput = prompt("Enter the array elements separated by commas (e.g- 1,2,3,4,5):");
let inputArray = userInput.split(',').map(Number); // Convert input string to array of numbers

// Reverse the array
let reversedArray = reverseArray(inputArray);

// Display the result
alert("The reversed array is:: " + reversedArray.join(', '));