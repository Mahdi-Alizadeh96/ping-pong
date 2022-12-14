// <get elemets
var playGround = document.querySelector(".playGround");
var startBtn = document.querySelector("button");
var leftScore = document.querySelector(".leftScore");
var rightScore = document.querySelector(".rightScore");
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
startBtn === null || startBtn === void 0 ? void 0 : startBtn.addEventListener("click", function () {
    setInterval(ballAction, 135);
    startBtn.style.display = "none";
});
var ballYPosition = 10;
var ballXPosition = 2;
var motionX = false; // for left to right motion its false and for right to lef its true
var motionY = false; // for up to down its false and for down to up its true
var leftScorePoint = 0;
var rightScorePoint = 0;
function ballAction() {
    var getAllCells = document.querySelectorAll(".cell"); // get all cells
    getAllCells.forEach(function (item) { return item.classList.remove("ball"); }); // remove ball class from all cells
    var ballPositon = document.querySelector("#y".concat(ballYPosition, " > #x").concat(ballXPosition)); // position of ball;
    function rightRaketAction() {
        var _a;
        if ((_a = document.querySelector("#y".concat(ballYPosition, " > #x31"))) === null || _a === void 0 ? void 0 : _a.classList.contains("rightRaket")) {
            motionX = true;
        }
        else {
            leftScorePoint++;
            leftScore.innerHTML = String(leftScorePoint);
            ballYPosition = 10;
            ballXPosition = 2;
            createRaketsAfterPoints(); // create raket again
        }
        ;
    }
    ;
    function leftRaketAction() {
        var _a;
        if ((_a = document.querySelector("#y".concat(ballYPosition, " > #x1"))) === null || _a === void 0 ? void 0 : _a.classList.contains("leftRaket")) {
            motionX = false;
        }
        else {
            rightScorePoint++;
            rightScore.innerHTML = String(rightScorePoint);
            ballYPosition = 10;
            ballXPosition = 30;
            createRaketsAfterPoints(); // create raket again
        }
        ;
    }
    ;
    // <create Rakets After Points
    function createRaketsAfterPoints() {
        rightRocketYposition = 10;
        leftRocketYposition = 10;
        removeLeftRaket();
        removeRightRaket();
        handleMotionLeftRaket();
        handleMotionRightRaket();
    }
    // create Rakets After Points>
    if (!motionX && !motionY) {
        if (ballYPosition === 20) {
            motionY = true;
        }
        else if (ballXPosition === 31) {
            rightRaketAction();
        }
        else {
            ballYPosition++;
            ballXPosition++;
        }
    }
    if (!motionX && motionY) {
        if (ballXPosition === 31) {
            rightRaketAction();
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
            leftRaketAction();
        }
        else {
            ballYPosition--;
            ballXPosition--;
        }
    }
    if (motionX && !motionY) {
        if (ballXPosition === 1) {
            leftRaketAction();
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
// <left side raket
// <create left raket
var leftRocketYposition = 10;
function handleMotionLeftRaket() {
    var leftRaketCell1 = document.querySelector("#y".concat(leftRocketYposition + 1, " > #x1"));
    var leftRaketCell2 = document.querySelector("#y".concat(leftRocketYposition, " > #x1"));
    var leftRaketCell3 = document.querySelector("#y".concat(leftRocketYposition - 1, " > #x1"));
    leftRaketCell1 === null || leftRaketCell1 === void 0 ? void 0 : leftRaketCell1.classList.add("leftRaket");
    leftRaketCell2 === null || leftRaketCell2 === void 0 ? void 0 : leftRaketCell2.classList.add("leftRaket");
    leftRaketCell3 === null || leftRaketCell3 === void 0 ? void 0 : leftRaketCell3.classList.add("leftRaket");
}
handleMotionLeftRaket();
// create left raket>
document.addEventListener("keypress", function (e) {
    if (motionX) {
        if (e.key === "w") {
            removeLeftRaket();
            if (leftRocketYposition === 2) {
                handleMotionLeftRaket();
            }
            else {
                leftRocketYposition--;
                handleMotionLeftRaket();
            }
            ;
        }
        ;
        if (e.key === "s") {
            removeLeftRaket();
            if (leftRocketYposition === 19) {
                handleMotionLeftRaket();
            }
            else {
                leftRocketYposition++;
                handleMotionLeftRaket();
            }
        }
        ;
    }
    ;
});
function removeLeftRaket() {
    var getAllCells = document.querySelectorAll(".cell"); // get all cells
    getAllCells.forEach(function (item) { return item.classList.remove("leftRaket"); }); // remove ball class from all cells
}
;
// left side raket>
// <righr side raket
// <create right raket
var rightRocketYposition = 10;
function handleMotionRightRaket() {
    var rightRaketCell1 = document.querySelector("#y".concat(rightRocketYposition - 1, " > #x31"));
    var rightRaketCell2 = document.querySelector("#y".concat(rightRocketYposition, " > #x31"));
    var rightRaketCell3 = document.querySelector("#y".concat(rightRocketYposition + 1, " > #x31"));
    rightRaketCell1 === null || rightRaketCell1 === void 0 ? void 0 : rightRaketCell1.classList.add("rightRaket");
    rightRaketCell2 === null || rightRaketCell2 === void 0 ? void 0 : rightRaketCell2.classList.add("rightRaket");
    rightRaketCell3 === null || rightRaketCell3 === void 0 ? void 0 : rightRaketCell3.classList.add("rightRaket");
}
handleMotionRightRaket();
// create right raket>
document.addEventListener("keypress", function (e) {
    if (!motionX) {
        if (e.key === "8") {
            removeRightRaket();
            if (rightRocketYposition === 2) {
                handleMotionRightRaket();
            }
            else {
                rightRocketYposition--;
                handleMotionRightRaket();
            }
        }
        if (e.key === "2") {
            removeRightRaket();
            if (rightRocketYposition === 19) {
                handleMotionRightRaket();
            }
            else {
                rightRocketYposition++;
                handleMotionRightRaket();
            }
        }
    }
    ;
});
function removeRightRaket() {
    var getAllCells = document.querySelectorAll(".cell"); // get all cells
    getAllCells.forEach(function (item) { return item.classList.remove("rightRaket"); }); // remove ball class from all cells
}
;
// right side raket>
