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
}

const userOne = new User("Steve", "steve@mail.com", 3323123);
const userTwo = new User("Mike", "mike@mail.com", 3323114);
const userThree = new User("David", "david@mail.com", 3323167);

const mainAdmin = new Admin("Craig", "craig@mail.com", 9999999);

userOne.clockIn();
userTwo.clockIn();
mainAdmin.clockIn().clockOut();

const { name, email, id } = mainAdmin;

console.log(`ADMIN: ${name} | EMAIL: ${email} | ID: ${id}`);
