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

// Create an instance of Student
const studentObj = new Student(
  "Manoj Kumar",     // name
  25,          // age
  "Male",      // gender
  ["Football"], // interests (should be an array for better structure)
  "JavaScript" // studies
);

// Output the greeting
console.log("The final output is:: "),
console.log(studentObj.greeting());
