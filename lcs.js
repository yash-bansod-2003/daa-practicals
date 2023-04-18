
class LongestCommonSubsequence {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.length_x = this.x.length;
        this.length_y = this.y.length;
        this.matrix = Array(this.length_x + 1).fill().map(() => Array(this.length_y + 1).fill(0));
        this.arrow = Array(this.length_x + 1).fill().map(() => Array(this.length_y + 1).fill(0));
    }

    display() {
        console.table(this.matrix);
        console.table(this.arrow);
    }

    lcs() {
        for (let i = 0; i <= this.length_x; i++) {
            for (let j = 0; j <= this.length_y; j++) {
                if (i === 0 || j === 0) {
                    this.matrix[i][j] = 0;
                }
            }
        }

        for (let i = 1; i <= this.length_x; i++) {
            for (let j = 1; j <= this.length_y; j++) {
                if (this.x.charAt(i - 1) === this.y.charAt(j - 1)) {
                    this.matrix[i][j] = this.matrix[i - 1][j - 1] + 1;
                    this.arrow[i][j] = 't';
                } else {
                    this.matrix[i][j] = Math.max(this.matrix[i - 1][j], this.matrix[i][j - 1]);
                    this.arrow[i][j] = 's';
                }
            }
        }
    }
}

const lcs = new LongestCommonSubsequence('bcbbcbb', 'abcbcba');
lcs.lcs();
lcs.display();