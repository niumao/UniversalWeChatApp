//app.js
var qcloud = require('./vendor/wafer2-client-sdk/index')
var config = require('./config')

App({
  onLaunch: function (options) {
      console.log(options);
        qcloud.setLoginUrl(config.service.loginUrl)
    },
    onShow: function (options) {
      // Do something when show.
    },
    onHide: function () {
      // Do something when hide.
    },
    onError: function (msg) {
      console.log(msg)
    },
    globalData: {
      title:'dodoWed',
      favicon:''
    }
})