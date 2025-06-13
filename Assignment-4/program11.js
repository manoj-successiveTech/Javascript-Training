// 11. Write a program to sort an array (bubble sort)

function bubbleSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        // Swapping if left no. is greater than right no.
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

// Take input from the user
let userInput = prompt("Enter an array of numbers separated by commas (e.g- 5, 3, 8, 4, 2):");

// Split the input string into an array of numbers
let inputArray = userInput.split(',').map(Number);

// Handle cases where the input might not be in the expected format
if (inputArray.some(isNaN)) {
  alert("Invalid input. Please enter a valid array of numbers separated by commas.");
  inputArray = []; // Default to an empty array if parsing fails
}

// Sort the array and display the result
let sortedArray = bubbleSort(inputArray);
alert("The final sorted array is:: " + sortedArray.join(', '));