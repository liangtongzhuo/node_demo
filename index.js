'use strict'

// var app = require('http').createServer(handler)
// var io = require('socket.io')(app);
// var fs = require('fs');

// app.listen(8080);

// function handler (req, res) {
//   fs.readFile(__dirname + '/index.html',
//   function (err, data) {
//     if (err) {
//       res.writeHead(500);
//       return res.end('Error loading index.html');
//     }

//     res.writeHead(200);
//     res.end(data);
//   });
// }

// io.on('connection', function (socket) {
//   socket.emit('news', { hello: 'world' });
//   socket.on('my other event', function (data) {
//     console.log(data);
//   });
// });

// var a ={ x: 1} ;
// var b = a;
// a.x  = a = { x: 2 }


// console.log(a.x);
// console.log(b.x);


// var add = function() {
//     var sum = 0;
//     for(var i = 0; i < arguments.length; i++)
//         sum += arguments[i];
//     var addMore = function(b) {
//         for(var j = 0; j < arguments.length; j++)
//             sum += arguments[j];
//         return addMore;
//     };
//     addMore.toString = function() {
//         console.log('aaaa');
//         return sum;
//     };
//     return addMore;
// };

// console.log(add(1,3));
// console.log(add(1)(3));


//  var aaa = {
//         i: 10,
//         valueOf: function() { return this.i+30; },
//         // toString: function() { return this.valueOf()+10; }
//       }
//        console.log(+aaa);


// console.log(typeof new String('aaaaaa'));

 
// console.log(typeof  String('hello') );
// console.log(new String('hello') );
// console.log(new String('aaaaa') instanceof String);


console.log(typeof 'sss');

function a(){
    arguments
}