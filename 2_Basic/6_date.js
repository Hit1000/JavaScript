let mydate = new Date();
console.log(mydate.toString());


let newdate = new Date();
console.log(newdate.toLocaleString('default',{
    weekday:"short"
}))
console.log(newdate);