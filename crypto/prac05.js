
class RailFence {
    constructor(pt) {
        this.pt = pt;
    }

    encrypt = () => {
        let str01 = '', str02 = '';
        for (let i = 0; i < this.pt.length; i++) {
            if (i % 2 === 0) {
                str01 += this.pt.charAt(i);
            } else {
                str02 += this.pt.charAt(i);
            }
        }

        console.log(str01 + str02);
    }
}

const rf = new RailFence("allthebestforexams");
rf.encrypt();