// for of : It lets you loop over iterable data structures such as arrays, strings, maps, nodelists, and more.
// ["", "", ""]
// [{},{},{}]


// const cars = ["BMW", "VOLVO", "Mini"];
// for(let car of cars){
//     console.log(car);
//     }

const name = "Maaz";
for(let char of name){
    console.log(char);
    }

// const arr = [1, 2, 3, 4, 5]
// for (const num of arr) {
//     console.log(num);
    // }

// const greetings = "Hello World!"
// for (const greet of greetings) {
//     console.log(`each char is ${greet}`);
//     }



//Maps : map aik object hy jo hold krta hy key value pairs. koi dublicate value isky andr nai hoti sari unique milti hn.
const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")
//console.log(map);


// for (const [key] of map) {
//     console.log(key);
//     }


// for (const [key, value] of map) {
//     console.log(key, ':-', value);
//     }


// for of, object pr nai chal rha.
// const myObj = {
//     'game1': 'NFS',
//     'game2': 'Spiderman'
// }
// for (const [key, value] of myObj) {
//    // console.log(key, ':-', value);
    
// }