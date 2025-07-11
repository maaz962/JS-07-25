// object ko declare krny ky 2 tariqy hn, 1.literal 2.constructor ki tarah.
// Singleton : koi b constructor sy object bnaty hn to singleton object banta hy, ye apni tarah ka ik he object hy.
//literals ko declare krty hn to singleton nai banta.
//Object Literals:

// Object.create

// myArr=["m", "z"]
// myArr[1]


const mySym = Symbol("keys1")


const JsUser = {
    // key : value
    name : "maaz",
    "full name": "maaz arif",
    [mySym]: "myKey1",
    age : 18,
    email: "maaz@chatgpt.com",
    location: "Punjab",
    isLoggedIn: false,
    lastLoginDays: ["Mon", "Sat"]
}

//ye sai tariqa nai hy.
// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);

//console.log(JsUser.mySym);
//console.log(typeof JsUser.mySym);
//console.log(JsUser[mySym]);

JsUser.email = "Maaz@google.com"
//Object.freeze(JsUser)
JsUser.email = "Muneeb@gmail.com"
//console.log(JsUser)


JsUser.greeting = function(){
    console.log("Hello JS User");
}
JsUser.greetingTwo = function(){
    console.log(`Hello Js User, ${this.name}`)
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());