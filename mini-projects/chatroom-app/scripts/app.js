//? DOM queries
const chatList = document.querySelector(".chat-list");
const chatForm = document.querySelector(".new-chat");
const nameForm = document.querySelector(".new-name");
const chatRooms = document.querySelector(".chat-rooms");
const usernameUpdateMessage = document.querySelector(".username-update-msg");

const username = localStorage.username ? localStorage.username : "anonymous";

//? class instances
const chatUI = new ChatUI(chatList);
const chatroom = new Chatroom("general", username);

chatRooms.addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON") {
    chatroom.updateRoom(e.target.id);
    chatUI.clear();
    chatroom.getChats((chat) => chatUI.render(chat));
  }
});

chatForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const message = chatForm.text.value.trim();
  chatroom
    .addChat(message)
    .then(() => {
      chatForm.reset();
    })
    .catch((err) => console.log(err));
});

nameForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const username = nameForm.name.value.trim();

  //? update username
  chatroom.updateUsername(username);

  //? reset form on submit
  nameForm.reset();
  //? update message on submit
  usernameUpdateMessage.innerText = `username updated to ${username}`;
  setTimeout(() => (usernameUpdateMessage.innerText = ""), 3000);
});

//? get chats and render
chatroom.getChats((data) => chatUI.render(data));
