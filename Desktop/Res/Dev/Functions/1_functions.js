//------------------------------------------------------------------------------------
// sample 1:

// function sayHello(param){      // function declaration
//     console.log("hello",param);
// }

// sayHello({Name:"rahul",age:23});  // Function call or function invocation
// console.log(6,sayHello);  // Function call ❌ , just print the function Name

// let rv = sayHello("Rubik cube");  // Function call is done, but it doesn't returned anything so undefined is stored in rv
// console.log(rv);  //  undefined
// console.log(sayHello("Rubik cube")); // Function call is done, but it doesn't returned anything so undefined is printed in console

//------------------------------------------------------------------------------------

//------------------------------------------------------------------------------------
// sample2:

// function sayHelloWithReturn(param){
//     console.log("Hello",param);
//     return "Work is done";
// }
// let res = sayHelloWithReturn("Sham");
// console.log(res);  // work is done

//------------------------------------------------------------------------------------

//------------------------------------------------------------------------------------
// Sample 3: Problem:  What will print  

// isReal();    
// function isReal(){
//     console.log("I am Real -upper");
// }
// isReal();
// function isReal(){
//     console.log("I am Real -Lower");
// };
// isReal();

//OUTPUT: All the times lower function will get called
//Insights: So thats why js can't have functiong overloading 

//-------------------------------------------------------------


//-------------------------------------------------------------
// Sample 4: Function expression vs function declaration
// Function Expression: when function is stored in a variable
// var fun = function fun(){
//     console.log("I am fun");
// }

// // Function declaration : when function is directly declared
// function gun(){
//     console.log("I am gun");
// }
//--------------------------------------------------------------------------------------------------

//--------------------------------------------------------------------------------------------------
//Sample 4: Anything can be passed as parameter 

// function demo(param){
//     console.log("Printed:",param);
// }

// These are passed by value
// demo(5); // Number
// demo("Rahul"); // String
// demo('a'); // char
// demo(true);  // boolean

// These are passed by reference
// demo([10,20,30,40]); // array
// demo({name:"obama" ,age:51}); // object
// Even functions are referenced types

//------------------------------------------------------------------------------------------------

//-----------------------------------------------------------------------------------------------
//Sample 5: Function can also be passed as an argument - know as HIGH ORDER FUNCTION

// function demo(param){
//     console.log("Printing ",param);
// }

// function random(){
//     console.log("That day was awesome");
// }

// demo(random); // Printing  [Function: random]
// demo(function(){    
//     console.log("sonali yadav");  
// });  //Printing  [Function (anonymous)]
//----------------------------------------------------------------------------------------------

//----------------------------------------------------------------------------------------------
//sample 5:  This is High Order functon - passing function as argument in another function 

// function demo(param){
//     console.log("Printing ",param);
//     param();   // calling the function that is passed as an argument
// }

// function random(){
//     console.log("That day was awesome");
// }

// demo(random);

// op: Printing [Function: random]
//     That day was awesome
//----------------------------------------------------------------------------------------------

//----------------------------------------------------------------------------------------------
// Sample 6: Function Expression 
// let secondName = function OriginalName(){
//     console.log("Function is called");
// };

// secondName(); // Allowed  - basically reference of Originalname is stored in secondName
// OriginalName();  // Not allowed ❌
//----------------------------------------------------------------------------------------------

//----------------------------------------------------------------------------------------------
// sample 7: IIFEE - Immediately Invoked function expression 
//                  Means definition and call at once

// console.log("work 1 is completed");

// (function work2(){  // IFFEE as work2 function
//    console.log("work 2 is completed"); 
// })();// calling while definition - at once

// (function(){      // IFFEE as anyonymous function
//     console.log("work 3 is completed"); 
//  })();

//  console.log("All work is done");
//------------------------------------------------------------------------------------------------

//-----------------------------------------------------------------------------------------------
//Sample 8: var vs let

// var - can redeclare, reinitialize,
//       can access before declaration
//       have function scope

// var a=10;
// var a=30;
// console.log(a);

// function fn(){
//    console.log("Inside function");
//    if(5===5){
//       var val = 50;
//    }
//    console.log(val);   // Allowed
// }
// fn();
// console.log(val);  // Not allowed , val has scope only within fn()

//                          ---------------------------------------
// let - Redeclare❌, Reinitialize ✔
//       Access before declaration ❌
//       has block scope

// console.log(x);   // Example of temporal dead zone  -  It occurs when we access let or const variable before declaration
// let x = 12;

// let a=10;
// let a=30;  // Not Allowed

// function fn(){
//    if(true){
//       let val = 16;
//    }
//    console.log(val);   // Not Allowed , let has block scope only
// }

