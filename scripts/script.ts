// <get elemets
const playGround: Element | null = document.querySelector(".playGround");
const startBtn = document.querySelector("button");
const leftScore = document.querySelector(".leftScore");
const rightScore = document.querySelector(".rightScore");
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
        setInterval(ballAction ,135);
        startBtn.style.display = "none";
    });
    

    let ballYPosition: number = 10;
    let ballXPosition: number = 2;
    let motionX: boolean = false; // for left to right motion its false and for right to lef its true
    let motionY: boolean = false; // for up to down its false and for down to up its true
    let leftScorePoint: number = 0;
    let rightScorePoint: number = 0;

    function ballAction() {

        const getAllCells = document.querySelectorAll(".cell"); // get all cells
        getAllCells.forEach(item => item.classList.remove("ball")); // remove ball class from all cells
        const ballPositon: Element | null = document.querySelector(`#y${ballYPosition} > #x${ballXPosition}`); // position of ball;

        function rightRaketAction() { // action for right raket
            if(document.querySelector(`#y${ballYPosition} > #x31`)?.classList.contains("rightRaket")) {
                motionX = true;
            } else {
                leftScorePoint++;
                leftScore!.innerHTML = String(leftScorePoint);
                ballYPosition = 10;
                ballXPosition = 2;
                createRaketsAfterPoints() // create raket again
            };
        };

        function leftRaketAction() { // action for left raket
            if(document.querySelector(`#y${ballYPosition} > #x1`)?.classList.contains("leftRaket")) {
                motionX = false;
            } else {
                rightScorePoint++;
                rightScore!.innerHTML = String(rightScorePoint);
                ballYPosition = 10;
                ballXPosition = 30;
                createRaketsAfterPoints() // create raket again
            };
        };

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

        if(!motionX && !motionY) {
            if (ballYPosition === 20) {
                motionY = true;
            } else if(ballXPosition === 31) {
                rightRaketAction();
            } else {
                ballYPosition++;
                ballXPosition++;
            }
        }
        if(!motionX && motionY) {
            if(ballXPosition === 31) {
                rightRaketAction();
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
                leftRaketAction();
            } else {
                ballYPosition--;
                ballXPosition--;
            }
        }
        if(motionX && !motionY) {
            if (ballXPosition === 1) {
                leftRaketAction();
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

// <left side raket

    // <create left raket
        let leftRocketYposition: number = 10;
        
        function handleMotionLeftRaket() {
            const leftRaketCell1: Element | null = document.querySelector(`#y${leftRocketYposition + 1} > #x1`);
            const leftRaketCell2: Element | null = document.querySelector(`#y${leftRocketYposition} > #x1`);
            const leftRaketCell3: Element | null = document.querySelector(`#y${leftRocketYposition - 1} > #x1`);
            leftRaketCell1?.classList.add("leftRaket");
            leftRaketCell2?.classList.add("leftRaket");
            leftRaketCell3?.classList.add("leftRaket");
        }
        handleMotionLeftRaket();
    // create left raket>

        document.addEventListener("keypress" ,(e) => {

            if(motionX) {
                if(e.key === "w") {
                    removeLeftRaket();
                    if(leftRocketYposition === 2) {
                        handleMotionLeftRaket();
                    } else {
                        leftRocketYposition--;
                        handleMotionLeftRaket();
                    };
                };
                if(e.key === "s") {
                    removeLeftRaket();
                    if(leftRocketYposition === 19) {
                        handleMotionLeftRaket();
                    } else {
                        leftRocketYposition++;
                        handleMotionLeftRaket();
                    }
                };
            };
        });
        
        function removeLeftRaket() {
            const getAllCells = document.querySelectorAll(".cell"); // get all cells
            getAllCells.forEach(item => item.classList.remove("leftRaket")); // remove ball class from all cells
        };
    
// left side raket>

// <righr side raket

    // <create right raket
        let rightRocketYposition: number = 10;
            
        function handleMotionRightRaket() {
            const rightRaketCell1: Element | null = document.querySelector(`#y${rightRocketYposition - 1} > #x31`);
            const rightRaketCell2: Element | null = document.querySelector(`#y${rightRocketYposition} > #x31`);
            const rightRaketCell3: Element | null = document.querySelector(`#y${rightRocketYposition + 1} > #x31`);
            rightRaketCell1?.classList.add("rightRaket");
            rightRaketCell2?.classList.add("rightRaket");
            rightRaketCell3?.classList.add("rightRaket");
        }
        handleMotionRightRaket();
    // create right raket>

        document.addEventListener("keypress" ,(e) => {

            if(!motionX) {
                if(e.key === "8") {
                    removeRightRaket();
                    if(rightRocketYposition === 2) {
                        handleMotionRightRaket();
                    } else {
                        rightRocketYposition--;
                        handleMotionRightRaket();
                    }
                }
                if(e.key === "2") {
                    removeRightRaket();
                    if(rightRocketYposition === 19) {
                        handleMotionRightRaket();
                    } else {
                        rightRocketYposition++;
                        handleMotionRightRaket();
                    }
                }
            };
        });

        function removeRightRaket() {
            const getAllCells = document.querySelectorAll(".cell"); // get all cells
            getAllCells.forEach(item => item.classList.remove("rightRaket")); // remove ball class from all cells
        };

// right side raket>


