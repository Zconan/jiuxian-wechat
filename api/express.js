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
  request('https://m.jiuxian.com/m_v1/statics/getzx.htm?topicId=1165&pageNum=' + page, (err, response, body) => {
    res.send(body);
  });
});

//获取单个商品详情
app.get('/detile', (req, res) => {
  //跨域
  res.append("Access-Control-Allow-Origin", "*");
  //接收前端参数
  let page = req.query.page;
  let id = req.query.id * 1;
  request('https://m.jiuxian.com/m_v1/statics/getzx.htm?topicId=1165&pageNum=' + page, (err, response, body) => {
    let datas = JSON.parse(body).promoList;
    datas.map(item => {
      if (item.commonProductInfo.pid === id) {
        console.log(item);
        res.send(item);
      }
    });
  });
});

app.listen(9999);