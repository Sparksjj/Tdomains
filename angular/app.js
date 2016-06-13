var app = angular.module("myApp", ['ngRoute', 'userModule', 'chekServiceModule', 'adminModule', 'autorizationModule']);

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
          .otherwise({ 
            redirectTo: '/'
          });
  });


app.controller('appCtrl', ['$scope', '$location', '$userProvider', "$http",
    function($scope, $location, $userProvider, $http) {


    }]);