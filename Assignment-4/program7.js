// 7. Write a program to find index of duplicate elements in an array.

function findDuplicateIndex(arr) 
{
  let seen = {};
  let duplicates = [];

  arr.forEach((item, index) => {
    if (seen[item] !== undefined) {
      duplicates.push(index);
    } else {
      seen[item] = index;
    }
  });

  return duplicates;
}

console.log("The final result is::" ,findDuplicateIndex([1, 2, 3, 2, 4, 3, 5]));  // Output: [3, 5] — duplicates of 2 and 3
