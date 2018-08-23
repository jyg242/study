/**
 *使用Node+Express创建WEB服务器：
 *接收客户端HTTP请求(req)，输出HTTP响应(res)
 */
const http = require('http');
const express = require('express');
const port = 5050;  //新浪云的Node端口只能为5050

var app = express();//运行express得到一个请求处理函数对象
var server = http.createServer(app); //创建Web服务器
server.listen(port, ()=>{  //启动服务器监听指定端口
    console.log('Server Listening on', port);
});

//针对客户端的不同请求，输出不同的响应消息
app.get('/', (req, res)=>{
    //向客户端输出指定的内容
    res.send('Welcome to LiWenhua Homepage!!!!!! <!--');
})