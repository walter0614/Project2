angular.module('angularClient', []); 
function mainController($scope, $http) { 
	$scope.formData = {};
	getClients();

	// Create Client
	$scope.createClient = function(){
		console.log($scope.formData);
		$http.post('/api/v1/users', $scope.formData)
		.success(function(data) {
			$scope.formData = {};
			console.log("success");
		})
		.error(function(data) {
			console.log('Error:' + data);
		});
	};

	// Delete Client
	$scope.deleteClient = function(id) {
		$http.delete('/api/v1/users/' + id)
		.success(function(data) {
			getClients();
		})
		.error(function(data) {
			console.log('Error:' + data);
		});
	};

	function getClients(){
		$http.get('/api/v1/users')
		.success(function(data) {
			$scope.clients = data;
		})
		.error(function(data) {
			console.log('Error: ' + data);
		}); 
	};
}