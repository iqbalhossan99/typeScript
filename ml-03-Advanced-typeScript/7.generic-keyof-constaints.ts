interface IPersion {
    name: string;
    age: number;
    address: string
}

type newType = "name" | "age" | "address";

type newTypeUsingKeyOf = keyof IPersion;

// const a: newType = "age";
// const b: newTypeUsingKeyOf = "hh";

// Y = 'name' | 'age';
function getProperty<X,Y extends keyof X>(obj: X, key: Y)
{
    obj[key]; //100
}

const property = getProperty({name:"Mr.X", age:100}, "age");

// ({name:"Mr.X", age:100}, "age") // 100
// cosnt a = name:"Mr.X", age:100};