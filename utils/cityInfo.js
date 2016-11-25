//id:城市id  cityEn:城市英文  cityZh:城市中文  countryCode:国家代码  countryEn:国家英文  countryZh:国家中文  provinceEn:省英文  provinceEn:省中文  provinceEn:省中文  leaderEn:所属上级市英文  leaderZh:所属上级市中文  lat:纬度  lon:经度
var cjson = {
    "sheng": [
        {
            "provinceZh": "北京",
            "provinceEn": "beijing"
        },
        {
            "provinceZh": "上海",
            "provinceEn": "shanghai"
        },
        {
            "provinceZh": "天津",
            "provinceEn": "tianjin"
        },
        {
            "provinceZh": "重庆",
            "provinceEn": "chongqing"
        },
        {
            "provinceZh": "香港",
            "provinceEn": "hongkong"
        },
        {
            "provinceZh": "澳门",
            "provinceEn": "macao"
        },
        {
            "provinceZh": "台湾",
            "provinceEn": "taiwan"
        },
        {
            "provinceZh": "黑龙江",
            "provinceEn": "heilongjiang"
        },
        {
            "provinceZh": "吉林",
            "provinceEn": "jilin"
        },
        {
            "provinceZh": "辽宁",
            "provinceEn": "liaoning"
        },
        {
            "provinceZh": "内蒙古",
            "provinceEn": "neimenggu"
        },
        {
            "provinceZh": "河北",
            "provinceEn": "hebei"
        },
        {
            "provinceZh": "河南",
            "provinceEn": "henan"
        },
        {
            "provinceZh": "山西",
            "provinceEn": "shanxi"
        },
        {
            "provinceZh": "山东",
            "provinceEn": "shandong"
        },
        {
            "provinceZh": "江苏",
            "provinceEn": "jiangsu"
        },
        {
            "provinceZh": "浙江",
            "provinceEn": "zhejiang"
        },
        {
            "provinceZh": "福建",
            "provinceEn": "fujian"
        },
        {
            "provinceZh": "江西",
            "provinceEn": "jiangxi"
        },
        {
            "provinceZh": "安徽",
            "provinceEn": "anhui"
        },
        {
            "provinceZh": "湖北",
            "provinceEn": "hubei"
        },
        {
            "provinceZh": "湖南",
            "provinceEn": "hunan"
        },
        {
            "provinceZh": "广东",
            "provinceEn": "guangdong"
        },
        {
            "provinceZh": "广西",
            "provinceEn": "guangxi"
        },
        {
            "provinceZh": "海南",
            "provinceEn": "hainan"
        },
        {
            "provinceZh": "贵州",
            "provinceEn": "guizhou"
        },
        {
            "provinceZh": "云南",
            "provinceEn": "yunnan"
        },
        {
            "provinceZh": "四川",
            "provinceEn": "sichuan"
        },
        {
            "provinceZh": "西藏",
            "provinceEn": "xizang"
        },
        {
            "provinceZh": "陕西",
            "provinceEn": "shan-xi"
        },
        {
            "provinceZh": "宁夏",
            "provinceEn": "ningxia"
        },
        {
            "provinceZh": "甘肃",
            "provinceEn": "gansu"
        },
        {
            "provinceZh": "青海",
            "provinceEn": "qinghai"
        },
        {
            "provinceZh": "新疆",
            "provinceEn": "xinjiang"
        },
        {
            "provinceZh": "内蒙古",
            "provinceEn": "neimenggu"
        },
        {
            "provinceZh": "青海",
            "provinceEn": "qinghai"
        },
        {
            "provinceZh": "浙江",
            "provinceEn": "zhejiang"
        },
        {
            "provinceZh": "湖北",
            "provinceEn": "hubei"
        },
        {
            "provinceZh": "内蒙古",
            "provinceEn": "neimenggu"
        },
        {
            "provinceZh": "湖南",
            "provinceEn": "hunan"
        },
        {
            "provinceZh": "吉林",
            "provinceEn": "jilin"
        }
    ],
    "shi": {
        "beijing": [{"leaderEn": "beijing", "leaderZh": "北京"}],
        "shanghai": [{"leaderEn": "shanghai", "leaderZh": "上海"}],
        "tianjin": [{"leaderEn": "tianjin", "leaderZh": "天津"}],
        "chongqing": [{"leaderEn": "chongqing", "leaderZh": "重庆"}],
        "hongkong": [{"leaderEn": "hongkong", "leaderZh": "香港"}],
        "macao": [{"leaderEn": "macao", "leaderZh": "澳门"}],
        "taiwan": [{"leaderEn": "taibei", "leaderZh": "台北"}, {
            "leaderEn": "gaoxiong",
            "leaderZh": "高雄"
        }, {"leaderEn": "taizhong", "leaderZh": "台中"}],
        "heilongjiang": [{"leaderEn": "haerbin", "leaderZh": "哈尔滨"}, {
            "leaderEn": "qiqihaer",
            "leaderZh": "齐齐哈尔"
        }, {"leaderEn": "mudanjiang", "leaderZh": "牡丹江"}, {
            "leaderEn": "jiamusi",
            "leaderZh": "佳木斯"
        }, {"leaderEn": "suihua", "leaderZh": "绥化"}, {
            "leaderEn": "heihe",
            "leaderZh": "黑河"
        }, {"leaderEn": "daxinganling", "leaderZh": "大兴安岭"}, {
            "leaderEn": "yichun",
            "leaderZh": "伊春"
        }, {"leaderEn": "daqing", "leaderZh": "大庆"}, {"leaderEn": "qitaihe", "leaderZh": "七台河"}, {
            "leaderEn": "jixi",
            "leaderZh": "鸡西"
        }, {"leaderEn": "hegang", "leaderZh": "鹤岗"}, {"leaderEn": "shuangyashan", "leaderZh": "双鸭山"}],
        "jilin": [{"leaderEn": "changchun", "leaderZh": "长春"}, {
            "leaderEn": "jilin",
            "leaderZh": "吉林"
        }, {"leaderEn": "yanbian", "leaderZh": "延边"}, {"leaderEn": "siping", "leaderZh": "四平"}, {
            "leaderEn": "tonghua",
            "leaderZh": "通化"
        }, {"leaderEn": "baicheng", "leaderZh": "白城"}, {
            "leaderEn": "liaoyuan",
            "leaderZh": "辽源"
        }, {"leaderEn": "songyuan", "leaderZh": "松原"}, {
            "leaderEn": "baishan",
            "leaderZh": "白山"
        }, {"leaderEn": "changchun", "leaderZh": "长春"}],
        "liaoning": [{"leaderEn": "shenyang", "leaderZh": "沈阳"}, {
            "leaderEn": "dalian",
            "leaderZh": "大连"
        }, {"leaderEn": "anshan", "leaderZh": "鞍山"}, {"leaderEn": "fushun", "leaderZh": "抚顺"}, {
            "leaderEn": "benxi",
            "leaderZh": "本溪"
        }, {"leaderEn": "dandong", "leaderZh": "丹东"}, {"leaderEn": "jinzhou", "leaderZh": "锦州"}, {
            "leaderEn": "yingkou",
            "leaderZh": "营口"
        }, {"leaderEn": "fuxin", "leaderZh": "阜新"}, {"leaderEn": "liaoyang", "leaderZh": "辽阳"}, {
            "leaderEn": "tieling",
            "leaderZh": "铁岭"
        }, {"leaderEn": "chaoyang", "leaderZh": "朝阳"}, {"leaderEn": "panjin", "leaderZh": "盘锦"}, {
            "leaderEn": "huludao",
            "leaderZh": "葫芦岛"
        }],
        "neimenggu": [{"leaderEn": "huhehaote", "leaderZh": "呼和浩特"}, {
            "leaderEn": "baotou",
            "leaderZh": "包头"
        }, {"leaderEn": "wulanchabu", "leaderZh": "包头"}, {
            "leaderEn": "wuhai",
            "leaderZh": "乌海"
        }, {"leaderEn": "wulanchabu", "leaderZh": "乌兰察布"}, {
            "leaderEn": "tongliao",
            "leaderZh": "通辽"
        }, {"leaderEn": "chifeng", "leaderZh": "赤峰"}, {
            "leaderEn": "eerduosi",
            "leaderZh": "鄂尔多斯"
        }, {"leaderEn": "bayannaoer", "leaderZh": "巴彦淖尔"}, {
            "leaderEn": "xilinguole",
            "leaderZh": "锡林郭勒"
        }, {"leaderEn": "hulunbeier", "leaderZh": "呼伦贝尔"}, {
            "leaderEn": "xinganmeng",
            "leaderZh": "兴安盟"
        }, {"leaderEn": "alashanmeng", "leaderZh": "阿拉善盟"}, {
            "leaderEn": "tongliao",
            "leaderZh": "通辽"
        }, {"leaderEn": "xinganmeng", "leaderZh": "兴安盟"}],
        "hebei": [{"leaderEn": "shijiazhuang", "leaderZh": "石家庄"}, {
            "leaderEn": "baoding",
            "leaderZh": "保定"
        }, {"leaderEn": "zhangjiakou", "leaderZh": "张家口"}, {
            "leaderEn": "chengde",
            "leaderZh": "承德"
        }, {"leaderEn": "tangshan", "leaderZh": "唐山"}, {
            "leaderEn": "langfang",
            "leaderZh": "廊坊"
        }, {"leaderEn": "cangzhou", "leaderZh": "沧州"}, {
            "leaderEn": "hengshui",
            "leaderZh": "衡水"
        }, {"leaderEn": "xingtai", "leaderZh": "邢台"}, {
            "leaderEn": "handan",
            "leaderZh": "邯郸"
        }, {"leaderEn": "qinhuangdao", "leaderZh": "秦皇岛"}],
        "henan": [{"leaderEn": "zhengzhou", "leaderZh": "郑州"}, {
            "leaderEn": "anyang",
            "leaderZh": "安阳"
        }, {"leaderEn": "xinxiang", "leaderZh": "新乡"}, {
            "leaderEn": "xuchang",
            "leaderZh": "许昌"
        }, {"leaderEn": "pingdingshan", "leaderZh": "平顶山"}, {
            "leaderEn": "xinyang",
            "leaderZh": "信阳"
        }, {"leaderEn": "nanyang", "leaderZh": "南阳"}, {"leaderEn": "kaifeng", "leaderZh": "开封"}, {
            "leaderEn": "luoyang",
            "leaderZh": "洛阳"
        }, {"leaderEn": "shangqiu", "leaderZh": "商丘"}, {"leaderEn": "jiaozuo", "leaderZh": "焦作"}, {
            "leaderEn": "hebi",
            "leaderZh": "鹤壁"
        }, {"leaderEn": "puyang", "leaderZh": "濮阳"}, {"leaderEn": "zhoukou", "leaderZh": "周口"}, {
            "leaderEn": "luohe",
            "leaderZh": "漯河"
        }, {"leaderEn": "zhumadian", "leaderZh": "驻马店"}, {
            "leaderEn": "sanmenxia",
            "leaderZh": "三门峡"
        }, {"leaderEn": "jiyuan", "leaderZh": "济源"}],
        "shanxi": [{"leaderEn": "taiyuan", "leaderZh": "太原"}, {
            "leaderEn": "datong",
            "leaderZh": "大同"
        }, {"leaderEn": "yangquan", "leaderZh": "阳泉"}, {
            "leaderEn": "jinzhong",
            "leaderZh": "晋中"
        }, {"leaderEn": "changzhi", "leaderZh": "长治"}, {
            "leaderEn": "jincheng",
            "leaderZh": "晋城"
        }, {"leaderEn": "linfen", "leaderZh": "临汾"}, {
            "leaderEn": "yuncheng",
            "leaderZh": "运城"
        }, {"leaderEn": "shuozhou", "leaderZh": "朔州"}, {
            "leaderEn": "xinzhou",
            "leaderZh": "忻州"
        }, {"leaderEn": "lvliang", "leaderZh": "吕梁"}],
        "shandong": [{"leaderEn": "jinan", "leaderZh": "济南"}, {
            "leaderEn": "qingdao",
            "leaderZh": "青岛"
        }, {"leaderEn": "zibo", "leaderZh": "淄博"}, {"leaderEn": "dezhou", "leaderZh": "德州"}, {
            "leaderEn": "yantai",
            "leaderZh": "烟台"
        }, {"leaderEn": "weifang", "leaderZh": "潍坊"}, {"leaderEn": "jining", "leaderZh": "济宁"}, {
            "leaderEn": "taian",
            "leaderZh": "泰安"
        }, {"leaderEn": "linyi", "leaderZh": "临沂"}, {"leaderEn": "heze", "leaderZh": "菏泽"}, {
            "leaderEn": "binzhou",
            "leaderZh": "滨州"
        }, {"leaderEn": "dongying", "leaderZh": "东营"}, {
            "leaderEn": "weihai",
            "leaderZh": "威海"
        }, {"leaderEn": "zaozhuang", "leaderZh": "枣庄"}, {"leaderEn": "rizhao", "leaderZh": "日照"}, {
            "leaderEn": "laiwu",
            "leaderZh": "莱芜"
        }, {"leaderEn": "liaocheng", "leaderZh": "聊城"}],
        "jiangsu": [{"leaderEn": "nanjing", "leaderZh": "南京"}, {
            "leaderEn": "wuxi",
            "leaderZh": "无锡"
        }, {"leaderEn": "zhenjiang", "leaderZh": "镇江"}, {
            "leaderEn": "suzhou",
            "leaderZh": "苏州"
        }, {"leaderEn": "nantong", "leaderZh": "南通"}, {
            "leaderEn": "yangzhou",
            "leaderZh": "扬州"
        }, {"leaderEn": "yancheng", "leaderZh": "盐城"}, {"leaderEn": "xuzhou", "leaderZh": "徐州"}, {
            "leaderEn": "huaian",
            "leaderZh": "淮安"
        }, {"leaderEn": "lianyungang", "leaderZh": "连云港"}, {
            "leaderEn": "changzhou",
            "leaderZh": "常州"
        }, {"leaderEn": "taizhou", "leaderZh": "泰州"}, {"leaderEn": "suqian", "leaderZh": "宿迁"}],
        "zhejiang": [{"leaderEn": "hangzhou", "leaderZh": "杭州"}, {
            "leaderEn": "huzhou",
            "leaderZh": "湖州"
        }, {"leaderEn": "jiaxing", "leaderZh": "嘉兴"}, {"leaderEn": "ningbo", "leaderZh": "宁波"}, {
            "leaderEn": "shaoxing",
            "leaderZh": "绍兴"
        }, {"leaderEn": "taizhou", "leaderZh": "台州"}, {"leaderEn": "wenzhou", "leaderZh": "温州"}, {
            "leaderEn": "lishui",
            "leaderZh": "丽水"
        }, {"leaderEn": "jinhua", "leaderZh": "金华"}, {"leaderEn": "quzhou", "leaderZh": "衢州"}, {
            "leaderEn": "zhoushan",
            "leaderZh": "舟山"
        }, {"leaderEn": "shaoxing", "leaderZh": "绍兴"}],
        "fujian": [{"leaderEn": "fuzhou", "leaderZh": "福州"}, {
            "leaderEn": "diaoyudao",
            "leaderZh": "钓鱼岛"
        }, {"leaderEn": "xiamen", "leaderZh": "厦门"}, {"leaderEn": "ningde", "leaderZh": "宁德"}, {
            "leaderEn": "putian",
            "leaderZh": "莆田"
        }, {"leaderEn": "quanzhou", "leaderZh": "泉州"}, {
            "leaderEn": "zhangzhou",
            "leaderZh": "漳州"
        }, {"leaderEn": "longyan", "leaderZh": "龙岩"}, {"leaderEn": "sanming", "leaderZh": "三明"}, {
            "leaderEn": "nanping",
            "leaderZh": "南平"
        }],
        "jiangxi": [{"leaderEn": "nanchang", "leaderZh": "南昌"}, {
            "leaderEn": "jiujiang",
            "leaderZh": "九江"
        }, {"leaderEn": "shangrao", "leaderZh": "上饶"}, {"leaderEn": "fuzhou", "leaderZh": "抚州"}, {
            "leaderEn": "yichun",
            "leaderZh": "宜春"
        }, {"leaderEn": "jian", "leaderZh": "吉安"}, {"leaderEn": "ganzhou", "leaderZh": "赣州"}, {
            "leaderEn": "jingdezhen",
            "leaderZh": "景德镇"
        }, {"leaderEn": "pingxiang", "leaderZh": "萍乡"}, {"leaderEn": "xinyu", "leaderZh": "新余"}, {
            "leaderEn": "yingtan",
            "leaderZh": "鹰潭"
        }],
        "anhui": [{"leaderEn": "hefei", "leaderZh": "合肥"}, {
            "leaderEn": "bengbu",
            "leaderZh": "蚌埠"
        }, {"leaderEn": "wuhu", "leaderZh": "芜湖"}, {"leaderEn": "huainan", "leaderZh": "淮南"}, {
            "leaderEn": "maanshan",
            "leaderZh": "马鞍山"
        }, {"leaderEn": "anqing", "leaderZh": "安庆"}, {"leaderEn": "suzhou", "leaderZh": "宿州"}, {
            "leaderEn": "fuyang",
            "leaderZh": "阜阳"
        }, {"leaderEn": "bozhou", "leaderZh": "亳州"}, {
            "leaderEn": "huangshan",
            "leaderZh": "黄山"
        }, {"leaderEn": "chuzhou", "leaderZh": "滁州"}, {
            "leaderEn": "huaibei",
            "leaderZh": "淮北"
        }, {"leaderEn": "tongling", "leaderZh": "铜陵"}, {"leaderEn": "xuancheng", "leaderZh": "宣城"}, {
            "leaderEn": "luan",
            "leaderZh": "六安"
        }, {"leaderEn": "liuan", "leaderZh": "六安"}, {"leaderEn": "hefei", "leaderZh": "合肥"}, {
            "leaderEn": "wuhu",
            "leaderZh": "芜湖"
        }, {"leaderEn": "maanshan", "leaderZh": "马鞍山"}, {"leaderEn": "chizhou", "leaderZh": "池州"}],
        "hubei": [{"leaderEn": "wuhan", "leaderZh": "武汉"}, {
            "leaderEn": "xiangyang",
            "leaderZh": "襄阳"
        }, {"leaderEn": "ezhou", "leaderZh": "鄂州"}, {"leaderEn": "xiaogan", "leaderZh": "孝感"}, {
            "leaderEn": "huanggang",
            "leaderZh": "黄冈"
        }, {"leaderEn": "huangshi", "leaderZh": "黄石"}, {
            "leaderEn": "xianning",
            "leaderZh": "咸宁"
        }, {"leaderEn": "jingzhou", "leaderZh": "荆州"}, {"leaderEn": "yichang", "leaderZh": "宜昌"}, {
            "leaderEn": "enshi",
            "leaderZh": "恩施"
        }, {"leaderEn": "shiyan", "leaderZh": "十堰"}, {
            "leaderEn": "shennongjia",
            "leaderZh": "神农架"
        }, {"leaderEn": "suizhou", "leaderZh": "随州"}, {"leaderEn": "jingmen", "leaderZh": "荆门"}, {
            "leaderEn": "tianmen",
            "leaderZh": "天门"
        }, {"leaderEn": "xiantao", "leaderZh": "仙桃"}, {
            "leaderEn": "qianjiang",
            "leaderZh": "潜江"
        }, {"leaderEn": "jingzhou", "leaderZh": "荆州"}],
        "hunan": [{"leaderEn": "changsha", "leaderZh": "长沙"}, {
            "leaderEn": "xiangtan",
            "leaderZh": "湘潭"
        }, {"leaderEn": "zhuzhou", "leaderZh": "株洲"}, {
            "leaderEn": "hengyang",
            "leaderZh": "衡阳"
        }, {"leaderEn": "chenzhou", "leaderZh": "郴州"}, {"leaderEn": "changde", "leaderZh": "常德"}, {
            "leaderEn": "yiyang",
            "leaderZh": "益阳"
        }, {"leaderEn": "loudi", "leaderZh": "娄底"}, {"leaderEn": "shaoyang", "leaderZh": "邵阳"}, {
            "leaderEn": "yueyang",
            "leaderZh": "岳阳"
        }, {"leaderEn": "zhangjiajie", "leaderZh": "张家界"}, {
            "leaderEn": "huaihua",
            "leaderZh": "怀化"
        }, {"leaderEn": "yongzhou", "leaderZh": "永州"}, {
            "leaderEn": "xiangxi",
            "leaderZh": "湘西"
        }, {"leaderEn": "changsha", "leaderZh": "长沙"}],
        "guangdong": [{"leaderEn": "guangzhou", "leaderZh": "广州"}, {
            "leaderEn": "shaoguan",
            "leaderZh": "韶关"
        }, {"leaderEn": "huizhou", "leaderZh": "惠州"}, {"leaderEn": "meizhou", "leaderZh": "梅州"}, {
            "leaderEn": "shantou",
            "leaderZh": "汕头"
        }, {"leaderEn": "shenzhen", "leaderZh": "深圳"}, {"leaderEn": "zhuhai", "leaderZh": "珠海"}, {
            "leaderEn": "foshan",
            "leaderZh": "佛山"
        }, {"leaderEn": "zhaoqing", "leaderZh": "肇庆"}, {
            "leaderEn": "zhanjiang",
            "leaderZh": "湛江"
        }, {"leaderEn": "jiangmen", "leaderZh": "江门"}, {
            "leaderEn": "heyuan",
            "leaderZh": "河源"
        }, {"leaderEn": "qingyuan", "leaderZh": "清远"}, {"leaderEn": "yunfu", "leaderZh": "云浮"}, {
            "leaderEn": "chaozhou",
            "leaderZh": "潮州"
        }, {"leaderEn": "dongguan", "leaderZh": "东莞"}, {
            "leaderEn": "zhongshan",
            "leaderZh": "中山"
        }, {"leaderEn": "yangjiang", "leaderZh": "阳江"}, {
            "leaderEn": "jieyang",
            "leaderZh": "揭阳"
        }, {"leaderEn": "maoming", "leaderZh": "茂名"}, {"leaderEn": "shanwei", "leaderZh": "汕尾"}],
        "guangxi": [{"leaderEn": "nanning", "leaderZh": "南宁"}, {
            "leaderEn": "chongzuo",
            "leaderZh": "崇左"
        }, {"leaderEn": "liuzhou", "leaderZh": "柳州"}, {"leaderEn": "laibin", "leaderZh": "来宾"}, {
            "leaderEn": "guilin",
            "leaderZh": "桂林"
        }, {"leaderEn": "wuzhou", "leaderZh": "梧州"}, {"leaderEn": "hezhou", "leaderZh": "贺州"}, {
            "leaderEn": "guigang",
            "leaderZh": "贵港"
        }, {"leaderEn": "yulin", "leaderZh": "玉林"}, {"leaderEn": "baise", "leaderZh": "百色"}, {
            "leaderEn": "qinzhou",
            "leaderZh": "钦州"
        }, {"leaderEn": "hechi", "leaderZh": "河池"}, {
            "leaderEn": "beihai",
            "leaderZh": "北海"
        }, {"leaderEn": "fangchenggang", "leaderZh": "防城港"}],
        "hainan": [{"leaderEn": "haikou", "leaderZh": "海口"}, {
            "leaderEn": "sanya",
            "leaderZh": "三亚"
        }, {"leaderEn": "dongfang", "leaderZh": "东方"}, {
            "leaderEn": "lingao",
            "leaderZh": "临高"
        }, {"leaderEn": "chengmai", "leaderZh": "澄迈"}, {
            "leaderEn": "zhanzhou",
            "leaderZh": "儋州"
        }, {"leaderEn": "changjiang", "leaderZh": "昌江"}, {
            "leaderEn": "baisha",
            "leaderZh": "白沙"
        }, {"leaderEn": "qiongzhong", "leaderZh": "琼中"}, {
            "leaderEn": "dingan",
            "leaderZh": "定安"
        }, {"leaderEn": "tunchang", "leaderZh": "屯昌"}, {
            "leaderEn": "qionghai",
            "leaderZh": "琼海"
        }, {"leaderEn": "wenchang", "leaderZh": "文昌"}, {
            "leaderEn": "baoting",
            "leaderZh": "保亭"
        }, {"leaderEn": "wanning", "leaderZh": "万宁"}, {"leaderEn": "lingshui", "leaderZh": "陵水"}, {
            "leaderEn": "xisha",
            "leaderZh": "西沙"
        }, {"leaderEn": "nansha", "leaderZh": "南沙"}, {"leaderEn": "ledong", "leaderZh": "乐东"}, {
            "leaderEn": "wuzhishan",
            "leaderZh": "五指山"
        }, {"leaderEn": "zhongsha", "leaderZh": "中沙"}],
        "guizhou": [{"leaderEn": "guiyang", "leaderZh": "贵阳"}, {
            "leaderEn": "zunyi",
            "leaderZh": "遵义"
        }, {"leaderEn": "anshun", "leaderZh": "安顺"}, {
            "leaderEn": "qiannan",
            "leaderZh": "黔南"
        }, {"leaderEn": "qiandongnan", "leaderZh": "黔东南"}, {
            "leaderEn": "tongren",
            "leaderZh": "铜仁"
        }, {"leaderEn": "bijie", "leaderZh": "毕节"}, {
            "leaderEn": "liupanshui",
            "leaderZh": "六盘水"
        }, {"leaderEn": "qianxinan", "leaderZh": "黔西南"}],
        "yunnan": [{"leaderEn": "kunming", "leaderZh": "昆明"}, {
            "leaderEn": "dali",
            "leaderZh": "大理"
        }, {"leaderEn": "honghe", "leaderZh": "红河"}, {"leaderEn": "qujing", "leaderZh": "曲靖"}, {
            "leaderEn": "baoshan",
            "leaderZh": "保山"
        }, {"leaderEn": "wenshan", "leaderZh": "文山"}, {"leaderEn": "yuxi", "leaderZh": "玉溪"}, {
            "leaderEn": "chuxiong",
            "leaderZh": "楚雄"
        }, {"leaderEn": "puer", "leaderZh": "普洱"}, {"leaderEn": "zhaotong", "leaderZh": "昭通"}, {
            "leaderEn": "lincang",
            "leaderZh": "临沧"
        }, {"leaderEn": "nujiang", "leaderZh": "怒江"}, {"leaderEn": "diqing", "leaderZh": "迪庆"}, {
            "leaderEn": "lijiang",
            "leaderZh": "丽江"
        }, {"leaderEn": "dehong", "leaderZh": "德宏"}, {"leaderEn": "xishuangbanna", "leaderZh": "西双版纳"}],
        "sichuan": [{"leaderEn": "chengdu", "leaderZh": "成都"}, {
            "leaderEn": "panzhihua",
            "leaderZh": "攀枝花"
        }, {"leaderEn": "zigong", "leaderZh": "自贡"}, {
            "leaderEn": "mianyang",
            "leaderZh": "绵阳"
        }, {"leaderEn": "nanchong", "leaderZh": "南充"}, {"leaderEn": "dazhou", "leaderZh": "达州"}, {
            "leaderEn": "suining",
            "leaderZh": "遂宁"
        }, {"leaderEn": "guangan", "leaderZh": "广安"}, {"leaderEn": "bazhong", "leaderZh": "巴中"}, {
            "leaderEn": "luzhou",
            "leaderZh": "泸州"
        }, {"leaderEn": "yibin", "leaderZh": "宜宾"}, {"leaderEn": "neijiang", "leaderZh": "内江"}, {
            "leaderEn": "ziyang",
            "leaderZh": "资阳"
        }, {"leaderEn": "leshan", "leaderZh": "乐山"}, {
            "leaderEn": "meishan",
            "leaderZh": "眉山"
        }, {"leaderEn": "liangshan", "leaderZh": "凉山"}, {"leaderEn": "yaan", "leaderZh": "雅安"}, {
            "leaderEn": "ganzi",
            "leaderZh": "甘孜"
        }, {"leaderEn": "aba", "leaderZh": "阿坝"}, {"leaderEn": "deyang", "leaderZh": "德阳"}, {
            "leaderEn": "guangyuan",
            "leaderZh": "广元"
        }],
        "xizang": [{"leaderEn": "lasa", "leaderZh": "拉萨"}, {
            "leaderEn": "rikaze",
            "leaderZh": "日喀则"
        }, {"leaderEn": "shannan", "leaderZh": "山南"}, {"leaderEn": "linzi", "leaderZh": "林芝"}, {
            "leaderEn": "linzhi",
            "leaderZh": "林芝"
        }, {"leaderEn": "changdu", "leaderZh": "昌都"}, {"leaderEn": "naqu", "leaderZh": "那曲"}, {
            "leaderEn": "ali",
            "leaderZh": "阿里"
        }],
        "shan-xi": [{"leaderEn": "xian", "leaderZh": "西安"}, {
            "leaderEn": "xianyang",
            "leaderZh": "咸阳"
        }, {"leaderEn": "yanan", "leaderZh": "延安"}, {"leaderEn": "yulin", "leaderZh": "榆林"}, {
            "leaderEn": "weinan",
            "leaderZh": "渭南"
        }, {"leaderEn": "shangluo", "leaderZh": "商洛"}, {
            "leaderEn": "ankang",
            "leaderZh": "安康"
        }, {"leaderEn": "hanzhong", "leaderZh": "汉中"}, {
            "leaderEn": "baoji",
            "leaderZh": "宝鸡"
        }, {"leaderEn": "tongchuan", "leaderZh": "铜川"}, {"leaderEn": "yangling", "leaderZh": "杨凌"}],
        "ningxia": [{"leaderEn": "yinchuan", "leaderZh": "银川"}, {
            "leaderEn": "shizuishan",
            "leaderZh": "石嘴山"
        }, {"leaderEn": "wuzhong", "leaderZh": "吴忠"}, {"leaderEn": "guyuan", "leaderZh": "固原"}, {
            "leaderEn": "zhongwei",
            "leaderZh": "中卫"
        }],
        "gansu": [{"leaderEn": "lanzhou", "leaderZh": "兰州"}, {
            "leaderEn": "dingxi",
            "leaderZh": "定西"
        }, {"leaderEn": "pingliang", "leaderZh": "平凉"}, {
            "leaderEn": "qingyang",
            "leaderZh": "庆阳"
        }, {"leaderEn": "wuwei", "leaderZh": "武威"}, {"leaderEn": "jinchang", "leaderZh": "金昌"}, {
            "leaderEn": "zhangye",
            "leaderZh": "张掖"
        }, {"leaderEn": "jiuquan", "leaderZh": "酒泉"}, {
            "leaderEn": "tianshui",
            "leaderZh": "天水"
        }, {"leaderEn": "longnan", "leaderZh": "陇南"}, {"leaderEn": "linxia", "leaderZh": "临夏"}, {
            "leaderEn": "gannan",
            "leaderZh": "甘南"
        }, {"leaderEn": "baiyin", "leaderZh": "白银"}, {"leaderEn": "jiayuguan", "leaderZh": "嘉峪关"}],
        "qinghai": [{"leaderEn": "xining", "leaderZh": "西宁"}, {
            "leaderEn": "haidong",
            "leaderZh": "海东"
        }, {"leaderEn": "huangnan", "leaderZh": "黄南"}, {"leaderEn": "hainan", "leaderZh": "海南"}, {
            "leaderEn": "guoluo",
            "leaderZh": "果洛"
        }, {"leaderEn": "yushu", "leaderZh": "玉树"}, {"leaderEn": "haixi", "leaderZh": "海西"}, {
            "leaderEn": "haibei",
            "leaderZh": "海北"
        }, {"leaderEn": "haixi", "leaderZh": "海西"}],
        "xinjiang": [{"leaderEn": "wulumuqi", "leaderZh": "乌鲁木齐"}, {
            "leaderEn": "kelamayi",
            "leaderZh": "克拉玛依"
        }, {"leaderEn": "shihezi", "leaderZh": "石河子"}, {
            "leaderEn": "changji",
            "leaderZh": "昌吉"
        }, {"leaderEn": "tulufan", "leaderZh": "吐鲁番"}, {
            "leaderEn": "bayinguoleng",
            "leaderZh": "巴音郭楞"
        }, {"leaderEn": "alaer", "leaderZh": "阿拉尔"}, {"leaderEn": "akesu", "leaderZh": "阿克苏"}, {
            "leaderEn": "kashi",
            "leaderZh": "喀什"
        }, {"leaderEn": "yili", "leaderZh": "伊犁"}, {"leaderEn": "tacheng", "leaderZh": "塔城"}, {
            "leaderEn": "hami",
            "leaderZh": "哈密"
        }, {"leaderEn": "hetian", "leaderZh": "和田"}, {"leaderEn": "aletai", "leaderZh": "阿勒泰"}, {
            "leaderEn": "kezhou",
            "leaderZh": "克州"
        }, {"leaderEn": "boertala", "leaderZh": "博尔塔拉"}]
    },
    "qu": {
        "beijing": [{"cityEn": "beijing", "cityZh": "北京", "id": "CN101010100"}, {
            "cityEn": "haidian",
            "cityZh": "海淀",
            "id": "CN101010200"
        }, {"cityEn": "chaoyang", "cityZh": "朝阳", "id": "CN101010300"}, {
            "cityEn": "shunyi",
            "cityZh": "顺义",
            "id": "CN101010400"
        }, {"cityEn": "huairou", "cityZh": "怀柔", "id": "CN101010500"}, {
            "cityEn": "tongzhou",
            "cityZh": "通州",
            "id": "CN101010600"
        }, {"cityEn": "changping", "cityZh": "昌平", "id": "CN101010700"}, {
            "cityEn": "yanqing",
            "cityZh": "延庆",
            "id": "CN101010800"
        }, {"cityEn": "fengtai", "cityZh": "丰台", "id": "CN101010900"}, {
            "cityEn": "shijingshan",
            "cityZh": "石景山",
            "id": "CN101011000"
        }, {"cityEn": "daxing", "cityZh": "大兴", "id": "CN101011100"}, {
            "cityEn": "fangshan",
            "cityZh": "房山",
            "id": "CN101011200"
        }, {"cityEn": "miyun", "cityZh": "密云", "id": "CN101011300"}, {
            "cityEn": "mentougou",
            "cityZh": "门头沟",
            "id": "CN101011400"
        }, {"cityEn": "pinggu", "cityZh": "平谷", "id": "CN101011500"}],
        "shanghai": [{"cityEn": "shanghai", "cityZh": "上海", "id": "CN101020100"}, {
            "cityEn": "minhang",
            "cityZh": "闵行",
            "id": "CN101020200"
        }, {"cityEn": "baoshan", "cityZh": "宝山", "id": "CN101020300"}, {
            "cityEn": "jiading",
            "cityZh": "嘉定",
            "id": "CN101020500"
        }, {"cityEn": "pudongxinqu", "cityZh": "浦东新区", "id": "CN101020600"}, {
            "cityEn": "jinshan",
            "cityZh": "金山",
            "id": "CN101020700"
        }, {"cityEn": "qingpu", "cityZh": "青浦", "id": "CN101020800"}, {
            "cityEn": "songjiang",
            "cityZh": "松江",
            "id": "CN101020900"
        }, {"cityEn": "fengxian", "cityZh": "奉贤", "id": "CN101021000"}, {
            "cityEn": "chongming",
            "cityZh": "崇明",
            "id": "CN101021100"
        }, {"cityEn": "xuhui", "cityZh": "徐汇", "id": "CN101021200"}],
        "tianjin": [{"cityEn": "tianjin", "cityZh": "天津", "id": "CN101030100"}, {
            "cityEn": "wuqing",
            "cityZh": "武清",
            "id": "CN101030200"
        }, {"cityEn": "baodi", "cityZh": "宝坻", "id": "CN101030300"}, {
            "cityEn": "dongli",
            "cityZh": "东丽",
            "id": "CN101030400"
        }, {"cityEn": "xiqing", "cityZh": "西青", "id": "CN101030500"}, {
            "cityEn": "beichen",
            "cityZh": "北辰",
            "id": "CN101030600"
        }, {"cityEn": "ninghe", "cityZh": "宁河", "id": "CN101030700"}, {
            "cityEn": "jinghai",
            "cityZh": "静海",
            "id": "CN101030900"
        }, {"cityEn": "jinnan", "cityZh": "津南", "id": "CN101031000"}, {
            "cityEn": "binhaixinqu",
            "cityZh": "滨海新区",
            "id": "CN101031100"
        }, {"cityEn": "jixian", "cityZh": "蓟县", "id": "CN101031400"}],
        "chongqing": [{"cityEn": "chongqing", "cityZh": "重庆", "id": "CN101040100"}, {
            "cityEn": "yongchuan",
            "cityZh": "永川",
            "id": "CN101040200"
        }, {"cityEn": "hechuan", "cityZh": "合川", "id": "CN101040300"}, {
            "cityEn": "nanchuan",
            "cityZh": "南川",
            "id": "CN101040400"
        }, {"cityEn": "jiangjin", "cityZh": "江津", "id": "CN101040500"}, {
            "cityEn": "wansheng",
            "cityZh": "万盛",
            "id": "CN101040600"
        }, {"cityEn": "yubei", "cityZh": "渝北", "id": "CN101040700"}, {
            "cityEn": "beibei",
            "cityZh": "北碚",
            "id": "CN101040800"
        }, {"cityEn": "banan", "cityZh": "巴南", "id": "CN101040900"}, {
            "cityEn": "changshou",
            "cityZh": "长寿",
            "id": "CN101041000"
        }, {"cityEn": "qianjiang", "cityZh": "黔江", "id": "CN101041100"}, {
            "cityEn": "wanzhou",
            "cityZh": "万州",
            "id": "CN101041300"
        }, {"cityEn": "fuling", "cityZh": "涪陵", "id": "CN101041400"}, {
            "cityEn": "kaixian",
            "cityZh": "开县",
            "id": "CN101041500"
        }, {"cityEn": "chengkou", "cityZh": "城口", "id": "CN101041600"}, {
            "cityEn": "yunyang",
            "cityZh": "云阳",
            "id": "CN101041700"
        }, {"cityEn": "wuxi", "cityZh": "巫溪", "id": "CN101041800"}, {
            "cityEn": "fengjie",
            "cityZh": "奉节",
            "id": "CN101041900"
        }, {"cityEn": "wushan", "cityZh": "巫山", "id": "CN101042000"}, {
            "cityEn": "tongnan",
            "cityZh": "潼南",
            "id": "CN101042100"
        }, {"cityEn": "dianjiang", "cityZh": "垫江", "id": "CN101042200"}, {
            "cityEn": "liangping",
            "cityZh": "梁平",
            "id": "CN101042300"
        }, {"cityEn": "zhongxian", "cityZh": "忠县", "id": "CN101042400"}, {
            "cityEn": "shizhu",
            "cityZh": "石柱",
            "id": "CN101042500"
        }, {"cityEn": "dazu", "cityZh": "大足", "id": "CN101042600"}, {
            "cityEn": "rongchang",
            "cityZh": "荣昌",
            "id": "CN101042700"
        }, {"cityEn": "tongliang", "cityZh": "铜梁", "id": "CN101042800"}, {
            "cityEn": "bishan",
            "cityZh": "璧山",
            "id": "CN101042900"
        }, {"cityEn": "fengdu", "cityZh": "丰都", "id": "CN101043000"}, {
            "cityEn": "wulong",
            "cityZh": "武隆",
            "id": "CN101043100"
        }, {"cityEn": "pengshui", "cityZh": "彭水", "id": "CN101043200"}, {
            "cityEn": "qijiang",
            "cityZh": "綦江",
            "id": "CN101043300"
        }, {"cityEn": "youyang", "cityZh": "酉阳", "id": "CN101043400"}, {
            "cityEn": "xiushan",
            "cityZh": "秀山",
            "id": "CN101043600"
        }],
        "hongkong": [{"cityEn": "hongkong", "cityZh": "香港", "id": "CN101320101"}, {
            "cityEn": "jiulong",
            "cityZh": "九龙",
            "id": "CN101320102"
        }, {"cityEn": "xinjie", "cityZh": "新界", "id": "CN101320103"}],
        "macao": [{"cityEn": "macao", "cityZh": "澳门", "id": "CN101330101"}, {
            "cityEn": "dangzidao",
            "cityZh": "氹仔岛",
            "id": "CN101330102"
        }, {"cityEn": "luhuandao", "cityZh": "路环岛", "id": "CN101330103"}],
        "taibei": [{"cityEn": "taibeixian", "cityZh": "台北", "id": "CN101340101"}, {
            "cityEn": "taoyuan",
            "cityZh": "桃园",
            "id": "CN101340102"
        }, {"cityEn": "xinzhu", "cityZh": "新竹", "id": "CN101340103"}, {
            "cityEn": "yilan",
            "cityZh": "宜兰",
            "id": "CN101340104"
        }],
        "gaoxiong": [{"cityEn": "gaoxiong", "cityZh": "高雄", "id": "CN101340201"}, {
            "cityEn": "jiayi",
            "cityZh": "嘉义",
            "id": "CN101340202"
        }, {"cityEn": "tainan", "cityZh": "台南", "id": "CN101340203"}, {
            "cityEn": "taidong",
            "cityZh": "台东",
            "id": "CN101340204"
        }, {"cityEn": "pingdong", "cityZh": "屏东", "id": "CN101340205"}],
        "taizhong": [{"cityEn": "taizhong", "cityZh": "台中", "id": "CN101340401"}, {
            "cityEn": "miaoli",
            "cityZh": "苗栗",
            "id": "CN101340402"
        }, {"cityEn": "zhanghua", "cityZh": "彰化", "id": "CN101340403"}, {
            "cityEn": "nantou",
            "cityZh": "南投",
            "id": "CN101340404"
        }, {"cityEn": "hualian", "cityZh": "花莲", "id": "CN101340405"}, {
            "cityEn": "yunlin",
            "cityZh": "云林",
            "id": "CN101340406"
        }],
        "haerbin": [{"cityEn": "haerbin", "cityZh": "哈尔滨", "id": "CN101050101"}, {
            "cityEn": "shuangcheng",
            "cityZh": "双城",
            "id": "CN101050102"
        }, {"cityEn": "hulan", "cityZh": "呼兰", "id": "CN101050103"}, {
            "cityEn": "acheng",
            "cityZh": "阿城",
            "id": "CN101050104"
        }, {"cityEn": "binxian", "cityZh": "宾县", "id": "CN101050105"}, {
            "cityEn": "yilan",
            "cityZh": "依兰",
            "id": "CN101050106"
        }, {"cityEn": "bayan", "cityZh": "巴彦", "id": "CN101050107"}, {
            "cityEn": "tonghe",
            "cityZh": "通河",
            "id": "CN101050108"
        }, {"cityEn": "fangzheng", "cityZh": "方正", "id": "CN101050109"}, {
            "cityEn": "yanshou",
            "cityZh": "延寿",
            "id": "CN101050110"
        }, {"cityEn": "shangzhi", "cityZh": "尚志", "id": "CN101050111"}, {
            "cityEn": "wuchang",
            "cityZh": "五常",
            "id": "CN101050112"
        }, {"cityEn": "mulan", "cityZh": "木兰", "id": "CN101050113"}],
        "qiqihaer": [{"cityEn": "qiqihaer", "cityZh": "齐齐哈尔", "id": "CN101050201"}, {
            "cityEn": "nehe",
            "cityZh": "讷河",
            "id": "CN101050202"
        }, {"cityEn": "longjiang", "cityZh": "龙江", "id": "CN101050203"}, {
            "cityEn": "gannan",
            "cityZh": "甘南",
            "id": "CN101050204"
        }, {"cityEn": "fuyu", "cityZh": "富裕", "id": "CN101050205"}, {
            "cityEn": "yian",
            "cityZh": "依安",
            "id": "CN101050206"
        }, {"cityEn": "baiquan", "cityZh": "拜泉", "id": "CN101050207"}, {
            "cityEn": "keshan",
            "cityZh": "克山",
            "id": "CN101050208"
        }, {"cityEn": "kedong", "cityZh": "克东", "id": "CN101050209"}, {
            "cityEn": "tailai",
            "cityZh": "泰来",
            "id": "CN101050210"
        }],
        "mudanjiang": [{"cityEn": "mudanjiang", "cityZh": "牡丹江", "id": "CN101050301"}, {
            "cityEn": "hailin",
            "cityZh": "海林",
            "id": "CN101050302"
        }, {"cityEn": "muling", "cityZh": "穆棱", "id": "CN101050303"}, {
            "cityEn": "linkou",
            "cityZh": "林口",
            "id": "CN101050304"
        }, {"cityEn": "suifenhe", "cityZh": "绥芬河", "id": "CN101050305"}, {
            "cityEn": "ningan",
            "cityZh": "宁安",
            "id": "CN101050306"
        }, {"cityEn": "dongning", "cityZh": "东宁", "id": "CN101050307"}],
        "jiamusi": [{"cityEn": "jiamusi", "cityZh": "佳木斯", "id": "CN101050401"}, {
            "cityEn": "tangyuan",
            "cityZh": "汤原",
            "id": "CN101050402"
        }, {"cityEn": "fuyuan", "cityZh": "抚远", "id": "CN101050403"}, {
            "cityEn": "huachuan",
            "cityZh": "桦川",
            "id": "CN101050404"
        }, {"cityEn": "huanan", "cityZh": "桦南", "id": "CN101050405"}, {
            "cityEn": "tongjiang",
            "cityZh": "同江",
            "id": "CN101050406"
        }, {"cityEn": "fujin", "cityZh": "富锦", "id": "CN101050407"}],
        "suihua": [{"cityEn": "suihua", "cityZh": "绥化", "id": "CN101050501"}, {
            "cityEn": "zhaodong",
            "cityZh": "肇东",
            "id": "CN101050502"
        }, {"cityEn": "anda", "cityZh": "安达", "id": "CN101050503"}, {
            "cityEn": "hailun",
            "cityZh": "海伦",
            "id": "CN101050504"
        }, {"cityEn": "mingshui", "cityZh": "明水", "id": "CN101050505"}, {
            "cityEn": "wangkui",
            "cityZh": "望奎",
            "id": "CN101050506"
        }, {"cityEn": "lanxi", "cityZh": "兰西", "id": "CN101050507"}, {
            "cityEn": "qinggang",
            "cityZh": "青冈",
            "id": "CN101050508"
        }, {"cityEn": "qingan", "cityZh": "庆安", "id": "CN101050509"}, {
            "cityEn": "suiling",
            "cityZh": "绥棱",
            "id": "CN101050510"
        }],
        "heihe": [{"cityEn": "heihe", "cityZh": "黑河", "id": "CN101050601"}, {
            "cityEn": "nenjiang",
            "cityZh": "嫩江",
            "id": "CN101050602"
        }, {"cityEn": "sunwu", "cityZh": "孙吴", "id": "CN101050603"}, {
            "cityEn": "xunke",
            "cityZh": "逊克",
            "id": "CN101050604"
        }, {"cityEn": "wudalianchi", "cityZh": "五大连池", "id": "CN101050605"}, {
            "cityEn": "beian",
            "cityZh": "北安",
            "id": "CN101050606"
        }],
        "daxinganling": [{"cityEn": "daxinganling", "cityZh": "大兴安岭", "id": "CN101050701"}, {
            "cityEn": "tahe",
            "cityZh": "塔河",
            "id": "CN101050702"
        }, {"cityEn": "mohe", "cityZh": "漠河", "id": "CN101050703"}, {
            "cityEn": "huma",
            "cityZh": "呼玛",
            "id": "CN101050704"
        }, {"cityEn": "huzhong", "cityZh": "呼中", "id": "CN101050705"}, {
            "cityEn": "xinlin",
            "cityZh": "新林",
            "id": "CN101050706"
        }, {"cityEn": "jiagedaqi", "cityZh": "加格达奇", "id": "CN101050708"}],
        "yichun": [{"cityEn": "yichun", "cityZh": "伊春", "id": "CN101050801"}, {
            "cityEn": "wuyiling",
            "cityZh": "乌伊岭",
            "id": "CN101050802"
        }, {"cityEn": "wuying", "cityZh": "五营", "id": "CN101050803"}, {
            "cityEn": "tieli",
            "cityZh": "铁力",
            "id": "CN101050804"
        }, {"cityEn": "jiayin", "cityZh": "嘉荫", "id": "CN101050805"}, {
            "cityEn": "yichun",
            "cityZh": "宜春",
            "id": "CN101240501"
        }, {"cityEn": "tonggu", "cityZh": "铜鼓", "id": "CN101240502"}, {
            "cityEn": "yifeng",
            "cityZh": "宜丰",
            "id": "CN101240503"
        }, {"cityEn": "wanzai", "cityZh": "万载", "id": "CN101240504"}, {
            "cityEn": "shanggao",
            "cityZh": "上高",
            "id": "CN101240505"
        }, {"cityEn": "jingan", "cityZh": "靖安", "id": "CN101240506"}, {
            "cityEn": "fengxin",
            "cityZh": "奉新",
            "id": "CN101240507"
        }, {"cityEn": "gaoan", "cityZh": "高安", "id": "CN101240508"}, {
            "cityEn": "zhangshu",
            "cityZh": "樟树",
            "id": "CN101240509"
        }, {"cityEn": "fengcheng", "cityZh": "丰城", "id": "CN101240510"}],
        "daqing": [{"cityEn": "daqing", "cityZh": "大庆", "id": "CN101050901"}, {
            "cityEn": "lindian",
            "cityZh": "林甸",
            "id": "CN101050902"
        }, {"cityEn": "zhaozhou", "cityZh": "肇州", "id": "CN101050903"}, {
            "cityEn": "zhaoyuan",
            "cityZh": "肇源",
            "id": "CN101050904"
        }, {"cityEn": "duerbote", "cityZh": "杜尔伯特", "id": "CN101050905"}],
        "qitaihe": [{"cityEn": "qitaihe", "cityZh": "七台河", "id": "CN101051002"}, {
            "cityEn": "boli",
            "cityZh": "勃利",
            "id": "CN101051003"
        }],
        "jixi": [{"cityEn": "jixi", "cityZh": "鸡西", "id": "CN101051101"}, {
            "cityEn": "hulin",
            "cityZh": "虎林",
            "id": "CN101051102"
        }, {"cityEn": "mishan", "cityZh": "密山", "id": "CN101051103"}, {
            "cityEn": "jidong",
            "cityZh": "鸡东",
            "id": "CN101051104"
        }],
        "hegang": [{"cityEn": "hegang", "cityZh": "鹤岗", "id": "CN101051201"}, {
            "cityEn": "suibin",
            "cityZh": "绥滨",
            "id": "CN101051202"
        }, {"cityEn": "luobei", "cityZh": "萝北", "id": "CN101051203"}],
        "shuangyashan": [{"cityEn": "shuangyashan", "cityZh": "双鸭山", "id": "CN101051301"}, {
            "cityEn": "jixian",
            "cityZh": "集贤",
            "id": "CN101051302"
        }, {"cityEn": "baoqing", "cityZh": "宝清", "id": "CN101051303"}, {
            "cityEn": "raohe",
            "cityZh": "饶河",
            "id": "CN101051304"
        }, {"cityEn": "youyi", "cityZh": "友谊", "id": "CN101051305"}],
        "changchun": [{"cityEn": "changchun", "cityZh": "长春", "id": "CN101060101"}, {
            "cityEn": "nongan",
            "cityZh": "农安",
            "id": "CN101060102"
        }, {"cityEn": "dehui", "cityZh": "德惠", "id": "CN101060103"}, {
            "cityEn": "jiutai",
            "cityZh": "九台",
            "id": "CN101060104"
        }, {"cityEn": "yushu", "cityZh": "榆树", "id": "CN101060105"}, {
            "cityEn": "shuangyang",
            "cityZh": "双阳",
            "id": "CN101060106"
        }, {"cityEn": "erdao", "cityZh": "二道", "id": "CN101060107"}],
        "jilin": [{"cityEn": "jilin", "cityZh": "吉林", "id": "CN101060201"}, {
            "cityEn": "shulan",
            "cityZh": "舒兰",
            "id": "CN101060202"
        }, {"cityEn": "yongji", "cityZh": "永吉", "id": "CN101060203"}, {
            "cityEn": "jiaohe",
            "cityZh": "蛟河",
            "id": "CN101060204"
        }, {"cityEn": "panshi", "cityZh": "磐石", "id": "CN101060205"}, {
            "cityEn": "huadian",
            "cityZh": "桦甸",
            "id": "CN101060206"
        }],
        "yanbian": [{"cityEn": "yanji", "cityZh": "延吉", "id": "CN101060301"}, {
            "cityEn": "dunhua",
            "cityZh": "敦化",
            "id": "CN101060302"
        }, {"cityEn": "antu", "cityZh": "安图", "id": "CN101060303"}, {
            "cityEn": "wangqing",
            "cityZh": "汪清",
            "id": "CN101060304"
        }, {"cityEn": "helong", "cityZh": "和龙", "id": "CN101060305"}, {
            "cityEn": "longjing",
            "cityZh": "龙井",
            "id": "CN101060307"
        }, {"cityEn": "hunchun", "cityZh": "珲春", "id": "CN101060308"}, {
            "cityEn": "tumen",
            "cityZh": "图们",
            "id": "CN101060309"
        }],
        "siping": [{"cityEn": "siping", "cityZh": "四平", "id": "CN101060401"}, {
            "cityEn": "shuangliao",
            "cityZh": "双辽",
            "id": "CN101060402"
        }, {"cityEn": "lishu", "cityZh": "梨树", "id": "CN101060403"}, {
            "cityEn": "gongzhuling",
            "cityZh": "公主岭",
            "id": "CN101060404"
        }, {"cityEn": "yitong", "cityZh": "伊通", "id": "CN101060405"}],
        "tonghua": [{"cityEn": "tonghua", "cityZh": "通化", "id": "CN101060501"}, {
            "cityEn": "meihekou",
            "cityZh": "梅河口",
            "id": "CN101060502"
        }, {"cityEn": "liuhe", "cityZh": "柳河", "id": "CN101060503"}, {
            "cityEn": "huinan",
            "cityZh": "辉南",
            "id": "CN101060504"
        }, {"cityEn": "jian", "cityZh": "集安", "id": "CN101060505"}, {
            "cityEn": "tonghuaxian",
            "cityZh": "通化县",
            "id": "CN101060506"
        }],
        "baicheng": [{"cityEn": "baicheng", "cityZh": "白城", "id": "CN101060601"}, {
            "cityEn": "taonan",
            "cityZh": "洮南",
            "id": "CN101060602"
        }, {"cityEn": "daan", "cityZh": "大安", "id": "CN101060603"}, {
            "cityEn": "zhenlai",
            "cityZh": "镇赉",
            "id": "CN101060604"
        }, {"cityEn": "tongyu", "cityZh": "通榆", "id": "CN101060605"}],
        "liaoyuan": [{"cityEn": "liaoyuan", "cityZh": "辽源", "id": "CN101060701"}, {
            "cityEn": "dongfeng",
            "cityZh": "东丰",
            "id": "CN101060702"
        }, {"cityEn": "dongliao", "cityZh": "东辽", "id": "CN101060703"}],
        "songyuan": [{"cityEn": "songyuan", "cityZh": "松原", "id": "CN101060801"}, {
            "cityEn": "qianan",
            "cityZh": "乾安",
            "id": "CN101060802"
        }, {"cityEn": "qianguo", "cityZh": "前郭", "id": "CN101060803"}, {
            "cityEn": "changling",
            "cityZh": "长岭",
            "id": "CN101060804"
        }, {"cityEn": "fuyu", "cityZh": "扶余", "id": "CN101060805"}],
        "baishan": [{"cityEn": "baishan", "cityZh": "白山", "id": "CN101060901"}, {
            "cityEn": "jingyu",
            "cityZh": "靖宇",
            "id": "CN101060902"
        }, {"cityEn": "linjiang", "cityZh": "临江", "id": "CN101060903"}, {
            "cityEn": "donggang",
            "cityZh": "东岗",
            "id": "CN101060904"
        }, {"cityEn": "changbai", "cityZh": "长白", "id": "CN101060905"}, {
            "cityEn": "fusong",
            "cityZh": "抚松",
            "id": "CN101060906"
        }, {"cityEn": "jiangyuan", "cityZh": "江源", "id": "CN101060907"}],
        "shenyang": [{"cityEn": "shenyang", "cityZh": "沈阳", "id": "CN101070101"}, {
            "cityEn": "liaozhong",
            "cityZh": "辽中",
            "id": "CN101070103"
        }, {"cityEn": "kangping", "cityZh": "康平", "id": "CN101070104"}, {
            "cityEn": "faku",
            "cityZh": "法库",
            "id": "CN101070105"
        }, {"cityEn": "xinmin", "cityZh": "新民", "id": "CN101070106"}],
        "dalian": [{"cityEn": "dalian", "cityZh": "大连", "id": "CN101070201"}, {
            "cityEn": "wafangdian",
            "cityZh": "瓦房店",
            "id": "CN101070202"
        }, {"cityEn": "jinzhou", "cityZh": "金州", "id": "CN101070203"}, {
            "cityEn": "pulandian",
            "cityZh": "普兰店",
            "id": "CN101070204"
        }, {"cityEn": "lvshun", "cityZh": "旅顺", "id": "CN101070205"}, {
            "cityEn": "changhai",
            "cityZh": "长海",
            "id": "CN101070206"
        }, {"cityEn": "zhuanghe", "cityZh": "庄河", "id": "CN101070207"}],
        "anshan": [{"cityEn": "anshan", "cityZh": "鞍山", "id": "CN101070301"}, {
            "cityEn": "taian",
            "cityZh": "台安",
            "id": "CN101070302"
        }, {"cityEn": "xiuyan", "cityZh": "岫岩", "id": "CN101070303"}, {
            "cityEn": "haicheng",
            "cityZh": "海城",
            "id": "CN101070304"
        }],
        "fushun": [{"cityEn": "fushun", "cityZh": "抚顺", "id": "CN101070401"}, {
            "cityEn": "xinbin",
            "cityZh": "新宾",
            "id": "CN101070402"
        }, {"cityEn": "qingyuan", "cityZh": "清原", "id": "CN101070403"}, {
            "cityEn": "zhangdang",
            "cityZh": "章党",
            "id": "CN101070404"
        }],
        "benxi": [{"cityEn": "benxi", "cityZh": "本溪", "id": "CN101070501"}, {
            "cityEn": "benxixian",
            "cityZh": "本溪县",
            "id": "CN101070502"
        }, {"cityEn": "huanren", "cityZh": "桓仁", "id": "CN101070504"}],
        "dandong": [{"cityEn": "dandong", "cityZh": "丹东", "id": "CN101070601"}, {
            "cityEn": "fengcheng",
            "cityZh": "凤城",
            "id": "CN101070602"
        }, {"cityEn": "kuandian", "cityZh": "宽甸", "id": "CN101070603"}, {
            "cityEn": "donggang",
            "cityZh": "东港",
            "id": "CN101070604"
        }],
        "jinzhou": [{"cityEn": "jinzhou", "cityZh": "锦州", "id": "CN101070701"}, {
            "cityEn": "linghai",
            "cityZh": "凌海",
            "id": "CN101070702"
        }, {"cityEn": "yixian", "cityZh": "义县", "id": "CN101070704"}, {
            "cityEn": "heishan",
            "cityZh": "黑山",
            "id": "CN101070705"
        }, {"cityEn": "beizhen", "cityZh": "北镇", "id": "CN101070706"}],
        "yingkou": [{"cityEn": "yingkou", "cityZh": "营口", "id": "CN101070801"}, {
            "cityEn": "dashiqiao",
            "cityZh": "大石桥",
            "id": "CN101070802"
        }, {"cityEn": "gaizhou", "cityZh": "盖州", "id": "CN101070803"}],
        "fuxin": [{"cityEn": "fuxin", "cityZh": "阜新", "id": "CN101070901"}, {
            "cityEn": "zhangwu",
            "cityZh": "彰武",
            "id": "CN101070902"
        }],
        "liaoyang": [{"cityEn": "liaoyang", "cityZh": "辽阳", "id": "CN101071001"}, {
            "cityEn": "liaoyangxian",
            "cityZh": "辽阳县",
            "id": "CN101071002"
        }, {"cityEn": "dengta", "cityZh": "灯塔", "id": "CN101071003"}, {
            "cityEn": "gongchangling",
            "cityZh": "弓长岭",
            "id": "CN101071004"
        }],
        "tieling": [{"cityEn": "tieling", "cityZh": "铁岭", "id": "CN101071101"}, {
            "cityEn": "kaiyuan",
            "cityZh": "开原",
            "id": "CN101071102"
        }, {"cityEn": "changtu", "cityZh": "昌图", "id": "CN101071103"}, {
            "cityEn": "xifeng",
            "cityZh": "西丰",
            "id": "CN101071104"
        }, {"cityEn": "tiefa", "cityZh": "调兵山", "id": "CN101071105"}],
        "chaoyang": [{"cityEn": "chaoyang", "cityZh": "朝阳", "id": "CN101071201"}, {
            "cityEn": "lingyuan",
            "cityZh": "凌源",
            "id": "CN101071203"
        }, {"cityEn": "kazuo", "cityZh": "喀左", "id": "CN101071204"}, {
            "cityEn": "beipiao",
            "cityZh": "北票",
            "id": "CN101071205"
        }, {"cityEn": "jianpingxian", "cityZh": "建平县", "id": "CN101071207"}],
        "panjin": [{"cityEn": "panjin", "cityZh": "盘锦", "id": "CN101071301"}, {
            "cityEn": "dawa",
            "cityZh": "大洼",
            "id": "CN101071302"
        }, {"cityEn": "panshan", "cityZh": "盘山", "id": "CN101071303"}],
        "huludao": [{"cityEn": "huludao", "cityZh": "葫芦岛", "id": "CN101071401"}, {
            "cityEn": "jianchang",
            "cityZh": "建昌",
            "id": "CN101071402"
        }, {"cityEn": "suizhong", "cityZh": "绥中", "id": "CN101071403"}, {
            "cityEn": "xingcheng",
            "cityZh": "兴城",
            "id": "CN101071404"
        }],
        "huhehaote": [{"cityEn": "huhehaote", "cityZh": "呼和浩特", "id": "CN101080101"}, {
            "cityEn": "tuzuoqi",
            "cityZh": "土左旗",
            "id": "CN101080102"
        }, {"cityEn": "tuoxian", "cityZh": "托县", "id": "CN101080103"}, {
            "cityEn": "helin",
            "cityZh": "和林",
            "id": "CN101080104"
        }, {"cityEn": "qingshuihe", "cityZh": "清水河", "id": "CN101080105"}, {
            "cityEn": "saihan",
            "cityZh": "赛罕",
            "id": "CN101080106"
        }, {"cityEn": "wuchuan", "cityZh": "武川", "id": "CN101080107"}],
        "baotou": [{"cityEn": "baotou", "cityZh": "包头", "id": "CN101080201"}, {
            "cityEn": "baiyunebo",
            "cityZh": "白云鄂博",
            "id": "CN101080202"
        }, {"cityEn": "mandula", "cityZh": "满都拉", "id": "CN101080203"}, {
            "cityEn": "tuyouqi",
            "cityZh": "土右旗",
            "id": "CN101080204"
        }, {"cityEn": "guyang", "cityZh": "固阳", "id": "CN101080205"}, {
            "cityEn": "damaoqi",
            "cityZh": "达茂旗",
            "id": "CN101080206"
        }],
        "wulanchabu": [{"cityEn": "xilamuren", "cityZh": "希拉穆仁", "id": "CN101080207"}, {
            "cityEn": "jining",
            "cityZh": "集宁",
            "id": "CN101080401"
        }, {"cityEn": "zhuozi", "cityZh": "卓资", "id": "CN101080402"}, {
            "cityEn": "huade",
            "cityZh": "化德",
            "id": "CN101080403"
        }, {"cityEn": "shangdu", "cityZh": "商都", "id": "CN101080404"}, {
            "cityEn": "xinghe",
            "cityZh": "兴和",
            "id": "CN101080406"
        }, {"cityEn": "liangcheng", "cityZh": "凉城", "id": "CN101080407"}, {
            "cityEn": "chayouqianqi",
            "cityZh": "察右前旗",
            "id": "CN101080408"
        }, {"cityEn": "chayouzhongqi", "cityZh": "察右中旗", "id": "CN101080409"}, {
            "cityEn": "chayouhouqi",
            "cityZh": "察右后旗",
            "id": "CN101080410"
        }, {"cityEn": "siziwangqi", "cityZh": "四子王旗", "id": "CN101080411"}, {
            "cityEn": "fengzhen",
            "cityZh": "丰镇",
            "id": "CN101080412"
        }],
        "wuhai": [{"cityEn": "wuhai", "cityZh": "乌海", "id": "CN101080301"}],
        "tongliao": [{"cityEn": "tongliao", "cityZh": "通辽", "id": "CN101080501"}, {
            "cityEn": "shebotu",
            "cityZh": "舍伯吐",
            "id": "CN101080502"
        }, {"cityEn": "kezuozhongqi", "cityZh": "科左中旗", "id": "CN101080503"}, {
            "cityEn": "kezuohouqi",
            "cityZh": "科左后旗",
            "id": "CN101080504"
        }, {"cityEn": "qinglongshan", "cityZh": "青龙山", "id": "CN101080505"}, {
            "cityEn": "kailu",
            "cityZh": "开鲁",
            "id": "CN101080506"
        }, {"cityEn": "kulun", "cityZh": "库伦", "id": "CN101080507"}, {
            "cityEn": "naiman",
            "cityZh": "奈曼",
            "id": "CN101080508"
        }, {"cityEn": "zhalute", "cityZh": "扎鲁特", "id": "CN101080509"}, {
            "cityEn": "bayaertuhushuo",
            "cityZh": "巴雅尔吐胡硕",
            "id": "CN101080511"
        }, {"cityEn": "huolinguole", "cityZh": "霍林郭勒", "id": "CN101080512"}],
        "chifeng": [{"cityEn": "chifeng", "cityZh": "赤峰", "id": "CN101080601"}, {
            "cityEn": "aluqi",
            "cityZh": "阿鲁旗",
            "id": "CN101080603"
        }, {"cityEn": "haoertu", "cityZh": "浩尔吐", "id": "CN101080604"}, {
            "cityEn": "balinzuoqi",
            "cityZh": "巴林左旗",
            "id": "CN101080605"
        }, {"cityEn": "balinyouqi", "cityZh": "巴林右旗", "id": "CN101080606"}, {
            "cityEn": "linxi",
            "cityZh": "林西",
            "id": "CN101080607"
        }, {"cityEn": "keshiketeng", "cityZh": "克什克腾", "id": "CN101080608"}, {
            "cityEn": "wengniute",
            "cityZh": "翁牛特",
            "id": "CN101080609"
        }, {"cityEn": "gangzi", "cityZh": "岗子", "id": "CN101080610"}, {
            "cityEn": "kalaqin",
            "cityZh": "喀喇沁",
            "id": "CN101080611"
        }, {"cityEn": "balihan", "cityZh": "八里罕", "id": "CN101080612"}, {
            "cityEn": "ningcheng",
            "cityZh": "宁城",
            "id": "CN101080613"
        }, {"cityEn": "aohan", "cityZh": "敖汉", "id": "CN101080614"}, {
            "cityEn": "baoguotu",
            "cityZh": "宝国吐",
            "id": "CN101080615"
        }],
        "eerduosi": [{"cityEn": "eerduosi", "cityZh": "鄂尔多斯", "id": "CN101080701"}, {
            "cityEn": "dalate",
            "cityZh": "达拉特",
            "id": "CN101080703"
        }, {"cityEn": "zhungeer", "cityZh": "准格尔", "id": "CN101080704"}, {
            "cityEn": "eqianqi",
            "cityZh": "鄂前旗",
            "id": "CN101080705"
        }, {"cityEn": "henan", "cityZh": "河南", "id": "CN101080706"}, {
            "cityEn": "yihewusu",
            "cityZh": "伊和乌素",
            "id": "CN101080707"
        }, {"cityEn": "etuoke", "cityZh": "鄂托克", "id": "CN101080708"}, {
            "cityEn": "hangjinqi",
            "cityZh": "杭锦旗",
            "id": "CN101080709"
        }, {"cityEn": "wushenqi", "cityZh": "乌审旗", "id": "CN101080710"}, {
            "cityEn": "yijinhuoluo",
            "cityZh": "伊金霍洛",
            "id": "CN101080711"
        }, {"cityEn": "wushenzhao", "cityZh": "乌审召", "id": "CN101080712"}, {
            "cityEn": "dongsheng",
            "cityZh": "东胜",
            "id": "CN101080713"
        }],
        "bayannaoer": [{"cityEn": "linhe", "cityZh": "临河", "id": "CN101080801"}, {
            "cityEn": "wuyuan",
            "cityZh": "五原",
            "id": "CN101080802"
        }, {"cityEn": "dengkou", "cityZh": "磴口", "id": "CN101080803"}, {
            "cityEn": "wuqianqi",
            "cityZh": "乌前旗",
            "id": "CN101080804"
        }, {"cityEn": "dashetai", "cityZh": "大佘太", "id": "CN101080805"}, {
            "cityEn": "wuzhongqi",
            "cityZh": "乌中旗",
            "id": "CN101080806"
        }, {"cityEn": "wuhouqi", "cityZh": "乌后旗", "id": "CN101080807"}, {
            "cityEn": "hailisu",
            "cityZh": "海力素",
            "id": "CN101080808"
        }, {"cityEn": "narenbaolige", "cityZh": "那仁宝力格", "id": "CN101080809"}, {
            "cityEn": "hangjinhouqi",
            "cityZh": "杭锦后旗",
            "id": "CN101080810"
        }],
        "xilinguole": [{"cityEn": "xilinhaote", "cityZh": "锡林浩特", "id": "CN101080901"}, {
            "cityEn": "erlianhaote",
            "cityZh": "二连浩特",
            "id": "CN101080903"
        }, {"cityEn": "abaga", "cityZh": "阿巴嘎", "id": "CN101080904"}, {
            "cityEn": "suzuoqi",
            "cityZh": "苏左旗",
            "id": "CN101080906"
        }, {"cityEn": "suyouqi", "cityZh": "苏右旗", "id": "CN101080907"}, {
            "cityEn": "zhurihe",
            "cityZh": "朱日和",
            "id": "CN101080908"
        }, {"cityEn": "dongwuqi", "cityZh": "东乌旗", "id": "CN101080909"}, {
            "cityEn": "xiwuqi",
            "cityZh": "西乌旗",
            "id": "CN101080910"
        }, {"cityEn": "taipusiqi", "cityZh": "太仆寺", "id": "CN101080911"}, {
            "cityEn": "xianghuang",
            "cityZh": "镶黄旗",
            "id": "CN101080912"
        }, {"cityEn": "zhengxiangbaiqi", "cityZh": "正镶白旗", "id": "CN101080913"}, {
            "cityEn": "zhenglanqi",
            "cityZh": "正蓝旗",
            "id": "CN101080914"
        }, {"cityEn": "duolun", "cityZh": "多伦", "id": "CN101080915"}, {
            "cityEn": "boketu",
            "cityZh": "博克图",
            "id": "CN101080916"
        }, {"cityEn": "wulagai", "cityZh": "乌拉盖", "id": "CN101080917"}],
        "hulunbeier": [{"cityEn": "hailaer", "cityZh": "海拉尔", "id": "CN101081001"}, {
            "cityEn": "xiaoergou",
            "cityZh": "小二沟",
            "id": "CN101081002"
        }, {"cityEn": "arongqi", "cityZh": "阿荣旗", "id": "CN101081003"}, {
            "cityEn": "molidawa",
            "cityZh": "莫力达瓦",
            "id": "CN101081004"
        }, {"cityEn": "elunchunqi", "cityZh": "鄂伦春旗", "id": "CN101081005"}, {
            "cityEn": "ewenkeqi",
            "cityZh": "鄂温克旗",
            "id": "CN101081006"
        }, {"cityEn": "chenqi", "cityZh": "陈旗", "id": "CN101081007"}, {
            "cityEn": "xinzuoqi",
            "cityZh": "新左旗",
            "id": "CN101081008"
        }, {"cityEn": "xinyouqi", "cityZh": "新右旗", "id": "CN101081009"}, {
            "cityEn": "manzhouli",
            "cityZh": "满洲里",
            "id": "CN101081010"
        }, {"cityEn": "yakeshi", "cityZh": "牙克石", "id": "CN101081011"}, {
            "cityEn": "zhalantun",
            "cityZh": "扎兰屯",
            "id": "CN101081012"
        }, {"cityEn": "eerguna", "cityZh": "额尔古纳", "id": "CN101081014"}, {
            "cityEn": "genhe",
            "cityZh": "根河",
            "id": "CN101081015"
        }, {"cityEn": "tulihe", "cityZh": "图里河", "id": "CN101081016"}],
        "xinganmeng": [{"cityEn": "wulanhaote", "cityZh": "乌兰浩特", "id": "CN101081101"}, {
            "cityEn": "aershan",
            "cityZh": "阿尔山",
            "id": "CN101081102"
        }, {"cityEn": "keyouzhongqi", "cityZh": "科右中旗", "id": "CN101081103"}, {
            "cityEn": "huerle",
            "cityZh": "胡尔勒",
            "id": "CN101081104"
        }, {"cityEn": "zhanlaite", "cityZh": "扎赉特", "id": "CN101081105"}, {
            "cityEn": "suolun",
            "cityZh": "索伦",
            "id": "CN101081106"
        }, {"cityEn": "tuquan", "cityZh": "突泉", "id": "CN101081107"}, {
            "cityEn": "keyouqianqi",
            "cityZh": "科右前旗",
            "id": "CN101081109"
        }, {"cityEn": "gaoliban", "cityZh": "高力板", "id": "CN101081110"}],
        "alashanmeng": [{"cityEn": "azuoqi", "cityZh": "阿左旗", "id": "CN101081201"}, {
            "cityEn": "ayouqi",
            "cityZh": "阿右旗",
            "id": "CN101081202"
        }, {"cityEn": "ejina", "cityZh": "额济纳", "id": "CN101081203"}, {
            "cityEn": "guanzihu",
            "cityZh": "拐子湖",
            "id": "CN101081204"
        }, {"cityEn": "jilantai", "cityZh": "吉兰太", "id": "CN101081205"}, {
            "cityEn": "xilingaole",
            "cityZh": "锡林高勒",
            "id": "CN101081206"
        }, {"cityEn": "toudaohu", "cityZh": "头道湖", "id": "CN101081207"}, {
            "cityEn": "zhongquanzi",
            "cityZh": "中泉子",
            "id": "CN101081208"
        }, {"cityEn": "bayannuorigong", "cityZh": "巴彦诺日公", "id": "CN101081209"}, {
            "cityEn": "yabulai",
            "cityZh": "雅布赖",
            "id": "CN101081210"
        }, {"cityEn": "wusitai", "cityZh": "乌斯太", "id": "CN101081211"}, {
            "cityEn": "luanjingtan",
            "cityZh": "孪井滩",
            "id": "CN101081212"
        }],
        "shijiazhuang": [{"cityEn": "shijiazhuang", "cityZh": "石家庄", "id": "CN101090101"}, {
            "cityEn": "jingxing",
            "cityZh": "井陉",
            "id": "CN101090102"
        }, {"cityEn": "zhengding", "cityZh": "正定", "id": "CN101090103"}, {
            "cityEn": "luancheng",
            "cityZh": "栾城",
            "id": "CN101090104"
        }, {"cityEn": "xingtang", "cityZh": "行唐", "id": "CN101090105"}, {
            "cityEn": "lingshou",
            "cityZh": "灵寿",
            "id": "CN101090106"
        }, {"cityEn": "gaoyi", "cityZh": "高邑", "id": "CN101090107"}, {
            "cityEn": "shenze",
            "cityZh": "深泽",
            "id": "CN101090108"
        }, {"cityEn": "zanhuang", "cityZh": "赞皇", "id": "CN101090109"}, {
            "cityEn": "wuji",
            "cityZh": "无极",
            "id": "CN101090110"
        }, {"cityEn": "pingshan", "cityZh": "平山", "id": "CN101090111"}, {
            "cityEn": "yuanshi",
            "cityZh": "元氏",
            "id": "CN101090112"
        }, {"cityEn": "zhaoxian", "cityZh": "赵县", "id": "CN101090113"}, {
            "cityEn": "xinji",
            "cityZh": "辛集",
            "id": "CN101090114"
        }, {"cityEn": "gaocheng", "cityZh": "藁城", "id": "CN101090115"}, {
            "cityEn": "jinzhou",
            "cityZh": "晋州",
            "id": "CN101090116"
        }, {"cityEn": "xinle", "cityZh": "新乐", "id": "CN101090117"}, {
            "cityEn": "luquan",
            "cityZh": "鹿泉",
            "id": "CN101090118"
        }],
        "baoding": [{"cityEn": "baoding", "cityZh": "保定", "id": "CN101090201"}, {
            "cityEn": "mancheng",
            "cityZh": "满城",
            "id": "CN101090202"
        }, {"cityEn": "fuping", "cityZh": "阜平", "id": "CN101090203"}, {
            "cityEn": "xushui",
            "cityZh": "徐水",
            "id": "CN101090204"
        }, {"cityEn": "tangxian", "cityZh": "唐县", "id": "CN101090205"}, {
            "cityEn": "gaoyang",
            "cityZh": "高阳",
            "id": "CN101090206"
        }, {"cityEn": "rongcheng", "cityZh": "容城", "id": "CN101090207"}, {
            "cityEn": "laiyuan",
            "cityZh": "涞源",
            "id": "CN101090209"
        }, {"cityEn": "wangdu", "cityZh": "望都", "id": "CN101090210"}, {
            "cityEn": "anxin",
            "cityZh": "安新",
            "id": "CN101090211"
        }, {"cityEn": "yixian", "cityZh": "易县", "id": "CN101090212"}, {
            "cityEn": "quyang",
            "cityZh": "曲阳",
            "id": "CN101090214"
        }, {"cityEn": "lixian", "cityZh": "蠡县", "id": "CN101090215"}, {
            "cityEn": "shunping",
            "cityZh": "顺平",
            "id": "CN101090216"
        }, {"cityEn": "xiongxian", "cityZh": "雄县", "id": "CN101090217"}, {
            "cityEn": "zhuozhou",
            "cityZh": "涿州",
            "id": "CN101090218"
        }, {"cityEn": "dingzhou", "cityZh": "定州", "id": "CN101090219"}, {
            "cityEn": "anguo",
            "cityZh": "安国",
            "id": "CN101090220"
        }, {"cityEn": "gaobeidian", "cityZh": "高碑店", "id": "CN101090221"}, {
            "cityEn": "laishui",
            "cityZh": "涞水",
            "id": "CN101090222"
        }, {"cityEn": "dingxing", "cityZh": "定兴", "id": "CN101090223"}, {
            "cityEn": "qingyuan",
            "cityZh": "清苑",
            "id": "CN101090224"
        }, {"cityEn": "boye", "cityZh": "博野", "id": "CN101090225"}],
        "zhangjiakou": [{"cityEn": "zhangjiakou", "cityZh": "张家口", "id": "CN101090301"}, {
            "cityEn": "xuanhua",
            "cityZh": "宣化",
            "id": "CN101090302"
        }, {"cityEn": "zhangbei", "cityZh": "张北", "id": "CN101090303"}, {
            "cityEn": "kangbao",
            "cityZh": "康保",
            "id": "CN101090304"
        }, {"cityEn": "guyuan", "cityZh": "沽源", "id": "CN101090305"}, {
            "cityEn": "shangyi",
            "cityZh": "尚义",
            "id": "CN101090306"
        }, {"cityEn": "yuxian", "cityZh": "蔚县", "id": "CN101090307"}, {
            "cityEn": "yangyuan",
            "cityZh": "阳原",
            "id": "CN101090308"
        }, {"cityEn": "huaian", "cityZh": "怀安", "id": "CN101090309"}, {
            "cityEn": "wanquan",
            "cityZh": "万全",
            "id": "CN101090310"
        }, {"cityEn": "huailai", "cityZh": "怀来", "id": "CN101090311"}, {
            "cityEn": "zhuolu",
            "cityZh": "涿鹿",
            "id": "CN101090312"
        }, {"cityEn": "chicheng", "cityZh": "赤城", "id": "CN101090313"}, {
            "cityEn": "chongli",
            "cityZh": "崇礼",
            "id": "CN101090314"
        }],
        "chengde": [{"cityEn": "chengde", "cityZh": "承德", "id": "CN101090402"}, {
            "cityEn": "chengdexian",
            "cityZh": "承德县",
            "id": "CN101090403"
        }, {"cityEn": "xinglong", "cityZh": "兴隆", "id": "CN101090404"}, {
            "cityEn": "pingquan",
            "cityZh": "平泉",
            "id": "CN101090405"
        }, {"cityEn": "luanping", "cityZh": "滦平", "id": "CN101090406"}, {
            "cityEn": "longhua",
            "cityZh": "隆化",
            "id": "CN101090407"
        }, {"cityEn": "fengning", "cityZh": "丰宁", "id": "CN101090408"}, {
            "cityEn": "kuancheng",
            "cityZh": "宽城",
            "id": "CN101090409"
        }, {"cityEn": "weichang", "cityZh": "围场", "id": "CN101090410"}],
        "tangshan": [{"cityEn": "tangshan", "cityZh": "唐山", "id": "CN101090501"}, {
            "cityEn": "fengnan",
            "cityZh": "丰南",
            "id": "CN101090502"
        }, {"cityEn": "fengrun", "cityZh": "丰润", "id": "CN101090503"}, {
            "cityEn": "luanxian",
            "cityZh": "滦县",
            "id": "CN101090504"
        }, {"cityEn": "luannan", "cityZh": "滦南", "id": "CN101090505"}, {
            "cityEn": "leting",
            "cityZh": "乐亭",
            "id": "CN101090506"
        }, {"cityEn": "qianxi", "cityZh": "迁西", "id": "CN101090507"}, {
            "cityEn": "yutian",
            "cityZh": "玉田",
            "id": "CN101090508"
        }, {"cityEn": "caofeidian", "cityZh": "曹妃甸", "id": "CN101090509"}, {
            "cityEn": "zunhua",
            "cityZh": "遵化",
            "id": "CN101090510"
        }, {"cityEn": "qianan", "cityZh": "迁安", "id": "CN101090511"}, {
            "cityEn": "caofeidiangongyequ",
            "cityZh": "曹妃甸工业区",
            "id": "CN101090512"
        }],
        "langfang": [{"cityEn": "langfang", "cityZh": "廊坊", "id": "CN101090601"}, {
            "cityEn": "guan",
            "cityZh": "固安",
            "id": "CN101090602"
        }, {"cityEn": "yongqing", "cityZh": "永清", "id": "CN101090603"}, {
            "cityEn": "xianghe",
            "cityZh": "香河",
            "id": "CN101090604"
        }, {"cityEn": "dacheng", "cityZh": "大城", "id": "CN101090605"}, {
            "cityEn": "wenan",
            "cityZh": "文安",
            "id": "CN101090606"
        }, {"cityEn": "dachang", "cityZh": "大厂", "id": "CN101090607"}, {
            "cityEn": "bazhou",
            "cityZh": "霸州",
            "id": "CN101090608"
        }, {"cityEn": "sanhe", "cityZh": "三河", "id": "CN101090609"}],
        "cangzhou": [{"cityEn": "cangzhou", "cityZh": "沧州", "id": "CN101090701"}, {
            "cityEn": "qingxian",
            "cityZh": "青县",
            "id": "CN101090702"
        }, {"cityEn": "dongguang", "cityZh": "东光", "id": "CN101090703"}, {
            "cityEn": "haixing",
            "cityZh": "海兴",
            "id": "CN101090704"
        }, {"cityEn": "yanshan", "cityZh": "盐山", "id": "CN101090705"}, {
            "cityEn": "suning",
            "cityZh": "肃宁",
            "id": "CN101090706"
        }, {"cityEn": "nanpi", "cityZh": "南皮", "id": "CN101090707"}, {
            "cityEn": "wuqiao",
            "cityZh": "吴桥",
            "id": "CN101090708"
        }, {"cityEn": "xianxian", "cityZh": "献县", "id": "CN101090709"}, {
            "cityEn": "mengcun",
            "cityZh": "孟村",
            "id": "CN101090710"
        }, {"cityEn": "botou", "cityZh": "泊头", "id": "CN101090711"}, {
            "cityEn": "renqiu",
            "cityZh": "任丘",
            "id": "CN101090712"
        }, {"cityEn": "huanghua", "cityZh": "黄骅", "id": "CN101090713"}, {
            "cityEn": "hejian",
            "cityZh": "河间",
            "id": "CN101090714"
        }, {"cityEn": "cangxian", "cityZh": "沧县", "id": "CN101090716"}],
        "hengshui": [{"cityEn": "hengshui", "cityZh": "衡水", "id": "CN101090801"}, {
            "cityEn": "zaoqiang",
            "cityZh": "枣强",
            "id": "CN101090802"
        }, {"cityEn": "wuyi", "cityZh": "武邑", "id": "CN101090803"}, {
            "cityEn": "wuqiang",
            "cityZh": "武强",
            "id": "CN101090804"
        }, {"cityEn": "raoyang", "cityZh": "饶阳", "id": "CN101090805"}, {
            "cityEn": "anping",
            "cityZh": "安平",
            "id": "CN101090806"
        }, {"cityEn": "gucheng", "cityZh": "故城", "id": "CN101090807"}, {
            "cityEn": "jingxian",
            "cityZh": "景县",
            "id": "CN101090808"
        }, {"cityEn": "fucheng", "cityZh": "阜城", "id": "CN101090809"}, {
            "cityEn": "jizhou",
            "cityZh": "冀州",
            "id": "CN101090810"
        }, {"cityEn": "shenzhou", "cityZh": "深州", "id": "CN101090811"}],
        "xingtai": [{"cityEn": "xingtai", "cityZh": "邢台", "id": "CN101090901"}, {
            "cityEn": "lincheng",
            "cityZh": "临城",
            "id": "CN101090902"
        }, {"cityEn": "neiqiu", "cityZh": "内丘", "id": "CN101090904"}, {
            "cityEn": "baixiang",
            "cityZh": "柏乡",
            "id": "CN101090905"
        }, {"cityEn": "longyao", "cityZh": "隆尧", "id": "CN101090906"}, {
            "cityEn": "nanhe",
            "cityZh": "南和",
            "id": "CN101090907"
        }, {"cityEn": "ningjin", "cityZh": "宁晋", "id": "CN101090908"}, {
            "cityEn": "julu",
            "cityZh": "巨鹿",
            "id": "CN101090909"
        }, {"cityEn": "xinhe", "cityZh": "新河", "id": "CN101090910"}, {
            "cityEn": "guangzong",
            "cityZh": "广宗",
            "id": "CN101090911"
        }, {"cityEn": "pingxiang", "cityZh": "平乡", "id": "CN101090912"}, {
            "cityEn": "weixian",
            "cityZh": "威县",
            "id": "CN101090913"
        }, {"cityEn": "qinghe", "cityZh": "清河", "id": "CN101090914"}, {
            "cityEn": "linxi",
            "cityZh": "临西",
            "id": "CN101090915"
        }, {"cityEn": "nangong", "cityZh": "南宫", "id": "CN101090916"}, {
            "cityEn": "shahe",
            "cityZh": "沙河",
            "id": "CN101090917"
        }, {"cityEn": "renxian", "cityZh": "任县", "id": "CN101090918"}],
        "handan": [{"cityEn": "handan", "cityZh": "邯郸", "id": "CN101091001"}, {
            "cityEn": "fengfeng",
            "cityZh": "峰峰",
            "id": "CN101091002"
        }, {"cityEn": "linzhang", "cityZh": "临漳", "id": "CN101091003"}, {
            "cityEn": "chengan",
            "cityZh": "成安",
            "id": "CN101091004"
        }, {"cityEn": "daming", "cityZh": "大名", "id": "CN101091005"}, {
            "cityEn": "shexian",
            "cityZh": "涉县",
            "id": "CN101091006"
        }, {"cityEn": "cixian", "cityZh": "磁县", "id": "CN101091007"}, {
            "cityEn": "feixiang",
            "cityZh": "肥乡",
            "id": "CN101091008"
        }, {"cityEn": "yongnian", "cityZh": "永年", "id": "CN101091009"}, {
            "cityEn": "qiuxian",
            "cityZh": "邱县",
            "id": "CN101091010"
        }, {"cityEn": "jize", "cityZh": "鸡泽", "id": "CN101091011"}, {
            "cityEn": "guangping",
            "cityZh": "广平",
            "id": "CN101091012"
        }, {"cityEn": "guantao", "cityZh": "馆陶", "id": "CN101091013"}, {
            "cityEn": "weixian",
            "cityZh": "魏县",
            "id": "CN101091014"
        }, {"cityEn": "quzhou", "cityZh": "曲周", "id": "CN101091015"}, {
            "cityEn": "wuan",
            "cityZh": "武安",
            "id": "CN101091016"
        }],
        "qinhuangdao": [{"cityEn": "qinhuangdao", "cityZh": "秦皇岛", "id": "CN101091101"}, {
            "cityEn": "qinglong",
            "cityZh": "青龙",
            "id": "CN101091102"
        }, {"cityEn": "changli", "cityZh": "昌黎", "id": "CN101091103"}, {
            "cityEn": "funing",
            "cityZh": "抚宁",
            "id": "CN101091104"
        }, {"cityEn": "lulong", "cityZh": "卢龙", "id": "CN101091105"}, {
            "cityEn": "beidaihe",
            "cityZh": "北戴河",
            "id": "CN101091106"
        }],
        "zhengzhou": [{"cityEn": "zhengzhou", "cityZh": "郑州", "id": "CN101180101"}, {
            "cityEn": "gongyi",
            "cityZh": "巩义",
            "id": "CN101180102"
        }, {"cityEn": "xingyang", "cityZh": "荥阳", "id": "CN101180103"}, {
            "cityEn": "dengfeng",
            "cityZh": "登封",
            "id": "CN101180104"
        }, {"cityEn": "xinmi", "cityZh": "新密", "id": "CN101180105"}, {
            "cityEn": "xinzheng",
            "cityZh": "新郑",
            "id": "CN101180106"
        }, {"cityEn": "zhongmou", "cityZh": "中牟", "id": "CN101180107"}, {
            "cityEn": "shangjie",
            "cityZh": "上街",
            "id": "CN101180108"
        }],
        "anyang": [{"cityEn": "anyang", "cityZh": "安阳", "id": "CN101180201"}, {
            "cityEn": "tangyin",
            "cityZh": "汤阴",
            "id": "CN101180202"
        }, {"cityEn": "huaxian", "cityZh": "滑县", "id": "CN101180203"}, {
            "cityEn": "neihuang",
            "cityZh": "内黄",
            "id": "CN101180204"
        }, {"cityEn": "linzhou", "cityZh": "林州", "id": "CN101180205"}],
        "xinxiang": [{"cityEn": "xinxiang", "cityZh": "新乡", "id": "CN101180301"}, {
            "cityEn": "huojia",
            "cityZh": "获嘉",
            "id": "CN101180302"
        }, {"cityEn": "yuanyang", "cityZh": "原阳", "id": "CN101180303"}, {
            "cityEn": "huixian",
            "cityZh": "辉县",
            "id": "CN101180304"
        }, {"cityEn": "weihui", "cityZh": "卫辉", "id": "CN101180305"}, {
            "cityEn": "yanjin",
            "cityZh": "延津",
            "id": "CN101180306"
        }, {"cityEn": "fengqiu", "cityZh": "封丘", "id": "CN101180307"}, {
            "cityEn": "changyuan",
            "cityZh": "长垣",
            "id": "CN101180308"
        }],
        "xuchang": [{"cityEn": "xuchang", "cityZh": "许昌", "id": "CN101180401"}, {
            "cityEn": "yanling",
            "cityZh": "鄢陵",
            "id": "CN101180402"
        }, {"cityEn": "xiangcheng", "cityZh": "襄城", "id": "CN101180403"}, {
            "cityEn": "changge",
            "cityZh": "长葛",
            "id": "CN101180404"
        }, {"cityEn": "yuzhou", "cityZh": "禹州", "id": "CN101180405"}],
        "pingdingshan": [{"cityEn": "pingdingshan", "cityZh": "平顶山", "id": "CN101180501"}, {
            "cityEn": "jiaxian",
            "cityZh": "郏县",
            "id": "CN101180502"
        }, {"cityEn": "baofeng", "cityZh": "宝丰", "id": "CN101180503"}, {
            "cityEn": "ruzhou",
            "cityZh": "汝州",
            "id": "CN101180504"
        }, {"cityEn": "yexian", "cityZh": "叶县", "id": "CN101180505"}, {
            "cityEn": "wugang",
            "cityZh": "舞钢",
            "id": "CN101180506"
        }, {"cityEn": "lushan", "cityZh": "鲁山", "id": "CN101180507"}, {
            "cityEn": "shilong",
            "cityZh": "石龙",
            "id": "CN101180508"
        }],
        "xinyang": [{"cityEn": "xinyang", "cityZh": "信阳", "id": "CN101180601"}, {
            "cityEn": "xixian",
            "cityZh": "息县",
            "id": "CN101180602"
        }, {"cityEn": "luoshan", "cityZh": "罗山", "id": "CN101180603"}, {
            "cityEn": "guangshan",
            "cityZh": "光山",
            "id": "CN101180604"
        }, {"cityEn": "xinxian", "cityZh": "新县", "id": "CN101180605"}, {
            "cityEn": "huaibin",
            "cityZh": "淮滨",
            "id": "CN101180606"
        }, {"cityEn": "huangchuan", "cityZh": "潢川", "id": "CN101180607"}, {
            "cityEn": "gushi",
            "cityZh": "固始",
            "id": "CN101180608"
        }, {"cityEn": "shangcheng", "cityZh": "商城", "id": "CN101180609"}],
        "nanyang": [{"cityEn": "nanyang", "cityZh": "南阳", "id": "CN101180701"}, {
            "cityEn": "nanzhao",
            "cityZh": "南召",
            "id": "CN101180702"
        }, {"cityEn": "fangcheng", "cityZh": "方城", "id": "CN101180703"}, {
            "cityEn": "sheqi",
            "cityZh": "社旗",
            "id": "CN101180704"
        }, {"cityEn": "xixia", "cityZh": "西峡", "id": "CN101180705"}, {
            "cityEn": "neixiang",
            "cityZh": "内乡",
            "id": "CN101180706"
        }, {"cityEn": "zhenping", "cityZh": "镇平", "id": "CN101180707"}, {
            "cityEn": "xichuan",
            "cityZh": "淅川",
            "id": "CN101180708"
        }, {"cityEn": "xinye", "cityZh": "新野", "id": "CN101180709"}, {
            "cityEn": "tanghe",
            "cityZh": "唐河",
            "id": "CN101180710"
        }, {"cityEn": "dengzhou", "cityZh": "邓州", "id": "CN101180711"}, {
            "cityEn": "tongbai",
            "cityZh": "桐柏",
            "id": "CN101180712"
        }],
        "kaifeng": [{"cityEn": "kaifeng", "cityZh": "开封", "id": "CN101180801"}, {
            "cityEn": "qixian",
            "cityZh": "杞县",
            "id": "CN101180802"
        }, {"cityEn": "weishi", "cityZh": "尉氏", "id": "CN101180803"}, {
            "cityEn": "tongxu",
            "cityZh": "通许",
            "id": "CN101180804"
        }, {"cityEn": "lankao", "cityZh": "兰考", "id": "CN101180805"}],
        "luoyang": [{"cityEn": "luoyang", "cityZh": "洛阳", "id": "CN101180901"}, {
            "cityEn": "xinan",
            "cityZh": "新安",
            "id": "CN101180902"
        }, {"cityEn": "mengjin", "cityZh": "孟津", "id": "CN101180903"}, {
            "cityEn": "yiyang",
            "cityZh": "宜阳",
            "id": "CN101180904"
        }, {"cityEn": "luoning", "cityZh": "洛宁", "id": "CN101180905"}, {
            "cityEn": "yichuan",
            "cityZh": "伊川",
            "id": "CN101180906"
        }, {"cityEn": "songxian", "cityZh": "嵩县", "id": "CN101180907"}, {
            "cityEn": "yanshi",
            "cityZh": "偃师",
            "id": "CN101180908"
        }, {"cityEn": "luanchuan", "cityZh": "栾川", "id": "CN101180909"}, {
            "cityEn": "ruyang",
            "cityZh": "汝阳",
            "id": "CN101180910"
        }, {"cityEn": "jili", "cityZh": "吉利", "id": "CN101180911"}],
        "shangqiu": [{"cityEn": "shangqiu", "cityZh": "商丘", "id": "CN101181001"}, {
            "cityEn": "suixian",
            "cityZh": "睢县",
            "id": "CN101181003"
        }, {"cityEn": "minquan", "cityZh": "民权", "id": "CN101181004"}, {
            "cityEn": "yucheng",
            "cityZh": "虞城",
            "id": "CN101181005"
        }, {"cityEn": "zhecheng", "cityZh": "柘城", "id": "CN101181006"}, {
            "cityEn": "ningling",
            "cityZh": "宁陵",
            "id": "CN101181007"
        }, {"cityEn": "xiayi", "cityZh": "夏邑", "id": "CN101181008"}, {
            "cityEn": "yongcheng",
            "cityZh": "永城",
            "id": "CN101181009"
        }],
        "jiaozuo": [{"cityEn": "jiaozuo", "cityZh": "焦作", "id": "CN101181101"}, {
            "cityEn": "xiuwu",
            "cityZh": "修武",
            "id": "CN101181102"
        }, {"cityEn": "wuzhi", "cityZh": "武陟", "id": "CN101181103"}, {
            "cityEn": "qinyang",
            "cityZh": "沁阳",
            "id": "CN101181104"
        }, {"cityEn": "boai", "cityZh": "博爱", "id": "CN101181106"}, {
            "cityEn": "wenxian",
            "cityZh": "温县",
            "id": "CN101181107"
        }, {"cityEn": "mengzhou", "cityZh": "孟州", "id": "CN101181108"}],
        "hebi": [{"cityEn": "hebi", "cityZh": "鹤壁", "id": "CN101181201"}, {
            "cityEn": "xunxian",
            "cityZh": "浚县",
            "id": "CN101181202"
        }, {"cityEn": "qixian", "cityZh": "淇县", "id": "CN101181203"}],
        "puyang": [{"cityEn": "puyang", "cityZh": "濮阳", "id": "CN101181301"}, {
            "cityEn": "taiqian",
            "cityZh": "台前",
            "id": "CN101181302"
        }, {"cityEn": "nanle", "cityZh": "南乐", "id": "CN101181303"}, {
            "cityEn": "qingfeng",
            "cityZh": "清丰",
            "id": "CN101181304"
        }, {"cityEn": "fanxian", "cityZh": "范县", "id": "CN101181305"}],
        "zhoukou": [{"cityEn": "zhoukou", "cityZh": "周口", "id": "CN101181401"}, {
            "cityEn": "fugou",
            "cityZh": "扶沟",
            "id": "CN101181402"
        }, {"cityEn": "taikang", "cityZh": "太康", "id": "CN101181403"}, {
            "cityEn": "huaiyang",
            "cityZh": "淮阳",
            "id": "CN101181404"
        }, {"cityEn": "xihua", "cityZh": "西华", "id": "CN101181405"}, {
            "cityEn": "shangshui",
            "cityZh": "商水",
            "id": "CN101181406"
        }, {"cityEn": "xiangcheng", "cityZh": "项城", "id": "CN101181407"}, {
            "cityEn": "dancheng",
            "cityZh": "郸城",
            "id": "CN101181408"
        }, {"cityEn": "luyi", "cityZh": "鹿邑", "id": "CN101181409"}, {
            "cityEn": "shenqiu",
            "cityZh": "沈丘",
            "id": "CN101181410"
        }],
        "luohe": [{"cityEn": "luohe", "cityZh": "漯河", "id": "CN101181501"}, {
            "cityEn": "linying",
            "cityZh": "临颍",
            "id": "CN101181502"
        }, {"cityEn": "wuyang", "cityZh": "舞阳", "id": "CN101181503"}],
        "zhumadian": [{"cityEn": "zhumadian", "cityZh": "驻马店", "id": "CN101181601"}, {
            "cityEn": "xiping",
            "cityZh": "西平",
            "id": "CN101181602"
        }, {"cityEn": "suiping", "cityZh": "遂平", "id": "CN101181603"}, {
            "cityEn": "shangcai",
            "cityZh": "上蔡",
            "id": "CN101181604"
        }, {"cityEn": "runan", "cityZh": "汝南", "id": "CN101181605"}, {
            "cityEn": "biyang",
            "cityZh": "泌阳",
            "id": "CN101181606"
        }, {"cityEn": "pingyu", "cityZh": "平舆", "id": "CN101181607"}, {
            "cityEn": "xincai",
            "cityZh": "新蔡",
            "id": "CN101181608"
        }, {"cityEn": "queshan", "cityZh": "确山", "id": "CN101181609"}, {
            "cityEn": "zhengyang",
            "cityZh": "正阳",
            "id": "CN101181610"
        }],
        "sanmenxia": [{"cityEn": "sanmenxia", "cityZh": "三门峡", "id": "CN101181701"}, {
            "cityEn": "lingbao",
            "cityZh": "灵宝",
            "id": "CN101181702"
        }, {"cityEn": "mianchi", "cityZh": "渑池", "id": "CN101181703"}, {
            "cityEn": "lushi",
            "cityZh": "卢氏",
            "id": "CN101181704"
        }, {"cityEn": "yima", "cityZh": "义马", "id": "CN101181705"}, {
            "cityEn": "shanxian",
            "cityZh": "陕县",
            "id": "CN101181706"
        }],
        "jiyuan": [{"cityEn": "jiyuan", "cityZh": "济源", "id": "CN101181801"}],
        "taiyuan": [{"cityEn": "taiyuan", "cityZh": "太原", "id": "CN101100101"}, {
            "cityEn": "qingxu",
            "cityZh": "清徐",
            "id": "CN101100102"
        }, {"cityEn": "yangqu", "cityZh": "阳曲", "id": "CN101100103"}, {
            "cityEn": "loufan",
            "cityZh": "娄烦",
            "id": "CN101100104"
        }, {"cityEn": "gujiao", "cityZh": "古交", "id": "CN101100105"}, {
            "cityEn": "jiancaopingqu",
            "cityZh": "尖草坪区",
            "id": "CN101100106"
        }, {"cityEn": "xiaodianqu", "cityZh": "小店区", "id": "CN101100107"}],
        "datong": [{"cityEn": "datong", "cityZh": "大同", "id": "CN101100201"}, {
            "cityEn": "yanggao",
            "cityZh": "阳高",
            "id": "CN101100202"
        }, {"cityEn": "datongxian", "cityZh": "大同县", "id": "CN101100203"}, {
            "cityEn": "tianzhen",
            "cityZh": "天镇",
            "id": "CN101100204"
        }, {"cityEn": "guangling", "cityZh": "广灵", "id": "CN101100205"}, {
            "cityEn": "lingqiu",
            "cityZh": "灵丘",
            "id": "CN101100206"
        }, {"cityEn": "hunyuan", "cityZh": "浑源", "id": "CN101100207"}, {
            "cityEn": "zuoyun",
            "cityZh": "左云",
            "id": "CN101100208"
        }],
        "yangquan": [{"cityEn": "yangquan", "cityZh": "阳泉", "id": "CN101100301"}, {
            "cityEn": "yuxian",
            "cityZh": "盂县",
            "id": "CN101100302"
        }, {"cityEn": "pingding", "cityZh": "平定", "id": "CN101100303"}],
        "jinzhong": [{"cityEn": "jinzhong", "cityZh": "晋中", "id": "CN101100401"}, {
            "cityEn": "yuci",
            "cityZh": "榆次",
            "id": "CN101100402"
        }, {"cityEn": "yushe", "cityZh": "榆社", "id": "CN101100403"}, {
            "cityEn": "zuoquan",
            "cityZh": "左权",
            "id": "CN101100404"
        }, {"cityEn": "heshun", "cityZh": "和顺", "id": "CN101100405"}, {
            "cityEn": "xiyang",
            "cityZh": "昔阳",
            "id": "CN101100406"
        }, {"cityEn": "shouyang", "cityZh": "寿阳", "id": "CN101100407"}, {
            "cityEn": "taigu",
            "cityZh": "太谷",
            "id": "CN101100408"
        }, {"cityEn": "qixian", "cityZh": "祁县", "id": "CN101100409"}, {
            "cityEn": "pingyao",
            "cityZh": "平遥",
            "id": "CN101100410"
        }, {"cityEn": "lingshi", "cityZh": "灵石", "id": "CN101100411"}, {
            "cityEn": "jiexiu",
            "cityZh": "介休",
            "id": "CN101100412"
        }],
        "changzhi": [{"cityEn": "changzhi", "cityZh": "长治", "id": "CN101100501"}, {
            "cityEn": "licheng",
            "cityZh": "黎城",
            "id": "CN101100502"
        }, {"cityEn": "tunliu", "cityZh": "屯留", "id": "CN101100503"}, {
            "cityEn": "lucheng",
            "cityZh": "潞城",
            "id": "CN101100504"
        }, {"cityEn": "xiangyuan", "cityZh": "襄垣", "id": "CN101100505"}, {
            "cityEn": "pingshun",
            "cityZh": "平顺",
            "id": "CN101100506"
        }, {"cityEn": "wuxiang", "cityZh": "武乡", "id": "CN101100507"}, {
            "cityEn": "qinxian",
            "cityZh": "沁县",
            "id": "CN101100508"
        }, {"cityEn": "zhangzi", "cityZh": "长子", "id": "CN101100509"}, {
            "cityEn": "qinyuan",
            "cityZh": "沁源",
            "id": "CN101100510"
        }, {"cityEn": "huguan", "cityZh": "壶关", "id": "CN101100511"}],
        "jincheng": [{"cityEn": "jincheng", "cityZh": "晋城", "id": "CN101100601"}, {
            "cityEn": "qinshui",
            "cityZh": "沁水",
            "id": "CN101100602"
        }, {"cityEn": "yangcheng", "cityZh": "阳城", "id": "CN101100603"}, {
            "cityEn": "lingchuan",
            "cityZh": "陵川",
            "id": "CN101100604"
        }, {"cityEn": "gaoping", "cityZh": "高平", "id": "CN101100605"}, {
            "cityEn": "zezhou",
            "cityZh": "泽州",
            "id": "CN101100606"
        }],
        "linfen": [{"cityEn": "linfen", "cityZh": "临汾", "id": "CN101100701"}, {
            "cityEn": "quwo",
            "cityZh": "曲沃",
            "id": "CN101100702"
        }, {"cityEn": "yonghe", "cityZh": "永和", "id": "CN101100703"}, {
            "cityEn": "xixian",
            "cityZh": "隰县",
            "id": "CN101100704"
        }, {"cityEn": "daning", "cityZh": "大宁", "id": "CN101100705"}, {
            "cityEn": "jixian",
            "cityZh": "吉县",
            "id": "CN101100706"
        }, {"cityEn": "xiangfen", "cityZh": "襄汾", "id": "CN101100707"}, {
            "cityEn": "puxian",
            "cityZh": "蒲县",
            "id": "CN101100708"
        }, {"cityEn": "fenxi", "cityZh": "汾西", "id": "CN101100709"}, {
            "cityEn": "hongtong",
            "cityZh": "洪洞",
            "id": "CN101100710"
        }, {"cityEn": "huozhou", "cityZh": "霍州", "id": "CN101100711"}, {
            "cityEn": "xiangning",
            "cityZh": "乡宁",
            "id": "CN101100712"
        }, {"cityEn": "yicheng", "cityZh": "翼城", "id": "CN101100713"}, {
            "cityEn": "houma",
            "cityZh": "侯马",
            "id": "CN101100714"
        }, {"cityEn": "fushan", "cityZh": "浮山", "id": "CN101100715"}, {
            "cityEn": "anze",
            "cityZh": "安泽",
            "id": "CN101100716"
        }, {"cityEn": "guxian", "cityZh": "古县", "id": "CN101100717"}],
        "yuncheng": [{"cityEn": "yuncheng", "cityZh": "运城", "id": "CN101100801"}, {
            "cityEn": "linyi",
            "cityZh": "临猗",
            "id": "CN101100802"
        }, {"cityEn": "jishan", "cityZh": "稷山", "id": "CN101100803"}, {
            "cityEn": "wanrong",
            "cityZh": "万荣",
            "id": "CN101100804"
        }, {"cityEn": "hejin", "cityZh": "河津", "id": "CN101100805"}, {
            "cityEn": "xinjiang",
            "cityZh": "新绛",
            "id": "CN101100806"
        }, {"cityEn": "jiangxian", "cityZh": "绛县", "id": "CN101100807"}, {
            "cityEn": "wenxi",
            "cityZh": "闻喜",
            "id": "CN101100808"
        }, {"cityEn": "yuanqu", "cityZh": "垣曲", "id": "CN101100809"}, {
            "cityEn": "yongji",
            "cityZh": "永济",
            "id": "CN101100810"
        }, {"cityEn": "ruicheng", "cityZh": "芮城", "id": "CN101100811"}, {
            "cityEn": "xiaxian",
            "cityZh": "夏县",
            "id": "CN101100812"
        }, {"cityEn": "pinglu", "cityZh": "平陆", "id": "CN101100813"}],
        "shuozhou": [{"cityEn": "shuozhou", "cityZh": "朔州", "id": "CN101100901"}, {
            "cityEn": "pinglu",
            "cityZh": "平鲁",
            "id": "CN101100902"
        }, {"cityEn": "shanyin", "cityZh": "山阴", "id": "CN101100903"}, {
            "cityEn": "youyu",
            "cityZh": "右玉",
            "id": "CN101100904"
        }, {"cityEn": "yingxian", "cityZh": "应县", "id": "CN101100905"}, {
            "cityEn": "huairen",
            "cityZh": "怀仁",
            "id": "CN101100906"
        }],
        "xinzhou": [{"cityEn": "xinzhou", "cityZh": "忻州", "id": "CN101101001"}, {
            "cityEn": "dingxiang",
            "cityZh": "定襄",
            "id": "CN101101002"
        }, {"cityEn": "wutaixian", "cityZh": "五台县", "id": "CN101101003"}, {
            "cityEn": "hequ",
            "cityZh": "河曲",
            "id": "CN101101004"
        }, {"cityEn": "pianguan", "cityZh": "偏关", "id": "CN101101005"}, {
            "cityEn": "shenchi",
            "cityZh": "神池",
            "id": "CN101101006"
        }, {"cityEn": "ningwu", "cityZh": "宁武", "id": "CN101101007"}, {
            "cityEn": "daixian",
            "cityZh": "代县",
            "id": "CN101101008"
        }, {"cityEn": "fanshi", "cityZh": "繁峙", "id": "CN101101009"}, {
            "cityEn": "wutaishan",
            "cityZh": "五台山",
            "id": "CN101101010"
        }, {"cityEn": "bode", "cityZh": "保德", "id": "CN101101011"}, {
            "cityEn": "jingle",
            "cityZh": "静乐",
            "id": "CN101101012"
        }, {"cityEn": "kelan", "cityZh": "岢岚", "id": "CN101101013"}, {
            "cityEn": "wuzhai",
            "cityZh": "五寨",
            "id": "CN101101014"
        }, {"cityEn": "yuanping", "cityZh": "原平", "id": "CN101101015"}],
        "lvliang": [{"cityEn": "lvliang", "cityZh": "吕梁", "id": "CN101101100"}, {
            "cityEn": "lishi",
            "cityZh": "离石",
            "id": "CN101101101"
        }, {"cityEn": "linxian", "cityZh": "临县", "id": "CN101101102"}, {
            "cityEn": "xingxian",
            "cityZh": "兴县",
            "id": "CN101101103"
        }, {"cityEn": "lanxian", "cityZh": "岚县", "id": "CN101101104"}, {
            "cityEn": "liulin",
            "cityZh": "柳林",
            "id": "CN101101105"
        }, {"cityEn": "shilou", "cityZh": "石楼", "id": "CN101101106"}, {
            "cityEn": "fangshan",
            "cityZh": "方山",
            "id": "CN101101107"
        }, {"cityEn": "jiaokou", "cityZh": "交口", "id": "CN101101108"}, {
            "cityEn": "zhongyang",
            "cityZh": "中阳",
            "id": "CN101101109"
        }, {"cityEn": "xiaoyi", "cityZh": "孝义", "id": "CN101101110"}, {
            "cityEn": "fenyang",
            "cityZh": "汾阳",
            "id": "CN101101111"
        }, {"cityEn": "wenshui", "cityZh": "文水", "id": "CN101101112"}, {
            "cityEn": "jiaocheng",
            "cityZh": "交城",
            "id": "CN101101113"
        }],
        "jinan": [{"cityEn": "jinan", "cityZh": "济南", "id": "CN101120101"}, {
            "cityEn": "changqing",
            "cityZh": "长清",
            "id": "CN101120102"
        }, {"cityEn": "shanghe", "cityZh": "商河", "id": "CN101120103"}, {
            "cityEn": "zhangqiu",
            "cityZh": "章丘",
            "id": "CN101120104"
        }, {"cityEn": "pingyin", "cityZh": "平阴", "id": "CN101120105"}, {
            "cityEn": "jiyang",
            "cityZh": "济阳",
            "id": "CN101120106"
        }],
        "qingdao": [{"cityEn": "qingdao", "cityZh": "青岛", "id": "CN101120201"}, {
            "cityEn": "laoshan",
            "cityZh": "崂山",
            "id": "CN101120202"
        }, {"cityEn": "jimo", "cityZh": "即墨", "id": "CN101120204"}, {
            "cityEn": "jiaozhou",
            "cityZh": "胶州",
            "id": "CN101120205"
        }, {"cityEn": "huangdao", "cityZh": "黄岛", "id": "CN101120206"}, {
            "cityEn": "laixi",
            "cityZh": "莱西",
            "id": "CN101120207"
        }, {"cityEn": "pingdu", "cityZh": "平度", "id": "CN101120208"}],
        "zibo": [{"cityEn": "zibo", "cityZh": "淄博", "id": "CN101120301"}, {
            "cityEn": "zichuan",
            "cityZh": "淄川",
            "id": "CN101120302"
        }, {"cityEn": "boshan", "cityZh": "博山", "id": "CN101120303"}, {
            "cityEn": "gaoqing",
            "cityZh": "高青",
            "id": "CN101120304"
        }, {"cityEn": "zhoucun", "cityZh": "周村", "id": "CN101120305"}, {
            "cityEn": "yiyuan",
            "cityZh": "沂源",
            "id": "CN101120306"
        }, {"cityEn": "huantai", "cityZh": "桓台", "id": "CN101120307"}, {
            "cityEn": "linzi",
            "cityZh": "临淄",
            "id": "CN101120308"
        }],
        "dezhou": [{"cityEn": "dezhou", "cityZh": "德州", "id": "CN101120401"}, {
            "cityEn": "wucheng",
            "cityZh": "武城",
            "id": "CN101120402"
        }, {"cityEn": "linyi", "cityZh": "临邑", "id": "CN101120403"}, {
            "cityEn": "lingxian",
            "cityZh": "陵县",
            "id": "CN101120404"
        }, {"cityEn": "qihe", "cityZh": "齐河", "id": "CN101120405"}, {
            "cityEn": "leling",
            "cityZh": "乐陵",
            "id": "CN101120406"
        }, {"cityEn": "qingyun", "cityZh": "庆云", "id": "CN101120407"}, {
            "cityEn": "pingyuan",
            "cityZh": "平原",
            "id": "CN101120408"
        }, {"cityEn": "ningjin", "cityZh": "宁津", "id": "CN101120409"}, {
            "cityEn": "xiajin",
            "cityZh": "夏津",
            "id": "CN101120410"
        }, {"cityEn": "yucheng", "cityZh": "禹城", "id": "CN101120411"}],
        "yantai": [{"cityEn": "yantai", "cityZh": "烟台", "id": "CN101120501"}, {
            "cityEn": "laizhou",
            "cityZh": "莱州",
            "id": "CN101120502"
        }, {"cityEn": "changdao", "cityZh": "长岛", "id": "CN101120503"}, {
            "cityEn": "penglai",
            "cityZh": "蓬莱",
            "id": "CN101120504"
        }, {"cityEn": "longkou", "cityZh": "龙口", "id": "CN101120505"}, {
            "cityEn": "zhaoyuan",
            "cityZh": "招远",
            "id": "CN101120506"
        }, {"cityEn": "qixia", "cityZh": "栖霞", "id": "CN101120507"}, {
            "cityEn": "fushan",
            "cityZh": "福山",
            "id": "CN101120508"
        }, {"cityEn": "moup", "cityZh": "牟平", "id": "CN101120509"}, {
            "cityEn": "laiyang",
            "cityZh": "莱阳",
            "id": "CN101120510"
        }, {"cityEn": "haiyang", "cityZh": "海阳", "id": "CN101120511"}],
        "weifang": [{"cityEn": "weifang", "cityZh": "潍坊", "id": "CN101120601"}, {
            "cityEn": "qingzhou",
            "cityZh": "青州",
            "id": "CN101120602"
        }, {"cityEn": "shouguang", "cityZh": "寿光", "id": "CN101120603"}, {
            "cityEn": "linqu",
            "cityZh": "临朐",
            "id": "CN101120604"
        }, {"cityEn": "changle", "cityZh": "昌乐", "id": "CN101120605"}, {
            "cityEn": "changyi",
            "cityZh": "昌邑",
            "id": "CN101120606"
        }, {"cityEn": "anqiu", "cityZh": "安丘", "id": "CN101120607"}, {
            "cityEn": "gaomi",
            "cityZh": "高密",
            "id": "CN101120608"
        }, {"cityEn": "zhucheng", "cityZh": "诸城", "id": "CN101120609"}],
        "jining": [{"cityEn": "jining", "cityZh": "济宁", "id": "CN101120701"}, {
            "cityEn": "jiaxiang",
            "cityZh": "嘉祥",
            "id": "CN101120702"
        }, {"cityEn": "weishan", "cityZh": "微山", "id": "CN101120703"}, {
            "cityEn": "yutai",
            "cityZh": "鱼台",
            "id": "CN101120704"
        }, {"cityEn": "yanzhou", "cityZh": "兖州", "id": "CN101120705"}, {
            "cityEn": "jinxiang",
            "cityZh": "金乡",
            "id": "CN101120706"
        }, {"cityEn": "wenshang", "cityZh": "汶上", "id": "CN101120707"}, {
            "cityEn": "sishui",
            "cityZh": "泗水",
            "id": "CN101120708"
        }, {"cityEn": "liangshan", "cityZh": "梁山", "id": "CN101120709"}, {
            "cityEn": "qufu",
            "cityZh": "曲阜",
            "id": "CN101120710"
        }, {"cityEn": "zoucheng", "cityZh": "邹城", "id": "CN101120711"}],
        "taian": [{"cityEn": "taian", "cityZh": "泰安", "id": "CN101120801"}, {
            "cityEn": "xintai",
            "cityZh": "新泰",
            "id": "CN101120802"
        }, {"cityEn": "feicheng", "cityZh": "肥城", "id": "CN101120804"}, {
            "cityEn": "dongping",
            "cityZh": "东平",
            "id": "CN101120805"
        }, {"cityEn": "ningyang", "cityZh": "宁阳", "id": "CN101120806"}],
        "linyi": [{"cityEn": "linyi", "cityZh": "临沂", "id": "CN101120901"}, {
            "cityEn": "junan",
            "cityZh": "莒南",
            "id": "CN101120902"
        }, {"cityEn": "yinan", "cityZh": "沂南", "id": "CN101120903"}, {
            "cityEn": "lanling",
            "cityZh": "兰陵",
            "id": "CN101120904"
        }, {"cityEn": "linshu", "cityZh": "临沭", "id": "CN101120905"}, {
            "cityEn": "tancheng",
            "cityZh": "郯城",
            "id": "CN101120906"
        }, {"cityEn": "mengyin", "cityZh": "蒙阴", "id": "CN101120907"}, {
            "cityEn": "pingyi",
            "cityZh": "平邑",
            "id": "CN101120908"
        }, {"cityEn": "feixian", "cityZh": "费县", "id": "CN101120909"}, {
            "cityEn": "yishui",
            "cityZh": "沂水",
            "id": "CN101120910"
        }],
        "heze": [{"cityEn": "heze", "cityZh": "菏泽", "id": "CN101121001"}, {
            "cityEn": "juancheng",
            "cityZh": "鄄城",
            "id": "CN101121002"
        }, {"cityEn": "yuncheng", "cityZh": "郓城", "id": "CN101121003"}, {
            "cityEn": "dongming",
            "cityZh": "东明",
            "id": "CN101121004"
        }, {"cityEn": "dingtao", "cityZh": "定陶", "id": "CN101121005"}, {
            "cityEn": "juye",
            "cityZh": "巨野",
            "id": "CN101121006"
        }, {"cityEn": "caoxian", "cityZh": "曹县", "id": "CN101121007"}, {
            "cityEn": "chengwu",
            "cityZh": "成武",
            "id": "CN101121008"
        }, {"cityEn": "shanxian", "cityZh": "单县", "id": "CN101121009"}],
        "binzhou": [{"cityEn": "binzhou", "cityZh": "滨州", "id": "CN101121101"}, {
            "cityEn": "boxing",
            "cityZh": "博兴",
            "id": "CN101121102"
        }, {"cityEn": "wudi", "cityZh": "无棣", "id": "CN101121103"}, {
            "cityEn": "yangxin",
            "cityZh": "阳信",
            "id": "CN101121104"
        }, {"cityEn": "huimin", "cityZh": "惠民", "id": "CN101121105"}, {
            "cityEn": "zhanhua",
            "cityZh": "沾化",
            "id": "CN101121106"
        }, {"cityEn": "zouping", "cityZh": "邹平", "id": "CN101121107"}],
        "dongying": [{"cityEn": "dongying", "cityZh": "东营", "id": "CN101121201"}, {
            "cityEn": "hekou",
            "cityZh": "河口",
            "id": "CN101121202"
        }, {"cityEn": "kenli", "cityZh": "垦利", "id": "CN101121203"}, {
            "cityEn": "lijin",
            "cityZh": "利津",
            "id": "CN101121204"
        }, {"cityEn": "guangrao", "cityZh": "广饶", "id": "CN101121205"}],
        "weihai": [{"cityEn": "weihai", "cityZh": "威海", "id": "CN101121301"}, {
            "cityEn": "wendeng",
            "cityZh": "文登",
            "id": "CN101121302"
        }, {"cityEn": "rongcheng", "cityZh": "荣成", "id": "CN101121303"}, {
            "cityEn": "rushan",
            "cityZh": "乳山",
            "id": "CN101121304"
        }, {"cityEn": "chengshantou", "cityZh": "成山头", "id": "CN101121305"}, {
            "cityEn": "shidao",
            "cityZh": "石岛",
            "id": "CN101121306"
        }],
        "zaozhuang": [{"cityEn": "zaozhuang", "cityZh": "枣庄", "id": "CN101121401"}, {
            "cityEn": "xuecheng",
            "cityZh": "薛城",
            "id": "CN101121402"
        }, {"cityEn": "yicheng", "cityZh": "峄城", "id": "CN101121403"}, {
            "cityEn": "taierzhuang",
            "cityZh": "台儿庄",
            "id": "CN101121404"
        }, {"cityEn": "tengzhou", "cityZh": "滕州", "id": "CN101121405"}],
        "rizhao": [{"cityEn": "rizhao", "cityZh": "日照", "id": "CN101121501"}, {
            "cityEn": "wulian",
            "cityZh": "五莲",
            "id": "CN101121502"
        }, {"cityEn": "juxian", "cityZh": "莒县", "id": "CN101121503"}],
        "laiwu": [{"cityEn": "laiwu", "cityZh": "莱芜", "id": "CN101121601"}],
        "liaocheng": [{"cityEn": "liaocheng", "cityZh": "聊城", "id": "CN101121701"}, {
            "cityEn": "guanxian",
            "cityZh": "冠县",
            "id": "CN101121702"
        }, {"cityEn": "yanggu", "cityZh": "阳谷", "id": "CN101121703"}, {
            "cityEn": "gaotang",
            "cityZh": "高唐",
            "id": "CN101121704"
        }, {"cityEn": "chiping", "cityZh": "茌平", "id": "CN101121705"}, {
            "cityEn": "donge",
            "cityZh": "东阿",
            "id": "CN101121706"
        }, {"cityEn": "linqing", "cityZh": "临清", "id": "CN101121707"}, {
            "cityEn": "shenxian",
            "cityZh": "莘县",
            "id": "CN101121709"
        }],
        "nanjing": [{"cityEn": "nanjing", "cityZh": "南京", "id": "CN101190101"}, {
            "cityEn": "lishui",
            "cityZh": "溧水",
            "id": "CN101190102"
        }, {"cityEn": "gaochun", "cityZh": "高淳", "id": "CN101190103"}, {
            "cityEn": "jiangning",
            "cityZh": "江宁",
            "id": "CN101190104"
        }, {"cityEn": "luhe", "cityZh": "六合", "id": "CN101190105"}, {
            "cityEn": "jiangpu",
            "cityZh": "江浦",
            "id": "CN101190106"
        }, {"cityEn": "pukou", "cityZh": "浦口", "id": "CN101190107"}],
        "wuxi": [{"cityEn": "wuxi", "cityZh": "无锡", "id": "CN101190201"}, {
            "cityEn": "jiangyin",
            "cityZh": "江阴",
            "id": "CN101190202"
        }, {"cityEn": "yixing", "cityZh": "宜兴", "id": "CN101190203"}, {
            "cityEn": "xishan",
            "cityZh": "锡山",
            "id": "CN101190204"
        }],
        "zhenjiang": [{"cityEn": "zhenjiang", "cityZh": "镇江", "id": "CN101190301"}, {
            "cityEn": "danyang",
            "cityZh": "丹阳",
            "id": "CN101190302"
        }, {"cityEn": "yangzhong", "cityZh": "扬中", "id": "CN101190303"}, {
            "cityEn": "jurong",
            "cityZh": "句容",
            "id": "CN101190304"
        }, {"cityEn": "dantu", "cityZh": "丹徒", "id": "CN101190305"}],
        "suzhou": [{"cityEn": "suzhou", "cityZh": "苏州", "id": "CN101190401"}, {
            "cityEn": "changshu",
            "cityZh": "常熟",
            "id": "CN101190402"
        }, {"cityEn": "zhangjiagang", "cityZh": "张家港", "id": "CN101190403"}, {
            "cityEn": "kunshan",
            "cityZh": "昆山",
            "id": "CN101190404"
        }, {"cityEn": "wuzhong", "cityZh": "吴中", "id": "CN101190405"}, {
            "cityEn": "wujiang",
            "cityZh": "吴江",
            "id": "CN101190407"
        }, {"cityEn": "taicang", "cityZh": "太仓", "id": "CN101190408"}, {
            "cityEn": "suzhou",
            "cityZh": "宿州",
            "id": "CN101220701"
        }, {"cityEn": "dangshan", "cityZh": "砀山", "id": "CN101220702"}, {
            "cityEn": "lingbi",
            "cityZh": "灵璧",
            "id": "CN101220703"
        }, {"cityEn": "sixian", "cityZh": "泗县", "id": "CN101220704"}, {
            "cityEn": "xiaoxian",
            "cityZh": "萧县",
            "id": "CN101220705"
        }],
        "nantong": [{"cityEn": "nantong", "cityZh": "南通", "id": "CN101190501"}, {
            "cityEn": "haian",
            "cityZh": "海安",
            "id": "CN101190502"
        }, {"cityEn": "rugao", "cityZh": "如皋", "id": "CN101190503"}, {
            "cityEn": "rudong",
            "cityZh": "如东",
            "id": "CN101190504"
        }, {"cityEn": "qidong", "cityZh": "启东", "id": "CN101190507"}, {
            "cityEn": "haimen",
            "cityZh": "海门",
            "id": "CN101190508"
        }, {"cityEn": "tongzhou", "cityZh": "通州", "id": "CN101190509"}],
        "yangzhou": [{"cityEn": "yangzhou", "cityZh": "扬州", "id": "CN101190601"}, {
            "cityEn": "baoying",
            "cityZh": "宝应",
            "id": "CN101190602"
        }, {"cityEn": "yizheng", "cityZh": "仪征", "id": "CN101190603"}, {
            "cityEn": "gaoyou",
            "cityZh": "高邮",
            "id": "CN101190604"
        }, {"cityEn": "jiangdu", "cityZh": "江都", "id": "CN101190605"}, {
            "cityEn": "hanjiang",
            "cityZh": "邗江",
            "id": "CN101190606"
        }],
        "yancheng": [{"cityEn": "yancheng", "cityZh": "盐城", "id": "CN101190701"}, {
            "cityEn": "xiangshui",
            "cityZh": "响水",
            "id": "CN101190702"
        }, {"cityEn": "binhai", "cityZh": "滨海", "id": "CN101190703"}, {
            "cityEn": "funing",
            "cityZh": "阜宁",
            "id": "CN101190704"
        }, {"cityEn": "sheyang", "cityZh": "射阳", "id": "CN101190705"}, {
            "cityEn": "jianhu",
            "cityZh": "建湖",
            "id": "CN101190706"
        }, {"cityEn": "dongtai", "cityZh": "东台", "id": "CN101190707"}, {
            "cityEn": "dafeng",
            "cityZh": "大丰",
            "id": "CN101190708"
        }, {"cityEn": "yandu", "cityZh": "盐都", "id": "CN101190709"}],
        "xuzhou": [{"cityEn": "xuzhou", "cityZh": "徐州", "id": "CN101190801"}, {
            "cityEn": "tongshan",
            "cityZh": "铜山",
            "id": "CN101190802"
        }, {"cityEn": "fengxian", "cityZh": "丰县", "id": "CN101190803"}, {
            "cityEn": "peixian",
            "cityZh": "沛县",
            "id": "CN101190804"
        }, {"cityEn": "pizhou", "cityZh": "邳州", "id": "CN101190805"}, {
            "cityEn": "suining",
            "cityZh": "睢宁",
            "id": "CN101190806"
        }, {"cityEn": "xinyi", "cityZh": "新沂", "id": "CN101190807"}],
        "huaian": [{"cityEn": "huaian", "cityZh": "淮安", "id": "CN101190901"}, {
            "cityEn": "jinhu",
            "cityZh": "金湖",
            "id": "CN101190902"
        }, {"cityEn": "xuyi", "cityZh": "盱眙", "id": "CN101190903"}, {
            "cityEn": "hongze",
            "cityZh": "洪泽",
            "id": "CN101190904"
        }, {"cityEn": "lianshui", "cityZh": "涟水", "id": "CN101190905"}, {
            "cityEn": "huaiyinqu",
            "cityZh": "淮阴区",
            "id": "CN101190906"
        }, {"cityEn": "huaianqu", "cityZh": "淮安区", "id": "CN101190908"}],
        "lianyungang": [{"cityEn": "lianyungang", "cityZh": "连云港", "id": "CN101191001"}, {
            "cityEn": "donghai",
            "cityZh": "东海",
            "id": "CN101191002"
        }, {"cityEn": "ganyu", "cityZh": "赣榆", "id": "CN101191003"}, {
            "cityEn": "guanyun",
            "cityZh": "灌云",
            "id": "CN101191004"
        }, {"cityEn": "guannan", "cityZh": "灌南", "id": "CN101191005"}],
        "changzhou": [{"cityEn": "changzhou", "cityZh": "常州", "id": "CN101191101"}, {
            "cityEn": "liyang",
            "cityZh": "溧阳",
            "id": "CN101191102"
        }, {"cityEn": "jintan", "cityZh": "金坛", "id": "CN101191103"}, {
            "cityEn": "wujin",
            "cityZh": "武进",
            "id": "CN101191104"
        }],
        "taizhou": [{"cityEn": "taizhou", "cityZh": "泰州", "id": "CN101191201"}, {
            "cityEn": "xinghua",
            "cityZh": "兴化",
            "id": "CN101191202"
        }, {"cityEn": "taixing", "cityZh": "泰兴", "id": "CN101191203"}, {
            "cityEn": "jiangyan",
            "cityZh": "姜堰",
            "id": "CN101191204"
        }, {"cityEn": "jingjiang", "cityZh": "靖江", "id": "CN101191205"}, {
            "cityEn": "taizhou",
            "cityZh": "台州",
            "id": "CN101210601"
        }, {"cityEn": "yuhuan", "cityZh": "玉环", "id": "CN101210603"}, {
            "cityEn": "sanmen",
            "cityZh": "三门",
            "id": "CN101210604"
        }, {"cityEn": "tiantai", "cityZh": "天台", "id": "CN101210605"}, {
            "cityEn": "xianju",
            "cityZh": "仙居",
            "id": "CN101210606"
        }, {"cityEn": "wenling", "cityZh": "温岭", "id": "CN101210607"}, {
            "cityEn": "hongjia",
            "cityZh": "洪家",
            "id": "CN101210609"
        }, {"cityEn": "linhai", "cityZh": "临海", "id": "CN101210610"}, {
            "cityEn": "jiaojiang",
            "cityZh": "椒江",
            "id": "CN101210611"
        }, {"cityEn": "huangyan", "cityZh": "黄岩", "id": "CN101210612"}, {
            "cityEn": "luqiao",
            "cityZh": "路桥",
            "id": "CN101210613"
        }],
        "suqian": [{"cityEn": "suqian", "cityZh": "宿迁", "id": "CN101191301"}, {
            "cityEn": "shuyang",
            "cityZh": "沭阳",
            "id": "CN101191302"
        }, {"cityEn": "siyang", "cityZh": "泗阳", "id": "CN101191303"}, {
            "cityEn": "sihong",
            "cityZh": "泗洪",
            "id": "CN101191304"
        }, {"cityEn": "suyu", "cityZh": "宿豫", "id": "CN101191305"}],
        "hangzhou": [{"cityEn": "hangzhou", "cityZh": "杭州", "id": "CN101210101"}, {
            "cityEn": "xiaoshan",
            "cityZh": "萧山",
            "id": "CN101210102"
        }, {"cityEn": "tonglu", "cityZh": "桐庐", "id": "CN101210103"}, {
            "cityEn": "chunan",
            "cityZh": "淳安",
            "id": "CN101210104"
        }, {"cityEn": "jiande", "cityZh": "建德", "id": "CN101210105"}, {
            "cityEn": "yuhang",
            "cityZh": "余杭",
            "id": "CN101210106"
        }, {"cityEn": "linan", "cityZh": "临安", "id": "CN101210107"}, {
            "cityEn": "fuyang",
            "cityZh": "富阳",
            "id": "CN101210108"
        }],
        "huzhou": [{"cityEn": "huzhou", "cityZh": "湖州", "id": "CN101210201"}, {
            "cityEn": "changxing",
            "cityZh": "长兴",
            "id": "CN101210202"
        }, {"cityEn": "anji", "cityZh": "安吉", "id": "CN101210203"}, {
            "cityEn": "deqing",
            "cityZh": "德清",
            "id": "CN101210204"
        }],
        "jiaxing": [{"cityEn": "jiaxing", "cityZh": "嘉兴", "id": "CN101210301"}, {
            "cityEn": "jiashan",
            "cityZh": "嘉善",
            "id": "CN101210302"
        }, {"cityEn": "haining", "cityZh": "海宁", "id": "CN101210303"}, {
            "cityEn": "tongxiang",
            "cityZh": "桐乡",
            "id": "CN101210304"
        }, {"cityEn": "pinghu", "cityZh": "平湖", "id": "CN101210305"}, {
            "cityEn": "haiyan",
            "cityZh": "海盐",
            "id": "CN101210306"
        }],
        "ningbo": [{"cityEn": "ningbo", "cityZh": "宁波", "id": "CN101210401"}, {
            "cityEn": "cixi",
            "cityZh": "慈溪",
            "id": "CN101210403"
        }, {"cityEn": "yuyao", "cityZh": "余姚", "id": "CN101210404"}, {
            "cityEn": "fenghua",
            "cityZh": "奉化",
            "id": "CN101210405"
        }, {"cityEn": "xiangshan", "cityZh": "象山", "id": "CN101210406"}, {
            "cityEn": "ninghai",
            "cityZh": "宁海",
            "id": "CN101210408"
        }, {"cityEn": "beilun", "cityZh": "北仑", "id": "CN101210410"}, {
            "cityEn": "yinzhou",
            "cityZh": "鄞州",
            "id": "CN101210411"
        }, {"cityEn": "zhenhai", "cityZh": "镇海", "id": "CN101210412"}],
        "shaoxing": [{"cityEn": "yuecheng", "cityZh": "越城", "id": "CN101210501"}, {
            "cityEn": "zhuji",
            "cityZh": "诸暨",
            "id": "CN101210502"
        }, {"cityEn": "shangyu", "cityZh": "上虞", "id": "CN101210503"}, {
            "cityEn": "xinchang",
            "cityZh": "新昌",
            "id": "CN101210504"
        }, {"cityEn": "shengzhou", "cityZh": "嵊州", "id": "CN101210505"}, {
            "cityEn": "keqiao",
            "cityZh": "柯桥",
            "id": "CN101210506"
        }],
        "wenzhou": [{"cityEn": "wenzhou", "cityZh": "温州", "id": "CN101210701"}, {
            "cityEn": "taishun",
            "cityZh": "泰顺",
            "id": "CN101210702"
        }, {"cityEn": "wencheng", "cityZh": "文成", "id": "CN101210703"}, {
            "cityEn": "pingyang",
            "cityZh": "平阳",
            "id": "CN101210704"
        }, {"cityEn": "ruian", "cityZh": "瑞安", "id": "CN101210705"}, {
            "cityEn": "dongtou",
            "cityZh": "洞头",
            "id": "CN101210706"
        }, {"cityEn": "yueqing", "cityZh": "乐清", "id": "CN101210707"}, {
            "cityEn": "yongjia",
            "cityZh": "永嘉",
            "id": "CN101210708"
        }, {"cityEn": "cangnan", "cityZh": "苍南", "id": "CN101210709"}],
        "lishui": [{"cityEn": "lishui", "cityZh": "丽水", "id": "CN101210801"}, {
            "cityEn": "suichang",
            "cityZh": "遂昌",
            "id": "CN101210802"
        }, {"cityEn": "longquan", "cityZh": "龙泉", "id": "CN101210803"}, {
            "cityEn": "jinyun",
            "cityZh": "缙云",
            "id": "CN101210804"
        }, {"cityEn": "qingtian", "cityZh": "青田", "id": "CN101210805"}, {
            "cityEn": "yunhe",
            "cityZh": "云和",
            "id": "CN101210806"
        }, {"cityEn": "qingyuan", "cityZh": "庆元", "id": "CN101210807"}, {
            "cityEn": "songyang",
            "cityZh": "松阳",
            "id": "CN101210808"
        }, {"cityEn": "jingning", "cityZh": "景宁", "id": "CN101210809"}],
        "jinhua": [{"cityEn": "jinhua", "cityZh": "金华", "id": "CN101210901"}, {
            "cityEn": "pujiang",
            "cityZh": "浦江",
            "id": "CN101210902"
        }, {"cityEn": "lanxi", "cityZh": "兰溪", "id": "CN101210903"}, {
            "cityEn": "yiwu",
            "cityZh": "义乌",
            "id": "CN101210904"
        }, {"cityEn": "dongyang", "cityZh": "东阳", "id": "CN101210905"}, {
            "cityEn": "wuyi",
            "cityZh": "武义",
            "id": "CN101210906"
        }, {"cityEn": "yongkang", "cityZh": "永康", "id": "CN101210907"}, {
            "cityEn": "panan",
            "cityZh": "磐安",
            "id": "CN101210908"
        }],
        "quzhou": [{"cityEn": "quzhou", "cityZh": "衢州", "id": "CN101211001"}, {
            "cityEn": "changshan",
            "cityZh": "常山",
            "id": "CN101211002"
        }, {"cityEn": "kaihua", "cityZh": "开化", "id": "CN101211003"}, {
            "cityEn": "longyou",
            "cityZh": "龙游",
            "id": "CN101211004"
        }, {"cityEn": "jiangshan", "cityZh": "江山", "id": "CN101211005"}, {
            "cityEn": "qujiang",
            "cityZh": "衢江",
            "id": "CN101211006"
        }],
        "zhoushan": [{"cityEn": "zhoushan", "cityZh": "舟山", "id": "CN101211101"}, {
            "cityEn": "shengsi",
            "cityZh": "嵊泗",
            "id": "CN101211102"
        }, {"cityEn": "daishan", "cityZh": "岱山", "id": "CN101211104"}, {
            "cityEn": "putuo",
            "cityZh": "普陀",
            "id": "CN101211105"
        }, {"cityEn": "dinghai", "cityZh": "定海", "id": "CN101211106"}],
        "fuzhou": [{"cityEn": "fuzhou", "cityZh": "福州", "id": "CN101230101"}, {
            "cityEn": "minqing",
            "cityZh": "闽清",
            "id": "CN101230102"
        }, {"cityEn": "minhou", "cityZh": "闽侯", "id": "CN101230103"}, {
            "cityEn": "luoyuan",
            "cityZh": "罗源",
            "id": "CN101230104"
        }, {"cityEn": "lianjiang", "cityZh": "连江", "id": "CN101230105"}, {
            "cityEn": "yongtai",
            "cityZh": "永泰",
            "id": "CN101230107"
        }, {"cityEn": "pingtan", "cityZh": "平潭", "id": "CN101230108"}, {
            "cityEn": "changle",
            "cityZh": "长乐",
            "id": "CN101230110"
        }, {"cityEn": "fuqing", "cityZh": "福清", "id": "CN101230111"}, {
            "cityEn": "fuzhou",
            "cityZh": "抚州",
            "id": "CN101240401"
        }, {"cityEn": "guangchang", "cityZh": "广昌", "id": "CN101240402"}, {
            "cityEn": "anle",
            "cityZh": "乐安",
            "id": "CN101240403"
        }, {"cityEn": "chongren", "cityZh": "崇仁", "id": "CN101240404"}, {
            "cityEn": "jinxi",
            "cityZh": "金溪",
            "id": "CN101240405"
        }, {"cityEn": "zixi", "cityZh": "资溪", "id": "CN101240406"}, {
            "cityEn": "yihuang",
            "cityZh": "宜黄",
            "id": "CN101240407"
        }, {"cityEn": "nancheng", "cityZh": "南城", "id": "CN101240408"}, {
            "cityEn": "nanfeng",
            "cityZh": "南丰",
            "id": "CN101240409"
        }, {"cityEn": "lichuan", "cityZh": "黎川", "id": "CN101240410"}, {
            "cityEn": "dongxiang",
            "cityZh": "东乡",
            "id": "CN101240411"
        }],
        "diaoyudao": [{"cityEn": "diaoyudao", "cityZh": "钓鱼岛", "id": "CN101231001"}],
        "xiamen": [{"cityEn": "xiamen", "cityZh": "厦门", "id": "CN101230201"}, {
            "cityEn": "tongan",
            "cityZh": "同安",
            "id": "CN101230202"
        }],
        "ningde": [{"cityEn": "ningde", "cityZh": "宁德", "id": "CN101230301"}, {
            "cityEn": "gutian",
            "cityZh": "古田",
            "id": "CN101230302"
        }, {"cityEn": "xiapu", "cityZh": "霞浦", "id": "CN101230303"}, {
            "cityEn": "shouning",
            "cityZh": "寿宁",
            "id": "CN101230304"
        }, {"cityEn": "zhouning", "cityZh": "周宁", "id": "CN101230305"}, {
            "cityEn": "fuan",
            "cityZh": "福安",
            "id": "CN101230306"
        }, {"cityEn": "zherong", "cityZh": "柘荣", "id": "CN101230307"}, {
            "cityEn": "fuding",
            "cityZh": "福鼎",
            "id": "CN101230308"
        }, {"cityEn": "pingnan", "cityZh": "屏南", "id": "CN101230309"}],
        "putian": [{"cityEn": "putian", "cityZh": "莆田", "id": "CN101230401"}, {
            "cityEn": "xianyou",
            "cityZh": "仙游",
            "id": "CN101230402"
        }, {"cityEn": "xiuyugang", "cityZh": "秀屿港", "id": "CN101230403"}, {
            "cityEn": "hanjiang",
            "cityZh": "涵江",
            "id": "CN101230404"
        }, {"cityEn": "xiuyu", "cityZh": "秀屿", "id": "CN101230405"}, {
            "cityEn": "licheng",
            "cityZh": "荔城",
            "id": "CN101230406"
        }, {"cityEn": "chengxiang", "cityZh": "城厢", "id": "CN101230407"}],
        "quanzhou": [{"cityEn": "quanzhou", "cityZh": "泉州", "id": "CN101230501"}, {
            "cityEn": "anxi",
            "cityZh": "安溪",
            "id": "CN101230502"
        }, {"cityEn": "yongchun", "cityZh": "永春", "id": "CN101230504"}, {
            "cityEn": "dehua",
            "cityZh": "德化",
            "id": "CN101230505"
        }, {"cityEn": "nanan", "cityZh": "南安", "id": "CN101230506"}, {
            "cityEn": "chongwu",
            "cityZh": "崇武",
            "id": "CN101230507"
        }, {"cityEn": "huian", "cityZh": "惠安", "id": "CN101230508"}, {
            "cityEn": "jinjiang",
            "cityZh": "晋江",
            "id": "CN101230509"
        }, {"cityEn": "shishi", "cityZh": "石狮", "id": "CN101230510"}],
        "zhangzhou": [{"cityEn": "zhangzhou", "cityZh": "漳州", "id": "CN101230601"}, {
            "cityEn": "changtai",
            "cityZh": "长泰",
            "id": "CN101230602"
        }, {"cityEn": "nanjing", "cityZh": "南靖", "id": "CN101230603"}, {
            "cityEn": "pinghe",
            "cityZh": "平和",
            "id": "CN101230604"
        }, {"cityEn": "longhai", "cityZh": "龙海", "id": "CN101230605"}, {
            "cityEn": "zhangpu",
            "cityZh": "漳浦",
            "id": "CN101230606"
        }, {"cityEn": "zhaoan", "cityZh": "诏安", "id": "CN101230607"}, {
            "cityEn": "dongshan",
            "cityZh": "东山",
            "id": "CN101230608"
        }, {"cityEn": "yunxiao", "cityZh": "云霄", "id": "CN101230609"}, {
            "cityEn": "huaan",
            "cityZh": "华安",
            "id": "CN101230610"
        }],
        "longyan": [{"cityEn": "longyan", "cityZh": "龙岩", "id": "CN101230701"}, {
            "cityEn": "changting",
            "cityZh": "长汀",
            "id": "CN101230702"
        }, {"cityEn": "liancheng", "cityZh": "连城", "id": "CN101230703"}, {
            "cityEn": "wuping",
            "cityZh": "武平",
            "id": "CN101230704"
        }, {"cityEn": "shanghang", "cityZh": "上杭", "id": "CN101230705"}, {
            "cityEn": "yongding",
            "cityZh": "永定",
            "id": "CN101230706"
        }, {"cityEn": "zhangping", "cityZh": "漳平", "id": "CN101230707"}],
        "sanming": [{"cityEn": "sanming", "cityZh": "三明", "id": "CN101230801"}, {
            "cityEn": "ninghua",
            "cityZh": "宁化",
            "id": "CN101230802"
        }, {"cityEn": "qingliu", "cityZh": "清流", "id": "CN101230803"}, {
            "cityEn": "taining",
            "cityZh": "泰宁",
            "id": "CN101230804"
        }, {"cityEn": "jiangle", "cityZh": "将乐", "id": "CN101230805"}, {
            "cityEn": "jianning",
            "cityZh": "建宁",
            "id": "CN101230806"
        }, {"cityEn": "mingxi", "cityZh": "明溪", "id": "CN101230807"}, {
            "cityEn": "shaxian",
            "cityZh": "沙县",
            "id": "CN101230808"
        }, {"cityEn": "youxi", "cityZh": "尤溪", "id": "CN101230809"}, {
            "cityEn": "yongan",
            "cityZh": "永安",
            "id": "CN101230810"
        }, {"cityEn": "datian", "cityZh": "大田", "id": "CN101230811"}],
        "nanping": [{"cityEn": "nanping", "cityZh": "南平", "id": "CN101230901"}, {
            "cityEn": "shunchang",
            "cityZh": "顺昌",
            "id": "CN101230902"
        }, {"cityEn": "guangze", "cityZh": "光泽", "id": "CN101230903"}, {
            "cityEn": "shaowu",
            "cityZh": "邵武",
            "id": "CN101230904"
        }, {"cityEn": "wuyishan", "cityZh": "武夷山", "id": "CN101230905"}, {
            "cityEn": "pucheng",
            "cityZh": "浦城",
            "id": "CN101230906"
        }, {"cityEn": "jianyang", "cityZh": "建阳", "id": "CN101230907"}, {
            "cityEn": "songxi",
            "cityZh": "松溪",
            "id": "CN101230908"
        }, {"cityEn": "zhenghe", "cityZh": "政和", "id": "CN101230909"}, {
            "cityEn": "jianou",
            "cityZh": "建瓯",
            "id": "CN101230910"
        }],
        "nanchang": [{"cityEn": "nanchang", "cityZh": "南昌", "id": "CN101240101"}, {
            "cityEn": "xinjian",
            "cityZh": "新建",
            "id": "CN101240102"
        }, {"cityEn": "nanchangxian", "cityZh": "南昌县", "id": "CN101240103"}, {
            "cityEn": "anyi",
            "cityZh": "安义",
            "id": "CN101240104"
        }, {"cityEn": "jinxian", "cityZh": "进贤", "id": "CN101240105"}],
        "jiujiang": [{"cityEn": "jiujiang", "cityZh": "九江", "id": "CN101240201"}, {
            "cityEn": "ruichang",
            "cityZh": "瑞昌",
            "id": "CN101240202"
        }, {"cityEn": "lushan", "cityZh": "庐山", "id": "CN101240203"}, {
            "cityEn": "wuning",
            "cityZh": "武宁",
            "id": "CN101240204"
        }, {"cityEn": "dean", "cityZh": "德安", "id": "CN101240205"}, {
            "cityEn": "yongxiu",
            "cityZh": "永修",
            "id": "CN101240206"
        }, {"cityEn": "hukou", "cityZh": "湖口", "id": "CN101240207"}, {
            "cityEn": "pengze",
            "cityZh": "彭泽",
            "id": "CN101240208"
        }, {"cityEn": "xingzi", "cityZh": "星子", "id": "CN101240209"}, {
            "cityEn": "duchang",
            "cityZh": "都昌",
            "id": "CN101240210"
        }, {"cityEn": "xiushui", "cityZh": "修水", "id": "CN101240212"}],
        "shangrao": [{"cityEn": "shangrao", "cityZh": "上饶", "id": "CN101240301"}, {
            "cityEn": "poyang",
            "cityZh": "鄱阳",
            "id": "CN101240302"
        }, {"cityEn": "wuyuan", "cityZh": "婺源", "id": "CN101240303"}, {
            "cityEn": "yugan",
            "cityZh": "余干",
            "id": "CN101240305"
        }, {"cityEn": "wannian", "cityZh": "万年", "id": "CN101240306"}, {
            "cityEn": "dexing",
            "cityZh": "德兴",
            "id": "CN101240307"
        }, {"cityEn": "shangraoxian", "cityZh": "上饶县", "id": "CN101240308"}, {
            "cityEn": "yiyang",
            "cityZh": "弋阳",
            "id": "CN101240309"
        }, {"cityEn": "hengfeng", "cityZh": "横峰", "id": "CN101240310"}, {
            "cityEn": "yanshan",
            "cityZh": "铅山",
            "id": "CN101240311"
        }, {"cityEn": "yushan", "cityZh": "玉山", "id": "CN101240312"}, {
            "cityEn": "guangfeng",
            "cityZh": "广丰",
            "id": "CN101240313"
        }],
        "jian": [{"cityEn": "jian", "cityZh": "吉安", "id": "CN101240601"}, {
            "cityEn": "jianxian",
            "cityZh": "吉安县",
            "id": "CN101240602"
        }, {"cityEn": "jishui", "cityZh": "吉水", "id": "CN101240603"}, {
            "cityEn": "xingan",
            "cityZh": "新干",
            "id": "CN101240604"
        }, {"cityEn": "xiajiang", "cityZh": "峡江", "id": "CN101240605"}, {
            "cityEn": "yongfeng",
            "cityZh": "永丰",
            "id": "CN101240606"
        }, {"cityEn": "yongxin", "cityZh": "永新", "id": "CN101240607"}, {
            "cityEn": "jinggangshan",
            "cityZh": "井冈山",
            "id": "CN101240608"
        }, {"cityEn": "wanan", "cityZh": "万安", "id": "CN101240609"}, {
            "cityEn": "suichuan",
            "cityZh": "遂川",
            "id": "CN101240610"
        }, {"cityEn": "taihe", "cityZh": "泰和", "id": "CN101240611"}, {
            "cityEn": "anfu",
            "cityZh": "安福",
            "id": "CN101240612"
        }, {"cityEn": "ninggang", "cityZh": "宁冈", "id": "CN101240613"}],
        "ganzhou": [{"cityEn": "ganzhou", "cityZh": "赣州", "id": "CN101240701"}, {
            "cityEn": "chongyi",
            "cityZh": "崇义",
            "id": "CN101240702"
        }, {"cityEn": "shangyou", "cityZh": "上犹", "id": "CN101240703"}, {
            "cityEn": "nankang",
            "cityZh": "南康",
            "id": "CN101240704"
        }, {"cityEn": "dayu", "cityZh": "大余", "id": "CN101240705"}, {
            "cityEn": "xinfeng",
            "cityZh": "信丰",
            "id": "CN101240706"
        }, {"cityEn": "ningdu", "cityZh": "宁都", "id": "CN101240707"}, {
            "cityEn": "shicheng",
            "cityZh": "石城",
            "id": "CN101240708"
        }, {"cityEn": "ruijin", "cityZh": "瑞金", "id": "CN101240709"}, {
            "cityEn": "yudu",
            "cityZh": "于都",
            "id": "CN101240710"
        }, {"cityEn": "huichang", "cityZh": "会昌", "id": "CN101240711"}, {
            "cityEn": "anyuan",
            "cityZh": "安远",
            "id": "CN101240712"
        }, {"cityEn": "quannan", "cityZh": "全南", "id": "CN101240713"}, {
            "cityEn": "longnan",
            "cityZh": "龙南",
            "id": "CN101240714"
        }, {"cityEn": "dingnan", "cityZh": "定南", "id": "CN101240715"}, {
            "cityEn": "xunwu",
            "cityZh": "寻乌",
            "id": "CN101240716"
        }, {"cityEn": "xingguo", "cityZh": "兴国", "id": "CN101240717"}, {
            "cityEn": "ganxian",
            "cityZh": "赣县",
            "id": "CN101240718"
        }],
        "jingdezhen": [{"cityEn": "jingdezhen", "cityZh": "景德镇", "id": "CN101240801"}, {
            "cityEn": "leping",
            "cityZh": "乐平",
            "id": "CN101240802"
        }, {"cityEn": "fuliang", "cityZh": "浮梁", "id": "CN101240803"}],
        "pingxiang": [{"cityEn": "pingxiang", "cityZh": "萍乡", "id": "CN101240901"}, {
            "cityEn": "lianhua",
            "cityZh": "莲花",
            "id": "CN101240902"
        }, {"cityEn": "shangli", "cityZh": "上栗", "id": "CN101240903"}, {
            "cityEn": "anyuan",
            "cityZh": "安源",
            "id": "CN101240904"
        }, {"cityEn": "luxi", "cityZh": "芦溪", "id": "CN101240905"}, {
            "cityEn": "xiangdong",
            "cityZh": "湘东",
            "id": "CN101240906"
        }],
        "xinyu": [{"cityEn": "xinyu", "cityZh": "新余", "id": "CN101241001"}, {
            "cityEn": "fenyi",
            "cityZh": "分宜",
            "id": "CN101241002"
        }],
        "yingtan": [{"cityEn": "yingtan", "cityZh": "鹰潭", "id": "CN101241101"}, {
            "cityEn": "yujiang",
            "cityZh": "余江",
            "id": "CN101241102"
        }, {"cityEn": "guixi", "cityZh": "贵溪", "id": "CN101241103"}],
        "hefei": [{"cityEn": "hefei", "cityZh": "合肥", "id": "CN101220101"}, {
            "cityEn": "changfeng",
            "cityZh": "长丰",
            "id": "CN101220102"
        }, {"cityEn": "feidong", "cityZh": "肥东", "id": "CN101220103"}, {
            "cityEn": "feixi",
            "cityZh": "肥西",
            "id": "CN101220104"
        }, {"cityEn": "chaohu", "cityZh": "巢湖", "id": "CN101220105"}, {
            "cityEn": "lujiang",
            "cityZh": "庐江",
            "id": "CN101220106"
        }],
        "bengbu": [{"cityEn": "bengbu", "cityZh": "蚌埠", "id": "CN101220201"}, {
            "cityEn": "huaiyuan",
            "cityZh": "怀远",
            "id": "CN101220202"
        }, {"cityEn": "guzhen", "cityZh": "固镇", "id": "CN101220203"}, {
            "cityEn": "wuhe",
            "cityZh": "五河",
            "id": "CN101220204"
        }],
        "wuhu": [{"cityEn": "wuhu", "cityZh": "芜湖", "id": "CN101220301"}, {
            "cityEn": "fanyang",
            "cityZh": "繁昌",
            "id": "CN101220302"
        }, {"cityEn": "wuhuxian", "cityZh": "芜湖县", "id": "CN101220303"}, {
            "cityEn": "nanling",
            "cityZh": "南陵",
            "id": "CN101220304"
        }, {"cityEn": "wuwei", "cityZh": "无为", "id": "CN101220305"}],
        "huainan": [{"cityEn": "huainan", "cityZh": "淮南", "id": "CN101220401"}, {
            "cityEn": "fengtai",
            "cityZh": "凤台",
            "id": "CN101220402"
        }, {"cityEn": "panji", "cityZh": "潘集", "id": "CN101220403"}],
        "maanshan": [{"cityEn": "maanshan", "cityZh": "马鞍山", "id": "CN101220501"}, {
            "cityEn": "dangtu",
            "cityZh": "当涂",
            "id": "CN101220502"
        }, {"cityEn": "hanshan", "cityZh": "含山", "id": "CN101220503"}, {
            "cityEn": "hexian",
            "cityZh": "和县",
            "id": "CN101220504"
        }],
        "anqing": [{"cityEn": "anqing", "cityZh": "安庆", "id": "CN101220601"}, {
            "cityEn": "zongyang",
            "cityZh": "枞阳",
            "id": "CN101220602"
        }, {"cityEn": "taihu", "cityZh": "太湖", "id": "CN101220603"}, {
            "cityEn": "qianshan",
            "cityZh": "潜山",
            "id": "CN101220604"
        }, {"cityEn": "huaining", "cityZh": "怀宁", "id": "CN101220605"}, {
            "cityEn": "susong",
            "cityZh": "宿松",
            "id": "CN101220606"
        }, {"cityEn": "wangjiang", "cityZh": "望江", "id": "CN101220607"}, {
            "cityEn": "yuexi",
            "cityZh": "岳西",
            "id": "CN101220608"
        }, {"cityEn": "tongcheng", "cityZh": "桐城", "id": "CN101220609"}],
        "fuyang": [{"cityEn": "fuyang", "cityZh": "阜阳", "id": "CN101220801"}, {
            "cityEn": "funan",
            "cityZh": "阜南",
            "id": "CN101220802"
        }, {"cityEn": "yingshang", "cityZh": "颍上", "id": "CN101220803"}, {
            "cityEn": "linquan",
            "cityZh": "临泉",
            "id": "CN101220804"
        }, {"cityEn": "jieshou", "cityZh": "界首", "id": "CN101220805"}, {
            "cityEn": "taihe",
            "cityZh": "太和",
            "id": "CN101220806"
        }],
        "bozhou": [{"cityEn": "bozhou", "cityZh": "亳州", "id": "CN101220901"}, {
            "cityEn": "guoyang",
            "cityZh": "涡阳",
            "id": "CN101220902"
        }, {"cityEn": "lixin", "cityZh": "利辛", "id": "CN101220903"}, {
            "cityEn": "mengcheng",
            "cityZh": "蒙城",
            "id": "CN101220904"
        }],
        "huangshan": [{"cityEn": "huangshan", "cityZh": "黄山", "id": "CN101221001"}, {
            "cityEn": "huangshanqu",
            "cityZh": "黄山区",
            "id": "CN101221002"
        }, {"cityEn": "tunxi", "cityZh": "屯溪", "id": "CN101221003"}, {
            "cityEn": "qimen",
            "cityZh": "祁门",
            "id": "CN101221004"
        }, {"cityEn": "yixian", "cityZh": "黟县", "id": "CN101221005"}, {
            "cityEn": "shexian",
            "cityZh": "歙县",
            "id": "CN101221006"
        }, {"cityEn": "xiuning", "cityZh": "休宁", "id": "CN101221007"}, {
            "cityEn": "huangshanfengjingqu",
            "cityZh": "黄山风景区(光明顶)",
            "id": "CN101221008"
        }],
        "chuzhou": [{"cityEn": "chuzhou", "cityZh": "滁州", "id": "CN101221101"}, {
            "cityEn": "fengyang",
            "cityZh": "凤阳",
            "id": "CN101221102"
        }, {"cityEn": "mingguang", "cityZh": "明光", "id": "CN101221103"}, {
            "cityEn": "dingyuan",
            "cityZh": "定远",
            "id": "CN101221104"
        }, {"cityEn": "quanjiao", "cityZh": "全椒", "id": "CN101221105"}, {
            "cityEn": "laian",
            "cityZh": "来安",
            "id": "CN101221106"
        }, {"cityEn": "tianchang", "cityZh": "天长", "id": "CN101221107"}],
        "huaibei": [{"cityEn": "huaibei", "cityZh": "淮北", "id": "CN101221201"}, {
            "cityEn": "suixi",
            "cityZh": "濉溪",
            "id": "CN101221202"
        }],
        "tongling": [{"cityEn": "tongling", "cityZh": "铜陵", "id": "CN101221301"}],
        "xuancheng": [{"cityEn": "xuancheng", "cityZh": "宣城", "id": "CN101221401"}, {
            "cityEn": "jingxian",
            "cityZh": "泾县",
            "id": "CN101221402"
        }, {"cityEn": "jingde", "cityZh": "旌德", "id": "CN101221403"}, {
            "cityEn": "ningguo",
            "cityZh": "宁国",
            "id": "CN101221404"
        }, {"cityEn": "jixi", "cityZh": "绩溪", "id": "CN101221405"}, {
            "cityEn": "guangde",
            "cityZh": "广德",
            "id": "CN101221406"
        }, {"cityEn": "langxi", "cityZh": "郎溪", "id": "CN101221407"}],
        "luan": [{"cityEn": "luan", "cityZh": "六安", "id": "CN101221501"}],
        "liuan": [{"cityEn": "huoqiu", "cityZh": "霍邱", "id": "CN101221502"}, {
            "cityEn": "shouxian",
            "cityZh": "寿县",
            "id": "CN101221503"
        }, {"cityEn": "jinzhai", "cityZh": "金寨", "id": "CN101221505"}, {
            "cityEn": "huoshan",
            "cityZh": "霍山",
            "id": "CN101221506"
        }, {"cityEn": "shucheng", "cityZh": "舒城", "id": "CN101221507"}],
        "chizhou": [{"cityEn": "chizhou", "cityZh": "池州", "id": "CN101221701"}, {
            "cityEn": "dongzhi",
            "cityZh": "东至",
            "id": "CN101221702"
        }, {"cityEn": "qingyang", "cityZh": "青阳", "id": "CN101221703"}, {
            "cityEn": "jiuhuashan",
            "cityZh": "九华山",
            "id": "CN101221704"
        }, {"cityEn": "shitai", "cityZh": "石台", "id": "CN101221705"}],
        "wuhan": [{"cityEn": "wuhan", "cityZh": "武汉", "id": "CN101200101"}, {
            "cityEn": "caidian",
            "cityZh": "蔡甸",
            "id": "CN101200102"
        }, {"cityEn": "huangpi", "cityZh": "黄陂", "id": "CN101200103"}, {
            "cityEn": "xinzhou",
            "cityZh": "新洲",
            "id": "CN101200104"
        }, {"cityEn": "jiangxia", "cityZh": "江夏", "id": "CN101200105"}, {
            "cityEn": "dongxihu",
            "cityZh": "东西湖",
            "id": "CN101200106"
        }],
        "xiangyang": [{"cityEn": "xiangyang", "cityZh": "襄阳", "id": "CN101200201"}, {
            "cityEn": "xiangzhou",
            "cityZh": "襄州",
            "id": "CN101200202"
        }, {"cityEn": "baokang", "cityZh": "保康", "id": "CN101200203"}, {
            "cityEn": "nanzhang",
            "cityZh": "南漳",
            "id": "CN101200204"
        }, {"cityEn": "yicheng", "cityZh": "宜城", "id": "CN101200205"}, {
            "cityEn": "laohekou",
            "cityZh": "老河口",
            "id": "CN101200206"
        }, {"cityEn": "gucheng", "cityZh": "谷城", "id": "CN101200207"}, {
            "cityEn": "zaoyang",
            "cityZh": "枣阳",
            "id": "CN101200208"
        }],
        "ezhou": [{"cityEn": "ezhou", "cityZh": "鄂州", "id": "CN101200301"}, {
            "cityEn": "liangzihu",
            "cityZh": "梁子湖",
            "id": "CN101200302"
        }],
        "xiaogan": [{"cityEn": "xiaogan", "cityZh": "孝感", "id": "CN101200401"}, {
            "cityEn": "anlu",
            "cityZh": "安陆",
            "id": "CN101200402"
        }, {"cityEn": "yunmeng", "cityZh": "云梦", "id": "CN101200403"}, {
            "cityEn": "dawu",
            "cityZh": "大悟",
            "id": "CN101200404"
        }, {"cityEn": "yingcheng", "cityZh": "应城", "id": "CN101200405"}, {
            "cityEn": "hanchuan",
            "cityZh": "汉川",
            "id": "CN101200406"
        }, {"cityEn": "xiaochang", "cityZh": "孝昌", "id": "CN101200407"}],
        "huanggang": [{"cityEn": "huanggang", "cityZh": "黄冈", "id": "CN101200501"}, {
            "cityEn": "hongan",
            "cityZh": "红安",
            "id": "CN101200502"
        }, {"cityEn": "macheng", "cityZh": "麻城", "id": "CN101200503"}, {
            "cityEn": "luotian",
            "cityZh": "罗田",
            "id": "CN101200504"
        }, {"cityEn": "yingshan", "cityZh": "英山", "id": "CN101200505"}, {
            "cityEn": "xishui",
            "cityZh": "浠水",
            "id": "CN101200506"
        }, {"cityEn": "qichun", "cityZh": "蕲春", "id": "CN101200507"}, {
            "cityEn": "huangmei",
            "cityZh": "黄梅",
            "id": "CN101200508"
        }, {"cityEn": "wuxue", "cityZh": "武穴", "id": "CN101200509"}, {
            "cityEn": "tuanfeng",
            "cityZh": "团风",
            "id": "CN101200510"
        }],
        "huangshi": [{"cityEn": "huangshi", "cityZh": "黄石", "id": "CN101200601"}, {
            "cityEn": "daye",
            "cityZh": "大冶",
            "id": "CN101200602"
        }, {"cityEn": "yangxin", "cityZh": "阳新", "id": "CN101200603"}, {
            "cityEn": "tieshan",
            "cityZh": "铁山",
            "id": "CN101200604"
        }, {"cityEn": "xialu", "cityZh": "下陆", "id": "CN101200605"}, {
            "cityEn": "xisaishan",
            "cityZh": "西塞山",
            "id": "CN101200606"
        }],
        "xianning": [{"cityEn": "xianning", "cityZh": "咸宁", "id": "CN101200701"}, {
            "cityEn": "chibi",
            "cityZh": "赤壁",
            "id": "CN101200702"
        }, {"cityEn": "jiayu", "cityZh": "嘉鱼", "id": "CN101200703"}, {
            "cityEn": "chongyang",
            "cityZh": "崇阳",
            "id": "CN101200704"
        }, {"cityEn": "tongcheng", "cityZh": "通城", "id": "CN101200705"}, {
            "cityEn": "tongshan",
            "cityZh": "通山",
            "id": "CN101200706"
        }],
        "jingzhou": [{"cityEn": "jingzhou", "cityZh": "荆州", "id": "CN101200801"}, {
            "cityEn": "jiangling",
            "cityZh": "江陵",
            "id": "CN101200802"
        }, {"cityEn": "gongan", "cityZh": "公安", "id": "CN101200803"}, {
            "cityEn": "shishou",
            "cityZh": "石首",
            "id": "CN101200804"
        }, {"cityEn": "jianli", "cityZh": "监利", "id": "CN101200805"}, {
            "cityEn": "honghu",
            "cityZh": "洪湖",
            "id": "CN101200806"
        }, {"cityEn": "songzi", "cityZh": "松滋", "id": "CN101200807"}, {
            "cityEn": "shashi",
            "cityZh": "沙市",
            "id": "CN101200808"
        }],
        "yichang": [{"cityEn": "yichang", "cityZh": "宜昌", "id": "CN101200901"}, {
            "cityEn": "yuanan",
            "cityZh": "远安",
            "id": "CN101200902"
        }, {"cityEn": "zigui", "cityZh": "秭归", "id": "CN101200903"}, {
            "cityEn": "xingshan",
            "cityZh": "兴山",
            "id": "CN101200904"
        }, {"cityEn": "wufeng", "cityZh": "五峰", "id": "CN101200906"}, {
            "cityEn": "dangyang",
            "cityZh": "当阳",
            "id": "CN101200907"
        }, {"cityEn": "changyang", "cityZh": "长阳", "id": "CN101200908"}, {
            "cityEn": "yidu",
            "cityZh": "宜都",
            "id": "CN101200909"
        }, {"cityEn": "zhijiang", "cityZh": "枝江", "id": "CN101200910"}, {
            "cityEn": "sanxia",
            "cityZh": "三峡",
            "id": "CN101200911"
        }, {"cityEn": "yiling", "cityZh": "夷陵", "id": "CN101200912"}],
        "enshi": [{"cityEn": "enshi", "cityZh": "恩施", "id": "CN101201001"}, {
            "cityEn": "lichuan",
            "cityZh": "利川",
            "id": "CN101201002"
        }, {"cityEn": "jianshi", "cityZh": "建始", "id": "CN101201003"}, {
            "cityEn": "xianfeng",
            "cityZh": "咸丰",
            "id": "CN101201004"
        }, {"cityEn": "xuanen", "cityZh": "宣恩", "id": "CN101201005"}, {
            "cityEn": "hefeng",
            "cityZh": "鹤峰",
            "id": "CN101201006"
        }, {"cityEn": "laifeng", "cityZh": "来凤", "id": "CN101201007"}, {
            "cityEn": "badong",
            "cityZh": "巴东",
            "id": "CN101201008"
        }],
        "shiyan": [{"cityEn": "shiyan", "cityZh": "十堰", "id": "CN101201101"}, {
            "cityEn": "zhuxi",
            "cityZh": "竹溪",
            "id": "CN101201102"
        }, {"cityEn": "yunxi", "cityZh": "郧西", "id": "CN101201103"}, {
            "cityEn": "yunyang",
            "cityZh": "郧阳",
            "id": "CN101201104"
        }, {"cityEn": "zhushan", "cityZh": "竹山", "id": "CN101201105"}, {
            "cityEn": "fangxian",
            "cityZh": "房县",
            "id": "CN101201106"
        }, {"cityEn": "danjiangkou", "cityZh": "丹江口", "id": "CN101201107"}, {
            "cityEn": "maojian",
            "cityZh": "茅箭",
            "id": "CN101201108"
        }, {"cityEn": "zhangwan", "cityZh": "张湾", "id": "CN101201109"}],
        "shennongjia": [{"cityEn": "shennongjia", "cityZh": "神农架", "id": "CN101201201"}],
        "suizhou": [{"cityEn": "suizhou", "cityZh": "随州", "id": "CN101201301"}, {
            "cityEn": "guangshui",
            "cityZh": "广水",
            "id": "CN101201302"
        }],
        "jingmen": [{"cityEn": "jingmen", "cityZh": "荆门", "id": "CN101201401"}, {
            "cityEn": "zhongxiang",
            "cityZh": "钟祥",
            "id": "CN101201402"
        }, {"cityEn": "jingshan", "cityZh": "京山", "id": "CN101201403"}, {
            "cityEn": "duodao",
            "cityZh": "掇刀",
            "id": "CN101201404"
        }, {"cityEn": "shayang", "cityZh": "沙洋", "id": "CN101201405"}],
        "tianmen": [{"cityEn": "tianmen", "cityZh": "天门", "id": "CN101201501"}],
        "xiantao": [{"cityEn": "xiantao", "cityZh": "仙桃", "id": "CN101201601"}],
        "qianjiang": [{"cityEn": "qianjiang", "cityZh": "潜江", "id": "CN101201701"}],
        "changsha": [{"cityEn": "changsha", "cityZh": "长沙", "id": "CN101250101"}, {
            "cityEn": "ningxiang",
            "cityZh": "宁乡",
            "id": "CN101250102"
        }, {"cityEn": "liuyang", "cityZh": "浏阳", "id": "CN101250103"}, {
            "cityEn": "xiangjiangxinqu",
            "cityZh": "湘江新区",
            "id": "CN101250104"
        }, {"cityEn": "wangcheng", "cityZh": "望城", "id": "CN101250105"}, {
            "cityEn": "changshaxian",
            "cityZh": "长沙县",
            "id": "CN101250106"
        }],
        "xiangtan": [{"cityEn": "xiangtan", "cityZh": "湘潭", "id": "CN101250201"}, {
            "cityEn": "shaoshan",
            "cityZh": "韶山",
            "id": "CN101250202"
        }, {"cityEn": "xiangxiang", "cityZh": "湘乡", "id": "CN101250203"}],
        "zhuzhou": [{"cityEn": "zhuzhou", "cityZh": "株洲", "id": "CN101250301"}, {
            "cityEn": "youxian",
            "cityZh": "攸县",
            "id": "CN101250302"
        }, {"cityEn": "liling", "cityZh": "醴陵", "id": "CN101250303"}, {
            "cityEn": "chaling",
            "cityZh": "茶陵",
            "id": "CN101250305"
        }, {"cityEn": "yanling", "cityZh": "炎陵", "id": "CN101250306"}],
        "hengyang": [{"cityEn": "hengyang", "cityZh": "衡阳", "id": "CN101250401"}, {
            "cityEn": "hengshan",
            "cityZh": "衡山",
            "id": "CN101250402"
        }, {"cityEn": "hengdong", "cityZh": "衡东", "id": "CN101250403"}, {
            "cityEn": "qidong",
            "cityZh": "祁东",
            "id": "CN101250404"
        }, {"cityEn": "hengyangxian", "cityZh": "衡阳县", "id": "CN101250405"}, {
            "cityEn": "changning",
            "cityZh": "常宁",
            "id": "CN101250406"
        }, {"cityEn": "hengnan", "cityZh": "衡南", "id": "CN101250407"}, {
            "cityEn": "leiyang",
            "cityZh": "耒阳",
            "id": "CN101250408"
        }, {"cityEn": "nanyue", "cityZh": "南岳", "id": "CN101250409"}],
        "chenzhou": [{"cityEn": "chenzhou", "cityZh": "郴州", "id": "CN101250501"}, {
            "cityEn": "guiyang",
            "cityZh": "桂阳",
            "id": "CN101250502"
        }, {"cityEn": "jiahe", "cityZh": "嘉禾", "id": "CN101250503"}, {
            "cityEn": "yizhang",
            "cityZh": "宜章",
            "id": "CN101250504"
        }, {"cityEn": "linwu", "cityZh": "临武", "id": "CN101250505"}, {
            "cityEn": "zixing",
            "cityZh": "资兴",
            "id": "CN101250507"
        }, {"cityEn": "rucheng", "cityZh": "汝城", "id": "CN101250508"}, {
            "cityEn": "anren",
            "cityZh": "安仁",
            "id": "CN101250509"
        }, {"cityEn": "yongxing", "cityZh": "永兴", "id": "CN101250510"}, {
            "cityEn": "guidong",
            "cityZh": "桂东",
            "id": "CN101250511"
        }, {"cityEn": "suxian", "cityZh": "苏仙", "id": "CN101250512"}],
        "changde": [{"cityEn": "changde", "cityZh": "常德", "id": "CN101250601"}, {
            "cityEn": "anxiang",
            "cityZh": "安乡",
            "id": "CN101250602"
        }, {"cityEn": "taoyuan", "cityZh": "桃源", "id": "CN101250603"}, {
            "cityEn": "hanshou",
            "cityZh": "汉寿",
            "id": "CN101250604"
        }, {"cityEn": "lixian", "cityZh": "澧县", "id": "CN101250605"}, {
            "cityEn": "linli",
            "cityZh": "临澧",
            "id": "CN101250606"
        }, {"cityEn": "shimen", "cityZh": "石门", "id": "CN101250607"}, {
            "cityEn": "jinshi",
            "cityZh": "津市",
            "id": "CN101250608"
        }],
        "yiyang": [{"cityEn": "yiyang", "cityZh": "益阳", "id": "CN101250700"}, {
            "cityEn": "heshanqu",
            "cityZh": "赫山区",
            "id": "CN101250701"
        }, {"cityEn": "nanxian", "cityZh": "南县", "id": "CN101250702"}, {
            "cityEn": "taojiang",
            "cityZh": "桃江",
            "id": "CN101250703"
        }, {"cityEn": "anhua", "cityZh": "安化", "id": "CN101250704"}, {
            "cityEn": "yuanjiang",
            "cityZh": "沅江",
            "id": "CN101250705"
        }],
        "loudi": [{"cityEn": "loudi", "cityZh": "娄底", "id": "CN101250801"}, {
            "cityEn": "shuangfeng",
            "cityZh": "双峰",
            "id": "CN101250802"
        }, {"cityEn": "lengshuijiang", "cityZh": "冷水江", "id": "CN101250803"}, {
            "cityEn": "xinhua",
            "cityZh": "新化",
            "id": "CN101250805"
        }, {"cityEn": "lianyuan", "cityZh": "涟源", "id": "CN101250806"}],
        "shaoyang": [{"cityEn": "shaoyang", "cityZh": "邵阳", "id": "CN101250901"}, {
            "cityEn": "longhui",
            "cityZh": "隆回",
            "id": "CN101250902"
        }, {"cityEn": "dongkou", "cityZh": "洞口", "id": "CN101250903"}, {
            "cityEn": "xinshao",
            "cityZh": "新邵",
            "id": "CN101250904"
        }, {"cityEn": "shaodong", "cityZh": "邵东", "id": "CN101250905"}, {
            "cityEn": "suining",
            "cityZh": "绥宁",
            "id": "CN101250906"
        }, {"cityEn": "xinning", "cityZh": "新宁", "id": "CN101250907"}, {
            "cityEn": "wugang",
            "cityZh": "武冈",
            "id": "CN101250908"
        }, {"cityEn": "chengbu", "cityZh": "城步", "id": "CN101250909"}, {
            "cityEn": "shaoyangxian",
            "cityZh": "邵阳县",
            "id": "CN101250910"
        }],
        "yueyang": [{"cityEn": "yueyang", "cityZh": "岳阳", "id": "CN101251001"}, {
            "cityEn": "huarong",
            "cityZh": "华容",
            "id": "CN101251002"
        }, {"cityEn": "xiangyin", "cityZh": "湘阴", "id": "CN101251003"}, {
            "cityEn": "miluo",
            "cityZh": "汨罗",
            "id": "CN101251004"
        }, {"cityEn": "pingjiang", "cityZh": "平江", "id": "CN101251005"}, {
            "cityEn": "linxiang",
            "cityZh": "临湘",
            "id": "CN101251006"
        }],
        "zhangjiajie": [{"cityEn": "zhangjiajie", "cityZh": "张家界", "id": "CN101251101"}, {
            "cityEn": "sangzhi",
            "cityZh": "桑植",
            "id": "CN101251102"
        }, {"cityEn": "cili", "cityZh": "慈利", "id": "CN101251103"}, {
            "cityEn": "wulingyuan",
            "cityZh": "武陵源",
            "id": "CN101251104"
        }],
        "huaihua": [{"cityEn": "huaihua", "cityZh": "怀化", "id": "CN101251201"}, {
            "cityEn": "yuanling",
            "cityZh": "沅陵",
            "id": "CN101251203"
        }, {"cityEn": "chenxi", "cityZh": "辰溪", "id": "CN101251204"}, {
            "cityEn": "jingzhou",
            "cityZh": "靖州",
            "id": "CN101251205"
        }, {"cityEn": "huitong", "cityZh": "会同", "id": "CN101251206"}, {
            "cityEn": "tongdao",
            "cityZh": "通道",
            "id": "CN101251207"
        }, {"cityEn": "mayang", "cityZh": "麻阳", "id": "CN101251208"}, {
            "cityEn": "xinhuang",
            "cityZh": "新晃",
            "id": "CN101251209"
        }, {"cityEn": "zhijiang", "cityZh": "芷江", "id": "CN101251210"}, {
            "cityEn": "xupu",
            "cityZh": "溆浦",
            "id": "CN101251211"
        }, {"cityEn": "zhongfang", "cityZh": "中方", "id": "CN101251212"}, {
            "cityEn": "hongjiang",
            "cityZh": "洪江",
            "id": "CN101251213"
        }],
        "yongzhou": [{"cityEn": "yongzhou", "cityZh": "永州", "id": "CN101251401"}, {
            "cityEn": "qiyang",
            "cityZh": "祁阳",
            "id": "CN101251402"
        }, {"cityEn": "dongan", "cityZh": "东安", "id": "CN101251403"}, {
            "cityEn": "shuangpai",
            "cityZh": "双牌",
            "id": "CN101251404"
        }, {"cityEn": "daoxian", "cityZh": "道县", "id": "CN101251405"}, {
            "cityEn": "ningyuan",
            "cityZh": "宁远",
            "id": "CN101251406"
        }, {"cityEn": "jiangyong", "cityZh": "江永", "id": "CN101251407"}, {
            "cityEn": "lanshan",
            "cityZh": "蓝山",
            "id": "CN101251408"
        }, {"cityEn": "xintian", "cityZh": "新田", "id": "CN101251409"}, {
            "cityEn": "jianghua",
            "cityZh": "江华",
            "id": "CN101251410"
        }, {"cityEn": "lengshuitan", "cityZh": "冷水滩", "id": "CN101251411"}],
        "xiangxi": [{"cityEn": "jishou", "cityZh": "吉首", "id": "CN101251501"}, {
            "cityEn": "baojing",
            "cityZh": "保靖",
            "id": "CN101251502"
        }, {"cityEn": "yongshun", "cityZh": "永顺", "id": "CN101251503"}, {
            "cityEn": "guzhang",
            "cityZh": "古丈",
            "id": "CN101251504"
        }, {"cityEn": "fenghuang", "cityZh": "凤凰", "id": "CN101251505"}, {
            "cityEn": "luxi",
            "cityZh": "泸溪",
            "id": "CN101251506"
        }, {"cityEn": "longshan", "cityZh": "龙山", "id": "CN101251507"}, {
            "cityEn": "huayuan",
            "cityZh": "花垣",
            "id": "CN101251508"
        }],
        "guangzhou": [{"cityEn": "guangzhou", "cityZh": "广州", "id": "CN101280101"}, {
            "cityEn": "panyu",
            "cityZh": "番禺",
            "id": "CN101280102"
        }, {"cityEn": "conghua", "cityZh": "从化", "id": "CN101280103"}, {
            "cityEn": "zengcheng",
            "cityZh": "增城",
            "id": "CN101280104"
        }, {"cityEn": "huadu", "cityZh": "花都", "id": "CN101280105"}],
        "shaoguan": [{"cityEn": "shaoguan", "cityZh": "韶关", "id": "CN101280201"}, {
            "cityEn": "ruyuan",
            "cityZh": "乳源",
            "id": "CN101280202"
        }, {"cityEn": "shixing", "cityZh": "始兴", "id": "CN101280203"}, {
            "cityEn": "wengyuan",
            "cityZh": "翁源",
            "id": "CN101280204"
        }, {"cityEn": "lechang", "cityZh": "乐昌", "id": "CN101280205"}, {
            "cityEn": "renhua",
            "cityZh": "仁化",
            "id": "CN101280206"
        }, {"cityEn": "nanxiong", "cityZh": "南雄", "id": "CN101280207"}, {
            "cityEn": "xinfeng",
            "cityZh": "新丰",
            "id": "CN101280208"
        }, {"cityEn": "qujiang", "cityZh": "曲江", "id": "CN101280209"}, {
            "cityEn": "zhenjiang",
            "cityZh": "浈江",
            "id": "CN101280210"
        }, {"cityEn": "wujiang", "cityZh": "武江", "id": "CN101280211"}],
        "huizhou": [{"cityEn": "huizhou", "cityZh": "惠州", "id": "CN101280301"}, {
            "cityEn": "boluo",
            "cityZh": "博罗",
            "id": "CN101280302"
        }, {"cityEn": "huiyang", "cityZh": "惠阳", "id": "CN101280303"}, {
            "cityEn": "huidong",
            "cityZh": "惠东",
            "id": "CN101280304"
        }, {"cityEn": "longmen", "cityZh": "龙门", "id": "CN101280305"}],
        "meizhou": [{"cityEn": "meizhou", "cityZh": "梅州", "id": "CN101280401"}, {
            "cityEn": "xingning",
            "cityZh": "兴宁",
            "id": "CN101280402"
        }, {"cityEn": "jiaoling", "cityZh": "蕉岭", "id": "CN101280403"}, {
            "cityEn": "dabu",
            "cityZh": "大埔",
            "id": "CN101280404"
        }, {"cityEn": "fengshun", "cityZh": "丰顺", "id": "CN101280406"}, {
            "cityEn": "pingyuan",
            "cityZh": "平远",
            "id": "CN101280407"
        }, {"cityEn": "wuhua", "cityZh": "五华", "id": "CN101280408"}, {
            "cityEn": "meixian",
            "cityZh": "梅县",
            "id": "CN101280409"
        }],
        "shantou": [{"cityEn": "shantou", "cityZh": "汕头", "id": "CN101280501"}, {
            "cityEn": "chaoyang",
            "cityZh": "潮阳",
            "id": "CN101280502"
        }, {"cityEn": "chenghai", "cityZh": "澄海", "id": "CN101280503"}, {
            "cityEn": "nanao",
            "cityZh": "南澳",
            "id": "CN101280504"
        }],
        "shenzhen": [{"cityEn": "shenzhen", "cityZh": "深圳", "id": "CN101280601"}],
        "zhuhai": [{"cityEn": "zhuhai", "cityZh": "珠海", "id": "CN101280701"}, {
            "cityEn": "doumen",
            "cityZh": "斗门",
            "id": "CN101280702"
        }, {"cityEn": "jinwan", "cityZh": "金湾", "id": "CN101280703"}],
        "foshan": [{"cityEn": "foshan", "cityZh": "佛山", "id": "CN101280800"}, {
            "cityEn": "shunde",
            "cityZh": "顺德",
            "id": "CN101280801"
        }, {"cityEn": "sanshui", "cityZh": "三水", "id": "CN101280802"}, {
            "cityEn": "nanhai",
            "cityZh": "南海",
            "id": "CN101280803"
        }, {"cityEn": "gaoming", "cityZh": "高明", "id": "CN101280804"}],
        "zhaoqing": [{"cityEn": "zhaoqing", "cityZh": "肇庆", "id": "CN101280901"}, {
            "cityEn": "guangning",
            "cityZh": "广宁",
            "id": "CN101280902"
        }, {"cityEn": "sihui", "cityZh": "四会", "id": "CN101280903"}, {
            "cityEn": "deqing",
            "cityZh": "德庆",
            "id": "CN101280905"
        }, {"cityEn": "huaiji", "cityZh": "怀集", "id": "CN101280906"}, {
            "cityEn": "fengkai",
            "cityZh": "封开",
            "id": "CN101280907"
        }, {"cityEn": "gaoyao", "cityZh": "高要", "id": "CN101280908"}],
        "zhanjiang": [{"cityEn": "zhanjiang", "cityZh": "湛江", "id": "CN101281001"}, {
            "cityEn": "wuchuan",
            "cityZh": "吴川",
            "id": "CN101281002"
        }, {"cityEn": "leizhou", "cityZh": "雷州", "id": "CN101281003"}, {
            "cityEn": "xuwen",
            "cityZh": "徐闻",
            "id": "CN101281004"
        }, {"cityEn": "lianjiang", "cityZh": "廉江", "id": "CN101281005"}, {
            "cityEn": "chikan",
            "cityZh": "赤坎",
            "id": "CN101281006"
        }, {"cityEn": "suixi", "cityZh": "遂溪", "id": "CN101281007"}, {
            "cityEn": "potou",
            "cityZh": "坡头",
            "id": "CN101281008"
        }, {"cityEn": "xiashan", "cityZh": "霞山", "id": "CN101281009"}, {
            "cityEn": "mazhang",
            "cityZh": "麻章",
            "id": "CN101281010"
        }],
        "jiangmen": [{"cityEn": "jiangmen", "cityZh": "江门", "id": "CN101281101"}, {
            "cityEn": "kaiping",
            "cityZh": "开平",
            "id": "CN101281103"
        }, {"cityEn": "xinhui", "cityZh": "新会", "id": "CN101281104"}, {
            "cityEn": "enping",
            "cityZh": "恩平",
            "id": "CN101281105"
        }, {"cityEn": "taishan", "cityZh": "台山", "id": "CN101281106"}, {
            "cityEn": "pengjiang",
            "cityZh": "蓬江",
            "id": "CN101281107"
        }, {"cityEn": "heshan", "cityZh": "鹤山", "id": "CN101281108"}, {
            "cityEn": "jianghai",
            "cityZh": "江海",
            "id": "CN101281109"
        }],
        "heyuan": [{"cityEn": "heyuan", "cityZh": "河源", "id": "CN101281201"}, {
            "cityEn": "zijin",
            "cityZh": "紫金",
            "id": "CN101281202"
        }, {"cityEn": "lianping", "cityZh": "连平", "id": "CN101281203"}, {
            "cityEn": "heping",
            "cityZh": "和平",
            "id": "CN101281204"
        }, {"cityEn": "longchuan", "cityZh": "龙川", "id": "CN101281205"}, {
            "cityEn": "dongyuan",
            "cityZh": "东源",
            "id": "CN101281206"
        }],
        "qingyuan": [{"cityEn": "qingyuan", "cityZh": "清远", "id": "CN101281301"}, {
            "cityEn": "liannan",
            "cityZh": "连南",
            "id": "CN101281302"
        }, {"cityEn": "lianzhou", "cityZh": "连州", "id": "CN101281303"}, {
            "cityEn": "lianshan",
            "cityZh": "连山",
            "id": "CN101281304"
        }, {"cityEn": "yangshan", "cityZh": "阳山", "id": "CN101281305"}, {
            "cityEn": "fogang",
            "cityZh": "佛冈",
            "id": "CN101281306"
        }, {"cityEn": "yingde", "cityZh": "英德", "id": "CN101281307"}, {
            "cityEn": "qingxin",
            "cityZh": "清新",
            "id": "CN101281308"
        }],
        "yunfu": [{"cityEn": "yunfu", "cityZh": "云浮", "id": "CN101281401"}, {
            "cityEn": "luoding",
            "cityZh": "罗定",
            "id": "CN101281402"
        }, {"cityEn": "xinxing", "cityZh": "新兴", "id": "CN101281403"}, {
            "cityEn": "yunan",
            "cityZh": "郁南",
            "id": "CN101281404"
        }, {"cityEn": "yunan", "cityZh": "云安", "id": "CN101281406"}],
        "chaozhou": [{"cityEn": "chaozhou", "cityZh": "潮州", "id": "CN101281501"}, {
            "cityEn": "raoping",
            "cityZh": "饶平",
            "id": "CN101281502"
        }, {"cityEn": "chaoan", "cityZh": "潮安", "id": "CN101281503"}],
        "dongguan": [{"cityEn": "dongguan", "cityZh": "东莞", "id": "CN101281601"}],
        "zhongshan": [{"cityEn": "zhongshan", "cityZh": "中山", "id": "CN101281701"}],
        "yangjiang": [{"cityEn": "yangjiang", "cityZh": "阳江", "id": "CN101281801"}, {
            "cityEn": "yangchun",
            "cityZh": "阳春",
            "id": "CN101281802"
        }, {"cityEn": "yangdong", "cityZh": "阳东", "id": "CN101281803"}, {
            "cityEn": "yangxi",
            "cityZh": "阳西",
            "id": "CN101281804"
        }],
        "jieyang": [{"cityEn": "jieyang", "cityZh": "揭阳", "id": "CN101281901"}, {
            "cityEn": "jiexi",
            "cityZh": "揭西",
            "id": "CN101281902"
        }, {"cityEn": "puning", "cityZh": "普宁", "id": "CN101281903"}, {
            "cityEn": "huilai",
            "cityZh": "惠来",
            "id": "CN101281904"
        }, {"cityEn": "jiedong", "cityZh": "揭东", "id": "CN101281905"}],
        "maoming": [{"cityEn": "maoming", "cityZh": "茂名", "id": "CN101282001"}, {
            "cityEn": "gaozhou",
            "cityZh": "高州",
            "id": "CN101282002"
        }, {"cityEn": "huazhou", "cityZh": "化州", "id": "CN101282003"}, {
            "cityEn": "dianbai",
            "cityZh": "电白",
            "id": "CN101282004"
        }, {"cityEn": "xinyi", "cityZh": "信宜", "id": "CN101282005"}, {
            "cityEn": "maogang",
            "cityZh": "茂港",
            "id": "CN101282006"
        }],
        "shanwei": [{"cityEn": "shanwei", "cityZh": "汕尾", "id": "CN101282101"}, {
            "cityEn": "haifeng",
            "cityZh": "海丰",
            "id": "CN101282102"
        }, {"cityEn": "lufeng", "cityZh": "陆丰", "id": "CN101282103"}, {
            "cityEn": "luhe",
            "cityZh": "陆河",
            "id": "CN101282104"
        }],
        "nanning": [{"cityEn": "nanning", "cityZh": "南宁", "id": "CN101300101"}, {
            "cityEn": "yongning",
            "cityZh": "邕宁",
            "id": "CN101300103"
        }, {"cityEn": "hengxian", "cityZh": "横县", "id": "CN101300104"}, {
            "cityEn": "longan",
            "cityZh": "隆安",
            "id": "CN101300105"
        }, {"cityEn": "mashan", "cityZh": "马山", "id": "CN101300106"}, {
            "cityEn": "shanglin",
            "cityZh": "上林",
            "id": "CN101300107"
        }, {"cityEn": "wuming", "cityZh": "武鸣", "id": "CN101300108"}, {
            "cityEn": "binyang",
            "cityZh": "宾阳",
            "id": "CN101300109"
        }],
        "chongzuo": [{"cityEn": "chongzuo", "cityZh": "崇左", "id": "CN101300201"}, {
            "cityEn": "tiandeng",
            "cityZh": "天等",
            "id": "CN101300202"
        }, {"cityEn": "longzhou", "cityZh": "龙州", "id": "CN101300203"}, {
            "cityEn": "pingxiang",
            "cityZh": "凭祥",
            "id": "CN101300204"
        }, {"cityEn": "daxin", "cityZh": "大新", "id": "CN101300205"}, {
            "cityEn": "fusui",
            "cityZh": "扶绥",
            "id": "CN101300206"
        }, {"cityEn": "ningming", "cityZh": "宁明", "id": "CN101300207"}],
        "liuzhou": [{"cityEn": "liuzhou", "cityZh": "柳州", "id": "CN101300301"}, {
            "cityEn": "liucheng",
            "cityZh": "柳城",
            "id": "CN101300302"
        }, {"cityEn": "luzhai", "cityZh": "鹿寨", "id": "CN101300304"}, {
            "cityEn": "liujiang",
            "cityZh": "柳江",
            "id": "CN101300305"
        }, {"cityEn": "rongan", "cityZh": "融安", "id": "CN101300306"}, {
            "cityEn": "rongshui",
            "cityZh": "融水",
            "id": "CN101300307"
        }, {"cityEn": "sanjiang", "cityZh": "三江", "id": "CN101300308"}],
        "laibin": [{"cityEn": "laibin", "cityZh": "来宾", "id": "CN101300401"}, {
            "cityEn": "xicheng",
            "cityZh": "忻城",
            "id": "CN101300402"
        }, {"cityEn": "jinxiu", "cityZh": "金秀", "id": "CN101300403"}, {
            "cityEn": "xiangzhou",
            "cityZh": "象州",
            "id": "CN101300404"
        }, {"cityEn": "wuxuan", "cityZh": "武宣", "id": "CN101300405"}, {
            "cityEn": "heshan",
            "cityZh": "合山",
            "id": "CN101300406"
        }],
        "guilin": [{"cityEn": "guilin", "cityZh": "桂林", "id": "CN101300501"}, {
            "cityEn": "longsheng",
            "cityZh": "龙胜",
            "id": "CN101300503"
        }, {"cityEn": "yongfu", "cityZh": "永福", "id": "CN101300504"}, {
            "cityEn": "lingui",
            "cityZh": "临桂",
            "id": "CN101300505"
        }, {"cityEn": "xingan", "cityZh": "兴安", "id": "CN101300506"}, {
            "cityEn": "lingchuan",
            "cityZh": "灵川",
            "id": "CN101300507"
        }, {"cityEn": "quanzhou", "cityZh": "全州", "id": "CN101300508"}, {
            "cityEn": "guanyang",
            "cityZh": "灌阳",
            "id": "CN101300509"
        }, {"cityEn": "yangshuo", "cityZh": "阳朔", "id": "CN101300510"}, {
            "cityEn": "gongcheng",
            "cityZh": "恭城",
            "id": "CN101300511"
        }, {"cityEn": "pingle", "cityZh": "平乐", "id": "CN101300512"}, {
            "cityEn": "lipu",
            "cityZh": "荔浦",
            "id": "CN101300513"
        }, {"cityEn": "ziyuan", "cityZh": "资源", "id": "CN101300514"}],
        "wuzhou": [{"cityEn": "wuzhou", "cityZh": "梧州", "id": "CN101300601"}, {
            "cityEn": "tengxian",
            "cityZh": "藤县",
            "id": "CN101300602"
        }, {"cityEn": "cangwu", "cityZh": "苍梧", "id": "CN101300604"}, {
            "cityEn": "mengshan",
            "cityZh": "蒙山",
            "id": "CN101300605"
        }, {"cityEn": "cenxi", "cityZh": "岑溪", "id": "CN101300606"}],
        "hezhou": [{"cityEn": "hezhou", "cityZh": "贺州", "id": "CN101300701"}, {
            "cityEn": "zhaoping",
            "cityZh": "昭平",
            "id": "CN101300702"
        }, {"cityEn": "fuchuan", "cityZh": "富川", "id": "CN101300703"}, {
            "cityEn": "zhongshan",
            "cityZh": "钟山",
            "id": "CN101300704"
        }],
        "guigang": [{"cityEn": "guigang", "cityZh": "贵港", "id": "CN101300801"}, {
            "cityEn": "guiping",
            "cityZh": "桂平",
            "id": "CN101300802"
        }, {"cityEn": "pingnan", "cityZh": "平南", "id": "CN101300803"}],
        "yulin": [{"cityEn": "yulin", "cityZh": "玉林", "id": "CN101300901"}, {
            "cityEn": "bobai",
            "cityZh": "博白",
            "id": "CN101300902"
        }, {"cityEn": "beiliu", "cityZh": "北流", "id": "CN101300903"}, {
            "cityEn": "rongxian",
            "cityZh": "容县",
            "id": "CN101300904"
        }, {"cityEn": "luchuan", "cityZh": "陆川", "id": "CN101300905"}, {
            "cityEn": "xingye",
            "cityZh": "兴业",
            "id": "CN101300906"
        }, {"cityEn": "yulin", "cityZh": "榆林", "id": "CN101110401"}, {
            "cityEn": "fugu",
            "cityZh": "府谷",
            "id": "CN101110402"
        }, {"cityEn": "shenmu", "cityZh": "神木", "id": "CN101110403"}, {
            "cityEn": "jiaxian",
            "cityZh": "佳县",
            "id": "CN101110404"
        }, {"cityEn": "dingbian", "cityZh": "定边", "id": "CN101110405"}, {
            "cityEn": "jingbian",
            "cityZh": "靖边",
            "id": "CN101110406"
        }, {"cityEn": "hengshan", "cityZh": "横山", "id": "CN101110407"}, {
            "cityEn": "mizhi",
            "cityZh": "米脂",
            "id": "CN101110408"
        }, {"cityEn": "zizhou", "cityZh": "子洲", "id": "CN101110409"}, {
            "cityEn": "suide",
            "cityZh": "绥德",
            "id": "CN101110410"
        }, {"cityEn": "wubu", "cityZh": "吴堡", "id": "CN101110411"}, {
            "cityEn": "qingjian",
            "cityZh": "清涧",
            "id": "CN101110412"
        }, {"cityEn": "yuyang", "cityZh": "榆阳", "id": "CN101110413"}],
        "baise": [{"cityEn": "baise", "cityZh": "百色", "id": "CN101301001"}, {
            "cityEn": "napo",
            "cityZh": "那坡",
            "id": "CN101301002"
        }, {"cityEn": "tianyang", "cityZh": "田阳", "id": "CN101301003"}, {
            "cityEn": "debao",
            "cityZh": "德保",
            "id": "CN101301004"
        }, {"cityEn": "jingxi", "cityZh": "靖西", "id": "CN101301005"}, {
            "cityEn": "tiandong",
            "cityZh": "田东",
            "id": "CN101301006"
        }, {"cityEn": "pingguo", "cityZh": "平果", "id": "CN101301007"}, {
            "cityEn": "longlin",
            "cityZh": "隆林",
            "id": "CN101301008"
        }, {"cityEn": "xilin", "cityZh": "西林", "id": "CN101301009"}, {
            "cityEn": "leye",
            "cityZh": "乐业",
            "id": "CN101301010"
        }, {"cityEn": "lingyun", "cityZh": "凌云", "id": "CN101301011"}, {
            "cityEn": "tianlin",
            "cityZh": "田林",
            "id": "CN101301012"
        }],
        "qinzhou": [{"cityEn": "qinzhou", "cityZh": "钦州", "id": "CN101301101"}, {
            "cityEn": "pubei",
            "cityZh": "浦北",
            "id": "CN101301102"
        }, {"cityEn": "lingshan", "cityZh": "灵山", "id": "CN101301103"}],
        "hechi": [{"cityEn": "hechi", "cityZh": "河池", "id": "CN101301201"}, {
            "cityEn": "tiane",
            "cityZh": "天峨",
            "id": "CN101301202"
        }, {"cityEn": "donglan", "cityZh": "东兰", "id": "CN101301203"}, {
            "cityEn": "bama",
            "cityZh": "巴马",
            "id": "CN101301204"
        }, {"cityEn": "huanjiang", "cityZh": "环江", "id": "CN101301205"}, {
            "cityEn": "luocheng",
            "cityZh": "罗城",
            "id": "CN101301206"
        }, {"cityEn": "yizhou", "cityZh": "宜州", "id": "CN101301207"}, {
            "cityEn": "fengshan",
            "cityZh": "凤山",
            "id": "CN101301208"
        }, {"cityEn": "nandan", "cityZh": "南丹", "id": "CN101301209"}, {
            "cityEn": "andu",
            "cityZh": "都安",
            "id": "CN101301210"
        }, {"cityEn": "dahua", "cityZh": "大化", "id": "CN101301211"}],
        "beihai": [{"cityEn": "beihai", "cityZh": "北海", "id": "CN101301301"}, {
            "cityEn": "hepu",
            "cityZh": "合浦",
            "id": "CN101301302"
        }, {"cityEn": "weizhoudao", "cityZh": "涠洲岛", "id": "CN101301303"}],
        "fangchenggang": [{"cityEn": "fangchenggang", "cityZh": "防城港", "id": "CN101301401"}, {
            "cityEn": "shangsi",
            "cityZh": "上思",
            "id": "CN101301402"
        }, {"cityEn": "dongxing", "cityZh": "东兴", "id": "CN101301403"}, {
            "cityEn": "fangcheng",
            "cityZh": "防城",
            "id": "CN101301405"
        }],
        "haikou": [{"cityEn": "haikou", "cityZh": "海口", "id": "CN101310101"}],
        "sanya": [{"cityEn": "sanya", "cityZh": "三亚", "id": "CN101310201"}],
        "dongfang": [{"cityEn": "dongfang", "cityZh": "东方", "id": "CN101310202"}],
        "lingao": [{"cityEn": "lingao", "cityZh": "临高", "id": "CN101310203"}],
        "chengmai": [{"cityEn": "chengmai", "cityZh": "澄迈", "id": "CN101310204"}],
        "zhanzhou": [{"cityEn": "danzhou", "cityZh": "儋州", "id": "CN101310205"}],
        "changjiang": [{"cityEn": "changjiang", "cityZh": "昌江", "id": "CN101310206"}],
        "baisha": [{"cityEn": "baisha", "cityZh": "白沙", "id": "CN101310207"}],
        "qiongzhong": [{"cityEn": "qiongzhong", "cityZh": "琼中", "id": "CN101310208"}],
        "dingan": [{"cityEn": "dingan", "cityZh": "定安", "id": "CN101310209"}],
        "tunchang": [{"cityEn": "tunchang", "cityZh": "屯昌", "id": "CN101310210"}],
        "qionghai": [{"cityEn": "qionghai", "cityZh": "琼海", "id": "CN101310211"}],
        "wenchang": [{"cityEn": "wenchang", "cityZh": "文昌", "id": "CN101310212"}],
        "baoting": [{"cityEn": "baoting", "cityZh": "保亭", "id": "CN101310214"}],
        "wanning": [{"cityEn": "wanning", "cityZh": "万宁", "id": "CN101310215"}],
        "lingshui": [{"cityEn": "lingshui", "cityZh": "陵水", "id": "CN101310216"}],
        "xisha": [{"cityEn": "xisha", "cityZh": "西沙", "id": "CN101310217"}],
        "nansha": [{"cityEn": "nansha", "cityZh": "南沙", "id": "CN101310220"}],
        "ledong": [{"cityEn": "ledong", "cityZh": "乐东", "id": "CN101310221"}],
        "wuzhishan": [{"cityEn": "wuzhishan", "cityZh": "五指山", "id": "CN101310222"}],
        "zhongsha": [{"cityEn": "zhongsha", "cityZh": "中沙", "id": "CN101310224"}],
        "guiyang": [{"cityEn": "guiyang", "cityZh": "贵阳", "id": "CN101260101"}, {
            "cityEn": "baiyun",
            "cityZh": "白云",
            "id": "CN101260102"
        }, {"cityEn": "huaxi", "cityZh": "花溪", "id": "CN101260103"}, {
            "cityEn": "wudang",
            "cityZh": "乌当",
            "id": "CN101260104"
        }, {"cityEn": "xifeng", "cityZh": "息烽", "id": "CN101260105"}, {
            "cityEn": "kaiyang",
            "cityZh": "开阳",
            "id": "CN101260106"
        }, {"cityEn": "xiuwen", "cityZh": "修文", "id": "CN101260107"}, {
            "cityEn": "qingzhen",
            "cityZh": "清镇",
            "id": "CN101260108"
        }, {"cityEn": "xiaohe", "cityZh": "小河", "id": "CN101260109"}, {
            "cityEn": "yunyan",
            "cityZh": "云岩",
            "id": "CN101260110"
        }, {"cityEn": "nanming", "cityZh": "南明", "id": "CN101260111"}],
        "zunyi": [{"cityEn": "zunyi", "cityZh": "遵义", "id": "CN101260201"}, {
            "cityEn": "zunyixian",
            "cityZh": "遵义县",
            "id": "CN101260202"
        }, {"cityEn": "renhuai", "cityZh": "仁怀", "id": "CN101260203"}, {
            "cityEn": "suiyang",
            "cityZh": "绥阳",
            "id": "CN101260204"
        }, {"cityEn": "meitan", "cityZh": "湄潭", "id": "CN101260205"}, {
            "cityEn": "fenggang",
            "cityZh": "凤冈",
            "id": "CN101260206"
        }, {"cityEn": "tongzi", "cityZh": "桐梓", "id": "CN101260207"}, {
            "cityEn": "chishui",
            "cityZh": "赤水",
            "id": "CN101260208"
        }, {"cityEn": "xishui", "cityZh": "习水", "id": "CN101260209"}, {
            "cityEn": "daozhen",
            "cityZh": "道真",
            "id": "CN101260210"
        }, {"cityEn": "zhengan", "cityZh": "正安", "id": "CN101260211"}, {
            "cityEn": "wuchuan",
            "cityZh": "务川",
            "id": "CN101260212"
        }, {"cityEn": "yuqing", "cityZh": "余庆", "id": "CN101260213"}, {
            "cityEn": "huichuan",
            "cityZh": "汇川",
            "id": "CN101260214"
        }, {"cityEn": "honghuagang", "cityZh": "红花岗", "id": "CN101260215"}],
        "anshun": [{"cityEn": "anshun", "cityZh": "安顺", "id": "CN101260301"}, {
            "cityEn": "puding",
            "cityZh": "普定",
            "id": "CN101260302"
        }, {"cityEn": "zhenning", "cityZh": "镇宁", "id": "CN101260303"}, {
            "cityEn": "pingba",
            "cityZh": "平坝",
            "id": "CN101260304"
        }, {"cityEn": "ziyun", "cityZh": "紫云", "id": "CN101260305"}, {
            "cityEn": "guanling",
            "cityZh": "关岭",
            "id": "CN101260306"
        }],
        "qiannan": [{"cityEn": "duyun", "cityZh": "都匀", "id": "CN101260401"}, {
            "cityEn": "guiding",
            "cityZh": "贵定",
            "id": "CN101260402"
        }, {"cityEn": "wengan", "cityZh": "瓮安", "id": "CN101260403"}, {
            "cityEn": "changshun",
            "cityZh": "长顺",
            "id": "CN101260404"
        }, {"cityEn": "fuquan", "cityZh": "福泉", "id": "CN101260405"}, {
            "cityEn": "huishui",
            "cityZh": "惠水",
            "id": "CN101260406"
        }, {"cityEn": "longli", "cityZh": "龙里", "id": "CN101260407"}, {
            "cityEn": "luodian",
            "cityZh": "罗甸",
            "id": "CN101260408"
        }, {"cityEn": "pingtang", "cityZh": "平塘", "id": "CN101260409"}, {
            "cityEn": "dushan",
            "cityZh": "独山",
            "id": "CN101260410"
        }, {"cityEn": "sandu", "cityZh": "三都", "id": "CN101260411"}, {
            "cityEn": "libo",
            "cityZh": "荔波",
            "id": "CN101260412"
        }],
        "qiandongnan": [{"cityEn": "kaili", "cityZh": "凯里", "id": "CN101260501"}, {
            "cityEn": "cengong",
            "cityZh": "岑巩",
            "id": "CN101260502"
        }, {"cityEn": "shibing", "cityZh": "施秉", "id": "CN101260503"}, {
            "cityEn": "zhenyuan",
            "cityZh": "镇远",
            "id": "CN101260504"
        }, {"cityEn": "huangping", "cityZh": "黄平", "id": "CN101260505"}, {
            "cityEn": "majiang",
            "cityZh": "麻江",
            "id": "CN101260507"
        }, {"cityEn": "danzhai", "cityZh": "丹寨", "id": "CN101260508"}, {
            "cityEn": "sansui",
            "cityZh": "三穗",
            "id": "CN101260509"
        }, {"cityEn": "taijiang", "cityZh": "台江", "id": "CN101260510"}, {
            "cityEn": "jianhe",
            "cityZh": "剑河",
            "id": "CN101260511"
        }, {"cityEn": "leishan", "cityZh": "雷山", "id": "CN101260512"}, {
            "cityEn": "liping",
            "cityZh": "黎平",
            "id": "CN101260513"
        }, {"cityEn": "tianzhu", "cityZh": "天柱", "id": "CN101260514"}, {
            "cityEn": "jinping",
            "cityZh": "锦屏",
            "id": "CN101260515"
        }, {"cityEn": "rongjiang", "cityZh": "榕江", "id": "CN101260516"}, {
            "cityEn": "congjiang",
            "cityZh": "从江",
            "id": "CN101260517"
        }],
        "tongren": [{"cityEn": "tongren", "cityZh": "铜仁", "id": "CN101260601"}, {
            "cityEn": "jiangkou",
            "cityZh": "江口",
            "id": "CN101260602"
        }, {"cityEn": "yuping", "cityZh": "玉屏", "id": "CN101260603"}, {
            "cityEn": "wanshan",
            "cityZh": "万山",
            "id": "CN101260604"
        }, {"cityEn": "sinan", "cityZh": "思南", "id": "CN101260605"}, {
            "cityEn": "yinjiang",
            "cityZh": "印江",
            "id": "CN101260607"
        }, {"cityEn": "shiqian", "cityZh": "石阡", "id": "CN101260608"}, {
            "cityEn": "yanhe",
            "cityZh": "沿河",
            "id": "CN101260609"
        }, {"cityEn": "dejiang", "cityZh": "德江", "id": "CN101260610"}, {
            "cityEn": "songtao",
            "cityZh": "松桃",
            "id": "CN101260611"
        }],
        "bijie": [{"cityEn": "bijie", "cityZh": "毕节", "id": "CN101260701"}, {
            "cityEn": "hezhang",
            "cityZh": "赫章",
            "id": "CN101260702"
        }, {"cityEn": "jinsha", "cityZh": "金沙", "id": "CN101260703"}, {
            "cityEn": "weining",
            "cityZh": "威宁",
            "id": "CN101260704"
        }, {"cityEn": "dafang", "cityZh": "大方", "id": "CN101260705"}, {
            "cityEn": "nayong",
            "cityZh": "纳雍",
            "id": "CN101260706"
        }, {"cityEn": "zhijin", "cityZh": "织金", "id": "CN101260707"}, {
            "cityEn": "qianxi",
            "cityZh": "黔西",
            "id": "CN101260708"
        }],
        "liupanshui": [{"cityEn": "shuicheng", "cityZh": "水城", "id": "CN101260801"}, {
            "cityEn": "liuzhi",
            "cityZh": "六枝",
            "id": "CN101260802"
        }, {"cityEn": "panxian", "cityZh": "盘县", "id": "CN101260804"}],
        "qianxinan": [{"cityEn": "xingyi", "cityZh": "兴义", "id": "CN101260901"}, {
            "cityEn": "qinglong",
            "cityZh": "晴隆",
            "id": "CN101260902"
        }, {"cityEn": "xingren", "cityZh": "兴仁", "id": "CN101260903"}, {
            "cityEn": "zhenfeng",
            "cityZh": "贞丰",
            "id": "CN101260904"
        }, {"cityEn": "wangmo", "cityZh": "望谟", "id": "CN101260905"}, {
            "cityEn": "anlong",
            "cityZh": "安龙",
            "id": "CN101260907"
        }, {"cityEn": "ceheng", "cityZh": "册亨", "id": "CN101260908"}, {
            "cityEn": "puan",
            "cityZh": "普安",
            "id": "CN101260909"
        }],
        "kunming": [{"cityEn": "kunming", "cityZh": "昆明", "id": "CN101290101"}, {
            "cityEn": "dongchuan",
            "cityZh": "东川",
            "id": "CN101290103"
        }, {"cityEn": "xundian", "cityZh": "寻甸", "id": "CN101290104"}, {
            "cityEn": "jinning",
            "cityZh": "晋宁",
            "id": "CN101290105"
        }, {"cityEn": "yiliang", "cityZh": "宜良", "id": "CN101290106"}, {
            "cityEn": "shilin",
            "cityZh": "石林",
            "id": "CN101290107"
        }, {"cityEn": "chenggong", "cityZh": "呈贡", "id": "CN101290108"}, {
            "cityEn": "fumin",
            "cityZh": "富民",
            "id": "CN101290109"
        }, {"cityEn": "songming", "cityZh": "嵩明", "id": "CN101290110"}, {
            "cityEn": "luquan",
            "cityZh": "禄劝",
            "id": "CN101290111"
        }, {"cityEn": "anning", "cityZh": "安宁", "id": "CN101290112"}, {
            "cityEn": "taihuashan",
            "cityZh": "太华山",
            "id": "CN101290113"
        }],
        "dali": [{"cityEn": "dali", "cityZh": "大理", "id": "CN101290201"}, {
            "cityEn": "yunlong",
            "cityZh": "云龙",
            "id": "CN101290202"
        }, {"cityEn": "yangbi", "cityZh": "漾濞", "id": "CN101290203"}, {
            "cityEn": "yongping",
            "cityZh": "永平",
            "id": "CN101290204"
        }, {"cityEn": "binchuan", "cityZh": "宾川", "id": "CN101290205"}, {
            "cityEn": "midu",
            "cityZh": "弥渡",
            "id": "CN101290206"
        }, {"cityEn": "xiangyun", "cityZh": "祥云", "id": "CN101290207"}, {
            "cityEn": "weishan",
            "cityZh": "巍山",
            "id": "CN101290208"
        }, {"cityEn": "jianchuan", "cityZh": "剑川", "id": "CN101290209"}, {
            "cityEn": "eryuan",
            "cityZh": "洱源",
            "id": "CN101290210"
        }, {"cityEn": "heqing", "cityZh": "鹤庆", "id": "CN101290211"}, {
            "cityEn": "nanjian",
            "cityZh": "南涧",
            "id": "CN101290212"
        }],
        "honghe": [{"cityEn": "honghe", "cityZh": "红河", "id": "CN101290301"}, {
            "cityEn": "shiping",
            "cityZh": "石屏",
            "id": "CN101290302"
        }, {"cityEn": "jianshui", "cityZh": "建水", "id": "CN101290303"}, {
            "cityEn": "mile",
            "cityZh": "弥勒",
            "id": "CN101290304"
        }, {"cityEn": "yuanyang", "cityZh": "元阳", "id": "CN101290305"}, {
            "cityEn": "lvchun",
            "cityZh": "绿春",
            "id": "CN101290306"
        }, {"cityEn": "kaiyuan", "cityZh": "开远", "id": "CN101290307"}, {
            "cityEn": "gejiu",
            "cityZh": "个旧",
            "id": "CN101290308"
        }, {"cityEn": "mengzi", "cityZh": "蒙自", "id": "CN101290309"}, {
            "cityEn": "pingbian",
            "cityZh": "屏边",
            "id": "CN101290310"
        }, {"cityEn": "luxi", "cityZh": "泸西", "id": "CN101290311"}, {
            "cityEn": "jinping",
            "cityZh": "金平",
            "id": "CN101290312"
        }, {"cityEn": "hekou", "cityZh": "河口", "id": "CN101290313"}],
        "qujing": [{"cityEn": "qujing", "cityZh": "曲靖", "id": "CN101290401"}, {
            "cityEn": "zhanyi",
            "cityZh": "沾益",
            "id": "CN101290402"
        }, {"cityEn": "luliang", "cityZh": "陆良", "id": "CN101290403"}, {
            "cityEn": "fuyuan",
            "cityZh": "富源",
            "id": "CN101290404"
        }, {"cityEn": "malong", "cityZh": "马龙", "id": "CN101290405"}, {
            "cityEn": "shizong",
            "cityZh": "师宗",
            "id": "CN101290406"
        }, {"cityEn": "luoping", "cityZh": "罗平", "id": "CN101290407"}, {
            "cityEn": "huize",
            "cityZh": "会泽",
            "id": "CN101290408"
        }, {"cityEn": "xuanwei", "cityZh": "宣威", "id": "CN101290409"}],
        "baoshan": [{"cityEn": "baoshan", "cityZh": "保山", "id": "CN101290501"}, {
            "cityEn": "longling",
            "cityZh": "龙陵",
            "id": "CN101290503"
        }, {"cityEn": "sidian", "cityZh": "施甸", "id": "CN101290504"}, {
            "cityEn": "changning",
            "cityZh": "昌宁",
            "id": "CN101290505"
        }, {"cityEn": "tengchong", "cityZh": "腾冲", "id": "CN101290506"}],
        "wenshan": [{"cityEn": "wenshan", "cityZh": "文山", "id": "CN101290601"}, {
            "cityEn": "xichou",
            "cityZh": "西畴",
            "id": "CN101290602"
        }, {"cityEn": "maguan", "cityZh": "马关", "id": "CN101290603"}, {
            "cityEn": "malipo",
            "cityZh": "麻栗坡",
            "id": "CN101290604"
        }, {"cityEn": "yanshan", "cityZh": "砚山", "id": "CN101290605"}, {
            "cityEn": "qiubei",
            "cityZh": "丘北",
            "id": "CN101290606"
        }, {"cityEn": "guangnan", "cityZh": "广南", "id": "CN101290607"}, {
            "cityEn": "funing",
            "cityZh": "富宁",
            "id": "CN101290608"
        }],
        "yuxi": [{"cityEn": "yuxi", "cityZh": "玉溪", "id": "CN101290701"}, {
            "cityEn": "chengjiang",
            "cityZh": "澄江",
            "id": "CN101290702"
        }, {"cityEn": "jiangchuan", "cityZh": "江川", "id": "CN101290703"}, {
            "cityEn": "tonghai",
            "cityZh": "通海",
            "id": "CN101290704"
        }, {"cityEn": "huaning", "cityZh": "华宁", "id": "CN101290705"}, {
            "cityEn": "xinping",
            "cityZh": "新平",
            "id": "CN101290706"
        }, {"cityEn": "yimen", "cityZh": "易门", "id": "CN101290707"}, {
            "cityEn": "eshan",
            "cityZh": "峨山",
            "id": "CN101290708"
        }, {"cityEn": "yuanjiang", "cityZh": "元江", "id": "CN101290709"}],
        "chuxiong": [{"cityEn": "chuxiong", "cityZh": "楚雄", "id": "CN101290801"}, {
            "cityEn": "dayao",
            "cityZh": "大姚",
            "id": "CN101290802"
        }, {"cityEn": "yuanmou", "cityZh": "元谋", "id": "CN101290803"}, {
            "cityEn": "yaoan",
            "cityZh": "姚安",
            "id": "CN101290804"
        }, {"cityEn": "mouding", "cityZh": "牟定", "id": "CN101290805"}, {
            "cityEn": "nanhua",
            "cityZh": "南华",
            "id": "CN101290806"
        }, {"cityEn": "wuding", "cityZh": "武定", "id": "CN101290807"}, {
            "cityEn": "lufeng",
            "cityZh": "禄丰",
            "id": "CN101290808"
        }, {"cityEn": "shuangbai", "cityZh": "双柏", "id": "CN101290809"}, {
            "cityEn": "yongren",
            "cityZh": "永仁",
            "id": "CN101290810"
        }],
        "puer": [{"cityEn": "puer", "cityZh": "普洱", "id": "CN101290901"}, {
            "cityEn": "jinggu",
            "cityZh": "景谷",
            "id": "CN101290902"
        }, {"cityEn": "jingdong", "cityZh": "景东", "id": "CN101290903"}, {
            "cityEn": "lancang",
            "cityZh": "澜沧",
            "id": "CN101290904"
        }, {"cityEn": "mojiang", "cityZh": "墨江", "id": "CN101290906"}, {
            "cityEn": "jiangcheng",
            "cityZh": "江城",
            "id": "CN101290907"
        }, {"cityEn": "menglian", "cityZh": "孟连", "id": "CN101290908"}, {
            "cityEn": "ximeng",
            "cityZh": "西盟",
            "id": "CN101290909"
        }, {"cityEn": "zhenyuan", "cityZh": "镇沅", "id": "CN101290911"}, {
            "cityEn": "ninger",
            "cityZh": "宁洱",
            "id": "CN101290912"
        }],
        "zhaotong": [{"cityEn": "zhaotong", "cityZh": "昭通", "id": "CN101291001"}, {
            "cityEn": "ludian",
            "cityZh": "鲁甸",
            "id": "CN101291002"
        }, {"cityEn": "yiliang", "cityZh": "彝良", "id": "CN101291003"}, {
            "cityEn": "zhenxiong",
            "cityZh": "镇雄",
            "id": "CN101291004"
        }, {"cityEn": "weixin", "cityZh": "威信", "id": "CN101291005"}, {
            "cityEn": "qiaojia",
            "cityZh": "巧家",
            "id": "CN101291006"
        }, {"cityEn": "suijiang", "cityZh": "绥江", "id": "CN101291007"}, {
            "cityEn": "yongshan",
            "cityZh": "永善",
            "id": "CN101291008"
        }, {"cityEn": "yanjin", "cityZh": "盐津", "id": "CN101291009"}, {
            "cityEn": "daguan",
            "cityZh": "大关",
            "id": "CN101291010"
        }, {"cityEn": "shuifu", "cityZh": "水富", "id": "CN101291011"}],
        "lincang": [{"cityEn": "lincang", "cityZh": "临沧", "id": "CN101291101"}, {
            "cityEn": "cangyuan",
            "cityZh": "沧源",
            "id": "CN101291102"
        }, {"cityEn": "gengma", "cityZh": "耿马", "id": "CN101291103"}, {
            "cityEn": "shuangjiang",
            "cityZh": "双江",
            "id": "CN101291104"
        }, {"cityEn": "fengqing", "cityZh": "凤庆", "id": "CN101291105"}, {
            "cityEn": "yongde",
            "cityZh": "永德",
            "id": "CN101291106"
        }, {"cityEn": "yunxian", "cityZh": "云县", "id": "CN101291107"}, {
            "cityEn": "zhenkang",
            "cityZh": "镇康",
            "id": "CN101291108"
        }],
        "nujiang": [{"cityEn": "nujiang", "cityZh": "怒江", "id": "CN101291201"}, {
            "cityEn": "fugong",
            "cityZh": "福贡",
            "id": "CN101291203"
        }, {"cityEn": "lanping", "cityZh": "兰坪", "id": "CN101291204"}, {
            "cityEn": "lushui",
            "cityZh": "泸水",
            "id": "CN101291205"
        }, {"cityEn": "liuku", "cityZh": "六库", "id": "CN101291206"}, {
            "cityEn": "gongshan",
            "cityZh": "贡山",
            "id": "CN101291207"
        }],
        "diqing": [{"cityEn": "xianggelila", "cityZh": "香格里拉", "id": "CN101291301"}, {
            "cityEn": "deqin",
            "cityZh": "德钦",
            "id": "CN101291302"
        }, {"cityEn": "weixi", "cityZh": "维西", "id": "CN101291303"}, {
            "cityEn": "zhongdian",
            "cityZh": "中甸",
            "id": "CN101291304"
        }],
        "lijiang": [{"cityEn": "lijiang", "cityZh": "丽江", "id": "CN101291401"}, {
            "cityEn": "yongsheng",
            "cityZh": "永胜",
            "id": "CN101291402"
        }, {"cityEn": "huaping", "cityZh": "华坪", "id": "CN101291403"}, {
            "cityEn": "ninglang",
            "cityZh": "宁蒗",
            "id": "CN101291404"
        }],
        "dehong": [{"cityEn": "dehong", "cityZh": "德宏", "id": "CN101291501"}, {
            "cityEn": "longchuan",
            "cityZh": "陇川",
            "id": "CN101291503"
        }, {"cityEn": "yingjiang", "cityZh": "盈江", "id": "CN101291504"}, {
            "cityEn": "ruili",
            "cityZh": "瑞丽",
            "id": "CN101291506"
        }, {"cityEn": "lianghe", "cityZh": "梁河", "id": "CN101291507"}, {
            "cityEn": "mangshi",
            "cityZh": "芒市",
            "id": "CN101291508"
        }],
        "xishuangbanna": [{"cityEn": "jinghong", "cityZh": "景洪", "id": "CN101291601"}, {
            "cityEn": "menghai",
            "cityZh": "勐海",
            "id": "CN101291603"
        }, {"cityEn": "mengla", "cityZh": "勐腊", "id": "CN101291605"}],
        "chengdu": [{"cityEn": "chengdu", "cityZh": "成都", "id": "CN101270101"}, {
            "cityEn": "longquanyi",
            "cityZh": "龙泉驿",
            "id": "CN101270102"
        }, {"cityEn": "xindu", "cityZh": "新都", "id": "CN101270103"}, {
            "cityEn": "wenjiang",
            "cityZh": "温江",
            "id": "CN101270104"
        }, {"cityEn": "jintang", "cityZh": "金堂", "id": "CN101270105"}, {
            "cityEn": "shuangliu",
            "cityZh": "双流",
            "id": "CN101270106"
        }, {"cityEn": "pixian", "cityZh": "郫县", "id": "CN101270107"}, {
            "cityEn": "dayi",
            "cityZh": "大邑",
            "id": "CN101270108"
        }, {"cityEn": "pujiang", "cityZh": "蒲江", "id": "CN101270109"}, {
            "cityEn": "xinjin",
            "cityZh": "新津",
            "id": "CN101270110"
        }, {"cityEn": "dujiangyan", "cityZh": "都江堰", "id": "CN101270111"}, {
            "cityEn": "pengzhou",
            "cityZh": "彭州",
            "id": "CN101270112"
        }, {"cityEn": "qionglai", "cityZh": "邛崃", "id": "CN101270113"}, {
            "cityEn": "chongzhou",
            "cityZh": "崇州",
            "id": "CN101270114"
        }, {"cityEn": "qingbaijiang", "cityZh": "青白江", "id": "CN101270115"}],
        "panzhihua": [{"cityEn": "panzhihua", "cityZh": "攀枝花", "id": "CN101270201"}, {
            "cityEn": "renhe",
            "cityZh": "仁和",
            "id": "CN101270202"
        }, {"cityEn": "miyi", "cityZh": "米易", "id": "CN101270203"}, {
            "cityEn": "yanbian",
            "cityZh": "盐边",
            "id": "CN101270204"
        }],
        "zigong": [{"cityEn": "zigong", "cityZh": "自贡", "id": "CN101270301"}, {
            "cityEn": "fushun",
            "cityZh": "富顺",
            "id": "CN101270302"
        }, {"cityEn": "rongxian", "cityZh": "荣县", "id": "CN101270303"}],
        "mianyang": [{"cityEn": "mianyang", "cityZh": "绵阳", "id": "CN101270401"}, {
            "cityEn": "santai",
            "cityZh": "三台",
            "id": "CN101270402"
        }, {"cityEn": "yanting", "cityZh": "盐亭", "id": "CN101270403"}, {
            "cityEn": "anxian",
            "cityZh": "安县",
            "id": "CN101270404"
        }, {"cityEn": "zitong", "cityZh": "梓潼", "id": "CN101270405"}, {
            "cityEn": "beichuan",
            "cityZh": "北川",
            "id": "CN101270406"
        }, {"cityEn": "pingwu", "cityZh": "平武", "id": "CN101270407"}, {
            "cityEn": "jiangyou",
            "cityZh": "江油",
            "id": "CN101270408"
        }],
        "nanchong": [{"cityEn": "nanchong", "cityZh": "南充", "id": "CN101270501"}, {
            "cityEn": "nanbu",
            "cityZh": "南部",
            "id": "CN101270502"
        }, {"cityEn": "yingshan", "cityZh": "营山", "id": "CN101270503"}, {
            "cityEn": "pengan",
            "cityZh": "蓬安",
            "id": "CN101270504"
        }, {"cityEn": "yilong", "cityZh": "仪陇", "id": "CN101270505"}, {
            "cityEn": "xichong",
            "cityZh": "西充",
            "id": "CN101270506"
        }, {"cityEn": "langzhong", "cityZh": "阆中", "id": "CN101270507"}],
        "dazhou": [{"cityEn": "dazhou", "cityZh": "达州", "id": "CN101270601"}, {
            "cityEn": "xuanhan",
            "cityZh": "宣汉",
            "id": "CN101270602"
        }, {"cityEn": "kaijiang", "cityZh": "开江", "id": "CN101270603"}, {
            "cityEn": "dazhu",
            "cityZh": "大竹",
            "id": "CN101270604"
        }, {"cityEn": "quxian", "cityZh": "渠县", "id": "CN101270605"}, {
            "cityEn": "wanyuan",
            "cityZh": "万源",
            "id": "CN101270606"
        }, {"cityEn": "tongchuan", "cityZh": "通川", "id": "CN101270607"}, {
            "cityEn": "dachuan",
            "cityZh": "达川",
            "id": "CN101270608"
        }],
        "suining": [{"cityEn": "suining", "cityZh": "遂宁", "id": "CN101270701"}, {
            "cityEn": "pengxi",
            "cityZh": "蓬溪",
            "id": "CN101270702"
        }, {"cityEn": "shehong", "cityZh": "射洪", "id": "CN101270703"}],
        "guangan": [{"cityEn": "guangan", "cityZh": "广安", "id": "CN101270801"}, {
            "cityEn": "yuechi",
            "cityZh": "岳池",
            "id": "CN101270802"
        }, {"cityEn": "wusheng", "cityZh": "武胜", "id": "CN101270803"}, {
            "cityEn": "linshui",
            "cityZh": "邻水",
            "id": "CN101270804"
        }, {"cityEn": "huaying", "cityZh": "华蓥", "id": "CN101270805"}],
        "bazhong": [{"cityEn": "bazhong", "cityZh": "巴中", "id": "CN101270901"}, {
            "cityEn": "tongjiang",
            "cityZh": "通江",
            "id": "CN101270902"
        }, {"cityEn": "nanjiang", "cityZh": "南江", "id": "CN101270903"}, {
            "cityEn": "pingchang",
            "cityZh": "平昌",
            "id": "CN101270904"
        }],
        "luzhou": [{"cityEn": "luzhou", "cityZh": "泸州", "id": "CN101271001"}, {
            "cityEn": "luxian",
            "cityZh": "泸县",
            "id": "CN101271003"
        }, {"cityEn": "hejiang", "cityZh": "合江", "id": "CN101271004"}, {
            "cityEn": "xuyong",
            "cityZh": "叙永",
            "id": "CN101271005"
        }, {"cityEn": "gulin", "cityZh": "古蔺", "id": "CN101271006"}, {
            "cityEn": "naxi",
            "cityZh": "纳溪",
            "id": "CN101271007"
        }],
        "yibin": [{"cityEn": "yibin", "cityZh": "宜宾", "id": "CN101271101"}, {
            "cityEn": "yibinxian",
            "cityZh": "宜宾县",
            "id": "CN101271103"
        }, {"cityEn": "nanxi", "cityZh": "南溪", "id": "CN101271104"}, {
            "cityEn": "jiangan",
            "cityZh": "江安",
            "id": "CN101271105"
        }, {"cityEn": "changning", "cityZh": "长宁", "id": "CN101271106"}, {
            "cityEn": "gaoxian",
            "cityZh": "高县",
            "id": "CN101271107"
        }, {"cityEn": "gongxian", "cityZh": "珙县", "id": "CN101271108"}, {
            "cityEn": "junlian",
            "cityZh": "筠连",
            "id": "CN101271109"
        }, {"cityEn": "xingwen", "cityZh": "兴文", "id": "CN101271110"}, {
            "cityEn": "pingshan",
            "cityZh": "屏山",
            "id": "CN101271111"
        }],
        "neijiang": [{"cityEn": "neijiang", "cityZh": "内江", "id": "CN101271201"}, {
            "cityEn": "dongxing",
            "cityZh": "东兴",
            "id": "CN101271202"
        }, {"cityEn": "weiyuan", "cityZh": "威远", "id": "CN101271203"}, {
            "cityEn": "zizhong",
            "cityZh": "资中",
            "id": "CN101271204"
        }, {"cityEn": "longchang", "cityZh": "隆昌", "id": "CN101271205"}],
        "ziyang": [{"cityEn": "ziyang", "cityZh": "资阳", "id": "CN101271301"}, {
            "cityEn": "anyue",
            "cityZh": "安岳",
            "id": "CN101271302"
        }, {"cityEn": "lezhi", "cityZh": "乐至", "id": "CN101271303"}, {
            "cityEn": "jianyang",
            "cityZh": "简阳",
            "id": "CN101271304"
        }],
        "leshan": [{"cityEn": "leshan", "cityZh": "乐山", "id": "CN101271401"}, {
            "cityEn": "qianwei",
            "cityZh": "犍为",
            "id": "CN101271402"
        }, {"cityEn": "jingyan", "cityZh": "井研", "id": "CN101271403"}, {
            "cityEn": "jiajiang",
            "cityZh": "夹江",
            "id": "CN101271404"
        }, {"cityEn": "muchuan", "cityZh": "沐川", "id": "CN101271405"}, {
            "cityEn": "ebian",
            "cityZh": "峨边",
            "id": "CN101271406"
        }, {"cityEn": "mabian", "cityZh": "马边", "id": "CN101271407"}, {
            "cityEn": "emei",
            "cityZh": "峨眉",
            "id": "CN101271408"
        }, {"cityEn": "emeishan", "cityZh": "峨眉山", "id": "CN101271409"}],
        "meishan": [{"cityEn": "meishan", "cityZh": "眉山", "id": "CN101271501"}, {
            "cityEn": "renshou",
            "cityZh": "仁寿",
            "id": "CN101271502"
        }, {"cityEn": "pengshan", "cityZh": "彭山", "id": "CN101271503"}, {
            "cityEn": "hongya",
            "cityZh": "洪雅",
            "id": "CN101271504"
        }, {"cityEn": "danleng", "cityZh": "丹棱", "id": "CN101271505"}, {
            "cityEn": "qingshen",
            "cityZh": "青神",
            "id": "CN101271506"
        }],
        "liangshan": [{"cityEn": "liangshan", "cityZh": "凉山", "id": "CN101271601"}, {
            "cityEn": "muli",
            "cityZh": "木里",
            "id": "CN101271603"
        }, {"cityEn": "yanyuan", "cityZh": "盐源", "id": "CN101271604"}, {
            "cityEn": "dechang",
            "cityZh": "德昌",
            "id": "CN101271605"
        }, {"cityEn": "huili", "cityZh": "会理", "id": "CN101271606"}, {
            "cityEn": "huidong",
            "cityZh": "会东",
            "id": "CN101271607"
        }, {"cityEn": "ningnan", "cityZh": "宁南", "id": "CN101271608"}, {
            "cityEn": "puge",
            "cityZh": "普格",
            "id": "CN101271609"
        }, {"cityEn": "xichang", "cityZh": "西昌", "id": "CN101271610"}, {
            "cityEn": "jinyang",
            "cityZh": "金阳",
            "id": "CN101271611"
        }, {"cityEn": "zhaojue", "cityZh": "昭觉", "id": "CN101271612"}, {
            "cityEn": "xide",
            "cityZh": "喜德",
            "id": "CN101271613"
        }, {"cityEn": "mianning", "cityZh": "冕宁", "id": "CN101271614"}, {
            "cityEn": "yuexi",
            "cityZh": "越西",
            "id": "CN101271615"
        }, {"cityEn": "ganluo", "cityZh": "甘洛", "id": "CN101271616"}, {
            "cityEn": "leibo",
            "cityZh": "雷波",
            "id": "CN101271617"
        }, {"cityEn": "meigu", "cityZh": "美姑", "id": "CN101271618"}, {
            "cityEn": "butuo",
            "cityZh": "布拖",
            "id": "CN101271619"
        }],
        "yaan": [{"cityEn": "yaan", "cityZh": "雅安", "id": "CN101271701"}, {
            "cityEn": "mingshan",
            "cityZh": "名山",
            "id": "CN101271702"
        }, {"cityEn": "yingjing", "cityZh": "荥经", "id": "CN101271703"}, {
            "cityEn": "hanyuan",
            "cityZh": "汉源",
            "id": "CN101271704"
        }, {"cityEn": "shimian", "cityZh": "石棉", "id": "CN101271705"}, {
            "cityEn": "tianquan",
            "cityZh": "天全",
            "id": "CN101271706"
        }, {"cityEn": "lushan", "cityZh": "芦山", "id": "CN101271707"}, {
            "cityEn": "baoxing",
            "cityZh": "宝兴",
            "id": "CN101271708"
        }],
        "ganzi": [{"cityEn": "ganzi", "cityZh": "甘孜", "id": "CN101271801"}, {
            "cityEn": "kangding",
            "cityZh": "康定",
            "id": "CN101271802"
        }, {"cityEn": "luding", "cityZh": "泸定", "id": "CN101271803"}, {
            "cityEn": "danba",
            "cityZh": "丹巴",
            "id": "CN101271804"
        }, {"cityEn": "jiulong", "cityZh": "九龙", "id": "CN101271805"}, {
            "cityEn": "yajiang",
            "cityZh": "雅江",
            "id": "CN101271806"
        }, {"cityEn": "daofu", "cityZh": "道孚", "id": "CN101271807"}, {
            "cityEn": "luhuo",
            "cityZh": "炉霍",
            "id": "CN101271808"
        }, {"cityEn": "xinlong", "cityZh": "新龙", "id": "CN101271809"}, {
            "cityEn": "dege",
            "cityZh": "德格",
            "id": "CN101271810"
        }, {"cityEn": "baiyu", "cityZh": "白玉", "id": "CN101271811"}, {
            "cityEn": "shiqu",
            "cityZh": "石渠",
            "id": "CN101271812"
        }, {"cityEn": "seda", "cityZh": "色达", "id": "CN101271813"}, {
            "cityEn": "litang",
            "cityZh": "理塘",
            "id": "CN101271814"
        }, {"cityEn": "batang", "cityZh": "巴塘", "id": "CN101271815"}, {
            "cityEn": "xiangcheng",
            "cityZh": "乡城",
            "id": "CN101271816"
        }, {"cityEn": "daocheng", "cityZh": "稻城", "id": "CN101271817"}, {
            "cityEn": "derong",
            "cityZh": "得荣",
            "id": "CN101271818"
        }],
        "aba": [{"cityEn": "aba", "cityZh": "阿坝", "id": "CN101271901"}, {
            "cityEn": "wenchuan",
            "cityZh": "汶川",
            "id": "CN101271902"
        }, {"cityEn": "lixian", "cityZh": "理县", "id": "CN101271903"}, {
            "cityEn": "maoxian",
            "cityZh": "茂县",
            "id": "CN101271904"
        }, {"cityEn": "songfan", "cityZh": "松潘", "id": "CN101271905"}, {
            "cityEn": "jiuzhaigou",
            "cityZh": "九寨沟",
            "id": "CN101271906"
        }, {"cityEn": "jinchuan", "cityZh": "金川", "id": "CN101271907"}, {
            "cityEn": "xiaojin",
            "cityZh": "小金",
            "id": "CN101271908"
        }, {"cityEn": "heishui", "cityZh": "黑水", "id": "CN101271909"}, {
            "cityEn": "maerkang",
            "cityZh": "马尔康",
            "id": "CN101271910"
        }, {"cityEn": "rangtang", "cityZh": "壤塘", "id": "CN101271911"}, {
            "cityEn": "nuoergai",
            "cityZh": "若尔盖",
            "id": "CN101271912"
        }, {"cityEn": "hongyuan", "cityZh": "红原", "id": "CN101271913"}],
        "deyang": [{"cityEn": "deyang", "cityZh": "德阳", "id": "CN101272001"}, {
            "cityEn": "zhongjiang",
            "cityZh": "中江",
            "id": "CN101272002"
        }, {"cityEn": "guanghan", "cityZh": "广汉", "id": "CN101272003"}, {
            "cityEn": "shifang",
            "cityZh": "什邡",
            "id": "CN101272004"
        }, {"cityEn": "mianzhu", "cityZh": "绵竹", "id": "CN101272005"}, {
            "cityEn": "luojiang",
            "cityZh": "罗江",
            "id": "CN101272006"
        }],
        "guangyuan": [{"cityEn": "guangyuan", "cityZh": "广元", "id": "CN101272101"}, {
            "cityEn": "wangcang",
            "cityZh": "旺苍",
            "id": "CN101272102"
        }, {"cityEn": "qingchuan", "cityZh": "青川", "id": "CN101272103"}, {
            "cityEn": "jiange",
            "cityZh": "剑阁",
            "id": "CN101272104"
        }, {"cityEn": "cangxi", "cityZh": "苍溪", "id": "CN101272105"}],
        "lasa": [{"cityEn": "lasa", "cityZh": "拉萨", "id": "CN101140101"}, {
            "cityEn": "dangxiong",
            "cityZh": "当雄",
            "id": "CN101140102"
        }, {"cityEn": "nimu", "cityZh": "尼木", "id": "CN101140103"}, {
            "cityEn": "linzhou",
            "cityZh": "林周",
            "id": "CN101140104"
        }, {"cityEn": "duilongdeqing", "cityZh": "堆龙德庆", "id": "CN101140105"}, {
            "cityEn": "qushui",
            "cityZh": "曲水",
            "id": "CN101140106"
        }, {"cityEn": "dazi", "cityZh": "达孜", "id": "CN101140107"}, {
            "cityEn": "mozhugongka",
            "cityZh": "墨竹工卡",
            "id": "CN101140108"
        }],
        "rikaze": [{"cityEn": "rikaze", "cityZh": "日喀则", "id": "CN101140201"}, {
            "cityEn": "lazi",
            "cityZh": "拉孜",
            "id": "CN101140202"
        }, {"cityEn": "nanmulin", "cityZh": "南木林", "id": "CN101140203"}, {
            "cityEn": "nielamu",
            "cityZh": "聂拉木",
            "id": "CN101140204"
        }, {"cityEn": "anri", "cityZh": "定日", "id": "CN101140205"}, {
            "cityEn": "jiangzi",
            "cityZh": "江孜",
            "id": "CN101140206"
        }, {"cityEn": "pali", "cityZh": "帕里", "id": "CN101140207"}, {
            "cityEn": "zhongba",
            "cityZh": "仲巴",
            "id": "CN101140208"
        }, {"cityEn": "saga", "cityZh": "萨嘎", "id": "CN101140209"}, {
            "cityEn": "jilong",
            "cityZh": "吉隆",
            "id": "CN101140210"
        }, {"cityEn": "angren", "cityZh": "昂仁", "id": "CN101140211"}, {
            "cityEn": "dingjie",
            "cityZh": "定结",
            "id": "CN101140212"
        }, {"cityEn": "sajia", "cityZh": "萨迦", "id": "CN101140213"}, {
            "cityEn": "xietongmen",
            "cityZh": "谢通门",
            "id": "CN101140214"
        }, {"cityEn": "gangba", "cityZh": "岗巴", "id": "CN101140216"}, {
            "cityEn": "bailang",
            "cityZh": "白朗",
            "id": "CN101140217"
        }, {"cityEn": "yadong", "cityZh": "亚东", "id": "CN101140218"}, {
            "cityEn": "kangma",
            "cityZh": "康马",
            "id": "CN101140219"
        }, {"cityEn": "renbu", "cityZh": "仁布", "id": "CN101140220"}],
        "shannan": [{"cityEn": "shannan", "cityZh": "山南", "id": "CN101140301"}, {
            "cityEn": "gongga",
            "cityZh": "贡嘎",
            "id": "CN101140302"
        }, {"cityEn": "zhanang", "cityZh": "扎囊", "id": "CN101140303"}, {
            "cityEn": "jiacha",
            "cityZh": "加查",
            "id": "CN101140304"
        }, {"cityEn": "langkazi", "cityZh": "浪卡子", "id": "CN101140305"}, {
            "cityEn": "cuona",
            "cityZh": "错那",
            "id": "CN101140306"
        }, {"cityEn": "longzi", "cityZh": "隆子", "id": "CN101140307"}, {
            "cityEn": "zedang",
            "cityZh": "泽当",
            "id": "CN101140308"
        }, {"cityEn": "naidong", "cityZh": "乃东", "id": "CN101140309"}, {
            "cityEn": "sangri",
            "cityZh": "桑日",
            "id": "CN101140310"
        }, {"cityEn": "luozha", "cityZh": "洛扎", "id": "CN101140311"}, {
            "cityEn": "cuomei",
            "cityZh": "措美",
            "id": "CN101140312"
        }, {"cityEn": "qiongjie", "cityZh": "琼结", "id": "CN101140313"}, {
            "cityEn": "qusong",
            "cityZh": "曲松",
            "id": "CN101140314"
        }],
        "linzi": [{"cityEn": "linzhi", "cityZh": "林芝", "id": "CN101140401"}, {
            "cityEn": "bomi",
            "cityZh": "波密",
            "id": "CN101140402"
        }, {"cityEn": "milin", "cityZh": "米林", "id": "CN101140403"}, {
            "cityEn": "chayu",
            "cityZh": "察隅",
            "id": "CN101140404"
        }],
        "linzhi": [{"cityEn": "gongbujiangda", "cityZh": "工布江达", "id": "CN101140405"}, {
            "cityEn": "langxian",
            "cityZh": "朗县",
            "id": "CN101140406"
        }, {"cityEn": "motuo", "cityZh": "墨脱", "id": "CN101140407"}],
        "changdu": [{"cityEn": "changdu", "cityZh": "昌都", "id": "CN101140501"}, {
            "cityEn": "dingqing",
            "cityZh": "丁青",
            "id": "CN101140502"
        }, {"cityEn": "bianba", "cityZh": "边坝", "id": "CN101140503"}, {
            "cityEn": "luolong",
            "cityZh": "洛隆",
            "id": "CN101140504"
        }, {"cityEn": "zuogong", "cityZh": "左贡", "id": "CN101140505"}, {
            "cityEn": "mangkang",
            "cityZh": "芒康",
            "id": "CN101140506"
        }, {"cityEn": "leiwuqi", "cityZh": "类乌齐", "id": "CN101140507"}, {
            "cityEn": "basu",
            "cityZh": "八宿",
            "id": "CN101140508"
        }, {"cityEn": "jiangda", "cityZh": "江达", "id": "CN101140509"}, {
            "cityEn": "chaya",
            "cityZh": "察雅",
            "id": "CN101140510"
        }, {"cityEn": "gongjue", "cityZh": "贡觉", "id": "CN101140511"}],
        "naqu": [{"cityEn": "naqu", "cityZh": "那曲", "id": "CN101140601"}, {
            "cityEn": "nima",
            "cityZh": "尼玛",
            "id": "CN101140602"
        }, {"cityEn": "jiali", "cityZh": "嘉黎", "id": "CN101140603"}, {
            "cityEn": "bange",
            "cityZh": "班戈",
            "id": "CN101140604"
        }, {"cityEn": "anduo", "cityZh": "安多", "id": "CN101140605"}, {
            "cityEn": "suoxian",
            "cityZh": "索县",
            "id": "CN101140606"
        }, {"cityEn": "nierong", "cityZh": "聂荣", "id": "CN101140607"}, {
            "cityEn": "baqing",
            "cityZh": "巴青",
            "id": "CN101140608"
        }, {"cityEn": "biru", "cityZh": "比如", "id": "CN101140609"}, {
            "cityEn": "shuanghu",
            "cityZh": "双湖",
            "id": "CN101140610"
        }],
        "ali": [{"cityEn": "ali", "cityZh": "阿里", "id": "CN101140701"}, {
            "cityEn": "gaize",
            "cityZh": "改则",
            "id": "CN101140702"
        }, {"cityEn": "shenzha", "cityZh": "申扎", "id": "CN101140703"}, {
            "cityEn": "shiquanhe",
            "cityZh": "狮泉河",
            "id": "CN101140704"
        }, {"cityEn": "pulan", "cityZh": "普兰", "id": "CN101140705"}, {
            "cityEn": "zhada",
            "cityZh": "札达",
            "id": "CN101140706"
        }, {"cityEn": "gaer", "cityZh": "噶尔", "id": "CN101140707"}, {
            "cityEn": "ritu",
            "cityZh": "日土",
            "id": "CN101140708"
        }, {"cityEn": "geji", "cityZh": "革吉", "id": "CN101140709"}, {
            "cityEn": "cuoqin",
            "cityZh": "措勤",
            "id": "CN101140710"
        }],
        "xian": [{"cityEn": "xian", "cityZh": "西安", "id": "CN101110101"}, {
            "cityEn": "changan",
            "cityZh": "长安",
            "id": "CN101110102"
        }, {"cityEn": "lintong", "cityZh": "临潼", "id": "CN101110103"}, {
            "cityEn": "lantian",
            "cityZh": "蓝田",
            "id": "CN101110104"
        }, {"cityEn": "zhouzhi", "cityZh": "周至", "id": "CN101110105"}, {
            "cityEn": "huxian",
            "cityZh": "户县",
            "id": "CN101110106"
        }, {"cityEn": "gaoling", "cityZh": "高陵", "id": "CN101110107"}],
        "xianyang": [{"cityEn": "xianyang", "cityZh": "咸阳", "id": "CN101110200"}, {
            "cityEn": "sanyuan",
            "cityZh": "三原",
            "id": "CN101110201"
        }, {"cityEn": "liquan", "cityZh": "礼泉", "id": "CN101110202"}, {
            "cityEn": "yongshou",
            "cityZh": "永寿",
            "id": "CN101110203"
        }, {"cityEn": "chunhua", "cityZh": "淳化", "id": "CN101110204"}, {
            "cityEn": "jingyang",
            "cityZh": "泾阳",
            "id": "CN101110205"
        }, {"cityEn": "wugong", "cityZh": "武功", "id": "CN101110206"}, {
            "cityEn": "qianxian",
            "cityZh": "乾县",
            "id": "CN101110207"
        }, {"cityEn": "binxian", "cityZh": "彬县", "id": "CN101110208"}, {
            "cityEn": "changwu",
            "cityZh": "长武",
            "id": "CN101110209"
        }, {"cityEn": "xunyi", "cityZh": "旬邑", "id": "CN101110210"}, {
            "cityEn": "xingping",
            "cityZh": "兴平",
            "id": "CN101110211"
        }],
        "yanan": [{"cityEn": "yanan", "cityZh": "延安", "id": "CN101110300"}, {
            "cityEn": "yanchang",
            "cityZh": "延长",
            "id": "CN101110301"
        }, {"cityEn": "yanchuan", "cityZh": "延川", "id": "CN101110302"}, {
            "cityEn": "zichang",
            "cityZh": "子长",
            "id": "CN101110303"
        }, {"cityEn": "yichuan", "cityZh": "宜川", "id": "CN101110304"}, {
            "cityEn": "fuxian",
            "cityZh": "富县",
            "id": "CN101110305"
        }, {"cityEn": "zhidan", "cityZh": "志丹", "id": "CN101110306"}, {
            "cityEn": "ansai",
            "cityZh": "安塞",
            "id": "CN101110307"
        }, {"cityEn": "ganquan", "cityZh": "甘泉", "id": "CN101110308"}, {
            "cityEn": "luochuan",
            "cityZh": "洛川",
            "id": "CN101110309"
        }, {"cityEn": "huangling", "cityZh": "黄陵", "id": "CN101110310"}, {
            "cityEn": "huanglong",
            "cityZh": "黄龙",
            "id": "CN101110311"
        }, {"cityEn": "wuqi", "cityZh": "吴起", "id": "CN101110312"}],
        "weinan": [{"cityEn": "weinan", "cityZh": "渭南", "id": "CN101110501"}, {
            "cityEn": "huaxian",
            "cityZh": "华县",
            "id": "CN101110502"
        }, {"cityEn": "tongguan", "cityZh": "潼关", "id": "CN101110503"}, {
            "cityEn": "dali",
            "cityZh": "大荔",
            "id": "CN101110504"
        }, {"cityEn": "baishui", "cityZh": "白水", "id": "CN101110505"}, {
            "cityEn": "fuping",
            "cityZh": "富平",
            "id": "CN101110506"
        }, {"cityEn": "pucheng", "cityZh": "蒲城", "id": "CN101110507"}, {
            "cityEn": "chengcheng",
            "cityZh": "澄城",
            "id": "CN101110508"
        }, {"cityEn": "heyang", "cityZh": "合阳", "id": "CN101110509"}, {
            "cityEn": "hancheng",
            "cityZh": "韩城",
            "id": "CN101110510"
        }, {"cityEn": "huayin", "cityZh": "华阴", "id": "CN101110511"}],
        "shangluo": [{"cityEn": "shangluo", "cityZh": "商洛", "id": "CN101110601"}, {
            "cityEn": "luonan",
            "cityZh": "洛南",
            "id": "CN101110602"
        }, {"cityEn": "zhashui", "cityZh": "柞水", "id": "CN101110603"}, {
            "cityEn": "shangzhou",
            "cityZh": "商州",
            "id": "CN101110604"
        }, {"cityEn": "zhenan", "cityZh": "镇安", "id": "CN101110605"}, {
            "cityEn": "danfeng",
            "cityZh": "丹凤",
            "id": "CN101110606"
        }, {"cityEn": "shangnan", "cityZh": "商南", "id": "CN101110607"}, {
            "cityEn": "shanyang",
            "cityZh": "山阳",
            "id": "CN101110608"
        }],
        "ankang": [{"cityEn": "ankang", "cityZh": "安康", "id": "CN101110701"}, {
            "cityEn": "ziyang",
            "cityZh": "紫阳",
            "id": "CN101110702"
        }, {"cityEn": "shiquan", "cityZh": "石泉", "id": "CN101110703"}, {
            "cityEn": "hanyin",
            "cityZh": "汉阴",
            "id": "CN101110704"
        }, {"cityEn": "xunyang", "cityZh": "旬阳", "id": "CN101110705"}, {
            "cityEn": "langao",
            "cityZh": "岚皋",
            "id": "CN101110706"
        }, {"cityEn": "pingli", "cityZh": "平利", "id": "CN101110707"}, {
            "cityEn": "baihe",
            "cityZh": "白河",
            "id": "CN101110708"
        }, {"cityEn": "zhenping", "cityZh": "镇坪", "id": "CN101110709"}, {
            "cityEn": "ningshan",
            "cityZh": "宁陕",
            "id": "CN101110710"
        }],
        "hanzhong": [{"cityEn": "hanzhong", "cityZh": "汉中", "id": "CN101110801"}, {
            "cityEn": "lueyang",
            "cityZh": "略阳",
            "id": "CN101110802"
        }, {"cityEn": "mianxian", "cityZh": "勉县", "id": "CN101110803"}, {
            "cityEn": "liuba",
            "cityZh": "留坝",
            "id": "CN101110804"
        }, {"cityEn": "yangxian", "cityZh": "洋县", "id": "CN101110805"}, {
            "cityEn": "chenggu",
            "cityZh": "城固",
            "id": "CN101110806"
        }, {"cityEn": "xixiang", "cityZh": "西乡", "id": "CN101110807"}, {
            "cityEn": "fuoping",
            "cityZh": "佛坪",
            "id": "CN101110808"
        }, {"cityEn": "ningqiang", "cityZh": "宁强", "id": "CN101110809"}, {
            "cityEn": "nanzheng",
            "cityZh": "南郑",
            "id": "CN101110810"
        }, {"cityEn": "zhenba", "cityZh": "镇巴", "id": "CN101110811"}],
        "baoji": [{"cityEn": "baoji", "cityZh": "宝鸡", "id": "CN101110901"}, {
            "cityEn": "qianyang",
            "cityZh": "千阳",
            "id": "CN101110903"
        }, {"cityEn": "linyou", "cityZh": "麟游", "id": "CN101110904"}, {
            "cityEn": "qishan",
            "cityZh": "岐山",
            "id": "CN101110905"
        }, {"cityEn": "fengxiang", "cityZh": "凤翔", "id": "CN101110906"}, {
            "cityEn": "fufeng",
            "cityZh": "扶风",
            "id": "CN101110907"
        }, {"cityEn": "meixian", "cityZh": "眉县", "id": "CN101110908"}, {
            "cityEn": "taibai",
            "cityZh": "太白",
            "id": "CN101110909"
        }, {"cityEn": "fengxian", "cityZh": "凤县", "id": "CN101110910"}, {
            "cityEn": "longxian",
            "cityZh": "陇县",
            "id": "CN101110911"
        }, {"cityEn": "chencang", "cityZh": "陈仓", "id": "CN101110912"}],
        "tongchuan": [{"cityEn": "tongchuan", "cityZh": "铜川", "id": "CN101111001"}, {
            "cityEn": "yaoxian",
            "cityZh": "耀县",
            "id": "CN101111002"
        }, {"cityEn": "yijun", "cityZh": "宜君", "id": "CN101111003"}, {
            "cityEn": "yaozhou",
            "cityZh": "耀州",
            "id": "CN101111004"
        }],
        "yangling": [{"cityEn": "yangling", "cityZh": "杨凌", "id": "CN101111101"}],
        "yinchuan": [{"cityEn": "yinchuan", "cityZh": "银川", "id": "CN101170101"}, {
            "cityEn": "yongning",
            "cityZh": "永宁",
            "id": "CN101170102"
        }, {"cityEn": "lingwu", "cityZh": "灵武", "id": "CN101170103"}, {
            "cityEn": "helan",
            "cityZh": "贺兰",
            "id": "CN101170104"
        }],
        "shizuishan": [{"cityEn": "shizuishan", "cityZh": "石嘴山", "id": "CN101170201"}, {
            "cityEn": "huinong",
            "cityZh": "惠农",
            "id": "CN101170202"
        }, {"cityEn": "pingluo", "cityZh": "平罗", "id": "CN101170203"}, {
            "cityEn": "taole",
            "cityZh": "陶乐",
            "id": "CN101170204"
        }],
        "wuzhong": [{"cityEn": "wuzhong", "cityZh": "吴忠", "id": "CN101170301"}, {
            "cityEn": "tongxin",
            "cityZh": "同心",
            "id": "CN101170302"
        }, {"cityEn": "yanchi", "cityZh": "盐池", "id": "CN101170303"}, {
            "cityEn": "qingtongxia",
            "cityZh": "青铜峡",
            "id": "CN101170306"
        }],
        "guyuan": [{"cityEn": "guyuan", "cityZh": "固原", "id": "CN101170401"}, {
            "cityEn": "xiji",
            "cityZh": "西吉",
            "id": "CN101170402"
        }, {"cityEn": "longde", "cityZh": "隆德", "id": "CN101170403"}, {
            "cityEn": "jinyuan",
            "cityZh": "泾源",
            "id": "CN101170404"
        }, {"cityEn": "pengyang", "cityZh": "彭阳", "id": "CN101170406"}],
        "zhongwei": [{"cityEn": "zhongwei", "cityZh": "中卫", "id": "CN101170501"}, {
            "cityEn": "zhongning",
            "cityZh": "中宁",
            "id": "CN101170502"
        }, {"cityEn": "haiyuan", "cityZh": "海原", "id": "CN101170504"}],
        "lanzhou": [{"cityEn": "lanzhou", "cityZh": "兰州", "id": "CN101160101"}, {
            "cityEn": "gaolan",
            "cityZh": "皋兰",
            "id": "CN101160102"
        }, {"cityEn": "yongdeng", "cityZh": "永登", "id": "CN101160103"}, {
            "cityEn": "yuzhong",
            "cityZh": "榆中",
            "id": "CN101160104"
        }],
        "dingxi": [{"cityEn": "dingxi", "cityZh": "定西", "id": "CN101160201"}, {
            "cityEn": "tongwei",
            "cityZh": "通渭",
            "id": "CN101160202"
        }, {"cityEn": "longxi", "cityZh": "陇西", "id": "CN101160203"}, {
            "cityEn": "weiyuan",
            "cityZh": "渭源",
            "id": "CN101160204"
        }, {"cityEn": "lintao", "cityZh": "临洮", "id": "CN101160205"}, {
            "cityEn": "zhangxian",
            "cityZh": "漳县",
            "id": "CN101160206"
        }, {"cityEn": "minxian", "cityZh": "岷县", "id": "CN101160207"}, {
            "cityEn": "anding",
            "cityZh": "安定",
            "id": "CN101160208"
        }],
        "pingliang": [{"cityEn": "pingliang", "cityZh": "平凉", "id": "CN101160301"}, {
            "cityEn": "jingchuan",
            "cityZh": "泾川",
            "id": "CN101160302"
        }, {"cityEn": "lingtai", "cityZh": "灵台", "id": "CN101160303"}, {
            "cityEn": "chongxin",
            "cityZh": "崇信",
            "id": "CN101160304"
        }, {"cityEn": "huating", "cityZh": "华亭", "id": "CN101160305"}, {
            "cityEn": "zhuanglang",
            "cityZh": "庄浪",
            "id": "CN101160306"
        }, {"cityEn": "jingning", "cityZh": "静宁", "id": "CN101160307"}, {
            "cityEn": "kongtong",
            "cityZh": "崆峒",
            "id": "CN101160308"
        }],
        "qingyang": [{"cityEn": "qingyang", "cityZh": "庆阳", "id": "CN101160401"}, {
            "cityEn": "huanxian",
            "cityZh": "环县",
            "id": "CN101160403"
        }, {"cityEn": "huachi", "cityZh": "华池", "id": "CN101160404"}, {
            "cityEn": "heshui",
            "cityZh": "合水",
            "id": "CN101160405"
        }, {"cityEn": "zhengning", "cityZh": "正宁", "id": "CN101160406"}, {
            "cityEn": "ningxian",
            "cityZh": "宁县",
            "id": "CN101160407"
        }, {"cityEn": "zhenyuan", "cityZh": "镇原", "id": "CN101160408"}, {
            "cityEn": "qingcheng",
            "cityZh": "庆城",
            "id": "CN101160409"
        }],
        "wuwei": [{"cityEn": "wuwei", "cityZh": "武威", "id": "CN101160501"}, {
            "cityEn": "minqin",
            "cityZh": "民勤",
            "id": "CN101160502"
        }, {"cityEn": "gulang", "cityZh": "古浪", "id": "CN101160503"}, {
            "cityEn": "tianzhu",
            "cityZh": "天祝",
            "id": "CN101160505"
        }],
        "jinchang": [{"cityEn": "jinchang", "cityZh": "金昌", "id": "CN101160601"}, {
            "cityEn": "yongchang",
            "cityZh": "永昌",
            "id": "CN101160602"
        }],
        "zhangye": [{"cityEn": "zhangye", "cityZh": "张掖", "id": "CN101160701"}, {
            "cityEn": "sunan",
            "cityZh": "肃南",
            "id": "CN101160702"
        }, {"cityEn": "minle", "cityZh": "民乐", "id": "CN101160703"}, {
            "cityEn": "linze",
            "cityZh": "临泽",
            "id": "CN101160704"
        }, {"cityEn": "gaotai", "cityZh": "高台", "id": "CN101160705"}, {
            "cityEn": "shandan",
            "cityZh": "山丹",
            "id": "CN101160706"
        }],
        "jiuquan": [{"cityEn": "jiuquan", "cityZh": "酒泉", "id": "CN101160801"}, {
            "cityEn": "jinta",
            "cityZh": "金塔",
            "id": "CN101160803"
        }, {"cityEn": "akesai", "cityZh": "阿克塞", "id": "CN101160804"}, {
            "cityEn": "guazhou",
            "cityZh": "瓜州",
            "id": "CN101160805"
        }, {"cityEn": "subei", "cityZh": "肃北", "id": "CN101160806"}, {
            "cityEn": "yumen",
            "cityZh": "玉门",
            "id": "CN101160807"
        }, {"cityEn": "dunhuang", "cityZh": "敦煌", "id": "CN101160808"}],
        "tianshui": [{"cityEn": "tianshui", "cityZh": "天水", "id": "CN101160901"}, {
            "cityEn": "qingshui",
            "cityZh": "清水",
            "id": "CN101160903"
        }, {"cityEn": "qinan", "cityZh": "秦安", "id": "CN101160904"}, {
            "cityEn": "gangu",
            "cityZh": "甘谷",
            "id": "CN101160905"
        }, {"cityEn": "wushan", "cityZh": "武山", "id": "CN101160906"}, {
            "cityEn": "zhangjiachuan",
            "cityZh": "张家川",
            "id": "CN101160907"
        }, {"cityEn": "maiji", "cityZh": "麦积", "id": "CN101160908"}],
        "longnan": [{"cityEn": "wudu", "cityZh": "武都", "id": "CN101161001"}, {
            "cityEn": "chengxian",
            "cityZh": "成县",
            "id": "CN101161002"
        }, {"cityEn": "wenxian", "cityZh": "文县", "id": "CN101161003"}, {
            "cityEn": "dangchang",
            "cityZh": "宕昌",
            "id": "CN101161004"
        }, {"cityEn": "kangxian", "cityZh": "康县", "id": "CN101161005"}, {
            "cityEn": "xihe",
            "cityZh": "西和",
            "id": "CN101161006"
        }, {"cityEn": "lixian", "cityZh": "礼县", "id": "CN101161007"}, {
            "cityEn": "huixian",
            "cityZh": "徽县",
            "id": "CN101161008"
        }, {"cityEn": "liangdang", "cityZh": "两当", "id": "CN101161009"}],
        "linxia": [{"cityEn": "linxia", "cityZh": "临夏", "id": "CN101161101"}, {
            "cityEn": "kangle",
            "cityZh": "康乐",
            "id": "CN101161102"
        }, {"cityEn": "yongjing", "cityZh": "永靖", "id": "CN101161103"}, {
            "cityEn": "guanghe",
            "cityZh": "广河",
            "id": "CN101161104"
        }, {"cityEn": "hezheng", "cityZh": "和政", "id": "CN101161105"}, {
            "cityEn": "dongxiang",
            "cityZh": "东乡",
            "id": "CN101161106"
        }, {"cityEn": "jishishan", "cityZh": "积石山", "id": "CN101161107"}],
        "gannan": [{"cityEn": "hezuo", "cityZh": "合作", "id": "CN101161201"}, {
            "cityEn": "lintan",
            "cityZh": "临潭",
            "id": "CN101161202"
        }, {"cityEn": "zhuoni", "cityZh": "卓尼", "id": "CN101161203"}, {
            "cityEn": "zhouqu",
            "cityZh": "舟曲",
            "id": "CN101161204"
        }, {"cityEn": "diebu", "cityZh": "迭部", "id": "CN101161205"}, {
            "cityEn": "maqu",
            "cityZh": "玛曲",
            "id": "CN101161206"
        }, {"cityEn": "luqu", "cityZh": "碌曲", "id": "CN101161207"}, {
            "cityEn": "xiahe",
            "cityZh": "夏河",
            "id": "CN101161208"
        }],
        "baiyin": [{"cityEn": "baiyin", "cityZh": "白银", "id": "CN101161301"}, {
            "cityEn": "jingyuan",
            "cityZh": "靖远",
            "id": "CN101161302"
        }, {"cityEn": "huining", "cityZh": "会宁", "id": "CN101161303"}, {
            "cityEn": "pingchuan",
            "cityZh": "平川",
            "id": "CN101161304"
        }, {"cityEn": "jingtai", "cityZh": "景泰", "id": "CN101161305"}],
        "jiayuguan": [{"cityEn": "jiayuguan", "cityZh": "嘉峪关", "id": "CN101161401"}],
        "xining": [{"cityEn": "xining", "cityZh": "西宁", "id": "CN101150101"}, {
            "cityEn": "datong",
            "cityZh": "大通",
            "id": "CN101150102"
        }, {"cityEn": "huangyuan", "cityZh": "湟源", "id": "CN101150103"}, {
            "cityEn": "huangzhong",
            "cityZh": "湟中",
            "id": "CN101150104"
        }],
        "haidong": [{"cityEn": "pingan", "cityZh": "平安", "id": "CN101150201"}, {
            "cityEn": "ledu",
            "cityZh": "乐都",
            "id": "CN101150202"
        }, {"cityEn": "minhe", "cityZh": "民和", "id": "CN101150203"}, {
            "cityEn": "huzhu",
            "cityZh": "互助",
            "id": "CN101150204"
        }, {"cityEn": "hualong", "cityZh": "化隆", "id": "CN101150205"}, {
            "cityEn": "xunhua",
            "cityZh": "循化",
            "id": "CN101150206"
        }],
        "huangnan": [{"cityEn": "tongren", "cityZh": "同仁", "id": "CN101150301"}, {
            "cityEn": "jianzha",
            "cityZh": "尖扎",
            "id": "CN101150302"
        }, {"cityEn": "zeku", "cityZh": "泽库", "id": "CN101150303"}, {
            "cityEn": "henan",
            "cityZh": "河南",
            "id": "CN101150304"
        }],
        "hainan": [{"cityEn": "gonghe", "cityZh": "共和", "id": "CN101150401"}, {
            "cityEn": "guide",
            "cityZh": "贵德",
            "id": "CN101150404"
        }, {"cityEn": "xinghai", "cityZh": "兴海", "id": "CN101150406"}, {
            "cityEn": "guinan",
            "cityZh": "贵南",
            "id": "CN101150407"
        }, {"cityEn": "tongde", "cityZh": "同德", "id": "CN101150408"}],
        "guoluo": [{"cityEn": "maqin", "cityZh": "玛沁", "id": "CN101150501"}, {
            "cityEn": "banma",
            "cityZh": "班玛",
            "id": "CN101150502"
        }, {"cityEn": "gande", "cityZh": "甘德", "id": "CN101150503"}, {
            "cityEn": "dari",
            "cityZh": "达日",
            "id": "CN101150504"
        }, {"cityEn": "jiuzhi", "cityZh": "久治", "id": "CN101150505"}, {
            "cityEn": "madu",
            "cityZh": "玛多",
            "id": "CN101150506"
        }],
        "yushu": [{"cityEn": "yushu", "cityZh": "玉树", "id": "CN101150601"}, {
            "cityEn": "chenduo",
            "cityZh": "称多",
            "id": "CN101150602"
        }, {"cityEn": "zhiduo", "cityZh": "治多", "id": "CN101150603"}, {
            "cityEn": "zaduo",
            "cityZh": "杂多",
            "id": "CN101150604"
        }, {"cityEn": "nangqian", "cityZh": "囊谦", "id": "CN101150605"}, {
            "cityEn": "qumacai",
            "cityZh": "曲麻莱",
            "id": "CN101150606"
        }],
        "haixi": [{"cityEn": "delingha", "cityZh": "德令哈", "id": "CN101150701"}, {
            "cityEn": "tianjun",
            "cityZh": "天峻",
            "id": "CN101150708"
        }, {"cityEn": "wulan", "cityZh": "乌兰", "id": "CN101150709"}, {
            "cityEn": "mangai",
            "cityZh": "茫崖",
            "id": "CN101150712"
        }, {"cityEn": "dachaidan", "cityZh": "大柴旦", "id": "CN101150713"}, {
            "cityEn": "lenghu",
            "cityZh": "冷湖",
            "id": "CN101150716"
        }, {"cityEn": "geermu", "cityZh": "格尔木", "id": "CN101150714"}, {
            "cityEn": "dulan",
            "cityZh": "都兰",
            "id": "CN101150715"
        }],
        "haibei": [{"cityEn": "haiyan", "cityZh": "海晏", "id": "CN101150801"}, {
            "cityEn": "menyuan",
            "cityZh": "门源",
            "id": "CN101150802"
        }, {"cityEn": "qilian", "cityZh": "祁连", "id": "CN101150803"}, {
            "cityEn": "gangcha",
            "cityZh": "刚察",
            "id": "CN101150806"
        }],
        "wulumuqi": [{"cityEn": "wulumuqi", "cityZh": "乌鲁木齐", "id": "CN101130101"}, {
            "cityEn": "xiaoquzi",
            "cityZh": "小渠子",
            "id": "CN101130103"
        }, {"cityEn": "dabancheng", "cityZh": "达坂城", "id": "CN101130105"}, {
            "cityEn": "wulumuqimushizhan",
            "cityZh": "乌鲁木齐牧试站",
            "id": "CN101130108"
        }, {"cityEn": "tianchi", "cityZh": "天池", "id": "CN101130109"}, {
            "cityEn": "baiyanggou",
            "cityZh": "白杨沟",
            "id": "CN101130110"
        }],
        "kelamayi": [{"cityEn": "kelamayi", "cityZh": "克拉玛依", "id": "CN101130201"}, {
            "cityEn": "wuerhe",
            "cityZh": "乌尔禾",
            "id": "CN101130202"
        }, {"cityEn": "baijiantan", "cityZh": "白碱滩", "id": "CN101130203"}],
        "shihezi": [{"cityEn": "shihezi", "cityZh": "石河子", "id": "CN101130301"}, {
            "cityEn": "paotai",
            "cityZh": "炮台",
            "id": "CN101130302"
        }, {"cityEn": "mosuowan", "cityZh": "莫索湾", "id": "CN101130303"}],
        "changji": [{"cityEn": "changji", "cityZh": "昌吉", "id": "CN101130401"}, {
            "cityEn": "hutubi",
            "cityZh": "呼图壁",
            "id": "CN101130402"
        }, {"cityEn": "miquan", "cityZh": "米泉", "id": "CN101130403"}, {
            "cityEn": "fukang",
            "cityZh": "阜康",
            "id": "CN101130404"
        }, {"cityEn": "jimusaer", "cityZh": "吉木萨尔", "id": "CN101130405"}, {
            "cityEn": "qitai",
            "cityZh": "奇台",
            "id": "CN101130406"
        }, {"cityEn": "manasi", "cityZh": "玛纳斯", "id": "CN101130407"}, {
            "cityEn": "mulei",
            "cityZh": "木垒",
            "id": "CN101130408"
        }, {"cityEn": "caijiahu", "cityZh": "蔡家湖", "id": "CN101130409"}],
        "tulufan": [{"cityEn": "tulufan", "cityZh": "吐鲁番", "id": "CN101130501"}, {
            "cityEn": "tuokexun",
            "cityZh": "托克逊",
            "id": "CN101130502"
        }, {"cityEn": "shanshan", "cityZh": "鄯善", "id": "CN101130504"}],
        "bayinguoleng": [{"cityEn": "kuerle", "cityZh": "库尔勒", "id": "CN101130601"}, {
            "cityEn": "luntai",
            "cityZh": "轮台",
            "id": "CN101130602"
        }, {"cityEn": "yuli", "cityZh": "尉犁", "id": "CN101130603"}, {
            "cityEn": "ruoqiang",
            "cityZh": "若羌",
            "id": "CN101130604"
        }, {"cityEn": "qiemo", "cityZh": "且末", "id": "CN101130605"}, {
            "cityEn": "hejing",
            "cityZh": "和静",
            "id": "CN101130606"
        }, {"cityEn": "yanqi", "cityZh": "焉耆", "id": "CN101130607"}, {
            "cityEn": "shuo",
            "cityZh": "和硕",
            "id": "CN101130608"
        }, {"cityEn": "bayinbuluke", "cityZh": "巴音布鲁克", "id": "CN101130610"}, {
            "cityEn": "tieganlike",
            "cityZh": "铁干里克",
            "id": "CN101130611"
        }, {"cityEn": "bohu", "cityZh": "博湖", "id": "CN101130612"}, {
            "cityEn": "tazhong",
            "cityZh": "塔中",
            "id": "CN101130613"
        }, {"cityEn": "baluntai", "cityZh": "巴仑台", "id": "CN101130614"}],
        "alaer": [{"cityEn": "alaer", "cityZh": "阿拉尔", "id": "CN101130701"}],
        "akesu": [{"cityEn": "akesu", "cityZh": "阿克苏", "id": "CN101130801"}, {
            "cityEn": "wushi",
            "cityZh": "乌什",
            "id": "CN101130802"
        }, {"cityEn": "wensu", "cityZh": "温宿", "id": "CN101130803"}, {
            "cityEn": "baicheng",
            "cityZh": "拜城",
            "id": "CN101130804"
        }, {"cityEn": "xinhe", "cityZh": "新和", "id": "CN101130805"}, {
            "cityEn": "shaya",
            "cityZh": "沙雅",
            "id": "CN101130806"
        }, {"cityEn": "kuche", "cityZh": "库车", "id": "CN101130807"}, {
            "cityEn": "keping",
            "cityZh": "柯坪",
            "id": "CN101130808"
        }, {"cityEn": "awati", "cityZh": "阿瓦提", "id": "CN101130809"}],
        "kashi": [{"cityEn": "kashi", "cityZh": "喀什", "id": "CN101130901"}, {
            "cityEn": "yingjisha",
            "cityZh": "英吉沙",
            "id": "CN101130902"
        }, {"cityEn": "tashikuergan", "cityZh": "塔什库尔干", "id": "CN101130903"}, {
            "cityEn": "maigaiti",
            "cityZh": "麦盖提",
            "id": "CN101130904"
        }, {"cityEn": "shache", "cityZh": "莎车", "id": "CN101130905"}, {
            "cityEn": "yecheng",
            "cityZh": "叶城",
            "id": "CN101130906"
        }, {"cityEn": "zepu", "cityZh": "泽普", "id": "CN101130907"}, {
            "cityEn": "bachu",
            "cityZh": "巴楚",
            "id": "CN101130908"
        }, {"cityEn": "yuepuhu", "cityZh": "岳普湖", "id": "CN101130909"}, {
            "cityEn": "jiashi",
            "cityZh": "伽师",
            "id": "CN101130910"
        }, {"cityEn": "shufu", "cityZh": "疏附", "id": "CN101130911"}, {
            "cityEn": "shule",
            "cityZh": "疏勒",
            "id": "CN101130912"
        }],
        "yili": [{"cityEn": "yining", "cityZh": "伊宁", "id": "CN101131001"}, {
            "cityEn": "chabuchaer",
            "cityZh": "察布查尔",
            "id": "CN101131002"
        }, {"cityEn": "nileke", "cityZh": "尼勒克", "id": "CN101131003"}, {
            "cityEn": "yiningxian",
            "cityZh": "伊宁县",
            "id": "CN101131004"
        }, {"cityEn": "gongliu", "cityZh": "巩留", "id": "CN101131005"}, {
            "cityEn": "xinyuan",
            "cityZh": "新源",
            "id": "CN101131006"
        }, {"cityEn": "zhaosu", "cityZh": "昭苏", "id": "CN101131007"}, {
            "cityEn": "tekesi",
            "cityZh": "特克斯",
            "id": "CN101131008"
        }, {"cityEn": "huocheng", "cityZh": "霍城", "id": "CN101131009"}, {
            "cityEn": "huoerguosi",
            "cityZh": "霍尔果斯",
            "id": "CN101131010"
        }, {"cityEn": "kuitunshi", "cityZh": "奎屯", "id": "CN101131011"}],
        "tacheng": [{"cityEn": "tacheng", "cityZh": "塔城", "id": "CN101131101"}, {
            "cityEn": "yumin",
            "cityZh": "裕民",
            "id": "CN101131102"
        }, {"cityEn": "emin", "cityZh": "额敏", "id": "CN101131103"}, {
            "cityEn": "hebukesaier",
            "cityZh": "和布克赛尔",
            "id": "CN101131104"
        }, {"cityEn": "tuoli", "cityZh": "托里", "id": "CN101131105"}, {
            "cityEn": "wusu",
            "cityZh": "乌苏",
            "id": "CN101131106"
        }, {"cityEn": "shawan", "cityZh": "沙湾", "id": "CN101131107"}],
        "hami": [{"cityEn": "hami", "cityZh": "哈密", "id": "CN101131201"}, {
            "cityEn": "balikun",
            "cityZh": "巴里坤",
            "id": "CN101131203"
        }, {"cityEn": "yiwu", "cityZh": "伊吾", "id": "CN101131204"}],
        "hetian": [{"cityEn": "hetian", "cityZh": "和田", "id": "CN101131301"}, {
            "cityEn": "pishan",
            "cityZh": "皮山",
            "id": "CN101131302"
        }, {"cityEn": "cele", "cityZh": "策勒", "id": "CN101131303"}, {
            "cityEn": "moyu",
            "cityZh": "墨玉",
            "id": "CN101131304"
        }, {"cityEn": "luopu", "cityZh": "洛浦", "id": "CN101131305"}, {
            "cityEn": "minfeng",
            "cityZh": "民丰",
            "id": "CN101131306"
        }, {"cityEn": "yutian", "cityZh": "于田", "id": "CN101131307"}],
        "aletai": [{"cityEn": "aletai", "cityZh": "阿勒泰", "id": "CN101131401"}, {
            "cityEn": "habahe",
            "cityZh": "哈巴河",
            "id": "CN101131402"
        }, {"cityEn": "jimunai", "cityZh": "吉木乃", "id": "CN101131405"}, {
            "cityEn": "buerjin",
            "cityZh": "布尔津",
            "id": "CN101131406"
        }, {"cityEn": "fuhai", "cityZh": "福海", "id": "CN101131407"}, {
            "cityEn": "fuyun",
            "cityZh": "富蕴",
            "id": "CN101131408"
        }, {"cityEn": "qinghe", "cityZh": "青河", "id": "CN101131409"}],
        "kezhou": [{"cityEn": "atushi", "cityZh": "阿图什", "id": "CN101131501"}, {
            "cityEn": "wuqia",
            "cityZh": "乌恰",
            "id": "CN101131502"
        }, {"cityEn": "aketao", "cityZh": "阿克陶", "id": "CN101131503"}, {
            "cityEn": "aheqi",
            "cityZh": "阿合奇",
            "id": "CN101131504"
        }],
        "boertala": [{"cityEn": "bole", "cityZh": "博乐", "id": "CN101131601"}, {
            "cityEn": "wenquan",
            "cityZh": "温泉",
            "id": "CN101131602"
        }, {"cityEn": "jinghe", "cityZh": "精河", "id": "CN101131603"}, {
            "cityEn": "alashankou",
            "cityZh": "阿拉山口",
            "id": "CN101131606"
        }]
    }
};

module.exports.cjson = cjson