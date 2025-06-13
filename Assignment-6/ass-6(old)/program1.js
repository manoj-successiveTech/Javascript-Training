// 1. Create a class BankAccount with properties balance and owner and methods deposit(), withdraw(), and displayBalance(). 

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
    console.log(`Account Owner: ${this.owner}`);
    console.log(`Current Balance: ${this.balance}`);
  }
}

// Creating an instance of BankAccount for a person named "Manoj"
const myAccountObject = new BankAccount(50000, "Manoj");

// Depositing money into the account
myAccountObject.deposit(30000);

// Displaying the updated balance and account owner
myAccountObject.displayBalance();
