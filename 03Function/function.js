"use strict";
// function addFive(num){
//     return num + 5;
// }
Object.defineProperty(exports, "__esModule", { value: true });
// console.log(addFive(2));
function greeting(name) {
    return "Good morning ".concat(!!name);
}
var receivedGreeting = greeting("Harsh");
console.log(receivedGreeting);
var heros = ["Thor", "IronMan", "Hulk"];
var HerosList = heros.map(function (hero, index) { return "".concat(index + 1, "  is ").concat(hero); });
console.log(HerosList);
// !error!
// let arrayHavingDifferentTypes = [1, "Naming", true];
// let returning = arrayHavingDifferentTypes.map((value): string => value);
var Employee = /** @class */ (function () {
    function Employee(code, name) {
        var _this = this;
        this.display = function () { return console.log("".concat(_this.empCode, " ").concat(_this.empName)); };
        this.empName = name;
        this.empCode = code;
    }
    return Employee;
}());
var emp = new Employee(1, "Ram");
emp.display();
var Teacher = /** @class */ (function () {
    function Teacher(name, Id, course, salary) {
        this.name = name;
        this.Id = Id;
        this.course = course;
        this.salary = salary;
    }
    return Teacher;
}());
{
    console.log("Teacher name is ".concat(this.name, " and teaches ").concat(this.course, ".\n    The teacher ID = ").concat(this.Id, " having salary ").concat(this.salary));
}
;
var detail = new Teacher("Anand Aggarwal", 420, "Digital Communication", 10000);
console.log(detail.displayDetail());
