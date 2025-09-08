var username : string = 'Malak'
// username = 21 --> not applicable
var age : number = 12
var isAdmin : boolean = true

var hobbies : Array<string> = ["reading","cooking"]
var hobbies : string[] = ["reading","cooking"]

var anyValue : any = "malak"
anyValue = 21 //Works fine like javascript(used for data i dont know its type(coming from api))
anyValue = true

//Union type
var price : number | null = 200
price = null
// price = "malak"  not applicable


//Interface contains name of properties and their types
interface Student{
    name: string,
    age?: number // (?) makes it optional
}

var student : Student = {
    name: "malak",

}

var students : Student[]= [
    {
        name: "malak",
        age: 21
    },
    {
        name: "mariam",
        age: 25
    }
]

interface info{
    address: string,
    dob: string | undefined
}

//Intersection type
var studentInfo : Student & info = {
    name: "string",
    age: 21,
    address: "Pyramids gardens",
    dob: undefined
}


var alias : {title:string, description:string}={
    title: "item1",
    description: "item111"

}

function calc(num1? : number,num2 : number = 0) : number{
    return (num1 ?? 0)+num2
}
console.log(calc(1))



class Person{
    private name: string;
    protected age: number;

    constructor(name: string,age: number){
        this.name = name;
        this.age = age
    }

    getdetails() : string{
        return `Name ${this.name}, Age ${this.age}`
    }

}


class User extends Person{
    address?: string;

    constructor(name: string,age: number,address? : string ){
        super(name,age)
        this.address= address
    }

    getUserDetails() : string{
        return `Age ${this.age}, Address ${this.address}`
    }
}

let person1= new Person('malak',21)
console.log(person1.getdetails())


let user1 = new User('malak',21)
console.log(user1.getUserDetails())




export{Person,calc}