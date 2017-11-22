// Basic 1
// Create a variable x as an empty array []. Log this array to your console.
let x = [];
console.log(x);
// Use .push() to add three strings to your array: 'coding', 'dojo', 'rocks'.
x.push('coding');
x.push('dojo');
x.push('rocks');
// Use .pop() to remove the final element of your array.
// Log the final value of x, what is it?
x.pop();
console.log(x); // ['coding','dojo']
// Basic 2
// Create a const called y, and store an empty array there. Log this to your console.
const y = [];
console.log(y);
// Use .push() to add the number 88 to array y.
y.push(88);
// What happened?
console.log(y);
// Basic 3
// Create a variable z that contains the array [9, 10, 6, 5, -1, 20, 13, 2].
let z = [9,10,6,5,-1,20,13,2]
// Print every element to the console.
z.map(n => console.log(n));
// Now print every element except the final number.
for(let n of z) { if(n!=2) {console.log(n);}}
// Basic 4
// Create a variable names and store the array ['Kadie', 'Joe', 'Fritz', 'Pierre', 'Alphonso']
let names = ['Kadie','Joe','Fritz','Pierre','Alphonso']
// Print the length of all names to the console.
for(let n of names) {console.log(n.length);}
// Now modify your code so only names with a length of 5 print.
for(let n of names) {if(n.length==5){console.log(n.length);}}
// Basic 5
// Create a function yell that takes one parameter called string.
function yell(string){
    if (typeof string === 'string'){
        return string;
    }
}
// Make yell return that string in all uppercase.
function yell(string){
    if (typeof string === 'string'){
        return string.toUpperCase();
    }
}
// Where could you look to find out more about uppercasing strings in JavaScript?
// I like MDN docs