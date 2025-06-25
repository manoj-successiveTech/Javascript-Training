// 6. Implement a function that returns a resolved Promise after a specified delay using async/await.


// Function to return a resolved Promise after a specified delay
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Async function to use the delay function
async function delayedGreeting(delayTime) {
    console.log("Waiting for " + delayTime + " milliseconds...");
    await delay(delayTime);
    console.log("Hello, this message appeared after the delay!");
}

// Example usage
delayedGreeting(2000); // Call the async function with a delay of 2000 milliseconds (2 seconds)