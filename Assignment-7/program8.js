// 8. Create a function that fetches data from multiple APIs in parallel and then performs some operation on the combined data, using async/await.

// Define the URL for the API endpoint
let url = "https://jsonplaceholder.typicode.com/todos/1";

// Define a function to fetch data from the API
const func1 = (url) => {
    // The fetch function returns a Promise that resolves to the Response object
    let result = fetch(url)
        .then((response) => response.json()); // Parse the response body as JSON
    return result;                            // Return the Promise
};

// Define an async function to handle the main logic
let mainFunc = async () => {
    
    let [result1, result2] = await Promise.allSettled([func1(url), func1(url)]);
    console.log(result1.value.id);
    console.log(result2.value.id);
    let final = result1.value.id + result2.value.id;
    console.log(final);  // Log the combined result
};
// Call the main function to execute the logic
mainFunc();