// 1. Give an example of using a callback function to handle an asynchronous operation in JavaScript (Use any open api to make a call)

function fetchData(url, callback) {
  console.log(`Fetching the data from: ${url}...`);

  // Simulate network delay using setTimeout
  setTimeout(() => {
    const data = {
      message: `Data successfully retrieved from ${url}`,
      timestamp: new Date()
    };
    callback(data);       // Call the provided callback function with the fetched data
  }, 5000);               // Simulate a 5000-second delay
}
// Callback function to handle the fetched data
function processData(data) {
  console.log("Data received:");
  console.log(data);
  console.log("Processing complete.");
}
fetchData("https://api.example.com/data", processData);     // Make the API call and pass the callback function
console.log("Request sent. Waiting for data...");