db.collection("records")
  .get()
  .then((snapshot) => {
    console.log(snapshot.docs[0]._document.proto.fields.artist.stringValue);
  });
