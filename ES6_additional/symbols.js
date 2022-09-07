const symbolOne = Symbol("first value");
const symbolTwo = Symbol("second value");

console.log(typeof symbolOne); //* symbol
console.log(symbolOne === symbolTwo); //* false

//* no two symbols are the same even using loose comparison - unique keys

const person = {};

person.name = "James";
person.age = 30;
person[symbolOne] = "is high";
person[symbolTwo] = "is low";

console.log(person);
