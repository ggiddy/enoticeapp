/* global angular */

var enoticeCtrl = angular.module('mainCtrl', []);

enoticeCtrl.controller('mainController', function($scope, $rootScope, $location, Notice){

	//object to hold the user's session data
	$rootScope.currentUser = {
                        username: ''
	};

	//function to login users into the system
	$scope.loginUser = function(){

		//variable to hold any messages from the server
		$scope.message = '';

		//convert the login credentials into json format
		$scope.jsonCredentials = JSON.stringify($scope.credentials);

		//call the service to login user with the json credentials
		Notice.userLogin($scope.jsonCredentials).success(function(data){
			
			//check if the authentication was successful
			if(!data.success){
                                                        alert(data.message);
                                                        return;
			}

			//clear the credentials object
			$scope.credentials = {email: '', password: ''};

			//set the session data
			$rootScope.currentUser.username = data.username;

			//redirect user to notices page
			$location.path('/notices');

			return;
		});
	};

	//function to register users into the system
	$scope.registerUser = function(){

		//variable to hold any messages from the server
		$scope.message = '';

		//convert the login credentials into json format
		$scope.regDetails = JSON.stringify($scope.regData);

		//call the service to login user with the json credentials
		Notice.userRegister($scope.regDetails).success(function(data){
			
			//check if the authentication was successful
			if(!data.success){
				alert(data.message);
				return;
			}

			//clear the credentials object
			$scope.regData = {username: '', email: '', password: ''};

			//redirect user to notices page
			$location.path('/login');

			return;
		});
	};
});