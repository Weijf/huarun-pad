angular.module('personintegralquery.controller', ['personintegralquery.service'])
	.controller('PersonIntegralQueryCtrl', function($scope, $state, GlobalVariable, $ionicBackdrop,$window,$timeout,$ionicHistory) {
		$ionicBackdrop.retain();
		$timeout(function() {
			$ionicBackdrop.release();
		}, 1000);
		$scope.goBack = function() {
			$ionicHistory.goBack();
		};
		var agent = navigator.userAgent;
		if (/iphone|ipad|ipod/i.test(agent)) {
			$('#perintegral').css({"margin-top":"225px"});
		}
	})
