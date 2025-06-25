// Q7.
// for (var i = 0; i < 10; i++) {
//   setTimeout(function () {
//     console.log(i);
//   }, 1000);
// }

// Ans.
/* In above code var is functional scoped, So when in for-loop we are declaring i with var type, 
then it will print 10 for 10 times. Instead we can use let for declaring i, since variable declared with let are
block scoped */

// Modified Code
for (let i = 0; i < 10; i++) {
  setTimeout(function () {
    console.log(i);
  }, 1000);
}