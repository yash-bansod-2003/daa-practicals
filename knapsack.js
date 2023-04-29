let n = 5;
let m = 23;
const p = [12, 14, 15, 20, 4];
const w = [8, 7, 10, 12, 4];
const r = new Array(n);

for (let i = 0; i < n; i++) {
    r[i] = p[i] / w[i];
}

r.sort().reverse();

const o = new Array(n);

for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        if (r[i] === p[j] / w[j]) {
            o[i] = j;
        }
    }
}

const np = new Array(n);
const nw = new Array(n);

for (let i = 0; i < n; i++) {
    np[i] = p[o[i]];
    nw[i] = w[o[i]];
}

const x = new Array(n).fill(0);
let u = m;

let i;
for (i = 0; i < n; i++) {
    if (nw[i] > u) break;
    x[i] = 1;
    u = u - nw[i];
}

if (i <= n) {
    x[i] = u / nw[i];
}

let sum = 0;
for (let i = 0; i < x.length; i++) {
    sum = sum + np[i] * x[i];
}
console.log('Maximum Profit ', sum);


