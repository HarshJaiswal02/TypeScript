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
// ! Odd behaviour?
function myFunction(_a) {
    var name = _a.name, age = _a.age;
    return {
        data: name,
        thing: age,
    };
}
console.log(myFunction({ name: "Harsh", age: 21 }));
