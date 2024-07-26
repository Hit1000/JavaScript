let a = 20;
console.log(`hello this is called back ticks ${a}`);

let s = "hitesh";
let s2 = new String("hitesh");
console.log(s.__proto__);
console.log(s.toUpperCase());
console.log(s);
console.log(s2.__proto__)


let str = "hitesh";
let num = 0;
for(let i=0; i<str.length; i++){
    if(str[i] == 'a' || str[i] == 'e' || str[i] == 'i' || str[i] == 'o' || str[i] == 'u'){
        num++;
    }
}
console.log(num);