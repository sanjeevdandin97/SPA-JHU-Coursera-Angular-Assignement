(function() {
    'use strict';

    angular.module('RestaurantApp')
        .component('items', {
            templateUrl: 'src/items/templates/items.component.html',
            bindings: {
                items: '<'
            }
        });
})();
