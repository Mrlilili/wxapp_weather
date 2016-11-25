//index.js
//获取应用实例
var app = getApp();
var suggestionTypeName = {
    air: '空气质量',
    comf: '舒适度指数',
    cw: '洗车指数',
    drsg: '穿衣指数',
    flu: '感冒指数',
    sport: '运动指数',
    trav: '旅游指数',
    uv: '紫外线指数'
}
Page({
    data: {
        locationInfo: {},
        weatherData: null,
        baseInfo: null,
        lifeIndex: null,
        suggestionName: suggestionTypeName
    },
    onShow: function () {
        var self = this;
        //app.getLocationInfo(function (locationInfo) {
        //    self.setData({
        //        locationInfo: locationInfo
        //    })
        //
        //})
        console.log('show');
        self.getWeatherData();
        wx.setNavigationBarTitle({
            title: '实时天气'
        })
    },
    getWeatherData: function () {
        var self = this;
        wx.request({
            url: app.globalData.APIURL + '/now',
            data: {
                city: wx.getStorageSync('curid'),
                key: app.globalData.APIKEY
            },
            success: function (res) {

                self.setData({
                    baseInfo: res.data.HeWeather5[0].basic,
                    weatherData: res.data.HeWeather5[0].now
                });

            }
        })
        wx.request({
            url: app.globalData.APIURL + '/suggestion',
            data: {
                city: app.curid,
                key: app.globalData.APIKEY
            },
            success: function (res) {
                var dataArr = [];
                var suggestion = res.data.HeWeather5[0].suggestion;
                for (var name in suggestion) {
                    suggestion[name].name = name;
                    dataArr.push(suggestion[name]);
                }

                self.setData({
                    lifeIndex: dataArr
                });

            }
        })


    }
})