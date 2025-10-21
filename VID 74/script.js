let button = document.getElementById("btn");

// List of all MouseEvent properties and methods:
// https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent
// button.addEventListener("click", function() {
//     alert("Button clicked!");
// });

button.addEventListener("dblclick", () => {
    document.querySelector(".box").innerHTML = "<b>Yayy you were clicked!</br>";
});

button.addEventListener("contextmenu", () => {
    document.querySelector(".box").innerHTML = "<b>Yayy you were clicked!</br>";
});