// 2.2  Write a program to display following output as shown in figure -2
/*
1
2 2
3 3 3
4 4 4 4
*/

function displayNoPattern2() 
{
    let pattern = '';
    for (let i = 1; i <= 4; i++) {
        for (let j = 1; j <= i; j++) {
            pattern += i + ' ';
        }
        pattern += '\n';
    }
    return pattern;
}
console.log("The Final output is ::"); 
console.log(displayNoPattern2()); // Output the pattern