/* 5. Write a program flattenObject that takes an object with nested properties and returns a flat object with the nested properties transformed into dot-separated properties. 
The function should handle nested objects and arrays.

const obj = {
   a: 1,
   b: { c: 2, d: [3, 4] }
};
Output: { 'a': 1, 'b.c': 2, 'b.d.0': 3, 'b.d.1': 4 }  */

// Function to flatten a nested object.

function flattenObject(obj) 
{
  // Create a result object to store the flattened values.
  let result = {};


  function flatten(current, propertyPath) 
  {
    // Check if the current value is an object or array
    if (typeof current === 'object' && current !== null) 
    {
      // If it's an array or object, loop through its keys
      for (let key in current) 
      {
        flatten(current[key], propertyPath ? propertyPath + '.' + key : key);
      }
    } else {
      // If it's a primitive value, assign it to the result
      result[propertyPath] = current;
    }
  }
  
  // Start recursion with the input object and an empty path
  flatten(obj, '');

  return result;
}

// Example input
const obj = {
  a: 1,
  b: { c: 2, d: [3, 4] }
};

// Call the function and log the result

const flat = flattenObject(obj);
console.log("The final output is ::" ,flat);


