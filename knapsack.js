const n = 5;
const m = 23;
const p = [12, 14, 15, 20, 4];
const w = [8, 7, 10, 12, 4];
const r = new Array(n).fill(0);

for (let i = 0; i < n; i++) {
    r[i] = p[i] / w[i];
}

r.sort().reverse();

const x = new Array(n).fill(0);
let u = m;

let i;
for (i = 0; i < n; i++) {
    if (w[i] > u) break;
    x[i] = 1;
    u = u - w[i];
}

if (i <= n) {
    x[i] = u / w[i];
}

console.log(x);



