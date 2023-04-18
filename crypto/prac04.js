
class PlayFair {
    constructor(pt, key) {
        this.pt = pt;
        this.key = key;
        this.matrix = new Array(5).fill().map(() => new Array(5).fill(0));
        this.alphabets = 'abcdefghijklmnopqrstuvwxyz';
    }

    createTable = () => {
        const keySet = new Set(this.key);

        
    }

    display() {
        console.log(this.matrix);
    }
}

const pf = new PlayFair("yash", "abhi");
pf.createTable();
pf.display();