
// Q11. var promise = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     resolve("Data received");
//   }, 1000);
// });
// promise.then(
//   function (data) {
//     console.log(data);
//   },
//   function (error) {
//     console.log(error);
//   }
// );

// Ans.
/* Above code should handle errors using a catch block, so we can add a catch block in order to handle the errors properly.
 Also we can do this question using arrow function. */

// Modified Code

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Data received");
  }, 1000);
});
promise
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });
