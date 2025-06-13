// 1. Create a class BankAccount with properties balance and owner and methods deposit(), withdraw(), and displayBalance(). 

// input using prompt and output using alert
class BankAccount {
  constructor(balance, owner) {
    this.balance = balance; // Initialize the balance
    this.owner = owner; // Initialize the owner
  }
  // Method to deposit amount into the account
  deposit(amount) {
    this.balance = this.balance + amount; // Add the deposit amount to the balance
  }
  // Method to withdraw amount from the account
  withdraw(amount) {
    this.balance = this.balance - amount; // Subtract the withdrawal amount from the balance
  }
  // Method to display the balance and owner details
  displayBalance() {
    // Correct use of template literals with backticks
    const message = `Account Owner: ${this.owner}\nCurrent Balance: ${this.balance}`;
    alert(message);
  }
}

// Get user input using prompt()
const initialBalance = parseFloat(prompt("Enter initial account balance:"));
const ownerName = prompt("Enter account owner name:");
const depositAmount = parseFloat(prompt("Enter amount to deposit:"));
const withdrawAmount = parseFloat(prompt("Enter amount to withdraw:"));

// Creating an instance of BankAccount with user input
const myAccountObject = new BankAccount(initialBalance, ownerName);

// Depositing money into the account
myAccountObject.deposit(depositAmount);

// Withdrawing money from the account
myAccountObject.withdraw(withdrawAmount);

// Displaying the updated balance and account owner
myAccountObject.displayBalance();