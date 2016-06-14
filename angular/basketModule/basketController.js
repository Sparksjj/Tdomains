chekService.controller('basketController', ['$scope', '$rootScope', 'basketStorage',
function($scope, $rootScope, basketStorage){
	$scope.basketItems = basketStorage.getItems()

	$scope.removeBasketItem = function($event, name){
		basketStorage.removeItem(name);
	}

	$rootScope.$on('addItem', function(){
		$scope.basketItems = basketStorage.getItems()
	})
}]);