class BankAccount {
    constructor(initialBalance) {
        this.balanse = initialBalance;
    }

    getBalance() {
        return this.balanse;
    }

    deposit(sum) {
        if (sum > 0) {
            this.balanse += sum;
        } else {
            console.log('Не можлива сума для зняття!')
        }
    }

    withdraw(sum) {
        if (sum > this.balanse) {
            console.log('Недостатньо коштів!');
        } else if (sum > 0) {
            this.balanse -= sum;
        } else {
            console.log('Не можлива сума для зняття!')
        }
    }
}

const account1 = new BankAccount(1000);

console.log(account1.getBalance());

account1.deposit(500);

console.log(account1.getBalance());

account1.withdraw(200);

console.log(account1.getBalance());


