class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username : ${this.username}`);
    }

    static createId(){ // Ye access nhi hone de rha hai.
        return `123`
    }

}

const ankit = new User("Ankit");
ankit.logMe()
// console.log(ankit.createId());

class Teacher extends User{
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const Goenka = new Teacher("Goenka","gPL@kam");
Goenka.logMe();
console.log(Goenka.createId());