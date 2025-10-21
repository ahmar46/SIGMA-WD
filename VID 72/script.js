console.log("Hello, World!");

let boxes = document.getElementsByClassName("box");
// let boxes = document.querySelector(".container").children;

function getrandomcolor(){
    let red = Math.floor(Math.random()*256);
    let green = Math.floor(Math.random()*256);
    let blue = Math.floor(Math.random()*256);
    return `rgb(${red}, ${green}, ${blue})`;
}

Array.from(boxes).forEach(e=>{
    e.style.backgroundColor = getrandomcolor();
    e.style.color = getrandomcolor();
})