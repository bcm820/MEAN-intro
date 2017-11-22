
// Examples of type casting in TypeScript
var myString: string = "This is a string";
var myNumber: number = 7;
var myBoolean: boolean = true;

let myArrayOfNumbers: number[];
let myArrayOfNumbers2: Array<number>;

function errorHandler(message: string): never {
    throw new Error(message);
} // 'never' is the return type. nothing will ever return
// used to explicitly imply this function will never return any value

function printValue(val: string): void {
    console.log(val);
    return;
} // void is the return type

var anything: any = 7;
// any type of value can be expected


// Practice

var myNum: number = 7;
var myString: string = "Hello Universe";
var anythingOne: any = "Hey";
anythingOne = 25;
var anythingTwo: any = "Hey";
anythingTwo = [1, 2, 3, 4];
var anythingThree: any = "Hey";
anythingThree = { x: 1, y: 2 };

// There are two ways of declaring an array type
var arrayNumbersOne: number[];
arrayNumbersOne = [1,2,3,4,5,6];
var arrayNumbersTwo: Array<number>;
arrayNumbersTwo = [1,2,3,4,5,6];
var myObj: object = { x: 5, y: 10 };


function myFunction(): void {
    console.log("Hello World");
}