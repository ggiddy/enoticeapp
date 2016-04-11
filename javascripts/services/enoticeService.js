/* angular */

var enoticeService = angular.module('enoticeService', []);

enoticeService.factory('Notice', function($http){
	var noticeFactory = {};

	noticeFactory.domainUrl = 'http://192.168.43.50/enotice/';

	//service to login users
	noticeFactory.userLogin = function(jsonCredentials){
		return $http.post(noticeFactory.domainUrl + 'api/login.php', jsonCredentials);
	};

	//service to login users
	noticeFactory.userRegister = function(regDetails){
		return $http.post(noticeFactory.domainUrl + 'api/register.php', regDetails);
	};

	//service to get notices
	noticeFactory.getNotices = function(){
		return $http.get(noticeFactory.domainUrl + 'api/notices.php');
	};

	return noticeFactory;
});