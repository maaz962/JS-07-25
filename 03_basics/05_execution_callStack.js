//JavaScript Execution Context : jo b file bnye hy usko JS run kesy kry gi,kesy execute kry gy.Ab run krny ky JS 2 phase me bant deti hy.
//jb b hm file me code likhty hn to pehly "global execution context" bnta he,or jaha b global EC banta hy usko refer krdia jata hy (this)variable ko,(this)variable context ko run krta hy,
//JS single threaded hy.
//1.Global execution context.
//2.Function execution context.
//3.Eval execution context.

//Code 2 phases me run krta hy. 1.Memory Creation Phase, jga allot hoti hy jo b code me varibles likhy hn unky lye, 2.Execution Phase, + - ye is phase me hota hy,


// let val1 = 10
// let val2 = 5
// function addNum(num1, num2){
//     let total = num1 + num2
//     return total
// }
// let result1 = addNum(val1, val2)
// let result2 = addNum(10,2)


//.1.Global execution -> this
//.2.Memory Phase: val1 -> undefined , val2 -> undefined , addNum -> definition , result1 -> undefined, result2 -> undefined
//.3.Execution phase : val1 <- 10 , val2 <- 5, addNum -> aik apna execution context bnaye ga, or yaha pr aik "new variable environment + execution thread" bny ga, ab yaha pr dobara memory phase or execution phase hoga,
// ----memory phase : val1 -> undefined, val2 -> undefined, total -> undefined.
// ----Execution phase : num1 -> 10, num2 -> 5, total -> 15,
// or ab ye sara return hoga global execution ko.
// jitny function bnao gy usky utny he box bany gy.
//ab ye naya execution context apna kaam krny ky baad delete b hota hy.
// 
//.3.1.---remaining part---
// result1 = 15, result2 = 12,
// result2 ky liye phr aik execution box bany ga, or yaha pr phr dobara "new variable environment + thread" bny ga, ab yaha dobara memory phase or execution phase hoga.
//---memory phase :
//---execution phase:



//Call Stack: LIFO: Last in first out.
