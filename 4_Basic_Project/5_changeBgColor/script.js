

const randomColor = function(){
    const hex = "0123456789ABCDEF";
    let s = "#";
    for(let i=0; i<6; i++){
        s += hex[Math.floor(Math.random()*16)];
    }
    return s;
}
let id;
console.log(randomColor());
document.querySelector("#start").addEventListener("click", function(){
    if(!id){
        id = setInterval(change, 1000);
    }
    function change(){
        document.body.style.backgroundColor = randomColor();
    }
});

document.querySelector("#stop").addEventListener("click", function(){
    clearInterval(id);
    id = null;
});
