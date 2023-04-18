class Polyalphabetic {
    constructor(pt, key) {
        this.pt = Array.from(pt.split(" ").join(""));
        this.n = this.pt.length;
        this.Okey = key;
        this.key = Array.from(Polyalphabetic.repeatString(this.Okey, this.n).split(" ").join(""));
    }

    static repeatString = (str, length) => {
        if (length <= 0) return '';
        return str.repeat(Math.ceil(length / str.length)).slice(0, length);
    };

    charToAscii = (ch) => {
        return ch.charCodeAt(0);
    };

    asciiToChar = (av) => {
        return String.fromCharCode(av);
    };

    encrypt = () => {
        this.ct = [];
        for (let i = 0; i < this.n; i++) {
            this.ct.push(this.asciiToChar(((this.charToAscii(this.pt[i]) - 97 + this.charToAscii(this.key[i]) - 97) % 26) + 97));
        }
        console.log(this.ct.toString().split(",").join(""));
    }
}

const pc = new Polyalphabetic("she is listening", "pascal");
pc.encrypt();
