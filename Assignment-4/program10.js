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

console.log("The Final array is::" ,concatenateArray([[1, 2], [3, 4], [5]])); // Output: [1, 2, 3, 4, 5]
