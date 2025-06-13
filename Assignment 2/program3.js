// 3. Write a function expression that takes in another function as an argument. 

const firstName = function () 
{
    // Prompt user for their first name
    return window.prompt("Please enter your first name:");
}

const fullName = function (fname) 
{ 
    return fname + " Kumar";    // Taking function as an argument and concatenating with "Kumar"
}

const myName = fullName(firstName());
console.log(myName);                    // Log to the console
    window.alert("Hello, " + myName);   // Display the full name in an alert box


        