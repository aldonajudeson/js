// let a 
// console.log("Hello World");
// console.log(typeof(a));
// a = 10;
// console.log(typeof(a));
// a= "Hello";
// console.log(typeof(a));
// console.log(document);



// const pi=2.14;
// {
//     const pi=2.14   
//     console.log(pi);
// }
// {
//     const pi=3.14;
//     console.log(pi);
    
// }
// console.log(pi);


// let a=10;
// const pi=3.14
// var Sname = "John Doe";

// console.log(a);
// console.log(pi);
// console.log(Sname);



// let a;
// a=10+11;
// console.log(a);


// {
//     let a=16;
//     console.log(a);

// }

// var a=10;

// var a=5;

// {
//     var a=15;
//     console.log(a);
// }
// console.log(a);


// function function_name(name,place,number) 
// {
//     name? console.log("Hi",name): console.log("Hi user");
//     place? console.log("You are from",place): console.log("You are from an unknown place");
//     number? console.log("Your number is ",number): console.log("No number");
    
    
    
// }

// function_name("Aldona", "Kochi","9947270116");
// function_name("Asif", "","9961045596");
// function_name("Java","kochi","9947581116");
// function_name("CSS");
// function_name("Python");


// let a="2";
// let b=2;

// a==b ? console.log("Equal") : console.log("Not Equal");

// let a="2";
// let b=2;
// a===b ? console.log("Equal") : console.log("Not Equal");


// let a=10;
// let b=15;
// console.log(a);

// console.log(++a);
// console.log(++a);
// console.log(a--);
// console.log(--a);
// console.log(a>b);
// console.log(a<b);
// console.log(b<=a);
// console.log(a=="a");
// console.log(a===a);



// let a=0
// if (a > 0) {
//     console.log("Positive");
// }
// else if(a<0){
//     console.log("Negative");  
// }
// else{
//     console.log("Zero is neither positive nor negative");
    
// }



// let a=15.020;
// if(a===0){
//     console.log(a,"is zero");
// }
// else if (a%2===0) {
//     console.log(a,"is even number");
// }
// else if(a%2===1){
//     console.log(a,"is odd number");
// }
// else{
//     console.log("Not a whole number");
    
// }
    
// console.log(false+4);


// let score=150;

// if (score<=100 && score>=90){
//     console.log("A+");
// }
// else if(score<90 && score>=80){
//     console.log("A");
// }
// else if(score<80 && score>=70){
//     console.log("B+");
// }
// else if(score<70 && score>=60){
//     console.log("B");
// }
// else if(score<60 && score>=50){
//     console.log("C+");
// }
// else if(score<50 && score>=40){
//     console.log("C");
// }
// else if(score<40){
//     console.log("Failed");
// }
// else{
//     console.log("Enter a valid score");
    
// }

// console.log("Hello world");

// let sum=0;
// for(let i=1; i<=10; i++){
//     sum=sum+i; 
//     console.log(i+"+");
// }
// console.log(sum);

// let std1=["Aldona","1","Kochi",8714373961]
// let std2=["Asif","2","Kochi",9961045596]
// let std3=["Ahiya","3","Trivandrum",9977884455]

// let students=[std1,std2,std3]

// console.log(students[1][0]);

// let std1={
//     sname:"Aldona",
//     place:"Kochi",
//     admNo: 1
// }

// let std2={
//     sname:"Asif",
//     place:"Kochi",
//     address: {
//         home:{name:"Skyline",pin:682014,dt:"ekm",landmark:"near south railway station"},
//         work:{name:"Aesthetix,geocenter",pin:682005,dt:"ekm",landmark:"near holiday inn vytila"}
//     },
//     phone:[9947270116,9947581116]
// }

// let std3={
//     sname:"Ahiya",
//     place:"Trivandrum",
//     address: {
//         home:{name:"Trivandrum",pin:695862,dt:"tvm",landmark:"Tvm"},
//         work:{name:"Trivandrum",pin:695862,dt:"tvm",landmark:"Tvm"}
//     },
//     phone: [9988774455,9966558866]
// }
// let students=[std1,std2,std3]
// console.log(students[1].address.work);
// console.log(students[2].phone);

// let a=["violet","indigo","blue","green","yellow","orange","red"]
// function callMyName() {
//     for(let i=0; i<a.length; i++)
//      setTimeout(function(){document.getElementById("JS").style.color=a[i];},i*250);
//     setTimeout(callMyName,1750);
   
// }
    // function callMyName(){
    //         setTimeout(function(){document.getElementById("bg").style.color="white"})
    //         setTimeout(function(){document.getElementById("bg").style.backgroundColor="black"})
    // }


    function callMyName(){
        if(document.getElementById("bg").style.backgroundColor==="black"){
            document.getElementById("bg").style.color="black";
            document.getElementById("bg").style.backgroundColor="white"
            document.getElementById("image").src="/images/istockphoto-1317323736-612x612.jpg"
            
        }
        else{
            document.getElementById("bg").style.color="white";
            document.getElementById("bg").style.backgroundColor="black";
            document.getElementById("image").src="/images/istockphoto-1419410282-612x612.jpg"
        }
    }




    // function callMyName(){

    // }




// setTimeout(alert("timeout"),3000);
// setInterval(alert("interval"),3000);


    // console.log(document.getElementById("HTML"));
    // console.log(document.getElementsByTagName("h1"));
    // console.log(document.getElementsByClassName("planguage"));


    