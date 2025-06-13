// 5. Write a program to convert given string in camel case ("hello john doe" => helloJohnDoe)

// input mentioned:- string in camel case ("hello john doe" => helloJohnDoe)

function camelCase(str)
{
  let words = str.split(" "); // Split the string into words
  for (let i = 1; i < words.length; i++) 
    {
        // Capitalize first letter of every word except the first one
        words[i] = words[i][0].toUpperCase() + words[i].slice(1);
    }
  return words.join(""); // Join the words without space
}
console.log("The output of string is ::" ,camelCase("hello john doe")); // Output: helloJohnDoe