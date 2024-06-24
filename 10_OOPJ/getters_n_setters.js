class User{
    constructor(email,password){
        this.email = email
        this.password = password
    }
    get password(){
        return this._password.toUpperCase();
    }
    set password(value){
        this._password = value;
    }

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }
}
const ankit = new User("pikachu@ash","abc")

console.log(ankit.password);
console.log(ankit.email);  // _email alag hai email se