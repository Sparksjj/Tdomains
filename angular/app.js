var app = angular.module("myApp", ['ngRoute', 'userModule', 'chekServiceModule', 'adminModule', 'autorizationModule', 'basketModule']);

  app.config(function($routeProvider) {
      $routeProvider
          .when('/', {
              templateUrl: 'views/chekDomains.html',
              controller: 'checkServiceController',
          })
          .when('/user', {
              templateUrl: 'views/user.html',
              controller: 'userController',
          })
          .when('/admin', {
              templateUrl: 'views/admin.html',
              controller: 'adminController',
          })
          .when('/basket', {
              templateUrl: 'views/basket.html',
              controller: 'checkServiceController',
          })
          .otherwise({ 
            redirectTo: '/'
          });
  });


app.controller('appCtrl', ['$scope', "$rootScope",
    function($scope, $rootScope) {

    $rootScope.basketItems = [];
    }]);