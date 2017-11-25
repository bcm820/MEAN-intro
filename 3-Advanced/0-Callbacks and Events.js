
// Callbacks //

// A callback is a function passed as an argument to another function to write asynchronous code
// Asynchronous coding is the ability to divide your code into portions that run now and later
setTimeout(function myCallback(){ // setTimeout waits to call a new function, myCallback
  console.log(new Date() + ": Print after setTimeout"); }, 2000
);
console.log(new Date() + ": Print before setTimeout");

// Callback functions are passed in as arguments to functions that receive them as params
function makePasta(pasta, makeSauce) {
    var sauce = makeSauce(); // invokes callback function passed in, assigns it a var
    console.log(`Boiling ${pasta} pasta...`);
    console.log(`Mixing ${pasta} pasta with ${sauce}...`);
    return `Voila! Presenting ${pasta} pasta with ${sauce}!`;
}
function makePesto() { console.log("Making pesto sauce..."); return "pesto sauce"; }
function makeAlfredo() { console.log("Making alfredo sauce..."); return "alfredo sauce"; }

// when passing in a callback, notice the lack of parentheses
// we want to pass the function itself, not its return value!
console.log(makePasta("penne", makePesto));
console.log(makePasta("farfalle", makeAlfredo));
// Callbacks help with delegating tasks, and can help modularize our code for reuse and DRY


// Callbacks & Event Handling //

// We will typically use callbacks in response to an event trigger vs. setTimeout
// Our HTML might have: <button id="myButton">This is a Button</button>
var button = document.getElementById("myButton"); // Link our variable "button" to a DOM element
button.addEventListener("click", callback); // add a DOM eventListener to that variable.
function callback() {
  alert("You clicked the button");
}