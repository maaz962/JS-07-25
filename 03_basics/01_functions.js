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
//console.log(loginUserMessage())







// shoping cart ky andr saman add kiye he jta hy user, apko nai pta k kitni cheezein bs apny add krna hy sbko.apko nai pta kitny arguments any waly hn to ap us lehaz sy parameters taiyar krty hn.
function calculateCartPrice(num1){
    return num1
}
//console.log(calculateCartPrice(2))
//output: 2


function calculateCartPrice(num1){
    return num1
}
//.log(calculateCartPrice(200, 400, 500))
//output: 200. isko solve krny ky lie hmary pas rest operator hota hy.


function calculateCartPrice(...num1){
    return num1
}
//console.log(calculateCartPrice(200, 400, 500))
//output: [200, 400, 500] 



function calculateCartPrice(val1, val2, ...num1){
    return num1
}
//console.log(calculateCartPrice(200, 400, 500, 2000))
//output: [500, 2000].        val1, val2, ...num1 


const user = {
    username: "maaz",
    price: 199
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
}
//handleObject(user)
//Username is maaz and price is 199.

//handleObject({
//    username : "sam",
//    price : 399
//})



const myNewArray = [200, 400, 100, 600]
function returnSecondValue(getArray){
    return getArray[1]
}
//console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,400,500,1000]));

