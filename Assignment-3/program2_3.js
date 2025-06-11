// 2.3  Write a program to display following output as shown in figure-3

/*
1 2 3 4 5
1 2 3 4
1 2 3
1 2
1
1 2
1 2 3
1 2 3 4
1 2 3 4 5

*/

function displayNoPattern()
{
    let pattern = '';
    const n = 5; // Number of rows for the upper part of the pattern

    // Upper part of the pattern
    for (let i = n; i >= 1; i--) 
    {
        for (let j = 1; j <= i; j++) {
            pattern += j + ' ';
        }
        pattern += '\n';
    }

    // Lower part of the pattern
    for (let i = 2; i <= n; i++) {
        for (let j = 1; j <= i; j++) {
            pattern += j + ' ';
        }
        pattern += '\n';
    }

    return pattern;
}
console.log("The Final output is ::"); 
console.log(displayNoPattern()); // Output the pattern