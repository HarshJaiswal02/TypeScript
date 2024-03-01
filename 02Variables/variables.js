"use strict";
// Syntax
// let variable: type  =  value
Object.defineProperty(exports, "__esModule", { value: true });
var name = "Harsh ";
// const age: String = 20  this line throw error if we compile {tsc variable.ts}
console.log(name);
// TypeScript Types
// Number
var price = 30;
price.toFixed();
// price = "" throws error
//Boolean
var isLogin = true;
console.log(isLogin.valueOf());
// Void null undefined
var context = null;
console.log(context);
function sayMyName(myName) {
    console.log("Hii ".concat(myName)); //function does not return any value then you can specify void as return type.
}
sayMyName("Harsh");
var emptiness = sayMyName("Harsh");
console.log(emptiness); //Output : undefined
var unknown = undefined;
console.log(unknown);
