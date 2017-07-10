angular.module("personcustomer.route",["personcustomer.controller"])
    .config(function($stateProvider, $urlRouterProvider){
        $stateProvider
            .state('personCustomerList', {
                url: '/personCustomerList',
                templateUrl: 'areas/personcustomer/list.html',
                controller: 'personCustomerCtrl',
                cache:false
            })
            .state('personCustomerInfo', {
                url: '/personCustomerInfo:data',
                templateUrl: 'areas/personcustomer/info.html',
                controller: 'personCustomerInfoCtrl',
                cache:false
            })
    });
