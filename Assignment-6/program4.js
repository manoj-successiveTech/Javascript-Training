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

  // Static method to calculate the average age of an array of Person objects
  static averageAge(people) {
    if (people.length === 0) return 0;
    const totalAge = people.reduce((sum, person) => sum + person.age, 0);
    return totalAge / people.length;
  }
}

// Function to get user input and create Person objects
function createPersons() {
  const persons = [];
  for (let i = 0; i < 3; i++) {
    const firstName = prompt(`Enter first name for person ${i + 1}:`);
    const lastName = prompt(`Enter last name for person ${i + 1}:`);
    const age = parseInt(prompt(`Enter age for person ${i + 1}:`), 10);
    persons.push(new Person(firstName, lastName, age));
  }
  return persons;
}

// Create multiple Person instances based on user input
const persons = createPersons();

// Get full name of the first person
const fullName = persons[0].fullName();

// Calculate the average age of all persons
const averageAge = Person.averageAge(persons);

// Output the full name and average age using alert
alert(`The full name of the first person is: ${fullName}`);
alert(`The average age of all persons is: ${averageAge}`);