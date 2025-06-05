// Write a program to remove duplicate characters from a string ("Hello Yellow" => "Helo Yw")


function removeDuplicatesStr(inputString) 
{

    const uniqueChars = new Set(); // Create a Set to store unique characters

    for (const char of inputString) // Iterate through each character in the input string
    {
        uniqueChars.add(char); // Add character to the Set (duplicates are ignored)
    }

    // Convert the Set back to a string

    return Array.from(uniqueChars).join('');

}console.log("The final string is ::", removeDuplicatesStr("Hello Yellow"));  // Output: "Helo Yw"