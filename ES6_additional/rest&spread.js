//? rest parameter
const mulFunc = (...nums) => {
  return nums.map((num) => num * 2);
};

const result = mulFunc(2, 3, 4, 6, 8, 10);
console.log(result); //* [4, 6, 8, 12, 16, 20]

//? spread syntax (arrays)
const names = ["Ruby", "Claire", "James", "Mark"];
const people = ["Cameron", "Connor", ...names];

console.log(people); //* ['Cameron', 'Connor', 'Ruby', 'Claire', 'James', 'Mark']

//? spread syntax (objects)
const user = {
  name: "Mark",
  age: 25,
  id: 2233323,
};
const userClone = { ...user, occupation: "Web Dev" };

console.log(userClone); //* {name: 'Mark', age: 25, id: 2233323, occupation: 'Web Dev'}
