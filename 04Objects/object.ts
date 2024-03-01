// const User={
//     name:"Harsh",
//     age:21
// }

// const User: { name: string; age: number } = {
//   name: "Harsh",
//   age: 21,
// };

// console.log(User);

// const AnotherUser:{ name: string; age: number } = {
//     name: "Another",
//     age: 11,
// }

type objecting = {
  name: string;
  age: number;
};

const User: objecting = {
  name: "Harsh",
  age: 21,
};

console.log(User);

const AnotherUser: objecting = {
  name: "Another",
  age: 11,
};

console.log(AnotherUser);

// ? Function accepts an object as parameter[destructured] and returns an object with type safety
function myFunction({ name, age }): { data: string; thing: number } {
  return {
    data: name,
    thing: age,
  };
}

console.log(myFunction({ name: "Harsh", age: 21 }));

// ! Odd behaviour?
export {};
