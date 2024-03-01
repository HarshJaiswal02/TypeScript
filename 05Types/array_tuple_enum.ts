// Arrays

let fruits: string[] = ["Oranges", "Mango", "Kiwi", "Apple"];

let prices: number[] = [20, 39, 69, 25];

let container = fruits.map((fruit, index) => `${index} ${fruit}`);
let totalContainer = prices
  .filter((price) => price >= 25)
  .reduce((acc, num) => acc + num);
console.log(container);
console.log(totalContainer);

// Dealing with an array of different type elements

let arrayDiff: (number | string)[] = [1, 3, "Harsh", "Jaiswal"];

// Tuples

let myTuples: [string, number, string] = ["firstString", 69, "lastString"];
console.log(myTuples);

// myTuples[1]="middleString"  //❌Invalid as 2nd place is fixed for number
myTuples[1] = 82; //✅Valid

// myTuples[3] = "value"   // Catch🎯
// myTuples.push(true) //❌only string or number operations allowed

// weird behave

myTuples.push("pushingString");
myTuples.shift();

console.log(myTuples);
myTuples[0] = "zero";
// since 1st or zero index is a number still
console.log(myTuples);
// all elements are string ... we by pass the number restriction
// 😵
export {};
