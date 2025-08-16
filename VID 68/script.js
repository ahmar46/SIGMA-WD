console.log("Script loaded successfully!");

// let boxes = document.getElementsByClassName("box");
// console.log(boxes);

// boxes[3].style.backgroundColor = "red";

// document.getElementById("red").style.backgroundColor = "red";

// document.querySelector(".box").style.backgroundColor = "blue"; // only the first box will be blue


document.querySelectorAll(".box").forEach((e) => {
  e.style.backgroundColor = "green";
});