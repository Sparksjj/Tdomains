var app = angular.module("myApp", ['ngRoute', 'userModule', 'chekServiceModule', 'adminModule', 'autorizationModule', 'basketModule']);

  app.config(function($routeProvider) {
      $routeProvider
          .when('/', {
              resolve: function(){console.log(123)},
              templateUrl: 'views/chekDomains.html',
              controller: 'checkServiceController',
          })
          .when('/user', {
              resolve: ['security', function requireUser(security) {
                //chek user
              }],
              templateUrl: 'views/user.html',
              controller: 'userController',
          })
          .when('/admin', {
              resolve: ['security', function requireAdminUser(security) {
                //chek admin
              }],
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

}]);

app.directive('ngFooter', function() { 
  return { 

    restrict: 'EA', 
    scope: true, 
    templateUrl: 'views/template/footer.html',

    link: function($scope, element, attr){
      
    }

  }; 
});