//  Functions in Typescript

// normal function

function add(num1: number, num2:number): number { // return value type
    return num1 + num2;
}


// arrow function
const addArrow = (num1: number, num2:number): number => num1 + num2;


// map an array
const arr = [1, 2, 5, 7,];

const newArray = arr.map( (elem: number) => elem * elem);

//function in an object
const persion:{
    name: string,
    balance: number,
    // addBalance(money: number):number
    // addBalance(money: number):string
    addBalance(money: number):void
} = {
    name: "Arman",
    balance: 5,
    addBalance(money: number) {
        // return this.balance + money;
        // return `My Balance ${this.balance + money}`;
        console.log(this.balance + money)
    }

}

persion.addBalance(10);