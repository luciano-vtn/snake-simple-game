let canvas = document.getElementById("snakeGame");
let context = canvas.getContext("2d");
let box = 32;

function creatBG() {
    context.fillStyle = "ligthgreen";
    context.fillRect(0, 0, 16 * box, 16 * box);
}
 
creatBG();