// 11. Write a program to sort an array (bubble sort).

function bubbleSort(arr)
{
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) 
 {
    for (let j = 0; j < n-1 - i; j++) 
    {
      if (arr[j] > arr[j + 1]) 
     {
        // Swapping if left no. is greater than right no.
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}
console.log("The final array(BubbleSort) array is :: " ,bubbleSort([5, 3, 8, 4, 2])); // Output: [2, 3, 4, 5, 8]


