// pages/home/index.js
var WxParse = require('../../wxParse/wxParse.js');
Page({
  data: {
  },
  onLoad: function (options) {
    self = this;
    var cId = options.id;
    wx.request({
      url: '' + cId,
      success: function (res) {
        console.log(res.data)
        var caseData = res.data;
        var wxContent = caseData.content;
        WxParse.wxParse('wxContent', 'html', wxContent, self, 5);
        self.setData({
          pId: caseData.caseId, title: caseData.title, cover: caseData.cover, descr: caseData.descr, video:caseData.video,
          content: wxContent,
        })
      }
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