//Immediately Invoked Function Expressions(IIFE)

//foran kisi func ko chalany ky liye or, global scope ky pollution ko htany ky liye iife ka use krty hn.
//aik func invoke to ho gya pr usy pta nai hy k rukna kaha hy , usko rokny ky liye hm (;) ka use krty hn.

// function chai(){
//     console.log(`DB CONNECTED`);  
// }
// chai()

//()()

//named IIFE
(function chai(){
    console.log(`DB CONNECTED`);  
})();


//Unnammed IIFE
// ( () => {
//     console.log(`DB CONNECTED TWO`);
// })();


( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
})("Maaz");