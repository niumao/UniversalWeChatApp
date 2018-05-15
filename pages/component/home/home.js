// pages/home/index.js
Page({
  data: {
    swiper:{
      imgUrls: [
        'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
        'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
        'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
      ],
      imgIds:[1, 4, 5],
      indicatorDots: true,
      autoplay: true,
      interval: 5000,
      duration: 1000,
    },
    case:{
      1:{
        id:1,
        name:'wed 1 title',
        desc:'wed 1 description description description description description description description description',
      },
      2: {
        id: 4,
        name: 'wed 2 title',
        desc: 'wed 2 description description description description description description description description',
      },
      3: {
        id: 5,
        name: 'wed 3 title',
        desc: 'wed 3 description description description description description description description description',
      },
    }
  },
  caseTap: function (e) {
    var id = e.currentTarget.id, list = this.data.case;
    wx.navigateTo({ url: "../../../pages/component/paper/paper",
      success: function (e) {
        console.log(e)
      } });
  },
  onLoad: function (options) {
    this.setData({
      imageWidth: wx.getSystemInfoSync().windowWidth,
    })
  },
  onReady: function () {
  
  },
  onShow: function () {
  
  },
  onHide: function () {
  
  },
  onUnload: function () {
  
  },
  onPullDownRefresh: function () {
  
  },
  onReachBottom: function () {
  
  },
  onShareAppMessage: function () {
  
  }
})