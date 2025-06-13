// 13. Write a program to return inverse of an array.

function inverseArray(arr) {
  let invertArr = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    invertArr.push(arr[i]); // Add elements starting from the end
  }
  return invertArr;
}

// Take input from the user
let userInput = prompt("Enter the array elements separated by commas (e.g- 1,2,3,4,5):");
let inputArray = userInput.split(',').map(Number); // Convert input string to array of numbers

// Invert the array
let invertedArray = inverseArray(inputArray);

// Display the result
alert("The inverse of the array is: " + invertedArray.join(', '));