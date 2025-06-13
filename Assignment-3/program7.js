// Write a program to display the twice of a number starting from 2 and end at 4096 (2, 4, 8, 16, ..... 4096) - print  the list staring with 2 and making the loop

function displayTwiceOfNumber() {
    let result = [];
    let number = 2;
    while (number <= 4096) {
        result.push(number);
        number *= 2; // Double the number
    }
    return result.join(', ');
}
console.log("The output is ::", displayTwiceOfNumber()); // Output