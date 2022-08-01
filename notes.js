//? OOP

// object literals
// encapsulation
// method chaining
// prototype chain

// ----------------------------------------------------------

//? TERMINOLOGY

// hoisting - the way functions are placed at top of document (over-simplification).
// function declarations can be invoked before initialization as function are placed at the top but function expressions can't.

// global context -> window object (this keyword)

//* PRIMITIVE TYPES
// numbers, strings, booleans, null, undefined, symbols

//* REFERENCE TYPES
// all types of objects -> object literals, arrays, functions, dates and all other objects

//* STACK & HEAP -> the way these types are stored in memory
// primitive types are stored on the stack -> quicker execution but less memory
// reference types are stored on the heap -> more space available but slower execution -> things like arrays will have a pointer
// referencing the variable on the stack

//* DOM
// root node (html) -> element nodes -> text nodes
// quering the DOM -> referencing elements in the DOM

// can't use forEach() for HTMLCollection only NodeList -> both can use square bracket notation []
// nodeLists are returned by the querySelector method
// get element(s)by -> tagName and classList return HTMLCollections

// textContent shows all text in tag even if hidden (i.e: display: none) -> unlike innerText

// -----------------

// function declaration:

// function sayHello(*) {    * ----> parameters
//   console.log("hello")
// }

// sayHello(*);     * ----> arguments

// -----------------

// function expression:

// const sayHello = function (*) {    * ----> parameters
//   console.log("hello");
// };

// sayHello(*);     * ----> arguments

// ----------------------------------------------------------

//? SYNTACTIC SUGAR

class User {
  constructor(name, email, id) {
    this.name = name;
    this.email = email;
    this.id = id;
    this.clockIn = 0;
  }
  login() {
    console.log(`${this.name} just logged in with email ${this.email}`);
    return this;
  }
  logout() {
    console.log(`${this.name} just logged out with email ${this.email}`);
    return this;
  }
  clockInNumberInWeek() {
    this.clockIn++;
    console.log(
      `${this.name} clocked in ${
        this.clockIn < 2 ? `${this.clockIn} time` : `${this.clockIn} times`
      } this week with ID: ${this.id}`
    );
    return this;
  }
}

class Admin extends User {
  deleteUser(user) {
    users = users.filter((u) => u.id !== user.id);
  }
}

const userOne = new User("Mike", "mike@gmail.com", 1223123);
const userTwo = new User("Sophie", "sophie@gmail.com", 3443223);
const admin = new Admin("Admin", "admin@gmail.com", 9999999);

let users = [userOne, userTwo, admin];

// userTwo.clockInNumberInWeek().clockInNumberInWeek();

admin.deleteUser(userOne);

// ----------------------------------------------------------

//? PROTOTYPE

function Users(name, email, id) {
  this.name = name;
  this.email = email;
  this.id = id;
  this.loggedIn = false;
}

Users.prototype.login = function () {
  this.loggedIn = true;
  console.log(`${this.name} is logged in`);
};

Users.prototype.logout = function () {
  this.loggedIn = false;
  console.log(`${this.name} is logged out`);
};

//? inherits all functionality from User #
Admins.prototype = Object.create(Users.prototype);

//? binds the Admins to Users function and inherits arguments #
function Admins(...args) {
  Users.apply(this, args);
}

const user1 = new Users("Jenny", "jenny@gmail.com", 22232221);
const user2 = new Users("Steve", "steve@gmail.com", 99909990);

const admin1 = new Admins("Admin", "admin@email.com", 99999999); //? #

admin1.login();
admin1.logout();

// #######################################################

// function UserFunc(name, id) {
//   this.name = name;
//   this.id = id;
// }

// UserFunc.prototype.login = function () {
//   console.log(`${this.name} is now logged in`);
// };

// function MainAdmin(...args) {
//   UserFunc.apply(this, args);
//   this.deleteUser = function (user) {
//     mainUsers = mainUsers.filter((u) => u.id !== user.id);
//   };
// }

// MainAdmin.prototype = Object.create(UserFunc.prototype);

// const firstUser = new UserFunc("Mike", 122212);
// const secondUser = new UserFunc("Steve", 1222333);
// const firstAdmin = new MainAdmin("Kurt", 999999);

// let mainUsers = [firstUser, secondUser, firstAdmin];
// console.log(mainUsers);

// firstAdmin.deleteUser(firstAdmin);
// console.log(mainUsers);

// firstUser.login();

// -----------------------

const output = document.querySelector("#output");

class UserFunc {
  constructor(name, id) {
    this.name = name;
    this.id = id;
    this.loggedIn = false;
  }
  login() {
    this.loggedIn = true;
    console.log(`${this.name} is now logged in`);
    return this;
  }
  logout() {
    this.loggedIn = false;
    console.log(`${this.name} is now logged out`);
    return this;
  }
  screenMessage() {
    output.innerHTML = this.loggedIn ? "LOGGED IN" : "LOGGED OUT";
    return this;
  }
}

class MainAdmin extends UserFunc {
  deleteUser(user) {
    usersArrDup = usersArrDup.filter((u) => u.id !== user.id);
  }
}

const firstUser = new UserFunc("Mike", 1222312);
const secondUser = new UserFunc("Monika", 1223333);
const thirdUser = new UserFunc("Kaz", 55463664);
const fourthUser = new UserFunc("Steve", 22333112);

const mainAdmin = new MainAdmin("Jeff", 99999999);

let usersArr = [firstUser, secondUser, thirdUser, fourthUser, mainAdmin];
let usersArrDup = [...usersArr];

firstUser.login().screenMessage().logout().screenMessage();

mainAdmin.deleteUser(secondUser);

console.log(usersArrDup);

// #######################################################

const promptData = prompt("enter radius");

const calcArea = function (radius) {
  return 3.15 * radius ** 2;
};

const area = calcArea(promptData);

document.body.innerHTML = `<h1>${area}</h1>`;

// #######################################################

//? CALLBACK FUNCTION - premise

function logIt(myFunc) {
  let value = 50;
  myFunc(value);
}

logIt(function (value) {
  console.log(value);
});
