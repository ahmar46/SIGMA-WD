console.log("EX 11 Factorial");

function factorial(n) {
  if (n < 0) {
    return "undefined";
  } else if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}  

console.log(factorial(4)); // Output: 120

// GPT CODE goes like:

/*

function factorial(n) {
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result = result * i;
    }
    return result;
}

console.log(factorial(5)); // Output: 120


*/