angular.module("companycustomer.route",["companycustomer.controller"])
    .config(function($stateProvider, $urlRouterProvider){
        $stateProvider
            .state('companyCustomerList', {
                url: '/companyCustomerList',
                templateUrl: 'areas/companycustomer/list.html',
                controller: 'companyCustomerCtrl',
                cache:false
            })
            .state('companyCustomerInfo', {
                url: '/companyCustomerInfo:data',
                templateUrl: 'areas/companycustomer/info.html',
                controller: 'companyCustomerInfoCtrl',
                cache:false
            })
    });
