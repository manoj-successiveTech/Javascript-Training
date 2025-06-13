// 12. Write a program to display intersection of two array.

function intersectionArray(arr1, arr2) 
{
  let result = [];
  for (var i = 0; i < arr1.length; i++) 
  {
    // Check if arr1[i] is also in arr2 and not already in the result array
    if (arr2.indexOf(arr1[i]) !== -1 && result.indexOf(arr1[i]) === -1) {
      result.push(arr1[i]);
    }
  }
  return result;
}

// Take input from the user for the first array
let userInput1 = prompt("Enter the first array of numbers separated by commas (e.g- 1, 2, 3, 4):");

// Take input from the user for the second array
let userInput2 = prompt("Enter the second array of numbers separated by commas (e.g- 3, 4, 5):");

// Split the input strings into arrays of numbers
let arr1 = userInput1.split(',').map(Number);
let arr2 = userInput2.split(',').map(Number);


if (arr1.some(isNaN) || arr2.some(isNaN)) {
  alert("Invalid input. Please enter valid arrays of numbers separated by commas.");
  arr1 = [];
  arr2 = []; 
}

// Find the intersection of the two arrays and display the result
let resultArray = intersectionArray(arr1, arr2);
alert("The final intersection array is:: " + resultArray.join(', '));