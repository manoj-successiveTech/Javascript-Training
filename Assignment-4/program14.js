// 14. Write a program to reverse an array.


function reverseArray(arr) 

{
  let reverseArr = [];  // Create a new empty array to store reversed elements
  for (let i = arr.length - 1; i >= 0; i--) 
  {
    reverseArr.push(arr[i]);  // Add elements from the end of arr to reversed
  }
  return reverseArr;  // Return the reversed array

}

console.log("The reversed array is::", reverseArray([1, 2, 3, 4, 5]));  // Output: [5, 4, 3, 2, 1]
