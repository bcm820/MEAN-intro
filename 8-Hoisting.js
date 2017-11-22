// Assignment: JavaScript Hoisting
// Predict the output of the following snippets. Do not plug these into the interpreter.


// 1: hello hoisted as undefined var, 'undefined'
console.log(hello);
var hello = 'world';

// 2: function called, needle printed as 'magnet'
var needle = 'haystack';
test();
function test(){
	var needle = 'magnet';
	console.log(needle);
}

// 3: brendan defined outside scope of print(), 'super cool'
var brendan = 'super cool';
function print(){
	brendan = 'only okay';
	console.log(brendan);
}
console.log(brendan);

// 4: 'chicken', 'half-chicken'
var food = 'chicken';
console.log(food);
eat();
function eat(){
	food = 'half-chicken';
	console.log(food);
	var food = 'gone';
}

// 5: mean is undefined?
mean();
console.log(food);
var mean = function() {
	food = "chicken";
	console.log(food);
	var food = "fish";
	console.log(food);
}
console.log(food);

// 6: genre is 'undefined', rock, r&b, disco
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
	genre = "rock";
	console.log(genre);
	var genre = "r&b";
	console.log(genre);
}
console.log(genre);

// 7: since learn() is called, undef variable is hoisted;
// will print 'san jose', 'seattle', 'burbank', and 'san jose' again
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
	dojo = "seattle";
	console.log(dojo);
	var dojo = "burbank";
	console.log(dojo);
}
console.log(dojo);