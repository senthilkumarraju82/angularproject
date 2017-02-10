myApp.controller("fruitsController", ["$scope", "$location", "$http", "$routeParams", "$uibModal", "$rootScope", function ($scope, $location, $http, $routeParams,$uibModal, $rootScope) {
	
	$scope.fruitDetails = [];
	$scope.cartItems = [];

	
	
	$scope.init = function () {
		//$scope.fetchSelectedEmployee($routeParams.id);
		$scope.getFruitDetails();
		//$scope.cartItems = $rootScope.globalCartItems;
	}
	
	 $scope.addtocartpopup = function(orderitem) {
        //alert("calling");
		$scope.cartItems.push(orderitem);
		if($rootScope.globalCartItems === undefined) {
			$rootScope.globalCartItems = [];
		}
		$rootScope.globalCartItems.push(orderitem);
	//	console.log("inside fruit add cart : "+ JSON.stringify($rootScope.globalCartItems));
      };  
		
		$scope.opencartpopup = function() {
        if($scope.globalCartItems && $scope.globalCartItems.length) {
		$uibModal.open({
			templateUrl: 'carthome.html',
			controller: 'modalInstanceCtrl',
			resolve: {
				cartItems: function () {
					return $scope.globalCartItems;
				}
			}
		}); 
		}
		else {
		alert("Please add Items to the cart");
		}
      };
	  
	$scope.getFruitDetails = function () {
		$http({
			method: 'GET',
			url: '/fruitDetails'
		}).then(function success(response) {
			$scope.fruitDetails = response.data;
			
		}, function error(response){
			alert('error');
		});		
	}
	

		
	$scope.fetchSelectedEmployee = function (id) {
		angular.forEach($rootScope.employeeData, function (value, key) {
			 if (value.id == id) {
				 $scope.formData = value;
			 }
		});		
	}
	
	
	
	$scope.reset = function () {
		$scope.resetFormData();
	}
	
	$scope.resetFormData = function () {
		$scope.formData = {		
			firstName: '',
			lastName: '',
			email: '',
			position: ''
		}
	}
		
	$scope.submitForm = function (isValid) {		
	    $scope.addEmployeeDetails();
	}
	
	$scope.addEmployeeDetails = function () {
		if($routeParams.id) {
			$http({
				method: 'POST',
				url: '/employee/edit',
				data: $scope.formData
			}).then(function success(response) {
				$location.path('/');
			}, function error(response){
				alert('error');
			});			
		} else {
			$http({
				method: 'POST',
				url: '/employee/add',
				data: $scope.formData
			}).then(function success(response) {
				$location.path('/');
			}, function error(response){
				alert('error');
			});				
		}		
	}
	
	$scope.init();
	
}]);

