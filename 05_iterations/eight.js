// reduce : 
// isy hn shopping cart me ziada use kry gy. isme b callback func hota, isme accumulator (ye waysay khali he declare hota hy)mil rha or current value b mil rahi hy. pehli bar chly ga to initial value chali jaye gi accumulator me, dosri bar jo b sum aye ga accumulator ka or current value ka usko accumulator me dal dy ga, 

// const myNums = [1, 2, 3]
// const myTotal = myNums.reduce( function(acc, currval) {
//         console.log(`acc: ${acc} and currval: ${currval}`);
    
//     return acc + currval
// }, 0 )


// const myNums = [1, 2, 3, 4, 5]
// const myTotal = myNums.reduce( (acc, curr) => acc+curr, 0)
// console.log(myTotal);

const shoppingCart = [
    {
        itemName : "Js course",
        price: 2999
    },
    {
        itemName : "Py course",
        price: 999
    },
    {
        itemName : "Mobile dev course",
        price: 5999
    },
    {
        itemName : "Data science course",
        price: 12999
    },
]
const priceToPay = shoppingCart.reduce( (acc, item) => acc + item.price, 0)
console.log(priceToPay);

