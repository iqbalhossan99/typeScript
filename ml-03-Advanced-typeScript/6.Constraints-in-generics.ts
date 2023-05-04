const addMeInMyCrushMind2 = (myInfo: object) =>{
    const crush5 = "kate Winslet";
    const newData = {...myInfo, crush5};
    return newData;
}


// If wanna set some mendetory types in generic type. then we can use like bellow. amora dynamic type pathabo but jodi amader ag theke specipic kono type rakhar dorkar hoy tahole amora seta k declare kore extends kore use korte pari

interface IMendetory {
    name: string; 
    age: number; 
    salary: number;
}

const addMeInMyCrushMind3 = <T extends IMendetory>(myInfo: T) =>{
    const crush5 = "kate Winslet";
    const newData = {...myInfo, crush5};
    return newData;
}


interface IMyInfo{
    name: string;
    age: number;
    salary: number;
    other1: boolean;
    other2: null
}

const myInfo1: IMyInfo = {
    name:"Mezba",
    age:32,
    salary: 75,
    other1: false,
    other2: null
}

const result6 = addMeInMyCrushMind2(myInfo);
const result7 = addMeInMyCrushMind3(myInfo);

result7.