//? OOP

// object literals
// encapsulation
// method chaining

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

// user1.login();
// user2.logout();

admin1.login();
admin1.logout();
