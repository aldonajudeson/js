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


    function login( name="user", age=18) {
        age>18 ?console.log(`Welcome ${name} !!`):console.log(`Sorry ${name}, you are not allowed`);        
    }
    // login("Aldona",20);
    login(undefined,25);
    login("Aldona",2);