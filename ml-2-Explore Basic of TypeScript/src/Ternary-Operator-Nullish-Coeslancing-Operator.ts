
// ternary operator
const age: number = 15;

const isAlutd = age >= 18 ? "Yes" : "No";

console.log(isAlutd)

// Nullish Coeslancing Operator
// Null and Undefined

const isAuthenticateduser = "";

const userName = isAuthenticateduser ?? 'Guest';
const userName2 = isAuthenticateduser ? isAuthenticateduser : 'Guest';
 
console.log({userName}, {userName2});

type Mnaush = {
    name: string;
    age: number;
    address:{
        city:"No City";
        road: "No Road";
        home?: "";
    }
}

const manush1:Mnaush = {
    name:"Manush",
    age: 100,
    address:{
        city: "No City",
        road: "No Road",
    }
}


const home = manush1?.address?.home ?? "No Home";

console.log({home})


function generateAdder(a: number): (b: number) => number {

    return function(b: number) {
  
      return a + b;
  
    };
  
  }
  
  
  
  const addTwo = generateAdder(2);
  
  console.log(addTwo(3));
  
  console.log(addTwo(5));