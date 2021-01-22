// splitwise code algo
const V = 3;

// [to ,from, money]
let E = [
  [0, 1, 100],
  [1, 2, 50],
  [2, 0, 40],
];

let netarr = [];
for (let i = 0; i < V; i++) {
  let amcredit = 0;
  let amdebit = 0;
  for (let j = 0; j < V; j++) {
    if (E[j][0] == i) {
      amdebit = amdebit + E[j][2];
    }
    if (E[j][1] == i) {
      amcredit = amcredit + E[j][2];
    }
  }
  netarr[i] = amcredit - amdebit;
}

console.log(netarr);
