// OOP Pt. 1

function Person(name, age) {

    // by using 'this', we can store attrs/methods into a class object
    // public attributes and methods
    this.name = name;
    this.age = age;
    this.greet = function(){ // this is our first method, greet
        console.log(`My name is ${this.name} and I am ${this.age} years old!`);
    };

    // but private attributes and methods aren't attached to 'this'
    const privateAttr = "private attribute";
    const privateMethod = function() {
        console.log("publically accessing privateMethod()");
    };

    // to work around this, store a reference to 'this'
    const self = this;

    // be careful of function scope for private methods
    // referring to 'this' in a private method will refer to the window object
    // but if you use your stored reference to 'this', you can refer to your object
    const privateMethod2 = function() {
        console.log(`privateMethod2(): this.age = ${this.age}`);
        console.log(`privateMethod2(): self.age = ${self.age}`)
    };

    // a public method to get private methods and attribute
    this.getPrivates = function() {
        privateMethod();
        privateMethod2();
        return `publically accessing privateAttr: ${privateAttr}`;
    };

}

// create the 'steve' instance, run greet
const steve = new Person("Steve", 27);
steve.greet();

// create the 'anika' instance, run greet. note that it is different.
const anika = new Person("Anika", 33);
anika.greet();

// finally note how we can refine the greet method for any particular instance
const emily = new Person("Emily", 22);
emily.greet = function() { console.log(`My name is ${this.name} and I am the best!`); };
emily.greet();

// logging private method invocation
console.log(emily.getPrivates());


// OOP Pt. 2
// Soft Privacy & Method Chaining
// In order to keep data private in a particular instance, we just need to leverage JavaScripts scoping rules. By creating variables scoped to the Object Constructor, we keep them out of the global scope. To read and update private data, we'll need to write getter and setter methods.
// Additionally, we can chain methods together by returning this. Essentially, whenever we tell a public or prototype method to return this, we're asking for the entire object back. This lets us chain function calls together.

// Private variables are scoped to the constructor with the var keyword
function Car(make, model) {
    let odometer = 0;
    this.make = make;
    this.model = model;
    
    // To make functions private, we scope them to the constructor
    function updateOdometer(distance) {
        odometer += distance;
    }
    
    // 'Getter' functions help us read private variables
    this.readOdometer = function() { // public distinguished via 'this'
      return odometer;
    };
    
    // 'Setter' functions help us update private variables
    this.drive = function(distance) {
      updateOdometer(distance);
      // return this will allow us to chain methods
      return this;
    };
}
const myCarInstance = new Car("Chevy", "Camaro");
// by returning this, we can chain drive()
myCarInstance.drive(50).drive(90); 
// private variable is undefined
console.log(myCarInstance.odometer);
// but we can read it with our getter function
console.log(myCarInstance.readOdometer());