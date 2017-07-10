/**
 * Created by wjf on 2017/6/26.
 */

var crmurl = 'http://172.16.199.129:8015/PORTAL/CRM/crm/services/appService';

/**
 * CRM_findPersonCustInfoList的报文
 * @param num 分页查询当前页面
 * @param size 分页查询每页数量
 * @param iptpCd 查询类型 01--公司客户查询 02--个人客户查询
 * @param cstId 客户编号
 * @param ipNm 客户名称
 * @param ipidTpcd 证件类型
 * @param ipidNo 证件号码
 * @returns {string}
 * @constructor
 */
function CRM_findPersonCustInfoList(num, size, iptpCd, cstId, ipNm, ipidTpcd, ipidNo){
    return '<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Header><RequestSOAPHeader xmlns="http://service.jinyuan.com"><TX_NO>CRM_findPersonCustInfoList</TX_NO></RequestSOAPHeader></soap:Header><soap:Body><ns2:findPersonCustInfoList xmlns:ns2="http://webService.app.com/"><arg0>'+num+'</arg0><arg1>'+size+'</arg1><arg2>'+iptpCd+'</arg2><arg3>'+cstId+'</arg3><arg4>'+ipNm+'</arg4><arg5>'+ipidTpcd+'</arg5><arg6>'+ipidNo+'</arg6></ns2:findPersonCustInfoList></soap:Body></soap:Envelope>';
}

/**
 * CRM_findPersonViewInfoList的报文
 * @param searchtype 查找类型 1--公司  2--个人
 * @param actiontype 类型方法
 * @param ipId 参与人编号
 * @param cstId 客户编号
 * @param num 分页查询当前页面
 * @param size 分页查询每页数量
 * @returns {string}
 * @constructor
 */
function CRM_findPersonViewInfoList(searchtype, actiontype, ipId, cstId, num, size){
    return '<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Header><RequestSOAPHeader xmlns="http://service.jinyuan.com"><TX_NO>CRM_findPersonViewInfoList</TX_NO></RequestSOAPHeader></soap:Header><soap:Body><ns2:findPersonViewInfoList xmlns:ns2="http://webService.app.com/"><arg0>'+searchtype+'</arg0><arg1>'+actiontype+'</arg1><arg2>'+ipId+'</arg2><arg3>'+cstId+'</arg3><arg4>'+num+'</arg4><arg5>'+size+'</arg5></ns2:findPersonViewInfoList></soap:Body></soap:Envelope>';
}

/**
 * ajax的jsonp调用方法
 * @param date 传输的报文
 * @param url 地址路径
 * @param success 成功后调用的方法
 * @constructor
 */
function Ajax_jsonp(date, url, success){
    $.ajax({
        url: url,
        dataType: 'jsonp',
        type: 'post',
        data: date,
        success: function (data) {
            var msg = getJson(data.msg);
            success(msg);
        },
        error: function (rt) {
            alert("网络连接失败，请检查网络连接");
        }
    });
}

/**
 * 获取Json对象
 * @param value 返回的XML报文内容
 * @returns {*}
 */
function getJson (value){
    var s = value.split('<return>');
    if(s.length != 1){
        var ss = s[1].split('</return>');
        console.log(ss[0]);
        var val = eval('(' + ss[0] + ')');
        return val;
    }
}

/**
 * type:类型对应:
 * 0025--联系渠道
 * 0024--电话类型
 * 0040--市代码
 * 0039--省、地区代码
 * 0021--地址类型
 * 0001--对私证件类型;
 * 0012--结婚状态
 * 0009--学历
 * 0018--政治面貌
 * 0013--宗教信仰
 * 0015--居住情况
 * 0016--经济来源
 * 0017--子女情况
 * 0011--国籍
 * select--选择：1-是 2-否
 * sex--性别： 1-男 2-女
 * @param type
 * @param value
 * @returns {*}
 */
