// Part I
// Create a function called starString() that takes a number and returns a string of that many *. For example:
// let stars = starString(8)
// If we console.log(stars) we should see ******** printed in our terminal.
function starString(n) {
    let str = "";
    for(let i = 0; i < n; i++) { str += "*"; }
    console.log(str);
}
// Part II
// Create a function called drawStars() that takes an array of numbers and prints out *.
// let x = [4, 6, 1, 3, 5, 7, 25]
// draw_stars(x) should print the following in when invoked:
// ****
// ******
// *
// ***
// *****
// *******
// *************************
function drawStars(arr) {
    for(let n of arr) {
        starString(n);
    }
}
// Part III
// Modify the function above. Allow an array containing integers and strings to be passed to the drawStars() function. When a string is passed, instead of displaying *, display the first letter of the string according to the example below. You may use the .toLowerCase() string method for this part.
// For example:
// let x = [4, "Tom", 1, "Michael", 5, 7, "Jimmy Smith"]
// drawStars(x) should print the following in the terminal:
// ****
// ttt
// *
// mmmmmmm
// *****
// *******
// jjjjjjjjjjj

function charString(n) {
    let str = "";
    for(let i = 0; i < n.length; i++) { str += n[0].toLowerCase(); }
    console.log(str);
}

function drawStars(arr) {
    for(let n of arr) {
        if(typeof n === 'number') { starString(n); }
        else if(typeof n === 'string') { charString(n); }
    }
}