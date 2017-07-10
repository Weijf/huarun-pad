angular.module('index.controller', ['index.service'])
	.controller('IndexCtrl', function($scope, $state, GlobalVariable, $window,$cordovaVibration) {
		//getHeaderSlideData();
		//headerChangeColor();

		$scope.exit = function() {
			//			          ionic.Platform.exitApp();

			MXCommon.getCurrentUser(
				function(result) {
					//这里可以处理获取到的当前用户数据
					console.log("info 1:" + result.name);
					console.log("info 2:" + angular.toJson(result));
					console.log("info 3:" + angular.fromJson(result));
				}
			);

			MXWebui.closeWindow();
		}

		// 监听页面激活事件
		$scope.$on('$ionicView.enter', function() {
			//			MXWebui.disableBackKey();
			initHeaderSlide();
		})

		// 头部滚动条数据
		function getHeaderSlideData() {
			$scope.headerSlideData = [{
				src: "img/home/top0.png"
			}, {
				src: "img/home/top1.png"
			}, {
				src: "img/home/top2.png"
			}, {
				src: "img/home/top3.png"
			}];
		}

		// 初始化头部滚动条
		function initHeaderSlide() {
			var headerSwiper = new Swiper('#headerSlider', {
				slidesPerView: 1,
				paginationClickable: true,
				centeredSlides: true,
				autoplay: 5000,
				autoplayDisableOnInteraction: false,
				loop: true,
				// 如果需要分页器
				pagination: '.swiper-pagination',
				// 改变自动更新
				observer: true,
				observeParents: true

			});
		}

		// 改变头部颜色
		function headerChangeColor() {
			var bg = $window.document.getElementById('home-content');
			var nowOpacity = 0;
			bg.onscroll = function(event) {
				if(this.scrollTop / 250 < .85) {
					nowOpacity = this.scrollTop / 250;
				}
				document.getElementById("headerBar-bg").style.opacity = nowOpacity;
			}
		}

		$scope.items = [{
			title: '协同项目审批',
			content: '厦门金圆担保公司协同关于xxx的协同项目',
			date: '2016/12/28',
		}, {
			title: "厦门金圆担保公司协同",
			content: '厦门金圆担保公司协同关于xxx的协同项目',
			date: '2016/12/31',
		}, {
			title: "厦门金圆担保公司协同",
			content: '厦门金圆担保公司协同关于xxx的协同项目需要作出处理',
			date: '2016/12/31',
		}];

		$scope.test = function(){
			$cordovaVibration.vibrate(parseInt(2000));
			//navigator.notification.vibrate(2000);
		}

		$scope.func_msgClick = function(item) {
			var msg = angular.toJson(item);
			$state.go("msgDetail", {
				data: msg
			}, {
				reload: true
			});
		}
		/*------------------旧的------------------*/


        /*------------------新的------------------*/
		/*数据*/
        $scope.nav_list = [{
            href:'backlogList',
            img_src: 'img/index/nav0.png',
            title: '待办事项'
        },{
            href:'backlogList',
            img_src: 'img/index/nav1.png',
            title: '已办事项'
        },{
            href:'partnerList',
            img_src: 'img/index/nav2.png',
            title: '合作伙伴'
        },{
            href:'clue({data:3})',
            img_src: 'img/index/nav3.png',
            title: '项目查询'
        },{
            href:'clue({data:2})',
            img_src: 'img/index/nav4.png',
            title: '机会查询'
        },{
            href:'clue({data:1})',
            img_src: 'img/index/nav5.png',
            title: '线索查询'
        },{
            href:'companyCustomerList',
            img_src: 'img/index/nav6.png',
            title: '客户查询'
        }]

        $scope.todo_list = [{
            year: '2017',
            time: '05.31',
            color: '#FF5357',
            title: '协同项目审批',
            content: '厦门金圆担保公司协同关于xxx的协同项目',
            name: '张茂宜',
        }, {
            year: '2017',
            time: '06.01',
            color: '#53ACFF',
            title: "厦门金圆担保公司协同",
            content: '厦门金圆担保公司协同关于xxx的协同项目',
            name: '张茂宜',
        }, {
            year: '2017',
            time: '05.31',
            color: '#53ACFF',
            title: "厦门金圆担保公司协同",
            content: '厦门金圆担保公司协同关于xxx的协同项目需要作出处理',
            name: '张茂宜',
        }, {
            year: '2017',
            time: '05.31',
            color: '#53ACFF',
            title: "厦门金圆担保公司协同",
            content: '厦门金圆担保公司协同关于xxx的协同项目需要作出处理',
            name: '张茂宜',
        }];

        $scope.show_list = function () {
            MXWebui.closeWindow();
        }

	})