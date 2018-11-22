//引入模块
const express = require('express');
const app = express();
const request = require('request');

//服务器代理
app.get('/goodslist', (req, res) => {
  //跨域
  res.append("Access-Control-Allow-Origin", "*");
  //接收前端参数
  let page = req.query.page;
  request('https://m.jiuxian.com/m_v1/statics/getzx.htm?topicId=1165&pageNum=' + page, (err,response,body) => {
    res.send(body);
  });
});

app.listen(9999);