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

        if(e.key === "w") {
            removeRakets();
            if(leftRocketYposition === 2) {
                handleMotionLeftRaket();
            } else {
                leftRocketYposition--;
                handleMotionLeftRaket();
            }
        }
        if(e.key === "s") {
            removeRakets();
            if(leftRocketYposition === 19) {
                handleMotionLeftRaket();
            } else {
                leftRocketYposition++;
                handleMotionLeftRaket();
            }
        };
        function removeRakets() {
            const getAllCells = document.querySelectorAll(".cell"); // get all cells
            getAllCells.forEach(item => item.classList.remove("leftRaket")); // remove ball class from all cells
        }
    })
    
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

        if(e.key === "8") {
            removeRakets()
            if(rightRocketYposition === 2) {
                handleMotionRightRaket();
            } else {
                rightRocketYposition--;
                handleMotionRightRaket();
            }
        }
        if(e.key === "2") {
            removeRakets()
            if(rightRocketYposition === 19) {
                handleMotionRightRaket();
            } else {
                rightRocketYposition++;
                handleMotionRightRaket();
            }
        }
        function removeRakets() {
            const getAllCells = document.querySelectorAll(".cell"); // get all cells
            getAllCells.forEach(item => item.classList.remove("rightRaket")); // remove ball class from all cells
        }
    })

// right side raket>


