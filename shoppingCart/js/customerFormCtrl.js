myApp.controller("customerFormCtrl", ["$scope", "$location", "$uibModalInstance", "$routeParams", "$rootScope", "cartItems", function ($scope, $location, $uibModalInstance, $routeParams, $rootScope, cartItems) {

	$scope.map = {
    control: {},
    center: {
        latitude: -37.812150,
        longitude: 144.971008
    },
    zoom: 14
  };
  
  $scope.cancel = function () {
		$uibModalInstance.dismiss('cancel');
	};
  
  // marker object
  $scope.marker = {
    center: {
        latitude: -37.812150,
        longitude: 144.971008
    }
  }
  var directions =
            {
                TotalDistance: 0,
                TotalDuration: {},
                Segments: []
            };
 var origin = "Anakaputhur, chennai, Tamil nadu";
  // instantiate google map objects for directions
  var directionsDisplay = new google.maps.DirectionsRenderer();
  var directionsService = new google.maps.DirectionsService();
  var geocoder = new google.maps.Geocoder();
  
  // directions object -- with defaults
  $scope.customer = {
    cusname: "",
    destination: "",
	cusphonenumber: "",
	cusmailid: "",
    showList: false
  }
  
  // get directions using google maps api
  $scope.getDirections = function () {
    var request = {
      origin: origin,
      destination: $scope.custinfo.pincode,
      travelMode: google.maps.DirectionsTravelMode.DRIVING
    };
	
    directionsService.route(request, function (response, status) {
      if (status === google.maps.DirectionsStatus.OK) {
	    var dist = response.routes[0].legs[0].distance.text;
		dist = parseInt(dist.slice(0,-2));
		console.log(dist);
		if(dist <= 15) {
				$scope.finalCustomerOrderAndInfo();
		} else {
		alert("we can not deliver ur order");
		}
      //  directionsDisplay.setDirections(response);
      //  directionsDisplay.setMap($scope.map.control.getGMap());
      //  directionsDisplay.setPanel(document.getElementById('directionsList'));
      //  $scope.directions.showList = true;
	//	console.log(directionsDisplay);
      } else {
        alert('Google route unsuccesfull!');
      }
    });
  }
  
  $scope.finalCustomerOrderAndInfo = function () {
		var order = {"customerInformation":"","orderDetails":""};
		order["customerInformation"] = $scope.custinfo;
		order["orderDetails"] = $scope.globalCartItems;
		//console.log(JSON.stringify(order));
		//window.location.href = '/';
  }
}]);