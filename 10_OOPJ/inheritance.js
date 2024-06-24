class User{
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }

}

class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourses(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const coffee = new Teacher("Coffee","coffee@PAS","09876e");
// coffee.addCourses();

const ColdCoffee = new User("ColdCoffee");
ColdCoffee.logMe();
// ColdCoffee.addCourses() //   iska access nhi

coffee.logMe()
console.log(coffee === ColdCoffee);

console.log(coffee instanceof Teacher);
console.log(Teacher instanceof User);