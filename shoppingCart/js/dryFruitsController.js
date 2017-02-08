myApp.controller("dryFruitsController", ["$scope", "$location", "$http", "$routeParams", "$uibModal", "$rootScope", function ($scope, $location, $http, $routeParams, $uibModal, $rootScope) {
	
	$scope.dryfruitDetails = [];
	$scope.cartItems = [];
	
	$scope.init = function () {
		//$scope.fetchSelectedEmployee($routeParams.id);
		$scope.getDryFruitDetails();
		//$scope.cartItems = $rootScope.globalCartItems; 
				
	}
	
	$scope.addtocartpopup = function(orderitem) {
        //alert("calling");
		$scope.cartItems.push(orderitem);
		console.log($scope.cartItems);
		if($rootScope.globalCartItems === undefined) {
			$rootScope.globalCartItems = [];
		}
		$rootScope.globalCartItems.push(orderitem);
		
      };  
		
		$scope.opencartpopup = function() {
        $uibModal.open({
			templateUrl: 'carthome.html',
			controller: 'modalInstanceCtrl',
			resolve: {
				cartItems: function () {
					return $scope.globalCartItems;
				}
			}
		});
      };
	  
	$scope.getDryFruitDetails = function () {
		$http({
			method: 'GET',
			url: '/dryfruitDetails'
		}).then(function success(response) {
			$scope.dryfruitDetails = response.data;
			
		}, function error(response){
			alert('error');
		});		
	}
	
		
	
	$scope.init();
	
}]);