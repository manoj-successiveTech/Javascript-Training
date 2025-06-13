// 7. Write a program to find index of duplicate elements in an array.

function findDuplicateIndex(arr) {
  let seen = {};
  let duplicates = [];
  arr.forEach((item, index) => 
  {
    if (seen[item] !== undefined) 
      {
      duplicates.push(index);
    } else {
      seen[item] = index;
    }
  });
  return duplicates;
}

// Take input from the user
let input = prompt("Enter the array elements separated by commas(e.g- 1,2,3,2,4,3,5):");
let arr = input.split(',').map(Number);

// Find the duplicate indices
let result = findDuplicateIndex(arr);

// Display the result
alert("The final result is:: " + result);