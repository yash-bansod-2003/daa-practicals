
const pt = "yash";
let ct = [];

// console.log("XOR Operation");
// for (let i = 0; i < pt.length; i++) {
//     ct.push(pt.charAt(i).charCodeAt(0).toString(2) ^ 127);
// }

// let newct = ct.map(bin => String.fromCharCode((parseInt(bin, 2))));
// console.log(newct);


console.log("And Operation");
for (let i = 0; i < pt.length; i++) {
    ct.push(pt.charAt(i).charCodeAt(0).toString(2) & 127);
}

let newct = ct.map(bin => parseInt(bin, 2));
console.log(newct);
