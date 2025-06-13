/* 2. Create a class Shape with properties width and height and methods getArea().Create two classes Rectangle and Triangle that inherit from the Shape class 
and implement the getArea() method for their respective shapes.(by inheritance) */

// input user using prompt & for output using alert using alert


class Shape {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  getArea() {}
}

class Rectangle extends Shape {
  constructor(width, height) {
    super(width, height);
  }
  getArea() {
    return this.width * this.height;
  }
}

class Triangle extends Shape {
  constructor(width, height) {
    super(width, height);
  }
  getArea() {
    return (1 / 2) * this.width * this.height;
  }
}

// Take input from the user
const width = parseFloat(prompt("Enter the width:"));
const height = parseFloat(prompt("Enter the height:"));

// Create objects
const rectObj = new Rectangle(width, height);
const triangleObj = new Triangle(width, height);

// Calculate and display the area
alert("The final output of Rectangle:: " + rectObj.getArea());     // Final output of Rectangle
alert("The final output of Triangle:: " + triangleObj.getArea());  // Final output of Triangle