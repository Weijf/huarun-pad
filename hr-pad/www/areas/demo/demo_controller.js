/**
 * Created by wjf on 2017/6/14.
 */
angular.module('demo.controller',[])
    .controller("DemoCtrl", function($scope, $state, $timeout){

        $scope.last = 0;
        $scope.fininte_state = true;

        $scope.items=[
            {
                "name":"HTML5"
            },
            {
                "name":"JavaScript"
            },
            {
                "name":"Css3"
            },
            {
                "name":"JavaScript"
            },
            {
                "name":"JavaScript"
            },
            {
                "name":"JavaScript"
            },
            {
                "name":"JavaScript"
            },
            {
                "name":"JavaScript"
            },
            {
                "name":"JavaScript"
            },
            {
                "name":"JavaScript"
            },
            {
                "name":"JavaScript"
            },
            {
                "name":"JavaScript"
            },
            {
                "name":"JavaScript"
            }
        ];

        $scope.title = '测试页面';

        $scope.newitems=[
            {
                "name":"hahahaha"
            },
            {
                "name":"sssss"
            },
            {
                "name":"xxxxx"
            }
        ];

        $scope.itemList = [{
            id: '0',
            name: '基础信息',
            class: 'action'
        },{
            id: '1',
            name: '证件信息',
            class: ''
        },{
            id: '2',
            name: '单位联系信息',
            class: ''
        },{
            id: '3',
            name: '联系人联系信息',
            class: ''
        },{
            id: '4',
            name: '关联方信息',
            class: ''
        },{
            id: '5',
            name: '股东信息',
            class: ''
        },{
            id: '6',
            name: '资产信息',
            class: ''
        },{
            id: '7',
            name: '不良评价信息',
            class: ''
        },{
            id: '8',
            name: '管理机构信息',
            class: ''
        },{
            id: '9',
            name: '管理团队信息',
            class: ''
        },{
            id: '10',
            name: '客户标签',
            class: ''
        }]


        $scope.doRefresh = function () {
            console.log('刷新');
            $scope.items = $scope.newitems;
            $scope.$broadcast('scroll.refreshComplete');
            $scope.fininte_state = true;
        }

        $scope.loadMore = function(){
            console.log('加载更多。。。');
            if($scope.fininte_state){
                if($scope.items.length > 15){
                    console.log(100000);
                    $scope.fininte_state = false;
                }

                var i = {name:"HTML5"};
                $scope.items.push(i);
            }
            $scope.$broadcast('scroll.infiniteScrollComplete');




            // $scope.indexDate();
            // $scope.$broadcast('scroll.refreshComplete');
            /* $timeout(
                function () {
                    console.log(44);
                    $scope.fininte_state = !$scope.fininte_state;
                    // $scope.$broadcast('scroll.refreshComplete');
                }, 3000
            ); */
        }

        $scope.show_slide = function(id){
            $scope.itemList[$scope.last].class = '';
            $scope.itemList[id].class = 'action';
            $scope.last = id;
            document.getElementById(id).scrollIntoView();
        }

        $scope.slideHasChanged = function(id){
            $scope.show_slide(id);
        }

        $scope.goBack = function () {
            $state.go("foot.index");
        }
    })