// DOM queries
const chatList = document.querySelector(".chat-list");
const chatForm = document.querySelector(".new-chat");

// class instances
const chatUI = new ChatUI(chatList);
const chatroom = new Chatroom("general", "JohnDoe");

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

// get chats and render
chatroom.getChats((data) => chatUI.render(data));
