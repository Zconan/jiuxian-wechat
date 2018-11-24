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
  },
  //跳转商品详情页
  jumpToDetile(e) {
    //获取自定义index、id，传参跳转
    let index = e.currentTarget.dataset.index;
    let id = e.currentTarget.dataset.id;
    let page;
    switch (true) {
      case (index >= 0 && index <= 9):
        page = 1;
        break;
      case (index >= 10 && index <= 19):
        page = 2;
        break;
      case (index >= 20 && index <= 29):
        page = 3;
        break;
      case (index >= 30 && index <= 39):
        page = 4;
        break;
      case (index >= 40 && index <= 49):
        page = 5;
        break;
      case (index >= 50 && index <= 59):
        page = 6;
        break;
      case (index >= 60 && index <= 67):
        page = 7;
        break;
    }
    wx.navigateTo({
      url: '/pages/detile/detile?page=' + page + '&id=' + id
    });
  }
});