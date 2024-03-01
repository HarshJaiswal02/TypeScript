const User = {
  name: "harsh",
  age: 21,
  isMale: true,
  Married: undefined,
  nested: function () {
    this.greeting();
  },
  greeting: function () {
    console.log(this.name);
  },
};

// destructuring >>

// const { name: Name, age: Age, isMale: Gender, Married } = User;
User.abcd = function abcd () {
  console.log("insertingFunctionToObjectExternally");
};
User.abcd();
console.log(User);


// class Employee {
//   empCode;
//   empName;

//   constructor(code, name) {
//     this.empName = name;
//     this.empCode = code;
//   }

//   display = () => console.log(`${this.empCode} is ${this.empName}`);
// }
// let emp = new Employee(1, "Ram");
// emp.display();

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
