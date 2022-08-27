const form = document.querySelector(".record-form");
const recordArtistInput = form.querySelector(".record-artist-input");
const recordNameInput = form.querySelector(".record-name-input");
const ul = document.querySelector("ul");

const addToList = (record, id) => {
  console.log(id);
  let time = record.release_date.toDate();
  let html = `
    <div data-id=${id}>
      <li>${record.artist}</li>
      <span>${record.name}</span>
      <span>${time}</span>
      <button style="background:red; color:white; cursor:pointer">delete</button>
    </div>
  `;

  ul.innerHTML += html;
};

// get snapshot of "records" collection - returned as a promise
db.collection("records")
  .get()
  .then((snapshot) => {
    snapshot.docs.forEach((doc) => addToList(doc.data(), doc.id));
  })
  .catch((err) => console.log(err));

// add documents to db
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const now = new Date();

  const record = {
    artist: recordArtistInput.value,
    name: recordNameInput.value,
    release_date: firebase.firestore.Timestamp.fromDate(now),
  };

  db.collection("records")
    .add(record)
    .then(() => {
      console.log("record info added");
    })
    .catch((err) => console.log(err));

  form.reset();
});

// delete record - event delegation for each LI
ul.addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON") {
    const recordID = e.target.parentElement.getAttribute("data-id");
    db.collection("records").doc(recordID).delete();
  }
});
