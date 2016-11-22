//app.js
App({
  onLaunch: function () {
    var that=this;
    //调用API从本地缓存中获取数据
    that.curid = wx.getStorageSync('curid') || "CN101280102"
    wx.setStorageSync('curid', that.curid)
  },
  getLocationInfo: function (cb) {
    var that = this
    if (this.globalData.locationInfo) {
      typeof cb == "function" && cb(this.globalData.locationInfo)
    } 
    
    else {
      wx.getLocation({
        type:'gcj02',
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
    APIURL:'https://free-api.heweather.com/v5/',
    APIKEY:'f570471c88c447a299dc5e0431e15115',
    userInfo: null,
    locationInfo: null
  }
})