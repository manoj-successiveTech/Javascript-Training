// var person = { name: "John Doe", age: 30, getDetails: function() { console.log(this.name + " is " + this.age + " years old"); } };
// var getPersonDetails = person.getDetails;
// getPersonDetails();

// Ans. 
// When we call getPersondetails(), `this` do not refers to person object, here this refers to global object, and in this case this.name and this.age will give undefined . So to resolve we can directly call the getDetails() function through person object as person.getDetails();

// Modified Code 
// Method 1 By directly calling function through object

const person1 = {
  name: "John Doe",
  age: 30,
  getDetails: function () {
    console.log(this.name + " is " + this.age + " years old");
  },
};
person1.getDetails();

// Method 2 , using bind function, we can explicitly bind this to the function.

const person2 = {
  name: "John Doe",
  age: 30,
  getDetails: function () {
    console.log(this.name + " is " + this.age + " years old");
  },
};
var getPersonDetails = person2.getDetails.bind(person2);
getPersonDetails();