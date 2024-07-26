const account = 13455; // cant change after declarion (like final)
let account_email = "hitesh@google.com";// it support scope of block 
var account_pass = "12345"; // it should be used in old browser 
account_city = "jagraon";// it is called automatic and dont use it 

console.log(account, account_email, account_pass, account_city);

if(true){
    var account_pass = "a;lijdf";
    let account_email = "jar.com";
}

console.table([account, account_email, account_pass, account_city])