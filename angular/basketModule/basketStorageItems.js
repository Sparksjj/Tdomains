basket.factory('basketStorage', function($http, $rootScope){

	var addItem = function(data){

		var items = localStorage.getItem('tdomainsBasketItems');
		if(items){
			items = JSON.parse(items);
			for (var i = items.length - 1; i >= 0; i--) {
				if(items[i].name == data.name){
					return;
				}
			}
		}else{
			items = [];
		};

		items.push(data);
		localStorage.setItem('tdomainsBasketItems', JSON.stringify(items));		
		$rootScope.$emit('addItem')
	}
	
	var removeItem = function(name){
		var items = JSON.parse(localStorage.getItem('tdomainsBasketItems'));

		for (var i = items.length - 1; i >= 0; i--) {
			if(items[i].name == name){
				items.splice(i, 1);
			}
		}
		localStorage.setItem('tdomainsBasketItems', JSON.stringify(items));		
		$rootScope.$emit('addItem')
	}

	var getItems = function(){
		var items = localStorage.getItem('tdomainsBasketItems')
		if(items){
			return JSON.parse(items);
		}else{
			return [];
		};
	}


	return {
		addItem: addItem,
		removeItem: removeItem,
		getItems: getItems,
	}
});