// var a=10;
// let a=30;
// console.log(a);  // Not Allowed

// var a=10;
// if(true){
//    let a=30;      // Allowed
//    console.log("Inner",a);
// }
// console.log("Outer",a);


// let a=10;
// if(true){
//    var a=30;      // Not Allowed, because var has function scope
//    console.log("Inner",a);
// }
// console.log("Outer",a);

//--------------------------------------------------------------------------------------------------------------------

//--------------------------------------------------------------------------------------------------------------------
//Sample 8: objects having function

// let obj = {
//     fun: function(){
//         console.log("Inside fun function i.e "+ obj.name + " with id: "+obj.id);
//     },
//     name: "Raghu saha",
//     id: 34
// }

// obj.fun();

//--------------------------------------------------------------------------------------------------------------------

//--------------------------------------------------------------------------------------------------------------------
//Sample 9: Argument keyword in a function

// function fun (x,y){
//     console.log(x,y);
//     console.log(arguments);
//     let sum = 0;
//     for(let i=0;i<arguments.length;i++){   
//         sum = sum + arguments[i];
//     }
//     console.log(sum);

//     // let redSum = arguments.reduce((pv,cv)=>{    // Directly Not Possible ❌ 
//     //     return pv+cv;
//     // },0);
//     // console.log(redSum);
// }
// fun(2,3);
// fun(1,1,1,1,1);
// Insights: arguments is a ARRAY LIKE (Actually it is ITERABLE OBJECT), Means: basic operations of array can be performed
// But complex operations like: map, filter reduce, is not possible , for that first we need to
// convert the arguments from  ARRAY LIKE  real Array

// // solved 
// function fun (x,y){
//     console.log(x,y);
//     console.log(arguments); 

//     let arrayArgs = Array.from(arguments);          // Converting ITERABLE OBJECT into ACTUAL ARRAY ✅
//     let redSum = arrayArgs.reduce((pv,cv)=>{
//         return pv+cv;
//     },0);
//     console.log(redSum);
// }
// fun(1,1,1,1,1);
//--------------------------------------------------------------------------------------------------------------------------

//--------------------------------------------------------------------------------------------------------------------
//Sample 10: Different ways of calling a function - call, apply,

// let obj = {
//     name: "Savrat Joshi",
//     id: 22,
//     fun:function(friend,place){
//         console.log(arguments);
//         console.log(this.name+" ("+this.id+") having fun with his friend "+friend+" @ "+place+" ✈");
//     }
// }

// // obj.fun("Riddhima","France");  // Metchod 1: Normal way

// // Method 2: using call() - It is applied to any function - useful if you want to overwrite current this
// // obj.fun.call({                   
// //     name:"Rahul Gupta",
// //     id:10475
// // },"Simran","CCD - Banglore");

// let obj1 = { name:"Tansen kukreja", id:656};
// obj.fun.call(obj1,"Ruka","Saayeli");
// obj.fun.apply(obj1,["Rehan","U.S.A","Fly","start:14 dec", "Return:25 Jan","41 days"])// M3: using apply - sole purpose to modify this , [arguments passed within an array]

// // Method 4: bilnd:  dissimilar to call, apply - Doesn't make a call, Gives a new function to call
// let bindCaller = obj.fun.myBind(obj1,"salochana","devidanga","kindergardern");
// bindCaller();
//--------------------------------------------------------------------------------------------------------------------

//--------------------------------------------------------------------------------------------------------------------
// Sample 11: Custom Bind

// Function.prototype.myBind = function(){
//     let orgFun = this;
//     let args = Array.from(arguments);
//     let newThis = args[0];
//     let params = args.slice(1);

//     let caller = function(){
//         let mparams = Array.from(arguments);
//         let totalParams = params.concat(mparams);
//         orgFun.apply(newThis,totalParams);
//     }
//     return caller;
// }

//  let obj = {
//      name:"shashank redemption",
//      id:43,
//      fun:function(frnd1,frnd2){ 
//         console.log(this.name+" is friend with "+frnd1+" and "+frnd2);
//         console.log(arguments);
//      }
//  }
//  let bindCaller = obj.fun.myBind({name:"Rahul",age:22},"Bishal","Roshan");
//  bindCaller("supesh","jamshed","himanshu");
//--------------------------------------------------------------------------------------------------------------------

//--------------------------------------------------------------------------------------------------------------------
// Sample 12: Custom call
// Function.prototype.myCall = function(){
//     let orgFun = this;
//     let args = Array.from(arguments);
//     let newThis = args[0];
//     let params = args.slice(1);
//     orgFun.apply(newThis,params);    
// }

