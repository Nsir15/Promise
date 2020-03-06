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
  // 缓存this,将that绑定成promise实例
  let that = this;
  that.status = PENDING;

  // 存储then中的承诺回调函数
  that.fulfilleds = [];
  that.rejects = [];

  // 定义任务的两个参数
  
  // 调用此方法会将当前promise状态变为成功状态
  function resolve(value){
    let timer = setTimeout(() => {
      clearTimeout(timer);
      if (that.status === PENDING) {
        that.status = FULFILLED;
        // 执行then里面传递的 - 成功的回调函数
        that.fulfilleds.forEach(function (item) {
          item(value)
        });
      }   
    }, 0);
  };

  // 调用此方法会将当前promise状态变为失败状态
  function reject(reason){
    let timer = setTimeout(()=>{
      clearTimeout(timer)
       if (that.status === PENDING) {
         that.status = REJECT;
         // 执行then里面传递的 - 失败的回调函数
         that.rejects.forEach(function (item) {
           item(reason)
         })
       }
    },0);  // 0 并不是立即执行，浏览器有最小反应时间
  };

  // 4.初始化promise的时候，task会立即执行
  try{
    task(resolve,reject);
  }catch(e){
    reject(e);
  }
};

// 5. 给实例添加then方法
// then 里面放两个回调函数，分别是成功和失败的回调
MyPromise.prototype.then = function(onFulFilled,onReject){
    this.fulfilleds.push(onFulFilled);
    this.rejects.push(onReject);
};

module.exports = MyPromise;