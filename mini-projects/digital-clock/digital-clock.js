const clock = document.querySelector(".clock");
const messageOutput = document.querySelector(".message-output");
let welcomeMessage;

const digitalClock = () => {
  const now = new Date();
  const hours = now.getHours();
  const mins = now.getMinutes();
  const secs = now.getSeconds();

  if (hours < 12) {
    welcomeMessage = "Good morning";
  } else if (hours > 12 && hours < 20) {
    welcomeMessage = "Good afternoon";
  } else {
    welcomeMessage = "Good evening";
  }

  messageOutput.textContent = welcomeMessage;

  const html = `
        <span>${hours}</span> : 
        <span>${mins}</span> : 
        <span>${secs < 10 ? `0${secs}` : secs}</span>
        `;

  clock.innerHTML = html;
};

setInterval(digitalClock, 1000);
