// let myString = 'hello world';
// if (myString.length > 0) {
//     console.log('The length of the string is: ' + myString.length);
// } else {
//     console.log('The string is empty');
// }

// let myNumber = parseInt(myString);
// if (myNumber) {
//    console.log('The number is: ' + myNumber);
// } else {
//    console.log('The value is not a number');
// }

// Ans.
/* In above code first part is correct, but in second part ParseInt('hello world') returns NaN. 
So we should apply the check for !isNaN(myNumber) just to verify that result is a number or not. */


// Modified Code 

const myString = 'hello world';
if (myString.length > 0) {
    console.log('The length of the string is: ' + myString.length);
} else {
    console.log('The string is empty');
}

const myNumber = parseInt(myString);
if (!isNaN(myNumber)) {
   console.log('The number is: ' + myNumber);
} else {
   console.log('The value is not a number');
}