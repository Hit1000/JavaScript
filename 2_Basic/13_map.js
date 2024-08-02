const my = [1,3,5,6,7,8,9];

n = my.map( (i) => (i*10));
n = my                                   // chaining mapping
    .map( (i) => (i*11))
    .map((i) => (i+2));

console.log(n);