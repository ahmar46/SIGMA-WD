console.log("Hello World 01");
console.log("Hello World 02");

setTimeout(() => {
  console.log("Hello after 2 seconds");
}, 2000);

setTimeout(() => {
  console.log("Hello after 3 seconds");
}, 3000);

console.log("Hello World 03");

const callback = (arg) => {
  console.log(arg);
};

const loadScript = (src, callback) => {
  let sc = document.createElement("script");
  sc.src = src;
  sc.onload = callback("Ahmar");
  document.body.appendChild(sc);
};

loadScript(
  "https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.21/lodash.min.js",
  callback
);
