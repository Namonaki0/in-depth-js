// render chat templates to the DOM

class ChatUI {
  constructor(list) {
    this.list = list;
  }

  render(data) {
    const html = `
        <li class="username">username: ${data.username}</li>
        <li class="message">message: ${data.message}</li>
        <div class="time">${data.created_at.toDate()}</div>
      `;

    this.list.innerHTML += html;
  }
}

// clear the list of chats (when the room changes)
