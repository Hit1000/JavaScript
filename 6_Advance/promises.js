// states of Promise
// pending - The initial state of a promise.
// fulfilled - The state of a promise representing a successful operation.
// rejected - The state of a promise representing a failed operation.

const promiseOne = new Promise(function(resolve, reject){
    // do an async task
    // db calls, cryptography, network
    setTimeout(() => {
        console.log("async task is completed");
        resolve() // now it is connected the then 
    }, 1000);
});// now promise is created 

promiseOne.then(function(){
    console.log("promise consumed");
})


new Promise(function(resolve, reject){
    setTimeout(() => {
        console.log("\nasync task 2 is completed");
        resolve() 
    }, 1000);
}).then(function(){
    console.log("promise consumed part 2");
});


const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "hitesh", email: "hiteshsingla@gmail.com"});
        console.log("\ndata give successful");
        
    }, 1000);
})

promiseThree.then(function(data){
    console.log(data);
    
})



const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({username: "hitesh", password: "123"});
        }else{
            reject("error, something went wrong");
        }
    },1000)
});

promiseFour.then((user)=>{
    console.log(user);
    return user.username;
}).then((user)=>{
    console.log(user);
}).catch(function(error){
    console.log(error);
}).finally(() => console.log("The promise is either resolved or rejected")) 

async function consumePromiseFive(){
    try {
        const response = await promiseFour
        console.log(response);
        console.log("this is async");

    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()


// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }
// getAllUsers();

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))