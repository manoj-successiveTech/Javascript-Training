//1. 1. Write a program to iterate over object.

let person = 
{
  name: "Manoj Kumar",
  age: 25,
  profile: "Trainee"
};

console.log("The Final output is:: ");

for (let key in person) 
{
  console.log(key + ": " + person[key]);
}
