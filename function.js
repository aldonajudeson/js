// function expression


    // const a=function(val){
    //     console.log(`hi this is a function expression, value is ${val}`);
    // }
    // a(2);
    // let b=a;
    // b();

    // IIFE


    // (function (){
    //     console.log("hi i am IIFE");
    // })()


    // function login( name="user", age=18) {
    //     age>18 ?console.log(`Welcome ${name} !!`):console.log(`Sorry ${name}, you are not allowed`);        
    // }
    // login("Aldona",20);
    // login(undefined,25);
    // login("Aldona",2);


    // return function

    // function voteEligibilty(citizen,age){
    //     if(age>18){
    //         console.log("Eligible age");
    //     }
    //     if(citizen=="Indian"){
    //         return console.log("Eligible citizen");
    //     }
    // }
    // voteEligibilty("Indian",20)


    // function sum(n1,n2){
    //     let res=n1+n2;
    //     if(res==0){
    //         return "zero"
    //     }
    //     if(res%2==0){
    //         return "even"
    //     }
    //     else
    //         return "odd"
    // }

    // let out=sum(20,10);
    // console.log(out);
    // out=sum(15,24);
    // console.log(out);
    
    // switch case

// let climate="storm"

// switch(climate){
//     case "cloudy":console.log("Might rain");
//         break;
//     case "rainy":console.log("Take umbrella");
//         break;
//     case "sunny":console.log("Take sunglasses");
//         break;
//     case "foggyy":console.log("Take flashlight");
//         break;
//     case "storm":console.log("Take cover");
//         break;
//     default:console.log("You are safe");
//         break;
// }



// try catch 


// try {
//     function div(n1,n2){
//     let res=n1/n2+n3;
//     return res;
// }
// console.log(div(10,2));
// console.log(div(15,2));
// } 
// catch (err) {
//     console.log(err.message);
// }
// console.log("Program Execution Completed!!");

// pure function

// let a=20;
// function sum(n1,n2){
//     return n1+n2;
//     // return a+=n1+n2;
// }

// console.log(sum(1,2));
// console.log(sum(1,2));
// console.log(sum(1,2));

// HOF(Higher Order Function),callback(CB) function

function HOF(func,val){
    val%2==0 ? func():console.log("callback not called!!, so it is an odd number");
    
}
function CB(){
    console.log("i am callback, its even ");
    
}
function x(){
    console.log("I am function x");
}
HOF(CB,2);
HOF(x,2);