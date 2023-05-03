// type assertion

let course: any;

course = "Next level development";

console.log((course as string).length);

// if doesn't match the condition, then it will take undefined
function kgToGram(param: string | number): string | number | undefined{
    if(typeof param === "string")
    {
        const value = parseFloat(param) * 1000;
        return `The Converted result is: ${value} gram`;
    }
    if(typeof param === "number")
        return param * 1000;
}

const resultToBeNumber = kgToGram(10) as number;
const resultToBeString = <string> kgToGram("10"); // We can use like <string> as well

type CustomErrorType={
    message: string
}

try{

}catch(err){
    console.log((err as CustomErrorType).message) 
}