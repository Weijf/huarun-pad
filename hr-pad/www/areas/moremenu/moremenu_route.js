/**
 * Created by wjf on 2017/6/2.
 */
angular.module('moremenu.route', ['moremenu.controller'])
    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('moremenu', {
                url: "/moremenu",
                templateUrl: "areas/moremenu/moremenu.html",
                controller: 'MoreMenuCtrl'
            })
    });