angular.module("backlog.route",["backlog.controller"])
    .config(function($stateProvider, $urlRouterProvider){
        $stateProvider
            .state('backlogList', {
                url: '/backlogList',
                templateUrl: 'areas/backlog/list.html',
                controller: 'backlogCtrl',
                cache:false
            })
            .state('backlogInfo', {
                url: '/backlogInfo/:data',
                templateUrl: 'areas/backlog/info.html',
                controller: 'backlogInfoCtrl',
                cache:false
            })
            .state('backlogInfoHistory', {
                url: '/backlogInfoHistory/:data',
                templateUrl: 'areas/backlog/details/history.html',
                controller: 'backlogInfoHistoryCtrl',
                cache:false
            })
            .state('backlogInfoPersonInfo', {
                url: '/backlogInfoPersonInfo/:data',
                templateUrl: 'areas/backlog/details/personinfo.html',
                controller: 'backlogInfoPersonInfoCtrl',
                cache:false
            })
            .state('backlogInfoAuditing', {
                url: '/backlogInfoAuditing',
                templateUrl: 'areas/backlog/details/auditing.html',
                controller: 'backlogInfoAuditingCtrl',
                cache:false
            })
            .state('synergyclues', {
                url: '/synergyclues',
                templateUrl: 'areas/backlog/synergy/clues/clues.html',
                controller: 'SynergyCluesCtrl',
                cache:false
            })
            .state('synergychance', {
                url: '/synergychance',
                templateUrl: 'areas/backlog/synergy/chance/chance.html',
                controller: 'SynergyChanceCtrl',
                cache:false
            })


    });

