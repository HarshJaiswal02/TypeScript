// declaration is valid only with different type , same number of parameters  and same name
// https://www.tutorialsteacher.com/typescript/function-overloading
function add(a: string, b: string): string;

function add(a: number, b: number): number;

function add(a: number, b: string): number;

function add(a: string, b: number): number;

function add(a: any, b: any): any {
  return a + b;
}

console.log(add("hello ", "Harsh"));
console.log(add(10, "Name"));
console.log(add("Name", 20));
console.log(add(30, 20));
