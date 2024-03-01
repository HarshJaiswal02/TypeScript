"use strict";
// Arrays
Object.defineProperty(exports, "__esModule", { value: true });
var fruits = ["Oranges", "Mango", "Kiwi", "Apple"];
var prices = [20, 39, 69, 25];
var container = fruits.map(function (fruit, index) { return "".concat(index, " ").concat(fruit); });
var totalContainer = prices
    .filter(function (price) { return price >= 25; })
    .reduce(function (acc, num) { return acc + num; });
console.log(container);
console.log(totalContainer);
// Tuples
var myTuples = ["firstString", 69, "lastString"];
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
