/**
 * Created by wjf on 2017/6/14.
 */
angular.module('demo.route', ['demo.controller'])
    .config(function ($stateProvider) {
        $stateProvider
            .state('demo',{
                url: '/demo',
                cache: true,
                templateUrl: 'areas/demo/demo.html',
                controller: 'DemoCtrl'
            })
    });