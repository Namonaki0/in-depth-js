//? #1 - GETTING INPUT FIELD VALUES VIA DOT NOTATION
//? as long as inputs have an id or name attribute

const form = document.querySelector("#user-form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(form.username.value);
});

//? ALL THE VALUES CAN BE REACHED VIA THE FORM VARIABLE

// #######################################################

//? #2 - GETTING INPUT FIELD VALUES THROUGH VARIABLES

// const form = document.querySelector("#user-form");
// const username = document.querySelector("#username");

// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   console.log(username.value);
// });

//? NO INDIVIDUAL INPUT FIELD EVENT LISTENERS NECESSARY

//? REGEX
const inputName = "Stephen";
const validation = /^[a-zA-Z]{6,}$/; // --> any word that contains characters form a-z or A-Z that's at the beginning and end of sentence and is at least 6 characters long -> returns boolean

const result = validation.test(inputName);
console.log(result); // ---> returns true in this case

const result2 = inputName.search(validation);
console.log(result2); // ---> returns position of pattern --> 0 if found & -1 if not
//? REGEX --- END

// #######################################################

const testForm = document.querySelector("#test-form");
const resultOutput = document.querySelector("#result-output");

const usernameInputPattern = /^[a-zA-Z]{6,}$/;

testForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const usernameInput = testForm.username.value;

  const usernameValidation = usernameInputPattern.test(usernameInput);

  if (usernameValidation) {
    resultOutput.textContent = "Valid username";
  } else {
    resultOutput.textContent =
      "The username must contain letters from a to z, cannot contain numbers and it must be at least 6 characters long";
  }
});

//? USER VALIDATION FEEDBACK

testForm.username.addEventListener("keyup", (e) => {
  const inputInfo = e.target.value;
  if (usernameInputPattern.test(inputInfo)) {
    testForm.username.setAttribute("class", "success");
  } else {
    testForm.username.setAttribute("class", "error");
  }
});
