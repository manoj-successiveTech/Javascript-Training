// Q2. Install the lodash package using npm install lodash. and use any of its function

// Ans 
// Using flattenDeep we can Recursively flatten an array.

import lodash from 'lodash';

const inputArray = [1, [2, [3, [4]], 5]];

console.log(lodash.flattenDeep(inputArray));
