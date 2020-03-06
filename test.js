// let Promise = require('./promise');

// let p1 = new Promise((resolve,reject)=>{
//   setTimeout(() => {
//     resolve('p1')
//   }, 1500);
// })

// let p2 = p1.then(res=>{
//   return res+'p2--haha'
// },reason=>{
//   throw Error('')
// })

// let p3 = p2.then(res=>{
//   console.log(res);
  
// },reason=>{
//   console.log(reason);
// })

// console.log('3');


function AA (){
  console.log(1);
  
  return new Promise((resolve,reject)=>{
    setTimeout(() => {
      resolve(2)
    }, 0);
  })
};

async function fn(){
  console.log(2);
  let res = await AA();
  console.log(3);
}

fn();
console.log(4);

