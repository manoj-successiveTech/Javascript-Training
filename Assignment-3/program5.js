// 5. Write a program to print all even number first and then all odd numbers using only one iteration

function evenOdd(arr) {
    let evenNumbers = [];  // Array to hold even numbers
    let oddNumbers = [];   // Array to hold odd numbers

    
    for (let num of arr)  // Loop through the array to separate even and odd numbers 
    {
    
        if (num % 2 === 0) {
            evenNumbers.push(num);  // If the number is even, add to the evenNumbers array
        } else {
            oddNumbers.push(num);   // If the number is odd, add to the oddNumbers array
        }
    }
    
    return{   
        evenNumbers: evenNumbers,    // Return the two arrays (even and odd numbers) separately
        oddNumbers: oddNumbers
    };
}

// Example usage:
let result = evenOdd([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

// Display results
console.log("Even numbers:", result.evenNumbers); // Output: Even numbers: [2, 4, 6, 8, 10]
console.log("Odd numbers:", result.oddNumbers);   // Output: Odd numbers: [1, 3, 5, 7, 9]
