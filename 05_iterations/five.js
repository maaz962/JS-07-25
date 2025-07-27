// for_each_loop

// Higher order function hy.
//func callback  hy to iska name nai hota, fuc ky paranthesis ky andr value ly kr aye ga ap isko parameter b kah sakty,

const coding = ["js", "ruby", "java", "python"]

// coding.forEach( function (val){
//     console.log(val);
//     })

// coding.forEach( (item)=> {
// console.log(item);
// })

// function printMe(item){
//     console.log(item);
//     }
//     coding.forEach(printMe)


// coding.forEach( (item, index, arr) => {
//     console.log(item, index, arr);
    // })


const myCoding = [
    {
        langName: 'javascript',
        langFileName: 'js'
    },

    {
        langName: 'java',
        langFileName: 'java'
    },

    {
        langName: 'python',
        langFileName: 'py'
    },
]  
myCoding.forEach( (item) => {
    console.log(item.langName);
    
})