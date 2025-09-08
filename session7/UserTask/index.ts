class User{
    name: string;
    email: string;

    constructor(name: string,email: string){
        this.name = name
        this.email = email
    }

    getDetails() : string{
        return `\nName: ${this.name} \nEmail: ${this.email}\n`
    }

    updateEmail(newEmail: string){
        this.email = newEmail
    }

}


var user1 = new User("Malak Sherif","malaksheri@gmail.com")
console.log(user1.getDetails())
var user2 = new User("Mariam Sherif","malaksheri@gmail.com")
user2.updateEmail("mariamsherif@gmail.com")
console.log(user2.getDetails())



