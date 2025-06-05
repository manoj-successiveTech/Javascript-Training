// 9. Write a program to print fibonaaci series    -- can also use in recursion

function fibonacciSeries(n) 
{
    let fibSeries = [];
    let a = 0, b = 1;
    for (let i = 0; i < n; i++) 
    {
        fibSeries.push(a);
        let next = a + b;
        a = b;
        b = next;
    }
    return fibSeries;

}console.log("The Factorial series", fibonacciSeries(10)); // showing output 