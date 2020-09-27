(function(){
	angular.module("my-app",[])
	.controller("my-controller",Ctrl)
	.service("serviceName",serviceFunction);

	Ctrl.$inject = ['serviceName'];
	function Ctrl(serviceName){
		var ctrl = this;
		ctrl.x = "hello";
		ctrl.transfer = function(itemIndex){
			serviceName.transferItems(itemIndex);
		};
		ctrl.itemsToBuy = serviceName.getToBuyItems();
		ctrl.itemsBought = serviceName.getBoughtItems();
	}

	function serviceFunction(){
		var service = this;
		var itemsToBuy = [{
			name:"Pancakes",
			quantity:"3"
		},{
			name:"Icecreams",
			quantity:"4"
		},{
			name:"Kurkure",
			quantity:"1"
		},{
			name:"Lays",
			quantity:"2"
		}];
		var itemsBought = [];
		service.getToBuyItems = function(){
			return itemsToBuy;
		};
		service.getBoughtItems = function(){
			return itemsBought;
		};
		service.transferItems = function(itemIndex){
			itemsBought.push(itemsToBuy[itemIndex]);
			itemsToBuy.splice(itemIndex,1);
		};
	}
})();