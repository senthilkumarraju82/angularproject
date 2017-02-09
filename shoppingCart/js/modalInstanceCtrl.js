myApp.controller("modalInstanceCtrl", ["$scope", "$location", "$uibModalInstance", "$uibModal", "$routeParams", "$rootScope", "cartItems", function ($scope, $location, $uibModalInstance, $uibModal, $routeParams, $rootScope, cartItems) {

	$scope.orderlist = [];
	$scope.perkg = 1;
	
    $scope.init = function () {
				
		$scope.total = 	$scope.totalcalculation(cartItems);
		$scope.orderlist = cartItems;
		
	};
	
		
	$scope.cancel = function () {
		$uibModalInstance.dismiss('cancel');
	};
	
	$scope.ok = function () {
		$uibModalInstance.dismiss('ok');
	};
	
	$scope.removeitem = function (itemremove) {
		var index = cartItems.indexOf(itemremove);
		cartItems.splice(index, 1); 
		$scope.orderlist = cartItems;		
		$scope.total = 	$scope.totalcalculation(cartItems);
		
	};
	
	$scope.itemQuantityChange = function (itemDetails, that) {
		console.log(parseInt(that.perkg) * itemDetails.newPrice);
		var index = cartItems.indexOf(itemDetails);
		cartItems[index].newPrice = parseInt(that.perkg) * itemDetails.newPrice;
		$scope.orderlist = cartItems;		
		$scope.total = 	$scope.totalcalculation(cartItems);
		
	};
	
	$scope.totalcalculation = function(cartItems) {
		$scope.total = 0;
		angular.forEach(cartItems,function(value,index){
               $scope.total = $scope.total +  value.newPrice;
            });
			return Math.ceil($scope.total);
	};
	
	$scope.customerInformation = function() {
        $uibModal.open({
			templateUrl: 'customerInfoForm.html',
			controller: 'customerFormCtrl',
			resolve: {
				cartItems: function () {
					return $scope.globalCartItems;
				}
			}
		});
      };
	
	$scope.init();
}]);