myApp.controller("mainController", ["$scope", "$location", "$http", "$routeParams", "$uibModal", "$rootScope", function ($scope, $location, $http, $routeParams, $uibModal, $rootScope) {

	$scope.data = [{
		id: '',
		firstName: '',
		lastName: '',
		email: '',
		position: ''
	}];
	
	$scope.productDetails = [];
	
	$scope.init = function () {
		$('.flexslider').flexslider({
					animation: "slide",
					start: function(slider){
					  $('body').removeClass('loading');
					}
				  });
		//$scope.getProductDetails();
		
	}
	
	$scope.getProductDetails = function () {
		$http({
			method: 'GET',
			url: '/productDetails'
		}).then(function success(response) {
			$scope.productDetails = response.data;
			
		}, function error(response){
			alert('error');
		});		
	}
	
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
	  
	
	$scope.fetchEmployeeDetails = function () {
		$http({
			method: 'GET',
			url: '/employee'
		}).then(function success(response) {
			console.log(response);
			$scope.data = response.data.data;
			$rootScope.employeeData = response.data.data;
		}, function error(response){
			alert('error');
		});		
	}
	
	$scope.deleteEmployee = function (currentData) {
		$http({
			method: 'POST',
			url: '/employee/delete',
			data: currentData
		}).then(function success(response) {
			$scope.init();
		}, function error(response){
			alert('error');
		});
	}
	
	$scope.init();
	
}]);