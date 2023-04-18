const readline = require('readline-sync');

class Floyd {
    constructor(n) {
        this.n = n;
        this.matrix = Array(this.n + 1).fill().map(() => Array(this.n + 1).fill(0));
    }

    display() {
        console.table(this.matrix);
    }

    takeInput() {
        for (let i = 1; i <= this.n; i++) {
            for (let j = 1; j <= this.n; j++) {
                this.matrix[i][j] = Number(readline.question(`enter for ${i} ${j} \n`));
            }
        }
    }

    floyd() {
        for (let k = 1; k <= this.n; k++) {
            for (let i = 1; i <= this.n; i++) {
                for (let j = 1; j <= this.n; j++) {
                    this.matrix[i][j] = Math.min(this.matrix[i][j], (this.matrix[i][k] + this.matrix[k][j]));
                }
            }
        }
    }
}

const floyd = new Floyd(4);
floyd.takeInput();
floyd.floyd();
floyd.display();
