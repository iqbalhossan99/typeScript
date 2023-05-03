

const createArray = (param: string): string[] =>
{
    return [param];
}

const createArray1 = <T>(param: T): T[] =>{
    return [param];
}

createArray("Bangladesh");
createArray1<boolean>(true);
createArray1<string>("Mirpur");
const result3 = createArray1<{name:string, age:number}>({name:"Iqbal", age: 24});

console.log(result3)

// truple
const createArray2 = <X, Y>(param1: X, param2: Y ): [X, Y] =>{
    return [param1, param2];
}


createArray2<string, boolean>("Arman", true);
createArray2<string, [string]>("Arman", ["true"]);
createArray2<{name:string, age:number}, string[]>({name:"Arman", age:25}, ["true"]);
createArray2<string, Array<string>>("Arman", ["true"]);


// Spread Operator
const crush5 = "kate Winslet";
const myInfo = {
    name:"Mezba",
    age:32,
    salary: 75
}

// if we don't use generic function here then we cann't access the spread property. Cause spread is work in compile time.
const addMeInMyCrushMind = (myInfo: object) =>{
    const crush5 = "kate Winslet";
    const newData = {...myInfo, crush5};
    return newData;
}

const addMeInMyCrushMind1 = <T>(myInfo: T) =>{
    const crush5 = "kate Winslet";
    const newData = {...myInfo, crush5};
    return newData;
}


const result4 = addMeInMyCrushMind(myInfo);
const result5 = addMeInMyCrushMind1(myInfo);

// test these to click ctr + "space" in result4 and result5
// result4.;
// result5. ;