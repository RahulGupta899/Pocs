
//---------------------------------------------------------------------------------------------
// Problem 1:  What will print ?

// Hint: 1. Memory allocation is done before code is executed
//   2. Functions are created in Heaps and there reference is stored in stack 

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
//---------------------------------------------------------------------------------------------

//---------------------------------------------------------------------------------------------
// Problem 2:  What will print ?


// function abc(){
//     console.log(arguments);
// }

// console.log(abc());  // NAN due to undefined

// function abc(x,y){
//     return x+y
// }

// console.log(abc(1,2));  // NAN due to undefined;

// function abc(x,y,z,w){
//    return x+y+z+w;
// }

// console.log(abc(1,2,3,4)); // 10

/*Insights: Concept of Hoisting
            1. Memory is allocated before program is executed
            2. Program execution
*/
//---------------------------------------------------------------------------------------------

//---------------------------------------------------------------------------------------------
// Problem 3: 
// Insight : var has function scope, let has block scope

// console.log("Before Declaration",a);  // undefined
// var a;
// console.log("After Declaration",a);   // Undefined
// a = 10;
// console.log("After Initialization",a); // 10 
//---------------------------------------------------------------------------------------------

//---------------------------------------------------------------------------------------------
// Program 4:

// console.log("Before Declaration",a);  // ❌ Error - Not Allowed for variable declaration using let or const
// let a;
// console.log("After Declaration",a);   // Undefined
// a = 10;
// console.log("After Initialization",a); // 10 
//---------------------------------------------------------------------------------------------

//---------------------------------------------------------------------------------------------
//Program 5:
// console.log("Before Declaration",a);  // undefined
// var a;
// console.log("After Declaration",a);   // Undefined
// a = 10;
// console.log("After Initialization",a); // 10 

// function fun(){
//     console.log("Before Declaration",a);  // undefined
//     var a;                                              // Allowed to declare again
//     console.log("After Declaration",a);   // Undefined
//     a = 20;
//     console.log("After Initialization",a); // 20
// }
// fun();
// console.log("End",a);  // 10  , didn't get updated because var declaration has scope only within function
//---------------------------------------------------------------------------------------------

//---------------------------------------------------------------------------------------------
//Program 6:

// let a;
// console.log("After Declaration",a);   // Undefined
// a = 10;
// console.log("After Initialization",a); // 10 

// function fun(){
//     let a;                                              
//     console.log("After Declaration",a);   // Undefined
//     a = 20;
//     console.log("After Initialization",a); // 20
// }
// fun();
// console.log("End",a);  // 10  , didn't get updated because let declaration has scope only within block
//---------------------------------------------------------------------------------------------

//---------------------------------------------------------------------------------------------
//Program 7:
// function fn(){
//     console.log("Before Declaration 13 - ",a);
//     var a;   
//     console.log("After Declaration 15 - ",a);
//     a = 20;
//     if(true){
//         var a = 50;   // Allowed to declare multiple times
//         console.log("print 18 - ",a);
//     }
//     console.log("End 21 - ",a);
// }
// fn();
//---------------------------------------------------------------------------------------------

//---------------------------------------------------------------------------------------------
// Problem 8:
// function fn(){
//     console.log("Before Declaration  ",a);
//     var a;   
//     console.log("After Declaration  ",a);
//     a = 20;
//     if(true){
//         let a = 50;   // Allowed to declare multiple times
//         console.log("print ",a);
//     }
//     console.log("End",a);
// }
// fn();

//---------------------------------------------------------------------------------------------
// Problem 9:
// var a = 10;
// console.log("Line No 1", a);
// function fn(){
//     console.log("line 2", a);
//     var a = 20;
//     a++;
//     console.log("line 3 ",a);
//     if(a){
//         var a = 30;  // teat it as same variable,  deep copy
//         a++;
//         console.log("line 4 ",a);
//     }
//     console.log("line 5",a);
// }
// fn();
// console.log("line 6",a);
//
//---------------------------------------------------------------------------------------------

//---------------------------------------------------------------------------------------------
// Problem 10: 

