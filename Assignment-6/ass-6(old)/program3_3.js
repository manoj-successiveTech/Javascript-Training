/* 3.3 Create a class Teacher that inherits from the Person class and has a property subjectsTaught. 
Override the farewell() method to include information about what the teacher teaches.*/

// Base class Person
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

// Creating a Teacher instance
const teacher = new Teacher("Krishna", 30, "male", ["teaching"], "JavaScript");

// Display output
console.log("The Final Output is:: " ,teacher.farewell());
