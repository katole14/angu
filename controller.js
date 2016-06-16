app.controller("mycontroller",function($scope,$http){
	$scope.getCategories=function(){
		var url="http://localhost:8080/projectManagementSystem1/JsonServlet?action=category";
		$http.get(url)
					.success(function(response){
						$scope.categories=response;
					})
					.error(function(msg){
						$scope.categories=msg;
					});
	
	};
	
			
});