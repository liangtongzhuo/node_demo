'use strict'

//介绍环境变量如何使用的

/*

在linux下
只设置一次有效 $ PORT=1234 node xxoo.js
只设置永久有效  $ export PORT=1234
在window下
默认是永久情况
set PORT=1234
node xxoo.js

*/


//获取的是字符串
 parseInt(process.env.PORT);
 