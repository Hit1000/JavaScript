// Immediately Invoked Function Expressions (IIFE)

// we get problem from global scope of variable so to stop it iife is used

// named iife
(function code(){
    console.log("DB CONNECTED");
})();

//simple iife
((name)=>{
    console.log("DB CONNECTED AGAIN",name);
})("hitesh");