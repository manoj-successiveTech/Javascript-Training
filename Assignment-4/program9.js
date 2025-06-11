// 9. Write a program to find the last duplicate index in an array.

function findLastDuplicateIndex(arr) 
{
  let seen = new Set();
  let lastIndex = -1;

  for (let i = 0; i < arr.length; i++) 
  {
    if (seen.has(arr[i])) 
    {
      lastIndex = i;
    } 
    else {
      seen.add(arr[i]);
    }
  }
  return lastIndex;
}

console.log("The final result is:: " , findLastDuplicateIndex([1, 2, 3, 2, 4, 3, 5]));  // Output: 5 (last duplicate is 3 at index 5)
