// arrays
// Shallow copy and deep copy
// shallow copy: whose properties share the same references. yani jo b change kry ga original array me he change hoga
// deep copy: whose properties do not share the same refernces.

// const myArr = [0,1,2,3,4,5]
// console.log(myArr[0]);

// const myHeroes = ["Ronaldo", "Pepe"]
// const myArr2 = new Array(1,2,3,4)

// Array Methods
//const myArr = [0,1,2,3,4,5]
// push values ko add krdeta hy, pop kisi b last value ko delete krdeta hy
// myArr.push(6)
// myArr.push(7)
// myArr.pop()

//myArr.unshift(9)
// myArr.shift(9)
//console.log(myArr);
// console.log(myArr.includes(9));
// console.log(myArr.indexOf(9));

// const newArr = myArr.join()
// console.log(newArr)
// console.log(typeof newArr)

//slice, splice
const myArr = [0,1,2,3,4,5]
console.log("A", myArr);

const myn1 = myArr.slice(1, 3)
console.log(myn1);

console.log("B", myArr);

const myn2 = myArr.splice(1,3)
console.log("C", myArr);
console.log(myn2);