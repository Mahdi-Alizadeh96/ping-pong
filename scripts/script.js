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
