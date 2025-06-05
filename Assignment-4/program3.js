//3. Write a program to give count of variables in a string ("abcabcdabbcc" => "a3b4c4d1") 

function countCharacters(str) 
{
    let charCount = {}; // Create an object to store character counts
    for (let char of str) 
    {
        if (charCount[char]) 
        {
            charCount[char]++; // Increment count if character already exists
        } 
        else 
        {
            charCount[char] = 1; // Initialize count if character is new
        }
    }
    // Convert the character count object to a string in the desired format
    return Object.entries(charCount).map(([char, count]) => `${char}${count}`).join('');        
}
console.log("The count of given variable (abcabcdabbcc) is :: ", countCharacters("abcabcdabbcc")); // Output: "a3b4c4d1"