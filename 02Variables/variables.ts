// Syntax
// let variable: type  =  value

let name: string = "Harsh ";

// const age: String = 20  this line throw error if we compile {tsc variable.ts}

console.log(name);

export {};

// TypeScript Types

// Number

let price: number = 30;
price.toFixed();
// price = "" throws error

//Boolean
let isLogin: boolean = true;

console.log(isLogin.valueOf());

// Void null undefined
let context: null = null;
console.log(context);

function sayMyName(myName: string): void {
  console.log(`Hii ${myName}`); //function does not return any value then you can specify void as return type.
}
let emptiness: void = sayMyName("Harsh");
console.log(emptiness); //Output : undefined

//https://www.tutorialsteacher.com/typescript/typescript-void

let unknown: undefined = undefined;
console.log(unknown);
