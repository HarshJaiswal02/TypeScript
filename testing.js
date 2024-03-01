class Employee {
  empCode;
  empName;

  constructor(code, name) {
    this.empName = name;
    this.empCode = code;
  }

  display = () => console.log(`${this.empCode} is ${this.empName}`);
}
let emp = new Employee(1, "Ram");
emp.display();

// let sum = function (x, y) {
//   return x + y;
// };

// console.log(sum(2, 5));
// console.log(sum);

// function addNum(x) {
//   return x + 2;
// }
// console.log(addNum(4));
// console.log(addNum);

// const func = {
//   func: "named function!",
//   function () {
//     console.log(`This is a ${this.func}`);
//   }
// };

// func.test();