// without using apply
// Function.prototype.myCall = function(){
//     let orgFun = this;
//     let args = Array.from(arguments);
//     let newThis = args[0];
//     let params = args.slice(1);

//     newThis.fun = orgFun;       // This line will create a fun() in obj1 .  (ie original fun() )
//         // console.log(newThis);   
//     newThis.fun(...params); 
//     delete newThis.fun          // to delete the temporary fun() we created in obj1
//         // console.log(newThis);  
// }

// Insights: params = [10,20,30]
//           ...params = 10,20,30   spread Operator

//  let obj = {
//      name:"shashank redemption",
//      id:43,
//      fun:function(frnd1,frnd2){ 
//         console.log(this.name+" is friend with "+frnd1+" and "+frnd2);
//         console.log(Array.from(arguments));
//      }
//  }

// let obj1 = {
//     name:"Rahul",
//     age:22
// }

// obj.fun.myCall(obj1,"Bishal","Roshan");
//--------------------------------------------------------------------------------------------------------------------

//--------------------------------------------------------------------------------------------------------------------
//Sample 12: custom Apply
// Function.prototype.myApply = function(){
//     let orgfun = this;
//     let args = Array.from(arguments);
//     let newthis = args[0];
//     let params = args[1];

//     newthis.fun = orgfun;   // Add orgFun in obj1 for temporary use
//     newthis.fun(...params); // call it
//     delete newthis.fun;     // delete it after use
// }


// let obj = {
//     name:"shashank redemption",
//     id:43,
//     fun:function(frnd1,frnd2){ 
//        console.log(this.name+" is friend with "+frnd1+" and "+frnd2);
//        console.log(Array.from(arguments));
//     }
// }

// let obj1 = {
//    name:"Rahul",
//    age:22
// }

// obj.fun.myApply(obj1,["Bishal","Roshan"]);
//--------------------------------------------------------------------------------------------------------------------

//--------------------------------------------------------------------------------------------------------------------
// Sample 13: IIFEE - and SetInterval
// (function(){
//     let timeUnits = prompt("Time units to count");
//     let interval = prompt("Enter interval in milisec");
//     let date = prompt("Enter todays date");
//     let iid = setInterval(handleInterval,interval);   // returns an interval id, so that we can stop it
//     handleInterval.orgTU = timeUnits;  // way of adding static variable to a function

//     function handleInterval(){
//         if(timeUnits < 0){
//             clearInterval(iid); // this will stop the interval
//             alert("Time up...\n"+handleInterval.orgTU+" units counted");
//         }
//         else
//             console.log(timeUnits);

//         timeUnits--;
//     }

//     clearTimeout();

//     function handleTimeout(date){
//         console.log("Hope you enjoyed coding on "+date);
//         alert("Hope you enjoyed coding on "+date);
//     }
//     let delay = handleInterval.orgTU*interval+5000;
//     setTimeout(handleTimeout , delay ,date)
// })();

//----------------------------------------------------------------------------------------------------

//----------------------------------------------------------------------------------------------------
//Sample 14: problems on closure
// inner function makes a closure on the variables of outer function that are used in inner 

// function powerFunctionCreator(exp){
//     if(typeof exp !== 'number'){
//         console.log("Exp must be a number.");
//         return null;
//     }

//     let powerFn = function(base){     //In its closure there will be exp of powerFunction is present
//         let rv = Math.pow(base,exp);
//         return rv;
//     }
//     return powerFn;
// }

// let squarer = powerFunctionCreator(2);
// let sqo8 = squarer(8);
// console.log(sqo8);

//----------------------------------------------------------------------------------------------------

//----------------------------------------------------------------------------------------------------
//Sample 15: 

// function powerFunctionCreator(obj){
//     if(typeof obj.exp !== 'number'){
//         console.log("Exp must be a number.");
//         return null;
//     }

//     let powerFn = function(base){     //In its closure there will be exp of powerFunction is present
        
//         let rv = Math.pow(base,obj.exp);
//         return rv;
//     }
//     return powerFn;
// }
// let obj = {
//     exp:2
// }


// let squarer = powerFunctionCreator(obj);
// let sqo8 = squarer(8);
// console.log(sqo8);

// obj.exp = 3;
// let cuber = powerFunctionCreator(obj);
// let cuo8 = cuber(8);
// console.log(cuo8);

//----------------------------------------------------------------------------------------------------

//----------------------------------------------------------------------------------------------------
//Sample 16 : Function as callbacks

// let fs = require("fs");

// Array.prototype.sieve = function (phandler, nphandler) {
//     let oarr = this;
//     phandler.calledForTheFirstTime = true;          // Adding static(global) variable to phandler function
//     nphandler.calledForTheFirstTime = true;         // Adding static(global) variable to nphandler function

