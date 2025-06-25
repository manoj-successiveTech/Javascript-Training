// Q9. function Person(name, age) { this.name = name; this.age = age; }
// var person = Person("John Doe", 30);
// console.log(person.name);

// Ans.
/* In above code we will get an error as object is not created from the constructor funciton
 So, we need to use new keyword to create an object of constructor function */

// Modified Code

function Person(name, age) 
{
  this.name = name;
  this.age = age;
}
const person = new Person("John Doe", 30);
console.log(person.name);