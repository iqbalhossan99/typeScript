// Object, Literal Types and Optional types

const arman: {
    // company: "Programming Hero"; // it called literal type. You explicity create a type and default value. If assign different value in this field then got error.
    readonly company: string; // you can use this as literal
    name: string;
    age: number;
    isMarried: boolean;
    wife?: string; // optional type, it have or haven't
} = {
    company: "Programming Hero",
    name: "Arman",
    age:25,
    isMarried: true,
    wife: "chatgaiya beyain"
}

// arman.company = "Phitron"; // you can't change the value cause it's read only, not for write