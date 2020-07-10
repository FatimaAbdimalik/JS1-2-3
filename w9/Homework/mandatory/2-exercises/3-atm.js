/*

 Create a simple ATM machine.

 Your ATM should allow you to:
 - Deposit money
 - Withdraw money
 - Check your balance.

 You should start with a balance of 100.0 pounds in your account.

 */

class ATM {
  // Add your code here
  constructor() {
    this.balance = 100;
  }
  makeDeposite(amount) {
    this.balance += amount;
  }
  checkBalance() {
    console.log(this.balance);
  }

  withdrawMoney(amount) {
    this.balance < amount
      ? console.log("You don't have enough credit in your balance.")
      : (this.balance -= amount);
  }
}

let atm = new ATM(); // Create the ATM

atm.makeDeposite(300);
atm.checkBalance();
atm.withdrawMoney(100);

atm.withdrawMoney(500); // Your ATM should be able to handle this scenario
