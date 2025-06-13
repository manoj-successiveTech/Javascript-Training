// 8. Write a program to remove duplicate elements from an array.

function removeDuplicateArray(arr) 
{
    return [...new Set(arr)];    //The spread operator (...) is used to expand an iterable (in this case, the Set object)
}

let input = prompt("Enter array elements separated by commas (e.g- 1,2,3,2,4,1)::"); // Taking input from the user
let array = input.split(',').map(item => item.trim());


let uniqueArray = removeDuplicateArray(array);   // Removing duplicate elements
alert("The Final array after removing duplicate elemtns is:: " + uniqueArray.join(', '));   // Displaying the result


