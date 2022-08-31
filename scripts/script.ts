// <get elemets
const playGround: Element | null = document.querySelector(".playGround");
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
