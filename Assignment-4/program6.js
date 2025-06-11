// 6. Write a program to find sum of an array .

function sumArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i]; // Add each element to sum
  }
  return sum;
}

console.log("The final result is :: " , sumArray([1, 2, 3, 4, 5])); // Output: 15


