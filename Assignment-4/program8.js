// 8. Write a program to remove duplicate elements from an array.

function findDuplicateIndex(arr) 
{
  var duplicateArr = [];
  
  for (var i = 0; i < arr.length; i++)    // Loop through each element in the array
{
    
    for (var j = 0; j < i; j++)    // Check if the current element has appeared b
    {
      if (arr[i] === arr[j]) 
     {
        duplicateArr.push(i); // If yes, save the current index
        break; // No need to check further for this element
     }
    }
  }
  
  return duplicateArr;
}

console.log("The final result is:", findDuplicateIndex([1, 2, 3, 2, 4, 3, 5])); 
// Output: [3, 5]
