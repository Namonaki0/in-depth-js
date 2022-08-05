const correctAnswers = ["A", "B", "B", "A", "B"];
const form = document.querySelector(".quiz-form");
const scoreSection = document.querySelector(".score-section");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let score = 0;

  const userAnswers = [
    form.q1.value,
    form.q2.value,
    form.q3.value,
    form.q4.value,
    form.q5.value,
  ];

  userAnswers.forEach((userAnswer, index) => {
    if (userAnswer === correctAnswers[index]) {
      score += 20;
    }
  });

  scrollTo(0, 0);

  scoreSection.classList.remove("d-none");

  let output = 0;
  let message;

  const timer = setInterval(() => {
    scoreSection.querySelector("span").textContent = `${output}%`;
    if (output === score) {
      clearInterval(timer);
    } else {
      output++;
    }
  }, 10);

  const scoreMessage = scoreSection.querySelector(".score-message");

  if (score < 50) {
    message = "not enough to pass";
  } else if (score < 70) {
    message = "almost there but not quite";
  } else {
    message = "well done, you passed";
  }

  scoreMessage.textContent = message;
  scoreMessage.classList.remove("d-none");
});
