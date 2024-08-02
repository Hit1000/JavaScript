// //for of 

// const arr = [1,1,3,4,5,2];
// for (const i of arr) {
//     // console.log(i);
// }

// //maps

// const map = new Map();
// map.set('in', "India");
// map.set('usa', "united");
// map.set("fr", "france");

// for (const i of map) {
//     console.log(i);
// }
// for (const [key, value] of map) {
//     console.log(`${key} and ${value}`);
// }

// // objects

// const my = {
//     js: 'javascript',
//     cpp: "c++",
//     rb: "ruby",
//     swift: "swift by apple"
// }
// for (const key in my) {
//     console.log(key, my[key]);
// }

// //forEach

const coding = [1,2,3,4,5,7,6,8,9,10];
const n=[];
coding.forEach((i,j)=>{
    n.push(i);
    console.log(i,j);
})
console.log(n);

