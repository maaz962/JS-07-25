//Map, chaining

//Map b aik callback func hy, ye automatically value return krta hy, isme b scope open kry gy or return nai likhy gy to undefined return kry ga,
// const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const newNums = myNumbers.map( (num) => num + 10)
//const newNums = myNumbers.map( (num) => { return num + 10})
// console.log(newNums);


// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const newNums = []
// myNums.forEach( (num) => { newNums.push(num + 10)})
// console.log(newNums);

//filter matlab jo true hoga wohi pass hoga.
//chaining : 
const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const newNums = myNumbers
                        .map( (num) => num * 10)
                        .map( (num) => num + 1 )
                        .filter( (num) => num >= 40)
console.log(newNums);


