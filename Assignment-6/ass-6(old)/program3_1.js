/* 3.1 Create a class Person with properties name, age, gender, and interests. Add a method greeting() that returns a string introducing the person. Also add a method farewell() that
  returns a string saying goodbye to the person.    */

class Person {

  constructor(name, age, gender, interests)   // The constructor initialize
  {
    this.name = name;         // Person's name
    this.age = age;           // Person's age
    this.gender = gender;     // Person's gender
    this.interests = interests; // What the person likes
  }

  // Method to return a greeting message
  greeting() {
    // Correct use of template literals (backticks) and interpolation
    return `Hi, My name is ${this.name}.`;
  }

  // Method to return a farewell message
  farewell() {
    return `Goodbye Everyone!`;
  }
}

// Create an instance of the Person class with sample data
const personObj = new Person("Manoj Kumar", 27, "Male", "Playing Cricket");

// Display the greeting and farewell messages
console.log("Introducing the person ::", personObj.greeting());
console.log("Goodbye to the person ::", personObj.farewell());
