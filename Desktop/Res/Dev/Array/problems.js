
// -----------------------------------------------------------
// Problem 1: count all primes using reduce

// let arr = [12,2,3,44,55,8,7,97];

// let reduced = arr.reduce((pv,cv,ci)=>{
//     if(isPrime(cv)) pv++;
//     return pv;
// },0)
// console.log(reduced);

// function isPrime(val){
//     for(let i=2; i*i<=val ;i++){
//         if(val%i ==0 ) return false;
//     }
//     return true;
// }
// --------------------------------------------------------------

//---------------------------------------------------------------
// problem 2: Flatten the 2d array in 1 d

// let arr = [[1,2,3],[44,3,55],[0,0,0],[],[78,30,40]];

// let red = arr.reduce((pv,cv)=>{
//     return pv.concat(cv);
// },[])
// console.log(red);

//----------------------------------------------------------------

//----------------------------------------------------------------
// Problem 3: compound functions
// function f(x){
//     return x*x;
// }
// function g(x){
//     return x+10;
// }
// function h(x){
//     return x*2;
// }
// // console.log(f(g(h(3)))); // 256 direct ans

// // Find: f(g(h(x)))  using reduce?

// // Solution:-
// let arr = [f,g,h] ;
// arr.reverse(); [h,g,f]
// let red = arr.reduce(function(pv,cv){
//     return cv(pv);
// },3)
// console.log(red);
//----------------------------------------------------------------

// ----------------------------------------------------------------
// Problem 4: Find Intersections

// let arr1 = [34,35,12,18,29,54,67];
// let arr2 = [88,45,34,18,67,55,44];

// let filter = arr1.filter(function(v,i){
//     return arr2.includes(v);
// });
// console.log(filter);
// -----------------------------------------------------------------

// -----------------------------------------------------------------
// problem 5: Find Intersections among 2d
// let arr = [
//     [1,2,3,4,5,6,7,8],
//     [2,33,4,5,78,7,3],
//     [10,20,30,5,2],
//     [20,5,2],
//     [1,2,3,4,5,6,7,8,9]
// ]

// let red = arr.reduce((pv,cv)=>{
//     let intrsn = pv.filter(v=>cv.includes(v));
//     return intrsn;
// })
// console.log(red);
// ------------------------------------------------------------------

//--------------------------------------------------------------------
// Problem 6: Find Union
// let arr1 = [1,2,3,4,5,6];
// let arr2 = [2,3,4,1,66,44,33];
// let filter = arr2.filter(v => arr1.includes(v)==false);
// console.log(filter);
// console.log(arr1.concat(filter));
//---------------------------------------------------------------------

// --------------------------------------------------------------------
// Problem 7: Find union from 2d array
// let arr = [
//     [1,2,3,4,5,6,7,8],
//     [2,33,4,5,78,7,3],
//     [10,20,30,5,2],
//     [20,5,2],
//     [1,2,3,4,5,6,7,8,9]
// ]

// let union = arr.reduce((pv,cv)=>{
//     let filter = cv.filter(v=> pv.includes(v)==false);
//     return pv.concat(filter);
// })
// console.log(union);
// ---------------------------------------------------------------------

// ----------------------------------------------------------------------
// Problem 8: sum of squares of ages of all valid candidates those are (females ages >=20 and <=30)
// let arr = [
//     {name: "A", age: 14, gender: "M"}, 
//     {name: "B", age: 34, gender: "M"}, 
//     {name: "C", age: 24, gender: "F"}, 
//     {name: "D", age: 44, gender: "F"}, 
//     {name: "E", age: 44, gender: "M"}, 
//     {name: "I", age: 28, gender: "F"}, 
//     {name: "G", age: 36, gender: "M"}, 
//     {name: "H", age: 47, gender: "F"}
// ]

// let fil = arr.filter(v=>{
//    if(v.gender == 'F' && v.age>=20 && v.age<=30) return true;
//    return false;
// }).map(v => v.age*v.age).reduce((pv,cv)=>{
//     return pv+cv;
// },0);
// console.log(fil);

//---------------------------------------------------------------------

//---------------------------------------------------------------------
// Problem 9: Reverse each sentence of String

// let str = "My name is Rahul Gupta. I am a computer science graduate from SIEM,Siliguri. I believe work is simple if you have patience. Study hard play harder with the codes.";
// let sent = str.split('. ');
// let revStr = [];
// for(let i=0;i<sent.length;i++){
//     let words = sent[i].split(" ");
//     words.reverse();
//     words = words.join(" ");  // joins elements of array as a string
//     revStr.push(words);
// }
// revStr = revStr.join(" ");
// console.log(revStr);

//---------------------------------------------------------------------------------
 

//---------------------------------------------------------------------------------
// Problem 10: Reverse each sentence of String
// constraint: loop is not allowed 

// let str = "My name is Rahul Gupta. I am a computer science graduate from SIEM,Siliguri. I believe work is simple if you have patience. Study hard play harder with the codes";
// let sent = str.split(". ");

// let revWords = sent.reduce((pv,cv)=>{
//     let words = cv.split(" ");
//     words.reverse();
//     pv.push(words);
//     return pv;
// },[])

// let revSent = revWords.reduce((pv,cv)=>{
//     let sent = cv.join(" ");
//     pv.push(sent);
//     return pv;
// },[])

// let revSentUpdate = revSent.map(v=>v+".");

// let result = revSentUpdate.join(" ");
// console.log(result);

//----------------------------------------------------------------------------------
// Problem 11

// let arr = [
//     {
//         name:"Sneha bansal",
//         age: 23
//     },
//     {
//         name:"B",
//         age:34
//     },
//     {
//         name:"C",
//         age:38
//     },
//     {
//         name:"C",
//         age:37
//     },
//     {
//         name:"C",
//         age:25
//     }
// ]

// let fa = arr.myFilter(function(v,i,oarr){
//     if(v.name[0] == "C" && v.age>30) return true;
//     else false;
// })
// console.log(fa);

