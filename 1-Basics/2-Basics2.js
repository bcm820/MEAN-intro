// In this assignment, complete the function magic_multiply and ensure it passes all the test inputs and matches their results. Modify magic_multiply until all the tests pass. Do not create a new magic_multiply for each test!

function magic_multiply(x, y){
    if (x == 0 && y == 0){
        return "All inputs 0";
    }
    if (Array.isArray(x)) {
        x = x.map(n => n*y);
        return x;
    }
    if (typeof y === 'string') {
        return "Error: Cannot multiply by string"
    }
    if (typeof x === 'string') {
        let str = "";
        for (; y > 0; y--) {
            str += x;
        }
        return str;
    }
    return x*y;
}

// Test 1
// let test1 = magic_multiply(5, 2);
// console.log(test1);
// // => 10

// Test 2
// let test2 = magic_multiply(0, 0);
// console.log(test2);
// // => "All inputs 0"

// Test 3
// let test3 = magic_multiply([1, 2, 3], 2);
// console.log(test3);
// // => [2, 4, 6]

// Hint: You will need to handle your output differently depending on if x is an array or an integer.

// Test 4
// let test4 = magic_multiply(7, "three");
// console.log(test4);
// // => "Error: Can not multiply by string"

// Test 5 - Bonus
// let test5 = magic_multiply("Brendo", 4);
// console.log(test5);
// // => "BrendoBrendoBrendoBrendo"

// How could we check if an array is an array?