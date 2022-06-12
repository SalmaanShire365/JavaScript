class TicTacToe {

    constructor() {
        this.board = [
            [' ',' ',' ',],
            [' ',' ',' ',],
            [' ',' ',' ',],
            

        ];
    }
    // getter for empty spaces on board

    get emptySpaces() {
        this.board = board;
        let spaces = 0;
       // iterate over each row
        for (let i = 0; i < board.length; i++) {
            const row = board.length;


            // iterate over each column in the row
            for (let j = 0; j < row.length; i++) {
                const columnVal = row[j];


                // if the value is an empty space, count it
                if (columnVal === ' ') spaces++;
               
            }

        }
        return spaces;
    }

   


  // print out board so it isn't flat 
    printBoard() {
        const board = this.board;
        console.log(`\nBoard below:`)
        for (let i = 0; i < board.length; i++) {
            console.log(board[i]);
        }
    }

}


const newGame = new TicTacToe();
newGame.printBoard();
console.log(`Spaces remaining: ${newGame.emptySpaces}`);