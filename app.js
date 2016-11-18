//app.js
App({
  onLaunch: function () {
    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
  },
  getLocationInfo: function (cb) {
    var that = this
    if (this.globalData.locationInfo) {
      typeof cb == "function" && cb(this.globalData.locationInfo)
    } 
    
    else {
      wx.getLocation({
        success: function (res) {
          that.globalData.locationInfo = res;
          typeof cb == "function" && cb(that.globalData.locationInfo)
        },
        fail: function (res) {
          cosnole.log(res);
        }
      })
    }

  },
  globalData: {
    userInfo: null,
    locationInfo: null
  }
})