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
//     return n1+n2;//     // return a+=n1+n2;// console.log(sum(1,2));
// console.log(sum(1,2));
// console.log(sum(1,2));

// HOF(Higher Order Function),callback(CB) function



// function HOF(func,val){
//     val%2==0 ? func():console.log("callback not called!!, so it is an odd number");    
// }
// function CB(){
//     console.log("i am callback, its even "); 
// }
// function x(){
//     console.log("I am function x");
// }
// HOF(CB,2);
// HOF(x,2);



// push and pop



// const studNames=["aldona","asif"];
// console.log(studNames);
// studNames.push("ahiya");
// console.log(studNames);
// studNames.pop();
// console.log(studNames);
// studNames.unshift("rana");
// console.log(studNames);
// studNames.shift();
// console.log(studNames);



// arrow function  ()=>{}


// console.log("timer starts !!");
// setTimeout(() => {
//     console.log("after 3s");
// }, 3000);
// const a= ()=>{
//     console.log("Arrow function");
// }
// a();





//map method


// let numbers=[1,2,3,4,5];
// let b=numbers.map(function(number,ind){
//     return number *ind;
// });
// console.log(b);
// console.log(numbers);




// filter



// let numbers=[1,2,3,4,5];
// let c=numbers.filter((number)=>{
//     return number%2!=0;
// })
// console.log(c);
// console.log(numbers);



//spread operator



// let studBase={"institute":"aesthetix", "place":"kochi"}
// stud2 ={
//     ...studBase,
//     "name": "Aldona",
//     "phone":"8714373961",
//     "district":"ernakulam"
// }
// studBase ={
//     "institute":"aesthetix edutech"

// }
// console.log(stud2);


// let arr1=["a","b","c","d"];
// arr1=[...arr1,"e","f","g"];
// console.log(arr1)



// ?? nullish coalescing


// let value=stud2.district??"no district"
// console.log(value);




// user input


// let value=prompt("Enter name");
// console.log(value);



// user input in node


// const readline = require('readline')
// rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });
// rl.write('Welcome to the interactive prompt! \n');
// rl.setPrompt('Your input: ');
// rl.prompt();

// rl.on('line', (line) => {
//     if (line.trim() === 'exit') {
//         rl.close();
//     } else {
//         console.log(`You entered: ${line.trim()}`);
//         rl.close();
//     }
// });



// callback hell


// a function side a function inside a function... a hell of functions



// synchronous - sequential execution