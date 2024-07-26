let sym = Symbol("my key");

const o = {
    name : "hitesh",
    [sym] : "this is value",
    age : 21,
    address : "jagraon"
}
console.log(o[sym]);
console.log(o[sym]);4
Object.freeze();// after this no value of object can be changed