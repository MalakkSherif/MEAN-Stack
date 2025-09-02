
// // Function Expression
// let greeting = function(){
//     console.log("Hello World");
// }
// greeting();

// // Arrow Function
// const nameAndAge = (name,age) => {
//     console.log(`my name is ${name} and my age is ${age}`)
// }
// nameAndAge("malak",21);

// // Declaration function
// function hello(username){
//     console.log("Hello " + username);
// }

// // Declaration function
// function goodbye(username){
//     console.log("Goodbye " + username);
// }

// function greet(username,myfunc){
//     myfunc(username);
// }

// greet("malak",hello);
// greet("malak",goodbye);
// greet("malak", (username)=>console.log("Welcome " + username));
// greet("malak", function(username){
//     console.log("See you later " + username);
// })

// Callbacks
function hello(){
    console.log("Hello World");
}

setTimeout(hello, 2000);
setTimeout(()=>hello(), 2000);

set