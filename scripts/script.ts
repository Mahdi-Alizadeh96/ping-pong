// <get elemets
const playGround: Element | null = document.querySelector(".playGround");
const startBtn = document.querySelector("button");
// get elemets>

// <create board
    // <create columns
        let x: number;
        for(x = 0; x < 20 ; x++) {
            // <create row
                const row: HTMLDivElement = document.createElement('div');
                row.className = "row";
                row.id = `y${x+1}`
                playGround?.appendChild(row);
                let i: number;
                for(i = 0 ; i < 31 ; i++) {
                    const cell: HTMLDivElement = document.createElement("div"); // create one cell
                    // <initial styles for cell
                    cell.className = "cell"
                    cell.id = `x${i+1}`
                    // initial styles for cell>
                    row?.appendChild(cell);
                }
            // create row>
        }
    // create columns>
// create board>

// <ball motion
    
    startBtn?.addEventListener("click" ,() => {
        setInterval(ballAction ,100);
        startBtn.style.display = "none";
    });
    

    let ballYPosition: number = 10;
    let ballXPosition: number = 16;
    let motionX: boolean = false // for left to right motion its false and for right to lef its true
    let motionY: boolean = false // for up to down its false and for down to up its true

    function ballAction() {

        const getAllCells = document.querySelectorAll(".cell"); // get all cells
        getAllCells.forEach(item => item.classList.remove("ball")); // remove ball class from all cells
        const ballPositon: Element | null = document.querySelector(`#y${ballYPosition} > #x${ballXPosition}`); // position of ball;

        if(!motionX && !motionY) {
            if (ballYPosition === 20) {
                motionY = true;
            } else if(ballXPosition === 31) {
                motionX = true;
            } else {
                ballYPosition++;
                ballXPosition++;
            }
        }
        if(!motionX && motionY) {
            if(ballXPosition === 31) {
                motionX = true;
            } else if (ballYPosition === 1) {
                motionY = false;
            } else {
                ballYPosition--;
                ballXPosition++;
            }
        }
        if(motionX && motionY) {
            if(ballYPosition === 1) {
                motionY = false
            } else if (ballXPosition === 1) {
                motionX = false;
            } else {
                ballYPosition--;
                ballXPosition--;
            }
        }
        if(motionX && !motionY) {
            if (ballXPosition === 1) {
                motionX = false;
            } else if (ballYPosition === 20) {
                motionY = true;
            } else {
                ballYPosition++;
                ballXPosition--;
            }
        }


        ballPositon?.classList.add("ball"); // create ball
    }

// ball motion>