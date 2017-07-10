angular.module('organizationintegralquery.route', ['organizationintegralquery.controller'])
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('organizationintegralquery', {
                url: '/organizationintegralquery',
                templateUrl: 'areas/integralquery/organization/organizationintegralquery.html',
                controller: 'OrganizationIntegralQueryCtrl',
                cache:false
            })

    });