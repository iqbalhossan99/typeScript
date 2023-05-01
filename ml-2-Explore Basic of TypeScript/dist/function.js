"use strict";
//  Functions in Typescript
// normal function
function add(num1, num2) {
    return num1 + num2;
}
// arrow function
const addArrow = (num1, num2) => num1 + num2;
// map an array
const arr = [1, 2, 5, 7,];
const newArray = arr.map((elem) => elem * elem);
//function in an object
const persion = {
    name: "Arman",
    balance: 5,
    addBalance(money) {
        // return this.balance + money;
        // return `My Balance ${this.balance + money}`;
        console.log(this.balance + money);
    }
};
persion.addBalance(10);
