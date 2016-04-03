/* angular */

var enoticeService = angular.module('enoticeService', []);

enoticeService.factory('Notice', function($http){
	var noticeFactory = {};

	//service to login users
	noticeFactory.userLogin = function(jsonCredentials){
		return $http.post('http://192.168.43.50/enotice/api/login.php', jsonCredentials);
	};

	//service to login users
	noticeFactory.userRegister = function(regDetails){
		return $http.post('http://192.168.43.50/enotice/api/register.php', regDetails);
	};

	//service to get notices
	noticeFactory.getNotices = function(){
		return $http.get('http://192.168.43.50/enotice/api/notices.php');
	};

	return noticeFactory;
});