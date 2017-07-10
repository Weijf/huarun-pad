angular.module('integralquery.controller', ['integralquery.service'])
	.controller('IntegralQueryCtrl', function($scope, $state, GlobalVariable, $ionicBackdrop,$window,$timeout,$ionicHistory) {
		$ionicBackdrop.retain();
		$timeout(function() {
			$ionicBackdrop.release();
		}, 1000);
		$scope.goBack = function() {
			$ionicHistory.goBack();
		};
	})
