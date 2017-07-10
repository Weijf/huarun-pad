angular.module('starter', ['ionic','tabSlideBox','route','global','config','ionicLazyLoad','indexdb','commonJs','ngCordova','filter','directives'])

.run(function($ionicPlatform,$location,$ionicHistory,$cordovaToast,$rootScope,$cordovaStatusbar) {
  $ionicPlatform.ready(function() {
     //Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
     //for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
    
    if(ionic.Platform.isIOS()){
    	ionic.Platform.fullScreen();
    }
   // window.StatusBar.backgroundColorByHexString('#eeb81a');
    //$cordovaStatusbar.styleHex('#FF0000');


    //给android的物理返回按钮添加点击事件
    // 第一个参数是注册的事件，第二个参数是注册事件的优先级
    $ionicPlatform.registerBackButtonAction(function(e){
      if($rootScope.backButtonPressedOnceToExit){
        ionic.Platform.exitApp();
      }
      else {
        if($location.path()=="/tab/home"||$location.path()=="/tab/tab-count"||$location.path()=="/tab/mine"){
          $rootScope.backButtonPressedOnceToExit=true;
          $cordovaToast.showShortBottom('再点一次退出！');
          setTimeout(function(){
            $rootScope.backButtonPressedOnceToExit=false;
          },2000)
        }
        else {
          $ionicHistory.goBack();
        }
      }
      e.preventDefault();
      return false
    },110);


  });
})