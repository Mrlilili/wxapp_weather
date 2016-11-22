//index.js
//获取应用实例
var app = getApp();
Page({
  data: {
    locationInfo: {},
    weatherData: null,
    baseInfo:null
  },
  onLoad: function () {
    var self = this;
    app.getLocationInfo(function (locationInfo) {
      self.setData({
        locationInfo: locationInfo
      })
      self.getWeatherData();
    })
    wx.setNavigationBarTitle({
      title: '当前天气'
    })
  },
  getWeatherData: function () {
    var self = this;
    wx.request({
      url: app.globalData.APIURL+'/now',
      data:{
        city:app.curid,

        key:app.globalData.APIKEY
      },
      success: function (res) {

        self.setData({
           baseInfo: res.data.HeWeather5[0].basic,
           weatherData: res.data.HeWeather5[0].now
         });
         console.log(self.data.baseInfo);
      }
    })
  }
})
