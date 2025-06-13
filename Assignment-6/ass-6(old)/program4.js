/* 4. Create a class called `Person` that has properties for `firstName`, `lastName`, and `age`. The class should also have a method called `fullName` that returns the person's full name.
Additionally, the class should have a method called `averageAge` that takes in an array of `Person` objects and returns the average age of all the people in the array.*/  
class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  // Method to return full name with a space in between
  fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  // Static method since averageAge doesn't depend on one instance

  static averageAge(array)
  {
    const total = array.reduce((sum, obj) => sum + obj.age, 0);
    return total / array.length;
  }
}

// Create multiple Person instances
const obj1 = new Person("Manoj", "Kumar", 25);
const obj2 = new Person("Anany", "Morye", 22);
const obj3 = new Person("Vishal", "Mishra", 28);

// Get full name of obj1
const fullName = obj1.fullName();

// Call averageAge as a static method on the class
const average = Person.averageAge([obj1, obj2, obj3]);

// Output the full name & average age

console.log("The full name is::", fullName);  
console.log("The final output is::" ,average);  
