// 2. Array of people (each person is an object)
const people = [
  { name: "Manoj", age: 25 },
  { name: "John", age: 26 },
  { name: "Anany", age: 20 }
];

// Sort the array based on age
people.sort(function(a, b) 
{
  return a.age - b.age;
});

console.log("The Output is::", people);  // Print the sorted array
