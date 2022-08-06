//? FILTER

const scores = [30, 20, 15, 45, 60, 22, 67];

const filteredScores = scores.filter((score) => score > 20);
console.log(filteredScores);

// #######################

const users = [
  { name: "Josh", premium: false },
  { name: "Ruth", premium: true },
  { name: "Kurt", premium: true },
  { name: "Vishal", premiun: true },
  { name: "Suzan", premium: false },
  { name: "Sophie", premium: true },
];

const premiumUsers = users.filter((user) => user.premium);
console.log(premiumUsers);

// #######################################################

//? MAP

const prices = [30, 20, 15, 45, 60, 22, 67];

const salePrices = prices.map((price) => price / 2);
console.log(salePrices);

// #######################

const products = [
  { name: "Kisou", price: 30 },
  { name: "Vulgar", price: 20 },
  { name: "WTD", price: 25 },
  { name: "TMOFB", price: 30 },
  { name: "Uroboros", price: 40 },
  { name: "Arche", price: 35 },
];

const saleProducts = products.map((product) => {
  if (product.price > 25) {
    //* returns a new array of objects to protect the original array
    return { name: product.name, price: product.price / 2 };
  } else {
    return product;
  }
});

console.log(saleProducts);

// #######################################################

//? REDUCE

const userScores = [20, 40, 30, 70, 10, 90, 75, 100];

const numberOfHighScores = userScores.reduce((acc, curr) => {
  if (curr > 40) {
    acc++;
  }
  return acc;
}, 0);

console.log(`HIGH SCORES: ${numberOfHighScores}`);

const gameScores = [
  { player: "Mark", score: 50 },
  { player: "Kurt", score: 20 },
  { player: "Ruth", score: 90 },
  { player: "Sophie", score: 40 },
  { player: "Suzan", score: 55 },
  { player: "Vishal", score: 70 },
  { player: "Kurt", score: 50 },
  { player: "Sophie", score: 30 },
  { player: "Suzan", score: 10 },
  { player: "Kurt", score: 90 },
  { player: "Suzan", score: 45 },
  { player: "Vishal", score: 20 },
  { player: "Kurt", score: 80 },
];

const KurtTotalScores = gameScores.reduce((acc, curr) => {
  if (curr.player === "Kurt") {
    acc += curr.score;
  }
  return acc;
}, 0);

console.log(KurtTotalScores);

// #######################################################

//? FIND

const markedScores = [50, 70, 15, 45, 10, 92, 67];

const highScore = markedScores.find((score) => score > 80);
console.log(`HIGHEST SCORE: ${highScore}`);
