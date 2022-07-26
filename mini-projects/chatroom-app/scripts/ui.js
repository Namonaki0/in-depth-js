class ChatUI {
  constructor(list) {
    this.list = list;
  }
  //? clear the list of chats (when the room changes)
  clear() {
    this.list.innerHTML = "";
  }

  //? render chat templates to the DOM
  render(data) {
    const dateFormat = dateFns.distanceInWordsToNow(data.created_at.toDate(), {
      addSuffix: true,
    });
    const html = `
      <div class="individual-chat">
        <li class="username">${data.username}</li>
        <li class="message">${data.message}</li>
        <div class="chat-date">${dateFormat}</div>
      </div>
      `;

    this.list.innerHTML += html;
  }
}
