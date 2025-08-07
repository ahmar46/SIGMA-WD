console.log("Faulty Calculator VID 61");

/*

Create a faulty calculator using JavaScript.

This faulty calculator will have the following features:
1. It will take two numbers as input.
2. it performs wrong calculations:
    + --> -
    * --> +
    - --> /
    / --> **

    It performs wrong operations 10% of the time. 

*/

let random = Math.random();
let a = prompt("Enter first number:");
let b = prompt("Enter second number:");
let c = prompt("Enter operation");

let obj = {
    "+": "-",
    "*": "+",  
    "-": "/",
    "/": "**",
}

if (random > 0.1) {
    // Perform the correct operation
    alert(`Result: ${eval(`${a} ${c} ${b}`)}`);
}

else {
    // Perform the faulty operation
    c = obj[c];
    alert(`Faulty Result : ${eval(`${a} ${c} ${b}`)}`);
}