// let a = 10
// const b = 20
// var c = 30

{
    // ye curly braces he scope hota hy , ye alag hy or object alag  hy.
    //in curly braces ky andr jo b likhy gy wo hy block scope.
    //or agr curly braces sy bhr jo b likhy gy wo hoga global scope
}

//var c =300
let a = 300

if(true){
let a = 10
const b = 20
var c = 30

//console.log("INNER: ", a);

}
// console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        // console.log(username);
        
    }
    // console.log(website);
   // two()
}
//one()

if(true){
    const username = "hitesh"
    if(username === "hitesh"){
        const website = " youtue"
        //console.log(username + website);
        
    }
    // console.log(website);
    
}
// console.log(username);




//++++++++++++++++++++  Interesting: Mini Hoisting      +++++++++++++++++++++++++


//console.log(addone(5));
function addone(num){
    return num + 1
}



// console.log(addTwo(5))
const addTwo = function(num){
    return num + 2
}