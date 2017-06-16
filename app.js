'use strict'

//观察者模式

const util = require('util');  
const EventEmitter = require('events').EventEmitter;

//this绑定
function MyFancyObservable() {  
  EventEmitter.call(this);
}

//继承
util.inherits(MyFancyObservable, EventEmitter);
//设置方法
MyFancyObservable.prototype.hello = function (name) {  
  this.emit('hello', name);
};

//使用
const observable = new MyFancyObservable();

observable.on('hello', function (name) {  
  console.log(name);
});

observable.hello('john');



//------------------------------

const event = new EventEmitter();
event.on('hello',function(name){
    console.log(name);
});
event.on('hello',function(name){
    console.log(name);
});

event.emit('hello','ltz');




