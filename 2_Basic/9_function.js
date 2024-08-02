// function my(){
//     console.log("hitesh");
// }
// my();



const user = {
    username: "hitesh",
    price: 999,
    welcome: function(){
        console.log(`${this.username}, welcome to the website`);
    }
}

user.welcome(); 
user.username = "sam";
user.welcome();



// Arrow functions



const chai = () => {
    console.log(this);
}
chai();

const add2 = (n1,n2) => (n1+n2);
console.log(add2(2,3));
