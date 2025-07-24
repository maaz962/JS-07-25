// While loop

// // 1.Write a program using a while loop to print numbers from 1 to 5.
// let i = 1;
// while(i <= 5){
//     console.log(i);
//     i++
// }


// //  2. Print even numbers from 2 to 10
// let i =2;
// while(i <= 10){
//     console.log(i);
//     i += 2;
// }


// //  3. Sum of numbers from 1 to 5
// let i = 0;
// let sum = 0;
// while(i<=5){
//     sum += i;
//     i++;
// }
// console.log("Sum:", sum);


// //  4. Countdown from 5 to 1
// let i = 5;
// while(i >= 1){
//     console.log(i);
//     i--;
// }


// //  5. Print characters of a string one by one
// let str = "Maaz-15";
// let i=0;
// while(i < str.length){
//     console.log(str[i]);
//     i++
// }


// // 6. Print multiplication table of 5
// let i =1;
// while(i<=10){
//     console.log(`5 x ${i} = ${5 * i}`);
//     i++;
// }


// // 7. Print vowels in a string.
// let str = "Javascript is awesome";
// let i = 0;
// while(i < str.length){
//     if("aeiouAEIOU".includes(str[i])){
//         console.log(str[i]);
//     }
//     i++;
// }


//The factorial of 5 = 5*4*3*2*1 = 120
// Use a while loop to find the factorial of 5
let num = 5;
let fact = 1;
while(num > 0){
    fact*=num;
    num--;
}
console.log("Factorial:", fact);
