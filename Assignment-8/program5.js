// let myArray = [1, 2, 3, 4];
// for (let i = 0; i < myArray.length; i++) {
//   console.log(myArray[i]);
// }

// let myNumber = myArray[5];
// if (myNumber) {
//   console.log("The number is: " + myNumber);
// } else {
//   console.log("The number is undefined");
// }

// Ans.
/* In above code first part is correct. As we know array in javascript has 0 based indexing, 
 so in second part myNumber will give undefined value. So we should apply a check for undefined. */

// Modified Code 
const myArray = [1, 2, 3, 4];
for (let i = 0; i < myArray.length; i++) {
  console.log(myArray[i]);
}

const myNumber = myArray[5];
if (myNumber!==undefined) {
  console.log("The number is: " + myNumber);
} else {
  console.log("The number is undefined");
}