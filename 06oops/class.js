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
// let user = new _User("Harsh", 2, "Kota");
// console.log(user.city);  // not defined default public
//? RELIEF FROM this.name = name + access modifiers
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
// console.log(user.age);  //❌ private cant access
// console.log(user.city); //❌not defined allocates as private?
//protected => access within a class or class that inherits otherwise can't access
// Getter and Setter functions
var Teachers = /** @class */ (function () {
    // _course: string;
    // _courseId: number;  //After commenting and adding public or private in
    function Teachers(_course, _courseId) {
        this._course = _course;
        this._courseId = _courseId;
    }
    Object.defineProperty(Teachers.prototype, "course", {
        get: function () {
            return "Course:".concat(this._course);
        },
        set: function (value) {
            this._course = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Teachers.prototype, "Id", {
        get: function () {
            return this._courseId;
        },
        set: function (value) {
            this._courseId = value;
        },
        enumerable: false,
        configurable: true
    });
    return Teachers;
}());
var subject = new Teachers("DBMS", 304);
console.log(subject);
console.log(subject.course);
console.log(subject.Id);
