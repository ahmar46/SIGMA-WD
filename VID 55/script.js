console.log("Hello, World!");

var a = 5;
var b = 10;
var c = "Hello, World!";

console.log(a + b + 8);
console.log(typeof a, typeof b, typeof c);


// const a1 = 6;
// a1 = a1 + 1; // This will cause an error because a1 is a constant

// let scope is limited to the block in which it is defined, or to the entire function if defined within a function.

// var scope is global or function-scoped, meaning it can be accessed anywhere within the function it is defined in, or globally if defined outside any function.

let x = "Ahmar";
let y = 25;
const p = true;
let q = undefined;
let r = null;

console.log(x, y, p, q, r);
console.log(typeof x, typeof y, typeof p, typeof q, typeof r);

// Null type is object refer to stack overflow issue
console.log(typeof null); // This will log "object" due to a historical bug in JavaScript

let o = {
    Name: "Ahmar",
    Age: 25,   
    "job code": "Developer",
    isMarried: false,
}

console.log(o);