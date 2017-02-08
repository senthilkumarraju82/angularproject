var myApp = angular.module('myApp', ['ngRoute', 'ui.bootstrap', 'google-maps']);

myApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'home.html',
        controller: 'mainController'
      })
      .when('/fruits', {
        templateUrl: 'fruits.html',
        controller: 'fruitsController'
      })
      .when('/dryfruits', {
        templateUrl: 'dryfruits.html',
        controller: 'dryFruitsController'
      })
      .when('/view/:id', {
        templateUrl: 'view.html',
        controller: 'viewController'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);