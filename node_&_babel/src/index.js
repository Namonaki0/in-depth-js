import { docStyle, docTitle, docID } from "./dom";
import users, { getPremiumUsers } from "./data";

const premiumUsers = getPremiumUsers(users);

console.log(premiumUsers, users);

docStyle();
docTitle("Hello");

console.log(docID(5));

const greet = (name) => {
  console.log(name);
};

greet("Mike");
