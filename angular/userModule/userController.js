userModule.controller('userController', ['$scope', '$rootScope', 
function($scope, $rootScope){
	$scope.data = [
	    {
	        "name":       	"Nixon",
	        "address":   	"139.59.152.135",
	        "created":     	"2011/06/25",        
	        "more": 	'<id class="dropdown"><button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">more <span class="caret"></span></button><ul class="dropdown-menu" aria-labelledby="dropdownMenu1"><li><a href="#">Add a Domains</a></li><li><a href="#">Access Console</a></li><li><a href="#">Resize Droplet</a></li><li><a href="#">View Usage</a></li><li><a href="#">Enamle Backups</a></li></ul></id>',
	    },
	    {
	        "name":       	"Nixon",
	        "address":   	"139.59.152.135",
	        "created":     	"2011/06/25",        
	        "more": 	'<id class="dropdown"><button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">more <span class="caret"></span></button><ul class="dropdown-menu" aria-labelledby="dropdownMenu1"><li><a href="#">Add a Domains</a></li><li><a href="#">Access Console</a></li><li><a href="#">Resize Droplet</a></li><li><a href="#">View Usage</a></li><li><a href="#">Enamle Backups</a></li></ul></id>',
	    },
	    {
	        "name":       	"Nixon",
	        "address":   	"139.59.152.135",
	        "created":     	"2011/06/25",        
	        "more": 	'<id class="dropdown"><button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">more <span class="caret"></span></button><ul class="dropdown-menu" aria-labelledby="dropdownMenu1"><li><a href="#">Add a Domains</a></li><li><a href="#">Access Console</a></li><li><a href="#">Resize Droplet</a></li><li><a href="#">View Usage</a></li><li><a href="#">Enamle Backups</a></li></ul></id>',
	    },
	    {
	        "name":       	"Winters",
	        "address":   	"139.60.152.137",
	        "created":     	"2011/07/25",
	        "more": 	'<id class="dropdown"><button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">more <span class="caret"></span></button><ul class="dropdown-menu" aria-labelledby="dropdownMenu1"><li><a href="#">Add a Domains</a></li><li><a href="#">Access Console</a></li><li><a href="#">Resize Droplet</a></li><li><a href="#">View Usage</a></li><li><a href="#">Enamle Backups</a></li></ul></id>',
	    }
	]
    $scope.table = $('#table_id').DataTable({
    	data: $scope.data,
    	columns: [
    	    { data: 'name' },
    	    { data: 'address' },
    	    { data: 'created' },
    	    { "orderable": false, data: 'more'}
    	],

    });


}]);