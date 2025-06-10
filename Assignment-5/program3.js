// 3. Write a program to remove all the id key from array of object ({name:"John", age:27, id:1})


const people = [
  { name: "John", age: 27, id: 1 },    // initiate the array with 'id' key
  { name: "Manoj", age: 25, id: 2 },
  { name: "Anany", age: 20, id: 3 }
];

// Loop through each object and delete the 'id' property

people.forEach(function(person) 
{
  delete person.id;
});

// Print the updated array
console.log("The final output of an array is::", people);   // output