function type_value (type, value){
    switch (type) {
        case '0025':
            switch (value){
                case '04': return '传真';
                case '03': return '邮箱';
                case '02': return 'QQ';
            }
        case '0024':
            switch (value){
                case '04': return '企业联系方式';
                case '03': return '办公联系方式';
                case '02': return '个人联系方式';
                case '01': return '首要联系方式';
            }
        case '0040':
            switch (value){
                case '820200': return '离岛';
                case '820100': return '澳门半岛';
                case '810300': return '新界';
                case '810200': return '九龙';
                case '810100': return '香港岛';
                case '712700': return '澎湖县';
                case '712600': return '花莲县';
                case '712500': return '台东县';
                case '712400': return '屏东县';
                case '712100': return '云林县';
                case '711900': return '嘉义县';
                case '711700': return '彰化县';
                case '711500': return '苗栗县';
                case '711400': return '桃园县';
                case '711300': return '新竹县';
                case '711200': return '宜兰县';
                case '711100': return '新北市';
                case '710900': return '嘉义市';
                case '710800': return '新竹市';
                case '710700': return '基隆市';
                case '710600': return '南投县';
                case '710500': return '金门县';
                case '710400': return '台中市';
                case '710300': return '台南市';
                case '710200': return '高雄市';
                case '710100': return '台北市';
                case '659000': return '自治区直辖县级行政区划';
                case '654300': return '阿勒泰地区';
                case '654200': return '塔城地区';
                case '654000': return '伊犁哈萨克自治州';
                case '653200': return '和田地区';
                case '653100': return '喀什地区';
                case '653000': return '克孜勒苏柯尔克孜自治州';
                case '652900': return '阿克苏地区';
                case '652800': return '巴音郭楞蒙古自治州';
                case '652700': return '博尔塔拉蒙古自治州';
                case '652300': return '昌吉回族自治州';
                case '652200': return '哈密地区';
                case '652100': return '吐鲁番地区';
                case '650200': return '克拉玛依市';
                case '650100': return '乌鲁木齐市';
                case '640500': return '中卫市';
                case '640400': return '固原市';
                case '640300': return '吴忠市';
                case '640200': return '石嘴山市';
                case '640100': return '银川市';
                case '632800': return '海西蒙古族藏族自治州';
                case '632700': return '玉树藏族自治州';
                case '632600': return '果洛藏族自治州';
                case '632500': return '海南藏族自治州';
                case '632300': return '黄南藏族自治州';
                case '632200': return '海北藏族自治州';
                case '632100': return '海东地区';
                case '630200': return '海东市';
                case '630100': return '西宁市';
                case '623000': return '甘南藏族自治州';
                case '622900': return '临夏回族自治州';
                case '621200': return '陇南市';
                case '621100': return '定西市';
                case '621000': return '庆阳市';
                case '620900': return '酒泉市';
                case '620800': return '平凉市';
                case '620700': return '张掖市';
                case '620600': return '武威市';
                case '620500': return '天水市';
                case '620400': return '白银市';
                case '620300': return '金昌市';
                case '620200': return '嘉峪关市';
                case '620100': return '兰州市';
                case '611000': return '商洛市';
                case '610900': return '安康市';
                case '610800': return '榆林市';
                case '610700': return '汉中市';
                case '610600': return '延安市';
                case '610500': return '渭南市';
                case '610400': return '咸阳市';
                case '610300': return '宝鸡市';
                case '610200': return '铜川市';
                case '610100': return '西安市';
                case '542600': return '林芝地区';
                case '542500': return '阿里地区';
                case '542400': return '那曲地区';
                case '542300': return '日喀则地区';
                case '542200': return '山南地区';
                case '542100': return '昌都地区';
                case '540200': return '日喀则市';
                case '540100': return '拉萨市';
                case '533400': return '迪庆藏族自治州';
                case '533300': return '怒江傈僳族自治州';
                case '533100': return '德宏傣族景颇族自治州';
                case '532900': return '大理白族自治州';
                case '532800': return '西双版纳傣族自治州';
                case '532600': return '文山壮族苗族自治州';
                case '532500': return '红河哈尼族彝族自治州';
                case '532300': return '楚雄彝族自治州';
                case '530900': return '临沧市';
                case '530800': return '普洱市';
                case '530700': return '丽江市';
                case '530600': return '昭通市';
                case '530500': return '保山市';
                case '530400': return '玉溪市';
                case '530300': return '曲靖市';
                case '530100': return '昆明市';
                case '522700': return '黔南布依族苗族自治州';
                case '522600': return '黔东南苗族侗族自治州';
                case '522300': return '黔西南布依族苗族自治州';
                case '520600': return '铜仁市';
                case '520500': return '毕节市';
                case '520400': return '安顺市';
                case '520300': return '遵义市';
                case '520200': return '六盘水市';
                case '520100': return '贵阳市';
                case '513400': return '凉山彝族自治州';
                case '513300': return '甘孜藏族自治州';
                case '513200': return '阿坝藏族羌族自治州';
                case '512000': return '资阳市';
                case '511900': return '巴中市';
                case '511800': return '雅安市';
                case '511700': return '达州市';
                case '511600': return '广安市';
                case '511500': return '宜宾市';
                case '511400': return '眉山市';
                case '511300': return '南充市';
                case '511100': return '乐山市';
                case '511000': return '内江市';
                case '510900': return '遂宁市';
                case '510800': return '广元市';
                case '510700': return '绵阳市';
                case '510600': return '德阳市';
                case '510500': return '泸州市';
                case '510400': return '攀枝花市';
                case '510300': return '自贡市';
                case '510100': return '成都市';
                case '500200': return '县';
                case '500100': return '市辖区';
                case '469000': return '省直辖县级行政区划';
                case '460300': return '三沙市';
                case '460200': return '三亚市';
                case '460100': return '海口市';
                case '451400': return '崇左市';
                case '451300': return '来宾市';
                case '451200': return '河池市';
                case '451100': return '贺州市';
                case '451000': return '百色市';
                case '450900': return '玉林市';
                case '450800': return '贵港市';
                case '450700': return '钦州市';
                case '450600': return '防城港市';
                case '450500': return '北海市';
                case '450400': return '梧州市';
                case '450300': return '桂林市';
                case '450200': return '柳州市';
                case '450100': return '南宁市';
                case '445300': return '云浮市';
                case '445200': return '揭阳市';
                case '445100': return '潮州市';
                case '442000': return '中山市';
                case '441900': return '东莞市';
                case '441800': return '清远市';
                case '441700': return '阳江市';
                case '441600': return '河源市';
                case '441500': return '汕尾市';
                case '441400': return '梅州市';
                case '441300': return '惠州市';
                case '441200': return '肇庆市';
                case '440900': return '茂名市';
                case '440800': return '湛江市';
                case '440700': return '江门市';
                case '440600': return '佛山市';
                case '440500': return '汕头市';
                case '440400': return '珠海市';
                case '440300': return '深圳市';
                case '440200': return '韶关市';
                case '440100': return '广州市';
                case '433100': return '湘西土家族苗族自治州';
                case '431300': return '娄底市';
                case '431200': return '怀化市';
                case '431100': return '永州市';
                case '431000': return '郴州市';
                case '430900': return '益阳市';
                case '430800': return '张家界市';
                case '430700': return '常德市';
                case '430600': return '岳阳市';
                case '430500': return '邵阳市';
                case '430400': return '衡阳市';
                case '430300': return '湘潭市';
                case '430200': return '株洲市';
                case '430100': return '长沙市';
                case '429000': return '省直辖县级行政区划';
                case '422800': return '恩施土家族苗族自治州';
                case '421300': return '随州市';
                case '421200': return '咸宁市';
                case '421100': return '黄冈市';
                case '421000': return '荆州市';
                case '420900': return '孝感市';
                case '420800': return '荆门市';
                case '420700': return '鄂州市';
                case '420600': return '襄阳市';
                case '420500': return '宜昌市';
                case '420300': return '十堰市';
                case '420200': return '黄石市';
                case '420100': return '武汉市';
                case '419000': return '省直辖县级行政区划';
                case '411700': return '驻马店市';
                case '411600': return '周口市';
                case '411500': return '信阳市';
                case '411400': return '商丘市';
                case '411300': return '南阳市';
                case '411200': return '三门峡市';
                case '411100': return '漯河市';
                case '411000': return '许昌市';
                case '410900': return '濮阳市';
                case '410800': return '焦作市';
                case '410700': return '新乡市';
                case '410600': return '鹤壁市';
                case '410500': return '安阳市';
                case '410400': return '平顶山市';
                case '410300': return '洛阳市';
                case '410200': return '开封市';
                case '410100': return '郑州市';
                case '371700': return '菏泽市';
                case '371600': return '滨州市';
                case '371500': return '聊城市';
                case '371400': return '德州市';
                case '371300': return '临沂市';
                case '371200': return '莱芜市';
                case '371100': return '日照市';
                case '371000': return '威海市';
                case '370900': return '泰安市';
                case '370800': return '济宁市';
                case '370700': return '潍坊市';
                case '370600': return '烟台市';
                case '370500': return '东营市';
                case '370400': return '枣庄市';
                case '370300': return '淄博市';
                case '370200': return '青岛市';
                case '370100': return '济南市';
                case '361100': return '上饶市';
                case '361000': return '抚州市';
                case '360900': return '宜春市';
                case '360800': return '吉安市';
                case '360700': return '赣州市';
                case '360600': return '鹰潭市';
                case '360500': return '新余市';
                case '360400': return '九江市';
                case '360300': return '萍乡市';
                case '360200': return '景德镇市';
                case '360100': return '南昌市';
                case '350900': return '宁德市';
                case '350800': return '龙岩市';
                case '350700': return '南平市';
                case '350600': return '漳州市';
                case '350500': return '泉州市';
                case '350400': return '三明市';
                case '350300': return '莆田市';
                case '350200': return '厦门市';
                case '350100': return '福州市';
                case '341800': return '宣城市';
                case '341700': return '池州市';
                case '341600': return '亳州市';
                case '341500': return '六安市';
                case '341300': return '宿州市';
                case '341200': return '阜阳市';
                case '341100': return '滁州市';
                case '341000': return '黄山市';
                case '340800': return '安庆市';
                case '340700': return '铜陵市';
                case '340600': return '淮北市';
                case '340500': return '马鞍山市';
                case '340400': return '淮南市';
                case '340300': return '蚌埠市';
                case '340200': return '芜湖市';
                case '340100': return '合肥市';
                case '331100': return '丽水市';
                case '331000': return '台州市';
                case '330900': return '舟山市';
                case '330800': return '衢州市';
                case '330700': return '金华市';
                case '330600': return '绍兴市';
                case '330500': return '湖州市';
                case '330400': return '嘉兴市';
                case '330300': return '温州市';
                case '330200': return '宁波市';
                case '330100': return '杭州市';
                case '321300': return '宿迁市';
                case '321200': return '泰州市';
                case '321100': return '镇江市';
                case '321000': return '扬州市';
                case '320900': return '盐城市';
                case '320800': return '淮安市';
                case '320700': return '连云港市';
                case '320600': return '南通市';
                case '320500': return '苏州市';
                case '320400': return '常州市';
                case '320300': return '徐州市';
                case '320200': return '无锡市';
                case '320100': return '南京市';
                case '310200': return '县';
                case '310100': return '市辖区';
                case '232700': return '大兴安岭地区';
                case '231200': return '绥化市';
                case '231100': return '黑河市';
                case '231000': return '牡丹江市';
                case '230900': return '七台河市';
                case '230800': return '佳木斯市';
                case '230700': return '伊春市';
                case '230600': return '大庆市';
                case '230500': return '双鸭山市';
                case '230400': return '鹤岗市';
                case '230300': return '鸡西市';
                case '230200': return '齐齐哈尔市';
                case '230100': return '哈尔滨市';
                case '222400': return '延边朝鲜族自治州';
                case '220800': return '白城市';
                case '220700': return '松原市';
                case '220600': return '白山市';
                case '220500': return '通化市';
                case '220400': return '辽源市';
                case '220300': return '四平市';
                case '220200': return '吉林市';
                case '220100': return '长春市';
                case '211400': return '葫芦岛市';
                case '211300': return '朝阳市';
                case '211200': return '铁岭市';
                case '211100': return '盘锦市';
                case '211000': return '辽阳市';
                case '210900': return '阜新市';
                case '210800': return '营口市';
                case '210700': return '锦州市';
                case '210600': return '丹东市';
                case '210500': return '本溪市';
                case '210400': return '抚顺市';
                case '210300': return '鞍山市';
                case '210200': return '大连市';
                case '210100': return '沈阳市';
                case '152900': return '阿拉善盟';
                case '152500': return '锡林郭勒盟';
                case '152200': return '兴安盟';
                case '150900': return '乌兰察布市';
                case '150800': return '巴彦淖尔市';
                case '150700': return '呼伦贝尔市';
                case '150600': return '鄂尔多斯市';
                case '150500': return '通辽市';
                case '150400': return '赤峰市';
                case '150300': return '乌海市';
                case '150200': return '包头市';
                case '150100': return '呼和浩特市';
                case '141100': return '吕梁市';
                case '141000': return '临汾市';
                case '140900': return '忻州市';
                case '140800': return '运城市';
                case '140700': return '晋中市';
                case '140600': return '朔州市';
                case '140500': return '晋城市';
                case '140400': return '长治市';
                case '140300': return '阳泉市';
                case '140200': return '大同市';
                case '140100': return '太原市';
                case '131100': return '衡水市';
                case '131000': return '廊坊市';
                case '130900': return '沧州市';
                case '130800': return '承德市';
                case '130700': return '张家口市';
                case '130600': return '保定市';
                case '130500': return '邢台市';
                case '130400': return '邯郸市';
                case '130300': return '秦皇岛市';
                case '130200': return '唐山市';
                case '130100': return '石家庄市';
                case '120200': return '县';
                case '120100': return '市辖区';
                case '110200': return '县';
                case '110100': return '市辖区';
            }
        case '0039':
            switch (value){
                case '820000': return '澳门特别行政区';
                case '810000': return '香港特别行政区';
                case '710000': return '台湾省';
                case '650000': return '新疆维吾尔自治区';
                case '640000': return '宁夏回族自治区';
                case '630000': return '青海省';
                case '620000': return '甘肃省';
                case '610000': return '陕西省';
                case '540000': return '西藏自治区';
                case '530000': return '云南省';
                case '520000': return '贵州省';
                case '510000': return '四川省';
                case '500000': return '重庆市';
                case '460000': return '海南省';
                case '450000': return '广西壮族自治区';
                case '440000': return '广东省';
                case '430000': return '湖南省';
                case '420000': return '湖北省';
                case '410000': return '河南省';
                case '370000': return '山东省';
                case '360000': return '江西省';
                case '350000': return '福建省';
                case '340000': return '安徽省';
                case '330000': return '浙江省';
                case '320000': return '江苏省';
                case '310000': return '上海市';
                case '230000': return '黑龙江省';
                case '220000': return '吉林省';
                case '210000': return '辽宁省';
                case '150000': return '内蒙古自治区';
                case '140000': return '山西省';
                case '130000': return '河北省';
                case '120000': return '天津市';
                case '110000': return '北京市';
            }
        case '0021':
            switch (value){
                case '0160399': return '其他物理地址';
                case '0160309': return '实际经营地址';
                case '0160308': return '注册地址';
                case '0160307': return '户籍地址';
                case '0160306': return '办公地址';
                case '0160305': return '单位地址';
                case '0160304': return '暂住地址';
                case '0160303': return '居住地址';
                case '0160302': return '通讯地址';
            }
        case '0001':
            switch (value) {
                case '1010': return '身份证';
                case '1011': return '临时居民身份证';
                case '1020': return '军人身份证件';
                case '1050': return '护照';
                case '1052': return '外国护照';
                case '1070': return '港澳通行证';
                case '1120': return '外国人居留证';
                case '1700': return '外国身份证';
                case '1999': return '其他证件（个人）';
            }
        case '0012':
            switch (value){
                case '20': return '已婚';
                case '10': return '未婚';
            }
        case '0009':
            switch (value){
                case '100': return '文盲或半文盲';
                case '090': return '小学';
                case '080': return '初中';
                case '070': return '高中';
                case '060': return '技工学校';
                case '042': return '专科';
                case '030': return '本科';
                case '024': return '双学士';
                case '020': return '硕士';
                case '011': return '博士后';
                case '010': return '博士';
            }
        case '0018':
            switch (value){
                case '13': return '群众';
                case '12': return '无党派';
                case '11': return '台盟';
                case '10': return '九三学社';
                case '09': return '致公党';
                case '08': return '农工党';
                case '07': return '民进';
                case '06': return '民建';
                case '05': return '民盟';
                case '04': return '民革';
                case '03': return '团员';
                case '02': return '预备党员';
                case '01': return '党员';
            }
        case '0013':
            switch (value){
                case '9999': return '未定义';
                case '9900': return '其他';
                case '0600': return '伊斯兰教';
                case '0502': return '正一派';
                case '0501': return '全真派';
                case '0500': return '道教';
                case '0403': return '南传佛教';
                case '0402': return '藏传佛教';
                case '0401': return '汉传佛教';
                case '0400': return '佛教';
                case '0300': return '天主教';
                case '0200': return '基督教';
                case '0100': return '无宗教信仰';
            }
        case '0015':
            switch (value){
                case '99': return '其他';
                case '60': return '共有住房';
                case '51': return '廉租房';
                case '50': return '租房';
                case '40': return '集体宿舍';
                case '30': return '与亲属合住';
                case '22': return '商业贷款购房';
                case '21': return '公积金贷款购房';
                case '20': return '贷款购房';
                case '10': return '自有住房';
            }
        case '0016':
            switch (value){
                case '99': return '其他非工资性收入';
                case '03': return '投资收益收入';
                case '02': return '个体经营者经营收入';
                case '01': return '工资收入';
            }
        case '0017':
            switch (value){
                case '20': return '有子女';
                case '10': return '无子女';
            }
        case '0011':
            switch (value){
                case '999': return '其他国家和地区';
                case '840': return '美国';
                case '826': return '英国';
                case '504': return '印度';
                case '502': return '502';
                case '496': return '蒙古';
                case '446': return '澳门';
                case '410': return '韩国';
                case '408': return '朝鲜';
                case '392': return '392';
                case '344': return '香港';
                case '276': return '德国';
                case '250': return '法国';
                case '158': return '台湾';
                case '台湾': return '中国';
            }
        case 'select':
            switch (value){
                case '1': return '是';
                case '2': return '否';
            }
        case 'sex':
            switch (value){
                case '1': return '男';
                case '2': return '女';
            }
    }
}