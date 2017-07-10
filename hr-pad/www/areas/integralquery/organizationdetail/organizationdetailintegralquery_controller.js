angular.module('organizationdetailintegralquery.controller', ['organizationdetailintegralquery.service'])
	.controller('OrganizationDetailIntegralQueryCtrl', function($scope, $state, GlobalVariable, $ionicBackdrop,$window,$timeout,$ionicHistory) {
		$ionicBackdrop.retain();
		$timeout(function() {
			$ionicBackdrop.release();
		}, 1000);
		$scope.goBack = function() {
			$ionicHistory.goBack();
		};
		var agent = navigator.userAgent;
		if (/iphone|ipad|ipod/i.test(agent)) {

			$('#orgintegraldetail').css({"margin-top":"125px"});

		}
	})
