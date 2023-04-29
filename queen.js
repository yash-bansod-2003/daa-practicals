
class Queen {
    constructor(n) {
        this.n = n
        this.board = new Array(this.n).fill().map(() => new Array(this.n).fill(0));
    }

    display() {
        console.table(this.board);
    }

    isSafe(row, col, board) {
        //HORIZONTAL
        for (let c = 0; c < this.n; c++) {
            if (board[row][c] === 1) {
                return false;
            }
        }

        //VERTICAL
        for (let r = 0; r < this.n; r++) {
            if (board[r][col] === 1) {
                return false;
            }
        }

        //UPPER LEFT
        let r = row;
        for (let c = col; c >= 0 && r >= 0; c--, r--) {
            if (board[r][c] === 1) {
                return false;
            }
        }

        //UPPER RIGHT
        r = row;
        for (let c = col; r >= 0 && c < this.n; c++, r--) {
            if (board[r][c] === 1) {
                return false;
            }
        }

        //LOWER LEFT
        r = row;
        for (let c = col; r < this.n && c >= 0; c--, r++) {
            if (board[r][c] === 1) {
                return false;
            }
        }

        //LOWER RIGHT
        r = row;
        for (let c = col; r < this.n && c < this.n; c++, r++) {
            if (board[r][c] === 1) {
                return false;
            }
        }

        return true;
    }

    helper(board, col) {

        if (col === this.n) {
            this.display();
            return;
        }

        for (let row = 0; row < this.n; row++) {
            if (this.isSafe(row, col, board)) {
                board[row][col] = 1;
                this.helper(board, col + 1);
                board[row][col] = 0;
            }
        }
    }

    main() {
        this.helper(this.board, 0);
    }
}

const q = new Queen(4);
q.main();