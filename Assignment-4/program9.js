// 9. Write a program to find the last duplicate index in an array.
function findLastDuplicateIndex(arr) 
{
  let seen = new Set();
  let lastIndex = -1;
  for (let i = 0; i < arr.length; i++) {
    if (seen.has(arr[i])) {
      lastIndex = i;
    } else {
      seen.add(arr[i]);
    }
  }
  return lastIndex;
}

// Taking input from the user
let input = prompt("Enter array elements separated by commas (e.g- 1,2,3,2,4,3,5):");
let array = input.split(',').map(item => item.trim());

// Finding the last duplicate index
let lastDuplicateIndex = findLastDuplicateIndex(array);

// Displaying the result
alert("The final result is:: " + lastDuplicateIndex);