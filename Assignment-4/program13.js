// 13. Write a program to return inverse of an array.

function inverseArray(arr) 
{
  let invertArr = [];
  for (let i = arr.length - 1; i >= 0; i--) 
  {
    invertArr.push(arr[i]); // Add elements starting from the end
  }
  return invertArr;
}

console.log("The inverse of the array is:", inverseArray([1, 2, 3, 4, 5])); // Output: [5, 4, 3, 2, 1]
