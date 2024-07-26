let n = 200;
let a = new Number(202);
console.log(n);
console.log(a);
console.log(a.toFixed(2));

let b = 20200200000;
console.log(b.toLocaleString('en-IN'));

console.log(Number.MAX_SAFE_INTEGER);

// ========================================================
// maths

console.log(Math);

console.log(Math.random());
console.log(Math.random()*10);
console.log((Math.random()*10)+1);
console.log(Math.floor(Math.random()*10)+1);
// if want to spefiy a range
const min = 100;
const max = 120;
console.log(Math.floor(Math.random()*(max-min+1))+min);


