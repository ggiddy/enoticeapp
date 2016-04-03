/* global angular */

var routes = angular.module('app_routes', ['ngRoute']);

routes.config(function($routeProvider, $locationProvider){      
	$routeProvider
		.when('/', {
			templateUrl: 'enoticeapp/home.html',
			controller: 'mainController'
		})
		.when('/login', {
			templateUrl: 'enoticeapp/templates/login.html',
			controller: 'mainController'
		})
		.when('/register', {
			templateUrl: 'enoticeapp/templates/register.html',
			controller: 'mainController'
		})
		.when('/notices', {
			templateUrl: 'enoticeapp/templates/notices.html',
			controller: 'noticesController'
		})
		.when('/notice', {
			templateUrl: 'enoticeapp/templates/notice.html',
			controller: 'noticesController'
		});
	});