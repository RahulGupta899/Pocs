
//-----------------------------------------------------------------------------------------------
//Sample 1: Custom Map function

// Array.prototype.myMap = function(callback){
//     let res = [];
//     let oarr = this;
//     for(let i=0;i<oarr.length;i++){
//         let val = oarr[i];
//         let rv = callback(val,i,oarr);
//         res.push(rv);
//     }
//     return res;
// }

// let arr = [1,2,3,4,5,6,7];
// let ma = arr.myMap(function(v,i,oarr){
//     return v*v;
// })
// console.log(ma);

//Insights: map function traverse and update each element and return
//-----------------------------------------------------------------------------------------------

//-----------------------------------------------------------------------------------------------
//Sample 2: Custom Filter

// Array.prototype.myFilter = function(callback){
//     let res = [];

//     for(let i=0; i<this.length; i++){
//         let val = this[i];
//         let rv = callback(val,i,this);
//         if(rv == true)
//             res.push(val);
//     }
//     return res;
// }

// let arr = [1,2,3,4,5,6,7,8];
// let fa = arr.myFilter(function(v,i,oarr){
//     if(v%2 == 0) return true;
//     else return false;
// })
// console.log(fa);

//-----------------------------------------------------------------------------------------------

//-----------------------------------------------------------------------------------------------
//Sample 3: Custom reduce

// Array.prototype.myReduce = function(callback,ipv){
//     let pv=(ipv == undefined)? this[0] : ipv;
//     for(let i=0;i<this.length;i++){
//         if(i ==0 && ipv == undefined) continue;  // skip the first iteration
//         let cv = this[i];
//         pv = callback(pv,cv,i,this); 
//     }
//     return pv;
// }
// Custom Sample
// let arr = [10,20,3,40,5];
// let red = arr.myReduce(function(pv,cv,ci){
//     if(cv%2 == 1) pv = pv+cv;
//     return pv;
// })
// console.log(red);

//-----------------------------------------------------------------------------------------------

//-----------------------------------------------------------------------------------------------
//Sample 4: Custom some

// Array.prototype.mySome = function(callback){
//     for(let i=0; i<this.length ; i++){
//         let val = this[i];
//         let rv = callback(val,i,this);
//         if(rv == true) return true;
//     }
//     return false;
// }

// let arr = [1,2,3,4,5,6,67];
// let chk = arr.mySome(function(v,i,oarr){
//     if(v*v == 25) return true;
//     else false;
// })
// console.log(chk);

//-----------------------------------------------------------------------------------------------

//-----------------------------------------------------------------------------------------------
//Sample 6: Custom Every

// Array.prototype.myEvery = function(callback){
//     for(let i=0;i<this.length; i++){
//         let val = this[i];
//         let rv = callback(val,i,this);
//         if(rv == false) return false;
//     }
//     return true;
// }

// let arr = [10,20,30,40,500];
// let check = arr.myEvery((v,i,orr) =>{
//     if(v<100) return true;
//     else  return false;
// })
// console.log(check);
//-----------------------------------------------------------------------------------------------

//-----------------------------------------------------------------------------------------------
//Sample 7: Custom find

// Array.prototype.myFind = function(callback){
//     for(let i=0; i<this.length ; i++){
//         let val = this[i];
//         let rv = callback(val,i,this);
//         if(rv != undefined) return val;
//     }
//     return undefined;
// }

// let arr = [1,2,3,4,5,6,67];
// let chk = arr.myFind(function(v,i,oarr){
//     if(v*v == 125) return v;
//     else return undefined;
// })
// console.log(chk);

//-----------------------------------------------------------------------------------------------

//-----------------------------------------------------------------------------------------------
// Sample 8: Custom Flat 

// Array.prototype.myFlat = function(depth){
//     let orgArr = this;
//     let res = [];
//     customFlatHandler(orgArr,depth,res);
//     return res;
// }

// function customFlatHandler(node,depth,res){
//     if(Array.isArray(node)){// Initially pura array pass horaha hai
//         if(depth >= 0){
//             for(let i=0;i<node.length;i++){
//                 customFlatHandler(node[i],depth-1,res);
//             }
//         }
//         else{
//             res.push(node);
//         }
        
//     }
//     else{
//         res.push(node);
//     }
// }

// let a = [10,20,30,[40,50,[60,[[]],70],80]];
// console.log(a.myFlat(-1));
// console.log(a.myFlat(2));
// console.log(a.myFlat(3));
// console.log(a.myFlat(4));
// console.log(a.myFlat(7));

// console.log(a.myFlat(0));
// console.log(a.myFlat(-55));

// -------------- USING DEFINED

// let arr = [10,20,[50,60,[90,[[[]]],100]],30,[70,[110,120],80],40];
// console.log(arr.length);

