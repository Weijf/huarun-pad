/**
 * Created by wjf on 2017/5/25.
 */
angular.module('clue.controller', ['clue.service'])
    .controller('ClueCtrl', function($scope, $state, $http, $ionicSideMenuDelegate, $stateParams,$ionicHistory) {
        var sales = angular.fromJson($stateParams.data);
        $scope.title = '欢迎使用--天阳软件';

        $scope.items = [{
            id: '1',
            title: '线索--1',
            person: '丁亮',
            org: '城市开发-投资管理部',
            state: '已分配',
            time: '2017-05-25'
        },{
            id: '2',
            title: '机会--2',
            person: '丁亮',
            org: '城市开发-投资管理部',
            state: '已分配',
            time: '2017-05-25'
        },{
            id: '3',
            title: '项目--3',
            person: '丁亮',
            org: '城市开发-投资管理部',
            state: '已分配',
            time: '2017-05-25'
        },{
            id: '1',
            title: '线索--1',
            person: '丁亮',
            org: '城市开发-投资管理部',
            state: '已分配',
            time: '2017-05-25'
        },{
            id: '2',
            title: '机会--2',
            person: '丁亮',
            org: '城市开发-投资管理部',
            state: '已分配',
            time: '2017-05-25'
        },{
            id: '3',
            title: '项目--3',
            person: '丁亮',
            org: '城市开发-投资管理部',
            state: '已分配',
            time: '2017-05-25'
        },{
            id: '1',
            title: '线索--1',
            person: '丁亮',
            org: '城市开发-投资管理部',
            state: '已分配',
            time: '2017-05-25'
        },{
            id: '2',
            title: '机会--2',
            person: '丁亮',
            org: '城市开发-投资管理部',
            state: '已分配',
            time: '2017-05-25'
        },{
            id: '3',
            title: '项目--3',
            person: '丁亮',
            org: '城市开发-投资管理部',
            state: '已分配',
            time: '2017-05-25'
        }];
        if(sales == 1){
            $scope.search1 = '线索标题';
            $scope.search2 = '管理机构';
            $scope.til1 = '线索标题';
            $scope.til2 = '管理人员';
            $scope.til3 = '管理机构';
            $scope.til4 = '线索状态';
            $scope.til5 = '创建时间';
            $scope.title = '线索查询';
        }
        if(sales == 2){
            $scope.search1 = '机会标题';
            $scope.search2 = '管理机构';
            $scope.til1 = '机会标题';
            $scope.til2 = '管理人员';
            $scope.til3 = '管理机构';
            $scope.til4 = '机会状态';
            $scope.til5 = '创建时间';
            $scope.title = '机会查询';
        }
        if(sales == 3){
            $scope.search1 = '项目名称';
            $scope.search2 = '管理机构';
            $scope.til1 = '项目名称';
            $scope.til2 = '项目经理';
            $scope.til3 = '管理机构';
            $scope.til4 = '项目状态';
            $scope.til5 = '创建时间';
            $scope.title = '项目查询';
        }

        $scope.changetitle = function (id) {
            if(id == 1){
                $scope.search1 = '线索标题';
                $scope.search2 = '管理机构';
                $scope.til1 = '线索标题';
                $scope.til2 = '管理人员';
                $scope.til3 = '管理机构';
                $scope.til4 = '线索状态';
                $scope.til5 = '创建时间';
            }
            if(id == 2){
                $scope.search1 = '机会标题';
                $scope.search2 = '管理机构';
                $scope.til1 = '机会标题';
                $scope.til2 = '管理人员';
                $scope.til3 = '管理机构';
                $scope.til4 = '机会状态';
                $scope.til5 = '创建时间';
            }
            if(id == 3){
                $scope.search1 = '项目名称';
                $scope.search2 = '管理机构';
                $scope.til1 = '项目名称';
                $scope.til2 = '项目经理';
                $scope.til3 = '管理机构';
                $scope.til4 = '项目状态';
                $scope.til5 = '创建时间';
            }
        }

        $scope.show_list = function () {
            $ionicSideMenuDelegate.toggleRight();
        };

        $scope.show_info = function (id) {
            var sales = angular.toJson(id);
            $state.go("clueInfo", {
                data: sales
            }, {
                reload: true
            });
        }

        $scope.goBack = function () {
            $state.go("foot.index");
        }

        var soap = "{'clueTitle': '','clueNum':'','clueId':'','crtInsId':'','crtInsNm':'','crtEmpId':'','crtEmpNm':'','clueValCd':'','clueStCd':'','qryFlamInd':'','page':'1''limit':'10'}";

        /*$.ajax({
            url: 'http://172.16.198.52:8080/cpc/maintainclue/querycoluelist',
            dataType: 'jsonp',
            type: 'post',
            data: soap,
            success: function (data) {
                console.log(data);
                alert(1);
            },
            error: function (rt) {
                console.log(rt);
                alert(2);
            }
        });*/



        $http({
            method: 'POST',
            url: 'http://172.16.164.152:8980/test/user/login',
            params: {
                'userName': 123,
                'password': 123
            }
        }).success(function(e){
            console.log(e);
            if(e.success){

            }

        }).error(function(e){

        })
    })

    .controller('ClueInfoCtrl', function($scope, $http, $state, $stateParams, $ionicSideMenuDelegate, $location) {

        var sales = angular.fromJson($stateParams.data);

        /*数据*/
        $scope.type = sales;
        $scope.title = '详情页';
        $scope.last = 0;
        if(sales == 1){
            $scope.tab2 = '线索';
            $scope.search1 = '线索标题';
            $scope.search2 = '管理机构';
        }
        if(sales == 2){
            $scope.tab2 = '机会';
            $scope.search1 = '机会标题';
            $scope.search2 = '管理机构';
        }
        if(sales == 3){
            $scope.tab2 = '项目';
            $scope.search1 = '项目名称';
            $scope.search2 = '管理机构';
        }
        $scope.itemList = [{
            id: 0,
            name: '概况',
            class: 'action',
        },{
            id: 1,
            name: $scope.tab2 + '信息',
            class: '',
        },{
            id: 2,
            name: '已完成工作',
            class: '',
        }];

        /*概况信息列表*/
        $scope.surveyList = [{
            id: '0',
            img: 'img/clue/clue1.png',
            title: '新建线索',
            state_img: 'img/clue/more.png',
            state: true
        },{
            id: '1',
            img: 'img/clue/clue2.png',
            title: '线索审批',
            state_img: 'img/clue/more.png',
            state: true
        },{
            id: '2',
            img: 'img/clue/clue3.png',
            title: '新建机会',
            state_img: 'img/clue/more.png',
            state: true
        },{
            id: '3',
            img: 'img/clue/clue4.png',
            title: '机会认定',
            state_img: 'img/clue/more.png',
            state: true
        },{
            id: '4',
            img: 'img/clue/clue5.png',
            title: '项目立项',
            state_img: 'img/clue/more.png',
            state: true
        },{
            id: '5',
            img: 'img/clue/clue6.png',
            title: '项目审批',
            state_img: 'img/clue/more.png',
            state: true
        },{
            id: '6',
            img: 'img/clue/clue7.png',
            title: '合同签署',
            state_img: 'img/clue/more.png',
            state: true
        },{
            id: '7',
            img: 'img/clue/clue8.png',
            title: '结束',
            state_img: 'img/clue/more.png',
            state: true
        }];

        /*$scope.surveyList.push({
            id: '8',
            title: '结sss束',
            state: true
        });*/

        $scope.tableInfo = [{
            name: '刑啸岩',
            org: '城市开发-公司高管',
            result: '通过',
            time: '2017-05-15 15:21',
            state: '已执行',
            opinion: '通过',
            consuming: '0.0',
            speed: '100%'
        },{
            name: '刑啸岩',
            org: '城市开发-公司高管',
            result: '通过',
            time: '2017-05-15 15:21',
            state: '已执行',
            opinion: '通过',
            consuming: '0.0',
            speed: '100%'
        }]

        $scope.infor_one = [{
            id: '0',
            title: '基本信息',
            state_img: 'img/clue/more.png',
            state: true
        }]

        $scope.infor_two = [{
            id: '1',
            title: '协同方信息',
            state_img: 'img/clue/more.png',
            state: true
        }]

        $scope.infor_thr = [{
            id: '2',
            title: '资料附件信息',
            state_img: 'img/clue/more.png',
            state: true
        }]

        $scope.infor_for = [{
            id: '3',
            title: '已完成工作',
            state_img: 'img/clue/more.png',
            state: true
        }]

        /*基本信息模块*/
        /*线索*/
        $scope.infor_one_info = [{
            title: '新建线索',
            name: '丁亮',
            department: '城市开发-投资管理部',
            phone: '123456789',
            time: '2017-05-01',
            background: '新建线索背景',
            content: '新建线索内容',
            value: '高',
            leader: '王因袭',
            state: true
        }]

        /*机会*/
        $scope.infor_two_info = [{
            title: '机会创建',
            type: '共同投资协同',
            degree: '高',
            department: '城市开发-投资管理部',
            name: '丁亮',
            phone: '123456789',
            time: '2017-05-01',
            content: '机会描述',
            clue: '关联线索',
            state: true
        }]

        /*项目*/
        $scope.infor_thr_info = [{
            title: '项目名称',
            num: '10099',
            scale: '大型',
            type: '资源协同',
            leader: '丁亮',
            department: '城市开发-投资管理部',
            phone: '123456789',
            opport: '关联机会',
            degree: '高',
            money: '10',
            time: '2017-05-01',
            content: '项目描述',
            state: true
        }]

        /*协同方*/
        $scope.infor_coor_info = [{
            department: '担保-业务二部',
            name: '李姝妍',
            part: '合伙人',
            prop: '15',
            content: '内容描述',
            state: true
        }]

        /*资料附件*/
        $scope.infor_data_info = [{
            name: 'crm产品线名称',
            person: '丁亮',
            department: '城市开发-投资管理部',
            time: '2017-05-15',
            url: 'http://localhost:8080/pangzi/file/download?fileName=1',
            state: true
        }]

        /*资料附件*/
        $scope.infor_work_info = [{
            title: '机会创建',
            num: '10256',
            type: '客户拜访',
            person: '丁亮',
            department: '城市开发-投资管理部',
            time: '2017-05-15',
            record: '记录员',
            state: true
        }]

        /*方法*/

        $scope.goBack = function () {
            $state.go("clue", {
                data: sales
            }, {
                reload: true
            });
        }

        $scope.show_survey = function (id) {
            if(id == 0 || id == 2){

            }else{
                $scope.surveyList[id].state = !$scope.surveyList[id].state;
            }
            for(var i = 0; i < $scope.surveyList.length; i++){
                if( !$scope.surveyList[i].state ){
                    $scope.surveyList[i].state_img = 'img/clue/less.png';
                }else{
                    $scope.surveyList[i].state_img = 'img/clue/more.png';
                }
            }
        };

        $scope.show_information = function (id) {
            if(id == 0){
                $scope.infor_one[0].state = !$scope.infor_one[0].state;
                if(!$scope.infor_one[0].state){
                    $scope.infor_one[0].state_img = 'img/clue/less.png';
                }else{
                    $scope.infor_one[0].state_img = 'img/clue/more.png';
                }

                if(sales == 1){
                    $scope.infor_one_info[0].state = !$scope.infor_one_info[0].state;
                }
                if(sales == 2){
                    $scope.infor_two_info[0].state = !$scope.infor_two_info[0].state;
                }
                if(sales == 3){
                    $scope.infor_thr_info[0].state = !$scope.infor_thr_info[0].state;
                }
            }
            if(id == 1){
                $scope.infor_two[0].state = !$scope.infor_two[0].state;
                if(!$scope.infor_two[0].state){
                    $scope.infor_two[0].state_img = 'img/clue/less.png';
                }else{
                    $scope.infor_two[0].state_img = 'img/clue/more.png';
                }
            }
            if(id == 2){
                $scope.infor_thr[0].state = !$scope.infor_thr[0].state;
                if(!$scope.infor_thr[0].state){
                    $scope.infor_thr[0].state_img = 'img/clue/less.png';
                }else{
                    $scope.infor_thr[0].state_img = 'img/clue/more.png';
                }
            }
        };

        $scope.show_work = function () {
            $scope.infor_for[0].state = !$scope.infor_for[0].state;
            if(!$scope.infor_for[0].state){
                $scope.infor_for[0].state_img = 'img/clue/less.png';
            }else{
                $scope.infor_for[0].state_img = 'img/clue/more.png';
            }
        }

        $scope.show_list = function () {
            $ionicSideMenuDelegate.toggleRight();
        };
        
        $scope.search = function (search_one, search_two) {
            console.log(search_one);
            console.log(search_two);
        }

        $scope.downfile = function (url) {
            console.log(url);
            window.location.href = url;
        }

        $scope.show_slide = function (id) {
            $scope.itemList[$scope.last].class = '';
            $scope.itemList[id].class = 'action';
            $scope.last = id;
        }

        $scope.slideHasChanged = function (id) {
            $scope.show_slide(id);
        }

    })