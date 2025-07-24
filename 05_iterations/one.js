// For loop

// const cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];
// let text = "";
// for(let i = 0; i<cars.length; i++){
//     text += cars[i] + "\n";
// }
// console.log(text);


// // 1.Print numbers from 1 to 10
// for(let i=0; i<=10; i++){
//     console.log(i);
    // }


// // 2. Print even numbers from 2 to 20
// for(let i=2; i<=20; i+=2){
//     console.log(i);
//     }


// // 3. Print all elements of an array
// const fruits = ["apple", "banana", "mango", "orange"];
// for(let i=0; i<fruits.length; i++){
//     console.log(fruits[i]);
//     }


// // 4. Calculate the sum of numbers from 1 to 100
// let sum = 0;
// for(let i = 1; i<=100; i++){
//     sum+=i;
//     }
// console.log("Sum:", sum);
// // Sum = n(n + 1) / 2
// //      = 100 * 101 / 2
//  //     = 5050



// // Reverse a string using a for loop
// let str = "javascript";
// let reversed = "";
// for(let i = str.length - 1; i >= 0; i--){
//     reversed += str[i];
// }
// console.log(reversed);


// // 6. Find the maximum number in an array
// const nums = [10, 24, 32, 5, 67, 3];
// let max = nums[0];
// for(let i=1; i<nums.length; i++){
//     if(nums[i] > max){
//         max = nums[i];
//     }
// }
// console.log("Max:", max);


// // 7. Check if a number is prime
// const number = 29;
// let isPrime = true;
// if(number <= 1) isPrime = false;

// for(let i=2; i<= Math.sqrt(number); i++){
//     if(number % i === 0){
//         isPrime = false;
//         break;
//     }
// }
// console.log(number + (isPrime ? " is Prime " : " is not Prime"));


// // 8. Print a pyramid pattern of stars
// let rows = 5;
// for(let i = 1; i<= rows; i++){
//     let pattern = "";
//     for(let space = 1; space<= rows-i; space++){
//         pattern += " ";
//     }
//     for(let star = 1; star <= 2*i-1; star++){
//         pattern += "*";
//     }
//     console.log(pattern);   
// }


// // 9.Reversed Payramid
// let rows = 5;
// for(let i = rows; i>=1; i--){
//     let pattern = "";
//     for(let space=1; space< rows-i; space++){
//         pattern += " ";
//     }
//     for(let star=1; star<=2*i-1; star++){
//         pattern += "*";
//     }
//     console.log(pattern);
    
// }


// // 10. Print Fibonacci Series up to 10 terms
// let n=10;
// let a = 0, b = 1;
// for(let i=0; i<n; i++){
//     console.log(a);
//     let next = a+b;
//     a=b;
//     b=next;
// }
// // The Fibonacci sequence is a series of numbers where:
// // Each number = sum of the two previous numbers.
// // 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...
// // a → current number
// // b → next number
// // | i | a  | b  | next = a + b |
// // | - | -- | -- | ------------ |
// // | 0 | 0  | 1  | 1            |
// // | 1 | 1  | 1  | 2            |
// // | 2 | 1  | 2  | 3            |
// // | 3 | 2  | 3  | 5            |
// // | 4 | 3  | 5  | 8            |
// // | 5 | 5  | 8  | 13           |
// // | 6 | 8  | 13 | 21           |
// // | 7 | 13 | 21 | 34           |
// // | 8 | 21 | 34 | 55           |
// // | 9 | 34 | 55 | 89           |


// 11. Count vowels in a string
const str = "JavaScript is Awesome";
let count = 0;
for(let i=0; i<str.length; i++){
    if("aeiouAEIOU".includes(str[i])){
        count++;
    }
}
console.log("Vowel count:", count);
