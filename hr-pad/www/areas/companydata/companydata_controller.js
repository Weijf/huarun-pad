angular.module('companydata.controller', ['companydata.service'])
	.controller('CompanydataCtrl', function($scope, $state, GlobalVariable, $ionicBackdrop,$window,$timeout,$ionicHistory) {
		$ionicBackdrop.retain();
		$timeout(function() {
			$ionicBackdrop.release();
		}, 1000);
		$scope.goBack = function() {
			$ionicHistory.goBack();
		};
	})
