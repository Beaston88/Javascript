function setUserName(username){
    // Complex DB calls
    this.username = username
    console.log("Called");
}

function createUser(username,email,password){
    setUserName.call(this,username)  // To hold the reference we use call
    this.email = email
    this.password = password
}

const chai = new createUser("Chai","Chai@fb.com","123");
console.log(chai); // We are getting email and password here

 