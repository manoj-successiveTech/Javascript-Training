// 5. Write a program to convert given string in camel case ("hello john doe" => helloJohnDoe)
function toCamelCase(str) {
    return str
        .split(' ') // Split the string into words
        .map((word, index) => {
            if (index === 0) {
                return word.toLowerCase(); // First word in lowercase
            }
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase(); // Capitalize first letter of subsequent words
        })
        .join(''); // Join the words back together
        
}console.log("The camel case string is ::", toCamelCase("hello john doe")); // Output: "helloJohnDoe"
