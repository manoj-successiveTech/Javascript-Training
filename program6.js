// Q6. Write a function expression that takes in a number and returns true if it's even and false if it's odd.

    let checkEven=function (num)
    {
        if(num%2===0){
            return true;
        }
        else
        {
            return false
        }
            
    }

    let num=5;
    
    // Check if the number is even or odd using the function

    if(checkEven(num)==true)

        {
        console.log("The number is Even");
        }

    else{
        console.log("The number is Odd");
    }