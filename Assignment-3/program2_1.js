// 2.1  Write a program to display following output as shown in figure - 1
/*
1
2 3
4 5 6
7 8 9 10 */

function displayNoPattern()
{
    let pattern = '';
    let number = 1;
    for (let i = 1; i <= 4; i++) 
    {
        for (let j = 1; j <= i; j++) 
        {
            pattern += number + ' ';
            number++;
        }
        pattern += '\n';
    }
    return pattern;
}
console.log("The Final output is ::"); 
console.log(displayNoPattern()); 
