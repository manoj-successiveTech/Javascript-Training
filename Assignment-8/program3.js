// Q3. let myArray = [1, 2, 3, 4];
// for (let i = 0; i < myArray.length; i++) {
//    console.log('The value at index ' + i + ' is: ' + myArray[i]);
// },

// Ans . 
// There is no error in above code, but we can write the above code in a more better way

// Modified Code 

let myArray = [1, 2, 3, 4];
for (let i = 0; i < myArray.length; i++) {
   console.log('The value at index',i ,'is:',myArray[i]);
}

let total = 0;
myArray.forEach(function(element) { total += element; });
console.log('The total of all elements in the array is:', total);