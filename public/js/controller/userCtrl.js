app.controller('userCtrl', function($scope, toastr, $location, $rootScope, $http){

	getUsers();

	$scope.validateUser = function(user){
		$rootScope.loggedIn = false;
		if(angular.isDefined(user)){
			for (var i = 0; i<$scope.users.length; i++) {
				if(angular.equals($scope.users[i].name, user.name) && angular.equals($scope.users[i].pwd, user.pwd)){
					$rootScope.User = $scope.users[i];
					$rootScope.loggedIn = $scope.users[i];
					i = $scope.users.length;
				}
			}
		}
		if($rootScope.loggedIn){
			$location.path('dashboard');
			toastr.success('','Bienvenido '+user.name,{ timeOut: 2500, progressBar: true });
		}else{
			$rootScope.loggedIn = false;
			toastr.error('Credenciales Incorrectas!','Intente de nuevo',{ timeOut: 2500, progressBar: true });
		}

	}
	$scope.closeSession = function(){
		toastr.error('','Adios '+$rootScope.User.name,{ timeOut: 2500, progressBar: true });
		delete $rootScope.User;
		delete $rootScope.loggedIn;
		$location.path('/');
	}

	$scope.createUser = function(){
		var user = { cc:"1234567", data:"Walter", email:"walter@hotmail.com", name:"Walter", pwd:"987654321" };
		$http({
			method: 'POST',
			data: user,
			url: '/api/v1/users'
		}).then(function successCallback(response) {
			console.log("success");
		}, function errorCallback(response) {
			console.log("errorCallback: " + response);
		});
	}

	function getUsers(){
		$http({
			method: 'GET',
			url: '/api/v1/users'
		}).then(function successCallback(response) {
			$scope.users = response.data;
		}, function errorCallback(response) {
			console.log("errorCallback: " + response);
		});
	}

});
