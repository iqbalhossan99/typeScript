
// use type alias for primitive type and we cann't use interface for primitive type cause primitive type is build in type in typeScript. It Should use interface for object. If we want we can use type alias for object as well. but interface is Preferable for interface.
// Interface extend usint `extends` key work and type alias extend useing intersection `&`


type UserType = {
    name: string;
    age: number;
}

type ExtendedUser = UserType & {
    role: string;
}

interface IUser  {
    name: string;
    age: number;
}

interface IExtendUser extends IUser {
    role: string;
}

// Use Extended type alias
const user:ExtendedUser = {
    name: "Iqbal",
    age: 24,
    role: "Software Engineer"
}

// Use Extended interface 
const user1: IExtendUser = {
    name: "Arman",
    age: 25,
    role: "QA Engineer"
}


// primitive type, we cann't use interface for primitive type 
// Object, Funciton, Array
type RollNumber = number;

// we can use both type alias and interface for function but type alias is more redable. So we try to use type alias.
type AddNumbersType = (num1: number, num2:number) => number

interface IAddNumbersType {
    (num1: number, num2: number): number
}
const addNumbers:AddNumbersType = (num1, num2) => num1 + num2;
const addNumbers2:IAddNumbersType = (num1, num2) => num1 + num2;

// Array, 
// we can use both type alias and interface for array. But we need to check idex as well in interface. So type alias is more redable & easy. So we try to use type alias.
type RollNumbersType = number[];

interface IRollNumbers {
    [index: number] : number
}

const RollNumbers:RollNumbersType = [1, 2, 3, 4, 5];

const RollNumbers1:IRollNumbers = [1, 2, 3, 4, 5];