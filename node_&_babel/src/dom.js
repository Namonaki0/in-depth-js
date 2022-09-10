const body = document.querySelector("body");

const docStyle = () => {
  body.style.background = "orange";
};

const docTitle = (text) => {
  const title = document.createElement("h1");
  title.textContent = text;
  body.appendChild(title);
};

const docID = (multNum) => Math.ceil(Math.random(multNum) * 10000);

export { docStyle, docTitle, docID };
