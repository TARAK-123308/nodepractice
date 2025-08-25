class Account{
    constructor(AccountNumber,Name,Age,Balance){
        this.AccountNumber = AccountNumber;
        this.Name = Name;
        this.Age = Age;
        this.Balance = Balance;
    }
    checkBalance(){
        return this.Balance;
    }
    withDraw(Amount){
        if(this.Balance >= Amount){
            this.Balance = this.Balance - Amount;
            return this.Balance;
        }
        else{
            return "In Sufficient Balance";
        }
    }
    addBalance(addAmount){
        this.Balance += addAmount;
        return this.Balance;
    }

    details(){
        return `Account NUmber : ${this.AccountNumber} \nName : ${this.Name} \nAge : ${this.Age} \nBalance : ${this.Balance}`
    }
}
const prompt = require("prompt-sync")();

const m1 = new Account("9014548283", "Tarak Sri Chandrahas", 21, 10000);
console.log(m1.details());



while (true) {
    console.log("\n--- Banking Menu ---");
    console.log("1. View Balance");
    console.log("2. Add Amount");
    console.log("3. Withdraw Amount");
    console.log("4. View Account Details");
    console.log("5. Exit");

    const choice = prompt("Enter your choice: ");

    switch (choice) {
        case "1":
            console.log("Balance: " + m1.checkBalance());
            break;
        case "2":
            const addAmt = parseFloat(prompt("Enter amount to add: "));
            console.log(m1.addBalance(addAmt));
            break;
        case "3":
            const withdrawAmt = parseFloat(prompt("Enter amount to withdraw: "));
            console.log(m1.withDraw(withdrawAmt));
            break;
        case "4":
            console.log(m1.details());
            break;
        case "5":
            console.log("Thank you for using the ATM!");
            break;
        default:
            console.log("Invalid choice. Try again.");
    }
     if (choice === "5") {
        break; 
    }
}

