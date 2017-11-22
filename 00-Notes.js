// HOISTING //

// Key Rules of Hoisting
// Variable declarations rise to the top of their scope like hot air balloons.
// Functions create their own scope and act like cages, preventing declarations from rising out.
// Assignments, or = signs, act like anchors. They stay put, no matter how the code is rearranged.
// let and const will throw an error if called before they get assigned.

// OBJECTS // 

// Let's say we have an object, a sandwich.
// For each value in our object, there is a key that represents it.
let sandwich = {
    slices_of_bread: 2,
    ham: true,
    veggies: ['lettuce', 'tomato', 'onion']
}; 
console.log(sandwich);
// logging the entire sandwich and all its properties
console.log(sandwich.slices_of_bread);
// examining the 'slices_of_bread' property

// Commonly, we'll be dealing with arrays of objects from the backend database:
let sandwiches = [
    {
        id: 1,
        bread_type: 'Sourdough',
        ingredients: 'Spicy Turkey, Spicy Mustard'
    },
    {
        id: 2,
        bread_type: 'Marbled Rye',
        ingredients: 'Prosciutto, Swiss Cheese'
    }
];

// Iterating objects
// to iterate over an object, we use a for-in loop
let sandwich = {
    cheese: 'Smoked Gouda',
    meat: 'Dry-aged Bison',
    sauce: 'Chipotle Aioli',
    veggies: 'Caramelized Onions'
}
// the variable 'topping' is used instead of an index
for(let topping in sandwich){
    console.log(topping); // when we log 'topping', we notice it's a key
    console.log(sandwich[topping]);
    // when we pass the key to the 'sandwich' object, we can pull values
}
// note that sandwich[topping] is different from sandwich.topping
// we can't use dot notation in this instance because topping is a variable
// We use brackets instead because it needs to be calculated at runtime, as the value of 'topping' changes as the loop runs