(function() {
    'use strict';

    angular.module('RestaurantApp').controller('itemsController', itemsController);

    itemsController.$inject = ['$stateParams', 'CategoriesService', 'items'];

    function itemsController($stateParams, CategoriesService, items) {
        var itemsCtrl = this;
        itemsCtrl.items = items;
        
        itemsCtrl.categoryName = $stateParams.categoryName;
    }
})();
