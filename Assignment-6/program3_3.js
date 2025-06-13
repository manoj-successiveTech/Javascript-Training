/* 3.3 Create a class Teacher that inherits from the Person class and has a property subjectsTaught. 
Override the farewell() method to include information about what the teacher teaches.*/

// Base class Person
// Person class
class Person {
  constructor(name, age, gender, interests) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.interests = interests;
  }
  greeting() {
    return `Hi, I'm ${this.name}.`;
  }
}

// Teacher class extending Person
class Teacher extends Person {
  constructor(name, age, gender, interests, subjectsTaught) {
    super(name, age, gender, interests); // Call to parent constructor
    this.subjectsTaught = subjectsTaught;
  }
  // Method to describe what the teacher teaches
  farewell() {
    return `${this.name} teaches ${this.subjectsTaught}.`;
  }
}

// Get input from user
const name = prompt("Enter the teacher's name:");
const age = parseInt(prompt("Enter the teacher's age:"));
const gender = prompt("Enter the teacher's gender:");
const interestsInput = prompt("Enter the teacher's interests (comma separated):");
const interests = interestsInput.split(',').map(item => item.trim());
const subjectsTaught = prompt("Enter the subjects the teacher teaches:");

// Create a Teacher instance with user input
const teacher = new Teacher(name, age, gender, interests, subjectsTaught);

// Output the farewell message using alert
alert(teacher.farewell());
