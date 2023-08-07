class BankAccount {
  public readonly id: number;
  public name: string;
  protected _balance: number; // if use protected then you can just access (cann't modify) the method/variable outsite of the main class

  constructor(id: number, name: string, balance: number) {
    this.id = id;
    this.name = name;
    this._balance = balance;
  }

  getBalance() {
    console.log(`My current balance is: ${this._balance}`);
  }
  addDeposit(amount: number) {
    this._balance = this._balance + amount;
  }
}

const myAccount = new BankAccount(550, "Iqbal", 20);
myAccount.addDeposit(50);
myAccount.getBalance();

class StudentAccount extends BankAccount {
  test() {
    this.
  }
}
