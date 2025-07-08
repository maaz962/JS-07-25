// Primitive
//7 Types : String, Number, Boolean, Null, Undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3
const outsideTemp = null
const isLoggedIn = false
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId);

const bigNumber = 34535623515326245253n

// Reference(Non-Primitive)
// 3 types: Array, Objects, Functions

const heros = ["SuperMan", "SpiderMan", "BatMan"];
let myObj = {
    name: "maaz",
    age: 22,
}

const myFunction = function(){
    console.log("Hello World");
    
}

// ++++++++++++++++++++++++++++++++++++++++++++++++++++
// Memory: 2 Types: Stack(Primitive) and Heap(Non-Primitive).
let myYoutubename = "maaz.com"
let anothername = myYoutubename
anothername = "chai aur code"
console.log(myYoutubename);
console.log(anothername);


let userOne = {
    email: "maaz@google.com",
    value:1224
}
let userTwo = userOne
userTwo.email = "kj@google.com"
console.log(userOne.email);
console.log(userTwo.email);
