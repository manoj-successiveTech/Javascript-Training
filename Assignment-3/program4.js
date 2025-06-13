// Write a program to print all even number first and then all odd numbers(Two for loop used)


function evenOdd(arr) 
{
    let evenNumbers = [];  // Array to hold even numbers
    let oddNumbers = [];   // Array to hold odd numbers

    // First loop for even numbers
    
    for (let i = 0; i < arr.length; i++) 
    {
        // We know the even numbers are divisible by 2, so add them to the evenNumbers array
        if (arr[i] % 2 === 0) 
        {
            evenNumbers.push(arr[i]);
        }
    }

    // Second loop for odd numbers
    for (let i = 0; i < arr.length; i++) 
    {
        // Add odd numbers to oddNumbers array (odd numbers are not divisible by 2)
        if (arr[i] % 2 !== 0) {
            oddNumbers.push(arr[i]);
        }
    }

    // Return the two arrays (even and odd numbers) separately
    return {
        evenNumbers: evenNumbers,
        oddNumbers: oddNumbers
    };
}

// Example usage:
let result = evenOdd([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

// Display results of even and odd numbers
console.log("The Even numbers is::", result.evenNumbers); // Output: Even numbers: [2, 4, 6, 8, 10]
console.log("The Odd numbers is::", result.oddNumbers);   // Output: Odd numbers: [1, 3, 5, 7, 9]
