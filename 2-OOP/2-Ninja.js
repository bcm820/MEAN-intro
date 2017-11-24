// Assignment: Ninja Class

// Create a new class called Ninja with the following attributes:
// name
// health
// speed (private)
// strength (private)
// Speed and strength should be 3 by default. Health should be 100 by default.

function Ninja(name){
    this.name = name;
    this.health = 100;
    const speed = 3;
    const strength = 3;

    // sayName() - This should log that Ninja's name to the console.
    this.sayName = function(){
        console.log(`My name is ${this.name}!`);
    };

    // showStats() - This should show the Ninja's Strength and Speed, as well as their health.
    this.showStats = function(){
        console.log("Name: " + this.name);
        console.log("Health: " + this.health);
        console.log("Speed: " + speed);
        console.log("Strength: " + strength);
    };

    // drinkSake() - This should add +10 Health to the Ninja
    this.drinkSake = function(){
        this.health += 10;
        console.log("Health: " + this.health);
    };

    // punch() - This method will take another Ninja instance and subtract 5 Health from the Ninja we passed in.
    this.punch = function(ninja){
        if (ninja instanceof Ninja){
            ninja.health -= 5;
            console.log(`${ninja.name} was punched by ${this.name} and lost 5 health!`);
        } else {
            console.log("Error: Punch method only takes an instance of the Ninja class");
        }
    };

    // punch() - This method will take another Ninja instance and subtract 5 Health from the Ninja we passed in.
    this.kick = function(ninja){
        if (ninja instanceof Ninja){
            let damage = 15 * strength;
            ninja.health -= damage;
            console.log(`${ninja.name} was kicked by ${this.name} and lost ${damage} health!`);
        } else {
            console.log("Error: Kick method only takes an instance of the Ninja class");
        }
    };

}


// Example Outputs
const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
// -> "My ninja name is Hyabusa!"
ninja1.drinkSake();
ninja1.drinkSake();
ninja1.showStats();
// -> "Name: Hayabusa, Health: 100, Speed: 3, Strength: 3"
const ninja2 = new Ninja("Ryu");
ninja1.punch(ninja2);
ninja2.kick(ninja1);
ninja2.punch("not a ninja");
ninja1.kick("not a ninja");