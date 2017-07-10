// 总路由模块
angular.module('route', [
    'tab.route',
    'home.route',
    'chart.route',
    'companydata.route',
    'integralquery.route',
    'companycustomer.route',
    'personcustomer.route',
    'partner.route',
    'backlog.route',
    'clue.route',
    'personintegralquery.route',
    'organizationintegralquery.route',
    'foot.route',
    'index.route',
    'organizationdetailintegralquery.route',
    'persondata.route',
    'count.route',
    'moremenu.route',
    'finishedtask.route',
])
    .config(function ($stateProvider, $urlRouterProvider) {

    // 第一次登陆
//  if(localStorage["isFirst"])
//  {
      $urlRouterProvider.otherwise('/foot/index');
//  }
//  else {
//    $urlRouterProvider.otherwise('/guidePage');
//  }


  });
