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