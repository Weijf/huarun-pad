angular.module("companycustomer.controller",[])
    .controller("companyCustomerCtrl", function($scope,$state, $ionicSideMenuDelegate,$ionicHistory) {
        $scope.goBack = function() {
            $state.go("foot.index");
        };
        $scope.cusItemClick = function(item) {
            var cus = angular.toJson(item);
            $state.go("companyCustomerInfo", {
                data: cus
            }, {
                reload: true
            });
        };
        $scope.items = [{
            name: "金圆信托咨询管理有限公司",
            statusrc: 'img/companycustomer/customer.png',
            no: '1234567897897898',
            id: '3166562656656535',
            cardType: '组织机构代码证'
        }, {
            name: "厦门金圆担保公司",
            statusrc: 'img/companycustomer/customer.png',
            no: '1234567897897898',
            id: '3166562656656535',
            cardType: '营业执照'
        }, {
            name: "厦门金圆投资公司",
            statusrc: 'img/companycustomer/customer.png',
            no: '1234567897897898',
            id: '3166562656656535',
            cardType: '商业登记证'
        }];

        $scope.cardTypes = [
            { id: "0001",name: "营业执照" },
            { id: "0002",name: "组织机构代码证" },
            { id: "0003",name: "商业登记证" },
            { id: "0004",name: "统一社会信用代码" },
            { id: "0005",name: "金融许可证" },
            { id: "0006",name: "事业法人登记证书" },
            { id: "0007",name: "民办非企业登记证书" },
            { id: "0008",name: "经营保险业务许可证" },
            { id: "0009",name: "经营证券业务许可证" },
            { id: "0010",name: "国家主管部门颁发的外国驻华机构批文" },
            { id: "0011",name: "国家登记机关颁发的外资企业驻华代表、办事处登记证" },
            { id: "0012",name: "境外合法注册成立的证明文件" },
            { id: "0013",name: "其他登记注册证件" },
            { id: "0014",name: "税务登记证" },
        ];
        $scope.toggleRight = function() {
            $ionicSideMenuDelegate.toggleRight();
        };
        $scope.func_reset = function() {
            document.getElementById("cusNO").value="";
            document.getElementById("cusName").value="";
            document.getElementById("cardType").value="";
            document.getElementById("cardId").value="";
        };

        $scope.func_ok = function() {
            $ionicSideMenuDelegate.toggleRight();
        };
    })
    .controller("companyCustomerInfoCtrl", function($scope, $state,$stateParams, $ionicSideMenuDelegate,$ionicSlideBoxDelegate,$ionicScrollDelegate) {
        var cus = angular.fromJson($stateParams.data);
        $scope.title = cus.title;
        $scope.imgsrc = cus.statusrc;
        $scope.scollTabIndex=0;
        var _maxWidth = 0;//document.getElementById("scroll_tab_div").offsetWidth;
        var _oneWidth = _maxWidth/3;
        if(_maxWidth>350){
            _oneWidth = _maxWidth/4;
        }
        $scope.activeScollTab=function(index){
            $scope.scollTabIndex=index;
            if(index>1){
                $ionicScrollDelegate.scrollTo(_oneWidth*(index-1),0,true);
            }else{
                $ionicScrollDelegate.scrollTo(0,0,true);
            }
        };
        $scope.slideChange=function(index){
            $scope.scollTabIndex=index;
            $ionicSlideBoxDelegate.slide(index);
        };
        $scope.goBack = function() {
            $state.go("companyCustomerList");
        };

        $scope.basics = [
            {label: '客户法定名称',info: cus.name},
            {label: '客户编号',info: cus.no},
            {label: '客户简称',info: '丁'},
            {label: '主证件类型',info: cus.cardType},
            {label: '主证件号码',info: cus.id},
            {label: '客户管户机构',info: '厦门金圆产业发展有限公司'},
            {label: '客户管户人员',info: '丁亮'},
            {label: '行业类型',info: '林业'},
            {label: '企业规模',info: '中型'},
            {label: '组织性质',info: '有限合伙'},
            {label: '员工人数范围',info: '10-19人'},
            {label: '成立日期',info: '2016-03-05'},
            {label: '注册资本金额（万元）',info: '23000'},
            {label: '注册资本币种',info: '人民币元'},
            {label: '具备法人资格标志',info: '是'},
            {label: '企业注册人经济成分',info: '公有经济'},
            {label: '高新技术企业标志',info: '是'},
            {label: '上市企业标志',info: '是'},
            {label: '台资企业标志',info: '是'},
            {label: '外地常设机构标志',info: '是'},
            {label: '特殊经济区类型',info: '出口加工区'},
            {label: '特殊经济区企业标志',info: '是'},
            {label: '组织经营范围描述',info: '林木加工业'},
        ];
        $scope.cardInfos = [
            {isMain: '是',type: '营业执照',pubC:'中国',no:'3366526',sDate:'2017-02-03',eDate:'2019-02-02',pubP:'厦门',pubG:'工商局'},
        ];
        $scope.unitRelationA = [
            {type: '固定',country:'中国',sheng:'福建',city:'厦门',qx:'思明区',address:'会展西路',zipCode:'360000'},
        ];
        $scope.unitRelationB = [
            {type: '固话',QH:'0592',tel:'6596596',tel_no:'008'},
        ];
        $scope.unitRelationC = [
            {type: '是',address: 'jy@jy.com'},
        ];
        $scope.relations = [
            {type: '固定',name:'陈立军',tel:'13966569656',email:'jy000@jy.com',cardType:'身份证',cardNO:'302362198803056324',relationJob:'职员'},
        ];
        $scope.correlations = [
            {name:'金圆子公司',type: '子公司',no:'665268565'},
        ];
        $scope.partners = [
            {name:'金圆子公司',money: '2000',percent:'20',sign:'是'},
        ];
        $scope.assets = [
            {no:'365236',type: '固定资产',money:'300',desc:'服务器'},
            {no:'236532',type: '固定资产',money:'72',desc:'办公用品'},
        ];
        $scope.evaluates = [
            {desc:'不良',date: '2017-01-23',reason:'逾期'},
            {desc:'不良',date: '2017-01-23',reason:'逾期'},
        ];
        $scope.managers = [
            {name:'厦门金圆产业发展有限公司',no: '0125',type:'主办单位'},
        ];
        $scope.managerTeams = [
            {type:'员工',name: '丁亮',no:'02326',rType:'主办',bType:'营销业务',unitName:'厦门市城市开发有限公司',deptName:'投资管理部',tel:'13906523563'},
        ];
        $scope.labelA = [
            {name:'企业'},
        ];
        $scope.labelB = [
            {name:'车辆'},
        ];
        $scope.labelC = [
            {name:'运动'},
        ];
        $scope.labelD = [
            {name:'电话'},
        ];
        $scope.labelE = [

        ];
        $scope.labelF = [
            {name:'良好'},
        ];

    });