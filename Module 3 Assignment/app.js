(function (){
	'use strict';
	angular.module("MyApp", [])
	.controller("MenuController", MenuController)
	.service("MenuService",MenuService);

	MenuController.$inject = ['MenuService'];
	function MenuController(MenuService){
		var menu = this;
		var i;
		var desc;
		menu.searchText = "";
		var promise = MenuService.getMenuItems();
		promise.then(function(response){
			menu.menuItems = response.data.menu_items;
		})
		.catch(function(error){
			console.log("Something went wrong.");
		});

		menu.search = function(){
			menu.dispMenu = [];
			for(i=0;i<menu.menuItems.length;i++){
				desc = menu.menuItems[i].description;
				if(desc.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").split(' ').includes(menu.searchText)){
					menu.dispMenu.push(menu.menuItems[i]);
				};
			};

		};

		menu.remove = function(index){
			menu.dispMenu.splice(index,1);
		};
		
	}

	MenuService.$inject = ['$http'];
	function MenuService($http){
		var service = this;
		service.getMenuItems = function(){
			var response = $http({
				method : "GET",
				url : ("https://davids-restaurant.herokuapp.com/menu_items.json")
			});
			return response;
		}

	}
})();