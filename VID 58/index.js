console.log("Hello World VID 58");


function nice  (name) {
    console.log("Hello " + name + " you are nice");
    console.log("Hello " + name + " you are great");
    console.log("Hello " + name + " you are awesome");
    console.log("Hello " + name + " you are fantastic");
}

// nice("John");
// nice("Jane");

function add(a, b) {
    return a + b;
}

result1 = add(5, 10);
result2 = add(20, 30);
result = add(result1, result2);

console.log("The result is: " + result);
console.log("The result is: " + add(100, 200));
console.log("The result is: " + add(1000, 2000));

const func = (x)=> {
    console.log("The value of x is: " + x);
}

func(10);
func(20);
func(30);