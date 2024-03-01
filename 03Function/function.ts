// function addFive(num){
//     return num + 5;
// }

// console.log(addFive(2));

function greeting(name: string): string {
  return `Good morning ${!!name!!}`;
}

let receivedGreeting = greeting("Harsh");
console.log(receivedGreeting);

let heros = ["Thor", "IronMan", "Hulk"];

let HerosList = heros.map((hero, index): string => `${index + 1}  is ${hero}`);

console.log(HerosList);

// !error!

// let arrayHavingDifferentTypes = [1, "Naming", true];

// let returning = arrayHavingDifferentTypes.map((value): string => value);

// Taste of class + arrow function
class Teacher {
  name: string;
  Id: number;
  course: string;
  salary: number;

  constructor(name: string, Id: number, course: string, salary: number) {
    this.name = name;
    this.Id = Id;
    this.course = course;
    this.salary = salary;
  }

  displayDetail = (): string => {
    return `Teacher name is ${this.name} and teaches ${this.course}.
  The teacher ID = ${this.Id} having salary ${this.salary}`;
  };
}

let detail = new Teacher("Anand Aggarwal", 420, "Digital Communication", 10000);
console.log(detail.displayDetail());
export {};
