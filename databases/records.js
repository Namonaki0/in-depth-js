const form = document.querySelector(".record-form");
const recordArtistInput = form.querySelector(".record-artist-input");
const recordNameInput = form.querySelector(".record-name-input");
const ul = document.querySelector("ul");
const unsubBtn = document.querySelector(".unsub-btn");

const addToList = (record, id) => {
  let time = record.release_date.toDate();
  let html = `
    <div data-id=${id}>
      <li>${record.artist}</li>
      <span>${record.name}</span>
      <button style="background:red; color:white; cursor:pointer">delete</button>
      <span style="display: block">${time}</span>
    </div>
  `;

  ul.innerHTML += html;
};

///////////////////////////////
// get snapshot of "records" collection - returned as a promise
// db.collection("records")
//   .get()
//   .then((snapshot) => {
//     snapshot.docs.forEach((doc) => addToList(doc.data(), doc.id));
//   })
//   .catch((err) => console.log(err));
//////////////////////////////

// get snapshot of current "records" collection
const unsubscribe = db.collection("records").onSnapshot((snapshot) => {
  // console.log(snapshot.docChanges);
  snapshot.docChanges().forEach((change) => {
    const doc = change.doc;
    if (change.type === "added") {
      addToList(doc.data(), doc.id);
    } else if (change.type === "removed") {
      deleteRecord(doc.id);
    }
  });
});

// updates UI when record removed
const deleteRecord = (id) => {
  const recordList = document.querySelectorAll("div");
  recordList.forEach((record) => {
    if (record.getAttribute("data-id") === id) {
      record.remove();
    }
  });
};

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
    console.log("deleted");
  }
});

// unsubscribe from real-time changes
unsubBtn.addEventListener("click", () => {
  unsubscribe();
  console.log("unsubscribed from changes");
});
