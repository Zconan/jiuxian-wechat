const app = getApp();

Page({
  data: {
    headers: [{
      icon: 'iconfont icon-arrowleft',
      title: ''
    }, {
      icon: '',
      title: '商品详情'
    }, {
      icon: 'iconfont icon-menu',
      title: ''
    }],
    tabs: [{
      icon: 'iconfont icon-kefu',
      title: '在线客服'
    }, {
      icon: 'iconfont icon-shoucang1',
      title: '收藏'
    }, {
      icon: 'iconfont icon-cart',
      title: '购物车'
    }],
    btns: ['加入购物车', '立即购买'],
    good: {}
  },
  //路由跳转
  jumpTo(e) {
    let index = e.currentTarget.dataset.index;
    if (index === 0) {
      wx.switchTab({
        url: '/pages/index/index'
      });
    }
  },
  //根据传来商品id发送请求获取相应商品
  getGood(page,id) {
    wx.request({
      url: 'http://localhost:9999/detile',
      data: {
        page,
        id
      },
      header: {
        'content-type': 'application/json'
      },
      success: this.handleSuccessDatas.bind(this)
    })
  },
  //处理成功返回数据
  handleSuccessDatas(res) {
    console.log(res.data.commonProductInfo);
    this.setData({
      good: res.data.commonProductInfo
    });
  },
  //onLoad生命周期函数
  onLoad(option) {
    let page = option.page;
    let id = option.id;
    this.getGood(page,id);
  }
});