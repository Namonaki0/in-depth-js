//? PROTOTYPE

// const output = document.getElementById("output");

// function User(name, email, id) {
//   this.name = name;
//   this.email = email;
//   this.id = id;
//   this.clockedIn = false;
// }

// User.prototype.clockIn = function () {
//   this.clockedIn = true;
//   return this;
// };

// function Admin(...args) {
//   User.apply(this, args);
// }

// Admin.prototype = Object.create(User.prototype);

// User.prototype.displayDetails = function () {
//   output.innerHTML += `${this.clockedIn ? "CLOCKED IN" : "CLOCKED OUT"} - ${
//     this.name
//   } with email ${this.email} is logged in with ID: ${this.id} <br /> `;
// };

// const userOne = new User("Steve", "steve@mail.com", 3323123);
// const userTwo = new User("Mike", "mike@mail.com", 3323114);
// const userThree = new User("David", "david@mail.com", 3323167);

// const mainAdmin = new Admin("Craig", "craig@mail.com", 9999999);

// userOne.clockIn().displayDetails();

// mainAdmin.clockIn().displayDetails();

// #######################################

//? ES6 CLASSES

const output = document.getElementById("output");

class User {
  constructor(name, email, id) {
    this.name = name;
    this.email = email;
    this.id = id;
    this.clockedIn = false;
  }
  clockIn() {
    this.clockedIn = true;
    output.innerHTML += `${this.clockedIn ? "CLOCKED IN" : "CLOCKED OUT"} ${
      this.name
    } is signed in with email ${this.email} and ID: ${this.id} <br />`;
    return this;
  }
}

class Admin extends User {
  clockOut() {
    this.clockedIn = false;
    output.innerHTML = `${this.name} clocked everyone out`;
    return this;
  }
  deleteUser(user1, user2) {
    usersArrayDuplicate = usersArrayDuplicate.filter(
      (u) => u.id !== user1.id && u.id !== user2.id
    );
  }
}

const userOne = new User("Steve", "steve@mail.com", "#3323123$");
const userTwo = new User("Mike", "mike@mail.com", "#3323114");
const userThree = new User("David", "david@mail.com", "33231$67");

const mainAdmin = new Admin("Craig", "craig@mail.com", "$9999#999");

let usersArray = [userOne, userTwo, userThree, mainAdmin];
let usersArrayDuplicate = [...usersArray];

const userNamesArray = [];

userNamesArray.push(userOne, userTwo, userThree, mainAdmin);

console.log(userNamesArray);

// #######################
//? CONTROL FLOW - IF STATEMENT

usersArray.filter((user) => {
  if (user.id.includes("#") && user.id.includes("$")) {
    console.log(`${user.name}: ${user.id} - STRONG ID`);
  }
});

//? CONTROL FLOW - WHILE LOOP
let i = 0;
let counter = 1;

while (i < userNamesArray.length) {
  console.log(`Staff member number ${counter++}: ${userNamesArray[i].name}`);
  i++;
}
// #######################

//? MAIN ADMIN IS ABLE TO DELETE USERS
mainAdmin.deleteUser(userOne, userTwo);

userOne.clockIn();
userTwo.clockIn();
mainAdmin.clockIn();

// #######################
const { name, email, id } = mainAdmin;

console.log(usersArrayDuplicate);
// #######################

console.log(`ADMIN: ${name} | EMAIL: ${email} | ID: ${id}`);

// #######################
//? LOCAL STORAGE

const promptArray = [];

const addNameFunc = () => {
  const promptData = prompt("enter name");

  promptArray.push(promptData);
  console.log(promptArray);
  localStorage.setItem("name", JSON.stringify(promptArray));
};

// #######################

//? CALLBACK FUNCTION - premise
//? arrow functions - ES6

const logIt = (myFunc) => {
  let value = 10;
  myFunc(value);
};

logIt((value) => console.log(value));
