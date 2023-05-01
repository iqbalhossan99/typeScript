
// alias

// If we have use same types for multiple time then we can declare it as global then use multiple time. it called type alias  

type crushType ={ 
    name: string,
    age?: number,
    profession: string,
    address: string
}

const crush1: crushType =  {
     name: "Moina Pakhi",
     age: 23,
     profession:"Student",
     address:"Uganda"
}

const crush2:crushType = {
    name: "Tiya Pakhi",
    profession:"Student",
    address:"Uganda"
}


type CrushMarriedType = boolean;

const isCrushMarried: CrushMarriedType = false;

type CrushNameType = string;

const crushName: CrushNameType = "jan Pakhi";

type OperationType = (x: number, y:number) => number;

const calculate = (num1: number,num2:number, operation: OperationType) =>{
    
    console.log( operation(num1, num2));
}

calculate(10, 20, (x,y) => x + y);
calculate(10, 20, (x,y) => x * y);
calculate(10, 20, (x,y) => x / y);
calculate(10, 20, (x,y) => x - y);