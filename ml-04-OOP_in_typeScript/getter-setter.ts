class BankAccount {
  public readonly id: number;
  public name: string;
  private _balance: number;

  constructor(id: number, name: string, balance: number) {
    this.id = id;
    this.name = name;
    this._balance = balance;
  }

  private getTestBalance(): number {
    return this._balance
  }

  // getter
  get test(): number{
    return this.getTestBalance();
  }

  get balance():number{
    return this._balance;
  }

  // setter
  set deposit(amount: number){
    this._balance = this._balance + amount;
  }
}


const myAccount = new BankAccount(550, "Iqbal", 30);
// myAccount.addDeposit(20);
// myAccount.getBalance();
// myAccount.getBalance();
console.log(myAccount.balance);
myAccount.deposit = 50;

console.log(myAccount.balance);