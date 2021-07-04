(function (){
	'use strict';

	angular.module('Assignment2App',[])
	.controller('ToBuyController',ToBuyController)
	.controller('BoughtController',BoughtController)
	.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

	ToBuyController.$inject = ['ShoppingListCheckOffService'];
	BoughtController.$inject = ['ShoppingListCheckOffService'];

	function ToBuyController(ShoppingListCheckOffService){
		var showToBuyList = this;

		showToBuyList.showToBuyListData = ShoppingListCheckOffService.getToBuyItems();

		showToBuyList.popnpushItems = function (itemIndex, itemName, itemQuantity){
			ShoppingListCheckOffService.popnpushItems(itemIndex, itemName, itemQuantity);
		}

		showToBuyList.buyListError = ShoppingListCheckOffService.getBuyListError();
	}

	function BoughtController(ShoppingListCheckOffService){
		var showBoughtList = this;

		showBoughtList.showBoughtListData = ShoppingListCheckOffService.getBoughtItems();

		showBoughtList.boughtListError = ShoppingListCheckOffService.getBoughtListError();
	}

	function ShoppingListCheckOffService(){
		var service = this;

		var showToBuyList  = [
			{name:'Cookies', quantity:10}, {name:'Chocolates',quantity:5},
			{name:'Candies',quantity:3}, {name:'Lollipop',quantity:8},
			{name:'Bubble Gum', quantity:1}
		];

		var buyListError = [false];
		var boughtListError = [true];

		var showBoughtList = [];

		service.popnpushItems = function (itemIndex, itemName, itemQuantity){
			var item = {name:itemName, quantity:itemQuantity};

			showBoughtList.push(item);
			showToBuyList.splice(itemIndex, 1);

			if(showToBuyList.length == 0 ){
				buyListError[0] = true;
			}

			if(showBoughtList.length >= 1){
				boughtListError[0] = false;
			}
		};

		service.getToBuyItems = function (){
			return showToBuyList;
		};

		service.getBoughtItems = function(){
			return showBoughtList;
		};

		service.getBuyListError = function (){
			return buyListError;
		};

		service.getBoughtListError = function (){
			return boughtListError;
		};
	}


})();