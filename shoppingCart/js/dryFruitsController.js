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
	//	console.log("addtocart:"+JSON.stringify($scope.cartItems));
		if($rootScope.globalCartItems === undefined) {
			$rootScope.globalCartItems = [];
		}
		$rootScope.globalCartItems.push(orderitem);
		//console.log("inside add cart : "+ JSON.stringify($rootScope.globalCartItems));
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
		else{
			alert("Please add Items to the cart");
		}
      };
	  
	$scope.getDryFruitDetails = function () {
		$http({
			method: 'GET',
			url: '/dryfruitDetails'
		}).then(function success(response) {
			$scope.dryfruitDetails = response.data;
			//console.log("total items: "+ JSON.stringify($scope.dryfruitDetails));
		}, function error(response){
			alert('error');
		});		
	}
	
		
	
	$scope.init();
	
}]);