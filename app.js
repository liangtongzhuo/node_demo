'use strict'

const EventEmitter = require('events').EventEmitter;

const event = new EventEmitter();


event.on('hello',function (name) {
    console.log('hello'+name);
});

event.emit('hello','梁亚宾');