//     for (let i = 0; i < oarr.length; i++) {
//         let num = oarr[i];

//         let isPrime = true;
//         for (let div = 2; div * div <= num; div++) {
//             if (num % div == 0) {
//                 isPrime = false;
//                 break;
//             }
//         }

//         if (isPrime == true) {
//             phandler(num);
//         } else {
//             nphandler(num);
//         }
//     }
// }

// let arr = [11, 18, 34, 37, 49, 53, 71, 84, 97];
// arr.sieve(logAllPrimes, logAllNonPrimes)    // Passing two functions as callback to sieve() - Now its sieve's responsibility to call these functions

// function logAllPrimes(num) {
//     if (logAllPrimes.calledForTheFirstTime == true) {
//         if (fs.existsSync("primes.txt")) {
//             fs.rmSync("primes.txt");
//         }
//         logAllPrimes.calledForTheFirstTime = false;
//     }

//     fs.appendFileSync("primes.txt", num + "->", "utf-8");
// }

// function logAllNonPrimes(num) {
//     if (logAllNonPrimes.calledForTheFirstTime == true) {
//         if (fs.existsSync("non-primes.txt")) {
//             fs.rmSync("non-primes.txt");
//         }
//         logAllNonPrimes.calledForTheFirstTime = false;
//     }
//     fs.appendFileSync("non-primes.txt", num + "->", "utf-8");
// }


//----------------------------------------------------------------------------------------------------

//----------------------------------------------------------------------------------------------------
//Sample 17 : Insights on this keyword

// a)
// function fun(){
//     a = 10;         // similar to this.a,    means a is also stored in window
//     console.log(a); // o/p: 10
// }

// fun(); // here this is window

// -----------------------------------
// b)
// function fun(){
//     this.a = 10;         // Same as above,   means a is also stored in window
//     console.log(a); 
// }
// fun();
// ------------------------

// c)
// console.log(a);  // a is not defined, accessed before its creation
// function fun(){
//     this.a = 10;         
//     console.log(a); 
// }
// fun();
// ------------------------

// d)
// function fun(){
//     let a = 10;     // function k andar var a banega     
//     console.log(a); // 10
// }
// fun();
//--------------------------

// e)
// function fun(){
//     let a = 10;        // function k andar var a banega     
//     console.log(this.a); // not defined , because window mai this naam ka variable hai hi nahi
// }
// fun(); // ~this.fun();

// f)
// let a = 10;
// function fun(){
//     this.a = 20;     // window mai ek variable banega a with val = 2        
//     console.log(a);     //10
//     console.log(this.a);//20
// }

// fun();
// console.log(a);         //10
// console.log(this.a);    //20  its right in browser

//------------------------------------------------------------------------------------------------------

//----------------------------------------------------------------------------------------------------
//Sample 18 : Function as constructor

// function Person(name,age){
//     this.name = name;
//     this.age = age;
//     this.sayHi = function(f1){
//         console.log(this.name+"["+this.age+"]"+" says hi to world.");
//     }
// }

// let p1 = new Person("sumeet",34);  // Create a new Person()
// p1.sayHi();
//----------------------------------------------------------------------------------------------------


//----------------------------------------------------------------------------------------------------
//Sample 19 : If new keyword is removed
function Person(name,age){
    this.name = name;           //Jab Person call hua na tab actual mai name,age,sayHi
    this.age = age;             //window mai bana ,because this is pointing to window         
    this.sayHi = function(f1){  
        console.log(this.name+"["+this.age+"]"+" says hi to world.");
    }
}

let p1 =  Person("sumeet",34);  // removed new keyword
p1.sayHi();     // print not defined
//----------------------------------------------------------------------------------------------------

// Sample : array with property

// let arr = [ 12,1,2,33,67];
// arr.name = "Rishab"; // adding a property
// arr.myfun = ()=> console.log("Hello");
// console.log(arr); // [ 12, 1, 2, 33, 67, name: 'Rishab', myfun: [Function (anonymous)] ]
// arr.forEach(element => {
//     console.log(element);
// });

// the property name and my fun didn't get printed through for each loop .Why?
        // -> Because arrays are nothing but objects.

// for(let key in arr){
//     console.log(key , ": ", arr[key]);
// }
// key   arr[key]
// 0 :  12
// 1 :  1
// 2 :  2
// 3 :  33
// 4 :  67
// name :  Rishab
// myfun :  [Function (anonymous)]

// Normal loop only executes till keys are numberic that is 4 
// when we do arr.length = returns max numeric key +1 = 5;




