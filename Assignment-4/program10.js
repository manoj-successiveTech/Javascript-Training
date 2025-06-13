// 10. Write a program to concatenate an input of array of arrays.

function concatenateArray(arr) 
{
  let result = [];
  for (let i = 0; i < arr.length; i++) 
 {
    result = result.concat(arr[i]); // Merge each sub-array
  }
  return result;
}

// Take input from the user
let userInput = prompt("Enter an array of arrays (e.g-[[1, 2], [3, 4], [5]]):");

// Split the input string into individual sub-arrays
let subArrays = userInput.split('], [').map(subArray => {
  // Remove any leading or trailing brackets and split by commas
  let trimmedSubArray = subArray.replace(/\[|\]/g, '').split(',').map(item => {
    // Convert each item to a number
    return Number(item.trim());
  });
  return trimmedSubArray;
});

// Handle cases where the input might not be in the expected format

if (subArrays.length === 1 && subArrays[0].length === 0) 
{
  alert("Invalid input. Please enter a valid array of arrays.");
  subArrays = []; // Default to an empty array if parsing fails
}

// Concatenate the array and display the result
let finalArray = concatenateArray(subArrays);
alert("The Final array is:: " + finalArray.join(', '));
