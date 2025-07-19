// let message = "Hello, Javascript!";
// console.log(message);


const user ={
    username: "maaz",
    price:999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        // console.log(this);
        
    }
}
// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()
// //this ka mtlab hy current context.context matlab values. koi b variable ko access krny ky liye.
// console.log(this);


// function chai(){
//     console.log(this);   
// }
//chai()

//ye (this)context sirf object ky andr he kaam kr ra hy, function me ye nai kaam kr rha

// function chai(){
//     let username = "maaz"
//     console.log(this.username);   
// }
// chai()


// const chai = function(){
//     let username = "maaz"
//     console.log(this.username);   
// }
// chai()


// const chai = () => {
//     let username = "maaz"
//     console.log(this.username);   
// }
// chai()


// const chai = () => {
//     let username = "maaz"
//     console.log(this);   
// }
// chai()
////{}


// const addTwo = (num1, num2) => {
//     return num1 + num2
// }


//explicit return : jb ap return keyword use krty hn.
//Implicit return : meny man lia apko likhny ki zarorrat nai hy
// const addTwo = (num1, num2) => num1 + num2


// const addTwo = (num1, num2) => (num1 + num2)

//object return krna to wo kesy kro gy, usko return krny ky liye curly braces use krna pry ga, or usy use kr ky undefined jawab aye ga, to hm usy brackets me likhy gy.
const addTwo = (num1, num2) => ({username: "Maaz"})

console.log(addTwo(3,4));