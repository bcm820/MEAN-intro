// Math 1
// Write a function called zero_negativity(). This function should take an array. Return true if the input array contains no negative numbers, return false if it does.
function zero_negativity(arr) {
    for(let n of arr) { if(n < 0) { return true; }}
    return false;
}
// Math 2
// Write a function called is_even(). This function should take an number. Return true if the input number is even, return false if the number is odd.
function is_even(n) {
    if(n % 2 == 0) { return true; }
    else { return false; }
}
// Math 3
// Write a function called how_many_even(). This function should take an array. Return the total number of elements in the array that are even. You may call is_even() to solve this.
function how_many_even(arr) {
    let count = 0;
    for (let n of arr) { if (n % 2 == 0) { count++; } }
    return count;
}
// Math 4
// Write a function called create_dummy_array(). This function should take a number n. Return an array of random numbers between 0 and 9 with the length of n.
function dummy_array(n) {
    let arr = [];
    for(let i = 0; i < n; i++) {
        arr[i] = Math.floor(Math.random() * 10)
    }
}
// Math 5
// Write a function called random_choice(). This function should take an array. Return a random element of the array, based on its length. This function should never return undefined.
function random_choice(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}