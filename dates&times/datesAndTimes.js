// timestamps

const before = new Date("March 30 2020 10:00:00");
const now = new Date();

const diff = now.getTime() - before.getTime();

const mins = Math.round(diff / 100 / 60);
const hours = Math.round(diff / 60);
const days = Math.round(diff / 24);

// converting timestamps into date objects
const timestamp = 1675938474990;

console.log(new Date(timestamp));
