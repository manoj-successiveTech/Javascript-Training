// 2. Give an example of using multiple callback functions in a single function in JavaScript.


// Define the main function that takes a name and multiple callback functions
function processUser(name, callback1, callback2, callback3) {
   
    callback1(name);
    callback2(name);
    callback3(name);
}
// Define the first callback function
function greetUser(name) {
    console.log("Hello, " + name + "!");
}
// Define the second callback function
function welcomeUser(name) {
    console.log("Welcome to our website, " + name + "!");
}
// Define the third callback function
function farewellUser(name) {
    console.log("Goodbye, " + name + "!");
}
// Call the processUser function with a name and the three callback functions
processUser("Manoj", greetUser, welcomeUser, farewellUser);