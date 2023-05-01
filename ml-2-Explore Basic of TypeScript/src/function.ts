//  Functions in Typescript

// normal function
// default value

function add(num1: number, num2:number = 10): void { // return value type
    console.log( num1 + num2);
}

add(10);

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


// spread operator

const myFriend = ["Arman", "Mizan", "Nobab"];
const newFried = ["Rafti", "Nobel"];

myFriend.push(...newFried);

console.log(myFriend);

// rest operator

const greetFriends = (...friends: string[]): void => friends.forEach((fd) => console.log(`Hi ${fd}`))

greetFriends("Nati", "puti", "khunti", "bangla vai");

// array and object dectructure

const myBestFriend = {
    fullName: "Ramzan Uddin",
    age: 24
}

const {fullName: string} = myBestFriend; // We cann't set type here. If we write here something like string then it work as a alter name of fullName

console.log({string});
