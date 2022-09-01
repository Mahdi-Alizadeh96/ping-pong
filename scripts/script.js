// <get elemets
var playGround = document.querySelector(".playGround");
// get elemets>
// <create board
// <create columns
var x;
for (x = 0; x < 20; x++) {
    // <create row
    var row = document.createElement('div');
    row.className = "row";
    row.id = "y".concat(x + 1);
    playGround === null || playGround === void 0 ? void 0 : playGround.appendChild(row);
    var i = void 0;
    for (i = 0; i < 31; i++) {
        var cell = document.createElement("div"); // create one cell
        // <initial styles for cell
        cell.className = "cell";
        cell.id = "x".concat(i + 1);
        // initial styles for cell>
        row === null || row === void 0 ? void 0 : row.appendChild(cell);
    }
    // create row>
}
// create columns>
// create board>
// <ball motion
setInterval(function () {
    // ballAction();
}, 50);
var ballYPosition = 10;
var ballXPosition = 16;
var motionX = false; // for left to right motion its false and for right to lef its true
var motionY = false; // for up to down its false and for down to up its true
function ballAction() {
    var getAllCells = document.querySelectorAll(".cell"); // get all cells
    getAllCells.forEach(function (item) { return item.classList.remove("ball"); }); // remove ball class from all cells
    var ballPositon = document.querySelector("#y".concat(ballYPosition, " > #x").concat(ballXPosition)); // position of ball;
    if (!motionX && !motionY) {
        if (ballYPosition === 20) {
            motionY = true;
        }
        else if (ballXPosition === 31) {
            motionX = true;
        }
        else {
            ballYPosition++;
            ballXPosition++;
        }
    }
    if (!motionX && motionY) {
        if (ballXPosition === 31) {
            motionX = true;
        }
        else if (ballYPosition === 1) {
            motionY = false;
        }
        else {
            ballYPosition--;
            ballXPosition++;
        }
    }
    if (motionX && motionY) {
        if (ballYPosition === 1) {
            motionY = false;
        }
        else if (ballXPosition === 1) {
            motionX = false;
        }
        else {
            ballYPosition--;
            ballXPosition--;
        }
    }
    if (motionX && !motionY) {
        if (ballXPosition === 1) {
            motionX = false;
        }
        else if (ballYPosition === 20) {
            motionY = true;
        }
        else {
            ballYPosition++;
            ballXPosition--;
        }
    }
    ballPositon === null || ballPositon === void 0 ? void 0 : ballPositon.classList.add("ball"); // create ball
}
// ball motion>
