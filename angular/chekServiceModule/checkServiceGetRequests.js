chekService.factory('checkServiceGetRequests', function($http){

	var checkDomain = function(host, domains){

		return $http({
                method: 'GET',
                url: "http...",
                data: {}
              })
	}
	return {
		checkDomain: checkDomain,
	}
});