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

// let user = new _User("Harsh", 2, "Kota");
// console.log(user.city);  // not defined default public

//? RELIEF FROM this.name = name + access modifiers
class _User {
  constructor(public name: string, private age: number, city: string) {}
}

let user = new _User("Harsh", 2, "Kota");
// user.city = ""; ❌ Property 'city' does not exist on type '_User'. can access
console.log(user);

console.log(user.name);
// console.log(user.age);  //❌ private cant access
// console.log(user.city); //❌not defined allocates as private?

//protected => access within a class or class that inherits otherwise can't access

// Getter and Setter functions



export {};
