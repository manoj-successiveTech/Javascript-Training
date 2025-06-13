/* 2. Create a class Shape with properties width and height and methods getArea().Create two classes Rectangle and Triangle that inherit from the Shape class 
and implement the getArea() method for their respective shapes.(by inheritance) */

// 2. Create a class Shape with properties width and height and methods getArea(). Create two classes Rectangle and Triangle that inherit from the Shape class and implement the getArea() method for their respective shapes.



class Shape {
  constructor(width, height) 
  {
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

const rectObj = new Rectangle(2, 4);
const triangleObj = new Triangle(2, 4);
console.log("The final output of Rectangle::" , rectObj.getArea());
console.log("The final output of Triangle::" ,triangleObj.getArea());
