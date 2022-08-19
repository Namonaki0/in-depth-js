//? OOP

// object literals
// encapsulation
// method chaining
// prototype chain

// ----------------------------------------------------------

//? TERMINOLOGY

// window object (global object)
// hoisting - the way functions are placed at top of document (over-simplification).
// function declarations can be invoked before initialization as function are placed at the top but function expressions can't.

// global context -> window object (this keyword)

//* PRIMITIVE TYPES
// numbers, strings, booleans, null, undefined, symbols
// JS wraps primitive values in a temporary wrapper object until methods are executed, returning the value and unwrapping these values afterwards - all done under the hood

// STRINGS, NUMBER, BOLLEAN
// const name = new String("John") -> string constructor
// new Number(3)
// new Boolean(true)

// the only primitive types that don't have a wrapper object are null & undefined - they don't have access to properties or methods

//* REFERENCE TYPES
// all types of objects -> object literals, arrays, functions, dates and all other objects

//* STACK & HEAP -> the way these types are stored in memory
// primitive types are stored on the stack -> quicker execution but less memory
// reference types are stored on the heap -> more space available but slower execution -> things like arrays will have a pointer
// referencing the variable on the stack

//* DOM
// root node (html) -> element nodes -> text nodes
// quering the DOM -> referencing elements in the DOM

// can't use forEach() for HTMLCollection only NodeList -> both can use square bracket notation []
// nodeLists are returned by the querySelector method
// get element(s)by -> tagName and classList return HTMLCollections
// convert an HTMLCollection -> Array.from(reference) -> forEach() is now available

// textContent shows all text in tag even if hidden (i.e: display: none) -> unlike innerText

// event bubbling & delegation

// classlist -> classList.contains("class-name") - use with condition

//* ARRAY METHODS
// filter method is not destructive and returns the array based on a condition
// map method returns a completely new array
// reduce method takes 2 params (accumulator and current iteration - (acc, curr)), it returns the accumulation of values - the accumulator tends to be initialized at 0
// find method returns the first value that passes a condition
// sort method takes two params and evaluates them in order to order the array

// method chaining

//* FORMS
// <form-reference>.reset() resets all input fields once form is submitted

//* OBJECTS
// object shorthand notation -> when key and value pairs are named the same only one of them is needed
// const userOne = new Object() -> object contructor - same as -> const userOne = {}

//* ARRAYS
// const ages = new Array(30, 50, 21) -> array construtor function - same as -> const ages = [] for creating arrays

// -----------------

// function declaration:

// function sayHello(*) {    * ----> parameters
//   console.log("hello")
// }

// sayHello(*);     * ----> arguments

// -----------------

// function expression:

// const sayHello = function (*) {    * ----> parameters
//   console.log("hello");
// };

// sayHello(*);     * ----> arguments

// ----------------------------------------------------------

// #######################################################

const promptData = prompt("enter radius");

const calcArea = function (radius) {
  return 3.15 * radius ** 2;
};

const area = calcArea(promptData);

document.body.innerHTML = `<h1>${area}</h1>`;

// #######################################################

//? CALLBACK FUNCTION

function logIt(myFunc) {
  let value = 50;
  myFunc(value);
}

logIt(function (value) {
  console.log(value);
});
