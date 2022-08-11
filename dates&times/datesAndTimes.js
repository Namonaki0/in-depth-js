// timestamps

// const before = new Date("March 30 2020 10:00:00");
// const now = new Date();

// const diff = now.getTime() - before.getTime();

// const mins = Math.round(diff / 100 / 60);
// const hours = Math.round(diff / 60);
// const days = Math.round(diff / 24);

// converting timestamps into date objects
// const timestamp = 1675938474990;

// console.log(new Date(timestamp));

const now = new Date();
const before = new Date("January 10 2022 12:00:00");

console.log(dateFns.format(now, "dddd"));
console.log(dateFns.format(now, "Do"));
console.log(dateFns.format(now, "MMMM"));
console.log(dateFns.format(now, "YYYY"));

console.log(dateFns.format(now, "dddd Do MMMM YYYY"));

console.log(dateFns.distanceInWords(now, before, { addSuffix: true }));
