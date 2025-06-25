// 7. Create a function that performs multiple asynchronous operations in parallel using async/await and waits for all of them to complete before returning the results.

// Function to simulate an asynchronous operation with a delay
function asyncOperation(message, delay) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(message);
        }, delay);
    });
}

// Async function to perform multiple asynchronous operations in parallel

async function performParallelOperations() 
{
    // Create an array of promises representing the asynchronous operations
    let promises = [
        asyncOperation("Operation 1 completed", 1000),
        asyncOperation("Operation 2 completed", 3000),
        asyncOperation("Operation 3 completed", 2000)
    ];
   
    const results = await Promise.all(promises); // Wait for all promises to resolve using Promise.all
    console.log("All operations completed:");    // Log the results
    results.forEach((result, index) => {
        console.log(`Result ${index + 1}: ${result}`);
    });
    // Return the results
    return results;
}
// Example usage
performParallelOperations().then(results => {
    console.log("Final results:", results);
});