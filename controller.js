angular.module("AppPrincipal")
.directive("fondoImg",function(){
	return function(scope,element,attrs){
		attrs.$observe('fondoImg',function(value){
			element.css({
				'background-image': "url('images/"+value+"')",
				'background-size':'cover'
			})
		})
	}
})
.directive("catalogoImg",function(){
	return function(scope,element,attrs){
		attrs.$observe('catalogoImg',function(value){
			element.css({
				'background-image': "url('images/"+value+"')",
				'background-size':'cover',
				'width': '100%',
				'height': '100%'
			})
		})
	}
})
.controller("HomeController",function($scope,$http){
	$scope.datos = [];
	$http.get("home.json")
		.success(function(data){
			console.log(data);
			$scope.datos = data;
		})
})
.controller("CatalogoController",function($scope,$http,$routeParams){
	$scope.globaldata = [];
	console.log($routeParams.option);
	// $http.get("Data/"+$routeParams.option+".json")
	$http.get("Data/series.json")
	.success(function(data){
		$scope.globaldata = data;
	})

})
.controller("SeriesjapoController",function($scope,$http,$routeParams){
	console.log($routeParams.option);
	$scope.globaldata = [];
	$http.get("Data/"+$routeParams.option+".json")
	.success(function(data){
		$scope.globaldata = data;
	})

})
.controller("MangatomosController",function($scope,$http,$routeParams){
	console.log($routeParams.option);
	$scope.globaldata = [];
	$http.get("Data/"+$routeParams.option+".json")
	.success(function(data){
		$scope.globaldata = data;
	})

})