//? OOP

// object literals
// encapsulation
// method chaining

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
    users = users.filter((u) => u.name !== user.name);
  }
}

const userOne = new User("Mike", "mike@gmail.com", 1223123);
const userTwo = new User("Sophie", "sophie@gmail.com", 3443223);
const admin = new Admin("Admin", "admin@gmail.com", 9999999);

let users = [userOne, userTwo, admin];

userOne.login();
userTwo.logout();

userTwo.login().clockInNumberInWeek().clockInNumberInWeek().logout();

admin.deleteUser(userOne);

console.log(users);
