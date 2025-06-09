// 8. Write a program to display number from 1-20 using all types of loops

const printFor = () => {
    console.log("Output using for loop::");
    for (let i = 1; i <= 20; i++) {
        console.log(i);
    }
};

// Using while loop
const printWhile = () => {
    console.log("Output using while loop::");
    let i = 1;
    while (i <= 20) {
        console.log(i);
        i++;
    }
};

// Using do...while loop
const printDoWhile = () => {
    console.log("Output using do...while loop::");
    let i = 1;
    do {
        console.log(i);
        i++;
    } while (i <= 20);
};

// Calling all loop functions- for , while , do while

console.log("Displaying numbers from 1 to 20 using different loops::");

printFor();
printWhile();
printDoWhile();