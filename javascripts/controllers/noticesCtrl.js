/* global angular */

var noticesCtrl = angular.module('noticesCtrl', []);

noticesCtrl.controller('noticesController', function($scope, $rootScope, $location, Notice){

	//array to hold all the notices
	$scope.notices = [];

	angular.element(document).ready(function(){
        Notice.getNotices().success(function(data){
            angular.forEach(data, function(value, key){
                $scope.notices.push(value);
            });
        });
	});

	$scope.getClicked = function(id){

		//get the selected notice from the array of all notices
		var result = $scope.notices.filter(function(notice){return notice.noticeID === id;});

		//holds the details of the selected notice.
		$rootScope.selectedNotice = result[0];

		$location.path('/notice');

		return;
	};

	$scope.animateElementIn = function($el){

        //$el.removeClass('hidden');
        $el.addClass('animated slideInLeft'); // this example leverages animate.css classes
  	};

  	$scope.animateElementOut = function($el){
  		
        //$el.addClass('hidden');
        $el.removeClass('animated slideInLeft'); // this example leverages animate.css classes
  	};
});