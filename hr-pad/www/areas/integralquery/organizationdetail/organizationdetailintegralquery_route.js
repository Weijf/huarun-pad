angular.module('organizationdetailintegralquery.route', ['organizationdetailintegralquery.controller'])
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('organizationdetailintegralquery', {
                url: '/organizationdetailintegralquery',
                templateUrl: 'areas/integralquery/organizationdetail/organizationdetailintegralquery.html',
                controller: 'OrganizationDetailIntegralQueryCtrl',
                cache:false
            })
    });