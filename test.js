let promise1 = new Promise(function(resolve,reject){
  let num = Math.random();
  if(num > .5){
    resolve('成功了！！！')
  }else{
    reject('oh no !!!!')
  }
});


promise1.then(function(res){
  console.log(res);
  
},function(reason){
  console.log(reason);
});



