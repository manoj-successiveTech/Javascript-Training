// 3. Write a program to display Diamond Pattern

//         *
//       *  *
//     *  *  *
//   *  *  *  *
// *  *  *  *  *
//   *  *  *  *
//     *  *  *
//      *  *
//        *

function displayDiamondPattern() {
    let pattern = '';
    const n = 5; // Number of rows for the upper part of the diamond

    // Upper part of the diamond

    for (let i = 1; i <= n; i++) 
    {
        // Print leading spaces
        for (let j = n; j > i; j--) 
        {
            pattern += ' ';
        }
        // Print stars
        for (let k = 1; k <= i; k++) 
        {
            pattern += '* ';
        }
        pattern += '\n';
    }

    // Lower part of the diamond
    
    for (let i = n - 1; i >= 1; i--) 
    {
        // Print leading spaces
        for (let j = n; j > i; j--) {
            pattern += ' ';
        }
        // Print stars
        for (let k = 1; k <= i; k++) {
            pattern += '* ';
        }
        pattern += '\n';
    }

    return pattern;
}

// Add this line to display the pattern in the console:
console.log("the final output is::")
console.log(displayDiamondPattern()); // console.log(displayDiamondPattern());
   
