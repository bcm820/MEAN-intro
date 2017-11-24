// Class and constructor
// Let's define a simple class: Dot. Dots have an x value and a y value. Consider the below definition:

class Dot {

    constructor(x, y) { // constructor is invoked upon instantiation
        this.x = x;
        this.y = y;
        console.log(`You created a ${this.constructor.name}!`);
        // constructor.name refers to the name of the Class
    }

    // this is a prototype method
    showLocation() { // method can be called upon instances of a class
        console.log(`This ${this.constructor.name} is at x ${ this.x } and y ${ this.y }`);
    }

    // this is a static method
    static getHelp() { // method can only be called upon the class itself!
        console.log("A Dot takes x and y coordinates, type 'new Dot' to create one!");
    }
}
let dot1 = new Dot(10, 10); // invokes constructor upon instantiation
dot1.showLocation(); // called upon an instance
Dot.getHelp(); // called upon the class


// Inheritance, Super, Getters/Setters

class Circle extends Dot {
    constructor(x, y, radius) {
        super(x, y); // super() calls the constructor of the parent on the child instance
        this.radius = radius;
    }

    showXandY() { // simple function in the child class
        return super.showLocation(); // using super, we call parent method on child
    } // you can still call the parent method on the child without it though...

    // simple getters and setters -- THIS IS FOR PRIVATE ATTRS!!!
    // get x() { return this.x; }
    // get y() { return this.y; }
    // set x(val) { this.x = val; }
    // set y(val) { this.y = val; }
    
    // custom getter for non-attr info
    get diameter() { return this.radius * 2; }

}

let circle = new Circle(3, 5, 8);
circle.showLocation();
circle.showXandY();
console.log(circle.diameter);