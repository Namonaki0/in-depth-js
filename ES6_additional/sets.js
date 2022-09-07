//? sets
const usernames = ["Mike", "James", "Claire", "Mike", "Gordon"];
console.log(usernames); //* ['Mike', 'James', 'Claire', 'Mike', 'Gordon']

const uniqueUsernames = new Set(usernames);
console.log(uniqueUsernames); //* {'Mike', 'James', 'Claire', 'Gordon'}

const uniqueUsernamesToArray = [...uniqueUsernames];
console.log(uniqueUsernamesToArray); //* ['Mike', 'James', 'Claire', 'Gordon']

//? sets shorthand
const usernamesShorthand = [...new Set(usernames)];
console.log(usernamesShorthand); //* ['Mike', 'James', 'Claire', 'Gordon']

//? methods
const ages = new Set();
ages.add(10);
console.log(ages); //* {10}
ages.add(20).add(30);
console.log(ages); //* {10, 20, 30}
ages.add(10);
console.log(ages); //* {10, 20, 30} -> only unique values are added
ages.delete(20);
console.log(ages); //* {10, 30}
console.log(ages.size); //* 2

console.log(ages.has(10), ages.has(20)); //* true false

ages.clear();
console.log(ages); //* {size: 0}

// #############################

const employees = new Set([
  { name: "Mark", age: 20 },
  { name: "Joseph", age: 32 },
  { name: "Eric", age: 40 },
  { name: "Constance", age: 29 },
]);

employees.forEach((employee) => {
  console.log(employee.name, employee.age);
});

//* Mark 20
//* Joseph 32
//* Eric 40
//* Constance 29
