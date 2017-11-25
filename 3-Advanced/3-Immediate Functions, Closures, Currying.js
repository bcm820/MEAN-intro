
// Immediate Functions //

// You can execute a function as soon as it is defined
// Usually, you'd do this for an initializing function that only needs to run once
(() => { console.log("I will run immediately"); })();

// the enclosing pair of parentheses defines the function
// the first pair of joined parens is where you define your params
// the second pair of joined parens runs the function immediately

((param1, param2) => { console.log(`I will ${param1} ${param2} immediately`); })("also", "run");
// the enclosing pair of parentheses defines the function
// the first pair of joined parens defines the params
// the second pair of joined parens is for passing in args

// BENEFIT #1 OF USING IMMEDIATE FUNCTIONS: FASTER LOOKUP TIMES
// A common pattern for running code on non-browser platforms is to pass the global object as an argument
// this creates a local copy of the global object inside the function, resulting in faster lookup times
((global) => {
    console.log(global); // logs the window object very quickly!
})(global);

// BENEFIT #2 OF USING IMMEDIATE FUNCTIONS: SCOPED VARIABLES & FUNCTIONS
(() => {
    let a = "Hello"; let b = "world"; // variables a and b are scoped
    function test() { // function test is scoped
        console.log(`${a} ${b}`);
    }
    test(); // 'test' can run without confusing with another global 'test' function in your program
})();


// Closures //
// A closure is a function that is returned from another function
function Outer() {
    let count = 0; // this is a private variable inside the Outer function
    function inner() {
        count++;
        console.log(count);
    }
    return inner; // note: the scoped function is returned!
}

var counter = Outer(); // rather, counter = inner!... a function stored inside a variable...
// counter can be invoked, and each time will increment 'count' of it, and log count value
counter(); // will console.log "1"
counter(); // will console.log "2"
counter(); // will console.log "3"

// We are changing the private variable, 'count', from outside of it, via a closure!
// What if we try to access the private variable?
console.log(count); // doesn't work!
console.log(Outer.count); // doesn't work!

// You could create a getter method inside of Outer to be invoked on an instance of Outer
// but that's a lot of work....


// Currying //
// Currying means only running part of a function rather than the whole thing
// it is a different strategy of writing code, and more functional vs OOP

function ninjaBelt(ninja){
    return (beltColor) => { //note the closure here!
        console.log(`${ninja} has earned a ${beltColor} belt.`);
    };
}

// note the double invocation here:
ninjaBelt('Brian')('black');
// since the first function returns the second, the second invocation calls the second (the result of the first!)