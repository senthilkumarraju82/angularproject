myApp.controller("viewController", ["$scope", "$location", "$routeParams", "$rootScope", function ($scope, $location, $routeParams, $rootScope) {

	$scope.data = [{
		id: '',
		firstName: '',
		lastName: '',
		email: '',
		position: ''
	}];
	
	$scope.init = function () {
		$scope.viewEmployeeDetails();
	}
	
	$scope.viewEmployeeDetails = function () {
		angular.forEach($rootScope.employeeData, function (value, key) {
			 if (value.id == parseInt($routeParams.id)) {
				 $scope.data = value;
			 }
		});	
	}
	
	$scope.backToHome = function () {
		$location.path('/');
	}
	
	$scope.init();
	
}]);