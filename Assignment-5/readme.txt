-------------Assignment-5------ (for 9th June)

Description

1. Write a program to iterate over object.

2. Write a program to sort an array of object on the basis of age ({name:"John", age:26}).

3. Write a program to remove all the id key from array of object ({name:"John", age:27, id:1})

4. Write a program deepClone that takes an object as input and returns a deep copy of that object. The function should handle nested objects and arrays.

5. Write a program flattenObject that takes an object with nested properties and returns a flat object with the nested properties transformed into dot-separated properties. The function should handle nested objects and arrays.

const obj = {
   a: 1,
   b: { c: 2, d: [3, 4] }
};
Output: { 'a': 1, 'b.c': 2, 'b.d.0': 3, 'b.d.1': 4 }
