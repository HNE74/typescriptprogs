var canvas;
var ctx;
var xp = 400;
var yp = 400;
var speed = 5;
function gameLoop() {
    requestAnimationFrame(gameLoop);
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, 1280, 720);
    drawCircle();
}
function drawCircle() {
    ctx.save();
    ctx.beginPath();
    ctx.strokeStyle = "red";
    ctx.lineWidth = 5;
    ctx.arc(xp, yp, 20, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fillStyle = "blue";
    ctx.fill();
    ctx.stroke();
    ctx.restore();
}
function keyboardInput(event) {
    if (event.keyCode == 37) {
        xp -= speed;
    }
    if (event.keyCode == 38) {
        yp -= speed;
    }
    if (event.keyCode == 39) {
        xp += speed;
    }
    if (event.keyCode == 40) {
        yp += speed;
    }
}
document.addEventListener("keydown", keyboardInput);
window.onload = function () {
    canvas = document.getElementById("cnvs");
    ctx = canvas.getContext("2d");
    gameLoop();
};
