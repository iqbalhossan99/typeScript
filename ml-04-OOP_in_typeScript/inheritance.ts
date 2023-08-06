class CommonClass {
  name: string;
  age: number;
  address: string;

  constructor(name: string, age: number, address: string) {
    this.name = name;
    this.age = age;
    this.address = address;
  }

  makeSleep(hours: number): string {
    return `This ${this.name} will sleep for ${hours}`;
  }
}

class Student extends CommonClass {
  constructor(name: string, age: number, address: string) {
    super(name, age, address);
  }
}

const student1 = new Student("iqbal", 24, "Noakhali");

console.log(student1.makeSleep(5));

class Teacher extends CommonClass {
  designation: string;

  constructor(name: string, age: number, address: string, designation: string) {
    super(name, age, address);
    this.designation = designation;
  }

  takeClass(numOfClass: number): string {
    return `This ${this.name} will take ${numOfClass}`;
  }
}


const newTeacher = new Teacher("Abir", 32, "Cumillah", "Lecturer");

console.log("New Teacher: ", newTeacher)
console.log("Take classes: ", newTeacher.takeClass(5))