const form = document.querySelector(".record-form");
const recordInput = form.querySelector(".record-input");
const ul = document.querySelector("ul");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(e);
});

const addToList = (record) => {
  let time = record.release_date.toDate();
  let html = `
    <li>${record.artist}</li>
    <span>${time}</span>
  `;

  ul.innerHTML += html;
};

db.collection("records")
  .get()
  .then((snapshot) => {
    snapshot.docs.forEach((doc) => addToList(doc.data()));
  })
  .catch((err) => console.log(err));
