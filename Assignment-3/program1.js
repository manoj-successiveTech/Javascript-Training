// Write a program to perform functionality of a calculator (add,sub,multiply,divide) in js

function calculator(a, b, operator) 
{
  if (operator === '+') 
    {
    return a + b;
    } 

  else if (operator === '-') 
    {
    return a - b;
    } 

  else if (operator === '*') 
    {
    return a * b;
    } 
  
  else if (operator === '/') 
    {
    if (b === 0) 
        {
             return "Error: Division by zero";
        }
    return a / b;
  } 
  
  else {
        return "Invalid operator";
       }
}

// Example usage:
console.log("The final output of respective operations is::");
console.log("The addition of a and b::",calculator(15, 5, '+')); //output addition:: 15
console.log("The subtraction of a and b is::", calculator(10, 5, '-')); // output subtraction:: 5
console.log("The multiplication of a and b is::", calculator(10, 5, '*')); // output multiplication::50
console.log("The Division of a and b is::", calculator(100, 5, '/')); // output Division :: 2





