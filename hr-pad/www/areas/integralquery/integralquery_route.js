angular.module('integralquery.route', ['integralquery.controller'])
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('integralquery', {
                url: '/integralquery',
                templateUrl: 'areas/integralquery/integralquery.html',
                controller: 'IntegralQueryCtrl',
                cache:false
            })

    });