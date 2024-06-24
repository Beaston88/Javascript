const User = {
    _email : "Pikachu@ash",
    _password : "asd",

    get email(){
        return this._email.toLocaleUpperCase()
    },
    set email(value){
        this._email = value
    }
}

console.log(User.email);

const tea = Object.create(User)
console.log(tea.email);