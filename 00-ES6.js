
/// ES5 & ES6 ///


// Classes

    // ES5
    function User(name) {
        this.name = name;
    }
    User.prototype.printName = function(){
        console.log(this.name)
    }
    var person = new User("Brian");
    person.printName();

    // ES6
    class User2 {
        constructor(name) {
        this.name = name; 
        }
        printName() {
            console.log(this.name);
        }
    }
    let person2 = new User2("Brian");
    person2.printName();


// Fat arrow with callback function

    // ES5
    [1,2,3].map(
        function(n){
            return n*2;
        }, this);
    // .map array method runs a callback function on each array element
    // for each element, 'n', return n*2 
    // result is [2,4,6]

    // ES6
    [1,2,3].map(n => n*2);
    // The fat arrow:
    // -replaces 'function' in a callback function
    // -allows us to sustain 'this' and use it in the function
    // curly brackets unnecessary when one expression


// Fat arrow with callback and template literals (interpolation)

    // ES5
    var eventsList = {
        eventsDate:'Saturday',
        events: ['hackathons'], 
        printEvents: function() { 
            this.events.forEach(function(f) { 
                console.log(this.eventsDate + ' is for ' + this.events); 
            }, this);
        }
    };

    // ES6
    var eventsList2 = {
        eventsDate:'Saturday',
        events: ['hackathons'], 
        printEvents() { 
        this.events.forEach(e =>
            console.log(`${this.eventsDate} is for ${e}`));
        } 
    };
    

// FOR OF loop
// loops through arrays and objects with very similar code structures
let iterable = [10, 20, 30];
for (let value of iterable) {
    value += 1;
    console.log(value); // logs 11, 21, 31
}


// Variable declaration
// 'var' is function-scoped, while 'let' and 'const' are block-scoped

    // Let: used for mutable variable declaration
    let x = 5;
    if (true) { let x = "Yes"; }
    console.log(x); // logs 5

    // Let with TypeScript: types are mutable
    let x: number = 5;
    if (true) { let x: string = "Yes" }
    console.log(x); // logs 5


// Exporting modules and imports
// Read: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export
module.exports = 7; 
module.exports = { x : 7 };
module.exports = function sample() { }
export let name = 'Tim Paterson';
export function sampleFun(x) { return x+x; }
import { Object } from 'filepath';


// Promises
// Functions used for callbacks to avoid the nesting of callbacks and add efficiency

    // ES5
    functionA(function(){
        functionB(function(){
            functionC(function(){
                // Do something
            })
        })
    })

    // ES6
    functionA().then(functionB).then(functionC);


// Practice

var MyNode = class MyNode {
    constructor(val) {
        this.val = 0;
        this.val = val;
    }
    doSomething() {
        this._priv = 10;
    }
}
var myNodeInstance = new MyNode(1);
console.log(myNodeInstance.val);