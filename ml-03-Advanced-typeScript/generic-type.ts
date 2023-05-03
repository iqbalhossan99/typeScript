
// Normal Type 

// const RollNumbers2: Array<number> = [1, 2, 3,];
// const RollNumbers3: Array<string> = ["1", "2", "3",];
// const RollNumbers4: Array<boolean> = [true, false,];


// Generic (Dynamic) Type
type GenericArray<T> = Array<T>;

const RollNumbers2: GenericArray<number> = [1, 2, 3,];
const RollNumbers3: GenericArray<string> = ["1", "2", "3",];
const RollNumbers4: GenericArray<boolean> = [true, false,];

type NameRollType = {name:string, roll:number};

const userNameAndRollNUmbers: GenericArray<NameRollType> = [{
    name:"Mr. y",
    roll:1
}]


type GenericTuple<x, y> = [x, y];

const relation: GenericTuple<string, string> = ["Iqbal", "Bangladesh"];

// We shouldn't use `object` like this. Cause object has multiple types property. So should declare the specific object types

//It's not preferable
const relationWithSalary: GenericTuple<object, string> = [
    {
        name: "Jan Pakhi",
        salary: 25000,
    },
    "Bit Softs"
]

// This is the proper way to use object type in a generic type. 

// type NameSalaryType = {name: string, salary: number};

interface NameSalaryType {
    name: string, 
    salary: number
};

const relationWithSalary1: GenericTuple<NameSalaryType, string> = [
    {
        name: "Jan Pakhi",
        salary: 25000,
    },
    "Bit Softs"
]