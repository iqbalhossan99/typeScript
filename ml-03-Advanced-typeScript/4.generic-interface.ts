// Generic Interface
// If we optional property then set a default value. Or it give error
interface ICrush<T, U = null>{
    name: string,
    husband: T,
    wife?: U
}

const crush: ICrush<true> = {
    name: "Kate Winslet",
    husband: true
}

const crush1: ICrush<string> = {
    name: "Kate Winslet",
    husband: "Mezba"
}

interface IHusband {
    name:string, 
    age: number
}

interface IWife {
    name:string, 
    age: number
}

// common interface for husband and wife
interface IPersion {
    name:string, 
    age: number
}


const crush2: ICrush<IHusband> = {
    name: "Kate Winslet",
    husband: {
        name:"Mezba",
        age: 24
    }
}

const crush3: ICrush<IHusband, IWife> = {
    name: "Kate Winslet",
    husband: {
        name:"Jan Pakhi",
        age: 24
    },
    wife:{
        name:"Mezba",
        age: 20
    }
}


const crush4: ICrush<IPersion, IPersion> = {
    name: "Kate Winslet",
    husband: {
        name:"Jan Pakhi",
        age: 24
    },
    wife:{
        name:"Mezba",
        age: 20
    }
}