type NoobDev = {
    name: string;
}

// type JuniorDev = {
//     name: string;
//     expertise: string;
//     experience: number;
// }


// 'NoobDev &' it called intersection type
type JuniorDev = NoobDev & {
    expertise: string;
    experience: number;
}

// Enum
enum Level {
    Junior = "junior",
    mid = "mid",
    senior = "senior"
}
// type NextLevelDev = JuniorDev & {
//     leaderShipExperience: number;
//     level: "Junior" | "Mid" | "Senior";
// }

type NextLevelDev = JuniorDev & {
    leaderShipExperience: number;
    level: Level;
}

// NoobDev | JuniorDev, It called union type. NoobDev or JuniorDev
const newDev: NoobDev | JuniorDev =
{
    name: "Iqbal",
    expertise: "React",
    experience: 1 
}

const developer: NextLevelDev = {
    name:"Nobel",
    expertise: "typeScript",
    experience: 2,
    leaderShipExperience: 1,
    level: Level.mid
}