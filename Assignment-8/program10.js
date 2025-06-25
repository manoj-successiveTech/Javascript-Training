// Q10. function getData(callback) {
//    setTimeout(function() { callback([1, 2, 3, 4, 5]); }, 1000);
// }
// getData(function(data) {
//    console.log(data.length);
// });

// Ans.
// Above code is working perfectly, but we can do this question using arrow function

// Modified Code
const getData = (callback) => {
  setTimeout(() => {
    callback([1, 2, 3, 4, 5]);
  }, 1000);
};
getData((data) => {
  console.log(data.length);
});