// console.log(arr.flat(1));           // Remove first level
// console.log(arr);                   // No shallow copy
// console.log(arr.flat(2));
// console.log(arr.flat(3));
// console.log(arr.flat(Infinity));  // Remove all levels

// console.log(arr.flat(0));           // No effect
// console.log(arr.flat(-7));          // No effect

//-----------------------------------------------------------------------------------------------

//-----------------------------------------------------------------------------------------------
//Sample 9: Array functions for searching

//Takes value as parameter:-
//indexOf
//lastIndexof
//includes

// let arr = [10,20,30,40,50,60,70,30,40];
// console.log(arr.indexOf(30));// 2: Gives the index of first data found
// console.log(arr.lastIndexOf(30));// 7: Gives the index of last data found
// console.log(arr.includes(30));// Return true or false

//                  --------------------------------------------------------------

// Takes callback as parameter:-
// find
// findIndex
// filter

// let arr = [10,20,30,40,50,60,70,30,40];
// let fil = arr.filter(v=>v>=30);     // Returns new Array , it doesn't modifies the original array
// console.log(arr);
// console.log(fil);

// let find = arr.find(v=>v>30);
// console.log(find);                // 40: returns first val that satisfies the condition
// console.log(arr.find(v=>v==30)); // 30

// console.log(arr.findIndex(v=>v>30));//3: returns the index of first element that satisfied the condition
// console.log(arr.findIndex(v=>v==30));// 2
//-----------------------------------------------------------------------------------------------

//-----------------------------------------------------------------------------------------------
//Sample 10: Sort and reverse

// these functions doesn't return anything but modifies the array itself:-
// reverse() 
// sort() : by default sort() sorts as value as string, 
//          which leads to [25,10,109,55,9] = [10,109,25,55,9]
//          to sort as num we need to use compare function

// let sarr = ["the","only","thing","stopping","you","from","achieving","your","Aim","is","the","bullshit","story","you","keep","telling","yourself"];
// let narr = [9,5,4,77,1,0,51,2,8,9,1,893,11,75];

// sarr.reverse();  // reverse the arr
// sarr.sort();     // sort the array as value as String

// narr.reverse(); // rev

// //Sort in Ascending order
// narr.sort(function(a,b){  
//     return a-b;
// });

// //Sort in Descending order
// narr.sort(function(a,b){
//     return b-a;
// })
// console.log(narr);

//-----------------------------------------------------------------------------------------------

//-----------------------------------------------------------------------------------------------
//Sample 11: Shift and unshift

// let arr = ["sona","chandi","khata","toh","yeh","nahi","hota"];

// arr.unshift("Dabur");  // Adds at beg of arr
// arr.shift(); // pops at beg of array
// console.log(arr);
//-----------------------------------------------------------------------------------------------

//-----------------------------------------------------------------------------------------------
//Sample 9: Slice and splice

// let arr = [10,20,30,40,50,60];

// console.log(arr.slice()); // exact - for copy
// console.log(arr.slice(0,2));  // [10,20]
// console.log(arr.slice(1,3));  // [20,30]
// console.log(arr.slice(2));    // [ 30, 40, 50, 60 ]
// console.log(arr.slice(5));    // [60] *
// console.log(arr.slice(1,1));  // []

// console.log(arr.slice(-3,-1)); // [40,50] ***
// console.log(arr.slice(-6));    // [ 10, 20, 30, 40, 50, 60 ]
// console.log(arr.slice(-1,-3)); // [] 
// console.log(arr.slice(-1));    // [60]

                        //  ----------------------------

// // Slice does shallow copy for objects so be careful while using instances/objects , original value will also gets modified

// let obj1 = {
//     name:"senorita",
//     city:"spain"
// }

// let obj2 ={
//     name:"Laila",
//     city:"prayag ganj"
// }

// let obj3 ={
//     name:"Kabir",
//     city:"Mumbai"
// }


// let arr = [obj1,obj2,obj3];

// let newArr = arr.slice();
// console.log(newArr); // copy

// newArr[1].city="England";  // modification
// console.log(newArr);
// console.log(arr);  // change in original array also 


//------------------------------------------------------------------------------------------------------
// splice : updates the original array also : shallow copy of address
// let arr = [10,20,30,40,50];
// let na = arr.splice(2,2,300,400); // index 2 se 2 item splice kar do, aur 300,400 ko add kardo
// console.log(na);    // [30,40]
// console.log(arr);   // [10,20,300,400,50]  original array update hojayega

// let arr1 = [2,4,6,8,10]
// let na1 = arr1.splice(2,1);
// console.log(na1);   // [ 6 ]
// console.log(arr1);  //[ 2, 4, 8, 10 ]