"use strict";
// const User={
//     name:"Harsh",
//     age:21
// }
Object.defineProperty(exports, "__esModule", { value: true });
var User = {
  name: "Harsh",
  age: 21,
};
console.log(User);
var AnotherUser = {
  name: "Another",
  age: 11,
};
console.log(AnotherUser);
// ? Function accepts an object as parameter[destructured] and returns an object with type safety
function myFunction(_a) {
  var name = _a.name,
    age = _a.age;
  return {
    data: name,
    thing: age,
  };
}
// console.log(myFunction({ name: "Harsh", age: 21 }));
// ! Odd behaviour?
console.log(); //throws error squiggly lines shows as no email field in parameter of function definition
var usingRef = { name: "Harsh", age: 21, email: "harshjais05@gmail.com" };
console.log(myFunction(usingRef));
var user = {
  _id: "13wsqd2d11s2qx12",
  data: "MongodbData",
  isValid: false,
  salary: 50,
};
console.log(user);
user.salary = 100;
console.log(user);
