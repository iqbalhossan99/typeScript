


// it's type is any, cause we declare undefined as a value not a type.
let course = undefined;
    course = "web";

    course = 45;

// it's type is undefined. it take it explisitly, cause const variable doesn't assigned multiple time. 
const course2 = undefined;



// array


const array: (string | number | boolean)[] = ["arman", 939494, true];

array[3] = 1;
array[4] = "Iqbal";
array[5] = false;

// tuples

const tuples:[number, string] = [50, "roni"];


    // it's wrong cz tuples(pair). It doesn't allow any value without declared stype in exect position
    // tuples[0] = "arman";
    // tuples[1] = 100;

    tuples[0] = 100;
    tuples[1] = "arman";