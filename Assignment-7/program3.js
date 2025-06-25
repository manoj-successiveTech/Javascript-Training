// 3. Convert a callback-based API to a Promise-based API (function fetchData(callback) { setTimeout(() => { callback(null, "Data fetched successfully"); }, 1000); })

function fetchData() 
{
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Assuming the callback is always successful
      resolve("Data fetched successfully");
    }, 1000);
  });
}

// Usage of the Promise-based API
fetchData()
  .then(data => {
    console.log(data); // "Data fetched successfully"
  })
  .catch(error => {
    console.error(error);
  });