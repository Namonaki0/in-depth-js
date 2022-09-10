const users = [
  { name: "Mike", premium: true },
  { name: "Maria", premium: true },
  { name: "Ross", premium: false },
  { name: "Dario", premium: false },
  { name: "Josh", premium: true },
];

const getPremiumUsers = (users) => {
  return users.filter((user) => user.premium);
};

export { getPremiumUsers, users as default };
