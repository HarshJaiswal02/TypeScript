"use strict";
// class _User {
//   name: string;
//   age: number;
//   readonly city: string;
//   constructor(name: string, age: number, city: string) {
//     this.name = name;
//     this.age = age;
//     this.city = city;
//   }
// }
Object.defineProperty(exports, "__esModule", { value: true });
// RELIEF FROM this.name = name
var _User = /** @class */ (function () {
    function _User(name, age, city) {
        this.name = name;
        this.age = age;
    }
    return _User;
}());
var user = new _User("Harsh", 2, "Kota");
// user.city = ""; ❌ Property 'city' does not exist on type '_User'. can access
console.log(user);
console.log(user.name);
