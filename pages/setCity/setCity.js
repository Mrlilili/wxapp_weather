var cityInfo = require('../../utils/cityInfo').cjson;
Page({
    selectedCityId: "CN101280102",
    data: {
        sheng: [],
        shengRange: [],
        shengIndex: 0,

        shi: [],
        shiRange: [],
        shiIndex: 0,

        qu: [],
        quRange: [],
        quIndex: 0

    },
    initPickData: function () {
        this.setPicker('sheng', cityInfo.sheng);
        this.setPicker('shi', cityInfo.shi.beijing);
        this.setPicker('qu', cityInfo.qu.beijing);
    },
    onShow: function () {
        this.initPickData();
        wx.setNavigationBarTitle({
            title: '设置城市'
        })
    },
    /**
     * 设置Picker
     * @param type Picker的类型 ['sheng','shi','qu']
     */

    setPicker: function (type, obj) {
        var _range = (function (o) {
            var _arr = []
            for (var name in o) {
                _arr.push(o[name][type == 'sheng' ? 'provinceZh' : (type == 'shi' ? 'leaderZh' : 'cityZh')])
            }
            return _arr;
        })(obj);
        var _setData = (function () {
            var _obj = {};
            switch (type) {
                case 'sheng':
                    _obj.sheng = obj;
                    _obj.shengRange = _range;
                    _obj.shengIndex = 0;
                    break;
                case 'shi':
                    _obj.shi = obj;
                    _obj.shiRange = _range;
                    _obj.shiIndex = 0;
                    break;
                case 'qu':
                    _obj.qu = obj;
                    _obj.quRange = _range;
                    _obj.quIndex = 0;
                    break;
            }

            return _obj;
        })();
        this.setData(_setData)
    },
    bindShengChange: function (e) {
        var curIndex = e.detail.value;
        console.log(curIndex);
        if(curIndex == 'null'){
            curIndex = 0;
        }
        console.log(curIndex);
        console.log(e);
        
        var shengEn = this.data.sheng[curIndex].provinceEn;//当前省名拼音
        var shiJson = cityInfo.shi;//所有市合集对象
        var shiObj = shiJson[shengEn];//当前省下所有市对象

        this.setData({
            shengIndex: curIndex
        })
        this.setPicker('shi', shiObj)
        this.setPicker('qu', cityInfo.qu[shiObj[0].leaderEn])
        this.selectedCityId = cityInfo.qu[shiObj[0].leaderEn][0].id;
    },
    bindShiChange: function (e) {
        var curIndex = e.detail.value;
        var shiEn = this.data.shi[curIndex].leaderEn;//当前市名拼音
        var quJson = cityInfo.qu;//所有区合集对象
        var quObj = quJson[shiEn];//当前市下所有区对象

        this.setData({
            shiIndex: curIndex
        })
        this.setPicker('qu', quObj);
    },
    bindQuChange: function (e) {
        this.setData({
            quIndex: e.detail.value
        })

        this.selectedCityId =this.data.qu[e.detail.value].id

    },
    returnView:function(){
        wx.setStorage({
            key: 'curid',
            data: this.selectedCityId
        })
        wx.navigateTo({url: '../index/index'})

    }
})