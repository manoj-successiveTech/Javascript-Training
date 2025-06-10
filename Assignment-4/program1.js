// 1. Write a program to remove duplicate characters from a string ("Hello Yellow" => "Helo Yw").


function removeDuplicate(str)
{
  let result = '';
  for (let char of str) 
  {
    if (!result.includes(char)) 
    {
      result += char;
    }
  }
  return result;
}

console.log("The final result is::" , removeDuplicate("Hello Yellow")); // Output: "Helo Yw"
