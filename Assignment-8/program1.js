// Q1. let myArray = [1, 2, 3, 4];
// for (let i = 0; i <= myArray.length; i++) {
//    console.log(myArray[i]);
// }

// Ans. 
/* The loop will run 5 time, it will give undefined for the 5th index. So it can be resolved by setting 
the condition as i<myArray.length
*/
// Modified Code 

let myArray = [1, 2, 3, 4];
for (let i = 0; i < myArray.length; i++) 
{
  console.log(myArray[i]);
}