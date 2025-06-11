// 12. Write a program to display intersection of two array.

function intersectionArray(arr1, arr2) 
{
  let result = [];
  for (var i = 0; i < arr1.length; i++) 
 {
    // Check if arr1[i] is also in arr2 and not already in the result array
    if (arr2.indexOf(arr1[i]) !== -1 && result.indexOf(arr1[i]) === -1) 
    {
      result.push(arr1[i]);
    }
  }
  return result;
}
console.log("The final arrays is:", intersectionArray([1, 2, 3, 4], [3, 4, 5])); // Output: [3, 4]

