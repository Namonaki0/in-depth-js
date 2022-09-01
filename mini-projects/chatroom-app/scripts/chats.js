// adding new chat documents

class Chatroom {
  constructor(room, username) {
    this.room = room;
    this.username = username;
    this.chats = db.collection("chats");
  }
  async addChat(message) {
    // format chat object
    const now = new Date();
    const chat = {
      message,
      username: this.username,
      room: this.room,
      created_at: firebase.firestore.Timestamp.fromDate(now),
    };
    // save chat document
    const response = await this.chats.add(chat);
    return response;
  }
}

const chatroom = new Chatroom("gaming", "Jeff");

chatroom
  .addChat("Hi there")
  .then(() => console.log("chat added"))
  .catch((err) => console.log(err));
// setting up a real-time listener to get new chats
// updating the username
// updating the room
