// 3.2 Create a class Student that inherits from the Person class and has a property studies. Override the greeting() method to include information about what the student is studying. 

// Base class Person

class Person {
  constructor(name, age, gender, interests) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.interests = interests;
  }
  // Base class greeting method
  greeting() {
    return `Hi, I'm ${this.name}.`;
  }
}

// Student class inherits from Person
class Student extends Person {
  constructor(name, age, gender, interests, studies) {
    super(name, age, gender, interests); // Call the parent class constructor
    this.studies = studies;
  }
  // Overridden greeting method in Student
  greeting() {
    return `Hi, I'm ${this.name}, and I am learning ${this.studies}.`;
  }
}

// Get input from user
const name = prompt("Enter your name:");
const age = parseInt(prompt("Enter your age:"));
const gender = prompt("Enter your gender:");
const interestsInput = prompt("Enter your interests (comma separated):");
const interests = interestsInput.split(',').map(item => item.trim());
const studies = prompt("Enter what you are studying:");

// Create an instance of Student with user input
const studentObj = new Student(name, age, gender, interests, studies);

// Output the greeting using alert
alert(studentObj.greeting());