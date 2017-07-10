angular.module('organizationintegralquery.controller', ['organizationintegralquery.service'])
	.controller('OrganizationIntegralQueryCtrl', function($scope, $state, GlobalVariable, $ionicBackdrop,$window,$timeout,$ionicHistory) {
		$ionicBackdrop.retain();
		$timeout(function() {
			$ionicBackdrop.release();
		}, 1000);
		$scope.goBack = function() {
			$ionicHistory.goBack();
		};
		var agent = navigator.userAgent;
		if (/iphone|ipad|ipod/i.test(agent)) {

			$('#orgintegral').css({"margin-top":"225px"});

		}
	})
