// 4. Write a program deepClone that takes an object as input and returns a deep copy of that object. The function should handle nested objects and arrays.

// Deep clone function using structuredClone

function deepClone(obj) {
  return structuredClone(obj);
}

// Sample object

let object = {
  name: "Manoj",
  age: 25,
  address: "Delhi",
  isEmployee: true,
  continents: {
    continent_1: "Delhi",
    continent_2: "Noida",
    continent_3: "Greater Noida",
   
  },
  group: ["Manoj", "John", "Aryan"],
};

// Example usage
let example = () => {
  let clonedObject = deepClone(object);
  console.log("Original Object:", object);
  console.log("Cloned Object:", clonedObject);
};

example();
