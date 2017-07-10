angular.module("partner.controller",[])
    .controller("partnerCtrl", function($scope,$state, $ionicSideMenuDelegate) {
        $scope.goBack = function() {
            $state.go("foot.index");
        };
        $scope.partnerItemClick = function(item) {
            var partner = angular.toJson(item);
            $state.go("partnerInfo", {
                data: partner
            }, {
                reload: true
            });
        };
        $scope.items = [{
            name: "金圆合作伙伴",
            type: '国有央企-非金融',
            trade: '林业',
            manager: '金圆国际-高管'
        }, {
            name: "长期合作伙伴",
            type: '国有央企-非金融',
            trade: '林业',
            manager: '信托-信息技术部'
        }, {
            name: "协议合作伙伴",
            type: '国有央企-非金融',
            trade: '林业',
            manager: '城市开发-投资管理部'
        }];

        $scope.partnerTypes = [
            { id: "0001",name: "国有央企-非金融" },

        ];
        $scope.toggleRight = function() {
            $ionicSideMenuDelegate.toggleRight();
        };
        $scope.func_reset = function() {
            document.getElementById("partnerName").value="";
            document.getElementById("partnerType").value="";
        };

        $scope.func_ok = function() {
            $ionicSideMenuDelegate.toggleRight();
        };
    })
    .controller("partnerInfoCtrl", function($scope, $state,$stateParams, $ionicSideMenuDelegate,$ionicSlideBoxDelegate,$ionicScrollDelegate) {
        var partner = angular.fromJson($stateParams.data);
        $scope.partner=$stateParams.data;
        $scope.scollTabIndex=0;
        $scope.activeScollTab=function(index){
            $scope.scollTabIndex=index;
        };
        $scope.slideChange=function(index){
            $scope.scollTabIndex=index;
            $ionicSlideBoxDelegate.slide(index);
        };
        $scope.goBack = function() {
            $state.go("partnerList");
        };
        $scope.basics = [
            {label: '合作伙伴名称',info: partner.name},
            {label: '合作伙伴编号',info: '66532586'},
            {label: '登记注册证件类型',info: '营业执照'},
            {label: '登记注册证件号',info: '1322567562'},
            {label: '注册国家/地区',info: '中国'},
            {label: '合作伙伴类型',info: '国有央企-非金融'},
            {label: '所属行业',info: '农业'},
            {label: '合作伙伴种类',info: '单一公司型'},
            {label: '是否集团子公司',info: '否'},
            {label: '所属集团',info: ''},
            {label: '管理部门',info: '金圆国际-高管'},
            {label: '管理人员',info: '吴韵源'},
        ];
        $scope.togethers = [
            {reason: '05101',date: '2017-05-01',dept:'城市开发-投资管理部',person:'丁亮',isShow:'是'},
            {reason: '04261',date: '2017-04-26',dept:'城市开发-投资管理部',person:'丁亮',isShow:'否'},
        ];
        $scope.showTogetherInfo = function(_info) {
            var _array = [_info,partner];
            var jsonData = angular.toJson(_array);
            if(_info.isShow == '是'){
                $state.go("partnerInfoTogether", {
                    data: jsonData
                }, {
                    reload: true
                });
            }else{
                alert('无查看权限');
            }
        };
    })
    .controller("partnerTogetherInfoCtrl", function($scope, $state,$stateParams,$location) {
        var _array = angular.fromJson($stateParams.data);
        var togetherInfo = _array[0];
        var partner = _array[1];
        $scope.goBackInfo = function() {
            $state.go("partnerInfo", {
                data: angular.toJson(partner)
            }, {
                reload: true
            });
        };
        $scope.togetherBaseInfos = [
            {label: '合作事由',info:togetherInfo.reason},
            {label: '对接部门',info:togetherInfo.dept},
            {label: '对接人员',info:togetherInfo.person},
            {label: '对接人员联系方式',info:'13865236552'},
            {label: '合作时间',info:togetherInfo.date},
        ];
        $scope.togetherBaseRelationInfos = [
            {label: '联系人名称',info: '张帅'},
            {label: '所属部门',info: '人事部'},
            {label: '职位',info: '职员'},
            {label: '固定电话',info: '0592-3265222'},
            {label: '移动电话',info: '13965562451'},
            {label: '电子邮箱',info: 'hzr@hzr.com'},
            {label: '国家/地区',info: '中国'},
            {label: '邮政编码',info: '360000'},
            {label: '省市县',info: '福建省厦门市思明区'},
            {label: '详细地址',info: '会展北路66号'},
        ];
    });