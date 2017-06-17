'use strict'

var cluster = require('cluster');
var http = require('http');
var numCPUs = require('os').cpus().length;

if (cluster.isMaster) {
    for (var i = 0; i < numCPUs; i++) {
       cluster.fork();
    }
    //子进程启动会会调用
    cluster.on('listening', function (worker, address) {
        console.log('[master] ' + 'listening: worker' + worker.id + ',pid:' + worker.process.pid + ":" + address.port);
    });

    //每一进程挂 message 回调
    // Object.keys(cluster.workers).forEach(function(id) {
    //     cluster.workers[id].on('message', function(msg){
    //         console.log('[master] ' + 'message ' + msg);
    //         cluster.workers[id].send('[master] ' + 'hi worker' +process.pid);
    //     });
    // });

} else if (cluster.isWorker) {
    console.log(cluster.worker.id)
    // process.on('message', function(msg) {
    //     console.log('[worker] '+msg);
    // });


    process.send('[worker] worker'+process.pid+' received!');

    http.createServer(function (req, res) {
        res.writeHead(200, {"content-type": "text/html"});
        res.end('worker'+cluster.worker.id+',PID:'+process.pid);
    }).listen(3000+cluster.worker.id,function(){
        console.log('worker'+cluster.worker.id+',PID:'+process.pid);
        console.log(process.memoryUsage());
    });
}