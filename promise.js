// const PENDING = 'pending';
// const FULFILLED = 'fulfilled';
// const REJECT = 'reject';

// class Promise{
//   constructor(executor){
//     // 首先要进行参数校验，不要过分相信用户传递的参数
//     if(typeof executor !== 'function') {
//       throw new TypeError(`${executor} is not a function`)
//     }
//     this.status = pending;
//     let resolve = function(res){
//       if(this.status !== PENDING) return ;

//       this.status = FULFILLED;
//     };
//     let reject = function(reason){

//     };

//     try{
//       executor(resolve,reject)
//     }catch(e){
//       // 异常信息按照reject处理
//       reject(e)
//     }
//   };

//   then(){

//   }
// }

// module.exports = Promise