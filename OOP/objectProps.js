//? Represents an instance of a game in progress
const game = {
  status: "in progress",
  scoreHistory: [2, 5, 10, 26, 4],
};

Object.defineProperty(game, "maxPlayers", {
  value: 4,
  writable: false,
});

game.maxPlayers = 6; //? value for maxPLayers doesn't change as writable is set to false

console.log(`MAX PLAYERS: ${game.maxPlayers}`);

// ########################################

//? GETTERS AND SETTERS *
Object.defineProperty(game, "highestScore", {
  get() {
    return Math.max(...this.scoreHistory);
  },
});

console.log(game.highestScore); //? * returns 26

game.scoreHistory.push(35);
console.log(game.highestScore); //? * returns 35

Object.defineProperty(game, "completed", {
  set(value) {
    if (value && this.status === "completed") {
      throw new Error("game already completed");
    }
    if (value) {
      this.status = "completed";
    }
  },
});

game.completed = true; //? sets the status to completed
// game.completed = true; //? throws error as game is already completed

console.log(game.status);
