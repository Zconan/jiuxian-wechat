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
    btns: ['加入购物车', '立即购买']
  },
  //路由跳转
  jumpTo(e) {
    let index = e.currentTarget.dataset.index;
    if (index === 0) {
      wx.switchTab({
        url: '/pages/index/index'
      });
    }
  }
});