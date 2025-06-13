// 2. Write a function to take input(age, name, phone no.) from user and display it

//    using console.log , window.prompt and alert. - script on index.html

function getUserInfo()  // Function to get user information //
{
    // Prompt user for their name, age, and phone number //
    
    const name = window.prompt("Please enter your name:");
    
    const age = window.prompt("Please enter your age:");
    
    const phoneNo = window.prompt("Please enter your phone number:");

    console.log(`User Info:\nName: ${name}\nAge: ${age}\nPhone No: ${phoneNo}`);

    alert(`User Info:\nName: ${name}\nAge: ${age}\nPhone No: ${phoneNo}`);
    return { name, age, phoneNo };
}

getUserInfo();