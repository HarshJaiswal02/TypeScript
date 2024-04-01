// <Type>( : Type) :Type

let names: Array<string>;
let scores: number[];

function one(val: string): string {
  return val;
}

function two(val: any): any {
  return val;
}

// Generic
function three<Type>(val: Type): Type {
  return val;
}

function four<T>(val: T): T {
  return val;
}

three("3");
three(3);

// const arrowFunctionSyntax = () => {}

const arrowFunctionSyntax = <T>(val: T): T => {
  return val;
};

//? When want to return T in T[] array ?
const getProductDetail = <T>(val: T[]): T => {
  // Doing some operation....
  let index = 3;
  return val[index];
};

interface Random {
  name: string;
  id: number;
}
// function five<Random>(val: Random): Random {
//   return {
//     name: val.name,
//     id: val.id,
//   };
// }
//!This giving error

// five({
//   name: "Harsh",
//   id: 2023,
// });
