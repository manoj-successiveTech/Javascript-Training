// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }
// Person.prototype.getDetails = function () {
//   console.log(this.name + " is " + this.age + " years old");
// };
// var person = new Person("John Doe", 30);
// delete person.name;
// person.getDetails();

//Ans.
// The above function is working perfectly, but there might be some changes in the code.

// Modified Code

function Person(name, age) {
  // Constructor function
  this.name = name;
  this.age = age;
}
// Inside the constructor, the this keyword refers to the new object being created.
Person.prototype.getDetails = function () {
  console.log(this.name + " is " + this.age + " years old");
};
const person = new Person("John Doe", 30);
delete person.name;
person.getDetails();