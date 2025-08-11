// synchronous 
console.log(" I ");

console.log(" eat ");

console.log(" Ice Cream ");

//asynchronous
console.log("I");

// This will be shown after 2 seconds

setTimeout(()=>{
  console.log("eat");
},2000)

console.log("Ice Cream")

//STEPS TO MAKE ICE CREAM
//#1 Place Order -2s
//#2 Cut the fruit -2s
//#3 Add water and ice -1s
//#4 Start machine -1s
//#5 Select COntainer-2s
//#6 Select toppings-3s
//#7 Serve Ice Cream-2s

//Store room - Backend,Kitchen-Frontend ,[order ,production]
// flow - order ,fetch ingredients, start production, serve
let stocks = {
    Fruits : ["strawberry", "grapes", "banana", "apple"],
    liquid : ["water", "ice"],
    holder : ["cone", "cup", "stick"],
    toppings : ["chocolate", "peanuts"],
};
 
let order = (fruit_name, call_production) =>{

  setTimeout(function(){

    console.log(`${stocks.Fruits[fruit_name]} was selected`)//variable.Object[array]

// Order placed. Call production to start
   call_production();
  },2000)
};

// 2nd Function

let production = () =>{

  setTimeout(()=>{
    console.log("production has started")
    setTimeout(()=>{
      console.log("The fruit has been chopped")
      setTimeout(()=>{
        console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} Added`)
        setTimeout(()=>{
          console.log("start the machine")
          setTimeout(()=>{
            console.log(`Ice cream placed on ${stocks.holder[1]}`)
            setTimeout(()=>{
              console.log(`${stocks.toppings[0]} as toppings`)
              setTimeout(()=>{
                console.log("serve Ice cream")
              },2000)
            },3000)
          },2000)
        },1000)
      },1000)
    },2000)
  },0)

};
// Trigger 👇
order(0, production)