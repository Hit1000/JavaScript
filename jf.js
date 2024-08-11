function one(a){
    a(100);
}
one(function(v){
    console.log(v);
})