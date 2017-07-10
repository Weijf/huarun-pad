angular.module("personcustomer.controller",[])
    .controller("personCustomerCtrl", function($scope, $timeout, $ionicScrollDelegate, $state, $http, $ionicSideMenuDelegate,$ionicHistory) {

        $scope.num = 1;
        $scope.size = 10;
        $scope.finite_state = true;
        $scope.search_state = true;
        $scope.sch_st = 1;

        $scope.goBack = function() {
            $ionicHistory.goBack();
        };
        $scope.cusItemClick = function(item) {
            var cus = angular.toJson(item);
            $state.go("personCustomerInfo", {
                data: cus
            }, {
                reload: true
            });
        };

        $scope.items = [];

        $scope.cardTypes = [
            { id: "0001",name: "身份证" },
            { id: "0002",name: "护照" },
            { id: "0003",name: "军人身份证件" },
            { id: "0004",name: "港澳通行证" },
            { id: "0005",name: "外国护照" },
            { id: "0006",name: "外国人居留证" },
            { id: "0007",name: "外国身份证" },
            { id: "0008",name: "临时居民身份证" },
            { id: "0009",name: "其他证件（个人）" },
        ];

        $scope.toggleRight = function() {
            $ionicSideMenuDelegate.toggleRight();
        };

        $scope.func_reset = function() {
            document.getElementById("cstId").value="";
            document.getElementById("ipNm").value="";
            document.getElementById("ipidTpcd").value="";
            document.getElementById("ipidNo").value="";
        };

        $scope.func_ok = function() {
            $scope.func_refresh();
            $ionicSideMenuDelegate.toggleRight();
        };

        $scope.func_refresh = function(){
            console.log('上托刷新');
            $scope.num = 1;
            $scope.search_state = true;
            $scope.indexDate();
            $scope.sch_st = 2;
            $scope.items = [];
            $scope.$broadcast('scroll.infiniteScrollComplete');
            $scope.$broadcast('scroll.refreshComplete');
        }

        $scope.scrollTop = function() {
            $ionicScrollDelegate.scrollTop(true);
        };

        /**
         * 加载数据的方法
         */
        $scope.indexDate = function(){
            if($scope.search_state){
                $scope.search_state = false;
                // 02表示个人
                var iptpCd = '02';
                Ajax_jsonp(
                    CRM_findPersonCustInfoList($scope.num, $scope.size, iptpCd, cstId.value, ipNm.value, ipidTpcd.value, ipidNo.value),
                    crmurl,
                    $scope.success);
            }
        }

        /**
         * 成功调用执行的方法
         * @param data
         */
        $scope.success = function(msg){
            if($scope.num == 1){
                $scope.items = [];
            }
            for(var i = 0; i < msg.content.length; i++){
                var dat = {name: msg.content[i].ipNm,statusrc: 'img/companycustomer/customer.png',no: msg.content[i].cstId,id: msg.content[i].ipidNo, ipid: msg.content[i].ipId,cardType: type_value("0001", msg.content[i].ipidTpcd)};
                $scope.items.push(dat);
            }
            if(!msg.hasNextPage){
                $scope.search_state = false;
                $scope.finite_state = false;
                /*$scope.sch_st = false;*/
            }else{
                $scope.search_state = true;
                $scope.num++;
                $scope.finite_state = true;
                /*$scope.sch_st = true;*/
            }
            $timeout(function () {
                $scope.sch_st = 1;
            }, 300);
        }

        /**
         * 下拉刷新的方法
         */
        $scope.loadMore = function(){
            if($scope.sch_st == 1){
                $scope.sch_st++;
                $scope.indexDate();
            }
            $scope.$broadcast('scroll.infiniteScrollComplete');
            $scope.$broadcast('scroll.refreshComplete');
        }
    })
    .controller("personCustomerInfoCtrl", function($scope, $state,$stateParams, $ionicSideMenuDelegate,$ionicSlideBoxDelegate,$ionicScrollDelegate) {
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
            console.log(555);
        };
        $scope.slideChange=function(index){
            $scope.scollTabIndex=index;
            $ionicSlideBoxDelegate.slide(index);
            console.log(555);
        };

        $scope.goBack = function() {
            $state.go("personCustomerList");
        };

        $scope.onchange = function (index) {
            console.log(index);
        }

        /**
         * 基础信息
         * @type {Array}
         */
        $scope.basics = [];

        $scope.cardInfos = [];

        $scope.relationA = [
            {type: '*',country:'*',sheng:'*',city:'*',qx:'*',address:'*',zipCode:'*'},
        ];
        $scope.relationB = [
            {type: '*',QH:'*',tel:'*'},
        ];
        $scope.relationC = [
            {type: '*',address: '*'}
        ];

        $scope.works = [
            {sDate: '*',eDate: '*',isNow:'*',trade:'*',unitName:'*',unitNature:'*',jobDesc:'*',desc:'*'},
        ];
        $scope.edcutions = [
            {sDate: '*',eDate: '*',school:'*',xl:'*',zy:'*'},
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
            {name:'青年'},
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


        /** 数据请求部分 **/
        $scope.num = 1;
        $scope.size = 100;
        /**
         * 1 公司
         * 2 个人
         * @type {string}
         */
        $scope.searchtype = '2';
        /**
         * 1 基础信息
         * 2 证件信息查询
         * 3 联系信息
         * 4 工作与教育背景信息
         * 5 关联方教育
         * 6 资产信息
         * 7 不良评价信息
         * 8 查看归属机构
         * 9 查看管理团队
         * 10 标签信息
         * @type {null}
         */
        $scope.actiontype = $scope.scollTabIndex + 1;
        /**
         * 参与人编号
         */
        $scope.ipId = cus.ipid;
        /**
         * 客户编号
         * @type {*}
         */
        $scope.cstId = cus.no;

        $scope.search_state = true;

        /**
         * 加载数据的方法
         */
        $scope.indexDate = function(){
            if($scope.search_state){
                $scope.search_state = false;
                Ajax_jsonp(
                    CRM_findPersonViewInfoList($scope.searchtype, $scope.actiontype, $scope.ipId, $scope.cstId, $scope.num, $scope.size),
                    crmurl,
                    $scope.success);
            }
        }

        /**
         * 成功调用执行的方法
         * @param data
         */
        $scope.success = function(data){
            if($scope.actiontype == 4){
                console.log(data);
                if(data.data[0].content.length != 0){
                    $scope.works = [
                        {sDate: data.data[0].content[0].WRKEXPRNCSTDT,eDate: data.data[0].content[0].WRKEXPRNCEDDT,isNow:type_value('select', data.data[0].content[0].CRNCO_WRK_IND),trade:'*',unitName:'*',unitNature:'*',jobDesc:'*',desc:'*'},
                    ];
                    $scope.edcutions = [
                        {sDate: '*',eDate: '*',school:'*',xl:'*',zy:'*'},
                    ];
                }
            }
            if($scope.actiontype == 3){
                if(data.data[0].content.length != 0)
                    $scope.relationA = [
                        {type: type_value('0021', data.data[0].content[0].IP_PST_ADR_USE_TPCD),country:type_value('0021', data.data[0].content[0].CTYRGON_CD),sheng:type_value('0021', data.data[0].content[0].PROV_CD),city:type_value('0040', data.data[0].content[0].CITY_CD),qx:data.data[0].content[0].CNTYANDDSTC_CD,address:data.data[0].content[0].DTL_ADR,zipCode:data.data[0].content[0].ZIPECD},
                    ];

                if(data.data[1].content.length != 0)
                    $scope.relationB = [
                        {type: type_value('0024', data.data[1].content[0].IP_TEL_USE_TPCD),QH:data.data[1].content[0].TEL_DMST_DSTCNO,tel:data.data[1].content[0].TEL_HST_NO},
                    ];

                if(data.data[2].content.length != 0)
                    $scope.relationC = [
                        {type: type_value('0024', data.data[2].content[0].IP_ELC_ADR_USE_TPCD),address: data.data[2].content[0].IP_ELC_ADR},
                    ];
                $scope.actiontype++;
                $scope.search_state = true;
                $scope.indexDate();
            }

            if($scope.actiontype == 2){
                var dat = data.content;
                for(var i = 0; i < dat.length; i++){
                    var s = {isMain: dat[i].PRIMCRDTIND,type: type_value('0001', dat[i].IPIDTPCD),pubC:type_value('0011', dat[i].ISSUCTYCD),no:dat[i].IPIDNO,sDate:dat[i].CRDTDFDT,eDate:dat[i].CRDTEXDAT,pubP:dat[i].ISSUCTFAHRNM,pubG:dat[i].ISSUCTFAHRLO};
                    $scope.cardInfos.push(s);
                }
                $scope.actiontype++;
                $scope.search_state = true;
                $scope.indexDate();
            }

            if($scope.actiontype == 1){
                $scope.basics = [
                    {label: '客户法定名称',info: data.ipNm},
                    {label: '客户编号',info: data.cstId},
                    {label: '主证件类型',info: type_value('0001', data.ipIdTpcd)},
                    {label: '主证件号码',info: type_value('sex', data.ipIdNo)},
                    {label: '性别',info: data.ganCd},
                    {label: '出生年月',info: data.brthDt},
                    {label: '国籍',info: data.natCd},
                    {label: '民族',info: data.ethnctCd},
                    {label: '客户管户机构',info: data.orgNm},
                    {label: '客户管户人员',info: data.empNm},
                    {label: '婚姻状况',info: type_value('0012', data.marStCd)},
                    {label: '学历',info: type_value('0009', data.edDgrCd)},
                    {label: '政治面貌',info: type_value('0018', data.pltclPartyCd)},
                    {label: '参加工作时间',info: data.pcpWrkTm},
                    {label: '宗教信仰',info: type_value('0013', data.rlgCd)},
                    {label: '个人兴趣爱好',info: data.hbbDSC},
                    {label: '个人身份描述',info: data.idvIdntDsc},
                    {label: '居住状况',info: type_value('0015', data.rsdntStCd)},
                    {label: '家庭现有住房数',info: data.famExstHsNum},
                    {label: '主要经济来源',info: type_value('0016', data.rsdntStCd)},
                    {label: '其它经济来源描述',info: data.othrEcnSrcDsc},
                    {label: '财务负担描述',info: data.fncBrdnDsc},
                    {label: '参加养老保险标志',info: type_value('select', data.pcpPnsnInsInd)},
                    {label: '参加医疗保险标志',info: type_value('select', data.pcpMdclInsInd)},
                    {label: '非居民标志',info: type_value('select', data.nooRsdntInd)},
                    {label: '失业保险参加标志',info: type_value('select', data.unempInsPcpInd)},
                    {label: '家庭状况描述',info: data.famStnDsc},
                    {label: '家庭人口数',info: data.famPpnNum},
                    {label: '子女状况',info: type_value('0017', data.chlSttnCd)},
                    {label: '抚养子女数量',info: data.rsChlNum},
                    {label: '个人其它情况描述',info: data.idvOthrStnDsc},
                ];
                $scope.actiontype++;
                $scope.search_state = true;
                $scope.indexDate();
            }

        }

        $scope.indexDate();


    });