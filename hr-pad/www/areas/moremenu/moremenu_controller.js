/**
 * Created by wjf on 2017/6/2.
 */
angular.module('moremenu.controller', [])
    .controller('MoreMenuCtrl', function ($scope, $http, $state, $location, $ionicSideMenuDelegate,$ionicHistory) {

        // 返回方法
        $scope.func_goBack = function () {
            $state.go('foot.index');
        }

        $scope.$on('$ionicView.enter', function (e) {
            getCategoryData();
            $scope.getCategoryDetailData(100);
        });


        function getCategoryData() {
            $scope.categoryData = [
                {
                    name: "工作平台",
                    typeNumber: '100'
                },
                {
                    name: "客户管理",
                    typeNumber: '101'
                },
                {
                    name: "协同管理",
                    typeNumber: '102'
                },
                {
                    name: "协同分析",
                    typeNumber: '103'
                }
            ];

        }

        // 头部滚动条数据
        $scope.getCategoryDetailData = function (typeNumber) {
            if (typeNumber == 100) {
                $scope.categoryDetailData = [
                    {
                        title: "工作任务",
                        src: "img/moremenu/partners.png",
                        data: [
                            {
                                name: "待办任务",
                                src: "img/home/nav1.png",
                                typeNumber: '10002',
                                sref:'backlogList'
                            },
                            {
                                name: "已办任务",
                                src: "img/home/nav1.png",
                                typeNumber: '10002',
                                sref:'finishedtaskList'
                            },
                        ]
                    },
                ];
            }else if (typeNumber == 101) {
                $scope.categoryDetailData = [
                    {
                        title: "公司客户管理",
                        src: "img/moremenu/partners.png",
                        data: [
                            {
                                name: "我的公司客户",
                                src: "img/home/nav1.png",
                                typeNumber: '10002',
                                sref:'companyCustomerList'
                            },
                        ]
                    },
                    {
                        title: "个人客户管理",
                        src: "img/moremenu/partners.png",
                        data: [
                            {
                                name: "我的个人客户",
                                src: "img/home/nav1.png",
                                typeNumber: '10002',
                                sref:'personCustomerList    '
                            },
                        ]
                    },
                    {
                        title: "客户数据申请",
                        src: "img/moremenu/partners.png",
                        data: [
                            {
                                name: "公司数据申请",
                                src: "img/home/nav1.png",
                                typeNumber: '10002',
                                sref:'companydata'
                            },
                            {
                                name: "个人数据申请",
                                src: "img/home/nav1.png",
                                typeNumber: '10002',
                                sref:'persondata'
                            },
                        ]
                    },
                ];
            }else if (typeNumber == 102) {
                $scope.categoryDetailData = [
                    {
                        title: "合作伙伴管理",
                        src: "img/moremenu/partners.png",
                        data: [
                            {
                                name: "合作伙伴查询",
                                src: "img/home/nav1.png",
                                typeNumber: '10002',
                                sref:'partnerList'
                            },
                        ]
                    },
                    {
                        title: "综合查询",
                        src: "img/moremenu/search.png",
                        data: [
                            {
                                name: "线索查询",
                                src: "img/home/nav0.png",
                                typeNumber: '10001',
                                sref:'clue({data:1})'
                            },
                            {
                                name: "机会查询",
                                src: "img/home/nav1.png",
                                typeNumber: '10002',
                                sref:'clue({data:2})'
                            },
                            {
                                name: "项目查询",
                                src: "img/home/nav1.png",
                                typeNumber: '10002',
                                sref:'clue({data:3})'
                            },
                        ]
                    },
                    {
                        title: "积分管理",
                        src: "img/moremenu/soremgr.png",
                        data: [
                            {
                                name: "积分明细查询",
                                src: "img/home/nav0.png",
                                typeNumber: '10001',
                                sref:'integralquery'
                            },
                            {
                                name: "积分统计分析",
                                src: "img/home/nav1.png",
                                typeNumber: '10002',
                                sref:''
                            },
                        ]
                    },
                ];
            }else if (typeNumber == 103) {
                $scope.categoryDetailData = [
                    {
                        title: "效果分析",
                        src: "img/moremenu/partners.png",
                        data: [
                            {
                                name: "集团机会分析",
                                src: "img/home/nav1.png",
                                typeNumber: '10002',
                                sref:''
                            },
                            {
                                name: "协同效果分析",
                                src: "img/home/nav1.png",
                                typeNumber: '10002',
                                sref:''
                            },
                            {
                                name: "项目类型分析",
                                src: "img/home/nav1.png",
                                typeNumber: '10002',
                                sref:''
                            },
                        ]
                    },
                ];
            }
        };


        // 左侧分类单击样式修改
        $scope.categoryLeftClick = function (e) {
            e.target.className = 'nav-current';
            $(e.target).siblings().removeClass().addClass('nav-blur');

        };

    })
