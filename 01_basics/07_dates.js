// Dates
let myDate = new Date()
// console.log(myDate);            
// //2025-07-10T07:41:44.451Z

// console.log(myDate.toString());    
//Thu Jul 10 2025 07:42:35 GMT+0000 (Coordinated Universal Time)

// console.log(myDate.toDateString());    
//Thu Jul 10 2025

// console.log(myDate.toISOString());    
//2025-07-10T07:45:38.324Z

//console.log(myDate.toJSON());
//2025-07-10T07:46:54.332Z

//console.log(myDate.toLocaleDateString());
//7/10/2025

//console.log(myDate.toLocaleString());
//7/10/2025, 7:48:37 AM

//console.log(myDate.toLocaleTimeString());
//7:49:24 AM

//console.log(typeof myDate);
// object

//js ky andr month 0 sy start hoty hn, agr single digit use ho to.
// let myCreatedDate = new Date(2023, 0, 23);
// console.log(myCreatedDate.toDateString());
//Mon Jan 23 2023

// let myCreatedDate = new Date(2023, 0, 23, 5, 3);
// console.log(myCreatedDate.toLocaleString());
//1/23/2023, 5:03:00 AM
 
// let myCreatedDate = new Date("2023-01-14");
//let myCreatedDate = new Date("01-14-2025");
// console.log(myCreatedDate.toLocaleString());

// let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());

//console.log(Date.now()/ 1000);
//1752136517.896

// console.log(Math.floor(Date.now()/ 1000));
//1752136581

let newDate = new Date();
// console.log(newDate);
// console.log(newDate.getMonth());

newDate.toLocaleString('default', {
    weekday: 'long',
})