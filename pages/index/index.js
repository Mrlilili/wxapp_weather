//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    locationInfo: {},
    weatherData: null
  },
  onLoad: function () {
    console.log('onload');
    var self = this;
    app.getLocationInfo(function (locationInfo) {
      self.setData({
        locationInfo: locationInfo
      })
      self.getWeatherData();
    })
    wx.setNavigationBarTitle({
      title: '实时天气预报'
    })
  },
  getWeatherData: function () {
    var self = this;
    var APIKEY = 'TAkhjf8d1nlSlspN';
    var location = this.data.locationInfo.longitude + ',' + this.data.locationInfo.latitude;
    var reqUrl = 'https://api.caiyunapp.com/v2/' + APIKEY + '/' + location + '/realtime.json'
    wx.request({
      url: reqUrl,
      success: function (res) {
        self.setData({
          weatherData: res
        });
      }
    })
  }
})
