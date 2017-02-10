myApp.controller("modalInstanceCtrl", ["$scope", "$location", "$uibModalInstance", "$uibModal", "$routeParams", "$rootScope", "cartItems", function ($scope, $location, $uibModalInstance, $uibModal, $routeParams, $rootScope, cartItems) {

	$scope.orderlist = [];
	//$scope.perkg = 1;
	
    $scope.init = function () {
				
		$scope.total = 	$scope.totalcalculation(cartItems);
		$scope.orderlist = cartItems;
		//console.log("inside cart page : "+ cartItems);
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
	
	$scope.itemQuantityChange = function (itemDetails, kg) {
	//console.log("kg details :"+ kg);
		if(kg) {
			var index = cartItems.indexOf(itemDetails);
			cartItems[index].totalPrice = parseInt(kg) * itemDetails.basePrice;
			cartItems[index].kg = kg;
			$scope.orderlist = cartItems;		
			$scope.total = 	$scope.totalcalculation(cartItems);
			//console.log(cartItems);
		}
	};
	
	$scope.totalcalculation = function(cartItems) {
		$scope.total = 0;
		angular.forEach(cartItems,function(value,index){
               $scope.total = $scope.total +  value.totalPrice;
            });
			return Math.ceil($scope.total);
	};
	
	$scope.customerInformation = function() {
        $uibModal.open({
			templateUrl: 'customerInfoForm.html',
			controller: 'customerFormCtrl',
			resolve: {
				cartItems: function () {
					$scope.globalCartItems.push({"totalAmount":$scope.total});
					return $scope.globalCartItems;
				}
			}
		});
      };
	
	$scope.init();
}]);