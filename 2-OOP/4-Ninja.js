// ES6 Ninja

class Ninja {
    constructor(name){
        this.name = name;
        this.health = 100;
        this._speed = 3;
        this._strength = 3;
    }

    sayName(){
        console.log(`My name is ${this.name}!`);
    }

    get speed(){ return this._speed; } // these getters just allow
    get strength(){ return this._strength; } // referencing this.speed/strength

    showStats(){
        console.log("Name: " + this.name);
        console.log("Health: " + this.health);
        console.log("Speed: " + this.speed); // what's the point
        console.log("Strength: " + this.strength); // of this
    }

    drinkSake(){
        this.health += 10;
        console.log("Health: " + this.health);
    }

}

const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();


class Sensei extends Ninja {
    constructor(name) {
        super(name);
        this.health = 200;
        this._speed = 10;
        this._strength = 10;
        this.wisdom = 10;
    }

    speakWisdom(){
        super.drinkSake();
        console.log("What one programmer can do in one month, two programmers can do in two months.");
    }
}

const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
superSensei.showStats();