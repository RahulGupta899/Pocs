//----------------------------------------------------------------
//Problem1: Spread operator 
//----------------------------------------------------------------

// let arr = [
//             {name:'Rahul Gupta'},
//             {name:'Bimal Gupta'},
//             {name:'Bal Thankre'}
//           ];

// let sarr = [...arr];   // copy arr in sarr with new address
// console.log(sarr);


//----------------------------------------------------------------
//Problem1: Update Each item with a new Property
//----------------------------------------------------------------

let arr = [
    {name:'Rahul Gupta'},
    {name:'Bimal Gupta'},
    {name:'Bal Thankre'}
  ];

let marr = arr.map((item)=>{
    return {
        ...item,
        gender:'Male'
    }
})
console.log(marr);