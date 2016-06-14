chekService.controller('checkServiceController', ['$scope', '$rootScope', '$timeout', "checkServiceGetRequests", 'basketStorage',
function($scope, $rootScope, $timeout, getRequests, basketStorage){
	$scope.domains = [];
	$scope.hostName = '';
	$scope.load = false;
	$scope.basketItems=[];
	$scope.currentDomains=[];

	$scope.checkDomain = function(){
		$scope.load = true;
		if ($scope.hostName.length < 2) {return};
		for (var i = $scope.currentDomains.length - 1; i >= 0; i--) {
			if($scope.currentDomains[i].name == $scope.hostName){
				for (var g = 2; g >= 0; g--) {
					
					for(val in $scope.domains) if ($scope.domains.hasOwnProperty(val)) {
						if ($scope.domains[val] && $scope.currentDomains[i].domains.indexOf(val) == -1) {
							$scope.currentDomains[i].domains.push(val)
						};	
					}

				}
				return;
			}
		}

		var data = {
			id: $scope.currentDomains.length,
			name: $scope.hostName,
			domains: [],
			loadComplite: true,
		}

		/*add checked domains*/
		for(val in $scope.domains) if ($scope.domains.hasOwnProperty(val)) {
			if ($scope.domains[val]) {
				data.domains.push(val)
			};	
		}
		
		/*if don't check anising looking all*/
		if (!data.domains.length) {
			data.domains = ["by", "eu", "tm"];
		};
		$scope.currentDomains.push(data)
		$scope.hostName = "";

		/*
		getRequests.checkDomain($scope.hostName, $scope.domains).then(function(res){
			$scope.load = false;
			//do smc
		}, function(err){
			$scope.load = false;
			//do smc
		})*/

		$timeout(function(){
			data.loadComplite = false;	
		}, 1000, data)
	}

	$scope.removeDomain = function($event, id, domain){
		var pos = id;

		for (var j = $scope.currentDomains.length - 1; j >= 0; j--) {
			if($scope.currentDomains[j].id == pos){

				for (var i = $scope.currentDomains[j].domains.length - 1; i >= 0; i--) {
		
					if($scope.currentDomains[j].domains[i] == domain){
						
						if ($scope.currentDomains[j].domains.length==1) {
							$scope.currentDomains.splice(j, 1)
						}else{
							$scope.currentDomains[j].domains.splice(i, 1);
						};
		
					}
				};
			}
		};
	}

	$scope.addInBascet = function($event, name){
		basketStorage.addItem({name: name, period: 1})
	}
}]);