// let letFruit = "orange";
// var varFruit = "orange";

// console.log("LetFruit:",letFruit," varFruit:",varFruit);
// {
//     let letFruit = "apple";
//     var varFruit = "apple";
//     console.log("LetFruit:",letFruit," varFruit:",varFruit);
// }
// console.log("LetFruit:",letFruit," varFruit:",varFruit);
//--------------------------------------------------------------------------------------------

//---------------------------------------------------------------------------------------------
// Problem 11: 

// let letFruit = "orange";
// var varFruit = "orange";

// console.log("LetFruit:",letFruit," varFruit:",varFruit);
// {
//     let letFruit = "apple";
//     let varFruit = "apple";  // only block level
//     console.log("LetFruit:",letFruit," varFruit:",varFruit);
// }
// console.log("LetFruit:",letFruit," varFruit:",varFruit);
//--------------------------------------------------------------------------------------------

//---------------------------------------------------------------------------------------------
// Problem 12: 

// let a = "apple";
// console.log(a);
// {
//     var a = "orange";   // ❌ Because var has function scope
//     console.log(a);
// }
//--------------------------------------------------------------------------------------------

// const arr = [ 10,20,30,40];

// let arr2 = [8,9,10,11,23];
// // arr = arr2;   // ❌ Not allowed

// arr.push(123); 
// arr.pop();
// arr.shift();
// arr.unshift(89);
// console.log(arr);






// all these are possible because we are not updating the variable with other instance, but we have making changes in the instance


//---------------------------------------------------------------------------------------------
//                  Problems on function expression vs function declaration

// Problem 9:what will print?

// fun();
// var fun = function(){
//     gun();
// }

// var gun = function(){
//     console.log("I am gun");
// }

// Insight : Hoisting should be observed
// output undefined is not a function of gun is not a function
//---------------------------------------------------------------------------------------------

//---------------------------------------------------------------------------------------------
// Problem 10:what will print?

// var fun = function(){
//     gun();
// }
// fun();
// var gun = function(){
//     console.log("I am gun");
// }

// Insight : Hoisting should be observed
// output undefined is not a function of gun is not a function
//---------------------------------------------------------------------------------------------

//---------------------------------------------------------------------------------------------
// Problem 11:

// var fun = function(){
//     gun();
// }

// var gun = function(){
//     console.log("I am gun");
// }
// gun();

// Insight : Hoisting should be observed
// output: I am gun
//---------------------------------------------------------------------------------------------

//---------------------------------------------------------------------------------------------
// Problem 12:what will print?

// fun();
// function fun(){
//     gun();
// }

// function gun(){
//     console.log("I am gun");
// }

// Insight : Hoisting should be observed
// output I am gun
//---------------------------------------------------------------------------------------------

//---------------------------------------------------------------------------------------------
// Problem 13:what will print?

// fun();
// function fun(){
//     gun();
// }

// var gun = function(){
//     console.log("I am gun");
// }
// Gun is not a function

//---------------------------------------------------------------------------------------------

//---------------------------------------------------------------------------------------------
// Problem 14: objects having function

// let obj = {
//     name: "Supesh joshi",
//     id: "10475",
//     fun: function(){
//         console.log("Good Morning,"+obj.name+" with id "+this.id+" is having fun ✌");
//     },
//     gun: function(){
//         console.log("Good Morning,"+obj.name+" with id "+this.id+" is shooting gun 🔫");
//     },
//     chess: function(friend){
//         console.log("Good Morning,"+obj.name+" with id "+this.id+" is playing Chess with "+friend+"  ♟ ♟");
//     },
//     play: function(){
//         console.log("Good Morning,"+name+" with id "+id+"is playing" );  // ❌ name has to be this.name or obj.name
//     }
// }
// obj.fun();
// obj.gun();
// obj.chess("Alok");
// // obj.play();
//---------------------------------------------------------------------------------------------

//---------------------------------------------------------------------------------------------
// Problem 15: 
// Add a function to all arrays which takes as input two callbacks
// one for short string(< 30 in length) and the other for long strings

