// keyof guard

type alphaneumeric = string | number;

// keyof guard
function add(param1: alphaneumeric, param2: alphaneumeric): alphaneumeric {
  if (typeof param1 == "number" && param2 == "number") {
    return param1 + param2;
  } else {
    return param1.toString() + param2.toString();
  }
}

console.log(add(1, 1));
console.log(add("1", "3"));

// in guard

interface INormalUserType {
  name: string;
}

interface IAdminUserType extends INormalUserType {
  role: "admin";
}

function getUser(user: INormalUserType | IAdminUserType): string {
  if ("role" in user) {
    return `I am an admin and my is ${user.role}`;
  } else {
    return ` I am a normal user`;
  }
}

const normalUser1: INormalUserType = { name: "Mr. kallu" };
const adminUser1: IAdminUserType = { name: "Mr. kallu", role: "admin" };

console.log(getUser(normalUser1));
console.log(getUser(adminUser1));

//instaceof guard

class Animal {
  name: string;
  species: string;
  constructor(name: string, species: string) {
    this.name = name;
    this.species = species;
  }

  makeSound() {
    console.log("I am making sound");
  }
}

class Dog extends Animal {
  constructor(name: string, species: string) {
    super(name, species);
  }
  makeBark() {
    console.log(" I am barking");
  }
}
class Cat extends Animal {
  constructor(name: string, species: string) {
    super(name, species);
  }
  makeMeaw() {
    console.log("I am Meawing");
  }
}

function isDog(animal: Animal): animal is Dog {
  return animal instanceof Dog;
}

function isCat(animal: Animal): animal is Cat {
  return animal instanceof Cat;
}

function getAnimal(animal: Animal) {
  if (isDog(animal)) { // animal instanceof Dog
    animal.makeBark();
  } else if (isCat(animal)) { // animal instanceof Cat
    animal.makeMeaw();
  } else {
    animal.makeSound();
  }
}

const animal1 = new Dog("German Bhai", "dog"); // instance -> Dog
const animal2 = new Cat("Persian Bhai", "cat"); // inatance -> Cat

getAnimal(animal2);
