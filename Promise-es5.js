// 先实现一个简单版的promise

// 1.根据promiseA+ 规范，promise有三个状态：
// 先定义状态常量
const PENDING = 'pending';
const FULFILLED = 'fulfilled';
const REJECT = 'reject';

// 2.定义promise类，
// new promise的时候会传入一个任务
// 任务是一个函数对象，有两个参数：reject，resolve
function MyPromise(task){
  // 3.初始化状态
  this.status = PENDING;

  // 定义任务的两个参数
  
  // 调用此方法会将当前promise状态变为成功状态
  function resolve(){};

  // 调用此方法会将当前promise状态变为失败状态
  function reject(){};

  // 4.初始化promise的时候，task会立即执行
  try{
    task(resolve,reject);
  }catch(e){
    reject(e);
  }
};

// 5. 给实例添加then方法
MyPromise.prototype.then = function(){

};

module.exports = MyPromise;