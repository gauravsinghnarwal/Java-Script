// Primitive

// 7 Types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggIn = false
const outsidetemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);


const bigNumber = 52522454565348654554545254n

// Reference (non primitive)

// Array, Objects, functions

const heros = ["Shaktiman", "naagraj", "doga"]  
// Array
let myobj = {
    name: "gaurav",
    age: 22,
}
// Objects

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof myFunction);


// **************************************************************************************

// Stack use in (Primitive) copy , Heap use in (Non-primitive) Reference

let myYoutubename = "Gaurav"
let anothername = myYoutubename
anothername = "CodewithGaurav"

console.log(myYoutubename);
console.log(anothername);


let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "gaurav@google.com"

console.log(userOne.email);
console.log(userTwo.email);
