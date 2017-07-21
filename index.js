'use strict'

function compose(middleware){
  return function *(next){
    if (!next) next = noop();

    var i = middleware.length;
    // 组合中间件
    while (i--) {
      next = middleware[i].call(this, next);
    }

    return yield *next;
  }
}
function *noop(){}

const middlewares = [];

const getTestMiddWare = (loggerA, loggerB) => {
    return function *(next) {
        console.log(loggerA);
        yield next;
        console.log(loggerB);
    }
};
const mid1 = getTestMiddWare(1, 4),
    mid2 = getTestMiddWare(2, 3);

const getData = new Promise((resolve, reject) => {
    setTimeout(() => resolve('数据已经取出'), 1000);
});

function *response(next) {
    // 模拟异步读取数据库数据
    const data = yield getData;
    console.log(data);
}

middlewares.push(mid1, mid2, response);
// 简单模拟co库
function co(gen) {
    const ctx = this,
        args = Array.prototype.slice.call(arguments, 1);
    return new Promise((reslove, reject) => {
        if (typeof gen === 'function') gen = gen.apply(ctx, args);
        if (!gen || typeof gen.next !== 'function') return resolve(gen);

        const baseHandle = handle => res => {
            let ret;
            try {
                ret = gen[handle](res);
            } catch(e) {
                reject(e);
            }
            next(ret);
        };
        const onFulfilled = baseHandle('next'),
            onRejected = baseHandle('throw');
            
        onFulfilled();
        function next(ret) {
            if (ret.done) return reslove(ret.value);
            // 将yield的返回值转换为Proimse
            let value = null;
            if (typeof ret.value.then !== 'function') {
                value = co(ret.value);
            } else {
                value = ret.value;
            }
            if (value) return value.then(onFulfilled, onRejected);
            return onRejected(new TypeError('yield type error'));
        }
    });
}
// 调用方式
const gen = compose(middlewares);
co(gen);