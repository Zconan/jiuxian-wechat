const app = getApp();

Page({
  data: {
    //轮播图相关数据
    imgUrls: [
      '/img/swipe1.jpg',
      '/img/swipe2.jpg',
      '/img/swipe3.jpg',
      '/img/swipe4.jpg',
      '/img/swipe5.jpg',
      '/img/swipe6.jpg',
      '/img/swipe7.jpg'
    ],
    indicatorDots: true,
    indicatorColor: '#999999',
    indicatorActiveColor: '#ffffff',
    autoplay: true,
    interval: 5000,
    circular: true,
    duration: 1000,
    //商品列表相关数据
    goodslist: [],
    page: 1
  },
  //获取商品数据
  getGoodslist() {
    let page = this.data.page;
    //发送请求
    wx.request({
      url: 'http://localhost:9999/goodslist',
      data: {
        page
      },
      header: {
        'content-type': 'application/json'
      },
      success: this.handleSuccessDatas.bind(this)
    });
  },
  //处理成功返回数据
  handleSuccessDatas(res) {
    this.setData({
      goodslist: this.data.goodslist.concat(res.data.promoList)
    });
  },
  //onShow生命周期函数
  onShow() {
    this.getGoodslist();
  },
  //触底加载
  onReachBottom() {
    if (this.data.page < 7) {
      //改变需加载页码数
      this.data.page++;
      //发送请求加载数据
      this.getGoodslist();
    }
  },
  //转发
  onShareAppMessage() {
    return {
      title: '酒仙',
      path: '/pages/index'
    }
  }
});