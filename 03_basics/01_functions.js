function sayMyName(){
    console.log("M");
    console.log("a");
    console.log("a");
    console.log("z");
}
//ye hy func ka reference: ye waha rahta hy
//sayMyName

//ye hy funct ka execution
//sayMyName()

//sayMyName();

//jb hm func ki definition bnaty hn or jb usme input lety hn to unko bola jta hy parameters.
                    // y hn parameters. 
// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }
// addTwoNumbers(3, 7)
//func ko jb call krwaty hn usky andr jo values hoti hn unko bola jata hy arguments.
// const result = addTwoNumbers(3, 7)
// console.log("Result: ", result);

//return ky baad kuch b print nai hota
// function addTwoNumbers(number1, number2){
//     let result = number1 + number2
//     return result
// }
// const result = addTwoNumbers(3, 5)
// console.log("Result: ", result);


function addTwoNumbers(number1, number2){
    // let result = number1 + number2
    // return result
    return number1 + number2
}
const result = addTwoNumbers(3, 5)
//console.log("Result: ", result);



// function loginUserMessage(username){
//     return `${username} just logged in`
// }
// console.log(loginUserMessage("Maaz"))



function loginUserMessage(username){
    return `${username} just logged in`
}
//console.log(loginUserMessage())
// output:undefined



function loginUserMessage(username){
    if(username === undefined){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}
// console.log(loginUserMessage())
//Please enter a username
//undefined


function loginUserMessage(username = "sam"){
    if(!undefined){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}
console.log(loginUserMessage())
