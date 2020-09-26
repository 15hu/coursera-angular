(function (){
	angular.module("MyApp", [])
	.controller("MyController", MyController);
	MyController.$inject = ['$scope'];
	function MyController($scope){
		$scope.values = "";
		$scope.message = "";
		$scope.display = function(){
			var x= $scope.values.split(',');
			if(x.length == 1 && x[0]==""){
				$scope.message = "Please enter data first"
			}
			else{
				if(x.length < 4){
					$scope.message = "Enjoy!";
				}
				else{
					$scope.message = "Too much!";
				}
			}
			

		};
	};
})();