// short string callback should do the following
// My name is Rahul Gupta. I am a programmer. I make softwares.
// ==> Gupta Rahul is name My. Programmer a am I softwares make.

// Long string callback should do the following
// I make softwares. I am a programmer. My name is Rahul Gupta.
// solution:--

// Array.prototype.myShrotLongString = function(shortStringHandler, longStringHandler, size){
//     let orgArr = this;
//     for(let i=0;i<orgArr.length;i++){
//         if(orgArr[i].length < size ){
//             orgArr[i] = shortStringHandler(orgArr[i]);          // Doing shallow copy
//         }
//         else{
//             orgArr[i] = longStringHandler(orgArr[i]);
//         }
//     }
// }

// let arr = [
//     "My name is Rahul Gupta. I am a programmer. I make softwares.",
//     "Humpty dumpty sat on my head",
//     "Me avi sd.mor song.lor oja",
//     "Study hard.play harder with your codes. keep hustling."
// ]
//                                                         // size - added a third parameter
// arr.myShrotLongString(shortStringHandler,longStringHandler, 30 ); // Its the responsibility of myshortLongString() to call the callbacks

// function shortStringHandler(para){
//     let sent = para.split(".").filter((v) => v.length>0).map(v=>v.trim());
//     let sentRev = sent.reduce(function(pv,cv){
//        let res = cv.split(" ");
//        res.reverse();
       
//        let revSent = res.join(" ");
//        revSent = revSent+".";
//        pv.push(revSent);
//        return pv;
//     },[])
//     let res = sentRev.join(" ");
//     return res;
// }

// function longStringHandler(para){
//     let sent = para.split(".").filter(v=>v.length>0).map((v,i)=>{
//         v = v.trim();
//         v = v+".";
//         return v;
//     });
//     sent.reverse();
//     return sent.join(" ");
// }

// console.log(arr);
//---------------------------------------------------------------------------------------------

//---------------------------------------------------------------------------------------------
// Problem 16: this

// a = 100;                     //Ye sare window mai banega
// b = 200;
// c = 300;

// function fun(){              // ye v window mai hi banta hai
//     console.log(this.a+" "+this.b+" "+this.c);
// }

// let obj = {
//     a:10,
//     b:20,
//     c:30,
//     fun1: function(){
//         console.log(this.a+" "+this.b+" "+this.c);
//     },
//     fun2: fun,
//     fun3: ()=>{  // for arrow function never use this or arguments [ because in arrow function it,s something different]
//         console.log(this.a+" "+this.b+" "+this.c);
//     }
// }

// let o2 = {
//     a:1000,
//     b:2000,
//     c:3000
// }

// obj.fun1();   // this is obj
// fun();        // this - window
// obj.fun2();   // this - obj
// obj.fun3();    // this - undefined for arraw function

// obj.fun1.call(o2);  // this - o2
// fun.call(o2);       // this - o2
// obj.fun2.call(o2);  // this - o2
// obj.fun3.call(o2);  // this - unpredictable for arrow function

//------------------------------------------------------------------------------------------------------------------------

//------------------------------------------------------------------------------------------------------------------------
// Problem 17: this related problem
// a = 100;
// b = 200;
// c = 300;

// function fun(){
//     console.log(a+" "+b+" "+c);
// }

// let obj = {
//     a:10,
//     b:20,
//     c:30,
//     fun1: function(){
//         console.log(a+" "+b+" "+c);  // o.P: 100,200,300  as it's will use default this that is window
//     },
//     fun2: fun,
//     fun3: ()=>{  
//         console.log(a+" "+b+" "+c);   // 100,200,300
//     }
// }

// let o2 = {
//     a:1000,
//     b:2000,
//     c:3000
// }

// obj.fun1();   // this is obj
// fun();        // this - window
// obj.fun2();   // this - obj
// obj.fun3();    // this - undefined for arraw function

// obj.fun1.call(o2);  // this - o2
// fun.call(o2);       // this - o2
// obj.fun2.call(o2);  // this - o2
// obj.fun3.call(o2);  // this - unpredictable for arrow function

// o/p : every time 100,200,300
//------------------------------------------------------------------------------------------------------------------------