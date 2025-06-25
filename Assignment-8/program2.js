// Q2. let myObject = { name: 'John', age: 30 };
// for (property in myObject) {
//    console.log(property + ': ' + myObject.property);
// }

// Ans. 
// We should use bracket notation to access the properties of the object. 

// Modified Code 

const myObject = { name: 'John', age: 30 };
for (const property in myObject) {
   console.log(property + ': ' + myObject[property]);
}